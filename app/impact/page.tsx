import type { Metadata } from "next"
import { TrendingUp, Users, Heart, Award } from "lucide-react"
import { Section } from "@/components/layout/section"
import { Container } from "@/components/layout/container"
import { PageHeader } from "@/components/layout/page-header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Timeline } from "@/components/blocks/timeline"
import { generatePageMetadata } from "@/lib/seo"

export const metadata: Metadata = generatePageMetadata({
  title: "Our Impact",
  description: "See how the Healthy Weight Literacy Foundation is making a difference in communities nationwide.",
  path: "/impact",
})

const impactStats = [
  { label: "Families Served", value: "50,000+", icon: Users },
  { label: "Communities Reached", value: "200+", icon: Heart },
  { label: "Program Completion Rate", value: "87%", icon: TrendingUp },
  { label: "Partner Organizations", value: "75+", icon: Award },
]

const successStories = [
  {
    name: "The Johnson Family",
    location: "Atlanta, GA",
    story:
      "After completing our Family Wellness Program, the Johnsons reduced their screen time by 50% and now enjoy cooking healthy meals together every Sunday.",
    outcome: "Lost 45 lbs combined, improved energy levels",
  },
  {
    name: "Lincoln Elementary School",
    location: "Phoenix, AZ",
    story:
      "Our school-wide initiative helped students understand nutrition labels and make healthier choices in the cafeteria.",
    outcome: "30% increase in vegetable consumption",
  },
  {
    name: "Maria Santos",
    location: "Chicago, IL",
    story:
      "As a single mother working two jobs, Maria thought healthy eating was impossible. Our telehealth program showed her affordable, quick meal options.",
    outcome: "Reversed pre-diabetes diagnosis",
  },
]

const timelineItems = [
  {
    year: "January 2024",
    title: "Telehealth Program Launch",
    description:
      "Successfully launched our virtual wellness coaching program, making our services accessible to underserved communities nationwide.",
  },
  {
    year: "March 2024",
    title: "Partnership Expansion",
    description:
      "Partnered with 15 new school districts to bring our nutrition education curriculum to over 10,000 students.",
  },
  {
    year: "June 2024",
    title: "Community Impact Milestone",
    description: "Reached 50,000 families served since our founding, with an 87% program completion rate.",
  },
  {
    year: "September 2024",
    title: "Research Publication",
    description:
      "Published groundbreaking research on sustainable behavior change in peer-reviewed journal, validating our approach.",
  },
  {
    year: "December 2024",
    title: "Year-End Achievements",
    description:
      "Expanded to 200+ communities, secured major funding for 2025 initiatives, and received national recognition for program excellence.",
  },
]

export default function ImpactPage() {
  return (
    <>
      <PageHeader
        title="Our Impact"
        description="Every day, we work to create lasting change in the lives of individuals, families, and communities."
        breadcrumbs={[{ label: "Impact" }]}
      />

      {/* Impact Stats */}
      <Section>
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {impactStats.map((stat) => (
              <Card key={stat.label} className="text-center">
                <CardContent className="pt-6">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary-soft">
                    <stat.icon className="h-7 w-7 text-primary" />
                  </div>
                  <div className="text-4xl font-bold text-primary">{stat.value}</div>
                  <CardDescription className="mt-1 text-base">{stat.label}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Annual Highlights */}
      <Section background="muted">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary mb-4">2024 Highlights</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Key achievements from the past year that demonstrate our commitment to community health.
            </p>
          </div>

          <Timeline items={timelineItems} />
        </Container>
      </Section>

      {/* Success Stories */}
      <Section>
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary mb-4">Success Stories</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Real stories from real people whose lives have been transformed through our programs.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {successStories.map((story) => (
              <Card key={story.name} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle>{story.name}</CardTitle>
                  <CardDescription>{story.location}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">&ldquo;{story.story}&rdquo;</p>
                  <div className="pt-4 border-t">
                    <p className="text-sm font-medium text-primary">{story.outcome}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Data Visualization Placeholder */}
      <Section background="muted">
        <Container size="md">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-secondary mb-4">Program Outcomes</h2>
            <p className="text-muted-foreground">
              Measurable results from our evidence-based approach to healthy weight education.
            </p>
          </div>

          <Card>
            <CardContent className="p-8">
              <div className="grid gap-6 sm:grid-cols-3 text-center">
                <div>
                  <div className="text-3xl font-bold text-primary">92%</div>
                  <p className="text-sm text-muted-foreground mt-1">Participants report improved nutrition knowledge</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">78%</div>
                  <p className="text-sm text-muted-foreground mt-1">Maintain healthy habits at 6-month follow-up</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">85%</div>
                  <p className="text-sm text-muted-foreground mt-1">Would recommend our programs to others</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </Container>
      </Section>
    </>
  )
}
