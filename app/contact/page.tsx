import type { Metadata } from "next"
import { Mail, Phone, MapPin, Clock } from "lucide-react"
import { Section } from "@/components/layout/section"
import { Container } from "@/components/layout/container"
import { PageHeader } from "@/components/layout/page-header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ContactForm } from "@/components/forms/contact-form"
import { generatePageMetadata } from "@/lib/seo"

export const metadata: Metadata = generatePageMetadata({
  title: "Contact Us",
  description: "Get in touch with the Healthy Weight Literacy Foundation. We're here to help.",
  path: "/contact",
})

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    content: "info@hwlf.org",
    description: "For general inquiries",
  },
  {
    icon: Phone,
    title: "Phone",
    content: "(555) 123-4567",
    description: "Mon-Fri, 9am-5pm EST",
  },
  {
    icon: MapPin,
    title: "Address",
    content: "123 Wellness Way, Suite 100",
    description: "Chicago, IL 60601",
  },
  {
    icon: Clock,
    title: "Response Time",
    content: "Within 48 hours",
    description: "For all inquiries",
  },
]

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Contact Us"
        description="Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible."
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
              <div className="grid gap-4 sm:grid-cols-2">
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

              {/* Map Placeholder */}
              <div className="mt-8">
                <h3 className="text-lg font-semibold text-secondary mb-4">Our Location</h3>
                <div className="aspect-video rounded-lg bg-muted flex items-center justify-center border">
                  <div className="text-center text-muted-foreground">
                    <MapPin className="h-12 w-12 mx-auto mb-2 opacity-50" />
                    <p>Interactive map placeholder</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}
