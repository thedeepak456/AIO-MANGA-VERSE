-- ============================================================
-- AIO MangaVerse — initial schema
-- Run in the Supabase SQL editor (or via supabase db push).
-- ============================================================

-- ---------- profiles ----------
create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  username text check (char_length(username) between 1 and 40),
  created_at timestamptz not null default now()
);

-- ---------- library ----------
create table if not exists public.library (
  user_id uuid not null references auth.users(id) on delete cascade,
  anime_slug text not null check (char_length(anime_slug) between 1 and 80),
  status text not null default 'Plan to Read'
    check (status in ('Plan to Read','Reading','Completed','Dropped')),
  rating int check (rating is null or (rating between 1 and 5)),
  added_at timestamptz not null default now(),
  primary key (user_id, anime_slug)
);

-- ---------- reviews ----------
create table if not exists public.reviews (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  anime_slug text not null check (char_length(anime_slug) between 1 and 80),
  body text not null check (char_length(body) between 1 and 2000),
  created_at timestamptz not null default now()
);
create index if not exists reviews_slug_created_idx
  on public.reviews (anime_slug, created_at desc);

-- ---------- progress ----------
create table if not exists public.progress (
  user_id uuid not null references auth.users(id) on delete cascade,
  anime_slug text not null check (char_length(anime_slug) between 1 and 80),
  item_key text not null check (char_length(item_key) between 1 and 40),
  completed_at timestamptz not null default now(),
  primary key (user_id, anime_slug, item_key)
);

-- ---------- external tracking ----------
create table if not exists public.external_tracking (
  user_id uuid not null references auth.users(id) on delete cascade,
  mal_id bigint not null,
  title text check (char_length(title) <= 200),
  image_url text check (char_length(image_url) <= 500),
  mal_url text check (char_length(mal_url) <= 500),
  added_at timestamptz not null default now(),
  primary key (user_id, mal_id)
);

-- ---------- RLS ----------
alter table public.profiles enable row level security;
alter table public.library enable row level security;
alter table public.reviews enable row level security;
alter table public.progress enable row level security;
alter table public.external_tracking enable row level security;

-- profiles: only the owner can read/write their row
create policy "profiles_select_own" on public.profiles
  for select using (auth.uid() = id);
create policy "profiles_insert_own" on public.profiles
  for insert with check (auth.uid() = id);
create policy "profiles_update_own" on public.profiles
  for update using (auth.uid() = id);

-- library: owner only
create policy "library_all_own" on public.library
  for all using (auth.uid() = user_id) with check (auth.uid() = user_id);

-- reviews: anyone can read, only owner can insert/delete their own
create policy "reviews_select_all" on public.reviews
  for select using (true);
create policy "reviews_insert_own" on public.reviews
  for insert with check (auth.uid() = user_id);
create policy "reviews_delete_own" on public.reviews
  for delete using (auth.uid() = user_id);

-- progress: owner only
create policy "progress_all_own" on public.progress
  for all using (auth.uid() = user_id) with check (auth.uid() = user_id);

-- external_tracking: owner only
create policy "external_all_own" on public.external_tracking
  for all using (auth.uid() = user_id) with check (auth.uid() = user_id);

-- ---------- signup trigger ----------
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.profiles (id, username)
  values (new.id, new.raw_user_meta_data->>'username')
  on conflict (id) do nothing;
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();
