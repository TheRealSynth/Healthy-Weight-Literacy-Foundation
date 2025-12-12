import type { Metadata } from "next"
import { Building2, GraduationCap, Stethoscope, Heart, CheckCircle } from "lucide-react"
import { Section } from "@/components/layout/section"
import { Container } from "@/components/layout/container"
import { PageHeader } from "@/components/layout/page-header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { PartnerForm } from "@/components/forms/partner-form"
import { generatePageMetadata } from "@/lib/seo"

export const metadata: Metadata = generatePageMetadata({
  title: "Partner With Us",
  description:
    "Join our network of healthcare providers, schools, and organizations committed to building healthier communities.",
  path: "/partner",
})

const partnerTypes = [
  {
    title: "Healthcare Providers",
    icon: Stethoscope,
    description: "Integrate our programs into your patient care protocols and wellness initiatives.",
    benefits: [
      "Evidence-based educational materials",
      "Staff training and certification",
      "Patient referral pathways",
      "Telehealth integration support",
    ],
  },
  {
    title: "Schools & Districts",
    icon: GraduationCap,
    description: "Bring comprehensive wellness education to students, families, and staff.",
    benefits: [
      "Curriculum-aligned programs",
      "Teacher professional development",
      "Family engagement workshops",
      "Cafeteria nutrition consulting",
    ],
  },
  {
    title: "Community Organizations",
    icon: Building2,
    description: "Extend your impact by offering our programs to the communities you serve.",
    benefits: [
      "Co-branded programming",
      "Volunteer coordination support",
      "Grant partnership opportunities",
      "Shared measurement frameworks",
    ],
  },
  {
    title: "Corporate Partners",
    icon: Heart,
    description: "Invest in employee wellness and community health through strategic partnership.",
    benefits: [
      "Employee wellness programs",
      "Sponsorship opportunities",
      "CSR alignment and reporting",
      "Volunteer engagement programs",
    ],
  },
]

export default function PartnerPage() {
  return (
    <>
      <PageHeader
        title="Partner With Us"
        description="Together, we can reach more families and create lasting change in community health."
        breadcrumbs={[{ label: "Partner" }]}
      />

      {/* Partner Benefits */}
      <Section>
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary mb-4">Partnership Opportunities</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We collaborate with organizations across sectors to expand access to healthy weight literacy education and
              support.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {partnerTypes.map((partner) => (
              <Card key={partner.title} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-soft">
                      <partner.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{partner.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base mb-4">{partner.description}</CardDescription>
                  <ul className="space-y-2">
                    {partner.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-start gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Stats */}
      <Section background="muted">
        <Container>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 text-center">
            <div>
              <div className="text-4xl font-bold text-primary">50+</div>
              <div className="text-muted-foreground">Partner Organizations</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary">200+</div>
              <div className="text-muted-foreground">Program Sites</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary">15</div>
              <div className="text-muted-foreground">States Reached</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary">98%</div>
              <div className="text-muted-foreground">Partner Satisfaction</div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Partner Form */}
      <Section>
        <Container size="md">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary mb-4">Start the Conversation</h2>
            <p className="text-muted-foreground">
              Tell us about your organization and how you&apos;d like to partner with us.
            </p>
          </div>

          <Card>
            <CardContent className="p-6 md:p-8">
              <PartnerForm />
            </CardContent>
          </Card>
        </Container>
      </Section>
    </>
  )
}
