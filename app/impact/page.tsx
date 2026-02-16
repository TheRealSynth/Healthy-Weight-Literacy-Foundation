import type { Metadata } from "next"
import { BookOpen, Users, Heart, Award, CheckCircle, FileText } from "lucide-react"
import { Section } from "@/components/layout/section"
import { Container } from "@/components/layout/container"
import { PageHeader } from "@/components/layout/page-header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Timeline } from "@/components/blocks/timeline"
import { generatePageMetadata } from "@/lib/seo"

export const metadata: Metadata = generatePageMetadata({
  title: "Our Impact",
  description: "Learn how the Healthy Weight Literacy Foundation measures impact through educational reach and community engagement.",
  path: "/impact",
})

const impactCategories = [
  { 
    label: "Educational Content", 
    description: "Articles and resources published", 
    icon: BookOpen 
  },
  { 
    label: "Community Access", 
    description: "Open access to health literacy materials", 
    icon: Users 
  },
  { 
    label: "Evidence-Based", 
    description: "Content reviewed by health professionals", 
    icon: CheckCircle 
  },
  { 
    label: "Transparency", 
    description: "Published financials and operations", 
    icon: FileText 
  },
]

const communityUseCases = [
  {
    title: "Family Education Scenario",
    context: "Educational Use Case Example",
    description:
      "A family uses our free nutrition literacy resources to learn about balanced meals and reading food labels. They access articles on meal planning and participate in our community education programs.",
    focus: "Educational resource access and family engagement",
  },
  {
    title: "School Partnership Scenario",
    context: "Institutional Use Case Example",
    description:
      "A school district incorporates our evidence-based health literacy curriculum into their wellness programs. Teachers use our materials to educate students about nutrition science.",
    focus: "Educational content distribution in schools",
  },
  {
    title: "Individual Learning Scenario",
    context: "Self-Directed Use Case Example",
    description:
      "An individual accesses our telehealth intake forms and educational articles to learn about metabolic health and nutrition. They engage with our evidence-based content independently.",
    focus: "Self-paced learning and health literacy education",
  },
]

const operationalMilestones = [
  {
    year: "January 2024",
    title: "Website Launch",
    description:
      "Launched comprehensive educational website with evidence-based articles on nutrition literacy, metabolic health, and weight science.",
  },
  {
    year: "March 2024",
    title: "Content Expansion",
    description:
      "Published 20+ peer-reviewed articles covering GLP-1 medications, telehealth education, nutrition science, and metabolic health topics.",
  },
  {
    year: "June 2024",
    title: "Educational Programs",
    description: "Developed family wellness curriculum, school-based nutrition education programs, and corporate wellness workshops with evidence-based materials.",
  },
  {
    year: "September 2024",
    title: "Telehealth Forms",
    description:
      "Created intake forms and educational resources for individuals seeking telehealth weight management services from qualified providers.",
  },
  {
    year: "December 2024",
    title: "Community Resources",
    description:
      "Established resource library with downloadable materials, FAQ sections, and educational guides accessible to the public at no cost.",
  },
]

export default function ImpactPage() {
  return (
    <>
      <PageHeader
        title="Our Impact"
        description="We provide free, evidence-based health literacy education to support informed decision-making about nutrition and wellness."
        breadcrumbs={[{ label: "Impact" }]}
      />

      {/* How We Measure Impact */}
      <Section>
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary mb-4">How We Measure Impact</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              As an educational nonprofit, we measure impact through content quality, accessibility, and community engagement rather than quantitative metrics. Our focus is providing accurate, evidence-based health literacy resources.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {impactCategories.map((category) => (
              <Card key={category.label} className="text-center">
                <CardContent className="pt-6">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary-soft">
                    <category.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-secondary mb-2">{category.label}</h3>
                  <CardDescription className="text-base">{category.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Operational Milestones */}
      <Section background="muted">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary mb-4">Operational Milestones</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Key milestones in our organizational development and educational content creation throughout 2024.
            </p>
          </div>

          <Timeline items={operationalMilestones} />
        </Container>
      </Section>

      {/* Community Use Cases */}
      <Section>
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary mb-4">Community Use Cases</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              These are illustrative examples of how individuals and organizations might engage with our educational resources. They are not testimonials from real individuals but scenarios representing typical use patterns.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {communityUseCases.map((useCase) => (
              <Card key={useCase.title} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{useCase.title}</CardTitle>
                  <CardDescription className="text-xs uppercase tracking-wide text-primary">
                    {useCase.context}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{useCase.description}</p>
                  <div className="pt-4 border-t">
                    <p className="text-sm font-medium text-secondary">{useCase.focus}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Accuracy and Transparency */}
      <Section background="muted">
        <Container size="md">
          <Card>
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-bold text-secondary">Accuracy and Transparency</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-lg max-w-none">
              <p className="text-muted-foreground leading-relaxed mb-4">
                The Healthy Weight Literacy Foundation is committed to accuracy in all published content. We do not publish outcome statistics, health claims, or program completion rates unless they have been verified through formal evaluation processes.
              </p>
              
              <p className="text-muted-foreground leading-relaxed mb-4">
                All educational content is reviewed by qualified health professionals and based on current scientific evidence. We clearly distinguish between educational information and medical advice, and we do not make claims about diagnosis, treatment, or cure of any medical condition.
              </p>

              <p className="text-muted-foreground leading-relaxed mb-4">
                Our impact is measured through educational reach and community engagement rather than health outcomes. When verified data becomes available through formal program evaluations, it will be published transparently with methodology and limitations clearly stated.
              </p>

              <div className="flex items-start gap-3 p-4 bg-primary-soft rounded-lg mt-6">
                <Award className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                <p className="text-sm text-secondary">
                  <strong>Our Commitment:</strong> We maintain the highest standards of educational integrity and transparency in all communications. Financial reports, board information, and organizational documents are available upon request.
                </p>
              </div>
            </CardContent>
          </Card>
        </Container>
      </Section>
    </>
  )
}
