"use client"

import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"

interface ArticleRendererProps {
  content: string
  className?: string
}

// Detect whether content is HTML or Markdown.
// A string is treated as HTML if it contains any opening HTML tag.
function isHTML(content: string): boolean {
  return /<\/?[a-z][^>]*>/i.test(content)
}

export function ArticleRenderer({ content, className }: ArticleRendererProps) {
  const baseClass = `prose prose-lg max-w-none ${className ?? ""}`

  if (!content) {
    return (
      <div className={baseClass}>
        <p className="text-muted-foreground italic">No content available.</p>
      </div>
    )
  }

  if (isHTML(content)) {
    // First-party CMS HTML — render directly
    return (
      <article
        className={baseClass}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    )
  }

  // Markdown path — safe, no raw HTML exposed
  return (
    <article className={baseClass}>
      <ReactMarkdown remarkPlugins={[remarkGfm]}>
        {content}
      </ReactMarkdown>
    </article>
  )
}
