import type { Metadata } from "next"
import { generatePageMetadata } from "@/lib/seo"
import { PolicyLayout } from "@/components/layout/policy-layout"
import type { TocItem } from "@/components/layout/policy-layout"

export const metadata: Metadata = generatePageMetadata({
  title: "Content Accuracy Standards | WeightLiteracy.org",
  description:
    "How WeightLiteracy.org reviews clinical content before publication and keeps it current — including what review covers, what it does not, and how review frequency is assigned.",
  path: "/medical-review",
})

const toc: TocItem[] = [
  { id: "who-reviews-our-content", label: "Who Reviews Our Content" },
  { id: "what-review-covers", label: "What Our Review Covers" },
  { id: "what-review-does-not-cover", label: "What Our Review Does Not Cover" },
  { id: "review-frequency", label: "Review Frequency" },
  { id: "our-standard", label: "Our Standard" },
]

export default function MedicalReviewPage() {
  return (
    <PolicyLayout
      title="Content Accuracy Standards"
      lastUpdated="April 2026"
      toc={toc}
    >
      <p>
        WeightLiteracy.org publishes educational content on weight health, obesity, GLP-1 medications, metabolic
        conditions, and related topics. This page describes what our review process actually involves and —
        importantly — what it does not involve.
      </p>

      <h2 id="who-reviews-our-content">Who Reviews Our Content</h2>
      <p>
        Our content is reviewed by our editorial team. We are not licensed medical professionals. We do not have a
        physician, registered dietitian, or other clinical reviewer on staff or under a formal review arrangement.
      </p>
      <p>
        We are transparent about this because readers making health decisions deserve to know who is — and who is not
        — evaluating the content they read.
      </p>

      <h2 id="what-review-covers">What Our Review Covers</h2>
      <p>Our editorial review evaluates every article against these standards before publication:</p>
      <p>
        <strong>Source accuracy</strong> — Are clinical claims attributed to named published sources? We require
        peer-reviewed research, FDA prescribing information, or major health authority publications for clinical
        claims. Manufacturer materials, press releases, and non-peer-reviewed commentary are not accepted as primary
        sources.
      </p>
      <p>
        <strong>Appropriate hedging</strong> — Does the article correctly represent the certainty of the evidence?
        Well-established findings are presented as such. Preliminary, debated, or population-specific findings are
        qualified accordingly. We do not present uncertain findings as established fact.
      </p>
      <p>
        <strong>Harm screening</strong> — Could any passage lead a reader to delay care, discontinue a treatment
        incorrectly, or make a clinical decision without provider guidance? We identify and revise these passages
        before publication.
      </p>
      <p>
        <strong>Contraindication completeness</strong> — For articles covering medications or treatments, we check
        that relevant contraindications and precautions are addressed rather than omitted.
      </p>
      <p>
        <strong>Disclaimer placement</strong> — Medical disclaimers are required at the top and bottom of all
        articles covering medications, treatments, or clinical conditions.
      </p>

      <h2 id="what-review-does-not-cover">What Our Review Does Not Cover</h2>
      <p>
        Our review process is editorial — it checks claims against published sources. It is not clinical validation
        by a licensed healthcare professional.
      </p>
      <p>
        This means we can verify that our content is consistent with what published sources say. We cannot verify it
        from the standpoint of independent clinical expertise, because we do not have that expertise on our team.
      </p>
      <p>
        This is an important distinction. If a published source contains an error or reflects outdated consensus, our
        review process may not catch it. This is one reason we cite primary sources directly — so readers and
        healthcare providers can evaluate them independently.
      </p>

      <h2 id="review-frequency">Review Frequency</h2>
      <p>
        Published articles are assigned a review schedule based on how quickly the relevant information is likely to
        change:
      </p>
      <ul>
        <li>
          Articles covering treatment mechanisms and chronic disease biology: reviewed every 24 months
        </li>
        <li>
          Articles covering medications, clinical outcomes, and patient guidance: reviewed every 12 months
        </li>
        <li>
          Articles covering insurance, drug access, and pricing: reviewed every 3 months
        </li>
        <li>
          Articles covering FDA actions and regulatory developments: reviewed monthly
        </li>
      </ul>
      <p>
        When a significant development occurs — a new FDA warning, a major trial publication, a guideline update —
        relevant articles are flagged for out-of-cycle review regardless of their scheduled date.
      </p>

      <h2 id="our-standard">Our Standard</h2>
      <p>
        We publish content we believe helps readers understand a health topic well enough to have a better
        conversation with their healthcare provider. We do not publish content intended to replace that conversation.
      </p>
      <p>
        If you believe an article contains an error, contact us at{" "}
        <a href="mailto:info@weightliteracy.org">info@weightliteracy.org</a>. We take correction requests seriously
        and respond to all of them.
      </p>
    </PolicyLayout>
  )
}
