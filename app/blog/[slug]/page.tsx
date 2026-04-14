import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { PageHeader } from "@/components/layout/page-header"
import { Section } from "@/components/layout/section"
import { Container } from "@/components/layout/container"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { getBlogPost, getBlogPosts } from "@/lib/supabase-blog"
import { generatePageMetadata } from "@/lib/seo"
import { formatDate } from "@/lib/utils"
import { ArticleSchema } from "@/components/seo/article-schema"
import { ArticleRenderer } from "@/components/content/article-renderer"
import DOMPurify from "isomorphic-dompurify"
import { Twitter, Facebook, Share2, Clock } from "lucide-react"

const HTML_PATTERN = /<\/?[a-z][^>]*>/i

const ALLOWED_TAGS = [
  "p", "br", "strong", "em", "b", "i", "u", "s",
  "h1", "h2", "h3", "h4", "h5", "h6",
  "ul", "ol", "li", "blockquote", "pre", "code",
  "a", "img", "figure", "figcaption",
  "table", "thead", "tbody", "tr", "th", "td",
  "hr", "sup", "sub", "span", "div",
]
const ALLOWED_ATTR = ["href", "src", "alt", "title", "class", "id", "target", "rel"]

const CANONICAL_OVERRIDES: Record<string, string> = {
  "reading-nutrition-labels-weight-health": "/blog/reading-nutrition-labels-what-to-look-for",
  "hydration-weight-health-daily-functioning": "/blog/hydration-and-health-how-much-water-do-you-need",
  "how-sleep-affects-weight-health-daily-functioning": "/blog/sleep-and-weight-understanding-the-connection",
  "understanding-physical-activity-weight-health": "/blog/physical-activity-for-health-beyond-weight-loss",
  "understanding-food-labels-added-sugars": "/blog/added-sugars-hidden-sources-and-health-effects",
}

const WWW_BASE = "https://www.weightliteracy.org"

function prepareContent(raw: string): { content: string; isHtml: boolean } {
  const isHtml = HTML_PATTERN.test(raw)
  if (isHtml) {
    return {
      content: DOMPurify.sanitize(raw, { ALLOWED_TAGS, ALLOWED_ATTR }),
      isHtml: true,
    }
  }
  return { content: raw, isHtml: false }
}

function formatReviewDate(isoDate?: string | null): string | null {
  if (!isoDate) return null
  const d = new Date(isoDate)
  if (isNaN(d.getTime())) return null
  return d.toLocaleDateString("en-US", { month: "long", year: "numeric" })
}

interface BlogPostPageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const posts = await getBlogPosts()
  return posts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const resolvedParams = await params
  const post = await getBlogPost(resolvedParams.slug)
  if (!post) return {}

  const canonicalPath =
    post.canonical_url ||
    CANONICAL_OVERRIDES[resolvedParams.slug] ||
    `/blog/${resolvedParams.slug}`

  const canonical = `${WWW_BASE}${canonicalPath}`

  return {
    ...generatePageMetadata({
      title: post.title,
      description: post.description,
      path: `/blog/${resolvedParams.slug}`,
      image: post.hero_image,
    }),
    alternates: { canonical },
  }
}

