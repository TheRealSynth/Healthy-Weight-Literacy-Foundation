import type { Metadata } from "next"
import Link from "next/link"
import { Section } from "@/components/layout/section"
import { Container } from "@/components/layout/container"
import { PageHeader } from "@/components/layout/page-header"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { generatePageMetadata, generateFAQSchema } from "@/lib/seo"

export const metadata: Metadata = generatePageMetadata({
  title: "Frequently Asked Questions",
  description: "Find answers to common questions about our programs, services, and how to get involved.",
  path: "/faq",
})

const faqItems = [
  {
    question: "What is the Healthy Weight Literacy Foundation?",
    answer:
      "The Healthy Weight Literacy Foundation (HWLF) is a 501(c)(3) nonprofit organization dedicated to providing evidence-based healthy weight education, accessible wellness programs, and compassionate support to individuals and families. We work to make health literacy accessible to all communities, regardless of socioeconomic status.",
  },
  {
    question: "Are your programs free?",
    answer:
      "Many of our programs are offered at no cost to participants, thanks to generous donations and grants. Some specialized programs may have a sliding-scale fee based on ability to pay. We never turn anyone away due to inability to pay. Contact us to learn more about specific program costs.",
  },
  {
    question: "How do I enroll in a program?",
    answer:
      "You can enroll in our programs by visiting our Programs page and clicking 'Learn More' on any program that interests you. From there, you'll find enrollment instructions specific to that program. For telehealth services, you can start by completing our online intake form.",
  },
  {
    question: "Do you offer services in languages other than English?",
    answer:
      "Yes! We offer many of our programs and materials in Spanish, and we have bilingual staff members. We also work with interpreter services for other languages. Please let us know your language needs when you contact us.",
  },
  {
    question: "How can I volunteer with HWLF?",
    answer:
      "We welcome volunteers with various skills and availability. Visit our Volunteer page to see current opportunities and fill out a volunteer application. Roles include workshop facilitators, community health ambassadors, administrative support, and more.",
  },
  {
    question: "Is my donation tax-deductible?",
    answer:
      "Yes, the Healthy Weight Literacy Foundation is a registered 501(c)(3) nonprofit organization, and your donation is tax-deductible to the fullest extent allowed by law. You will receive a receipt for your records.",
  },
  {
    question: "How does telehealth nutrition counseling work?",
    answer:
      "Our telehealth services connect you with registered dietitians via secure video calls. After completing an intake form, you'll be matched with a provider who fits your needs. Sessions typically last 30-60 minutes and can be scheduled at times convenient for you, including evenings and weekends.",
  },
  {
    question: "Do you accept insurance for telehealth services?",
    answer:
      "We work with many insurance providers for our telehealth nutrition services. We also offer self-pay options on a sliding scale. During the intake process, we'll help you understand your coverage options and out-of-pocket costs.",
  },
  {
    question: "How can my organization partner with HWLF?",
    answer:
      "We partner with healthcare providers, schools, community organizations, and corporations. Visit our Partner page to learn about partnership opportunities and fill out a partnership inquiry form. Our team will reach out to discuss how we can work together.",
  },
  {
    question: "What makes HWLF's approach different?",
    answer:
      "Our programs are evidence-based, culturally responsive, and focused on sustainable behavior change rather than quick fixes. We emphasize health literacy - helping people understand and navigate health information - so they can make informed decisions for themselves and their families.",
  },
]

export default function FAQPage() {
  const faqSchema = generateFAQSchema(faqItems)

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <PageHeader
        title="Frequently Asked Questions"
        description="Find answers to common questions about our programs, services, and how to get involved."
        breadcrumbs={[{ label: "FAQ" }]}
      />

      <Section>
        <Container size="md">
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">{item.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Container>
      </Section>

      <Section background="muted">
        <Container size="sm" className="text-center">
          <h2 className="text-2xl font-bold text-secondary mb-4">Still Have Questions?</h2>
          <p className="text-muted-foreground mb-6">
            Can&apos;t find what you&apos;re looking for? Our team is happy to help.
          </p>
          <Link href="/contact">
            <Button>Contact Us</Button>
          </Link>
        </Container>
      </Section>
    </>
  )
}
