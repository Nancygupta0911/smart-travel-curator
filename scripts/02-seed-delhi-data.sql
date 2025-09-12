-- Insert Delhi city data
INSERT INTO cities (name, state, description, best_time_to_visit, famous_for, latitude, longitude) VALUES
('Delhi', 'Delhi', 'The capital city of India, rich in history and culture with magnificent monuments and bustling markets.', 'October to March', ARRAY['Red Fort', 'India Gate', 'Qutub Minar', 'Lotus Temple', 'Street Food'], 28.6139, 77.2090);

-- Get Delhi city ID for foreign key references
-- Assuming Delhi gets ID = 1

-- Insert Delhi attractions
INSERT INTO attractions (city_id, name, type, description, entry_fee, opening_hours, latitude, longitude, rating) VALUES
(1, 'Red Fort', 'monument', 'A historic fortified palace of the Mughal emperors, UNESCO World Heritage Site', 35, '9:30 AM - 4:30 PM', 28.6562, 77.2410, 4.5),
(1, 'India Gate', 'monument', 'War memorial dedicated to Indian soldiers, iconic landmark of Delhi', 0, '24 hours', 28.6129, 77.2295, 4.3),
(1, 'Qutub Minar', 'monument', 'Tallest brick minaret in the world, UNESCO World Heritage Site', 30, '7:00 AM - 5:00 PM', 28.5245, 77.1855, 4.4),
(1, 'Lotus Temple', 'temple', 'Bahai House of Worship known for its flower-like shape', 0, '9:00 AM - 5:30 PM', 28.5535, 77.2588, 4.6),
(1, 'Humayuns Tomb', 'monument', 'Tomb of Mughal Emperor Humayun, inspiration for Taj Mahal', 30, '6:00 AM - 6:00 PM', 28.5933, 77.2507, 4.3),
(1, 'Chandni Chowk', 'market', 'Historic market in Old Delhi, famous for shopping and street food', 0, '10:00 AM - 8:00 PM', 28.6506, 77.2334, 4.2);

-- Insert Delhi local foods
INSERT INTO local_foods (city_id, name, description, type, famous_location, price_range, latitude, longitude, rating) VALUES
(1, 'Chole Bhature', 'Spicy chickpea curry with fried bread', 'street_food', 'Chandni Chowk, Karim Hotel', '₹50-150', 28.6506, 77.2334, 4.5),
(1, 'Paranthas', 'Stuffed flatbreads with various fillings', 'street_food', 'Paranthe Wali Gali, Chandni Chowk', '₹30-100', 28.6506, 77.2334, 4.7),
(1, 'Butter Chicken', 'Creamy tomato-based chicken curry', 'restaurant', 'Moti Mahal, Daryaganj', '₹300-500', 28.6448, 77.2334, 4.6),
(1, 'Kulfi', 'Traditional Indian ice cream', 'sweet', 'Kuremal Mohan Lal Kulfi Wale', '₹40-80', 28.6506, 77.2334, 4.4),
(1, 'Rajma Chawal', 'Kidney bean curry with rice', 'restaurant', 'Various local dhabas', '₹80-200', 28.6139, 77.2090, 4.3),
(1, 'Jalebi', 'Sweet spiral-shaped dessert', 'sweet', 'Old Famous Jalebi Wala, Chandni Chowk', '₹20-50', 28.6506, 77.2334, 4.5);

-- Insert Delhi transport costs
INSERT INTO transport_costs (city_id, vehicle_type, base_fare, per_km_rate, description) VALUES
(1, 'Auto Rickshaw', 25, 12.00, 'Three-wheeler auto rickshaw, good for short distances'),
(1, 'Taxi (Ola/Uber)', 50, 15.00, 'App-based taxi service, AC cars available'),
(1, 'Delhi Metro', 10, 2.00, 'Fastest way to travel, covers most of Delhi'),
(1, 'Bus (DTC)', 5, 1.50, 'Government buses, economical option'),
(1, 'Cycle Rickshaw', 20, 8.00, 'Eco-friendly option for short distances in Old Delhi');

-- Insert Delhi cultural information
INSERT INTO cultural_info (city_id, festivals, languages, customs, dress_code, local_etiquette) VALUES
(1, ARRAY['Diwali', 'Holi', 'Dussehra', 'Karva Chauth', 'Durga Puja'], 
   ARRAY['Hindi', 'English', 'Punjabi', 'Urdu'], 
   'Respect for elders, touching feet as greeting, removing shoes before entering homes and temples',
   'Modest clothing recommended, especially at religious sites. Cover shoulders and legs.',
   'Use Namaste greeting, bargain respectfully in markets, tip 10% at restaurants, be patient with traffic');

-- Insert crowd data for Delhi attractions
INSERT INTO crowd_data (city_id, attraction_id, season, day_of_week, crowd_level, best_time_to_visit) VALUES
(1, 1, 'winter', 'weekend', 'very_high', 'Early morning 9:30-11:00 AM'),
(1, 1, 'winter', 'weekday', 'medium', 'Anytime during opening hours'),
(1, 2, 'winter', 'weekend', 'high', 'Early morning or evening'),
(1, 2, 'summer', 'weekend', 'medium', 'Early morning before 8 AM'),
(1, 3, 'winter', 'weekend', 'high', 'Morning 7:00-10:00 AM'),
(1, 4, 'winter', 'weekend', 'medium', 'Morning 9:00-11:00 AM'),
(1, 6, 'winter', 'weekend', 'very_high', 'Early morning 10:00-11:00 AM or evening 6:00-8:00 PM');
