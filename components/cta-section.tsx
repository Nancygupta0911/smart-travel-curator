import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Sparkles, ArrowRight, MapPin } from "lucide-react"
import Link from "next/link"

export function CTASection() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500 via-white to-green-500"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-orange-600/90 to-green-600/90"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <Card className="max-w-4xl mx-auto bg-white/95 backdrop-blur-sm border-0 shadow-2xl">
          <CardContent className="p-12 text-center">
            <div className="flex items-center justify-center mb-6">
              <MapPin className="h-12 w-12 text-orange-500 mr-4" />
              <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-orange-600 to-green-600 bg-clip-text text-transparent text-balance">
                Ready to Explore Incredible India?
              </h2>
            </div>

            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty leading-relaxed">
              Join thousands of Indian travelers who have discovered hidden gems, authentic experiences, and perfect
              itineraries across India with our AI-powered platform.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <Button
                size="lg"
                className="text-lg px-8 py-3 bg-gradient-to-r from-orange-500 to-green-500 hover:from-orange-600 hover:to-green-600 shadow-lg"
                asChild
              >
                <Link href="/explore">
                  <Sparkles className="h-5 w-5 mr-2" />
                  Start Exploring India
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-3 border-orange-200 text-orange-700 hover:bg-orange-50 shadow-lg bg-transparent"
                asChild
              >
                <Link href="/travel-buddy">Find Travel Buddy</Link>
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-muted-foreground">
              <div className="flex items-center justify-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                Free to start exploring
              </div>
              <div className="flex items-center justify-center gap-2">
                <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                50+ Indian cities covered
              </div>
              <div className="flex items-center justify-center gap-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                AI-powered recommendations
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
