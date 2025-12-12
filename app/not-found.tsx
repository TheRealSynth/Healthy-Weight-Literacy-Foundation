import Link from "next/link"
import { Search } from "lucide-react"
import { Section } from "@/components/layout/section"
import { Container } from "@/components/layout/container"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <Section className="min-h-[60vh] flex items-center">
      <Container size="sm" className="text-center">
        <div className="mb-8">
          <span className="text-8xl font-bold text-primary/20">404</span>
        </div>
        <h1 className="text-3xl font-bold text-secondary mb-4">Page Not Found</h1>
        <p className="text-muted-foreground mb-8">
          Sorry, we couldn&apos;t find the page you&apos;re looking for. It may have been moved or no longer exists.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/">
            <Button size="lg">Return Home</Button>
          </Link>
          <Link href="/search">
            <Button variant="outline" size="lg">
              <Search className="mr-2 h-4 w-4" />
              Search Our Site
            </Button>
          </Link>
        </div>
        <div className="mt-12 pt-8 border-t">
          <p className="text-sm text-muted-foreground mb-4">Looking for something specific?</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <Link href="/programs" className="text-primary hover:underline">
              Programs
            </Link>
            <Link href="/resources" className="text-primary hover:underline">
              Resources
            </Link>
            <Link href="/blog" className="text-primary hover:underline">
              Blog
            </Link>
            <Link href="/contact" className="text-primary hover:underline">
              Contact
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  )
}
