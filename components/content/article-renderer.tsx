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

  console.log(`[v0] ArticleRenderer: isHtml=${isHtml}, contentLength=${content?.length ?? 0}, preview="${content?.slice(0, 80).replace(/\n/g, " ")}..."`)

  if (!content) {
    console.error("[v0] ArticleRenderer: no content provided")
    return (
      <div className={baseClass}>
        <p className="text-muted-foreground italic">No content available.</p>
      </div>
    )
  }

  if (isHtml) {
    console.log("[v0] ArticleRenderer: rendering HTML with dangerouslySetInnerHTML")
    return (
      <article
        className={baseClass}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    )
  }

  console.log("[v0] ArticleRenderer: rendering Markdown with ReactMarkdown")
  return (
    <article className={baseClass}>
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
    </article>
  )
}
