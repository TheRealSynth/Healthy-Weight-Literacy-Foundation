import type { Metadata } from "next"
import { Section } from "@/components/layout/section"
import { Container } from "@/components/layout/container"
import { PageHeader } from "@/components/layout/page-header"
import { TelehealthIntakeForm } from "@/components/forms/telehealth-intake-form"
import { generatePageMetadata } from "@/lib/seo"

export const metadata: Metadata = generatePageMetadata({
  title: "Telehealth Intake",
  description: "Complete your intake form to begin virtual nutrition counseling with our registered dietitians.",
  path: "/telehealth-intake",
})

export default function TelehealthIntakePage() {
  return (
    <>
      <PageHeader
        title="Telehealth Intake Form"
        description="Complete this form to begin your virtual wellness journey with our team of registered dietitians."
        breadcrumbs={[{ label: "Telehealth Intake" }]}
      />

      <Section>
        <Container size="md">
          <TelehealthIntakeForm />
        </Container>
      </Section>
    </>
  )
}
