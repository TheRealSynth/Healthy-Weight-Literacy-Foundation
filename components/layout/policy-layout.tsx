"use client"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

export interface TocItem {
  id: string
  label: string
  level?: number
}

interface PolicyLayoutProps {
  title: string
  lastUpdated: string
  toc: TocItem[]
  children: React.ReactNode
}

export function PolicyLayout({ title, lastUpdated, toc, children }: PolicyLayoutProps) {
  const [activeId, setActiveId] = useState<string>(toc[0]?.id ?? "")
  const [tocOpen, setTocOpen] = useState(false)
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    const headingEls = toc
      .map(({ id }) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[]

    if (headingEls.length === 0) return

    observerRef.current = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)
        if (visible.length > 0) {
          setActiveId(visible[0].target.id)
        }
      },
      { rootMargin: "0px 0px -70% 0px", threshold: 0 }
    )

    headingEls.forEach((el) => observerRef.current!.observe(el))
    return () => observerRef.current?.disconnect()
  }, [toc])

  return (
    <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14">
      {/* Page title + meta */}
      <div className="mb-8 border-b border-border pb-6">
        <p className="text-sm font-medium text-muted-foreground uppercase tracking-wide mb-1">
          WeightLiteracy.org
        </p>
        <h1 className="text-3xl sm:text-4xl font-bold text-secondary leading-tight mb-2">
          {title}
        </h1>
        <p className="text-sm text-muted-foreground">Last updated: {lastUpdated}</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-10 lg:gap-14">
        {/* Sidebar ToC — desktop sticky */}
        <aside className="hidden lg:block w-56 shrink-0">
          <nav aria-label="Table of contents" className="sticky top-24">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-3">
              On this page
            </p>
            <ul className="space-y-1">
              {toc.map(({ id, label, level }) => (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    className={cn(
                      "block py-1 text-sm leading-snug transition-colors",
                      level === 2 ? "pl-3" : "",
                      activeId === id
                        ? "text-primary font-medium border-l-2 border-primary pl-3"
                        : "text-muted-foreground hover:text-foreground border-l-2 border-transparent pl-3"
                    )}
                    onClick={() => setActiveId(id)}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        {/* Mobile ToC — collapsible inline */}
        <div className="lg:hidden mb-6">
          <button
            type="button"
            onClick={() => setTocOpen((v) => !v)}
            aria-expanded={tocOpen}
            className="flex items-center justify-between w-full rounded-md border border-border bg-muted px-4 py-2.5 text-sm font-medium text-foreground"
          >
            <span>On this page</span>
            <svg
              className={cn("h-4 w-4 transition-transform", tocOpen ? "rotate-180" : "")}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {tocOpen && (
            <nav
              aria-label="Table of contents"
              className="mt-1 rounded-md border border-border bg-card px-4 py-3"
            >
              <ul className="space-y-1">
                {toc.map(({ id, label, level }) => (
                  <li key={id}>
                    <a
                      href={`#${id}`}
                      onClick={() => setTocOpen(false)}
                      className={cn(
                        "block py-1 text-sm text-muted-foreground hover:text-foreground",
                        level === 2 ? "pl-3" : ""
                      )}
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          )}
        </div>

        {/* Main content */}
        <article className="min-w-0 flex-1 prose prose-slate max-w-none">
          {children}
        </article>
      </div>
    </div>
  )
}
