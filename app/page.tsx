import Link from "next/link"
import { Hero } from "@/components/blocks/hero"
import { Mission } from "@/components/blocks/mission"
import { Stats } from "@/components/blocks/stats"
import { ProgramCards } from "@/components/blocks/program-cards"
import { BlogCard } from "@/components/blocks/blog-card"
import { TestimonialCarousel } from "@/components/blocks/testimonial-carousel"
import { SponsorWall } from "@/components/blocks/sponsor-wall"
import { NewsletterBanner } from "@/components/blocks/newsletter-banner"
import { CTASection } from "@/components/blocks/cta-section"
import { Section } from "@/components/layout/section"
import { Container } from "@/components/layout/container"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { getPrograms, getBlogPosts } from "@/lib/mdx"

export default function HomePage() {
  const programs = getPrograms()
  const blogPosts = getBlogPosts().slice(0, 3)

  return (
    <>
      <Hero
        title="Building Healthier Communities, One Family at a Time"
        subtitle="We provide evidence-based education, accessible programs, and compassionate support to help individuals and families achieve lasting wellness."
        primaryCTA={{ label: "Explore Programs", href: "/programs" }}
        secondaryCTA={{ label: "Get Involved", href: "/volunteer" }}
      />

      <Mission />

      <Stats />

      {/* Featured Programs */}
      <Section>
        <Container>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-secondary sm:text-4xl">Our Programs</h2>
              <p className="mt-3 text-lg text-muted-foreground">
                Evidence-based programs designed to meet you where you are.
              </p>
            </div>
            <Link href="/programs">
              <Button variant="outline">
                View All Programs
                <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </Button>
            </Link>
          </div>
          <ProgramCards programs={programs} />
        </Container>
      </Section>

      {/* Testimonials */}
      <Section background="muted">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-secondary sm:text-4xl">Stories of Transformation</h2>
            <p className="mt-3 text-lg text-muted-foreground">
              Hear from families and individuals whose lives have been changed.
            </p>
          </div>
          <TestimonialCarousel />
        </Container>
      </Section>

      {/* Featured Articles */}
      <Section>
        <Container>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-secondary sm:text-4xl">Latest from Our Blog</h2>
              <p className="mt-3 text-lg text-muted-foreground">
                Expert insights, tips, and stories for your wellness journey.
              </p>
            </div>
            <Link href="/blog">
              <Button variant="outline">
                View All Articles
                <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </Button>
            </Link>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </Container>
      </Section>

      <SponsorWall />

      <NewsletterBanner />

      <CTASection
        title="Partner With Us"
        description="Join our network of healthcare providers, schools, and organizations committed to building healthier communities."
        primaryCTA={{ label: "Become a Partner", href: "/partner" }}
        secondaryCTA={{ label: "Learn More", href: "/about" }}
      />
    </>
  )
}
