import type { Metadata } from "next"
import Link from "next/link"
import { Heart, CheckCircle, Mail, BookOpen, Users, GraduationCap, Phone, Building } from "lucide-react"
import { Section } from "@/components/layout/section"
import { Container } from "@/components/layout/container"
import { PageHeader } from "@/components/layout/page-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { generatePageMetadata, siteConfig } from "@/lib/seo"

export const metadata: Metadata = generatePageMetadata({
  title: "Donate - Support Evidence-Based Health Education",
  description:
    "Your tax-deductible donation to HWLF supports free, evidence-based health literacy resources for communities in need. Every dollar makes a difference.",
  path: "/donate",
})

const givingLevels = [
  {
    amount: "$25",
    label: "Supporter",
    impact: "Provides educational materials for 5 community members",
  },
  {
    amount: "$50",
    label: "Advocate",
    impact: "Funds a community health literacy workshop for 10 participants",
  },
  {
    amount: "$100",
    label: "Champion",
    impact: "Supports development of a new evidence-based educational article",
  },
  {
    amount: "$250",
    label: "Partner",
    impact: "Sponsors a full community outreach event in an underserved neighborhood",
  },
  {
    amount: "$500",
    label: "Leader",
    impact: "Funds a month of free telehealth nutrition consultations",
  },
  {
    amount: "Custom",
    label: "Your Choice",
    impact: "Every dollar supports our mission of health literacy for all",
  },
]

const impactAreas = [
  {
    icon: BookOpen,
    title: "Educational Resources",
    description:
      "Fund development of evidence-based articles, guides, and community health materials available free of charge",
  },
  {
    icon: Users,
    title: "Community Access",
    description: "Provide free health literacy programs and resources to underserved and low-income communities in Ohio",
  },
  {
    icon: GraduationCap,
    title: "Program Development",
    description:
      "Support creation of new educational initiatives, workshops, and community partnerships across the region",
  },
]

export default function DonatePage() {
  return (
    <>
      <PageHeader
        title="Support Evidence-Based Health Education"
        description="Your generosity helps us provide free, accessible health literacy resources to communities that need them most. Every contribution makes a measurable difference."
        breadcrumbs={[{ label: "Donate" }]}
      />

      {/* Giving Levels */}
      <Section>
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-secondary sm:text-4xl">Choose Your Impact</h2>
            <p className="mt-3 text-lg text-muted-foreground max-w-2xl mx-auto">
              Select a giving level below. All donations are tax-deductible and directly support our educational
              programs.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
            {givingLevels.map((level) => (
              <Card
                key={level.label}
                className="relative hover:shadow-md transition-shadow border-2 hover:border-primary/30"
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-3xl font-bold text-primary">{level.amount}</CardTitle>
                    <span className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
                      {level.label}
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{level.impact}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* How to Donate */}
      <Section background="muted">
        <Container size="sm">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold tracking-tight text-secondary sm:text-4xl">How to Donate</h2>
            <p className="mt-3 text-lg text-muted-foreground">
              We accept donations through the following methods
            </p>
          </div>

          <div className="flex flex-col gap-6">
            {/* Mail-in Donation */}
            <Card>
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-lg bg-primary-soft flex items-center justify-center shrink-0">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-secondary mb-2">Mail a Check</h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      Make checks payable to <strong>Healthy Weight Literacy Foundation</strong> and mail to:
                    </p>
                    <address className="text-muted-foreground not-italic leading-relaxed border-l-2 border-primary/30 pl-4">
                      Healthy Weight Literacy Foundation
                      <br />
                      Dayton, Ohio
                      <br />
                      <span className="text-sm">
                        Contact us at{" "}
                        <a href="mailto:info@weightliteracy.org" className="text-primary hover:underline">
                          info@weightliteracy.org
                        </a>{" "}
                        for the full mailing address
                      </span>
                    </address>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact to Donate */}
            <Card>
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-lg bg-primary-soft flex items-center justify-center shrink-0">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-secondary mb-2">Contact Us Directly</h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      For large gifts, recurring donations, corporate sponsorships, or to discuss other giving options,
                      please reach out to our team.
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <Link href="/contact">
                        <Button>
                          <Mail className="mr-2 h-4 w-4" />
                          Contact Us
                        </Button>
                      </Link>
                      <Link href="/partner">
                        <Button variant="outline">
                          <Building className="mr-2 h-4 w-4" />
                          Corporate Partnerships
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </Container>
      </Section>

      {/* Impact Section */}
      <Section>
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-secondary sm:text-4xl">Where Your Donation Goes</h2>
            <p className="mt-3 text-lg text-muted-foreground">Every dollar directly supports our educational mission</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto">
            {impactAreas.map((item) => (
              <Card key={item.title}>
                <CardContent className="pt-6">
                  <div className="h-12 w-12 rounded-lg bg-primary-soft flex items-center justify-center mb-4">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-secondary mb-2">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Tax Information */}
      <Section background="muted">
        <Container size="sm">
          <Card className="bg-secondary text-secondary-foreground">
            <CardContent className="p-8">
              <div className="flex items-start gap-4">
                <CheckCircle className="h-8 w-8 text-primary shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-3">Tax-Deductible Giving</h3>
                  <p className="text-secondary-foreground/80 mb-4 leading-relaxed">
                    {siteConfig.name} is a registered 501(c)(3) nonprofit organization. All contributions are
                    tax-deductible to the fullest extent allowed by law. You will receive a tax receipt for your
                    records.
                  </p>
                  <div className="flex flex-col gap-1 text-sm text-secondary-foreground/70">
                    <span>
                      <strong>EIN:</strong> {siteConfig.ein}
                    </span>
                    <span>
                      <strong>Organization:</strong> {siteConfig.name}
                    </span>
                    <span>
                      <strong>Location:</strong> Dayton, Ohio
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section>
        <Container size="sm" className="text-center">
          <Heart className="h-12 w-12 mx-auto text-primary mb-4" />
          <h2 className="text-2xl font-bold text-secondary mb-4">Questions About Donating?</h2>
          <p className="text-muted-foreground mb-6 leading-relaxed max-w-lg mx-auto">
            Our team is happy to discuss donation options, answer questions about our programs, or help you find the
            best way to support our mission.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/contact">
              <Button variant="outline">Contact Our Team</Button>
            </Link>
            <Link href="/impact">
              <Button variant="outline">See Our Impact</Button>
            </Link>
          </div>
        </Container>
      </Section>
    </>
  )
}
