"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, Search, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"

const navigation = [
  { name: "About", href: "/about" },
  {
    name: "Programs",
    href: "/programs",
  },
  {
    name: "Resources",
    href: "/resources",
  },
  { name: "Blog", href: "/blog" },
  {
    name: "Get Involved",
    href: "/volunteer",
    children: [
      { name: "Volunteer", href: "/volunteer" },
      { name: "Partner", href: "/partner" },
      { name: "Careers", href: "/careers" },
    ],
  },
  { name: "Contact", href: "/contact" },
]

export function Header() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-surface/95 backdrop-blur supports-[backdrop-filter]:bg-surface/60">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 transition-opacity hover:opacity-80"
          aria-label="Healthy Weight Literacy Foundation - Home"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary">
            <Heart className="h-5 w-5 text-primary-foreground" aria-hidden="true" />
          </div>
          <div className="hidden sm:block">
            <span className="text-lg font-bold text-secondary">HWLF</span>
            <span className="sr-only">Healthy Weight Literacy Foundation</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:items-center lg:gap-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                pathname === item.href || pathname.startsWith(item.href + "/") ? "text-primary" : "text-secondary",
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Desktop Actions */}
        <div className="hidden lg:flex lg:items-center lg:gap-x-4">
          <Link href="/search" aria-label="Search">
            <Button variant="ghost" size="icon">
              <Search className="h-5 w-5" aria-hidden="true" />
            </Button>
          </Link>
          <Link href="/donate">
            <Button className="bg-accent text-accent-foreground hover:bg-accent-hover font-semibold">Donate</Button>
          </Link>
        </div>

        {/* Mobile Navigation */}
        <div className="flex items-center gap-2 lg:hidden">
          <Link href="/search" aria-label="Search">
            <Button variant="ghost" size="icon">
              <Search className="h-5 w-5" aria-hidden="true" />
            </Button>
          </Link>
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Open menu" aria-expanded={isOpen}>
                <Menu className="h-6 w-6" aria-hidden="true" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-sm">
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <div className="flex flex-col gap-6 pt-6">
                <Link href="/" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary">
                    <Heart className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <span className="text-lg font-bold text-secondary">Healthy Weight Literacy Foundation</span>
                </Link>

                <nav className="flex flex-col gap-4" aria-label="Mobile navigation">
                  {navigation.map((item) => (
                    <div key={item.name}>
                      <Link
                        href={item.href}
                        className={cn(
                          "block text-lg font-medium transition-colors hover:text-primary",
                          pathname === item.href ? "text-primary" : "text-secondary",
                        )}
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </Link>
                      {item.children && (
                        <div className="ml-4 mt-2 flex flex-col gap-2">
                          {item.children.map((child) => (
                            <Link
                              key={child.name}
                              href={child.href}
                              className="text-muted-foreground hover:text-primary"
                              onClick={() => setIsOpen(false)}
                            >
                              {child.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </nav>

                <Link href="/donate" onClick={() => setIsOpen(false)}>
                  <Button className="w-full bg-accent text-accent-foreground hover:bg-accent-hover font-semibold">
                    Donate Now
                  </Button>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  )
}
