// Enhanced weather API integration for Indian cities
export interface WeatherData {
  temperature: number
  description: string
  humidity: number
  windSpeed: number
  feelsLike: number
  uvIndex: number
  visibility: number
}

export interface WeatherForecast {
  date: string
  high: number
  low: number
  description: string
  icon: string
}

export async function getDetailedWeather(city: string): Promise<WeatherData> {
  try {
    const response = await fetch(`/api/weather?city=${encodeURIComponent(city)}`)

    if (!response.ok) {
      throw new Error("Weather API request failed")
    }

    return await response.json()
  } catch (error) {
    console.error("Weather API error:", error)
    // Return mock data for development
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

export async function getWeatherForecast(city: string): Promise<WeatherForecast[]> {
  try {
    const response = await fetch(`/api/weather/forecast?city=${encodeURIComponent(city)}`)

    if (!response.ok) {
      throw new Error("Weather forecast API request failed")
    }

    return await response.json()
  } catch (error) {
    console.error("Weather forecast error:", error)
    // Return mock forecast data
    return [
      { date: "Today", high: 28, low: 18, description: "Sunny", icon: "01d" },
      { date: "Tomorrow", high: 30, low: 20, description: "Partly cloudy", icon: "02d" },
      { date: "Day 3", high: 26, low: 16, description: "Light rain", icon: "10d" },
      { date: "Day 4", high: 24, low: 14, description: "Cloudy", icon: "04d" },
      { date: "Day 5", high: 27, low: 17, description: "Clear", icon: "01d" },
    ]
  }
}

// Air quality data for Indian cities
export async function getAirQuality(city: string) {
  try {
    // This would integrate with air quality APIs via server-side routes
    // For now, return mock data
    return {
      aqi: 156,
      category: "Moderate",
      pm25: 45,
      pm10: 78,
      recommendation: "Sensitive individuals should limit outdoor activities",
    }
  } catch (error) {
    console.error("Air quality API error:", error)
    return {
      aqi: 100,
      category: "Moderate",
      pm25: 35,
      pm10: 60,
      recommendation: "Air quality is acceptable for most people",
    }
  }
}
