"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MapPin, Clock, Star, Thermometer, Droplets, Wind } from "lucide-react"
import { mockDelhiData, getWeatherData, type Attraction } from "@/lib/api"

interface WeatherData {
  temperature: number
  description: string
  humidity: number
  windSpeed: number
}

export function CityExplorer() {
  const [selectedCity] = useState("Delhi")
  const [weather, setWeather] = useState<WeatherData | null>(null)
  const [selectedAttraction, setSelectedAttraction] = useState<Attraction | null>(null)

  useEffect(() => {
    // Fetch weather data
    getWeatherData(selectedCity).then(setWeather)
  }, [selectedCity])

  const cityData = mockDelhiData

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-balance mb-4">Explore {selectedCity}</h1>
        <p className="text-lg text-muted-foreground text-pretty">{cityData.city.description}</p>
      </div>

      {/* Weather Widget */}
      {weather && (
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Thermometer className="h-5 w-5" />
              Current Weather in {selectedCity}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="text-3xl font-bold">{weather.temperature}°C</div>
                <div>
                  <p className="capitalize">{weather.description}</p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Droplets className="h-4 w-4" />
                      {weather.humidity}%
                    </span>
                    <span className="flex items-center gap-1">
                      <Wind className="h-4 w-4" />
                      {weather.windSpeed} m/s
                    </span>
                  </div>
                </div>
              </div>
              <Badge variant="secondary">Best time: {cityData.city.best_time_to_visit}</Badge>
            </div>
          </CardContent>
        </Card>
      )}

      <Tabs defaultValue="attractions" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="attractions">Attractions</TabsTrigger>
          <TabsTrigger value="food">Local Food</TabsTrigger>
          <TabsTrigger value="transport">Transport</TabsTrigger>
          <TabsTrigger value="culture">Culture</TabsTrigger>
        </TabsList>

        <TabsContent value="attractions" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {cityData.attractions.map((attraction) => (
              <Card key={attraction.id} className="cursor-pointer hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-lg">{attraction.name}</CardTitle>
                      <CardDescription className="flex items-center gap-1 mt-1">
                        <MapPin className="h-4 w-4" />
                        {attraction.type}
                      </CardDescription>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">{attraction.rating}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">{attraction.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="h-4 w-4" />
                      {attraction.opening_hours}
                    </div>
                    <Badge variant={attraction.entry_fee === 0 ? "secondary" : "outline"}>
                      {attraction.entry_fee === 0 ? "Free" : `₹${attraction.entry_fee}`}
                    </Badge>
                  </div>
                  <Button
                    className="w-full mt-4 bg-transparent"
                    variant="outline"
                    onClick={() => setSelectedAttraction(attraction)}
                  >
                    View on Map
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="food" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {cityData.foods.map((food) => (
              <Card key={food.id}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-lg">{food.name}</CardTitle>
                      <CardDescription className="capitalize">{food.type.replace("_", " ")}</CardDescription>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">{food.rating}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">{food.description}</p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <MapPin className="h-4 w-4" />
                      <span className="text-pretty">{food.famous_location}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <Badge variant="secondary">{food.price_range}</Badge>
                      <Button size="sm" variant="outline">
                        Get Directions
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="transport" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            {cityData.transport.map((transport) => (
              <Card key={transport.id}>
                <CardHeader>
                  <CardTitle className="text-lg">{transport.vehicle_type}</CardTitle>
                  <CardDescription>{transport.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Base Fare:</span>
                      <span className="font-medium">₹{transport.base_fare}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Per KM:</span>
                      <span className="font-medium">₹{transport.per_km_rate}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="culture" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Cultural Information</CardTitle>
              <CardDescription>Learn about the local culture and customs of {selectedCity}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-semibold mb-2">Major Festivals</h4>
                <div className="flex flex-wrap gap-2">
                  {cityData.city.famous_for.map((festival, index) => (
                    <Badge key={index} variant="outline">
                      {festival}
                    </Badge>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Local Etiquette</h4>
                <p className="text-sm text-muted-foreground text-pretty">
                  Use Namaste greeting, bargain respectfully in markets, tip 10% at restaurants, be patient with
                  traffic. Respect for elders is highly valued.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Dress Code</h4>
                <p className="text-sm text-muted-foreground text-pretty">
                  Modest clothing recommended, especially at religious sites. Cover shoulders and legs when visiting
                  temples and monuments.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
