-- Seed Classes
insert into public.classes (name, description, intensity, temperature, duration) values
('Hatha Flow', 'A balanced practice focusing on alignment and breath. Perfect for building a strong foundation.', 'Moderate', 'Normal', 60),
('Vinyasa', 'Dynamic flow linking breath with movement. Expect to sweat and challenge your coordination.', 'High', 'Warm (28°C)', 60),
('Ashtanga', 'Traditional sequence of postures. Disciplined, rigorous, and meditative.', 'Very High', 'Normal', 90),
('Yin Yoga', 'Slow-paced style with poses held for longer periods. Targets deep connective tissues.', 'Low', 'Normal', 60),
('Power Yoga', 'Strength-based practice designed to build muscle and endurance.', 'High', 'Hot (32°C)', 45),
('Restorative', 'Gentle practice using props to support the body in positions of ease and comfort.', 'Low', 'Normal', 60);

-- Seed Instructors
insert into public.instructors (name, bio, specialty, image_url) values
('Sarah J.', 'Certified Hatha instructor with 10 years of experience.', 'Hatha', 'bg-gray-300'),
('Michael R.', 'Former gymnast turned Ashtanga practitioner.', 'Ashtanga', 'bg-gray-400'),
('Priya K.', 'Specializes in alignment and therapeutic yoga.', 'Vinyasa', 'bg-gray-500'),
('David L.', 'Focuses on strength and conditioning.', 'Power', 'bg-gray-600');

-- Seed Schedule (Example Data - You would need to map UUIDs in a real script, but for SQL Editor usage, we can use subqueries or just manual entry. Here is a conceptual seed using CTEs for safety)

WITH 
  c_hatha AS (SELECT id FROM public.classes WHERE name = 'Hatha Flow' LIMIT 1),
  c_vinyasa AS (SELECT id FROM public.classes WHERE name = 'Vinyasa' LIMIT 1),
  c_ashtanga AS (SELECT id FROM public.classes WHERE name = 'Ashtanga' LIMIT 1),
  c_power AS (SELECT id FROM public.classes WHERE name = 'Power Yoga' LIMIT 1),
  i_sarah AS (SELECT id FROM public.instructors WHERE name = 'Sarah J.' LIMIT 1),
  i_michael AS (SELECT id FROM public.instructors WHERE name = 'Michael R.' LIMIT 1),
  i_priya AS (SELECT id FROM public.instructors WHERE name = 'Priya K.' LIMIT 1),
  i_david AS (SELECT id FROM public.instructors WHERE name = 'David L.' LIMIT 1)

INSERT INTO public.schedule (class_id, instructor_id, day_of_week, start_time) VALUES
  ((SELECT id FROM c_hatha), (SELECT id FROM i_sarah), 'Monday', '07:00'),
  ((SELECT id FROM c_vinyasa), (SELECT id FROM i_priya), 'Monday', '09:00'),
  ((SELECT id FROM c_power), (SELECT id FROM i_david), 'Monday', '12:00'),
  ((SELECT id FROM c_ashtanga), (SELECT id FROM i_michael), 'Monday', '16:00'),
  
  ((SELECT id FROM c_vinyasa), (SELECT id FROM i_priya), 'Tuesday', '07:00'),
  ((SELECT id FROM c_hatha), (SELECT id FROM i_sarah), 'Tuesday', '09:00'),
  ((SELECT id FROM c_ashtanga), (SELECT id FROM i_michael), 'Tuesday', '12:00'),
  ((SELECT id FROM c_power), (SELECT id FROM i_david), 'Tuesday', '16:00');
