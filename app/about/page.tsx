import type { Metadata } from "next"
import Image from "next/image"
import { PageHeader } from "@/components/layout/page-header"
import { Section } from "@/components/layout/section"
import { Container } from "@/components/layout/container"
import { Timeline } from "@/components/blocks/timeline"
import { Card, CardContent } from "@/components/ui/card"
import { generatePageMetadata } from "@/lib/seo"
import { Heart, Users, Target, Shield, Sparkles, Globe } from "lucide-react"

export const metadata: Metadata = generatePageMetadata({
  title: "About Us",
  description:
    "Learn about the Healthy Weight Literacy Foundation's mission, history, team, and commitment to building healthier communities through education and access.",
  path: "/about",
})

const values = [
  {
    icon: Heart,
    title: "Compassion",
    description:
      "We approach every individual with empathy, understanding that each person's wellness journey is unique.",
  },
  {
    icon: Shield,
    title: "Evidence-Based",
    description: "Our programs and resources are grounded in the latest scientific research and best practices.",
  },
  {
    icon: Users,
    title: "Community-Centered",
    description: "We believe in the power of community to support lasting change and collective well-being.",
  },
  {
    icon: Globe,
    title: "Accessibility",
    description: "We're committed to removing barriers and making health education available to everyone.",
  },
  {
    icon: Sparkles,
    title: "Empowerment",
    description: "We equip individuals with knowledge and skills to make informed decisions about their health.",
  },
  {
    icon: Target,
    title: "Impact-Driven",
    description: "We measure our success by the real, positive changes we create in people's lives.",
  },
]

const team = [
  {
    name: "Dr. Amanda Chen",
    role: "Executive Director",
    image: "/placeholder.svg?height=300&width=300",
    bio: "20+ years in public health leadership",
  },
  {
    name: "Marcus Johnson, MPH",
    role: "Director of Programs",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Former community health center director",
  },
  {
    name: "Dr. Sarah Williams",
    role: "Medical Director",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Board-certified in obesity medicine",
  },
  {
    name: "Carlos Rodriguez",
    role: "Director of Partnerships",
    image: "/placeholder.svg?height=300&width=300",
    bio: "15 years in nonprofit development",
  },
]

const timeline = [
  {
    year: "2015",
    title: "Foundation Established",
    description:
      "HWLF was founded by a group of healthcare professionals and community leaders concerned about rising obesity rates and health disparities.",
  },
  {
    year: "2017",
    title: "First Community Program",
    description: "Launched our flagship Nutrition Basics Workshop, serving 500 participants in our first year.",
  },
  {
    year: "2019",
    title: "Family Programs Launch",
    description: "Introduced the Family Fit Program, expanding our reach to serve entire families and children.",
  },
  {
    year: "2021",
    title: "Telehealth Expansion",
    description:
      "In response to COVID-19, we rapidly expanded telehealth services to continue supporting our community.",
  },
  {
    year: "2023",
    title: "50,000 Lives Impacted",
    description: "Reached a milestone of 50,000 individuals served through our programs and resources.",
  },
  {
    year: "2024",
    title: "National Recognition",
    description: "Received recognition as a leading nonprofit in health literacy and community wellness.",
  },
]

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="About Us"
        description="We're on a mission to transform community health through education, compassion, and access."
        breadcrumbs={[{ label: "About" }]}
      />

      {/* Story Section */}
      <Section>
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-secondary sm:text-4xl">Our Story</h2>
              <div className="mt-6 space-y-4 text-muted-foreground">
                <p>
                  The Healthy Weight Literacy Foundation was born from a simple but powerful observation: too many
                  people struggle with their health not because they don't care, but because they lack access to
                  reliable information and supportive resources.
                </p>
                <p>
                  Founded in 2015 by a group of healthcare professionals, educators, and community advocates, HWLF set
                  out to bridge this gap. We believed that with the right education and support, everyone could achieve
                  a healthier relationship with their body and well-being.
                </p>
                <p>
                  Today, we've grown into a leading nonprofit serving communities across the region, but our core belief
                  remains the same: health is a fundamental right, and everyone deserves access to compassionate,
                  evidence-based support.
                </p>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Community members participating in a health education workshop"
                width={800}
                height={600}
                className="rounded-2xl shadow-card"
              />
            </div>
          </div>
        </Container>
      </Section>

      {/* Vision Section */}
      <Section background="primary">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight text-secondary sm:text-4xl">Our Vision</h2>
            <p className="mt-6 text-xl text-muted-foreground">
              A world where every person has the knowledge, resources, and support to achieve their healthiest
              life—regardless of their background, income, or location.
            </p>
          </div>
        </Container>
      </Section>

      {/* Values Section */}
      <Section>
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-secondary sm:text-4xl">Our Values</h2>
            <p className="mt-3 text-lg text-muted-foreground">The principles that guide everything we do.</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value) => (
              <Card key={value.title} className="hover:shadow-card-hover transition-shadow">
                <CardContent className="pt-6">
                  <div className="h-12 w-12 rounded-lg bg-primary-soft flex items-center justify-center mb-4">
                    <value.icon className="h-6 w-6 text-primary" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-semibold text-secondary">{value.title}</h3>
                  <p className="mt-2 text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Timeline */}
      <Section background="muted">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-secondary sm:text-4xl">Our Journey</h2>
            <p className="mt-3 text-lg text-muted-foreground">
              Key milestones in our mission to build healthier communities.
            </p>
          </div>
          <Timeline items={timeline} />
        </Container>
      </Section>

      {/* Team Section */}
      <Section>
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-secondary sm:text-4xl">Leadership Team</h2>
            <p className="mt-3 text-lg text-muted-foreground">Dedicated professionals committed to our mission.</p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member) => (
              <div key={member.name} className="text-center">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  width={300}
                  height={300}
                  className="rounded-2xl mx-auto shadow-card"
                />
                <h3 className="mt-4 text-lg font-semibold text-secondary">{member.name}</h3>
                <p className="text-primary font-medium">{member.role}</p>
                <p className="mt-1 text-sm text-muted-foreground">{member.bio}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* DEI Statement */}
      <Section background="primary">
        <Container size="sm">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-secondary sm:text-4xl">
              Diversity, Equity & Inclusion
            </h2>
            <div className="mt-6 space-y-4 text-muted-foreground text-left">
              <p>
                At HWLF, we believe that health equity is central to our mission. We are committed to creating an
                organization and programs that reflect and serve the diverse communities we work with.
              </p>
              <p>
                We actively work to identify and address health disparities, ensuring our programs are culturally
                responsive and accessible to all. This includes providing materials in multiple languages, offering
                sliding-scale fees, and partnering with organizations that serve underrepresented communities.
              </p>
              <p>
                Our board, staff, and volunteers represent diverse backgrounds, experiences, and perspectives. We
                continuously educate ourselves and evaluate our practices to ensure we're living up to our commitment to
                equity and inclusion.
              </p>
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}
