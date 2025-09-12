import { Header } from "@/components/header"
import { EnhancedHeroSection } from "@/components/enhanced-hero-section"
import { DestinationsSection } from "@/components/destinations-section"
import { FeaturesSection } from "@/components/features-section"
import { TripPlannerSection } from "@/components/trip-planner-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <EnhancedHeroSection />
        <DestinationsSection />
        <FeaturesSection />
        <TripPlannerSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
