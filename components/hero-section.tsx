import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Calendar, Users, Sparkles } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/beautiful-tropical-beach-with-crystal-clear-water-.jpg"
          alt="Beautiful travel destination"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <div className="flex items-center justify-center mb-6">
            <Sparkles className="h-8 w-8 text-accent mr-3" />
            <span className="text-lg font-medium">AI-Powered Travel Planning</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
            Discover Your Perfect
            <span className="text-accent block">Travel Experience</span>
          </h1>

          <p className="text-xl md:text-2xl mb-8 text-gray-200 text-pretty max-w-3xl mx-auto">
            Let our smart AI curator create personalized itineraries tailored to your preferences, budget, and travel
            style.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="text-lg px-8 py-3">
              Start Planning Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-3 bg-white/10 border-white/20 text-white hover:bg-white/20"
            >
              Explore Destinations
            </Button>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
            <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <MapPin className="h-8 w-8 text-accent mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">500+</div>
                <div className="text-sm text-gray-200">Destinations</div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <Users className="h-8 w-8 text-accent mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">50K+</div>
                <div className="text-sm text-gray-200">Happy Travelers</div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <Calendar className="h-8 w-8 text-accent mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">24/7</div>
                <div className="text-sm text-gray-200">AI Support</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
