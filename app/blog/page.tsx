import type { Metadata } from "next"
import { PageHeader } from "@/components/layout/page-header"
import { Section } from "@/components/layout/section"
import { Container } from "@/components/layout/container"
import { BlogCard } from "@/components/blocks/blog-card"
import { generatePageMetadata } from "@/lib/seo"
import { getBlogPosts } from "@/lib/mdx"

export const metadata: Metadata = generatePageMetadata({
  title: "Blog",
  description:
    "Expert insights, practical tips, and inspiring stories to support your wellness journey. Stay informed with the latest in health education.",
  path: "/blog",
})

export default function BlogPage() {
  const posts = getBlogPosts()

  return (
    <>
      <PageHeader
        title="Blog"
        description="Expert insights, practical tips, and inspiring stories to support your wellness journey."
        breadcrumbs={[{ label: "Blog" }]}
      />

      <Section>
        <Container>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </Container>
      </Section>
    </>
  )
}
