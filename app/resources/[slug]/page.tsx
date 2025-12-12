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
import { getResource, getResources } from "@/lib/mdx"
import { generatePageMetadata } from "@/lib/seo"
import { Share2, Download, Bookmark } from "lucide-react"

interface ResourcePageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const resources = getResources()
  return resources.map((resource) => ({ slug: resource.slug }))
}

export async function generateMetadata({ params }: ResourcePageProps): Promise<Metadata> {
  const resolvedParams = await params
  const resource = getResource(resolvedParams.slug)
  if (!resource) return {}

  return generatePageMetadata({
    title: resource.title,
    description: resource.description,
    path: `/resources/${resource.slug}`,
    image: resource.heroImage,
  })
}

export default async function ResourcePage({ params }: ResourcePageProps) {
  const resolvedParams = await params
  const resource = getResource(resolvedParams.slug)

  if (!resource) {
    notFound()
  }

  return (
    <>
      <PageHeader
        title={resource.title}
        description={resource.description}
        breadcrumbs={[{ label: "Resources", href: "/resources" }, { label: resource.title }]}
      >
        <div className="flex flex-wrap gap-2 mt-4">
          <Badge variant="secondary">{resource.category}</Badge>
          <Badge variant="outline">{resource.type}</Badge>
          {resource.tags.map((tag) => (
            <Badge key={tag} variant="outline">
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
                src={resource.heroImage || "/placeholder.svg"}
                alt={resource.title}
                width={1200}
                height={600}
                className="rounded-2xl shadow-card mb-8"
              />

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3 mb-8">
                <Button variant="outline" size="sm">
                  <Share2 className="mr-2 h-4 w-4" aria-hidden="true" />
                  Share
                </Button>
                <Button variant="outline" size="sm">
                  <Bookmark className="mr-2 h-4 w-4" aria-hidden="true" />
                  Save
                </Button>
                <Button variant="outline" size="sm">
                  <Download className="mr-2 h-4 w-4" aria-hidden="true" />
                  Download PDF
                </Button>
              </div>

              <p className="text-sm text-muted-foreground mb-8">By {resource.author}</p>

              {/* Content */}
              <article className="prose">
                {resource.content.split("\n").map((paragraph, index) => {
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
                  if (paragraph.startsWith("|")) {
                    return (
                      <p key={index} className="font-mono text-sm">
                        {paragraph}
                      </p>
                    )
                  }
                  if (paragraph.trim()) {
                    return <p key={index}>{paragraph}</p>
                  }
                  return null
                })}
              </article>
            </div>

            {/* Sidebar */}
            <aside className="hidden lg:block">
              <TableOfContents />

              <div className="mt-8 p-6 bg-primary-soft rounded-xl">
                <h4 className="font-semibold text-secondary mb-3">Need More Support?</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Our programs provide hands-on guidance to help you implement these strategies.
                </p>
                <Link href="/programs">
                  <Button size="sm" className="w-full">
                    Explore Programs
                  </Button>
                </Link>
              </div>
            </aside>
          </div>
        </Container>
      </Section>
    </>
  )
}
