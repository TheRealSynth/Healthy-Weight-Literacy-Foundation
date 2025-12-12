import type { Metadata } from "next"
import { PageHeader } from "@/components/layout/page-header"
import { Section } from "@/components/layout/section"
import { Container } from "@/components/layout/container"
import { ProgramCards } from "@/components/blocks/program-cards"
import { CTASection } from "@/components/blocks/cta-section"
import { generatePageMetadata } from "@/lib/seo"
import { getPrograms } from "@/lib/mdx"

export const metadata: Metadata = generatePageMetadata({
  title: "Programs",
  description:
    "Explore our evidence-based wellness programs designed for individuals, families, and organizations. Find the right program for your health journey.",
  path: "/programs",
})

export default function ProgramsPage() {
  const programs = getPrograms()

  return (
    <>
      <PageHeader
        title="Our Programs"
        description="Evidence-based wellness programs designed to meet you where you are on your health journey."
        breadcrumbs={[{ label: "Programs" }]}
      />

      <Section>
        <Container>
          <ProgramCards programs={programs} showAll />
        </Container>
      </Section>

      <CTASection
        title="Not Sure Which Program Is Right for You?"
        description="Our team can help you find the perfect fit for your goals and schedule. Reach out for a free consultation."
        primaryCTA={{ label: "Contact Us", href: "/contact" }}
        secondaryCTA={{ label: "Take Our Quiz", href: "/resources" }}
      />
    </>
  )
}
