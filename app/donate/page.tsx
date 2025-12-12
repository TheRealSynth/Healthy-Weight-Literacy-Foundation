import type { Metadata } from "next"
import Link from "next/link"
import { Heart, Gift, Calendar, Users, CheckCircle } from "lucide-react"
import { Section } from "@/components/layout/section"
import { Container } from "@/components/layout/container"
import { PageHeader } from "@/components/layout/page-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { generatePageMetadata } from "@/lib/seo"

export const metadata: Metadata = generatePageMetadata({
  title: "Donate",
  description:
    "Support healthy weight literacy education and programs. Your donation helps families build lasting wellness habits.",
  path: "/donate",
})

const oneTimeTiers = [
  { amount: 25, impact: "Provides educational materials for one family" },
  { amount: 50, impact: "Sponsors a child in our youth nutrition program for one month" },
  { amount: 100, impact: "Funds a community workshop session" },
  { amount: 250, impact: "Supports telehealth consultations for 5 families" },
  { amount: 500, impact: "Underwrites a school wellness program for one semester" },
  { amount: 1000, impact: "Sponsors a community health fair" },
]

const monthlyTiers = [
  { amount: 10, impact: "Sustaining supporter - ongoing educational resources" },
  { amount: 25, impact: "Program champion - continuous family support" },
  { amount: 50, impact: "Community builder - monthly workshop funding" },
  { amount: 100, impact: "Wellness advocate - comprehensive program support" },
]

export default function DonatePage() {
  return (
    <>
      <PageHeader
        title="Make a Difference Today"
        description="Your generosity powers evidence-based programs that help families build healthier lives."
        breadcrumbs={[{ label: "Donate" }]}
      />

      {/* Impact Story */}
      <Section>
        <Container size="md">
          <Card className="bg-primary-soft border-primary/20">
            <CardContent className="p-8">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground shrink-0">
                  <Heart className="h-6 w-6" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-secondary mb-2">Maria&apos;s Story</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    &ldquo;When I joined the Family Wellness Program, I didn&apos;t know how to cook healthy meals on a
                    budget. Now, six months later, my whole family has more energy, my kids are doing better in school,
                    and we actually enjoy meal time together. Thank you to everyone who made this possible.&rdquo;
                  </p>
                  <p className="mt-4 text-sm font-medium text-primary">— Maria R., Program Graduate</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </Container>
      </Section>

      {/* One-Time Donation */}
      <Section background="muted">
        <Container>
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Gift className="h-6 w-6 text-primary" />
              <h2 className="text-3xl font-bold text-secondary">One-Time Gift</h2>
            </div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Every donation, no matter the size, makes a meaningful impact on families in our community.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {oneTimeTiers.map((tier) => (
              <Card key={tier.amount} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-3xl font-bold text-primary">${tier.amount}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{tier.impact}</CardDescription>
                  <Button className="w-full mt-4 bg-primary hover:bg-primary/90">Donate ${tier.amount}</Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Button variant="outline" size="lg">
              Enter Custom Amount
            </Button>
          </div>
        </Container>
      </Section>

      {/* Monthly Giving */}
      <Section>
        <Container>
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Calendar className="h-6 w-6 text-accent" />
              <h2 className="text-3xl font-bold text-secondary">Monthly Giving</h2>
            </div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Join our community of monthly supporters and provide sustainable funding for our programs.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {monthlyTiers.map((tier) => (
              <Card key={tier.amount} className="hover:shadow-lg transition-shadow border-accent/20">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-accent">${tier.amount}/mo</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{tier.impact}</CardDescription>
                  <Button className="w-full mt-4 bg-accent hover:bg-accent-hover text-accent-foreground">
                    Give Monthly
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Other Ways to Give */}
      <Section background="muted">
        <Container size="md">
          <h2 className="text-2xl font-bold text-secondary text-center mb-8">Other Ways to Give</h2>
          <div className="grid gap-6 sm:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" />
                  Corporate Matching
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Many employers match charitable donations. Check with your HR department to double your impact.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Gift className="h-5 w-5 text-primary" />
                  Planned Giving
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Include HWLF in your estate planning to create a lasting legacy for community health.
                </p>
              </CardContent>
            </Card>
          </div>
        </Container>
      </Section>

      {/* Tax Information */}
      <Section>
        <Container size="md">
          <Card className="bg-secondary text-secondary-foreground">
            <CardContent className="p-8">
              <div className="flex items-start gap-4">
                <CheckCircle className="h-8 w-8 text-primary shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Tax-Deductible Donation</h3>
                  <p className="text-secondary-foreground/80 mb-4">
                    The Healthy Weight Literacy Foundation is a 501(c)(3) nonprofit organization. Your donation is
                    tax-deductible to the fullest extent allowed by law.
                  </p>
                  <p className="text-sm text-secondary-foreground/60">
                    EIN: XX-XXXXXXX (placeholder) | A receipt will be emailed for your records.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </Container>
      </Section>

      {/* Questions */}
      <Section background="muted">
        <Container size="sm" className="text-center">
          <h2 className="text-2xl font-bold text-secondary mb-4">Questions About Giving?</h2>
          <p className="text-muted-foreground mb-6">
            Our team is happy to discuss giving options and answer any questions you may have.
          </p>
          <Link href="/contact">
            <Button variant="outline">Contact Us</Button>
          </Link>
        </Container>
      </Section>
    </>
  )
}
