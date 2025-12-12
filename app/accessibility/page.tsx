import type { Metadata } from "next"
import Link from "next/link"
import { Section } from "@/components/layout/section"
import { Container } from "@/components/layout/container"
import { PageHeader } from "@/components/layout/page-header"
import { Button } from "@/components/ui/button"
import { generatePageMetadata } from "@/lib/seo"

export const metadata: Metadata = generatePageMetadata({
  title: "Accessibility Statement",
  description: "Our commitment to digital accessibility and making our website usable for everyone.",
  path: "/accessibility",
})

export default function AccessibilityPage() {
  return (
    <>
      <PageHeader
        title="Accessibility Statement"
        description="Our commitment to making our website accessible to all users."
        breadcrumbs={[{ label: "Accessibility" }]}
      />

      <Section>
        <Container size="md">
          <div className="prose prose-slate max-w-none">
            <h2>Our Commitment</h2>
            <p>
              The Healthy Weight Literacy Foundation is committed to ensuring digital accessibility for people with
              disabilities. We are continually improving the user experience for everyone and applying the relevant
              accessibility standards.
            </p>

            <h2>Conformance Status</h2>
            <p>
              We strive to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA. These guidelines
              explain how to make web content more accessible for people with disabilities and more user-friendly for
              everyone.
            </p>

            <h2>Accessibility Features</h2>
            <p>Our website includes the following accessibility features:</p>
            <ul>
              <li>
                <strong>Skip navigation links</strong> - Allow keyboard users to skip to main content
              </li>
              <li>
                <strong>Semantic HTML</strong> - Proper use of headings, landmarks, and ARIA labels
              </li>
              <li>
                <strong>Keyboard navigation</strong> - All interactive elements are accessible via keyboard
              </li>
              <li>
                <strong>Focus indicators</strong> - Visible focus states for keyboard navigation
              </li>
              <li>
                <strong>Color contrast</strong> - Text and interactive elements meet WCAG contrast requirements
              </li>
              <li>
                <strong>Alt text</strong> - Descriptive alternative text for images
              </li>
              <li>
                <strong>Responsive design</strong> - Content adapts to different screen sizes and zoom levels
              </li>
              <li>
                <strong>Form labels</strong> - All form fields have associated labels
              </li>
              <li>
                <strong>Error identification</strong> - Form errors are clearly identified and described
              </li>
            </ul>

            <h2>Assistive Technologies</h2>
            <p>Our website is designed to be compatible with the following assistive technologies:</p>
            <ul>
              <li>Screen readers (JAWS, NVDA, VoiceOver)</li>
              <li>Screen magnification software</li>
              <li>Speech recognition software</li>
              <li>Keyboard-only navigation</li>
            </ul>

            <h2>Known Limitations</h2>
            <p>
              While we strive for full accessibility, some content may have limitations. We are actively working to
              address any accessibility barriers. Known issues include:
            </p>
            <ul>
              <li>Some older PDF documents may not be fully accessible. We are working to remediate these files.</li>
              <li>Some third-party content or embedded features may not meet all accessibility standards.</li>
            </ul>

            <h2>Feedback</h2>
            <p>
              We welcome your feedback on the accessibility of our website. If you encounter any accessibility barriers
              or have suggestions for improvement, please contact us:
            </p>
            <ul>
              <li>Email: accessibility@hwlf.org</li>
              <li>Phone: (555) 123-4567</li>
              <li>Mail: 123 Wellness Way, Suite 100, Chicago, IL 60601</li>
            </ul>
            <p>We try to respond to accessibility feedback within 2 business days.</p>

            <h2>Enforcement Procedures</h2>
            <p>
              If you are not satisfied with our response to your accessibility concern, you may file a complaint with
              the U.S. Department of Health and Human Services, Office for Civil Rights.
            </p>

            <h2>Assessment and Updates</h2>
            <p>
              This statement was last updated on January 1, 2024. We regularly assess and update our website to maintain
              and improve accessibility. Our accessibility efforts are ongoing.
            </p>
          </div>
        </Container>
      </Section>

      <Section background="muted">
        <Container size="sm" className="text-center">
          <h2 className="text-2xl font-bold text-secondary mb-4">Need Assistance?</h2>
          <p className="text-muted-foreground mb-6">
            If you need help accessing any content or services on our website, please don&apos;t hesitate to reach out.
          </p>
          <Link href="/contact">
            <Button>Contact Us</Button>
          </Link>
        </Container>
      </Section>
    </>
  )
}
