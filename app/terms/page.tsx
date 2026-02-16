import type { Metadata } from "next"
import { Section } from "@/components/layout/section"
import { Container } from "@/components/layout/container"
import { PageHeader } from "@/components/layout/page-header"
import { generatePageMetadata, siteConfig } from "@/lib/seo"

export const metadata: Metadata = generatePageMetadata({
  title: "Terms of Service",
  description: "Terms and conditions for using the Healthy Weight Literacy Foundation website and services.",
  path: "/terms",
})

export default function TermsPage() {
  return (
    <>
      <PageHeader
        title="Terms of Service"
        description="Last updated: December 18, 2025"
        breadcrumbs={[{ label: "Terms of Service" }]}
      />

      <Section>
        <Container size="md">
          <div className="prose prose-slate max-w-none">
            <h2>Agreement to Terms</h2>
            <p>
              By accessing or using the Healthy Weight Literacy Foundation (&ldquo;HWLF&rdquo;) website at{" "}
              <strong>weightliteracy.org</strong> and services, you agree to be bound by these Terms of Service. If you
              do not agree to these terms, please do not use our services.
            </p>

            <h2>Description of Services</h2>
            <p>
              HWLF provides educational content and resources related to nutrition, weight management, and metabolic
              health. Our services are intended for informational and educational purposes and are not a substitute for
              professional medical advice, diagnosis, or treatment.
            </p>

            <h2>User Responsibilities</h2>
            <p>When using our services, you agree to:</p>
            <ul>
              <li>Provide accurate and complete information</li>
              <li>Use our services only for lawful, educational purposes</li>
              <li>Not interfere with or disrupt our services</li>
              <li>Not attempt to gain unauthorized access to our systems</li>
              <li>Respect the privacy and rights of other users</li>
              <li>Not use our services for any commercial purposes without prior written consent</li>
            </ul>

            <h2>Health and Educational Disclaimer</h2>
            <p>
              The information provided through our website is for general educational purposes only. It is not intended
              as medical advice and should not be used to diagnose, treat, cure, or prevent any health condition. Always
              consult with a qualified healthcare provider before making changes to your diet, exercise, or health
              regimen. HWLF is not responsible for any health decisions made based on information found on our website.
            </p>

            <h2>Intellectual Property</h2>
            <p>
              All content on our website, including text, graphics, logos, images, and software, is the property of HWLF
              or our content suppliers and is protected by United States and international copyright laws. You may not
              reproduce, distribute, modify, or create derivative works without our written permission.
            </p>

            <h3>Limited License</h3>
            <p>
              We grant you a limited, non-exclusive, non-transferable license to access and use our educational content
              for personal, non-commercial use only. This license does not permit you to:
            </p>
            <ul>
              <li>Modify or copy the materials</li>
              <li>Use the materials for commercial purposes or public display</li>
              <li>Remove any copyright or proprietary notations</li>
              <li>Transfer the materials to another person or entity</li>
            </ul>

            <h2>User Content</h2>
            <p>
              If you submit content to our website (such as through contact forms or newsletter signups), you grant HWLF
              a non-exclusive, royalty-free, perpetual license to use, reproduce, and display that content in connection
              with our services and mission.
            </p>

            <h2>Donations</h2>
            <p>
              Donations to HWLF are voluntary and generally non-refundable except as required by law. All donations are
              tax-deductible to the fullest extent permitted by law. We will provide tax receipts for donations in
              accordance with IRS requirements. Our EIN is 41-2983678.
            </p>

            <h2>Third-Party Links</h2>
            <p>
              Our website may contain links to third-party websites for your convenience. We are not responsible for the
              content, privacy practices, or terms of use of these external sites. Accessing third-party sites is at
              your own risk.
            </p>

            <h2>Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, HWLF, its officers, directors, employees, volunteers, and agents
              shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from
              your use of our services, including but not limited to loss of data, loss of income, or health outcomes.
            </p>

            <h2>Indemnification</h2>
            <p>
              You agree to indemnify and hold harmless HWLF, its officers, directors, employees, and agents from any
              claims, damages, losses, liabilities, and expenses (including attorney fees) arising from your violation
              of these terms or your use of our services.
            </p>

            <h2>Modifications to Services</h2>
            <p>
              We reserve the right to modify, suspend, or discontinue any part of our services at any time without
              notice. We are not liable to you or any third party for any modification, suspension, or discontinuation
              of services.
            </p>

            <h2>Changes to Terms</h2>
            <p>
              We reserve the right to modify these Terms of Service at any time. Changes will be effective when posted
              on this page with an updated &ldquo;Last Updated&rdquo; date. Your continued use of our services after
              changes are posted constitutes acceptance of the modified terms.
            </p>

            <h2>Governing Law</h2>
            <p>
              These Terms of Service shall be governed by and construed in accordance with the laws of the State of
              Ohio, United States, without regard to its conflict of law provisions. Any disputes arising under these
              terms shall be resolved in the courts located in Ohio.
            </p>

            <h2>Severability</h2>
            <p>
              If any provision of these Terms is found to be unenforceable or invalid, that provision will be limited or
              eliminated to the minimum extent necessary so that these Terms will otherwise remain in full force and
              effect.
            </p>

            <h2>Entire Agreement</h2>
            <p>
              These Terms of Service, along with our Privacy Policy and Cookie Policy, constitute the entire agreement
              between you and HWLF regarding the use of our services.
            </p>

            <h2>Contact Information</h2>
            <p>If you have questions about these Terms of Service, please contact us at:</p>
            <p>
              {siteConfig.name}
              <br />
              {siteConfig.address.city}, {siteConfig.address.state}
              <br />
              Email: {siteConfig.email}
            </p>
          </div>
        </Container>
      </Section>
    </>
  )
}
