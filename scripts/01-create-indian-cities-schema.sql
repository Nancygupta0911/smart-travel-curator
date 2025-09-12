-- Create database schema for Indian cities travel data
CREATE TABLE IF NOT EXISTS cities (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  state VARCHAR(100) NOT NULL,
  description TEXT,
  best_time_to_visit VARCHAR(200),
  famous_for TEXT[],
  latitude DECIMAL(10, 8),
  longitude DECIMAL(11, 8),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS attractions (
  id SERIAL PRIMARY KEY,
  city_id INTEGER REFERENCES cities(id),
  name VARCHAR(200) NOT NULL,
  type VARCHAR(50), -- temple, monument, park, etc.
  description TEXT,
  entry_fee INTEGER DEFAULT 0,
  opening_hours VARCHAR(100),
  latitude DECIMAL(10, 8),
  longitude DECIMAL(11, 8),
  rating DECIMAL(3, 2) DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS local_foods (
  id SERIAL PRIMARY KEY,
  city_id INTEGER REFERENCES cities(id),
  name VARCHAR(200) NOT NULL,
  description TEXT,
  type VARCHAR(50), -- street_food, restaurant, sweet, etc.
  famous_location VARCHAR(300),
  price_range VARCHAR(50),
  latitude DECIMAL(10, 8),
  longitude DECIMAL(11, 8),
  rating DECIMAL(3, 2) DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS transport_costs (
  id SERIAL PRIMARY KEY,
  city_id INTEGER REFERENCES cities(id),
  vehicle_type VARCHAR(50), -- auto, taxi, bus, metro, etc.
  base_fare INTEGER,
  per_km_rate DECIMAL(5, 2),
  description TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS cultural_info (
  id SERIAL PRIMARY KEY,
  city_id INTEGER REFERENCES cities(id),
  festivals TEXT[],
  languages TEXT[],
  customs TEXT,
  dress_code TEXT,
  local_etiquette TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS crowd_data (
  id SERIAL PRIMARY KEY,
  city_id INTEGER REFERENCES cities(id),
  attraction_id INTEGER REFERENCES attractions(id),
  season VARCHAR(20), -- summer, winter, monsoon, spring
  day_of_week VARCHAR(20),
  crowd_level VARCHAR(20), -- low, medium, high, very_high
  best_time_to_visit VARCHAR(100),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS travel_buddies (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  age INTEGER,
  gender VARCHAR(20),
  interests TEXT[],
  preferred_cities TEXT[],
  contact_info JSONB,
  travel_style VARCHAR(50), -- budget, luxury, adventure, cultural
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
