import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Container } from "@/components/layout/container"
import { ArrowRight } from "lucide-react"

interface CTASectionProps {
  title: string
  description: string
  primaryCTA: { label: string; href: string }
  secondaryCTA?: { label: string; href: string }
}

export function CTASection({ title, description, primaryCTA, secondaryCTA }: CTASectionProps) {
  return (
    <section className="cta-gradient py-16 sm:py-20">
      <Container>
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl text-balance">{title}</h2>
          <p className="mt-4 text-lg text-white/90 max-w-2xl mx-auto text-pretty">{description}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href={primaryCTA.href}>
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold">
                {primaryCTA.label}
                <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
              </Button>
            </Link>
            {secondaryCTA && (
              <Link href={secondaryCTA.href}>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 bg-transparent"
                >
                  {secondaryCTA.label}
                </Button>
              </Link>
            )}
          </div>
        </div>
      </Container>
    </section>
  )
}
