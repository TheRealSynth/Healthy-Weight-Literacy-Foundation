import type { Metadata } from "next"
import { PageHeader } from "@/components/layout/page-header"
import { Section } from "@/components/layout/section"
import { Container } from "@/components/layout/container"
import { Card, CardContent } from "@/components/ui/card"
import { generatePageMetadata } from "@/lib/seo"
import { BookOpen, Heart, Users, Lightbulb } from "lucide-react"

export const metadata: Metadata = generatePageMetadata({
  title: "Programs",
  description:
    "Educational programs focused on evidence-based nutrition, weight management, and metabolic health education.",
  path: "/programs",
})

const currentPrograms = [
  {
    icon: BookOpen,
    title: "Evidence-Based Educational Articles",
    description: "Comprehensive written resources on nutrition science, weight management, and metabolic health.",
  },
  {
    icon: Heart,
    title: "Public Health Literacy Guides",
    description: "Accessible guides designed to improve understanding of health concepts and decision-making.",
  },
  {
    icon: Users,
    title: "Nutrition and Metabolic Health Resources",
    description: "Educational materials covering the science of nutrition and metabolic health.",
  },
  {
    icon: Lightbulb,
    title: "Awareness-Focused Educational Content",
    description: "Content designed to raise awareness about weight literacy and informed health choices.",
  },
]

const plannedInitiatives = [
  "Community workshops and educational seminars",
  "Partnerships with healthcare providers and community organizations",
  "Expanded educational outreach programs",
  "Interactive learning tools and resources",
]

export default function ProgramsPage() {
  return (
    <>
      <PageHeader
        title="Our Programs"
        description="Evidence-based educational programs to support informed health decisions"
        breadcrumbs={[{ label: "Programs" }]}
      />

      {/* Current Programs */}
      <Section>
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-secondary sm:text-4xl">Current Programs</h2>
            <p className="mt-3 text-lg text-muted-foreground">Educational resources available now</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {currentPrograms.map((program) => (
              <Card key={program.title} className="hover:shadow-card-hover transition-shadow">
                <CardContent className="pt-6">
                  <div className="h-12 w-12 rounded-lg bg-primary-soft flex items-center justify-center mb-4">
                    <program.icon className="h-6 w-6 text-primary" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-semibold text-secondary mb-2">{program.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{program.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Educational Focus */}
      <Section background="muted">
        <Container size="md">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-secondary sm:text-4xl mb-6">
              Educational Focus Areas
            </h2>
            <div className="bg-surface rounded-lg p-8 text-left">
              <p className="text-muted-foreground leading-relaxed mb-4">
                Our programs are designed to provide clear, evidence-based education on:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Nutrition science and practical application</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Weight management strategies based on current research</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Metabolic health and its impact on overall wellness</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Informed decision-making for sustainable lifestyle changes</span>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      {/* Planned Initiatives */}
      <Section>
        <Container size="md">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold tracking-tight text-secondary sm:text-4xl">Planned Initiatives</h2>
            <p className="mt-3 text-lg text-muted-foreground">Future programs under development</p>
          </div>
          <Card className="bg-primary-soft border-primary/20">
            <CardContent className="p-8">
              <p className="text-muted-foreground mb-6 leading-relaxed">
                We are actively developing additional programs to expand our educational reach. These initiatives are in
                the planning stages and not yet active:
              </p>
              <ul className="space-y-3">
                {plannedInitiatives.map((initiative) => (
                  <li key={initiative} className="flex items-start gap-3">
                    <span className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="h-2 w-2 rounded-full bg-primary" />
                    </span>
                    <span className="text-secondary">{initiative}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </Container>
      </Section>
    </>
  )
}
