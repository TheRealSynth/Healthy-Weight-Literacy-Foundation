import type { Metadata } from "next"
import { PageHeader } from "@/components/layout/page-header"
import { Section } from "@/components/layout/section"
import { Container } from "@/components/layout/container"
import { ResourceGrid } from "@/components/blocks/resource-grid"
import { generatePageMetadata } from "@/lib/seo"
import { getResources } from "@/lib/mdx"

export const metadata: Metadata = generatePageMetadata({
  title: "Resources",
  description:
    "Access free health education resources including guides, workbooks, and tools to support your wellness journey.",
  path: "/resources",
})

export default function ResourcesPage() {
  const resources = getResources()

  return (
    <>
      <PageHeader
        title="Resources"
        description="Free tools, guides, and educational materials to support your health journey."
        breadcrumbs={[{ label: "Resources" }]}
      />

      <Section>
        <Container>
          <ResourceGrid resources={resources} showAll />
        </Container>
      </Section>
    </>
  )
}
