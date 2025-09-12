"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MapPin, Users, Calculator, Utensils, MessageCircle, TrendingUp, Search } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

const indianCities = [
  "Delhi",
  "Mumbai",
  "Bangalore",
  "Hyderabad",
  "Chennai",
  "Kolkata",
  "Pune",
  "Ahmedabad",
  "Jaipur",
  "Surat",
  "Lucknow",
  "Kanpur",
  "Nagpur",
  "Indore",
  "Thane",
  "Bhopal",
  "Visakhapatnam",
  "Pimpri-Chinchwad",
  "Patna",
  "Vadodara",
  "Ghaziabad",
  "Ludhiana",
  "Agra",
  "Nashik",
  "Faridabad",
  "Meerut",
  "Rajkot",
  "Kalyan-Dombivali",
  "Vasai-Virar",
  "Varanasi",
  "Srinagar",
  "Aurangabad",
  "Dhanbad",
  "Amritsar",
  "Navi Mumbai",
  "Allahabad",
  "Ranchi",
  "Howrah",
  "Coimbatore",
  "Jabalpur",
  "Gwalior",
  "Vijayawada",
  "Jodhpur",
  "Madurai",
  "Raipur",
  "Kota",
  "Guwahati",
  "Chandigarh",
  "Solapur",
  "Hubli-Dharwad",
]

export function EnhancedHeroSection() {
  const [selectedCity, setSelectedCity] = useState("")

  const features = [
    {
      icon: MapPin,
      title: "Explore Cities",
      description: "Discover hidden gems across India with AI-powered recommendations",
      href: "/explore",
      color: "text-orange-600",
    },
    {
      icon: Calculator,
      title: "Cost Calculator",
      description: "Calculate travel costs for different vehicles and routes",
      href: "/cost-calculator",
      color: "text-blue-600",
    },
    {
      icon: Utensils,
      title: "Food Map",
      description: "Find authentic local cuisine with exact locations",
      href: "/food-map",
      color: "text-red-600",
    },
    {
      icon: MessageCircle,
      title: "Travel Buddy",
      description: "Connect with like-minded travelers for your journey",
      href: "/travel-buddy",
      color: "text-purple-600",
    },
    {
      icon: TrendingUp,
      title: "Crowd Analytics",
      description: "Avoid crowds with real-time visitor predictions",
      href: "/crowd-analytics",
      color: "text-green-600",
    },
    {
      icon: Users,
      title: "Cultural Guide",
      description: "Learn local customs and cultural insights",
      href: "/explore",
      color: "text-teal-600",
    },
  ]

  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-green-50"></div>
      <div className="absolute inset-0 opacity-10">
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-green-200/30 to-transparent"></div>
        <svg
          className="absolute bottom-0 left-10 w-24 h-32 text-green-300/40"
          viewBox="0 0 100 120"
          fill="currentColor"
        >
          <path d="M50 120 L45 100 Q30 90 35 70 Q40 50 50 60 Q60 50 65 70 Q70 90 55 100 Z" />
          <circle cx="50" cy="45" r="15" />
        </svg>
        <svg
          className="absolute bottom-0 right-20 w-20 h-28 text-green-400/30"
          viewBox="0 0 100 120"
          fill="currentColor"
        >
          <path d="M50 120 L47 105 Q35 95 38 78 Q42 60 50 68 Q58 60 62 78 Q65 95 53 105 Z" />
          <circle cx="50" cy="50" r="12" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-100 via-white to-green-100 px-6 py-3 rounded-full mb-6 shadow-lg border border-orange-200/50">
            <span className="text-2xl">🇮🇳</span>
            <span className="text-sm font-semibold bg-gradient-to-r from-orange-600 to-green-600 bg-clip-text text-transparent">
              Explore Incredible India
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-balance mb-6 leading-tight">
            Your Smart Travel Curator for{" "}
            <span className="bg-gradient-to-r from-orange-500 via-red-500 to-green-500 bg-clip-text text-transparent">
              Indian Cities
            </span>
          </h1>

          <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto mb-8 leading-relaxed">
            Discover authentic experiences, calculate travel costs, find food gems, connect with travel buddies, and
            explore India's rich culture with AI-powered insights.
          </p>

          <div className="max-w-md mx-auto mb-8">
            <div className="flex gap-3">
              <Select value={selectedCity} onValueChange={setSelectedCity}>
                <SelectTrigger className="flex-1 h-12 bg-white/80 backdrop-blur-sm border-orange-200 shadow-lg">
                  <div className="flex items-center gap-2">
                    <Search className="h-4 w-4 text-orange-500" />
                    <SelectValue placeholder="Select a city to explore..." />
                  </div>
                </SelectTrigger>
                <SelectContent className="max-h-60">
                  {indianCities.map((city) => (
                    <SelectItem key={city} value={city.toLowerCase()}>
                      {city}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Button
                size="lg"
                className="h-12 px-6 bg-gradient-to-r from-orange-500 to-green-500 hover:from-orange-600 hover:to-green-600 shadow-lg"
                asChild
              >
                <Link href={selectedCity ? `/explore?city=${selectedCity}` : "/explore"}>Explore</Link>
              </Button>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 shadow-lg"
              asChild
            >
              <Link href="/explore">Start Exploring Delhi</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-orange-200 text-orange-700 hover:bg-orange-50 shadow-lg bg-transparent"
              asChild
            >
              <Link href="/travel-buddy">Find Travel Buddy</Link>
            </Button>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-16">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-500 cursor-pointer border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:-translate-y-2"
            >
              <CardContent className="p-6">
                <Link href={feature.href} className="block">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-orange-50 to-green-50 group-hover:from-orange-100 group-hover:to-green-100 transition-all duration-300 shadow-lg">
                      <feature.icon
                        className={`h-6 w-6 ${feature.color} group-hover:scale-110 transition-transform duration-300`}
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors text-lg">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-muted-foreground text-pretty leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid gap-8 md:grid-cols-4 text-center">
          <div className="group">
            <div className="text-4xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
              50+
            </div>
            <div className="text-sm text-muted-foreground font-medium">Indian Cities</div>
          </div>
          <div className="group">
            <div className="text-4xl font-bold bg-gradient-to-r from-red-500 to-green-500 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
              1000+
            </div>
            <div className="text-sm text-muted-foreground font-medium">Food Locations</div>
          </div>
          <div className="group">
            <div className="text-4xl font-bold bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
              24/7
            </div>
            <div className="text-sm text-muted-foreground font-medium">Travel Support</div>
          </div>
          <div className="group">
            <div className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-orange-500 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
              AI-Powered
            </div>
            <div className="text-sm text-muted-foreground font-medium">Recommendations</div>
          </div>
        </div>
      </div>
    </section>
  )
}
