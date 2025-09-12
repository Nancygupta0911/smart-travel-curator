"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { CalendarDays, Users, DollarSign, Sparkles } from "lucide-react"

export function TripPlannerSection() {
  const [formData, setFormData] = useState({
    destination: "",
    duration: "",
    travelers: "",
    budget: "",
    interests: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Trip planning form submitted:", formData)
  }

  return (
    <section id="planner" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Plan Your Perfect Trip</h2>
            <p className="text-lg text-muted-foreground text-pretty">
              Tell us about your dream trip and let our AI create a personalized itinerary just for you.
            </p>
          </div>

          <Card className="shadow-xl">
            <CardHeader className="text-center pb-6">
              <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                <Sparkles className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-2xl">AI Trip Planner</CardTitle>
            </CardHeader>

            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="destination">Where do you want to go?</Label>
                    <Input
                      id="destination"
                      placeholder="e.g., Paris, Tokyo, Bali"
                      value={formData.destination}
                      onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="duration">Trip Duration</Label>
                    <Select onValueChange={(value) => setFormData({ ...formData, duration: value })}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select duration" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1-3">1-3 days</SelectItem>
                        <SelectItem value="4-7">4-7 days</SelectItem>
                        <SelectItem value="8-14">1-2 weeks</SelectItem>
                        <SelectItem value="15+">2+ weeks</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="travelers">Number of Travelers</Label>
                    <Select onValueChange={(value) => setFormData({ ...formData, travelers: value })}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select travelers" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">Solo traveler</SelectItem>
                        <SelectItem value="2">Couple</SelectItem>
                        <SelectItem value="3-5">Small group (3-5)</SelectItem>
                        <SelectItem value="6+">Large group (6+)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="budget">Budget Range</Label>
                    <Select onValueChange={(value) => setFormData({ ...formData, budget: value })}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select budget" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="budget">Budget ($500-1000)</SelectItem>
                        <SelectItem value="mid">Mid-range ($1000-3000)</SelectItem>
                        <SelectItem value="luxury">Luxury ($3000+)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="interests">What are you interested in?</Label>
                  <Textarea
                    id="interests"
                    placeholder="e.g., beaches, museums, local food, adventure activities, nightlife..."
                    value={formData.interests}
                    onChange={(e) => setFormData({ ...formData, interests: e.target.value })}
                    rows={3}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-6 bg-muted/50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <CalendarDays className="h-5 w-5 text-primary" />
                    <div>
                      <div className="font-medium">Instant Planning</div>
                      <div className="text-sm text-muted-foreground">Get results in seconds</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Users className="h-5 w-5 text-primary" />
                    <div>
                      <div className="font-medium">Personalized</div>
                      <div className="text-sm text-muted-foreground">Tailored to your style</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <DollarSign className="h-5 w-5 text-primary" />
                    <div>
                      <div className="font-medium">Best Prices</div>
                      <div className="text-sm text-muted-foreground">Optimized for your budget</div>
                    </div>
                  </div>
                </div>

                <Button type="submit" size="lg" className="w-full">
                  Create My Trip Itinerary
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
