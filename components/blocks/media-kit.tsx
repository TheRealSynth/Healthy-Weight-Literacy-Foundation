import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Download, FileText, ImageIcon, Video } from "lucide-react"

const assets = [
  {
    title: "Logo Package",
    description: "High-resolution logos in various formats (PNG, SVG, EPS)",
    icon: ImageIcon,
    href: "#",
  },
  {
    title: "Brand Guidelines",
    description: "Colors, typography, and usage guidelines",
    icon: FileText,
    href: "#",
  },
  {
    title: "Press Photos",
    description: "High-resolution images for media use",
    icon: ImageIcon,
    href: "#",
  },
  {
    title: "B-Roll Footage",
    description: "Video content for broadcast and digital use",
    icon: Video,
    href: "#",
  },
]

export function MediaKit() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {assets.map((asset) => (
        <Card key={asset.title} className="hover:shadow-card-hover transition-shadow">
          <CardHeader>
            <div className="flex items-center gap-4">
              <div className="h-10 w-10 rounded-lg bg-primary-soft flex items-center justify-center">
                <asset.icon className="h-5 w-5 text-primary" aria-hidden="true" />
              </div>
              <div>
                <CardTitle className="text-lg">{asset.title}</CardTitle>
                <CardDescription>{asset.description}</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Button variant="outline" size="sm" asChild>
              <Link href={asset.href}>
                <Download className="mr-2 h-4 w-4" aria-hidden="true" />
                Download
              </Link>
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
