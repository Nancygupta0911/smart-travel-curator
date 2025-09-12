import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Priya Sharma",
    location: "Mumbai, India",
    avatar: "/indian-woman-smiling.png",
    rating: 5,
    text: "The AI perfectly planned our Kerala backwater trip! Found amazing houseboats and authentic Ayurvedic centers we never knew existed.",
  },
  {
    name: "Rajesh Kumar",
    location: "Delhi, India",
    avatar: "/indian-man-smiling.png",
    rating: 5,
    text: "Saved us so much time planning our Rajasthan heritage tour. The cost calculator helped us budget perfectly for our family of 6.",
  },
  {
    name: "Anita Patel",
    location: "Ahmedabad, India",
    avatar: "/gujarati-woman-smiling.jpg",
    rating: 5,
    text: "As a solo female traveler, the safety tips for Himachal Pradesh were invaluable. The travel buddy feature helped me find great companions!",
  },
  {
    name: "Vikram Singh",
    location: "Jaipur, India",
    avatar: "/rajasthani-man-smiling.jpg",
    rating: 5,
    text: "The food map feature is incredible! Discovered the best street food in Old Delhi and authentic South Indian restaurants in Bangalore.",
  },
  {
    name: "Meera Nair",
    location: "Kochi, India",
    avatar: "/south-indian-woman-smiling.jpg",
    rating: 5,
    text: "The cultural guide helped us understand local customs before visiting Tamil Nadu temples. Made our spiritual journey so much more meaningful.",
  },
  {
    name: "Arjun Reddy",
    location: "Hyderabad, India",
    avatar: "/telugu-man-smiling.jpg",
    rating: 5,
    text: "Crowd analytics saved our Goa trip! Avoided peak tourist spots and found peaceful beaches. The weather integration was spot-on too.",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-white to-rose-50"></div>
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23f59e0b' fillOpacity='0.1'%3E%3Cpath d='M40 40c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm20 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z'/%3E%3C/g%3E%3C/svg%3E")`,
        }}
      ></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-100 to-rose-100 px-4 py-2 rounded-full mb-6">
            <span className="text-xl">💬</span>
            <span className="text-sm font-medium text-amber-800">Happy Indian Travelers</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance bg-gradient-to-r from-amber-600 to-rose-600 bg-clip-text text-transparent">
            What Our Indian Travelers Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Join thousands of satisfied Indian travelers who have discovered incredible experiences across India with
            our AI-powered platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="hover:shadow-xl transition-all duration-500 border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:-translate-y-2 group"
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <p className="text-muted-foreground mb-6 text-pretty leading-relaxed">"{testimonial.text}"</p>

                <div className="flex items-center space-x-3">
                  <Avatar className="ring-2 ring-amber-200 group-hover:ring-amber-300 transition-all duration-300">
                    <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                    <AvatarFallback className="bg-gradient-to-br from-amber-100 to-rose-100 text-amber-700">
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-medium group-hover:text-primary transition-colors">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
