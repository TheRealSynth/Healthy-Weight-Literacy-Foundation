"use client"

import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { NewsletterForm } from "@/components/forms/newsletter-form"
import { Mail } from "lucide-react"

export function NewsletterBanner() {
  return (
    <Section background="muted">
      <Container>
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary-soft mb-6">
            <Mail className="h-7 w-7 text-primary" aria-hidden="true" />
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-secondary sm:text-3xl">Stay Connected</h2>
          <p className="mt-3 text-muted-foreground max-w-md">
            Get the latest health tips, program updates, and inspiring stories delivered to your inbox.
          </p>
          <div className="mt-6 w-full max-w-md">
            <NewsletterForm />
          </div>
        </div>
      </Container>
    </Section>
  )
}
