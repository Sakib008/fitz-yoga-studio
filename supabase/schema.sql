-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- 1. Classes Table
create table public.classes (
  id uuid default uuid_generate_v4() primary key,
  name text not null,
  description text,
  intensity text, -- 'Low', 'Moderate', 'High', 'Very High'
  temperature text, -- 'Normal', 'Warm', 'Hot'
  duration int not null, -- in minutes
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 2. Instructors Table
create table public.instructors (
  id uuid default uuid_generate_v4() primary key,
  name text not null,
  bio text,
  specialty text,
  image_url text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 3. Schedule Table
create table public.schedule (
  id uuid default uuid_generate_v4() primary key,
  class_id uuid references public.classes(id) not null,
  instructor_id uuid references public.instructors(id) not null,
  day_of_week text not null, -- 'Monday', 'Tuesday', etc.
  start_time time not null,
  capacity int default 20,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 4. Bookings Table
create table public.bookings (
  id uuid default uuid_generate_v4() primary key,
  schedule_id uuid references public.schedule(id) not null,
  user_name text not null,
  user_email text not null,
  status text default 'confirmed', -- 'confirmed', 'cancelled'
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 5. Messages Table (Contact Form)
create table public.messages (
  id uuid default uuid_generate_v4() primary key,
  name text not null,
  email text not null,
  message text not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable Row Level Security (RLS)
alter table public.classes enable row level security;
alter table public.instructors enable row level security;
alter table public.schedule enable row level security;
alter table public.bookings enable row level security;
alter table public.messages enable row level security;

-- Create Policies (Public Read, Anon Insert for Bookings/Messages)
create policy "Public classes are viewable by everyone" on public.classes for select using (true);
create policy "Public instructors are viewable by everyone" on public.instructors for select using (true);
create policy "Public schedule is viewable by everyone" on public.schedule for select using (true);

-- Allow anyone to create a booking
create policy "Anyone can create a booking" on public.bookings for insert with check (true);

-- Allow anyone to send a message
create policy "Anyone can send a message" on public.messages for insert with check (true);
