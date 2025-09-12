import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain, Calendar, MapPin, Shield, Clock, Users } from "lucide-react"

const features = [
  {
    icon: Brain,
    title: "AI-Powered Indian Insights",
    description:
      "Our advanced AI analyzes Indian travel patterns, local preferences, and cultural nuances to suggest perfect destinations across India.",
  },
  {
    icon: Calendar,
    title: "Festival & Season Planning",
    description:
      "Get detailed itineraries considering Indian festivals, monsoons, and optimal travel seasons for each region.",
  },
  {
    icon: MapPin,
    title: "Local Indian Expertise",
    description:
      "Access exclusive knowledge about Indian customs, local transportation, and hidden gems in every Indian city.",
  },
  {
    icon: Shield,
    title: "Safe Indian Travel",
    description:
      "Travel confidently with our India-specific safety tips, trusted local contacts, and 24/7 support in multiple Indian languages.",
  },
  {
    icon: Clock,
    title: "Real-time India Updates",
    description:
      "Stay informed with live updates on Indian weather, festivals, train schedules, and local events affecting your trip.",
  },
  {
    icon: Users,
    title: "Indian Group Travel",
    description:
      "Plan perfect group trips considering Indian family dynamics, budget preferences, and cultural requirements.",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-white to-orange-50"></div>
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%2315803d' fillOpacity='0.1'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E")`,
        }}
      ></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-100 to-orange-100 px-4 py-2 rounded-full mb-6">
            <span className="text-xl">🏛️</span>
            <span className="text-sm font-medium text-green-800">Smart Indian Travel</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance bg-gradient-to-r from-green-600 to-orange-600 bg-clip-text text-transparent">
            Why Choose Smart Travel Curator for India?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Experience India like never before with our intelligent features designed specifically for Indian travel
            culture, customs, and preferences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="text-center hover:shadow-xl transition-all duration-500 border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:-translate-y-2 group"
            >
              <CardHeader>
                <div className="mx-auto mb-4 p-4 bg-gradient-to-br from-orange-100 to-green-100 rounded-full w-fit group-hover:from-orange-200 group-hover:to-green-200 transition-all duration-300 shadow-lg">
                  <feature.icon className="h-8 w-8 text-orange-600 group-hover:text-green-600 transition-colors duration-300" />
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-pretty leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
