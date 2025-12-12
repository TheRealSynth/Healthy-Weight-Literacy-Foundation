import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Image from "next/image"
import { PageHeader } from "@/components/layout/page-header"
import { Section } from "@/components/layout/section"
import { Container } from "@/components/layout/container"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { getBlogPost, getBlogPosts, getRelatedPosts } from "@/lib/mdx"
import { generatePageMetadata, generateArticleJsonLd, siteConfig } from "@/lib/seo"
import { formatDate } from "@/lib/utils"
import { Twitter, Facebook, Share2, Clock } from "lucide-react"
import Link from "next/link"

interface BlogPostPageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const posts = getBlogPosts()
  return posts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const resolvedParams = await params
  const post = getBlogPost(resolvedParams.slug)
  if (!post) return {}

  return generatePageMetadata({
    title: post.title,
    description: post.description,
    path: `/blog/${post.slug}`,
    image: post.heroImage,
  })
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const resolvedParams = await params
  const post = getBlogPost(resolvedParams.slug)

  if (!post) {
    notFound()
  }

  const relatedPosts = getRelatedPosts(post.slug, post.tags)
  const articleJsonLd = generateArticleJsonLd({
    title: post.title,
    description: post.description,
    publishedTime: post.publishedAt,
    modifiedTime: post.updatedAt,
    author: post.author,
    image: post.heroImage,
    url: `${siteConfig.url}/blog/${post.slug}`,
  })

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />

      <PageHeader title={post.title} breadcrumbs={[{ label: "Blog", href: "/blog" }, { label: post.title }]}>
        <div className="flex flex-wrap items-center gap-4 mt-4">
          <div className="flex items-center gap-3">
            <Image
              src={post.authorImage || "/placeholder.svg?height=40&width=40&query=author+portrait"}
              alt={post.author}
              width={40}
              height={40}
              className="rounded-full"
            />
            <div>
              <p className="font-medium text-secondary">{post.author}</p>
              <p className="text-sm text-muted-foreground">{formatDate(post.publishedAt)}</p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Clock className="h-4 w-4" aria-hidden="true" />
            {post.readingTime}
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
                src={post.heroImage || "/placeholder.svg?height=600&width=1200&query=article+hero+image"}
                alt={post.title}
                width={1200}
                height={600}
                className="rounded-2xl shadow-card mb-8"
                priority
              />

              {/* Article Content */}
              <article className="prose prose-lg max-w-none">
                {post.content.split("\n").map((paragraph, index) => {
                  if (paragraph.startsWith("# ")) {
                    const id = paragraph.slice(2).toLowerCase().replace(/\s+/g, "-")
                    return (
                      <h1 key={index} id={id}>
                        {paragraph.slice(2)}
                      </h1>
                    )
                  }
                  if (paragraph.startsWith("## ")) {
                    const id = paragraph.slice(3).toLowerCase().replace(/\s+/g, "-")
                    return (
                      <h2 key={index} id={id}>
                        {paragraph.slice(3)}
                      </h2>
                    )
                  }
                  if (paragraph.startsWith("### ")) {
                    const id = paragraph.slice(4).toLowerCase().replace(/\s+/g, "-")
                    return (
                      <h3 key={index} id={id}>
                        {paragraph.slice(4)}
                      </h3>
                    )
                  }
                  if (paragraph.startsWith("**") && paragraph.endsWith("**")) {
                    return (
                      <p key={index}>
                        <strong>{paragraph.slice(2, -2)}</strong>
                      </p>
                    )
                  }
                  if (paragraph.startsWith("- ")) {
                    return <li key={index}>{paragraph.slice(2)}</li>
                  }
                  if (paragraph.trim()) {
                    return <p key={index}>{paragraph}</p>
                  }
                  return null
                })}
              </article>

              {/* Share Section */}
              <div className="mt-12 pt-8 border-t">
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
                    {relatedPosts.slice(0, 2).map((relatedPost) => (
                      <Card key={relatedPost.slug} className="hover-lift">
                        <CardContent className="p-6">
                          <Image
                            src={relatedPost.heroImage || "/placeholder.svg?height=200&width=400&query=blog+post"}
                            alt={relatedPost.title}
                            width={400}
                            height={200}
                            className="rounded-lg mb-4 w-full object-cover"
                          />
                          <Badge variant="secondary" className="mb-2">
                            {relatedPost.category}
                          </Badge>
                          <h3 className="font-bold text-lg mb-2 text-secondary">{relatedPost.title}</h3>
                          <p className="text-muted-foreground text-sm mb-4">{relatedPost.description}</p>
                          <Button variant="link" className="p-0" asChild>
                            <Link href={`/blog/${relatedPost.slug}`}>Read more →</Link>
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <aside className="space-y-8">
              {/* Author Bio */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold text-secondary mb-4">About the Author</h3>
                  <div className="flex items-center gap-3 mb-3">
                    <Image
                      src={post.authorImage || "/placeholder.svg?height=60&width=60&query=author+portrait"}
                      alt={post.author}
                      width={60}
                      height={60}
                      className="rounded-full"
                    />
                    <div>
                      <p className="font-medium text-secondary">{post.author}</p>
                      <p className="text-sm text-muted-foreground">Health Writer</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Passionate about empowering individuals through education and accessible healthcare resources.
                  </p>
                </CardContent>
              </Card>

              {/* Newsletter CTA */}
              <Card className="bg-gradient-to-br from-primary/10 to-primary/5">
                <CardContent className="p-6">
                  <h3 className="font-bold text-secondary mb-2">Stay Informed</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Get the latest health insights delivered to your inbox.
                  </p>
                  <Button className="w-full" asChild>
                    <Link href="/#newsletter">Subscribe</Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Popular Tags */}
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
