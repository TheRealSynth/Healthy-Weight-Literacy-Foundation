"use client"

import { useState } from "react"
import Link from "next/link"
import {
  MapPin,
  Phone,
  Globe,
  UtensilsCrossed,
  Stethoscope,
  Building2,
  Apple,
  AlertTriangle,
} from "lucide-react"
import { Section } from "@/components/layout/section"
import { Container } from "@/components/layout/container"
import { PageHeader } from "@/components/layout/page-header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const categoryIcons: Record<string, typeof MapPin> = {
  "Food Assistance": UtensilsCrossed,
  "Health Clinics": Stethoscope,
  "Community Centers": Building2,
  "Nutrition Programs": Apple,
}

const cityData = [
  {
    name: "Dayton",
    region: "Miami Valley (HWLF Headquarters)",
    resources: [
      {
        name: "Dayton Foodbank",
        category: "Food Assistance",
        address: "56 Armor Place, Dayton, OH 45417",
        phone: "(937) 461-0265",
        website: "https://thefoodbankdayton.org",
        description:
          "Distributes food to hunger relief member agencies throughout the region, serving over 100,000 people annually.",
      },
      {
        name: "Five Rivers Health Centers",
        category: "Health Clinics",
        address: "725 S. Ludlow Street, Dayton, OH 45402",
        phone: "(937) 734-5785",
        website: "https://www.fiverivershealthcenters.org",
        description:
          "Federally qualified health center offering primary care, behavioral health, and dental services on a sliding fee scale.",
      },
      {
        name: "East End Community Services",
        category: "Community Centers",
        address: "624 Xenia Ave, Dayton, OH 45410",
        phone: "(937) 259-1898",
        website: "https://www.eastendcommunityservices.org",
        description: "Provides food pantry, youth programs, financial literacy, and community health resources.",
      },
      {
        name: "Montgomery County WIC Program",
        category: "Nutrition Programs",
        address: "451 W. Third Street, Dayton, OH 45422",
        phone: "(937) 225-4550",
        website: "https://www.mcohio.org/wic",
        description:
          "Supplemental nutrition program for women, infants, and children. Provides nutrition education, breastfeeding support, and food benefits.",
      },
    ],
  },
  {
    name: "Columbus",
    region: "Central Ohio",
    resources: [
      {
        name: "Mid-Ohio Food Collective",
        category: "Food Assistance",
        address: "3960 Brookham Dr, Grove City, OH 43123",
        phone: "(614) 274-7770",
        website: "https://www.midohiofoodcollective.org",
        description:
          "Largest hunger relief organization in central Ohio, distributing over 75 million pounds of food annually through 680+ partner agencies.",
      },
      {
        name: "Columbus Neighborhood Health Centers",
        category: "Health Clinics",
        address: "Multiple locations across Columbus",
        phone: "(614) 645-5500",
        website: "https://www.columbus.gov/publichealth",
        description:
          "City-operated health centers providing primary care, immunizations, and preventive health services.",
      },
      {
        name: "YMCA of Central Ohio",
        category: "Community Centers",
        address: "Multiple locations",
        phone: "(614) 224-1142",
        website: "https://www.ymcacolumbus.org",
        description:
          "Community wellness programs including nutrition education, fitness classes, chronic disease prevention, and youth health programs.",
      },
      {
        name: "OSU Extension - Franklin County",
        category: "Nutrition Programs",
        address: "2548 Carmack Rd, Columbus, OH 43210",
        phone: "(614) 292-6181",
        website: "https://franklin.osu.edu",
        description:
          "SNAP-Ed nutrition education, community cooking classes, and food resource management programs.",
      },
    ],
  },
  {
    name: "Cincinnati",
    region: "Southwest Ohio",
    resources: [
      {
        name: "Freestore Foodbank",
        category: "Food Assistance",
        address: "1141 Central Pkwy, Cincinnati, OH 45202",
        phone: "(513) 482-3663",
        website: "https://www.freestorefoodbank.org",
        description:
          "Serves a 20-county region with food distribution, nutrition education, and cooking programs for families.",
      },
      {
        name: "HealthCare Connection",
        category: "Health Clinics",
        address: "Multiple locations in Greater Cincinnati",
        phone: "(513) 860-9226",
        website: "https://www.hcc-cares.org",
        description:
          "Federally qualified health center providing medical, dental, behavioral health, and nutrition counseling services.",
      },
      {
        name: "Santa Maria Community Services",
        category: "Community Centers",
        address: "2025 Eastern Ave, Cincinnati, OH 45202",
        phone: "(513) 557-2700",
        website: "https://www.santamaria-cincy.org",
        description:
          "Provides family-centered services including health education, nutrition programs, and community wellness initiatives.",
      },
      {
        name: "Cooking for a Lifetime - UC Health",
        category: "Nutrition Programs",
        address: "UC Health locations, Cincinnati",
        phone: "(513) 584-1000",
        website: "https://www.uchealth.com",
        description:
          "Hospital-based nutrition counseling and cooking education programs focused on chronic disease prevention and healthy eating.",
      },
    ],
  },
  {
    name: "Cleveland",
    region: "Northeast Ohio",
    resources: [
      {
        name: "Greater Cleveland Food Bank",
        category: "Food Assistance",
        address: "15500 S. Waterloo Rd, Cleveland, OH 44110",
        phone: "(216) 738-2265",
        website: "https://www.greaterclevelandfoodbank.org",
        description:
          "Provides food to over 350,000 people in six northeast Ohio counties through 1,000+ programs and partner agencies.",
      },
      {
        name: "MetroHealth System",
        category: "Health Clinics",
        address: "2500 MetroHealth Dr, Cleveland, OH 44109",
        phone: "(216) 778-7800",
        website: "https://www.metrohealth.org",
        description:
          "Public health system offering primary care, nutrition services, and chronic disease management across multiple community health centers.",
      },
      {
        name: "Neighborhood Leadership Development Program",
        category: "Community Centers",
        address: "Cleveland neighborhoods",
        phone: "(216) 812-8700",
        website: "https://www.clevelandnp.org",
        description:
          "Supports neighborhood-based health initiatives, community gardens, and resident-led wellness programming.",
      },
      {
        name: "OSU Extension - Cuyahoga County",
        category: "Nutrition Programs",
        address: "2490 Lee Blvd, Suite 108, Cleveland Heights, OH 44118",
        phone: "(216) 429-8200",
        website: "https://cuyahoga.osu.edu",
        description:
          "Offers SNAP-Ed nutrition education, EFNEP family nutrition programs, and community health workshops.",
      },
    ],
  },
]

