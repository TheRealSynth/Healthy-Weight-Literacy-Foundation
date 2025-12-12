import type { Metadata } from "next"
import { FileText, Mail, Calendar } from "lucide-react"
import { Section } from "@/components/layout/section"
import { Container } from "@/components/layout/container"
import { PageHeader } from "@/components/layout/page-header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MediaKit } from "@/components/blocks/media-kit"
import { generatePageMetadata } from "@/lib/seo"

export const metadata: Metadata = generatePageMetadata({
  title: "Press & Media",
  description:
    "Press releases, media kit, and contact information for journalists covering the Healthy Weight Literacy Foundation.",
  path: "/press",
})

const pressReleases = [
  {
    title: "HWLF Expands Telehealth Services to 10 New States",
    date: "2024-01-15",
    excerpt:
      "The Healthy Weight Literacy Foundation announced today the expansion of its virtual nutrition counseling services...",
  },
  {
    title: "Annual Report Shows Record Impact in 2023",
    date: "2023-12-01",
    excerpt:
      "With over 50,000 families served, HWLF reports its most impactful year yet in the fight against preventable health conditions...",
  },
  {
    title: "New Partnership with National School District Association",
    date: "2023-10-15",
    excerpt:
      "A groundbreaking partnership will bring evidence-based wellness education to schools serving over 2 million students...",
  },
  {
    title: "HWLF Receives Grant for Community Health Worker Training",
    date: "2023-08-22",
    excerpt:
      "A $2 million grant from the Johnson Foundation will fund training for 500 community health workers over three years...",
  },
]

export default function PressPage() {
  return (
    <>
      <PageHeader
        title="Press & Media"
        description="Resources for journalists and media professionals covering community health and wellness."
        breadcrumbs={[{ label: "Press" }]}
      />

      {/* Media Kit */}
      <Section>
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary mb-4">Media Kit</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Download logos, fact sheets, and brand guidelines for press coverage.
            </p>
          </div>
          <MediaKit />
        </Container>
      </Section>

      {/* Press Releases */}
      <Section background="muted">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary mb-4">Press Releases</h2>
            <p className="text-muted-foreground">The latest news and announcements from HWLF.</p>
          </div>

          <div className="space-y-4">
            {pressReleases.map((release) => (
              <Card key={release.title} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <CardTitle className="text-xl">{release.title}</CardTitle>
                      <CardDescription className="mt-2">{release.excerpt}</CardDescription>
                    </div>
                    <Badge variant="secondary" className="shrink-0 flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {new Date(release.date).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" size="sm">
                    Read Full Release
                    <FileText className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Media Contact */}
      <Section>
        <Container size="sm" className="text-center">
          <h2 className="text-2xl font-bold text-secondary mb-4">Media Contact</h2>
          <p className="text-muted-foreground mb-6">
            For press inquiries, interview requests, or additional information, please contact our communications team.
          </p>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-center gap-3">
                <Mail className="h-5 w-5 text-primary" />
                <span className="font-medium">press@hwlf.org</span>
              </div>
              <p className="text-sm text-muted-foreground mt-2">
                We typically respond to media inquiries within 24 hours.
              </p>
            </CardContent>
          </Card>
        </Container>
      </Section>
    </>
  )
}
