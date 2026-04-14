"use client"

import { useEffect, useState } from "react"
import { MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const cities = ["Dayton", "Columbus", "Cincinnati", "Cleveland"]
const categories = ["All", "Food Assistance", "Health Clinics", "Community Centers", "Nutrition Programs"]

interface CityTabsProps {
  defaultCity?: string
}

export function CityTabs({ defaultCity = "Dayton" }: CityTabsProps) {
  const [selectedCity, setSelectedCity] = useState(defaultCity)
  const [selectedCategory, setSelectedCategory] = useState("All")

  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>("[data-city-section]")
    sections.forEach((section) => {
      const cityMatch = section.dataset.citySection === selectedCity
      section.style.display = cityMatch ? "" : "none"
    })

    const cards = document.querySelectorAll<HTMLElement>("[data-resource-category]")
    cards.forEach((card) => {
      const categoryMatch =
        selectedCategory === "All" || card.dataset.resourceCategory === selectedCategory
      card.style.display = categoryMatch ? "" : "none"
    })
  }, [selectedCity, selectedCategory])

  return (
    <>
      {/* City Selector */}
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {cities.map((city) => (
          <Button
            key={city}
            variant={selectedCity === city ? "default" : "outline"}
            onClick={() => {
              setSelectedCity(city)
              setSelectedCategory("All")
            }}
            className="min-w-[120px]"
          >
            <MapPin className="mr-2 h-4 w-4" />
            {city}
          </Button>
        ))}
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {categories.map((cat) => (
          <Badge
            key={cat}
            variant={selectedCategory === cat ? "default" : "outline"}
            className="cursor-pointer text-sm px-4 py-1.5 transition-colors hover:bg-primary/10"
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </Badge>
        ))}
      </div>
    </>
  )
}
