// API utilities for Indian cities travel data
export interface City {
  id: number
  name: string
  state: string
  description: string
  best_time_to_visit: string
  famous_for: string[]
  latitude: number
  longitude: number
}

export interface Attraction {
  id: number
  city_id: number
  name: string
  type: string
  description: string
  entry_fee: number
  opening_hours: string
  latitude: number
  longitude: number
  rating: number
}

export interface LocalFood {
  id: number
  city_id: number
  name: string
  description: string
  type: string
  famous_location: string
  price_range: string
  latitude: number
  longitude: number
  rating: number
}

export interface TransportCost {
  id: number
  city_id: number
  vehicle_type: string
  base_fare: number
  per_km_rate: number
  description: string
}

export interface CulturalInfo {
  id: number
  city_id: number
  festivals: string[]
  languages: string[]
  customs: string
  dress_code: string
  local_etiquette: string
}

export interface CrowdData {
  id: number
  city_id: number
  attraction_id: number
  season: string
  day_of_week: string
  crowd_level: string
  best_time_to_visit: string
}

// Mock data for development (replace with actual API calls)
export const mockDelhiData = {
  city: {
    id: 1,
    name: "Delhi",
    state: "Delhi",
    description:
      "The capital city of India, rich in history and culture with magnificent monuments and bustling markets.",
    best_time_to_visit: "October to March",
    famous_for: ["Red Fort", "India Gate", "Qutub Minar", "Lotus Temple", "Street Food"],
    latitude: 28.6139,
    longitude: 77.209,
  },
  attractions: [
    {
      id: 1,
      city_id: 1,
      name: "Red Fort",
      type: "monument",
      description: "A historic fortified palace of the Mughal emperors, UNESCO World Heritage Site",
      entry_fee: 35,
      opening_hours: "9:30 AM - 4:30 PM",
      latitude: 28.6562,
      longitude: 77.241,
      rating: 4.5,
    },
    {
      id: 2,
      city_id: 1,
      name: "India Gate",
      type: "monument",
      description: "War memorial dedicated to Indian soldiers, iconic landmark of Delhi",
      entry_fee: 0,
      opening_hours: "24 hours",
      latitude: 28.6129,
      longitude: 77.2295,
      rating: 4.3,
    },
    {
      id: 3,
      city_id: 1,
      name: "Qutub Minar",
      type: "monument",
      description: "Tallest brick minaret in the world, UNESCO World Heritage Site",
      entry_fee: 30,
      opening_hours: "7:00 AM - 5:00 PM",
      latitude: 28.5245,
      longitude: 77.1855,
      rating: 4.4,
    },
  ],
  foods: [
    {
      id: 1,
      city_id: 1,
      name: "Chole Bhature",
      description: "Spicy chickpea curry with fried bread",
      type: "street_food",
      famous_location: "Chandni Chowk, Karim Hotel",
      price_range: "₹50-150",
      latitude: 28.6506,
      longitude: 77.2334,
      rating: 4.5,
    },
    {
      id: 2,
      city_id: 1,
      name: "Paranthas",
      description: "Stuffed flatbreads with various fillings",
      type: "street_food",
      famous_location: "Paranthe Wali Gali, Chandni Chowk",
      price_range: "₹30-100",
      latitude: 28.6506,
      longitude: 77.2334,
      rating: 4.7,
    },
  ],
  transport: [
    {
      id: 1,
      city_id: 1,
      vehicle_type: "Auto Rickshaw",
      base_fare: 25,
      per_km_rate: 12.0,
      description: "Three-wheeler auto rickshaw, good for short distances",
    },
    {
      id: 2,
      city_id: 1,
      vehicle_type: "Delhi Metro",
      base_fare: 10,
      per_km_rate: 2.0,
      description: "Fastest way to travel, covers most of Delhi",
    },
  ],
}

export async function getWeatherData(city: string) {
  try {
    const response = await fetch(`/api/weather?city=${encodeURIComponent(city)}`)

    if (!response.ok) {
      throw new Error("Weather API request failed")
    }

    return await response.json()
  } catch (error) {
    console.error("Weather API error:", error)
    return {
      temperature: 25,
      description: "Clear sky",
      humidity: 60,
      windSpeed: 5,
      feelsLike: 28,
      uvIndex: 5,
      visibility: 10,
    }
  }
}

// Travel cost calculator
export function calculateTravelCost(distance: number, vehicleType: string, transportData: TransportCost[]) {
  const vehicle = transportData.find((t) => t.vehicle_type === vehicleType)
  if (!vehicle) return 0

  return vehicle.base_fare + distance * vehicle.per_km_rate
}
