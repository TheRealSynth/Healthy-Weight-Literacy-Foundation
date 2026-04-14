import { buildBreadcrumbSchema } from "@/lib/seo"

interface BreadcrumbSchemaProps {
  pathname: string
  articleTitle?: string
}

export function BreadcrumbSchema({ pathname, articleTitle }: BreadcrumbSchemaProps) {
  const schema = buildBreadcrumbSchema(pathname, articleTitle)
  if (!schema) return null
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
