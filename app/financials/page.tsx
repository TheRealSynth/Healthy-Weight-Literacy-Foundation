import type { Metadata } from "next"
import { FileText, Download, PieChart, TrendingUp } from "lucide-react"
import { Section } from "@/components/layout/section"
import { Container } from "@/components/layout/container"
import { PageHeader } from "@/components/layout/page-header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { generatePageMetadata } from "@/lib/seo"

export const metadata: Metadata = generatePageMetadata({
  title: "Financial Information",
  description: "View our annual reports, Form 990s, and financial statements. We're committed to transparency.",
  path: "/financials",
})

const documents = [
  { title: "2023 Annual Report", type: "PDF", size: "2.4 MB" },
  { title: "2023 Form 990", type: "PDF", size: "1.8 MB" },
  { title: "2023 Audited Financials", type: "PDF", size: "3.1 MB" },
  { title: "2022 Annual Report", type: "PDF", size: "2.2 MB" },
  { title: "2022 Form 990", type: "PDF", size: "1.7 MB" },
  { title: "2022 Audited Financials", type: "PDF", size: "2.9 MB" },
]

export default function FinancialsPage() {
  return (
    <>
      <PageHeader
        title="Financial Transparency"
        description="We're committed to being good stewards of your generous support. View our financial documents here."
        breadcrumbs={[{ label: "Financials" }]}
      />

      {/* Financial Overview */}
      <Section>
        <Container>
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Revenue Breakdown */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <PieChart className="h-5 w-5 text-primary" />
                  <CardTitle>2023 Revenue Sources</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Individual Donations</span>
                    <div className="flex items-center gap-2">
                      <div className="w-32 h-2 bg-muted rounded-full overflow-hidden">
                        <div className="w-[45%] h-full bg-primary" />
                      </div>
                      <span className="font-medium">45%</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Foundation Grants</span>
                    <div className="flex items-center gap-2">
                      <div className="w-32 h-2 bg-muted rounded-full overflow-hidden">
                        <div className="w-[30%] h-full bg-primary" />
                      </div>
                      <span className="font-medium">30%</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Corporate Partners</span>
                    <div className="flex items-center gap-2">
                      <div className="w-32 h-2 bg-muted rounded-full overflow-hidden">
                        <div className="w-[20%] h-full bg-primary" />
                      </div>
                      <span className="font-medium">20%</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Program Fees</span>
                    <div className="flex items-center gap-2">
                      <div className="w-32 h-2 bg-muted rounded-full overflow-hidden">
                        <div className="w-[5%] h-full bg-primary" />
                      </div>
                      <span className="font-medium">5%</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Expense Breakdown */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-primary" />
                  <CardTitle>2023 Expense Allocation</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Program Services</span>
                    <div className="flex items-center gap-2">
                      <div className="w-32 h-2 bg-muted rounded-full overflow-hidden">
                        <div className="w-[82%] h-full bg-accent" />
                      </div>
                      <span className="font-medium">82%</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Fundraising</span>
                    <div className="flex items-center gap-2">
                      <div className="w-32 h-2 bg-muted rounded-full overflow-hidden">
                        <div className="w-[10%] h-full bg-accent" />
                      </div>
                      <span className="font-medium">10%</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Administration</span>
                    <div className="flex items-center gap-2">
                      <div className="w-32 h-2 bg-muted rounded-full overflow-hidden">
                        <div className="w-[8%] h-full bg-accent" />
                      </div>
                      <span className="font-medium">8%</span>
                    </div>
                  </div>
                </div>
                <p className="mt-6 text-sm text-muted-foreground">
                  We&apos;re proud that 82 cents of every dollar goes directly to our programs.
                </p>
              </CardContent>
            </Card>
          </div>
        </Container>
      </Section>

      {/* Documents */}
      <Section background="muted">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary mb-4">Financial Documents</h2>
            <p className="text-muted-foreground">Download our annual reports and tax filings.</p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {documents.map((doc) => (
              <Card key={doc.title}>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-soft shrink-0">
                      <FileText className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-medium text-secondary truncate">{doc.title}</h3>
                      <CardDescription>
                        {doc.type} • {doc.size}
                      </CardDescription>
                    </div>
                    <Button variant="ghost" size="icon" className="shrink-0">
                      <Download className="h-4 w-4" />
                      <span className="sr-only">Download {doc.title}</span>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Accountability */}
      <Section>
        <Container size="md" className="text-center">
          <h2 className="text-2xl font-bold text-secondary mb-4">Our Commitment to Accountability</h2>
          <p className="text-muted-foreground mb-6">
            The Healthy Weight Literacy Foundation is a registered 501(c)(3) nonprofit organization. We undergo annual
            independent audits and are committed to the highest standards of financial integrity.
          </p>
          <p className="text-sm text-muted-foreground">
            EIN: XX-XXXXXXX (placeholder) | Registered in the State of Illinois
          </p>
        </Container>
      </Section>
    </>
  )
}
