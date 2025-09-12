"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, MapPin, Clock, Thermometer } from "lucide-react"

const destinations = [
  {
    id: 1,
    name: "Goa, India",
    image: "/goa-beaches-palm-trees-sunset-golden-sand.jpg",
    rating: 4.8,
    duration: "4-7 days",
    price: "From ₹8,000",
    tags: ["Beach", "Nightlife", "Portuguese Heritage"],
    description:
      "Experience pristine beaches, vibrant nightlife, and Portuguese colonial architecture in India's beach paradise.",
    season: "Oct-Mar",
  },
  {
    id: 2,
    name: "Rajasthan, India",
    image: "/rajasthan-palace-jaipur-pink-city-fort-desert.jpg",
    rating: 4.9,
    duration: "7-10 days",
    price: "From ₹12,000",
    tags: ["Royal Heritage", "Desert", "Culture"],
    description: "Explore majestic palaces, desert landscapes, and rich Rajputana culture in the land of kings.",
    season: "Nov-Feb",
  },
  {
    id: 3,
    name: "Kerala, India",
    image: "/kerala-backwaters-houseboat-coconut-trees-green-la.jpg",
    rating: 4.7,
    duration: "5-8 days",
    price: "From ₹10,000",
    tags: ["Backwaters", "Ayurveda", "Spices"],
    description: "Cruise through serene backwaters, experience Ayurvedic treatments, and explore spice plantations.",
    season: "Sep-Mar",
  },
  {
    id: 4,
    name: "Himachal Pradesh, India",
    image: "/himachal-pradesh-mountains-snow-peaks-valleys-mana.jpg",
    rating: 4.8,
    duration: "6-9 days",
    price: "From ₹9,000",
    tags: ["Mountains", "Adventure", "Snow"],
    description: "Discover snow-capped peaks, adventure sports, and peaceful hill stations in the Himalayas.",
    season: "Mar-Jun, Oct-Feb",
  },
  {
    id: 5,
    name: "Tamil Nadu, India",
    image: "/tamil-nadu-temple-architecture-madurai-colorful-go.jpg",
    rating: 4.6,
    duration: "5-7 days",
    price: "From ₹7,500",
    tags: ["Temples", "Culture", "Classical Arts"],
    description: "Marvel at ancient temple architecture, classical dance forms, and rich Dravidian heritage.",
    season: "Nov-Mar",
  },
  {
    id: 6,
    name: "Uttarakhand, India",
    image: "/uttarakhand-rishikesh-ganges-river-yoga-spiritual-.jpg",
    rating: 4.9,
    duration: "4-6 days",
    price: "From ₹6,000",
    tags: ["Spiritual", "Yoga", "Rivers"],
    description: "Find spiritual peace along the Ganges, practice yoga, and explore sacred pilgrimage sites.",
    season: "Sep-Nov, Feb-May",
  },
]

export function DestinationsSection() {
  return (
    <section id="destinations" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-green-50"></div>
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23f97316' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      ></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-100 to-green-100 px-4 py-2 rounded-full mb-6">
            <span className="text-2xl">🇮🇳</span>
            <span className="text-sm font-medium text-orange-800">Incredible India Awaits</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance bg-gradient-to-r from-orange-600 to-green-600 bg-clip-text text-transparent">
            Popular Indian Destinations
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Discover India's diverse landscapes, rich culture, and unforgettable experiences curated by our AI travel
            expert.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination) => (
            <Card
              key={destination.id}
              className="group hover:shadow-xl transition-all duration-500 overflow-hidden border-0 shadow-lg bg-white/80 backdrop-blur-sm"
            >
              <div className="relative overflow-hidden">
                <img
                  src={destination.image || "/placeholder.svg"}
                  alt={destination.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary" className="bg-white/95 text-foreground shadow-lg">
                    <Star className="h-3 w-3 mr-1 fill-yellow-400 text-yellow-400" />
                    {destination.rating}
                  </Badge>
                </div>
                <div className="absolute top-4 left-4">
                  <Badge className="bg-gradient-to-r from-orange-500 to-green-500 text-white shadow-lg">
                    <Thermometer className="h-3 w-3 mr-1" />
                    {destination.season}
                  </Badge>
                </div>
              </div>

              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {destination.name}
                  </CardTitle>
                  <div className="text-sm font-bold text-green-600 bg-green-50 px-2 py-1 rounded-full">
                    {destination.price}
                  </div>
                </div>

                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-1 text-orange-500" />
                    India
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1 text-green-500" />
                    {destination.duration}
                  </div>
                </div>
              </CardHeader>

              <CardContent className="pt-0">
                <p className="text-sm text-muted-foreground mb-4 text-pretty leading-relaxed">
                  {destination.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {destination.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="outline"
                      className="text-xs border-orange-200 text-orange-700 hover:bg-orange-50"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                <Button className="w-full bg-gradient-to-r from-orange-500 to-green-500 hover:from-orange-600 hover:to-green-600 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  Explore {destination.name.split(",")[0]}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            size="lg"
            className="bg-gradient-to-r from-orange-500 to-green-500 hover:from-orange-600 hover:to-green-600 text-white px-8 py-3 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Discover All Indian Destinations
          </Button>
        </div>
      </div>
    </section>
  )
}
