import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Section } from "@/components/layout/section"
import { Container } from "@/components/layout/container"
import { PageHeader } from "@/components/layout/page-header"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { generatePageMetadata, siteConfig } from "@/lib/seo"
import { getAuthor } from "@/lib/authors"
import { getBlogPosts } from "@/lib/supabase-blog"
import { formatDate } from "@/lib/utils"
import Image from "next/image"
import { ArrowRight, ExternalLink } from "lucide-react"

interface AuthorPageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return [{ slug: "hwlf-editorial-team" }]
}

export async function generateMetadata({ params }: AuthorPageProps): Promise<Metadata> {
  const { slug } = await params
  const author = getAuthor(slug)
  if (!author) return {}
  const displayName = author.credentials
    ? `${author.name}, ${author.credentials}`
    : author.name
  return generatePageMetadata({
    title: displayName,
    description: author.bio,
    path: `/authors/${slug}`,
  })
}

const AuthorSVG = ({ size = 96 }: { size?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 96 96"
    width={size}
    height={size}
    fill="none"
    aria-hidden="true"
  >
    <rect width="96" height="96" rx="48" fill="#e5e7eb" />
    <circle cx="48" cy="38" r="18" fill="#9ca3af" />
    <path d="M8 88c0-22.091 17.909-40 40-40s40 17.909 40 40" fill="#9ca3af" />
  </svg>
)

export default async function AuthorPage({ params }: AuthorPageProps) {
  const { slug } = await params
  const author = getAuthor(slug)
  if (!author) notFound()

  const allPosts = await getBlogPosts()
  const authorPosts = allPosts.filter(
    (p) => (p.author_slug || "hwlf-editorial-team") === slug,
  )

  const displayName = author.credentials
    ? `${author.name}, ${author.credentials}`
    : author.name

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${siteConfig.url}/authors/${slug}#person`,
    name: author.name,
    ...(author.credentials ? { honorificSuffix: author.credentials } : {}),
    url: `${siteConfig.url}/authors/${slug}`,
    knowsAbout: author.expertise,
    worksFor: {
      "@id": `${siteConfig.url}/#organization`,
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />

      <PageHeader
        title={displayName}
        breadcrumbs={[{ label: "Authors", href: "/authors" }, { label: author.name }]}
      />

      <Section>
        <Container size="md">
          <div className="flex flex-col md:flex-row gap-8 items-start mb-10">
            {/* Photo */}
            <div className="shrink-0">
              {author.photo ? (
                <Image
                  src={author.photo}
                  alt={author.name}
                  width={96}
                  height={96}
                  className="rounded-full"
                />
              ) : (
                <AuthorSVG size={96} />
              )}
            </div>

            {/* Bio + expertise */}
            <div className="flex-1">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">{author.bio}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {author.expertise.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>

              {author.externalProfileUrl && (
                <Button variant="outline" asChild>
                  <a
                    href={author.externalProfileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View professional profile
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              )}
            </div>
          </div>

          {/* Articles by this author */}
          <div>
            <h2 className="text-2xl font-bold text-secondary mb-6">
              Articles by {author.name}
            </h2>
            {authorPosts.length === 0 ? (
              <p className="text-muted-foreground">No articles found for this author.</p>
            ) : (
              <div className="space-y-4">
                {authorPosts.map((post) => (
                  <Link key={post.slug} href={`/blog/${post.slug}`}>
                    <Card className="hover:shadow-md transition-shadow">
                      <CardContent className="p-5 flex items-start gap-4">
                        {post.hero_image && (
                          <div className="relative h-16 w-24 rounded overflow-hidden shrink-0">
                            <Image
                              src={post.hero_image}
                              alt={post.title}
                              fill
                              className="object-cover"
                            />
                          </div>
                        )}
                        <div className="flex-1 min-w-0">
                          <Badge variant="outline" className="mb-1 text-xs">
                            {post.category}
                          </Badge>
                          <h3 className="font-semibold text-secondary leading-tight line-clamp-2">
                            {post.title}
                          </h3>
                          <p className="text-sm text-muted-foreground mt-1">{formatDate(post.published_at)}</p>
                        </div>
                        <ArrowRight className="h-4 w-4 text-muted-foreground shrink-0 mt-1" />
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </Container>
      </Section>
    </>
  )
}
