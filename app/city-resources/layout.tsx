import type React from "react"
import type { Metadata } from "next"
import { generatePageMetadata } from "@/lib/seo"

export const metadata: Metadata = generatePageMetadata({
  title: "Ohio Community Resources",
  description:
    "Find free health, nutrition, and community resources in Dayton, Columbus, Cincinnati, and Cleveland, Ohio — compiled by the Healthy Weight Literacy Foundation.",
  path: "/city-resources",
})

export default function CityResourcesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
