import type { Metadata } from "next"
import { Section } from "@/components/layout/section"
import { Container } from "@/components/layout/container"
import { PageHeader } from "@/components/layout/page-header"
import { generatePageMetadata } from "@/lib/seo"

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
        description="Last updated: January 1, 2024"
        breadcrumbs={[{ label: "Terms of Service" }]}
      />

      <Section>
        <Container size="md">
          <div className="prose prose-slate max-w-none">
            <h2>Agreement to Terms</h2>
            <p>
              By accessing or using the Healthy Weight Literacy Foundation (&ldquo;HWLF&rdquo;) website and services,
              you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our
              services.
            </p>

            <h2>Description of Services</h2>
            <p>
              HWLF provides educational content, wellness programs, telehealth services, and community resources related
              to healthy weight and nutrition. Our services are intended for informational and educational purposes and
              are not a substitute for professional medical advice.
            </p>

            <h2>User Responsibilities</h2>
            <p>When using our services, you agree to:</p>
            <ul>
              <li>Provide accurate and complete information</li>
              <li>Use our services only for lawful purposes</li>
              <li>Not interfere with or disrupt our services</li>
              <li>Not attempt to gain unauthorized access to our systems</li>
              <li>Respect the privacy and rights of other users</li>
            </ul>

            <h2>Health Disclaimer</h2>
            <p>
              The information provided through our website and programs is for general educational purposes only. It is
              not intended as medical advice and should not be used to diagnose, treat, cure, or prevent any health
              condition. Always consult with a qualified healthcare provider before making changes to your diet,
              exercise, or health regimen.
            </p>

            <h2>Telehealth Services</h2>
            <p>
              If you use our telehealth services, additional terms and consent forms will apply. Telehealth services are
              provided by licensed healthcare professionals and are subject to state licensing requirements.
            </p>

            <h2>Intellectual Property</h2>
            <p>
              All content on our website, including text, graphics, logos, images, and software, is the property of HWLF
              or our content suppliers and is protected by copyright laws. You may not reproduce, distribute, or create
              derivative works without our written permission.
            </p>

            <h2>User Content</h2>
            <p>
              If you submit content to our website (such as testimonials or comments), you grant HWLF a non-exclusive,
              royalty-free license to use, reproduce, and display that content in connection with our services.
            </p>

            <h2>Donations</h2>
            <p>
              Donations to HWLF are voluntary and non-refundable except as required by law. We will provide tax receipts
              for donations as required. Please see our donation page for more information.
            </p>

            <h2>Third-Party Links</h2>
            <p>
              Our website may contain links to third-party websites. We are not responsible for the content, privacy
              practices, or terms of use of these external sites.
            </p>

            <h2>Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, HWLF shall not be liable for any indirect, incidental, special,
              consequential, or punitive damages arising from your use of our services.
            </p>

            <h2>Indemnification</h2>
            <p>
              You agree to indemnify and hold harmless HWLF, its officers, directors, employees, and agents from any
              claims, damages, or expenses arising from your violation of these terms or your use of our services.
            </p>

            <h2>Changes to Terms</h2>
            <p>
              We reserve the right to modify these Terms of Service at any time. Changes will be effective when posted
              on this page. Your continued use of our services after changes are posted constitutes acceptance of the
              modified terms.
            </p>

            <h2>Governing Law</h2>
            <p>
              These Terms of Service shall be governed by and construed in accordance with the laws of the State of
              Illinois, without regard to its conflict of law provisions.
            </p>

            <h2>Contact Information</h2>
            <p>If you have questions about these Terms of Service, please contact us at:</p>
            <p>
              Healthy Weight Literacy Foundation
              <br />
              123 Wellness Way, Suite 100
              <br />
              Chicago, IL 60601
              <br />
              Email: legal@hwlf.org
              <br />
              Phone: (555) 123-4567
            </p>
          </div>
        </Container>
      </Section>
    </>
  )
}
