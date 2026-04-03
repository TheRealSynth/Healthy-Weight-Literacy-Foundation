import type { Metadata } from "next"
import { Section } from "@/components/layout/section"
import { Container } from "@/components/layout/container"
import { PageHeader } from "@/components/layout/page-header"
import { generatePageMetadata, siteConfig } from "@/lib/seo"

export const metadata: Metadata = generatePageMetadata({
  title: "Editorial Policy | Healthy Weight Literacy Foundation",
  description:
    "How Healthy Weight Literacy Foundation develops educational content, the standards we follow, and what our content is and is not intended to do.",
  path: "/editorial-policy",
})

export default function EditorialPolicyPage() {
  return (
    <>
      <PageHeader
        title="Editorial Policy"
        description="How we develop content and the standards we hold ourselves to."
        breadcrumbs={[{ label: "Editorial Policy" }]}
      />

      <Section>
        <Container size="md">
          <div className="prose prose-slate max-w-none">
            <h2>Purpose of This Policy</h2>
            <p>
              This editorial policy describes how Healthy Weight Literacy Foundation approaches the development of
              educational content published on this website. Our goal is to be clear about what our content is intended
              to do, how it is produced, and what it is not intended to replace.
            </p>

            <h2>Educational Intent</h2>
            <p>
              All content published on this website is created for general educational purposes. Our work is intended to
              help individuals better understand weight health, obesity, and evidence-based treatment options — not to
              provide individualized guidance, clinical recommendations, or medical advice of any kind.
            </p>
            <p>
              Content is designed to improve public health literacy, support more informed conversations between
              patients and their healthcare providers, and make complex health information more accessible to general
              audiences.
            </p>

            <h2>Content Standards</h2>
            <p>We aim for content that is:</p>
            <ul>
              <li>
                <strong>Clear and accessible.</strong> We write for general audiences, not clinical specialists. We
                avoid unnecessary jargon and explain terms when they are used.
              </li>
              <li>
                <strong>Accurate and evidence-informed.</strong> Content draws on publicly available health guidance,
                peer-reviewed research, and information from reputable public health sources where appropriate.
              </li>
              <li>
                <strong>Balanced and non-promotional.</strong> We do not promote specific products, brands, services,
                or providers. Content is not influenced by commercial interests.
              </li>
              <li>
                <strong>Honest about limitations.</strong> We distinguish between well-established information and areas
                where evidence is limited or evolving. We do not overstate certainty.
              </li>
            </ul>

            <h2>Sources and References</h2>
            <p>
              Educational content may draw from publicly available sources including published research literature,
              guidelines from major health organizations, and reputable public health agencies. We do not claim that our
              content represents an exhaustive review of any topic, and we encourage readers to consult directly with
              qualified healthcare professionals for guidance specific to their situation.
            </p>

            <h2>What Our Content Is Not</h2>
            <p>Content on this website is not:</p>
            <ul>
              <li>A substitute for professional medical evaluation, diagnosis, or treatment</li>
              <li>Personalized health or nutrition advice</li>
              <li>A clinical recommendation for any specific individual</li>
              <li>An endorsement of any specific product, drug, supplement, or service</li>
            </ul>
            <p>
              Readers with questions about their specific health situation should consult a qualified healthcare
              provider. See our{" "}
              <a href="/medical-disclaimer" className="text-primary underline">
                Medical Disclaimer
              </a>{" "}
              for more detail.
            </p>

            <h2>Content Updates</h2>
            <p>
              We may update published content over time to reflect changes in available information, public health
              guidance, or to improve clarity. Significant updates may be noted within the content itself.
            </p>

            <h2>Questions or Concerns</h2>
            <p>
              If you have questions about our content or editorial standards, you may contact us at:{" "}
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
