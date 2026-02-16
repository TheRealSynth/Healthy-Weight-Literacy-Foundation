import type { Metadata } from "next"
import { Mail, MapPin } from "lucide-react"
import { Section } from "@/components/layout/section"
import { Container } from "@/components/layout/container"
import { PageHeader } from "@/components/layout/page-header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ContactForm } from "@/components/forms/contact-form"
import { generatePageMetadata, siteConfig } from "@/lib/seo"

export const metadata: Metadata = generatePageMetadata({
  title: "Contact Us",
  description: "Get in touch with the Healthy Weight Literacy Foundation. We're here to help.",
  path: "/contact",
})

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    content: siteConfig.email,
    description: "For general inquiries",
  },
  {
    icon: MapPin,
    title: "Location",
    content: `${siteConfig.address.city}, ${siteConfig.address.state}`,
    description: "Serving our community",
  },
]

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Contact Us"
        description="Have questions? We'd love to hear from you."
        breadcrumbs={[{ label: "Contact" }]}
      />

      <Section>
        <Container>
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-secondary mb-6">Send Us a Message</h2>
              <Card>
                <CardContent className="p-6">
                  <ContactForm />
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold text-secondary mb-6">Get in Touch</h2>
              <div className="space-y-4">
                {contactInfo.map((item) => (
                  <Card key={item.title}>
                    <CardHeader className="pb-2">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-soft">
                          <item.icon className="h-5 w-5 text-primary" />
                        </div>
                        <CardTitle className="text-lg">{item.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="font-medium text-secondary">{item.content}</p>
                      <CardDescription>{item.description}</CardDescription>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="mt-8 p-6 bg-muted rounded-lg">
                <h3 className="text-lg font-semibold text-secondary mb-3">Office Hours</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We typically respond to all inquiries within 2 business days. Thank you for your patience.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}
