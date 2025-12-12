"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

interface TOCItem {
  id: string
  text: string
  level: number
}

interface TableOfContentsProps {
  className?: string
}

export function TableOfContents({ className }: TableOfContentsProps) {
  const [headings, setHeadings] = useState<TOCItem[]>([])
  const [activeId, setActiveId] = useState<string>("")

  useEffect(() => {
    const elements = document.querySelectorAll("article h2, article h3")
    const items: TOCItem[] = Array.from(elements).map((element) => ({
      id: element.id,
      text: element.textContent || "",
      level: element.tagName === "H2" ? 2 : 3,
    }))
    setHeadings(items)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: "-20% 0% -35% 0%" },
    )

    elements.forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [])

  if (headings.length === 0) return null

  return (
    <nav className={cn("sticky top-24", className)} aria-label="Table of contents">
      <h4 className="text-sm font-semibold text-secondary mb-4">On this page</h4>
      <ul className="space-y-2 text-sm">
        {headings.map((heading) => (
          <li key={heading.id} className={heading.level === 3 ? "ml-4" : ""}>
            <a
              href={`#${heading.id}`}
              className={cn(
                "block py-1 transition-colors hover:text-primary",
                activeId === heading.id ? "text-primary font-medium" : "text-muted-foreground",
              )}
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
