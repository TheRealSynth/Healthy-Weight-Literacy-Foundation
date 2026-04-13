// @ts-nocheck
import type React from "react"
import Image from "next/image"

function renderInlineMarkdown(text: string): React.ReactNode[] {
  const result: React.ReactNode[] = []
  let remaining = text
  let inlineKey = 0

  while (remaining.length > 0) {
    // Find the earliest inline match
    let earliest: { type: string; index: number; length: number } | null = null

    // Bold: **text**
    const boldIdx = remaining.indexOf("**")
    if (boldIdx !== -1) {
      const end = remaining.indexOf("**", boldIdx + 2)
      if (end !== -1) {
        if (!earliest || boldIdx < earliest.index) {
          earliest = { type: "bold", index: boldIdx, length: end + 2 }
        }
      }
    }

    // Link: [text](url)
    const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/
    const linkMatch = remaining.match(linkRegex)
    if (linkMatch && linkMatch.index !== undefined) {
      if (!earliest || linkMatch.index < earliest.index) {
        earliest = { type: "link", index: linkMatch.index, length: linkMatch.index + linkMatch[0].length }
      }
    }

    // Italic: *text* (single asterisk, but not inside bold)
    if (!earliest || earliest.type !== "bold") {
      const italicRegex = /(?<!\*)\*(?!\*)(.+?)(?<!\*)\*(?!\*)/
      const italicMatch = remaining.match(italicRegex)
      if (italicMatch && italicMatch.index !== undefined) {
        if (!earliest || italicMatch.index < earliest.index) {
          earliest = { type: "italic", index: italicMatch.index, length: italicMatch.index + italicMatch[0].length }
        }
      }
    }

    if (!earliest) {
      if (remaining) result.push(remaining)
      break
    }

    // Push text before the match
    if (earliest.index > 0) {
      result.push(remaining.slice(0, earliest.index))
    }

    if (earliest.type === "bold") {
      const boldEnd = remaining.indexOf("**", earliest.index + 2)
      const boldText = remaining.slice(earliest.index + 2, boldEnd)
      result.push(<strong key={`i-${inlineKey++}`}>{boldText}</strong>)
      remaining = remaining.slice(boldEnd + 2)
    } else if (earliest.type === "italic") {
      const italicRegex = /(?<!\*)\*(?!\*)(.+?)(?<!\*)\*(?!\*)/
      const m = remaining.match(italicRegex)
      if (m) {
        result.push(<em key={`i-${inlineKey++}`}>{m[1]}</em>)
        remaining = remaining.slice((m.index || 0) + m[0].length)
      } else {
        result.push(remaining)
        break
      }
    } else if (earliest.type === "link") {
      const m = remaining.match(linkRegex)
      if (m && m.index !== undefined) {
        const isExternal = m[2]?.startsWith("http")
        result.push(
          <a
            key={`i-${inlineKey++}`}
            href={m[2]}
            className="text-primary underline hover:text-primary/80"
            {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          >
            {m[1]}
          </a>,
        )
        remaining = remaining.slice(m.index + m[0].length)
      } else {
        result.push(remaining)
        break
      }
    }
  }

  return result
}

export function renderMarkdownContent(content: string) {
  const elements: React.ReactNode[] = []
  let key = 0

  const lines = content.split("\n")
  let ulItems: React.ReactNode[] = []
  let olItems: React.ReactNode[] = []

  function flushLists() {
    if (ulItems.length > 0) {
      elements.push(
        <ul key={`ul-${key++}`} className="list-disc pl-6 space-y-1">
          {[...ulItems]}
        </ul>,
      )
      ulItems = []
    }
    if (olItems.length > 0) {
      elements.push(
        <ol key={`ol-${key++}`} className="list-decimal pl-6 space-y-1">
          {[...olItems]}
        </ol>,
      )
      olItems = []
    }
  }

  lines.forEach((line) => {
    const trimmed = line.trim()
    if (!trimmed) {
      flushLists()
      return
    }

    // Horizontal rules: --- or *** or ___
    if (/^(-{3,}|\*{3,}|_{3,})$/.test(trimmed)) {
      flushLists()
      elements.push(<hr key={key++} className="my-8 border-border" />)
      return
    }

    // Images: ![alt](src)
    const imageMatch = trimmed.match(/^!\[([^\]]*)\]\(([^)]+)\)/)
    if (imageMatch) {
      flushLists()
      const [, alt, src] = imageMatch
      elements.push(
        <div key={key++} className="my-8">
          <Image
            src={src || "/placeholder.svg"}
            alt={alt || ""}
            width={1200}
            height={600}
            className="rounded-lg w-full h-auto max-w-3xl mx-auto"
          />
        </div>,
      )
      return
    }

    // Headings (check ### before ## before #)
    if (trimmed.startsWith("### ")) {
      flushLists()
      const text = trimmed.slice(4)
      const id = text
        .toLowerCase()
        .replace(/[^\w\s-]/g, "")
        .replace(/\s+/g, "-")
      elements.push(
        <h3 key={key++} id={id}>
          {renderInlineMarkdown(text)}
        </h3>,
      )
      return
    }
    if (trimmed.startsWith("## ")) {
      flushLists()
      const text = trimmed.slice(3)
      const id = text
        .toLowerCase()
        .replace(/[^\w\s-]/g, "")
        .replace(/\s+/g, "-")
      elements.push(
        <h2 key={key++} id={id}>
          {renderInlineMarkdown(text)}
        </h2>,
      )
      return
    }
    if (trimmed.startsWith("# ")) {
      flushLists()
      const text = trimmed.slice(2)
      const id = text
        .toLowerCase()
        .replace(/[^\w\s-]/g, "")
        .replace(/\s+/g, "-")
      elements.push(
        <h1 key={key++} id={id}>
          {renderInlineMarkdown(text)}
        </h1>,
      )
      return
    }

    // Unordered list items: - text or * text
    if (trimmed.startsWith("- ") || trimmed.startsWith("* ")) {
      if (olItems.length > 0) {
        elements.push(
          <ol key={`ol-${key++}`} className="list-decimal pl-6 space-y-1">
            {[...olItems]}
          </ol>,
        )
        olItems = []
      }
      ulItems.push(<li key={key++}>{renderInlineMarkdown(trimmed.slice(2))}</li>)
      return
    }

    // Ordered list items: 1. text
    const olMatch = trimmed.match(/^(\d+)\.\s+(.*)/)
    if (olMatch) {
      if (ulItems.length > 0) {
        elements.push(
          <ul key={`ul-${key++}`} className="list-disc pl-6 space-y-1">
            {[...ulItems]}
          </ul>,
        )
        ulItems = []
      }
      olItems.push(<li key={key++}>{renderInlineMarkdown(olMatch[2])}</li>)
      return
    }

    // Blockquote: > text
    if (trimmed.startsWith("> ")) {
      flushLists()
      elements.push(
        <blockquote key={key++} className="border-l-4 border-primary/30 pl-4 italic text-muted-foreground my-4">
          {renderInlineMarkdown(trimmed.slice(2))}
        </blockquote>,
      )
      return
    }

    // Table rows: | text |
    if (trimmed.startsWith("|")) {
      flushLists()
      // Skip separator rows like |---|---|
      if (/^\|[\s-:|]+\|$/.test(trimmed)) return
      const cells = trimmed
        .split("|")
        .filter((c) => c.trim())
        .map((c) => c.trim())
      elements.push(
        <div key={key++} className="flex gap-4 py-2 border-b border-border text-sm">
          {cells.map((cell, i) => (
            <span key={i} className={i === 0 ? "font-medium min-w-[120px]" : "flex-1"}>
              {renderInlineMarkdown(cell)}
            </span>
          ))}
        </div>,
      )
      return
    }

    // Flush any pending lists before a paragraph
    flushLists()

    // Regular paragraph with inline formatting
    elements.push(<p key={key++}>{renderInlineMarkdown(trimmed)}</p>)
  })

  flushLists()
  return elements
}
