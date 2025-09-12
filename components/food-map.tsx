"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { MapPin, Star, Navigation, Clock, Phone, Filter } from "lucide-react"
import { mockDelhiData, type LocalFood } from "@/lib/api"

export function FoodMap() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedFood, setSelectedFood] = useState<LocalFood | null>(null)

  const foodData = [
    ...mockDelhiData.foods,
    {
      id: 3,
      city_id: 1,
      name: "Butter Chicken",
      description: "Creamy tomato-based chicken curry, Delhi's signature dish",
      type: "restaurant",
      famous_location: "Moti Mahal, Daryaganj",
      price_range: "₹300-500",
      latitude: 28.6448,
      longitude: 77.2334,
      rating: 4.6,
    },
    {
      id: 4,
      city_id: 1,
      name: "Kulfi Faluda",
      description: "Traditional Indian ice cream with vermicelli and rose syrup",
      type: "sweet",
      famous_location: "Kuremal Mohan Lal Kulfi Wale, Chawri Bazaar",
      price_range: "₹40-80",
      latitude: 28.6506,
      longitude: 77.2334,
      rating: 4.4,
    },
    {
      id: 5,
      city_id: 1,
      name: "Aloo Tikki Chaat",
      description: "Crispy potato patties with tangy chutneys and yogurt",
      type: "street_food",
      famous_location: "Bengali Market, Connaught Place",
      price_range: "₹30-60",
      latitude: 28.6315,
      longitude: 77.2167,
      rating: 4.3,
    },
    {
      id: 6,
      city_id: 1,
      name: "Nihari",
      description: "Slow-cooked mutton stew, perfect for breakfast",
      type: "restaurant",
      famous_location: "Karim's, Jama Masjid",
      price_range: "₹200-400",
      latitude: 28.6507,
      longitude: 77.2334,
      rating: 4.7,
    },
  ]

  const categories = [
    { id: "all", name: "All Foods", count: foodData.length },
    { id: "street_food", name: "Street Food", count: foodData.filter((f) => f.type === "street_food").length },
    { id: "restaurant", name: "Restaurants", count: foodData.filter((f) => f.type === "restaurant").length },
    { id: "sweet", name: "Sweets", count: foodData.filter((f) => f.type === "sweet").length },
  ]

  const filteredFoods = foodData.filter((food) => {
    const matchesSearch =
      food.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      food.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === "all" || food.type === selectedCategory
    return matchesSearch && matchesCategory
  })

  const topRatedFoods = [...foodData].sort((a, b) => b.rating - a.rating).slice(0, 3)

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-balance mb-4">Delhi Food Map</h1>
        <p className="text-lg text-muted-foreground text-pretty">
          Discover authentic Delhi cuisine with exact locations and insider tips
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-6">
          {/* Search and Filters */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Filter className="h-5 w-5" />
                Find Your Perfect Meal
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Input
                placeholder="Search for dishes, restaurants, or locations..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Button
                    key={category.id}
                    variant={selectedCategory === category.id ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category.id)}
                  >
                    {category.name} ({category.count})
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Interactive Map Placeholder */}
          <Card>
            <CardHeader>
              <CardTitle>Food Locations Map</CardTitle>
              <CardDescription>Interactive map showing exact locations of recommended foods</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-64 bg-muted rounded-lg flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-100 to-teal-100 opacity-50"></div>
                <div className="relative z-10 text-center space-y-2">
                  <MapPin className="h-12 w-12 text-primary mx-auto" />
                  <p className="text-sm font-medium">Interactive Delhi Food Map</p>
                  <p className="text-xs text-muted-foreground">Click on food items to see their exact locations</p>
                </div>
                {/* Mock map pins */}
                <div className="absolute top-4 left-8 w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                <div className="absolute top-12 right-12 w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                <div className="absolute bottom-8 left-16 w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <div className="absolute bottom-16 right-8 w-3 h-3 bg-yellow-500 rounded-full animate-pulse"></div>
              </div>
            </CardContent>
          </Card>

          {/* Food List */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">
              {searchQuery ? `Search Results (${filteredFoods.length})` : "All Recommendations"}
            </h3>
            <div className="grid gap-4">
              {filteredFoods.map((food) => (
                <Card key={food.id} className="cursor-pointer hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold mb-1">{food.name}</h4>
                        <p className="text-sm text-muted-foreground mb-2">{food.description}</p>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <MapPin className="h-4 w-4" />
                          <span className="text-pretty">{food.famous_location}</span>
                        </div>
                      </div>
                      <div className="flex flex-col items-end gap-2">
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span className="text-sm font-medium">{food.rating}</span>
                        </div>
                        <Badge variant="secondary">{food.price_range}</Badge>
                        <Badge variant="outline" className="capitalize">
                          {food.type.replace("_", " ")}
                        </Badge>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                        <Navigation className="h-4 w-4 mr-2" />
                        Get Directions
                      </Button>
                      <Button size="sm" variant="outline">
                        <Phone className="h-4 w-4 mr-2" />
                        Call
                      </Button>
                      <Button size="sm" onClick={() => setSelectedFood(food)}>
                        View Details
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          {/* Top Rated Foods */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Star className="h-5 w-5 text-yellow-500" />
                Top Rated
              </CardTitle>
              <CardDescription>Highest rated foods in Delhi</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {topRatedFoods.map((food, index) => (
                  <div key={food.id} className="flex items-center gap-3 p-3 rounded-lg border">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-sm">{food.name}</h4>
                      <p className="text-xs text-muted-foreground">{food.price_range}</p>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                      <span className="text-xs font-medium">{food.rating}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Food Categories */}
          <Card>
            <CardHeader>
              <CardTitle>Food Categories</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {categories.slice(1).map((category) => (
                  <div
                    key={category.id}
                    className="flex items-center justify-between p-3 rounded-lg border cursor-pointer hover:bg-muted/50"
                    onClick={() => setSelectedCategory(category.id)}
                  >
                    <span className="font-medium capitalize">{category.name.replace("_", " ")}</span>
                    <Badge variant="secondary">{category.count}</Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Quick Tips */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                Food Tips
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 text-sm">
                <div className="p-3 rounded-lg bg-muted/50">
                  <p className="font-medium mb-1">Best Time for Street Food</p>
                  <p className="text-muted-foreground">Evening (5-8 PM) for freshest preparations</p>
                </div>
                <div className="p-3 rounded-lg bg-muted/50">
                  <p className="font-medium mb-1">Hygiene Tip</p>
                  <p className="text-muted-foreground">Look for busy stalls with high turnover</p>
                </div>
                <div className="p-3 rounded-lg bg-muted/50">
                  <p className="font-medium mb-1">Payment</p>
                  <p className="text-muted-foreground">Carry cash, many places don't accept cards</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
