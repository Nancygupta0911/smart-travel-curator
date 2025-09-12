"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calculator, MapPin, Clock } from "lucide-react"
import { mockDelhiData, calculateTravelCost } from "@/lib/api"

export function TravelCostCalculator() {
  const [fromLocation, setFromLocation] = useState("")
  const [toLocation, setToLocation] = useState("")
  const [distance, setDistance] = useState<number>(0)
  const [selectedVehicle, setSelectedVehicle] = useState("")
  const [calculatedCost, setCalculatedCost] = useState<number | null>(null)
  const [estimatedTime, setEstimatedTime] = useState<number | null>(null)

  const transportData = mockDelhiData.transport

  const handleCalculate = () => {
    if (distance && selectedVehicle) {
      const cost = calculateTravelCost(distance, selectedVehicle, transportData)
      setCalculatedCost(cost)

      // Estimate time based on vehicle type and distance
      const avgSpeed = selectedVehicle === "Delhi Metro" ? 35 : selectedVehicle === "Auto Rickshaw" ? 20 : 25
      setEstimatedTime(Math.round((distance / avgSpeed) * 60)) // in minutes
    }
  }

  const popularRoutes = [
    { from: "Red Fort", to: "India Gate", distance: 5.2 },
    { from: "Qutub Minar", to: "Lotus Temple", distance: 8.7 },
    { from: "Chandni Chowk", to: "Connaught Place", distance: 4.1 },
    { from: "Delhi Airport", to: "Connaught Place", distance: 16.5 },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-balance mb-4">Travel Cost Calculator</h1>
        <p className="text-lg text-muted-foreground text-pretty">
          Calculate travel costs for different vehicles in Delhi
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calculator className="h-5 w-5" />
              Calculate Your Trip Cost
            </CardTitle>
            <CardDescription>Enter your journey details to get estimated costs</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="from">From</Label>
                <Input
                  id="from"
                  placeholder="Starting location"
                  value={fromLocation}
                  onChange={(e) => setFromLocation(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="to">To</Label>
                <Input
                  id="to"
                  placeholder="Destination"
                  value={toLocation}
                  onChange={(e) => setToLocation(e.target.value)}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="distance">Distance (km)</Label>
              <Input
                id="distance"
                type="number"
                placeholder="Enter distance in kilometers"
                value={distance || ""}
                onChange={(e) => setDistance(Number(e.target.value))}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="vehicle">Vehicle Type</Label>
              <Select value={selectedVehicle} onValueChange={setSelectedVehicle}>
                <SelectTrigger>
                  <SelectValue placeholder="Select vehicle type" />
                </SelectTrigger>
                <SelectContent>
                  {transportData.map((transport) => (
                    <SelectItem key={transport.id} value={transport.vehicle_type}>
                      {transport.vehicle_type}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <Button onClick={handleCalculate} className="w-full">
              Calculate Cost
            </Button>

            {calculatedCost !== null && (
              <Card className="bg-primary/5 border-primary/20">
                <CardContent className="pt-6">
                  <div className="text-center space-y-2">
                    <div className="text-2xl font-bold text-primary">₹{calculatedCost}</div>
                    <p className="text-sm text-muted-foreground">
                      Estimated cost for {distance} km via {selectedVehicle}
                    </p>
                    {estimatedTime && (
                      <div className="flex items-center justify-center gap-1 text-sm">
                        <Clock className="h-4 w-4" />
                        <span>~{estimatedTime} minutes</span>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            )}
          </CardContent>
        </Card>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Popular Routes</CardTitle>
              <CardDescription>Quick calculations for common Delhi routes</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {popularRoutes.map((route, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 rounded-lg border cursor-pointer hover:bg-muted/50"
                    onClick={() => {
                      setFromLocation(route.from)
                      setToLocation(route.to)
                      setDistance(route.distance)
                    }}
                  >
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <div>
                        <p className="font-medium text-sm">
                          {route.from} → {route.to}
                        </p>
                        <p className="text-xs text-muted-foreground">{route.distance} km</p>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm">
                      Use Route
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Vehicle Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {transportData.map((transport) => (
                  <div key={transport.id} className="border rounded-lg p-4">
                    <h4 className="font-semibold">{transport.vehicle_type}</h4>
                    <p className="text-sm text-muted-foreground mb-2">{transport.description}</p>
                    <div className="flex justify-between text-sm">
                      <span>Base: ₹{transport.base_fare}</span>
                      <span>Per km: ₹{transport.per_km_rate}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
