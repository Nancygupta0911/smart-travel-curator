import { type NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const city = searchParams.get("city")

  if (!city) {
    return NextResponse.json({ error: "City parameter is required" }, { status: 400 })
  }

  // Use server-side environment variable (without NEXT_PUBLIC prefix)
  const API_KEY = process.env.WEATHER_API_KEY

  if (!API_KEY) {
    // Return mock forecast data if no API key is configured
    return NextResponse.json([
      { date: "Today", high: 28, low: 18, description: "Sunny", icon: "01d" },
      { date: "Tomorrow", high: 30, low: 20, description: "Partly cloudy", icon: "02d" },
      { date: "Day 3", high: 26, low: 16, description: "Light rain", icon: "10d" },
      { date: "Day 4", high: 24, low: 14, description: "Cloudy", icon: "04d" },
      { date: "Day 5", high: 27, low: 17, description: "Clear", icon: "01d" },
    ])
  }

  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city},IN&appid=${API_KEY}&units=metric`,
    )

    if (!response.ok) {
      throw new Error("Weather forecast API request failed")
    }

    const data = await response.json()

    // Process 5-day forecast
    const dailyForecasts: any[] = []
    const processedDates = new Set()

    data.list.forEach((item: any) => {
      const date = new Date(item.dt * 1000).toDateString()
      if (!processedDates.has(date) && dailyForecasts.length < 5) {
        dailyForecasts.push({
          date: date,
          high: Math.round(item.main.temp_max),
          low: Math.round(item.main.temp_min),
          description: item.weather[0].description,
          icon: item.weather[0].icon,
        })
        processedDates.add(date)
      }
    })

    return NextResponse.json(dailyForecasts)
  } catch (error) {
    console.error("Weather forecast error:", error)
    // Return mock forecast data on error
    return NextResponse.json([
      { date: "Today", high: 28, low: 18, description: "Sunny", icon: "01d" },
      { date: "Tomorrow", high: 30, low: 20, description: "Partly cloudy", icon: "02d" },
      { date: "Day 3", high: 26, low: 16, description: "Light rain", icon: "10d" },
      { date: "Day 4", high: 24, low: 14, description: "Cloudy", icon: "04d" },
      { date: "Day 5", high: 27, low: 17, description: "Clear", icon: "01d" },
    ])
  }
}
