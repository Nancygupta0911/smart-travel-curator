"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, MapPin, User, Search } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <MapPin className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold text-foreground">TravelCurator</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/explore"
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Explore Cities
            </Link>
            <Link
              href="/cost-calculator"
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Cost Calculator
            </Link>
            <Link
              href="/travel-buddy"
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Find Buddy
            </Link>
            <Link
              href="/food-map"
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Food Map
            </Link>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="sm">
              <Search className="h-4 w-4 mr-2" />
              Search
            </Button>
            <Button variant="ghost" size="sm">
              <User className="h-4 w-4 mr-2" />
              Sign In
            </Button>
            <Button size="sm">Get Started</Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <Link href="/explore" className="text-sm font-medium text-muted-foreground hover:text-primary">
                Explore Cities
              </Link>
              <Link href="/cost-calculator" className="text-sm font-medium text-muted-foreground hover:text-primary">
                Cost Calculator
              </Link>
              <Link href="/travel-buddy" className="text-sm font-medium text-muted-foreground hover:text-primary">
                Find Buddy
              </Link>
              <Link href="/food-map" className="text-sm font-medium text-muted-foreground hover:text-primary">
                Food Map
              </Link>
              <div className="flex flex-col space-y-2 pt-4">
                <Button variant="ghost" size="sm">
                  <Search className="h-4 w-4 mr-2" />
                  Search
                </Button>
                <Button variant="ghost" size="sm">
                  <User className="h-4 w-4 mr-2" />
                  Sign In
                </Button>
                <Button size="sm">Get Started</Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
