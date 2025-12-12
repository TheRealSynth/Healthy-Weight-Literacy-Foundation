import type { Metadata } from "next"
import { Section } from "@/components/layout/section"
import { Container } from "@/components/layout/container"
import { PageHeader } from "@/components/layout/page-header"
import { generatePageMetadata } from "@/lib/seo"

export const metadata: Metadata = generatePageMetadata({
  title: "Privacy Policy",
  description:
    "Learn how the Healthy Weight Literacy Foundation collects, uses, and protects your personal information.",
  path: "/privacy",
})

export default function PrivacyPage() {
  return (
    <>
      <PageHeader
        title="Privacy Policy"
        description="Last updated: January 1, 2024"
        breadcrumbs={[{ label: "Privacy Policy" }]}
      />

      <Section>
        <Container size="md">
          <div className="prose prose-slate max-w-none">
            <h2>Introduction</h2>
            <p>
              The Healthy Weight Literacy Foundation (&ldquo;HWLF,&rdquo; &ldquo;we,&rdquo; &ldquo;our,&rdquo; or
              &ldquo;us&rdquo;) is committed to protecting your privacy. This Privacy Policy explains how we collect,
              use, disclose, and safeguard your information when you visit our website or use our services.
            </p>

            <h2>Information We Collect</h2>
            <h3>Personal Information</h3>
            <p>We may collect personal information that you voluntarily provide to us when you:</p>
            <ul>
              <li>Register for our programs or services</li>
              <li>Complete forms on our website</li>
              <li>Make a donation</li>
              <li>Subscribe to our newsletter</li>
              <li>Contact us with inquiries</li>
            </ul>
            <p>
              This information may include your name, email address, phone number, mailing address, and payment
              information.
            </p>

            <h3>Health Information</h3>
            <p>
              If you participate in our telehealth or wellness programs, we may collect health-related information
              necessary to provide these services. This information is protected under applicable healthcare privacy
              laws.
            </p>

            <h3>Automatically Collected Information</h3>
            <p>
              When you visit our website, we may automatically collect certain information about your device and usage
              patterns, including IP address, browser type, pages visited, and time spent on our site.
            </p>

            <h2>How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Provide and improve our programs and services</li>
              <li>Process donations and send tax receipts</li>
              <li>Communicate with you about our programs and events</li>
              <li>Send newsletters and educational content (with your consent)</li>
              <li>Respond to your inquiries and provide support</li>
              <li>Analyze website usage to improve user experience</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2>Information Sharing</h2>
            <p>
              We do not sell, trade, or rent your personal information to third parties. We may share your information
              with:
            </p>
            <ul>
              <li>Service providers who assist in our operations (e.g., payment processors, email services)</li>
              <li>Partner organizations when you enroll in joint programs (with your consent)</li>
              <li>Legal authorities when required by law</li>
            </ul>

            <h2>Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal information
              against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission
              over the Internet is 100% secure.
            </p>

            <h2>Your Rights</h2>
            <p>You have the right to:</p>
            <ul>
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your information (subject to legal requirements)</li>
              <li>Opt-out of marketing communications</li>
              <li>Withdraw consent where processing is based on consent</li>
            </ul>

            <h2>Cookies</h2>
            <p>
              Our website uses cookies to enhance your browsing experience. You can choose to disable cookies through
              your browser settings, though this may affect site functionality.
            </p>

            <h2>Children&apos;s Privacy</h2>
            <p>
              Our website is not intended for children under 13. We do not knowingly collect personal information from
              children under 13 without parental consent.
            </p>

            <h2>Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. The updated version will be indicated by an updated
              &ldquo;Last Updated&rdquo; date at the top of this page.
            </p>

            <h2>Contact Us</h2>
            <p>If you have questions about this Privacy Policy or our privacy practices, please contact us at:</p>
            <p>
              Healthy Weight Literacy Foundation
              <br />
              123 Wellness Way, Suite 100
              <br />
              Chicago, IL 60601
              <br />
              Email: privacy@hwlf.org
              <br />
              Phone: (555) 123-4567
            </p>
          </div>
        </Container>
      </Section>
    </>
  )
}
