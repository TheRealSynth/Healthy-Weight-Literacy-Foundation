import type { Metadata } from "next"
import Link from "next/link"
import { MapPin, Clock, Building2, Heart, ExternalLink } from "lucide-react"
import { Section } from "@/components/layout/section"
import { Container } from "@/components/layout/container"
import { PageHeader } from "@/components/layout/page-header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { generatePageMetadata } from "@/lib/seo"

export const metadata: Metadata = generatePageMetadata({
  title: "Careers",
  description: "Join our team and make a meaningful impact on community health and wellness.",
  path: "/careers",
})

const openPositions = [
  {
    title: "Program Coordinator",
    department: "Programs",
    location: "Hybrid - Chicago, IL",
    type: "Full-time",
    description: "Coordinate community wellness programs and manage relationships with partner organizations.",
  },
  {
    title: "Registered Dietitian",
    department: "Clinical",
    location: "Remote",
    type: "Part-time",
    description: "Provide telehealth nutrition consultations and develop educational content for our programs.",
  },
  {
    title: "Community Outreach Specialist",
    department: "Outreach",
    location: "On-site - Los Angeles, CA",
    type: "Full-time",
    description: "Build relationships with community partners and lead health education initiatives.",
  },
  {
    title: "Development Associate",
    department: "Development",
    location: "Hybrid - New York, NY",
    type: "Full-time",
    description: "Support fundraising efforts through donor research, grant writing, and event coordination.",
  },
]

const benefits = [
  "Comprehensive health, dental, and vision insurance",
  "Flexible work arrangements",
  "Professional development stipend",
  "Generous PTO and paid holidays",
  "401(k) with employer match",
  "Wellness program benefits",
]

export default function CareersPage() {
  return (
    <>
      <PageHeader
        title="Join Our Team"
        description="Help us build a healthier future for families and communities across the nation."
        breadcrumbs={[{ label: "Careers" }]}
      />

      {/* Why Work Here */}
      <Section>
        <Container size="md">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary mb-4">Why Work at HWLF?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We&apos;re a passionate team dedicated to making evidence-based wellness education accessible to all. When
              you join HWLF, you become part of a mission-driven organization that values innovation, collaboration, and
              impact.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit) => (
              <Card key={benefit} className="text-center">
                <CardContent className="pt-6">
                  <div className="flex items-center justify-center gap-2">
                    <Heart className="h-4 w-4 text-primary" />
                    <span className="text-sm">{benefit}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Open Positions */}
      <Section background="muted">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary mb-4">Open Positions</h2>
            <p className="text-muted-foreground">Explore current opportunities to join our growing team.</p>
          </div>

          <div className="space-y-4">
            {openPositions.map((position) => (
              <Card key={position.title} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                      <CardTitle className="text-xl">{position.title}</CardTitle>
                      <CardDescription className="mt-1">{position.description}</CardDescription>
                    </div>
                    <Button className="shrink-0">
                      Apply Now
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="flex items-center gap-1">
                      <Building2 className="h-3 w-3" />
                      {position.department}
                    </Badge>
                    <Badge variant="outline" className="flex items-center gap-1">
                      <MapPin className="h-3 w-3" />
                      {position.location}
                    </Badge>
                    <Badge variant="outline" className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {position.type}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Don't See a Fit */}
      <Section>
        <Container size="sm" className="text-center">
          <h2 className="text-2xl font-bold text-secondary mb-4">Don&apos;t See the Right Fit?</h2>
          <p className="text-muted-foreground mb-6">
            We&apos;re always looking for talented individuals who share our passion for community health. Send us your
            resume and let us know how you&apos;d like to contribute.
          </p>
          <Link href="/contact">
            <Button variant="outline">Contact Us</Button>
          </Link>
        </Container>
      </Section>
    </>
  )
}
