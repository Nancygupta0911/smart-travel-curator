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
    // Return mock data if no API key is configured
    return NextResponse.json({
      temperature: 25,
      description: "Clear sky",
      humidity: 60,
      windSpeed: 5,
      feelsLike: 28,
      uvIndex: 5,
      visibility: 10,
    })
  }

  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city},IN&appid=${API_KEY}&units=metric`,
    )

    if (!response.ok) {
      throw new Error("Weather API request failed")
    }

    const data = await response.json()

    return NextResponse.json({
      temperature: Math.round(data.main.temp),
      description: data.weather[0].description,
      humidity: data.main.humidity,
      windSpeed: data.wind.speed,
      feelsLike: Math.round(data.main.feels_like),
      uvIndex: data.uvi || 5,
      visibility: data.visibility ? data.visibility / 1000 : 10,
    })
  } catch (error) {
    console.error("Weather API error:", error)
    // Return mock data on error
    return NextResponse.json({
      temperature: 25,
      description: "Clear sky",
      humidity: 60,
      windSpeed: 5,
      feelsLike: 28,
      uvIndex: 5,
      visibility: 10,
    })
  }
}
