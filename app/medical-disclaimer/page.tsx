import type { Metadata } from "next"
import { Section } from "@/components/layout/section"
import { Container } from "@/components/layout/container"
import { PageHeader } from "@/components/layout/page-header"
import { generatePageMetadata, siteConfig } from "@/lib/seo"

export const metadata: Metadata = generatePageMetadata({
  title: "Medical Disclaimer | Healthy Weight Literacy Foundation",
  description:
    "Important information about the limits of content published by Healthy Weight Literacy Foundation and why it is not a substitute for professional medical care.",
  path: "/medical-disclaimer",
})

export default function MedicalDisclaimerPage() {
  return (
    <>
      <PageHeader
        title="Medical Disclaimer"
        description="Important information about the limits of the content on this website."
        breadcrumbs={[{ label: "Medical Disclaimer" }]}
      />

      <Section>
        <Container size="md">
          <div className="prose prose-slate max-w-none">
            <h2>Not Medical Advice</h2>
            <p>
              The content published on this website by Healthy Weight Literacy Foundation is intended for general
              educational purposes only. It does not constitute medical advice, and it should not be interpreted or used
              as such.
            </p>
            <p>
              Nothing on this website is intended to diagnose, treat, cure, or prevent any disease, medical condition,
              or health concern. The information provided here is not a substitute for professional medical evaluation,
              clinical judgment, or individualized guidance from a qualified healthcare provider.
            </p>

            <h2>Consult a Qualified Healthcare Professional</h2>
            <p>
              If you have questions about your health, a medical condition, or treatment options, you should speak
              directly with a licensed healthcare professional. That includes physicians, nurse practitioners, registered
              dietitians, pharmacists, and other qualified clinicians with the training and information necessary to
              evaluate your specific situation.
            </p>
            <p>
              Do not delay seeking professional medical advice, or disregard advice you have already received, based on
              something you have read on this website.
            </p>

            <h2>Individual Circumstances Vary</h2>
            <p>
              Health information that applies generally to a population may not apply to any individual person. Weight
              health, obesity treatment, and related topics involve clinical complexity and individual variation that
              general educational content cannot address. What is appropriate for one person may not be appropriate for
              another.
            </p>

            <h2>No Provider Relationship</h2>
            <p>
              Using this website or any of its content does not create a patient-provider relationship between you and
              Healthy Weight Literacy Foundation or any of its staff, contributors, or affiliated individuals. We are
              an educational organization, not a healthcare provider.
            </p>

            <h2>Limitation of Liability</h2>
            <p>
              Healthy Weight Literacy Foundation makes reasonable efforts to ensure that published content is accurate
              and based on available information at the time of writing. However, we do not guarantee the completeness,
              accuracy, or currency of any content, and we are not responsible for any actions taken based on
              information found on this website.
            </p>

            <h2>Questions</h2>
            <p>
              If you have questions about the scope of our content or this disclaimer, please contact us at:{" "}
              <a href={`mailto:${siteConfig.email}`} className="text-primary underline">
                {siteConfig.email}
              </a>
            </p>
          </div>
        </Container>
      </Section>
    </>
  )
}
