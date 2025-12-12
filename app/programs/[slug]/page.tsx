import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { PageHeader } from "@/components/layout/page-header"
import { Section } from "@/components/layout/section"
import { Container } from "@/components/layout/container"
import { TableOfContents } from "@/components/layout/table-of-contents"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { CTASection } from "@/components/blocks/cta-section"
import { getProgram, getPrograms } from "@/lib/mdx"
import { generatePageMetadata } from "@/lib/seo"
import { Clock, Users, MapPin, ArrowRight } from "lucide-react"

interface ProgramPageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const programs = getPrograms()
  return programs.map((program) => ({ slug: program.slug }))
}

export async function generateMetadata({ params }: ProgramPageProps): Promise<Metadata> {
  const resolvedParams = await params
  const program = getProgram(resolvedParams.slug)
  if (!program) return {}

  return generatePageMetadata({
    title: program.title,
    description: program.description,
    path: `/programs/${program.slug}`,
    image: program.heroImage,
  })
}

export default async function ProgramPage({ params }: ProgramPageProps) {
  const resolvedParams = await params
  const program = getProgram(resolvedParams.slug)

  if (!program) {
    notFound()
  }

  return (
    <>
      <PageHeader
        title={program.title}
        description={program.description}
        breadcrumbs={[{ label: "Programs", href: "/programs" }, { label: program.title }]}
      >
        <div className="flex flex-wrap gap-2 mt-4">
          {program.tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
      </PageHeader>

      <Section>
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_300px]">
            {/* Main Content */}
            <div>
              <Image
                src={program.heroImage || "/placeholder.svg"}
                alt={program.title}
                width={1200}
                height={600}
                className="rounded-2xl shadow-card mb-8"
              />

              {/* Quick Info Cards */}
              <div className="grid gap-4 sm:grid-cols-3 mb-8">
                <Card>
                  <CardContent className="pt-6 flex items-center gap-3">
                    <Clock className="h-5 w-5 text-primary" aria-hidden="true" />
                    <div>
                      <p className="text-sm text-muted-foreground">Duration</p>
                      <p className="font-medium">{program.duration}</p>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6 flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-primary" aria-hidden="true" />
                    <div>
                      <p className="text-sm text-muted-foreground">Format</p>
                      <p className="font-medium">{program.format}</p>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6 flex items-center gap-3">
                    <Users className="h-5 w-5 text-primary" aria-hidden="true" />
                    <div>
                      <p className="text-sm text-muted-foreground">Audience</p>
                      <p className="font-medium">{program.audience}</p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Content */}
              <article className="prose">
                {program.content.split("\n").map((paragraph, index) => {
                  if (paragraph.startsWith("# ")) {
                    return (
                      <h1 key={index} id={paragraph.slice(2).toLowerCase().replace(/\s+/g, "-")}>
                        {paragraph.slice(2)}
                      </h1>
                    )
                  }
                  if (paragraph.startsWith("## ")) {
                    return (
                      <h2 key={index} id={paragraph.slice(3).toLowerCase().replace(/\s+/g, "-")}>
                        {paragraph.slice(3)}
                      </h2>
                    )
                  }
                  if (paragraph.startsWith("### ")) {
                    return (
                      <h3 key={index} id={paragraph.slice(4).toLowerCase().replace(/\s+/g, "-")}>
                        {paragraph.slice(4)}
                      </h3>
                    )
                  }
                  if (paragraph.startsWith("- ")) {
                    return <li key={index}>{paragraph.slice(2)}</li>
                  }
                  if (paragraph.startsWith("> ")) {
                    return <blockquote key={index}>{paragraph.slice(2)}</blockquote>
                  }
                  if (paragraph.trim()) {
                    return <p key={index}>{paragraph}</p>
                  }
                  return null
                })}
              </article>

              {/* CTA */}
              <div className="mt-12 p-8 bg-primary-soft rounded-2xl text-center">
                <h3 className="text-2xl font-bold text-secondary">Ready to Get Started?</h3>
                <p className="mt-2 text-muted-foreground">
                  Join our next session and take the first step toward your wellness goals.
                </p>
                <div className="mt-6 flex flex-wrap justify-center gap-4">
                  <Link href="/contact">
                    <Button size="lg">
                      Enroll Now
                      <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                    </Button>
                  </Link>
                  <Link href="/contact">
                    <Button size="lg" variant="outline">
                      Ask a Question
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="hidden lg:block">
              <TableOfContents />
            </aside>
          </div>
        </Container>
      </Section>

      <CTASection
        title="Explore More Programs"
        description="Find the perfect program for your wellness journey."
        primaryCTA={{ label: "View All Programs", href: "/programs" }}
      />
    </>
  )
}