const categories = ["All", "Food Assistance", "Health Clinics", "Community Centers", "Nutrition Programs"]

export default function CityResourcesPage() {
  const [selectedCity, setSelectedCity] = useState("Dayton")
  const [selectedCategory, setSelectedCategory] = useState("All")

  const currentCity = cityData.find((c) => c.name === selectedCity) || cityData[0]
  const filteredResources =
    selectedCategory === "All"
      ? currentCity.resources
      : currentCity.resources.filter((r) => r.category === selectedCategory)

  return (
    <>
      <PageHeader
        title="Ohio Community Resources"
        description="Find local health, nutrition, and community resources in cities across Ohio. Our foundation connects individuals and families with trusted organizations in their area."
        breadcrumbs={[{ label: "City Resources" }]}
      />

      {/* City Selector */}
      <Section>
        <Container>
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold tracking-tight text-secondary sm:text-3xl mb-2">Select Your City</h2>
            <p className="text-muted-foreground">Choose a city to view available community resources</p>
          </div>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {cityData.map((city) => (
              <Button
                key={city.name}
                variant={selectedCity === city.name ? "default" : "outline"}
                onClick={() => {
                  setSelectedCity(city.name)
                  setSelectedCategory("All")
                }}
                className="min-w-[120px]"
              >
                <MapPin className="mr-2 h-4 w-4" />
                {city.name}
              </Button>
            ))}
          </div>

          {/* City header */}
          <div className="text-center mb-8">
            <h3 className="text-xl font-semibold text-secondary">{currentCity.name}</h3>
            <p className="text-sm text-muted-foreground">{currentCity.region}</p>
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

          {/* Resource Cards */}
          <div className="grid gap-6 md:grid-cols-2 max-w-5xl mx-auto">
            {filteredResources.map((resource) => {
              const Icon = categoryIcons[resource.category] || MapPin
              return (
                <Card key={resource.name} className="hover:shadow-md transition-shadow">
                  <CardHeader className="pb-3">
                    <div className="flex items-start gap-3">
                      <div className="h-10 w-10 rounded-lg bg-primary-soft flex items-center justify-center shrink-0">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <CardTitle className="text-lg leading-tight">{resource.name}</CardTitle>
                        <Badge variant="secondary" className="mt-1 text-xs">
                          {resource.category}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">{resource.description}</p>
                    <div className="flex flex-col gap-2 text-sm">
                      <div className="flex items-start gap-2 text-muted-foreground">
                        <MapPin className="h-4 w-4 shrink-0 mt-0.5" />
                        <span>{resource.address}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Phone className="h-4 w-4 shrink-0" />
                        <a href={`tel:${resource.phone}`} className="hover:text-primary transition-colors">
                          {resource.phone}
                        </a>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Globe className="h-4 w-4 shrink-0" />
                        <a
                          href={resource.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-primary transition-colors truncate"
                        >
                          Visit Website
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </Container>
      </Section>

      {/* Disclaimer */}
      <Section background="muted">
        <Container size="sm">
          <Card className="border-amber-200 bg-amber-50">
            <CardContent className="p-6">
              <div className="flex items-start gap-3">
                <AlertTriangle className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-amber-900 mb-1">Information Disclaimer</h3>
                  <p className="text-amber-800 text-sm leading-relaxed">
                    Resource information is provided for reference and may change without notice. We recommend contacting
                    organizations directly to confirm current services, hours, and eligibility requirements. HWLF is not
                    affiliated with the listed organizations and does not guarantee the availability of services.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </Container>
      </Section>

      {/* Submit a Resource */}
      <Section>
        <Container size="sm" className="text-center">
          <h2 className="text-2xl font-bold text-secondary mb-4">Know a Resource We Should List?</h2>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            Help us expand our directory by submitting community health resources in your area. We are always looking
            to connect people with trusted local organizations.
          </p>
          <Link href="/contact">
            <Button>Submit a Resource</Button>
          </Link>
        </Container>
      </Section>
    </>
  )
}
