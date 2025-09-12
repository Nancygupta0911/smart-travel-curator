"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Clock, TrendingUp, AlertTriangle } from "lucide-react"

interface CrowdLevel {
  level: "low" | "medium" | "high" | "very_high"
  color: string
  description: string
}

const crowdLevels: Record<string, CrowdLevel> = {
  low: { level: "low", color: "bg-green-500", description: "Perfect time to visit" },
  medium: { level: "medium", color: "bg-yellow-500", description: "Moderate crowds" },
  high: { level: "high", color: "bg-orange-500", description: "Busy, plan accordingly" },
  very_high: { level: "very_high", color: "bg-red-500", description: "Very crowded, avoid if possible" },
}

export function CrowdAnalytics() {
  const [selectedAttraction, setSelectedAttraction] = useState("Red Fort")
  const [selectedSeason, setSelectedSeason] = useState("winter")

  const attractions = ["Red Fort", "India Gate", "Qutub Minar", "Lotus Temple", "Chandni Chowk", "Humayun's Tomb"]

  const seasons = [
    { id: "winter", name: "Winter (Oct-Mar)", description: "Peak tourist season" },
    { id: "summer", name: "Summer (Apr-Jun)", description: "Hot weather, fewer crowds" },
    { id: "monsoon", name: "Monsoon (Jul-Sep)", description: "Rainy season" },
  ]

  const crowdData = {
    "Red Fort": {
      winter: {
        weekday: { morning: "medium", afternoon: "high", evening: "medium" },
        weekend: { morning: "high", afternoon: "very_high", evening: "high" },
      },
      summer: {
        weekday: { morning: "low", afternoon: "medium", evening: "low" },
        weekend: { morning: "medium", afternoon: "high", evening: "medium" },
      },
      monsoon: {
        weekday: { morning: "low", afternoon: "low", evening: "low" },
        weekend: { morning: "low", afternoon: "medium", evening: "low" },
      },
    },
    "India Gate": {
      winter: {
        weekday: { morning: "medium", afternoon: "medium", evening: "high" },
        weekend: { morning: "high", afternoon: "high", evening: "very_high" },
      },
      summer: {
        weekday: { morning: "low", afternoon: "low", evening: "medium" },
        weekend: { morning: "medium", afternoon: "low", evening: "high" },
      },
      monsoon: {
        weekday: { morning: "low", afternoon: "low", evening: "medium" },
        weekend: { morning: "low", afternoon: "low", evening: "medium" },
      },
    },
  }

  const getCurrentCrowdData = () => {
    return (
      crowdData[selectedAttraction as keyof typeof crowdData]?.[
        selectedSeason as keyof (typeof crowdData)["Red Fort"]
      ] || crowdData["Red Fort"][selectedSeason as keyof (typeof crowdData)["Red Fort"]]
    )
  }

  const timeSlots = [
    { id: "morning", name: "Morning", time: "6 AM - 12 PM" },
    { id: "afternoon", name: "Afternoon", time: "12 PM - 6 PM" },
    { id: "evening", name: "Evening", time: "6 PM - 10 PM" },
  ]

  const bestTimes = [
    {
      attraction: "Red Fort",
      season: "winter",
      time: "Early morning (9:30-11:00 AM) on weekdays",
      crowdLevel: "low",
    },
    {
      attraction: "India Gate",
      season: "summer",
      time: "Early morning (6:00-8:00 AM)",
      crowdLevel: "low",
    },
    {
      attraction: "Qutub Minar",
      season: "monsoon",
      time: "Anytime during weekdays",
      crowdLevel: "low",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-balance mb-4">Crowd Analytics</h1>
        <p className="text-lg text-muted-foreground text-pretty">
          Plan your visit with real-time crowd predictions for Delhi attractions
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                Crowd Levels by Time & Season
              </CardTitle>
              <CardDescription>Select attraction and season to see crowd predictions</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="text-sm font-medium mb-2 block">Attraction</label>
                  <select
                    className="w-full p-2 border rounded-md"
                    value={selectedAttraction}
                    onChange={(e) => setSelectedAttraction(e.target.value)}
                  >
                    {attractions.map((attraction) => (
                      <option key={attraction} value={attraction}>
                        {attraction}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Season</label>
                  <select
                    className="w-full p-2 border rounded-md"
                    value={selectedSeason}
                    onChange={(e) => setSelectedSeason(e.target.value)}
                  >
                    {seasons.map((season) => (
                      <option key={season.id} value={season.id}>
                        {season.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold">Crowd Levels for {selectedAttraction}</h4>

                {["weekday", "weekend"].map((dayType) => (
                  <div key={dayType} className="border rounded-lg p-4">
                    <h5 className="font-medium mb-3 capitalize">{dayType}s</h5>
                    <div className="grid gap-3 md:grid-cols-3">
                      {timeSlots.map((slot) => {
                        const crowdLevel =
                          getCurrentCrowdData()?.[dayType as "weekday" | "weekend"]?.[
                            slot.id as "morning" | "afternoon" | "evening"
                          ] || "low"
                        const levelInfo = crowdLevels[crowdLevel]

                        return (
                          <div key={slot.id} className="text-center p-3 border rounded-lg">
                            <div className="font-medium text-sm">{slot.name}</div>
                            <div className="text-xs text-muted-foreground mb-2">{slot.time}</div>
                            <div className={`w-4 h-4 rounded-full ${levelInfo.color} mx-auto mb-1`}></div>
                            <Badge variant="outline" className="text-xs capitalize">
                              {crowdLevel.replace("_", " ")}
                            </Badge>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5" />
                Weekly Crowd Trends
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-7 gap-2 text-center">
                  {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day, index) => {
                    const isWeekend = index >= 5
                    const crowdLevel = isWeekend ? "high" : "medium"
                    const levelInfo = crowdLevels[crowdLevel]

                    return (
                      <div key={day} className="p-3 border rounded-lg">
                        <div className="font-medium text-sm mb-2">{day}</div>
                        <div className={`w-6 h-6 rounded-full ${levelInfo.color} mx-auto mb-1`}></div>
                        <div className="text-xs capitalize">{crowdLevel}</div>
                      </div>
                    )
                  })}
                </div>
                <div className="text-sm text-muted-foreground text-center">
                  Weekends typically see 2-3x higher crowds than weekdays
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                Best Times to Visit
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {bestTimes.map((item, index) => (
                  <div key={index} className="p-4 border rounded-lg">
                    <h4 className="font-medium text-sm mb-1">{item.attraction}</h4>
                    <p className="text-xs text-muted-foreground mb-2 capitalize">{item.season} season</p>
                    <p className="text-sm mb-2">{item.time}</p>
                    <Badge variant="secondary" className="text-xs">
                      {crowdLevels[item.crowdLevel].description}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="h-5 w-5" />
                Crowd Alerts
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="p-3 border rounded-lg bg-red-50 border-red-200">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span className="font-medium text-sm">High Alert</span>
                  </div>
                  <p className="text-xs text-muted-foreground">India Gate - Weekend evenings in winter</p>
                </div>
                <div className="p-3 border rounded-lg bg-yellow-50 border-yellow-200">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    <span className="font-medium text-sm">Moderate Alert</span>
                  </div>
                  <p className="text-xs text-muted-foreground">Red Fort - Weekday afternoons in winter</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Crowd Legend</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {Object.entries(crowdLevels).map(([key, level]) => (
                  <div key={key} className="flex items-center gap-3">
                    <div className={`w-4 h-4 rounded-full ${level.color}`}></div>
                    <div className="flex-1">
                      <span className="text-sm font-medium capitalize">{level.level.replace("_", " ")}</span>
                      <p className="text-xs text-muted-foreground">{level.description}</p>
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
