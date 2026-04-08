"use client"

import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"

interface ArticleRendererProps {
  /** Raw content string — either Markdown or sanitized HTML */
  content: string
  /** When true, content is already-sanitized HTML and should use dangerouslySetInnerHTML */
  isHtml?: boolean
  className?: string
}

export function ArticleRenderer({ content, isHtml = false, className }: ArticleRendererProps) {
  const baseClass = `prose prose-lg max-w-none font-sans ${className ?? ""}`.trim()

  if (!content) {
    return (
      <div className={baseClass}>
        <p className="text-muted-foreground italic">No content available.</p>
      </div>
    )
  }

  if (isHtml) {
    return (
      <article
        className={baseClass}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    )
  }

  return (
    <article className={baseClass}>
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
    </article>
  )
}
