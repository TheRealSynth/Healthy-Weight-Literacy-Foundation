import { siteConfig } from "@/lib/seo"

// Categories that require MedicalWebPage schema instead of Article.
// Values must match exactly the category strings stored in the blog_posts DB table.
const MEDICAL_CATEGORIES = new Set([
  "Metabolic Health",       // DB: confirmed present
  "Medication Literacy",    // DB: confirmed present (covers GLP-1, obesity drugs)
  "Weight Literacy",        // DB: confirmed present (obesity education equivalent)
  "Education",              // DB: confirmed present (general obesity education)
])

function isMedicalCategory(category: string): boolean {
  return MEDICAL_CATEGORIES.has(category)
}

export interface ArticleSchemaProps {
  title: string
  description: string
  slug: string
  publishedAt: string
  updatedAt?: string
  category: string
  /** Pass true to force MedicalWebPage regardless of category (e.g. article has medical disclaimer) */
  hasMedicalDisclaimer?: boolean
}

function buildArticleSchema(props: ArticleSchemaProps): Record<string, unknown> {
  const { title, description, slug, publishedAt, updatedAt, category, hasMedicalDisclaimer } = props
  const url = `${siteConfig.url}/blog/${slug}`
  const useMedical = isMedicalCategory(category) || hasMedicalDisclaimer === true

  if (useMedical) {
    return {
      "@context": "https://schema.org",
      "@type": "MedicalWebPage",
      headline: title,
      description,
      url,
      datePublished: publishedAt,
      dateModified: updatedAt || publishedAt,
      lastReviewed: updatedAt || publishedAt,
      reviewedBy: {
        "@type": "Organization",
        name: "Healthy Weight Literacy Foundation Editorial Team",
        url: siteConfig.url,
      },
      medicalAudience: {
        "@type": "MedicalAudience",
        audienceType: "Patient",
      },
      publisher: {
        "@type": "Organization",
        name: siteConfig.name,
        url: siteConfig.url,
        logo: {
          "@type": "ImageObject",
          url: `${siteConfig.url}/logo.png`,
        },
      },
    }
  }

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    url,
    datePublished: publishedAt,
    dateModified: updatedAt || publishedAt,
    author: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.url}/logo.png`,
      },
    },
  }
}

function buildBreadcrumbSchema(props: Pick<ArticleSchemaProps, "title" | "slug">): Record<string, unknown> {
  const { title, slug } = props
  const articleUrl = `${siteConfig.url}/blog/${slug}`

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteConfig.url,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Education",
        item: `${siteConfig.url}/education`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: title,
        item: articleUrl,
      },
    ],
  }
}

/**
 * ArticleSchema — renders Article (or MedicalWebPage) + BreadcrumbList JSON-LD
 * into the document <head> via Next.js script tags.
 *
 * Place this component inside the page that renders a blog article.
 * It is a Server Component — no client bundle overhead.
 */
export function ArticleSchema(props: ArticleSchemaProps) {
  const articleSchema = buildArticleSchema(props)
  const breadcrumbSchema = buildBreadcrumbSchema(props)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  )
}
