"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { MessageCircle, Send, Users, MapPin, Calendar } from "lucide-react"

interface Message {
  id: number
  sender: "user" | "bot"
  content: string
  timestamp: Date
}

interface TravelBuddy {
  id: number
  name: string
  age: number
  interests: string[]
  preferredCities: string[]
  travelStyle: string
}

export function TravelBuddyChat() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      sender: "bot",
      content:
        "Hi! I'm your Travel Buddy Assistant. I can help you find travel companions for your Delhi trip. What kind of travel experience are you looking for?",
      timestamp: new Date(),
    },
  ])
  const [inputMessage, setInputMessage] = useState("")
  const [suggestedBuddies, setSuggestedBuddies] = useState<TravelBuddy[]>([])

  const mockBuddies: TravelBuddy[] = [
    {
      id: 1,
      name: "Priya Sharma",
      age: 28,
      interests: ["Photography", "History", "Street Food"],
      preferredCities: ["Delhi", "Agra", "Jaipur"],
      travelStyle: "Cultural Explorer",
    },
    {
      id: 2,
      name: "Rahul Kumar",
      age: 32,
      interests: ["Adventure", "Local Culture", "Budget Travel"],
      preferredCities: ["Delhi", "Rishikesh", "Manali"],
      travelStyle: "Budget Adventurer",
    },
    {
      id: 3,
      name: "Anjali Patel",
      age: 25,
      interests: ["Art", "Museums", "Fine Dining"],
      preferredCities: ["Delhi", "Mumbai", "Bangalore"],
      travelStyle: "Luxury Traveler",
    },
  ]

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return

    const userMessage: Message = {
      id: messages.length + 1,
      sender: "user",
      content: inputMessage,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])

    // Simulate bot response
    setTimeout(() => {
      let botResponse = ""
      const lowerInput = inputMessage.toLowerCase()

      if (lowerInput.includes("budget") || lowerInput.includes("cheap")) {
        botResponse =
          "Great! I found some budget-friendly travel companions who love exploring Delhi affordably. They prefer local transport, street food, and free attractions."
        setSuggestedBuddies([mockBuddies[1]])
      } else if (lowerInput.includes("luxury") || lowerInput.includes("comfort")) {
        botResponse =
          "Perfect! I have travelers who enjoy comfortable accommodations and fine dining experiences in Delhi."
        setSuggestedBuddies([mockBuddies[2]])
      } else if (lowerInput.includes("photography") || lowerInput.includes("history")) {
        botResponse =
          "Excellent! I found fellow photography and history enthusiasts who would love to explore Delhi's monuments and capture beautiful moments."
        setSuggestedBuddies([mockBuddies[0]])
      } else if (lowerInput.includes("food") || lowerInput.includes("eat")) {
        botResponse =
          "Foodie alert! I have travel companions who are passionate about Delhi's incredible street food scene and local cuisine."
        setSuggestedBuddies([mockBuddies[0], mockBuddies[1]])
      } else {
        botResponse =
          "I understand! Let me suggest some travel companions based on popular interests in Delhi. You can filter by travel style, age, or specific interests."
        setSuggestedBuddies(mockBuddies)
      }

      const botMessage: Message = {
        id: messages.length + 2,
        sender: "bot",
        content: botResponse,
        timestamp: new Date(),
      }

      setMessages((prev) => [...prev, botMessage])
    }, 1000)

    setInputMessage("")
  }

  const quickQuestions = [
    "I'm looking for budget travel companions",
    "Find photography enthusiasts",
    "I want to explore street food",
    "Looking for cultural experiences",
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-balance mb-4">Find Your Travel Buddy</h1>
        <p className="text-lg text-muted-foreground text-pretty">
          Connect with like-minded travelers for your Delhi adventure
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <Card className="h-[600px] flex flex-col">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageCircle className="h-5 w-5" />
                Travel Buddy Assistant
              </CardTitle>
              <CardDescription>Chat with our AI to find the perfect travel companion</CardDescription>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col">
              <div className="flex-1 overflow-y-auto space-y-4 mb-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[80%] rounded-lg p-3 ${
                        message.sender === "user" ? "bg-primary text-primary-foreground" : "bg-muted"
                      }`}
                    >
                      <p className="text-sm">{message.content}</p>
                      <p className="text-xs opacity-70 mt-1">{message.timestamp.toLocaleTimeString()}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-3">
                <div className="flex flex-wrap gap-2">
                  {quickQuestions.map((question, index) => (
                    <Button key={index} variant="outline" size="sm" onClick={() => setInputMessage(question)}>
                      {question}
                    </Button>
                  ))}
                </div>

                <div className="flex gap-2">
                  <Input
                    placeholder="Ask about travel companions..."
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                  />
                  <Button onClick={handleSendMessage}>
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                Suggested Companions
              </CardTitle>
            </CardHeader>
            <CardContent>
              {suggestedBuddies.length === 0 ? (
                <p className="text-sm text-muted-foreground text-center py-8">
                  Start chatting to get personalized travel buddy suggestions!
                </p>
              ) : (
                <div className="space-y-4">
                  {suggestedBuddies.map((buddy) => (
                    <Card key={buddy.id} className="p-4">
                      <div className="flex items-start gap-3">
                        <Avatar>
                          <AvatarFallback>
                            {buddy.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1 space-y-2">
                          <div>
                            <h4 className="font-semibold">{buddy.name}</h4>
                            <p className="text-sm text-muted-foreground">
                              {buddy.age} years • {buddy.travelStyle}
                            </p>
                          </div>
                          <div className="flex flex-wrap gap-1">
                            {buddy.interests.map((interest, index) => (
                              <Badge key={index} variant="secondary" className="text-xs">
                                {interest}
                              </Badge>
                            ))}
                          </div>
                          <div className="flex items-center gap-1 text-xs text-muted-foreground">
                            <MapPin className="h-3 w-3" />
                            {buddy.preferredCities.join(", ")}
                          </div>
                          <Button size="sm" className="w-full">
                            Connect
                          </Button>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                Upcoming Group Trips
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="border rounded-lg p-3">
                  <h4 className="font-medium text-sm">Delhi Heritage Walk</h4>
                  <p className="text-xs text-muted-foreground">Dec 15, 2024 • 6 travelers</p>
                  <Button size="sm" variant="outline" className="w-full mt-2 bg-transparent">
                    Join Group
                  </Button>
                </div>
                <div className="border rounded-lg p-3">
                  <h4 className="font-medium text-sm">Street Food Tour</h4>
                  <p className="text-xs text-muted-foreground">Dec 20, 2024 • 4 travelers</p>
                  <Button size="sm" variant="outline" className="w-full mt-2 bg-transparent">
                    Join Group
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
