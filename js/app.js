/* ============================================================
   AIO MangaVerse — shared app logic
   Loaded on every page, after data.js and the Supabase UMD script.
   Handles: nav/footer injection, real Supabase auth, library/reviews/
   progress/discover-tracking backed by Postgres tables (with RLS),
   search, toasts, and small render helpers reused across pages.

   Data model (see Supabase project "AioMangaVerse"):
     profiles           — id (=auth.users.id), username
     library            — user_id, anime_slug, status, rating
     reviews            — id, user_id, anime_slug, body, created_at
     progress           — user_id, anime_slug, item_key ("seasonIdx-chapIdx")
     external_tracking  — user_id, mal_id, title, image_url, mal_url

   Everything above requires a logged-in user (RLS is keyed on auth.uid()).
   "Recently viewed" is the one exception — it stays in localStorage,
   since it's just a per-browser convenience, not account data.
   ============================================================ */

const MV = (() => {
  const SUPABASE_URL = "https://nmqgidutarvdmkmhprcq.supabase.co";
  const SUPABASE_ANON_KEY =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5tcWdpZHV0YXJ2ZG1rbWhwcmNxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTUxNjI4MDQsImV4cCI6MjExMDczODgwNH0.0wdJ1gluddnHj4c63zxPUoa_U1wCLFJ3JBhhD_7_c7g";

  const sb = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

  const LS_RECENT = "mv_recent"; // [slug, slug, ...] most recent first — device-local only

  /* ---------------- storage helpers (recently-viewed only) ---------------- */
  function readJSON(key, fallback) {
    try {
      const raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : fallback;
    } catch (e) {
      return fallback;
    }
  }
  function writeJSON(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  /* ---------------- in-memory state, hydrated from Supabase ---------------- */
  let currentUser = null; // Supabase auth user, or null
  let currentProfile = null; // { id, username }
  let libraryCache = {}; // { slug: { status, rating } }
  let externalCache = {}; // { malId: { title, image, url, addedAt } }

  async function loadUserData() {
    const {
      data: { user },
    } = await sb.auth.getUser();
    currentUser = user || null;

    if (!currentUser) {
      currentProfile = null;
      libraryCache = {};
      externalCache = {};
      return;
    }

    const [{ data: profile }, { data: libRows }, { data: extRows }] = await Promise.all([
      sb.from("profiles").select("id, username").eq("id", currentUser.id).maybeSingle(),
      sb.from("library").select("anime_slug, status, rating"),
      sb.from("external_tracking").select("mal_id, title, image_url, mal_url, added_at"),
    ]);

    currentProfile = profile || null;

    libraryCache = {};
    (libRows || []).forEach((r) => {
      libraryCache[r.anime_slug] = { status: r.status, rating: r.rating || 0 };
    });

    externalCache = {};
    (extRows || []).forEach((r) => {
      externalCache[r.mal_id] = {
        title: r.title,
        image: r.image_url,
        url: r.mal_url,
        addedAt: r.added_at ? new Date(r.added_at).getTime() : Date.now(),
      };
    });
  }

  // Every page should `await MV.ready` before reading library/session state
  // for its own rendering (nav does this internally via init()).
  const ready = loadUserData().catch((e) => console.error("MV: failed to load user data", e));

  sb.auth.onAuthStateChange((event) => {
    if (event === "SIGNED_OUT") {
      currentUser = null;
      currentProfile = null;
      libraryCache = {};
      externalCache = {};
    } else if (event === "SIGNED_IN") {
      loadUserData().catch((e) => console.error("MV: failed to load user data", e));
    }
  });

  /* ---------------- auth (real Supabase Auth) ---------------- */
  function getSession() {
    if (!currentUser) return null;
    return {
      id: currentUser.id,
      email: currentUser.email,
      username: currentProfile?.username || (currentUser.email ? currentUser.email.split("@")[0] : "user"),
      createdAt: currentUser.created_at,
    };
  }

  async function signup(username, email, password) {
    username = (username || "").trim();
    email = (email || "").trim();
    if (!username || !email || !password) return { ok: false, error: "All fields are required." };

    const { data, error } = await sb.auth.signUp({
      email,
      password,
      options: { data: { username } },
    });
    if (error) return { ok: false, error: error.message };

    if (!data.session) {
      // Email confirmation is on for this project — no session yet.
      return { ok: true, needsConfirmation: true };
    }
    await loadUserData();
    return { ok: true };
  }

  async function login(email, password) {
    const { error } = await sb.auth.signInWithPassword({ email: (email || "").trim(), password });
    if (error) {
      if (/email not confirmed/i.test(error.message)) {
        return { ok: false, error: "Almost there — confirm your email via the link we sent to your Gmail inbox, then log in." };
      }
      return { ok: false, error: error.message };
    }
    await loadUserData();
    return { ok: true };
  }

  async function logout() {
    await sb.auth.signOut();
    currentUser = null;
    currentProfile = null;
    libraryCache = {};
    externalCache = {};
  }

  /* ---------------- library (bookmarks / status / ratings) ---------------- */
  function getLibrary() {
    return libraryCache;
  }
  function isBookmarked(slug) {
    return !!libraryCache[slug];
  }
  function getEntry(slug) {
    return libraryCache[slug] || null;
  }

  async function toggleBookmark(slug) {
    if (!currentUser) {
      toast("Log in to save titles to your library");
      return false;
    }
    if (libraryCache[slug]) {
      const backup = libraryCache[slug];
      delete libraryCache[slug];
      const { error } = await sb.from("library").delete().eq("user_id", currentUser.id).eq("anime_slug", slug);
      if (error) {
        libraryCache[slug] = backup;
        toast("Couldn't update your library");
        return true;
      }
      return false;
    }
    libraryCache[slug] = { status: "Plan to Read", rating: 0 };
    const { error } = await sb
      .from("library")
      .upsert(
        { user_id: currentUser.id, anime_slug: slug, status: "Plan to Read" },
        { onConflict: "user_id,anime_slug" }
      );
    if (error) {
      delete libraryCache[slug];
      toast("Couldn't update your library");
      return false;
    }
    return true;
  }

  async function setStatus(slug, status) {
    if (!currentUser) {
      toast("Log in to track your reading status");
      return;
    }
    const prev = libraryCache[slug] ? { ...libraryCache[slug] } : null;
    const entry = libraryCache[slug] || { status, rating: 0 };
    entry.status = status;
    libraryCache[slug] = entry;
    const { error } = await sb
      .from("library")
      .upsert(
        { user_id: currentUser.id, anime_slug: slug, status, rating: entry.rating || null },
        { onConflict: "user_id,anime_slug" }
      );
    if (error) {
      if (prev) libraryCache[slug] = prev; else delete libraryCache[slug];
      toast("Couldn't update status");
    }
  }

  async function setRating(slug, rating) {
    if (!currentUser) {
      toast("Log in to rate titles");
      return;
    }
    const prev = libraryCache[slug] ? { ...libraryCache[slug] } : null;
    const entry = libraryCache[slug] || { status: "Plan to Read", rating };
    entry.rating = rating;
    libraryCache[slug] = entry;
    const { error } = await sb
      .from("library")
      .upsert(
        { user_id: currentUser.id, anime_slug: slug, status: entry.status, rating },
        { onConflict: "user_id,anime_slug" }
      );
    if (error) {
      if (prev) libraryCache[slug] = prev; else delete libraryCache[slug];
      toast("Couldn't save rating");
    }
  }

  /* ---------------- recently viewed (device-local only, no table) ---------------- */
  function addRecentlyViewed(slug) {
    let list = readJSON(LS_RECENT, []);
    list = [slug, ...list.filter((s) => s !== slug)].slice(0, 12);
    writeJSON(LS_RECENT, list);
  }
  function getRecentlyViewed() {
    const list = readJSON(LS_RECENT, []);
    return list.map((s) => findBySlug(s)).filter(Boolean);
  }

  /* ---------------- arc / chapter progress ---------------- */
  async function getProgress(slug) {
    if (!currentUser) return {};
    const { data, error } = await sb
      .from("progress")
      .select("item_key")
      .eq("user_id", currentUser.id)
      .eq("anime_slug", slug);
    if (error) {
      console.error(error);
      return {};
    }
    const map = {};
    (data || []).forEach((r) => (map[r.item_key] = true));
    return map;
  }

  // Caller already knows the checkbox's new state from the change event,
  // so this sets it directly rather than toggling blind.
  async function setProgressItem(slug, itemKey, done) {
    if (!currentUser) {
      toast("Log in to track your reading progress");
      return;
    }
    if (done) {
      const { error } = await sb.from("progress").upsert(
        { user_id: currentUser.id, anime_slug: slug, item_key: itemKey },
        { onConflict: "user_id,anime_slug,item_key" }
      );
      if (error) toast("Couldn't save progress");
    } else {
      const { error } = await sb
        .from("progress")
        .delete()
        .eq("user_id", currentUser.id)
        .eq("anime_slug", slug)
        .eq("item_key", itemKey);
      if (error) toast("Couldn't update progress");
    }
  }

  function computeProgressStats(anime, doneMap) {
    if (!anime.arcs) return null;
    let total = 0;
    let read = 0;
    anime.arcs.forEach((season, si) => {
      season.chapters.forEach((ch, ci) => {
        total++;
        if (doneMap[si + "-" + ci]) read++;
      });
    });
    return { total, read, pct: total ? Math.round((read / total) * 100) : 0 };
  }

  /* ---------------- external (Discover) tracking ---------------- */
  function getExternal() {
    return externalCache;
  }
  function isExternalTracked(id) {
    return !!externalCache[id];
  }
  async function toggleExternal(id, data) {
    if (!currentUser) {
      toast("Log in to track titles from Discover");
      return false;
    }
    if (externalCache[id]) {
      const backup = externalCache[id];
      delete externalCache[id];
      const { error } = await sb.from("external_tracking").delete().eq("user_id", currentUser.id).eq("mal_id", id);
      if (error) {
        externalCache[id] = backup;
        toast("Couldn't update tracking");
        return true;
      }
      return false;
    }
    externalCache[id] = { ...data, addedAt: Date.now() };
    const { error } = await sb.from("external_tracking").upsert(
      {
        user_id: currentUser.id,
        mal_id: id,
        title: data.title,
        image_url: data.image,
        mal_url: data.url,
      },
      { onConflict: "user_id,mal_id" }
    );
    if (error) {
      delete externalCache[id];
      toast("Couldn't update tracking");
      return false;
    }
    return true;
  }

  /* ---------------- export / import (backup your account data) ---------------- */
  async function exportData() {
    if (!currentUser) return JSON.stringify({ error: "Not logged in" }, null, 2);
    const [{ data: library }, { data: progress }, { data: external }, { data: reviews }] = await Promise.all([
      sb.from("library").select("anime_slug, status, rating, added_at"),
      sb.from("progress").select("anime_slug, item_key, completed_at"),
      sb.from("external_tracking").select("mal_id, title, image_url, mal_url, added_at"),
      sb.from("reviews").select("anime_slug, body, created_at"),
    ]);
    return JSON.stringify(
      {
        exportedAt: new Date().toISOString(),
        account: getSession(),
        library: library || [],
        progress: progress || [],
        external: external || [],
        reviews: reviews || [],
        recentlyViewed: readJSON(LS_RECENT, []),
      },
      null,
      2
    );
  }

  async function importData(json) {
    if (!currentUser) return { ok: false, error: "Log in first, then import your backup." };
    let data;
    try {
      data = JSON.parse(json);
    } catch (e) {
      return { ok: false, error: "That file isn't valid JSON." };
    }
    if (!data || typeof data !== "object") return { ok: false, error: "Unrecognized backup file." };

    try {
      if (Array.isArray(data.library) && data.library.length) {
        await sb.from("library").upsert(
          data.library.map((r) => ({
            user_id: currentUser.id,
            anime_slug: r.anime_slug,
            status: r.status || "Plan to Read",
            rating: r.rating || null,
          })),
          { onConflict: "user_id,anime_slug" }
        );
      }
      if (Array.isArray(data.progress) && data.progress.length) {
        await sb.from("progress").upsert(
          data.progress.map((r) => ({
            user_id: currentUser.id,
            anime_slug: r.anime_slug,
            item_key: r.item_key,
          })),
          { onConflict: "user_id,anime_slug,item_key" }
        );
      }
      if (Array.isArray(data.external) && data.external.length) {
        await sb.from("external_tracking").upsert(
          data.external.map((r) => ({
            user_id: currentUser.id,
            mal_id: r.mal_id,
            title: r.title,
            image_url: r.image_url,
            mal_url: r.mal_url,
          })),
          { onConflict: "user_id,mal_id" }
        );
      }
      // Reviews aren't re-imported (no natural unique key to upsert on,
      // and inserting would risk duplicating existing reviews).
      if (data.recentlyViewed) writeJSON(LS_RECENT, data.recentlyViewed);
      await loadUserData();
      return { ok: true };
    } catch (e) {
      return { ok: false, error: e.message || "Import failed." };
    }
  }

  /* ---------------- reviews (per-title, real accounts) ---------------- */
  async function getReviews(slug) {
    const { data, error } = await sb
      .from("reviews")
      .select("id, body, created_at, profiles(username)")
      .eq("anime_slug", slug)
      .order("created_at", { ascending: false });
    if (error) {
      console.error(error);
      return [];
    }
    return (data || []).map((r) => ({
      id: r.id,
      author: r.profiles?.username || "MangaVerse reader",
      text: r.body,
      date: r.created_at.slice(0, 10),
    }));
  }

  async function addReview(slug, text) {
    if (!currentUser) return { ok: false, error: "Log in to leave a review." };
    const body = (text || "").trim();
    if (!body) return { ok: false, error: "Write something before posting." };
    const { error } = await sb.from("reviews").insert({ user_id: currentUser.id, anime_slug: slug, body });
    if (error) return { ok: false, error: error.message };
    return { ok: true };
  }

  /* ---------------- toast ---------------- */
  function toast(message) {
    let el = document.querySelector(".toast");
    if (!el) {
      el = document.createElement("div");
      el.className = "toast";
      document.body.appendChild(el);
    }
    el.textContent = message;
    el.classList.add("show");
    clearTimeout(el._t);
    el._t = setTimeout(() => el.classList.remove("show"), 2200);
  }

  /* ---------------- data helpers ---------------- */
  function findBySlug(slug) {
    return ANIME_DATA.find((a) => a.slug === slug) || null;
  }
  function slugify(str) {
    return str.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
  }
  function escapeHTML(str) {
    return String(str == null ? "" : str).replace(/[&<>"']/g, (c) => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    }[c]));
  }

  /* ---------------- render helpers ---------------- */
  function starsHTML(rating) {
    const full = Math.round(rating);
    let out = "";
    for (let i = 1; i <= 5; i++) out += i <= full ? "\u2605" : "\u2606";
    return out;
  }

  function cardHTML(a, opts = {}) {
    const badge = opts.badge ? `<span class="card__badge">${escapeHTML(opts.badge)}</span>` : "";
    const bookmarked = isBookmarked(a.slug);
    return `
      <a href="detail.html?slug=${encodeURIComponent(a.slug)}" class="card">
        <div class="card__thumb">
          <img src="${a.image}" alt="${escapeHTML(a.title)} cover" loading="lazy">
          ${badge}
          <span class="card__rating">${a.rating.toFixed(1)} \u2605</span>
          <button type="button" class="card__bookmark" data-slug="${a.slug}" data-active="${bookmarked}" aria-label="Toggle bookmark for ${escapeHTML(a.title)}" title="Add to My Library">${bookmarked ? "\u2713" : "+"}</button>
        </div>
        <div class="card__body">
          <div class="card__title">${escapeHTML(a.title)}</div>
          <div class="card__meta">${escapeHTML(a.type)} \u00b7 ${escapeHTML(a.status)}</div>
          <div class="card__genres">
            ${a.genres.slice(0, 2).map((g) => `<span class="tag">${escapeHTML(g)}</span>`).join("")}
          </div>
        </div>
      </a>`;
  }

  function renderGrid(container, list, opts = {}) {
    if (!container) return;
    if (!list.length) {
      container.innerHTML = `
        <div class="empty-state" style="grid-column:1/-1">
          <h3>No titles found</h3>
          <p>Try a different genre, or clear your search and browse the full catalog instead.</p>
          <a class="btn btn--accent" href="browse.html">Browse all titles</a>
        </div>`;
      return;
    }
    container.innerHTML = list.map((a) => cardHTML(a, opts)).join("");
    bindBookmarkButtons(container);
  }

  function bindBookmarkButtons(scope) {
    (scope || document).querySelectorAll(".card__bookmark").forEach((btn) => {
      btn.addEventListener("click", async (e) => {
        e.preventDefault();
        e.stopPropagation();
        const slug = btn.dataset.slug;
        const active = await toggleBookmark(slug);
        btn.dataset.active = active;
        btn.textContent = active ? "\u2713" : "+";
        toast(active ? "Added to My Library" : "Removed from My Library");
      });
    });
  }

  /* ---------------- nav + footer ---------------- */
  function currentPage() {
    const p = location.pathname.split("/").pop() || "index.html";
    return p;
  }

  function genreLinks() {
    return ALL_GENRES.map(
      (g) => `<a href="browse.html?genre=${encodeURIComponent(g)}">${g}</a>`
    ).join("");
  }

  function topbarHTML() {
    const msg = `NOW TRACKING ${ANIME_DATA.length} TITLES &middot; NEW: CHAINSAW MAN JUST ADDED &middot; YOUR LIBRARY SYNCS TO YOUR ACCOUNT &middot; MADE BY FANS, FOR FANS`;
    return `
      <div class="topbar">
        <div class="topbar__track">
          <span>${msg}</span>
          <span>${msg}</span>
        </div>
      </div>`;
  }

  // Shown immediately on page load, before we know whether there's a
  // logged-in session — avoids a flash of "logged out" state while the
  // real Supabase session/library fetch (MV.ready) is still in flight.
  function renderNavSkeleton() {
    const mount = document.getElementById("site-nav");
    if (!mount) return;
    mount.innerHTML = `
      ${topbarHTML()}
      <nav class="navbar">
        <div class="navbar__inner">
          <a href="index.html" class="brand">AIO Manga<em>Verse</em></a>
          <button class="nav-toggle" id="navToggle" aria-label="Toggle menu" aria-expanded="false">MENU</button>
          <div class="nav-skeleton-links" aria-hidden="true">
            <span class="nav-skeleton-bar"></span>
            <span class="nav-skeleton-bar"></span>
            <span class="nav-skeleton-bar"></span>
            <span class="nav-skeleton-bar"></span>
          </div>
          <span class="nav-skeleton-bar nav-skeleton-search" aria-hidden="true"></span>
          <span class="nav-skeleton-bar nav-skeleton-auth" aria-hidden="true"></span>
        </div>
      </nav>`;
  }

  function renderNav() {
    const mount = document.getElementById("site-nav");
    if (!mount) return;
    const page = currentPage();
    const session = getSession();
    const isActive = (p) => (page === p ? "active" : "");

    mount.innerHTML = `
      ${topbarHTML()}
      <nav class="navbar">
        <div class="navbar__inner">
          <a href="index.html" class="brand">AIO Manga<em>Verse</em></a>
          <button class="nav-toggle" id="navToggle" aria-label="Toggle menu" aria-expanded="false">MENU</button>
          <div class="nav-links" id="navLinks">
            <a href="index.html" class="${isActive("index.html")}">Home</a>
            <div class="nav-dropdown" id="genreDropdown">
              <button type="button" class="nav-link-btn" aria-haspopup="true" aria-expanded="false" id="genreDropdownToggle">Genres \u25be</button>
              <div class="nav-dropdown__menu">${genreLinks()}</div>
            </div>
            <a href="browse.html" class="${isActive("browse.html")}">Browse All</a>
            <a href="discover.html" class="${isActive("discover.html")}">Discover</a>
            <a href="library.html" class="${isActive("library.html")}">My Library</a>
          </div>
          <form class="nav-search" id="navSearchForm" role="search">
            <input type="search" id="navSearchInput" placeholder="Search titles&hellip;" aria-label="Search titles">
            <button type="submit">Go</button>
          </form>
          <div class="nav-auth">
            ${
              session
                ? `<a href="profile.html" class="chip" style="text-decoration:none;">${escapeHTML(session.username)}</a><button class="btn btn--sm btn--ghost" id="logoutBtn" type="button">Log out</button>`
                : `<a href="login.html" class="btn btn--sm btn--accent">Login / Sign Up</a>`
            }
          </div>
        </div>
      </nav>`;

    document.getElementById("navToggle")?.addEventListener("click", () => {
      const links = document.getElementById("navLinks");
      const open = links.classList.toggle("open");
      document.getElementById("navToggle").setAttribute("aria-expanded", String(open));
    });

    const genreDropdown = document.getElementById("genreDropdown");
    const genreToggle = document.getElementById("genreDropdownToggle");
    genreToggle?.addEventListener("click", (e) => {
      e.stopPropagation();
      const open = genreDropdown.classList.toggle("open");
      genreToggle.setAttribute("aria-expanded", String(open));
    });
    document.addEventListener("click", (e) => {
      if (genreDropdown && !genreDropdown.contains(e.target)) {
        genreDropdown.classList.remove("open");
        genreToggle?.setAttribute("aria-expanded", "false");
      }
    });

    document.getElementById("logoutBtn")?.addEventListener("click", async () => {
      await logout();
      toast("Logged out");
      setTimeout(() => location.reload(), 400);
    });

    document.getElementById("navSearchForm")?.addEventListener("submit", (e) => {
      e.preventDefault();
      const q = document.getElementById("navSearchInput").value.trim();
      location.href = "browse.html?q=" + encodeURIComponent(q);
    });
  }

  function renderFooter() {
    const mount = document.getElementById("site-footer");
    if (!mount) return;
    const genres = ALL_GENRES.slice(0, 8);
    mount.innerHTML = `
      <footer class="site-footer">
        <div class="container">
          <div>
            <a href="index.html" class="brand" style="color:var(--paper)">AIO Manga<em>Verse</em></a>
            <p style="margin-top:12px;max-width:34ch;font-size:0.88rem;">
              A fan-run catalog and tracker for manga and anime &mdash; browse by genre,
              keep a personal library, and rate what you've read. Built as a passion
              project, grown one title at a time.
            </p>
          </div>
          <div>
            <h4>Explore</h4>
            <ul>
              <li><a href="browse.html">Browse all titles</a></li>
              <li><a href="browse.html?sort=rating">Top rated</a></li>
              <li><a href="library.html">My Library</a></li>
              <li><a href="about.html">About this project</a></li>
            </ul>
          </div>
          <div>
            <h4>Genres</h4>
            <ul>
              ${genres.map((g) => `<li><a href="browse.html?genre=${encodeURIComponent(g)}">${g}</a></li>`).join("")}
            </ul>
          </div>
          <div>
            <h4>Account</h4>
            <ul>
              <li><a href="login.html">Login / Sign up</a></li>
              <li><a href="library.html">My reading status</a></li>
              <li><a href="about.html#contact">Contact</a></li>
            </ul>
          </div>
        </div>
        <div class="footer-bottom">
          &copy; ${new Date().getFullYear()} AIO MangaVerse &mdash; a fan project. All series, titles and artwork remain the property of their original creators and publishers.
        </div>
      </footer>`;
  }

  async function init() {
    renderNavSkeleton();
    renderFooter();
    await ready;
    renderNav();
  }

  return {
    ready,
    getSession, signup, login, logout,
    getLibrary, isBookmarked, toggleBookmark, setStatus, setRating, getEntry,
    getReviews, addReview,
    addRecentlyViewed, getRecentlyViewed,
    getProgress, setProgressItem, computeProgressStats,
    getExternal, toggleExternal, isExternalTracked,
    exportData, importData,
    toast, findBySlug, slugify, escapeHTML,
    starsHTML, cardHTML, renderGrid, bindBookmarkButtons,
    init,
  };
})();

document.addEventListener("DOMContentLoaded", MV.init);