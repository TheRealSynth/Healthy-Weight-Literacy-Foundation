import type { Metadata } from "next"
import { generatePageMetadata } from "@/lib/seo"
import { PolicyLayout } from "@/components/layout/policy-layout"
import type { TocItem } from "@/components/layout/policy-layout"

export const metadata: Metadata = generatePageMetadata({
  title: "Medical Review Process | WeightLiteracy.org",
  description:
    "How WeightLiteracy.org reviews clinical content before publication and keeps it current — including what review covers, what it does not, and how review frequency is assigned.",
  path: "/medical-review",
})

const toc: TocItem[] = [
  { id: "what-gets-reviewed", label: "What Gets Reviewed" },
  { id: "what-review-covers", label: "What Review Covers" },
  { id: "what-review-does-not-cover", label: "What Review Does Not Cover" },
  { id: "review-frequency", label: "Review Frequency" },
  { id: "our-standard", label: "Our Standard" },
]

export default function MedicalReviewPage() {
  return (
    <PolicyLayout
      title="Medical Review Process"
      lastUpdated="June 2025"
      toc={toc}
    >
      <p>
        The Healthy Weight Literacy Foundation publishes content that covers medications, clinical treatments,
        metabolic conditions, and other topics where accuracy has real consequences for readers. This page describes
        how that content is reviewed before publication and how it is kept current after publication.
      </p>

      <h2 id="what-gets-reviewed">What Gets Reviewed</h2>
      <p>
        Not all content carries the same medical risk. We categorize our articles and apply review requirements
        accordingly.
      </p>
      <p>
        <strong>Clinical content</strong> — articles covering specific medications, treatments, dosing, side effects,
        contraindications, or clinical outcomes — receives the most rigorous review process. This includes all GLP-1
        medication articles, compound pharmacy guidance, metabolic health content, and any article making specific
        claims about treatment efficacy or safety.
      </p>
      <p>
        <strong>Patient guidance content</strong> — articles covering what to ask a provider, how to evaluate a
        telehealth service, or how to interpret a medical situation — is reviewed for accuracy, appropriate hedging,
        and absence of content that could be read as individual medical advice.
      </p>
      <p>
        <strong>Educational and consumer content</strong> — articles covering obesity as a chronic disease, nutrition
        basics, exercise guidance, or scam awareness — is reviewed for factual accuracy and for the absence of harmful
        claims or unsafe implications.
      </p>

      <h2 id="what-review-covers">What Review Covers</h2>
      <p>Medical review for clinical content evaluates:</p>
      <p>
        <strong>Claim accuracy</strong> — Are the specific claims made in the article consistent with current
        published evidence? Are trial results cited correctly? Are mechanism descriptions accurate?
      </p>
      <p>
        <strong>Source quality</strong> — Are claims attributed to appropriate sources? Peer-reviewed trials, FDA
        prescribing information, major health authority publications, and established clinical guidelines are acceptable
        sources. Manufacturer press releases, non-peer-reviewed commentary, and secondary aggregators are not used as
        primary sources.
      </p>
      <p>
        <strong>Hedging appropriateness</strong> — Does the article correctly represent the certainty of the evidence?
        Claims that are well-established are presented as such. Claims that are preliminary, debated, or
        population-specific are qualified accordingly.
      </p>
      <p>
        <strong>Safety and harm risk</strong> — Could any passage be misread in a way that leads a patient to delay
        seeking care, discontinue a treatment incorrectly, or make a clinical decision without appropriate provider
        guidance? Review identifies and corrects these passages.
      </p>
      <p>
        <strong>Contraindication completeness</strong> — For articles covering medications or treatments, review
        confirms that relevant contraindications, precautions, and populations for whom the treatment is not
        appropriate are addressed.
      </p>
      <p>
        <strong>Disclaimer placement</strong> — Are medical disclaimers present at appropriate points in the article?
        Clinical content requires a disclaimer at both the top and bottom of the article at minimum.
      </p>

      <h2 id="what-review-does-not-cover">What Review Does Not Cover</h2>
      <p>
        Medical review is an accuracy and safety process, not a clinical consultation. Our review process confirms
        that articles are factually sound and do not contain harmful guidance. It does not constitute endorsement of
        any specific treatment for any specific person.
      </p>
      <p>
        Nothing published on WeightLiteracy.org is medical advice. Our content is educational. Readers should always
        work with a qualified healthcare provider for decisions about their own health.
      </p>

      <h2 id="review-frequency">Review Frequency</h2>
      <p>
        Published articles are assigned a review schedule based on how quickly the relevant medical landscape is
        likely to change. Articles covering FDA-approved medications, clinical trial evidence, and treatment protocols
        are reviewed on an annual basis at minimum. Articles covering areas of active regulatory or policy change —
        including drug access, compound pharmacy rules, and insurance coverage — are reviewed more frequently.
      </p>
      <p>
        When a significant development occurs in a covered area — a new FDA warning, a major trial publication, a
        guideline update — relevant articles are flagged for out-of-cycle review regardless of their scheduled date.
      </p>
      <p>
        The review date shown in each article footer reflects the most recent medical review, distinct from any
        editorial updates made to the article for clarity or accuracy.
      </p>

      <h2 id="our-standard">Our Standard</h2>
      <p>
        Our standard for publication is that a patient or caregiver who reads and follows the guidance in an article
        should be better prepared for a conversation with their healthcare provider — not harmed, misled, or left with
        false certainty about a complex clinical situation.
      </p>
      <p>When an article cannot meet that standard, it is revised or not published.</p>
    </PolicyLayout>
  )
}
