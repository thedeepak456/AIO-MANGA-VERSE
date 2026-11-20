-- ============================================================
-- AIO MangaVerse — initial schema
-- ============================================================
create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  username text check (char_length(username) between 1 and 40),
  created_at timestamptz not null default now()
);
create table if not exists public.library (
  user_id uuid not null references auth.users(id) on delete cascade,
  anime_slug text not null check (char_length(anime_slug) between 1 and 80),
  status text not null default 'Plan to Read'
    check (status in ('Plan to Read','Reading','Completed','Dropped')),
  rating int check (rating is null or (rating between 1 and 5)),
  added_at timestamptz not null default now(),
  primary key (user_id, anime_slug)
);
create table if not exists public.reviews (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  anime_slug text not null check (char_length(anime_slug) between 1 and 80),
  body text not null check (char_length(body) between 1 and 2000),
  created_at timestamptz not null default now()
);
create index if not exists reviews_slug_created_idx on public.reviews (anime_slug, created_at desc);
create table if not exists public.progress (
  user_id uuid not null references auth.users(id) on delete cascade,
  anime_slug text not null check (char_length(anime_slug) between 1 and 80),
  item_key text not null check (char_length(item_key) between 1 and 40),
  completed_at timestamptz not null default now(),
  primary key (user_id, anime_slug, item_key)
);
create table if not exists public.external_tracking (
  user_id uuid not null references auth.users(id) on delete cascade,
  mal_id bigint not null,
  title text check (char_length(title) <= 200),
  image_url text check (char_length(image_url) <= 500),
  mal_url text check (char_length(mal_url) <= 500),
  added_at timestamptz not null default now(),
  primary key (user_id, mal_id)
);
alter table public.profiles enable row level security;
alter table public.library enable row level security;
alter table public.reviews enable row level security;
alter table public.progress enable row level security;
alter table public.external_tracking enable row level security;
