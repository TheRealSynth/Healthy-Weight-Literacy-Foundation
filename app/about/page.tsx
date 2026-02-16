import type { Metadata } from "next"
import Image from "next/image"
import { Section } from "@/components/layout/section"
import { Container } from "@/components/layout/container"
import { Card, CardContent } from "@/components/ui/card"
import { generatePageMetadata } from "@/lib/seo"
import { BookOpen, Users, Target, Shield } from "lucide-react"

export const metadata: Metadata = generatePageMetadata({
  title: "About Us",
  description:
    "Learn about the Healthy Weight Literacy Foundation's mission to improve public health through clear, evidence-based education on nutrition, weight management, and metabolic health.",
  path: "/about",
})

const values = [
  {
    icon: Shield,
    title: "Evidence-Based",
    description: "Our educational content is grounded in the latest scientific research and best practices.",
  },
  {
    icon: Users,
    title: "Community-Focused",
    description:
      "We prioritize serving underserved and low-income communities with limited access to health education.",
  },
  {
    icon: Target,
    title: "Educational Mission",
    description: "We focus on providing clear, accessible information that empowers informed decision-making.",
  },
  {
    icon: BookOpen,
    title: "Public Health Literacy",
    description: "We work to improve health literacy across all communities through comprehensive resources.",
  },
]

const teamMembers = [
  {
    name: "Executive Director",
    title: "Leadership & Strategy",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&h=300&fit=crop&crop=face",
    alt: "Executive Director at Healthy Weight Literacy Foundation",
  },
  {
    name: "Program Director",
    title: "Educational Programs",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=300&h=300&fit=crop&crop=face",
    alt: "Program Director at Healthy Weight Literacy Foundation",
  },
  {
    name: "Community Outreach",
    title: "Community Engagement",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop&crop=face",
    alt: "Community Outreach Coordinator at Healthy Weight Literacy Foundation",
  },
]

export default function AboutPage() {
  return (
    <>
      <div className="relative bg-primary text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=1600&h=900&fit=crop"
            alt="Healthcare professionals collaborating on community education"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <Container className="relative z-10">
          <div className="py-16 text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-white">About Us</h1>
            <p className="mt-4 text-xl text-white/90 max-w-2xl mx-auto">
              Improving public health through evidence-based education
            </p>
          </div>
        </Container>
      </div>

      {/* Mission Section */}
      <Section>
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight text-secondary sm:text-4xl text-center mb-6">
              Our Mission
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed text-balance">
              Healthy Weight Literacy Foundation exists to improve public health by providing clear, evidence-based
              education on nutrition, weight management, and metabolic health so individuals and communities can make
              informed, sustainable lifestyle decisions.
            </p>
          </div>
        </Container>
      </Section>

      {/* Audience Section */}
      <Section background="muted">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-secondary sm:text-4xl">Who We Serve</h2>
              <div className="mt-6 space-y-4 text-muted-foreground">
                <div>
                  <h3 className="font-semibold text-secondary mb-2">Primary Audience</h3>
                  <p className="leading-relaxed">
                    General public seeking credible, evidence-based health education on nutrition and weight management.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-secondary mb-2">Secondary Audiences</h3>
                  <ul className="space-y-2 list-disc list-inside">
                    <li>Adults struggling with weight and metabolic health</li>
                    <li>Underserved or low-income communities with limited access to health education</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=700&h=500&fit=crop"
                alt="Diverse community members accessing health education resources"
                width={700}
                height={500}
                className="rounded-lg shadow-card"
              />
            </div>
          </div>
        </Container>
      </Section>

      {/* Values Section */}
      <Section>
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-secondary sm:text-4xl">Our Values</h2>
            <p className="mt-3 text-lg text-muted-foreground">The principles that guide our educational mission</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <Card key={value.title} className="hover:shadow-card-hover transition-shadow">
                <CardContent className="pt-6">
                  <div className="h-12 w-12 rounded-lg bg-primary-soft flex items-center justify-center mb-4">
                    <value.icon className="h-6 w-6 text-primary" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-semibold text-secondary">{value.title}</h3>
                  <p className="mt-2 text-muted-foreground leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section background="muted">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-secondary sm:text-4xl">Our Team</h2>
            <p className="mt-3 text-lg text-muted-foreground">Dedicated professionals committed to health literacy</p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member) => (
              <Card key={member.name} className="hover:shadow-card-hover transition-shadow">
                <CardContent className="pt-6 text-center">
                  <div className="relative w-32 h-32 mx-auto mb-4">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.alt}
                      fill
                      className="rounded-full object-cover border-4 border-primary-soft"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-secondary">{member.name}</h3>
                  <p className="text-muted-foreground">{member.title}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Governance Section */}
      <Section background="muted">
        <Container size="sm">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-secondary sm:text-4xl mb-6">
              Governance & Compliance
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Healthy Weight Literacy Foundation is governed by a nonprofit board and operated in accordance with all
              applicable 501(c)(3) requirements.
            </p>
          </div>
        </Container>
      </Section>
    </>
  )
}
