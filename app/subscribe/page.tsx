import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Section } from "@/components/layout/section"
import { Container } from "@/components/layout/container"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { generatePageMetadata } from "@/lib/seo"
import { NewsletterForm } from "@/components/forms/newsletter-form"
import { getBlogPosts } from "@/lib/supabase-blog"
import { CheckCircle } from "lucide-react"
import { BreadcrumbSchema } from "@/components/seo/breadcrumb-schema"

export const metadata: Metadata = generatePageMetadata({
  title: "Subscribe — Stay Informed on Weight Health",
  description:
    "Free, evidence-based health education on nutrition, weight management, and metabolic health — delivered to your inbox.",
  path: "/subscribe",
})

const valueBullets = [
  "New articles on nutrition, metabolic health, and GLP-1 medications as they publish",
  "Updates when major clinical guidelines or FDA guidance changes affect our content",
  "Free, always. No spam. Unsubscribe anytime.",
]

export default async function SubscribePage() {
  const allPosts = await getBlogPosts()
  const featuredPosts = allPosts.slice(0, 3)

  return (
    <>
      <BreadcrumbSchema pathname="/subscribe" />

      <Section className="bg-gradient-to-b from-primary/5 to-transparent">
        <Container size="sm">
          <div className="text-center mb-10">
            <h1 className="text-4xl font-bold tracking-tight text-secondary sm:text-5xl mb-4">
              Stay Informed on Weight Health
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Free evidence-based health education, delivered to your inbox.
            </p>
          </div>

          {/* Value bullets */}
          <ul className="space-y-3 mb-10">
            {valueBullets.map((bullet) => (
              <li key={bullet} className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                <span className="text-secondary leading-relaxed">{bullet}</span>
              </li>
            ))}
          </ul>

          {/* Form */}
          <div className="bg-white rounded-2xl border shadow-sm p-8 mb-6">
            <NewsletterForm variant="default" />
          </div>

          {/* Privacy line */}
          <p className="text-center text-sm text-muted-foreground">
            We respect your privacy. See our{" "}
            <Link href="/privacy" className="text-primary underline hover:text-primary/80">
              Privacy Policy
            </Link>
            .
          </p>
        </Container>
      </Section>

      {/* Recent articles */}
      <Section background="muted">
        <Container>
          <h2 className="text-2xl font-bold text-secondary mb-2 text-center">
            Recent articles from our team
          </h2>
          <p className="text-center text-muted-foreground mb-8">
            A sample of what you will receive
          </p>
          {featuredPosts.length > 0 && (
            <div className="grid gap-6 md:grid-cols-3">
              {featuredPosts.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`}>
                  <Card className="hover:shadow-md transition-shadow h-full overflow-hidden">
                    {post.hero_image && (
                      <div className="relative h-40 w-full">
                        <Image
                          src={post.hero_image}
                          alt={post.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    )}
                    <CardContent className="pt-4">
                      <Badge variant="secondary" className="mb-2 text-xs">
                        {post.category}
                      </Badge>
                      <h3 className="font-semibold text-secondary leading-tight line-clamp-2 mb-1">
                        {post.title}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-2">{post.description}</p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          )}
        </Container>
      </Section>
    </>
  )
}
