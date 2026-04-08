"use client"

import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import DOMPurify from "isomorphic-dompurify"

interface ArticleRendererProps {
  content: string
  className?: string
}

// A string is treated as HTML if it contains any recognisable HTML tag.
function isHTML(content: string): boolean {
  return /<\/?[a-z][^>]*>/i.test(content)
}

const ALLOWED_TAGS = [
  "p", "br", "strong", "em", "b", "i", "u", "s",
  "h1", "h2", "h3", "h4", "h5", "h6",
  "ul", "ol", "li", "blockquote", "pre", "code",
  "a", "img", "figure", "figcaption",
  "table", "thead", "tbody", "tr", "th", "td",
  "hr", "sup", "sub", "span", "div",
]

const ALLOWED_ATTR = [
  "href", "src", "alt", "title", "class", "id", "target", "rel",
]

export function ArticleRenderer({ content, className }: ArticleRendererProps) {
  const baseClass = `prose prose-lg max-w-none font-sans ${className ?? ""}`

  if (!content) {
    return (
      <div className={baseClass}>
        <p className="text-muted-foreground italic">No content available.</p>
      </div>
    )
  }

  if (isHTML(content)) {
    const clean = DOMPurify.sanitize(content, {
      ALLOWED_TAGS,
      ALLOWED_ATTR,
      FORCE_BODY: true,
    })
    return (
      <article
        className={baseClass}
        dangerouslySetInnerHTML={{ __html: clean }}
      />
    )
  }

  // Markdown path — no raw HTML ever exposed to the DOM
  return (
    <article className={baseClass}>
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
    </article>
  )
}
