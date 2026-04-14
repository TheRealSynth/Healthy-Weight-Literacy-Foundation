import type { Metadata } from "next"
import Link from "next/link"
import { PageHeader } from "@/components/layout/page-header"
import { Section } from "@/components/layout/section"
import { Container } from "@/components/layout/container"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { generatePageMetadata } from "@/lib/seo"
import { getBlogPosts } from "@/lib/supabase-blog"
import { BreadcrumbSchema } from "@/components/seo/breadcrumb-schema"
import { BookOpen, Activity, Smartphone, Scale, Users, ArrowRight } from "lucide-react"
import Image from "next/image"

export const metadata: Metadata = generatePageMetadata({
  title: "Programs",
  description:
    "Discover HWLF's educational programs covering nutrition literacy, metabolic health, telehealth safety, and weight management science.",
  path: "/programs",
})

const pillars = [
  {
    id: "nutrition",
    icon: BookOpen,
    title: "Nutrition Literacy",
    color: "bg-emerald-50 border-emerald-200",
    iconColor: "text-emerald-600",
    iconBg: "bg-emerald-100",
    description:
      "Clear, evidence-based information on nutrition science, healthy eating patterns, and making informed food choices without restrictive diet culture.",
    categories: ["Nutrition Literacy"],
  },
  {
    id: "metabolic",
    icon: Activity,
    title: "Metabolic Health",
    color: "bg-blue-50 border-blue-200",
    iconColor: "text-blue-600",
    iconBg: "bg-blue-100",
    description:
      "Education on metabolism, hormones, gut health, and the biological factors that influence weight — grounded in current research.",
    categories: ["Metabolic Health"],
  },
  {
    id: "telehealth",
    icon: Smartphone,
    title: "Telehealth & Medication Education",
    color: "bg-purple-50 border-purple-200",
    iconColor: "text-purple-600",
    iconBg: "bg-purple-100",
    description:
      "Consumer guidance on evaluating telehealth providers, understanding GLP-1 medications, and navigating online healthcare safely.",
    categories: ["Telehealth Education", "Medication Literacy"],
  },
  {
    id: "weight",
    icon: Scale,
    title: "Weight Management Science",
    color: "bg-amber-50 border-amber-200",
    iconColor: "text-amber-600",
    iconBg: "bg-amber-100",
    description:
      "Science-based education on weight health, weight stigma, BMI literacy, and sustainable approaches to managing weight over time.",
    categories: ["Weight Literacy"],
  },
]

const audiences = [
  {
    title: "Individuals seeking reliable health information",
    description:
      "People navigating weight health decisions who want credible, non-promotional education they can trust.",
  },
  {
    title: "Adults managing weight and metabolic conditions",
    description:
      "People dealing with obesity, insulin resistance, or metabolic health challenges who want to understand their options.",
  },
  {
    title: "Ohio communities with limited health resource access",
    description:
      "Residents of underserved Ohio communities who benefit from free, accessible health literacy resources.",
  },
]

export default async function ProgramsPage() {
  const allPosts = await getBlogPosts()

  const pillarArticles = pillars.map((pillar) => {
    const matched = allPosts
      .filter((p) => pillar.categories.includes(p.category))
      .slice(0, 3)
    return { ...pillar, articles: matched }
  })

  return (
    <>
      <BreadcrumbSchema pathname="/programs" />

      <PageHeader
        title="Our Educational Programs"
        description="Evidence-based health education, free for everyone"
        breadcrumbs={[{ label: "Programs" }]}
      >
        <p className="mt-4 text-secondary/80 max-w-2xl">
          HWLF develops and publishes free educational resources on nutrition, metabolic health, and weight management science. Our content is grounded in published clinical research and designed for general audiences — not healthcare professionals.
        </p>
      </PageHeader>

      {/* Four Content Pillars */}
      <Section>
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-secondary sm:text-4xl">Content Pillars</h2>
            <p className="mt-3 text-lg text-muted-foreground">Four areas of focus, each grounded in current evidence</p>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {pillarArticles.map((pillar) => (
              <div key={pillar.id} className={`rounded-xl border p-6 ${pillar.color}`}>
                <div className="flex items-center gap-3 mb-4">
                  <div className={`h-10 w-10 rounded-lg ${pillar.iconBg} flex items-center justify-center`}>
                    <pillar.icon className={`h-5 w-5 ${pillar.iconColor}`} aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-bold text-secondary">{pillar.title}</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6">{pillar.description}</p>
                {pillar.articles.length > 0 ? (
                  <div className="space-y-3">
                    {pillar.articles.map((article) => (
                      <Link key={article.slug} href={`/blog/${article.slug}`}>
                        <div className="flex items-start gap-3 p-3 rounded-lg bg-white/60 hover:bg-white transition-colors">
                          {article.hero_image && (
                            <div className="relative h-12 w-16 rounded overflow-hidden shrink-0">
                              <Image
                                src={article.hero_image}
                                alt={article.title}
                                fill
                                className="object-cover"
                              />
                            </div>
                          )}
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-secondary line-clamp-2 leading-tight">
                              {article.title}
                            </p>
                            <p className="text-xs text-muted-foreground mt-0.5">{article.reading_time}</p>
                          </div>
                          <ArrowRight className="h-4 w-4 text-muted-foreground shrink-0 mt-0.5" />
                        </div>
                      </Link>
                    ))}
                  </div>
                ) : (
                  <p className="text-sm text-muted-foreground italic">Articles coming soon.</p>
                )}
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Who We Serve */}
      <Section background="muted">
        <Container>
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold tracking-tight text-secondary sm:text-4xl">Who We Serve</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {audiences.map((audience) => (
              <Card key={audience.title}>
                <CardContent className="pt-6">
                  <div className="h-8 w-8 rounded-full bg-primary-soft flex items-center justify-center mb-4">
                    <Users className="h-4 w-4 text-primary" aria-hidden="true" />
                  </div>
                  <h3 className="font-semibold text-secondary mb-2 leading-snug">{audience.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{audience.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section>
        <Container size="md" className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-secondary sm:text-4xl mb-4">
            Explore All Educational Resources
          </h2>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            Browse our full library of evidence-based articles on nutrition, metabolic health, and weight management science.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/education">
              <Button size="lg" className="font-semibold">
                View All Articles
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/city-resources">
              <Button size="lg" variant="outline" className="font-semibold">
                Find Ohio Community Resources →
              </Button>
            </Link>
          </div>
        </Container>
      </Section>
    </>
  )
}