const AuthorSVG = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 40 40"
    fill="none"
    className="rounded-full w-full h-full"
    aria-hidden="true"
  >
    <rect width="40" height="40" rx="20" fill="#e5e7eb" />
    <circle cx="20" cy="16" r="7" fill="#9ca3af" />
    <path d="M4 36c0-8.837 7.163-16 16-16s16 7.163 16 16" fill="#9ca3af" />
  </svg>
)

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const resolvedParams = await params
  const post = await getBlogPost(resolvedParams.slug)

  if (!post) {
    notFound()
  }

  const allPosts = await getBlogPosts()
  const relatedPosts = allPosts.filter((p) => p.slug !== post.slug && p.category === post.category).slice(0, 2)
  const { content, isHtml } = prepareContent(post.content)

  const authorSlug = post.author_slug || "hwlf-editorial-team"

  const reviewDate = formatReviewDate(post.reviewed_at) || formatReviewDate(post.updated_at)

  return (
    <>
      <ArticleSchema
        title={post.title}
        description={post.description}
        slug={post.slug}
        publishedAt={post.published_at}
        updatedAt={post.updated_at ?? undefined}
        reviewedAt={post.reviewed_at}
        category={post.category}
      />

      <PageHeader title={post.title} breadcrumbs={[{ label: "Blog", href: "/blog" }, { label: post.title }]}>
        <div className="flex flex-wrap items-center gap-4 mt-4">
          <div className="flex items-center gap-3">
            <Link
              href={`/authors/${authorSlug}`}
              className="h-10 w-10 rounded-full overflow-hidden shrink-0 block hover:opacity-80 transition-opacity"
              aria-label={`View ${post.author} author profile`}
            >
              {post.author_image && !post.author_image.includes("unsplash") ? (
                <Image
                  src={post.author_image}
                  alt={post.author}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
              ) : (
                <AuthorSVG />
              )}
            </Link>
            <div>
              <Link
                href={`/authors/${authorSlug}`}
                className="font-medium text-secondary hover:text-primary transition-colors block"
              >
                {post.author}
              </Link>
              <p className="text-sm text-muted-foreground">{formatDate(post.published_at)}</p>
              {reviewDate && (
                <p style={{ fontSize: "0.8rem", color: "#757575", marginTop: "0.25rem" }}>
                  Last reviewed: {reviewDate}
                </p>
              )}
            </div>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Clock className="h-4 w-4" aria-hidden="true" />
            {post.reading_time}
          </div>
        </div>
        <div className="flex flex-wrap gap-2 mt-4">
          <Badge variant="secondary">{post.category}</Badge>
          {post.tags.map((tag) => (
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
                src={post.hero_image || "/placeholder.svg?height=600&width=1200&query=article+hero+image"}
                alt={post.title}
                width={1200}
                height={600}
                className="rounded-2xl shadow-card mb-8 w-full h-auto"
                priority
                loading="eager"
              />

              <ArticleRenderer content={content} isHtml={isHtml} />

              {/* Article Footer */}
              <div className="mt-8 pt-4 border-t">
                <p className="text-sm text-muted-foreground">{post.author}</p>
                <p className="text-sm text-muted-foreground">{formatDate(post.published_at)}</p>
                {reviewDate && (
                  <p style={{ fontSize: "0.8rem", color: "#757575", marginTop: "0.5rem" }}>
                    Last reviewed: {reviewDate}
                  </p>
                )}
              </div>

              {/* Share Section */}
              <div className="mt-8 pt-8 border-t">
                <h3 className="text-lg font-semibold text-secondary mb-4">Share this article</h3>
                <div className="flex gap-3">
                  <Button variant="outline" size="icon" aria-label="Share on Twitter">
                    <Twitter className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon" aria-label="Share on Facebook">
                    <Facebook className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon" aria-label="Copy link">
                    <Share2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Related Posts */}
              {relatedPosts.length > 0 && (
                <div className="mt-16">
                  <h2 className="text-2xl font-bold text-secondary mb-6">Related Articles</h2>
                  <div className="grid gap-6 md:grid-cols-2">
                    {relatedPosts.map((relatedPost) => (
                      <Link key={relatedPost.slug} href={`/blog/${relatedPost.slug}`}>
                        <Card className="hover-lift h-full">
                          <CardContent className="p-6">
                            <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden">
                              <Image
                                src={relatedPost.hero_image || "/placeholder.svg?height=200&width=400&query=blog+post"}
                                alt={relatedPost.title}
                                fill
                                className="object-cover"
                              />
                            </div>
                            <Badge variant="secondary" className="mb-2">
                              {relatedPost.category}
                            </Badge>
                            <h3 className="font-bold text-lg mb-2 text-secondary line-clamp-2">{relatedPost.title}</h3>
                            <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{relatedPost.description}</p>
                            <span className="text-primary font-medium text-sm">Read more →</span>
                          </CardContent>
                        </Card>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <aside className="space-y-8">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold text-secondary mb-4">About the Author</h3>
                  <div className="flex items-center gap-3 mb-3">
                    <Link
                      href={`/authors/${authorSlug}`}
                      className="h-12 w-12 rounded-full overflow-hidden shrink-0 block hover:opacity-80 transition-opacity"
                    >
                      {post.author_image && !post.author_image.includes("unsplash") ? (
                        <Image
                          src={post.author_image}
                          alt={post.author}
                          width={60}
                          height={60}
                          className="rounded-full"
                        />
                      ) : (
                        <div className="h-12 w-12">
                          <AuthorSVG />
                        </div>
                      )}
                    </Link>
                    <div>
                      <Link
                        href={`/authors/${authorSlug}`}
                        className="font-medium text-secondary hover:text-primary transition-colors block"
                      >
                        {post.author}
                      </Link>
                      <p className="text-sm text-muted-foreground">Health Writer</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Passionate about empowering individuals through education and accessible healthcare resources.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-primary/10 to-primary/5">
                <CardContent className="p-6">
                  <h3 className="font-bold text-secondary mb-2">Stay Informed</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Get the latest health insights delivered to your inbox.
                  </p>
                  <Button className="w-full" asChild>
                    <Link href="/subscribe">Subscribe</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold text-secondary mb-4">Popular Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Nutrition</Badge>
                    <Badge variant="outline">Exercise</Badge>
                    <Badge variant="outline">Mental Health</Badge>
                    <Badge variant="outline">Wellness</Badge>
                    <Badge variant="outline">Prevention</Badge>
                  </div>
                </CardContent>
              </Card>
            </aside>
          </div>
        </Container>
      </Section>
    </>
  )
}
