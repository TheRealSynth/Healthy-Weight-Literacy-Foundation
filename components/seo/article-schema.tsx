import { siteConfig, buildBreadcrumbSchema } from "@/lib/seo"

export interface ArticleSchemaProps {
  title: string
  description: string
  slug: string
  publishedAt: string
  updatedAt?: string
  reviewedAt?: string | null
  category: string
  hasMedicalDisclaimer?: boolean
}

function buildMedicalWebPageSchema(props: ArticleSchemaProps): Record<string, unknown> {
  const { title, description, slug, publishedAt, updatedAt, reviewedAt } = props
  const url = `${siteConfig.url}/blog/${slug}`

  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "@id": `${url}#article`,
    headline: title,
    description,
    url,
    datePublished: publishedAt,
    dateModified: updatedAt || publishedAt,
    author: {
      "@type": "Organization",
      "@id": `${siteConfig.url}/#organization`,
    },
    publisher: {
      "@id": `${siteConfig.url}/#organization`,
    },
    medicalAudience: {
      "@type": "MedicalAudience",
      audienceType: "Patient",
    },
    specialty: "Nutrition, Obesity Medicine, Public Health",
  }

  const effectiveReviewDate = reviewedAt || updatedAt
  if (effectiveReviewDate) {
    schema.dateReviewed = effectiveReviewDate
  }

  return schema
}

export function ArticleSchema(props: ArticleSchemaProps) {
  const articleSchema = buildMedicalWebPageSchema(props)
  const breadcrumbSchema = buildBreadcrumbSchema(`/blog/${props.slug}`, props.title)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      {breadcrumbSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
      )}
    </>
  )
}
