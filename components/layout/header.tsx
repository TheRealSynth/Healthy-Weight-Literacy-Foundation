"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { Menu, Search, X, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from "@/components/ui/sheet"
import { Heart } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { ROUTES } from "@/lib/routes"

const navigation = [
  { name: "Home", href: ROUTES.HOME },
  { name: "About", href: ROUTES.ABOUT },
  { name: "Programs", href: ROUTES.PROGRAMS },
  { name: "Education", href: ROUTES.EDUCATION },
  { name: "City Resources", href: ROUTES.CITY_RESOURCES },
  { name: "Contact", href: ROUTES.CONTACT },
]

interface SlimPost {
  slug: string
  title: string
  description: string
  category: string
  tags: string[]
  reading_time: string
}

function searchPosts(posts: SlimPost[], query: string): SlimPost[] {
  if (query.length < 2) return []
  const q = query.toLowerCase()
  return posts.filter(
    (p) =>
      p.title.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      p.tags.some((t) => t.toLowerCase().includes(q)),
  )
}

function SearchModal({ onClose }: { onClose: () => void }) {
  const [query, setQuery] = useState("")
  const [posts, setPosts] = useState<SlimPost[]>([])
  const [loading, setLoading] = useState(true)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    inputRef.current?.focus()
    fetch("/api/posts")
      .then((r) => r.json())
      .then((data) => {
        setPosts(data)
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [onClose])

  const results = searchPosts(posts, query)

  return (
    <div
      className="fixed inset-0 z-50 bg-black/50 flex items-start justify-center pt-16 px-4"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
      role="dialog"
      aria-modal="true"
      aria-label="Site search"
    >
      <div className="bg-white rounded-xl shadow-xl w-full max-w-2xl overflow-hidden">
        {/* Search Input */}
        <div className="flex items-center gap-3 px-4 py-3 border-b">
          <Search className="h-5 w-5 text-muted-foreground shrink-0" aria-hidden="true" />
          <input
            ref={inputRef}
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search articles…"
            className="flex-1 text-base outline-none bg-transparent"
            aria-label="Search articles"
          />
          <button
            onClick={onClose}
            className="text-muted-foreground hover:text-secondary transition-colors p-1 rounded"
            aria-label="Close search"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Results */}
        <div className="overflow-y-auto max-h-[60vh]">
          {loading && (
            <p className="text-center text-muted-foreground py-8 text-sm">Loading…</p>
          )}
          {!loading && query.length >= 2 && results.length === 0 && (
            <p className="text-center text-muted-foreground py-8 text-sm">
              No articles found for &ldquo;{query}&rdquo;
            </p>
          )}
          {!loading && query.length < 2 && (
            <p className="text-center text-muted-foreground py-8 text-sm">
              Type at least 2 characters to search
            </p>
          )}
          {!loading && results.length > 0 && (
            <ul className="divide-y">
              {results.slice(0, 8).map((post) => (
                <li key={post.slug}>
                  <Link
                    href={`/blog/${post.slug}`}
                    onClick={onClose}
                    className="flex items-start gap-3 px-4 py-3 hover:bg-muted/50 transition-colors group"
                  >
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <Badge variant="secondary" className="text-xs">
                          {post.category}
                        </Badge>
                      </div>
                      <p className="font-medium text-secondary line-clamp-1 group-hover:text-primary transition-colors">
                        {post.title}
                      </p>
                      <p className="text-sm text-muted-foreground line-clamp-2 mt-0.5">
                        {post.description}
                      </p>
                    </div>
                    <ArrowRight className="h-4 w-4 text-muted-foreground shrink-0 mt-1 group-hover:text-primary transition-colors" />
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  )
}

export function Header() {
  const pathname = usePathname()
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")

  const openSearch = useCallback(() => setSearchOpen(true), [])
  const closeSearch = useCallback(() => setSearchOpen(false), [])

  const handleMobileSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`${ROUTES.SEARCH}?q=${encodeURIComponent(searchQuery.trim())}`)
      setIsOpen(false)
      setSearchQuery("")
    }
  }

  return (
    <>
      {searchOpen && <SearchModal onClose={closeSearch} />}

      <header className="sticky top-0 z-40 w-full border-b bg-surface/95 backdrop-blur supports-[backdrop-filter]:bg-surface/60">
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between px-4 py-0 sm:px-6 lg:px-8"
          aria-label="Main navigation"
        >
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 transition-opacity hover:opacity-80 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded"
            aria-label="Healthy Weight Literacy Foundation - Home"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary">
              <Heart className="h-5 w-5 text-primary-foreground" aria-hidden="true" />
            </div>
            <div className="hidden sm:block">
              <span className="text-lg font-bold text-secondary">HWLF</span>
              <span className="sr-only">Healthy Weight Literacy Foundation</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:gap-x-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded px-2 py-1",
                  pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href + "/"))
                    ? "text-primary"
                    : "text-secondary",
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex lg:items-center lg:gap-x-3">
            <Button
              variant="ghost"
              size="icon"
              onClick={openSearch}
              aria-label="Open site search"
            >
              <Search className="h-5 w-5" aria-hidden="true" />
            </Button>
            <Link href={ROUTES.DONATE}>
              <Button className="font-semibold">
                <Heart className="mr-2 h-4 w-4" />
                Donate
              </Button>
            </Link>
          </div>

          {/* Mobile Navigation */}
          <div className="flex items-center gap-2 lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={openSearch}
              aria-label="Open site search"
            >
              <Search className="h-5 w-5" aria-hidden="true" />
            </Button>
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" aria-label="Open menu" aria-expanded={isOpen}>
                  <Menu className="h-6 w-6" aria-hidden="true" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-auto">
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                <SheetDescription className="sr-only">Access navigation links and search functionality</SheetDescription>
                <div className="flex flex-col gap-6 pt-6 px-6">
                  <Link href={ROUTES.HOME} className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
                    <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary">
                      <Heart className="h-5 w-5 text-primary-foreground" aria-hidden="true" />
                    </div>
                    <span className="text-lg font-bold text-secondary">Healthy Weight Literacy Foundation</span>
                  </Link>

                  {/* Search Bar */}
                  <form onSubmit={handleMobileSearch} className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      type="search"
                      placeholder="Search..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-9"
                    />
                  </form>

                  <nav className="flex flex-col gap-4" aria-label="Mobile navigation">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={cn(
                          "block text-lg font-medium transition-colors hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded px-2 py-1",
                          pathname === item.href ? "text-primary" : "text-secondary",
                        )}
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </nav>

                  <Link href={ROUTES.DONATE} onClick={() => setIsOpen(false)}>
                    <Button className="font-semibold w-fit">
                      <Heart className="mr-2 h-4 w-4" />
                      Donate
                    </Button>
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </header>
    </>
  )
}
