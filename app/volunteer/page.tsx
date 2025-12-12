import type { Metadata } from "next"
import { Clock, MapPin, Heart, Users, BookOpen, Megaphone } from "lucide-react"
import { Section } from "@/components/layout/section"
import { Container } from "@/components/layout/container"
import { PageHeader } from "@/components/layout/page-header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { VolunteerForm } from "@/components/forms/volunteer-form"
import { generatePageMetadata } from "@/lib/seo"

export const metadata: Metadata = generatePageMetadata({
  title: "Volunteer",
  description: "Join our team of volunteers and help make a difference in your community's health and wellness.",
  path: "/volunteer",
})

const volunteerRoles = [
  {
    title: "Workshop Facilitator",
    icon: BookOpen,
    commitment: "4-6 hours/month",
    location: "In-person & Virtual",
    description: "Lead nutrition and wellness workshops for families in our community programs.",
    skills: ["Public speaking", "Nutrition knowledge", "Teaching experience preferred"],
  },
  {
    title: "Community Health Ambassador",
    icon: Megaphone,
    commitment: "2-4 hours/month",
    location: "Community events",
    description: "Represent HWLF at health fairs, community events, and partner locations.",
    skills: ["Communication", "Outgoing personality", "Bilingual a plus"],
  },
  {
    title: "Administrative Support",
    icon: Users,
    commitment: "3-5 hours/week",
    location: "Remote or Office",
    description: "Help with data entry, mailings, event coordination, and general office tasks.",
    skills: ["Organization", "Computer skills", "Attention to detail"],
  },
  {
    title: "Mentor",
    icon: Heart,
    commitment: "2-3 hours/week",
    location: "Virtual",
    description: "Provide one-on-one support to program participants on their wellness journey.",
    skills: ["Empathy", "Active listening", "Reliability"],
  },
]

export default function VolunteerPage() {
  return (
    <>
      <PageHeader
        title="Volunteer With Us"
        description="Share your time and talents to help families build healthier lives. Every hour makes a difference."
        breadcrumbs={[{ label: "Volunteer" }]}
      />

      {/* Why Volunteer */}
      <Section>
        <Container size="md">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary mb-4">Why Volunteer With HWLF?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our volunteers are the heart of our mission. When you join our team, you become part of a community
              dedicated to creating lasting change in families&apos; lives.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-3">
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary-soft">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-secondary">Make an Impact</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Directly contribute to improving health outcomes in your community.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary-soft">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-secondary">Build Connections</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Meet like-minded people passionate about health and wellness.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary-soft">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-secondary">Grow Skills</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Receive training and develop new abilities while giving back.
                </p>
              </CardContent>
            </Card>
          </div>
        </Container>
      </Section>

      {/* Volunteer Roles */}
      <Section background="muted">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary mb-4">Volunteer Opportunities</h2>
            <p className="text-muted-foreground">Find a role that matches your skills and availability.</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {volunteerRoles.map((role) => (
              <Card key={role.title} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-soft">
                        <role.icon className="h-5 w-5 text-primary" />
                      </div>
                      <CardTitle className="text-xl">{role.title}</CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base mb-4">{role.description}</CardDescription>

                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="secondary" className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {role.commitment}
                    </Badge>
                    <Badge variant="outline" className="flex items-center gap-1">
                      <MapPin className="h-3 w-3" />
                      {role.location}
                    </Badge>
                  </div>

                  <div>
                    <p className="text-sm font-medium text-secondary mb-2">Helpful Skills:</p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {role.skills.map((skill) => (
                        <li key={skill} className="flex items-center gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Application Form */}
      <Section>
        <Container size="md">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary mb-4">Ready to Get Started?</h2>
            <p className="text-muted-foreground">
              Fill out the form below and our volunteer coordinator will be in touch within 48 hours.
            </p>
          </div>

          <Card>
            <CardContent className="p-6 md:p-8">
              <VolunteerForm />
            </CardContent>
          </Card>
        </Container>
      </Section>
    </>
  )
}
