import type { Metadata } from "next"
import { generatePageMetadata } from "@/lib/seo"
import { PolicyLayout } from "@/components/layout/policy-layout"
import type { TocItem } from "@/components/layout/policy-layout"

export const metadata: Metadata = generatePageMetadata({
  title: "How We Create Content | WeightLiteracy.org",
  description:
    "How articles on WeightLiteracy.org are created, sourced, reviewed, and published — including our editorial brief process, sourcing standards, and pre-publication checklist.",
  path: "/how-we-create-content",
})

const toc: TocItem[] = [
  { id: "where-articles-come-from", label: "Where Articles Come From" },
  { id: "how-articles-are-produced", label: "How Articles Are Produced" },
  { id: "sourcing-standards", label: "Sourcing Standards" },
  { id: "the-review-process", label: "The Review Process" },
  { id: "what-this-means-for-readers", label: "What This Means for Readers" },
  { id: "pre-publish-checklist", label: "What We Check Before Publishing" },
  { id: "medical-disclaimers", label: "Medical Disclaimers" },
  { id: "corrections-and-updates", label: "Corrections and Updates" },
  { id: "what-we-do-not-do", label: "What We Do Not Do" },
  { id: "our-standard", label: "Our Standard in Plain Language" },
]

export default function HowWeCreateContentPage() {
  return (
    <PolicyLayout
      title="How We Create Content"
      lastUpdated="April 2026"
      toc={toc}
    >
      <p>
        This page describes how articles on WeightLiteracy.org are created, reviewed, and published. We publish this
        because transparency about editorial process is part of what makes health content trustworthy.
      </p>

      <h2 id="where-articles-come-from">Where Articles Come From</h2>
      <p>
        Topics are selected based on what people seeking credible weight health information actually need to know. The
        driving questions are: Is this something people are genuinely confused about? Is accurate, non-promotional
        information on this topic hard to find? Does it fit our educational mission?
      </p>
      <p>
        We do not accept topic suggestions from commercial entities. Topics are not chosen based on advertising
        relationships, affiliate arrangements, or external promotional pressure.
      </p>

      <h2 id="how-articles-are-produced">How Articles Are Produced</h2>
      <p>
        Articles on WeightLiteracy.org are researched and written with the assistance of AI writing tools, then
        reviewed and edited for accuracy, appropriate sourcing, clarity, and alignment with published clinical
        guidelines. We use AI as a research and drafting tool — our editorial process determines what gets published
        and in what form.
      </p>
      <p>
        Our editorial team is not composed of licensed medical professionals. We are not clinicians. We do not conduct
        independent clinical research, and our review process does not substitute for professional medical expertise.
      </p>
      <p>
        What our process does ensure: every factual claim is traced to a named published source, appropriate
        uncertainty is disclosed, content that implies individual medical advice is identified and corrected, and
        medical disclaimers are present on all health-related content.
      </p>
      <p>Before any article is produced, we define:</p>
      <ul>
        <li>The specific question the article answers</li>
        <li>Who the intended reader is and what they already know</li>
        <li>What the article must not claim, imply, or promise</li>
        <li>Which published sources are expected to support the key claims</li>
        <li>What the reader should understand or be able to do after reading</li>
      </ul>
      <p>
        An article that drifts from these parameters — into overclaiming, underclaiming, or serving a different
        purpose — is revised before it is published.
      </p>

      <h2 id="sourcing-standards">Sourcing Standards</h2>
      <p>Every factual claim in a published article is either:</p>
      <ul>
        <li>
          Attributed to a named published source inline — a clinical trial, FDA document, peer-reviewed journal
          article, or major health authority publication — or
        </li>
        <li>Stated as general medical consensus and qualified accordingly</li>
      </ul>
      <p>
        We do not publish specific statistics, outcome figures, or mechanistic claims without inline attribution. If a
        claim cannot be sourced, it is generalized or removed.
      </p>
      <p>
        Sources are listed at the end of every clinical article. Source selection follows a
        hierarchy: peer-reviewed primary research, systematic reviews, FDA prescribing information and regulatory
        documents, major health authority publications. Manufacturer materials, press releases, and secondary
        aggregators are not used as primary sources.
      </p>

      <h2 id="the-review-process">The Review Process</h2>
      <p>
        Every article is reviewed before publication against the following standards. This review is editorial in
        nature — it is accuracy and consistency checking against published sources, not clinical evaluation by a
        licensed healthcare professional.
      </p>
      <p>
        <strong>Source accuracy</strong> — Are all clinical claims attributed to named published sources? We require
        peer-reviewed research, FDA documents, or major health authority publications. Manufacturer materials and
        non-peer-reviewed commentary are not used as primary sources.
      </p>
      <p>
        <strong>Appropriate hedging</strong> — Does the article correctly represent the certainty of the evidence?
        Established findings are presented as established. Preliminary or contested findings are qualified accordingly.
      </p>
      <p>
        <strong>Harm screening</strong> — Could any passage be read in a way that could lead someone to delay care,
        discontinue treatment incorrectly, or make a clinical decision without provider guidance? We identify and
        correct these passages.
      </p>
      <p>
        <strong>Disclaimer placement</strong> — Medical disclaimers are required at the top and bottom of all articles
        covering medications, treatments, or clinical conditions.
      </p>
      <p>An article that does not pass this review is revised before publication.</p>
      <p>
        For more detail on how clinical content is evaluated, see our{" "}
        <a href="/medical-review">Content Accuracy Standards</a> page.
      </p>

      <h2 id="what-this-means-for-readers">What This Means for Readers</h2>
      <p>
        Our content is educational. It is designed to help you understand a health topic well enough to ask better
        questions and have more productive conversations with a qualified healthcare provider. It is not a substitute
        for that provider and should not be used to make clinical decisions independently.
      </p>
      <p>
        The value of our content is in presenting published evidence clearly, accurately, and without commercial bias
        — not in clinical expertise we do not have. We are transparent about this distinction because readers deserve
        to know the basis on which the content they read was produced.
      </p>

      <h2 id="pre-publish-checklist">What We Check Before Publishing</h2>
      <p>Before an article is published, we confirm:</p>
      <ul>
        <li>All major claims are attributed to named sources</li>
        <li>Medical disclaimers are present where required</li>
        <li>
          The article includes a &ldquo;Who This May Not Be Appropriate For&rdquo; section where relevant
        </li>
        <li>
          The article distinguishes between what evidence has established and what remains uncertain
        </li>
        <li>
          Every benefit or positive finding described in a clinical context is accompanied by a relevant limitation,
          exception, or uncertainty in the same section
        </li>
        <li>
          The review date and next scheduled review date are set correctly based on how quickly the content is likely
          to change
        </li>
        <li>
          The article does not contain content that could cause a reader to delay appropriate care or make a clinical
          decision without provider guidance
        </li>
      </ul>

      <h2 id="medical-disclaimers">Medical Disclaimers</h2>
      <p>
        All articles covering medications, clinical conditions, or health decisions include this disclaimer or a close
        equivalent:
      </p>
      <blockquote>
        This article is for educational purposes only. It is not medical advice, diagnosis, or a recommendation for
        any specific course of action. Talk to a qualified healthcare provider before making any changes to your
        health plan.
      </blockquote>
      <p>
        The presence of a disclaimer does not make a harmful article safe. Our review process is designed to ensure
        that the article itself is sound — the disclaimer is not a substitute for accuracy.
      </p>

      <h2 id="corrections-and-updates">Corrections and Updates</h2>
      <p>
        Health information changes. When an article contains an error or when the underlying evidence has materially
        changed, we update it.
      </p>
      <p>
        Our approach to corrections is described in our{" "}
        <a href="/editorial-policy">Editorial Policy</a>. Our approach to scheduled content review — including how
        often different types of articles are re-reviewed — is also described there.
      </p>

      <h2 id="what-we-do-not-do">What We Do Not Do</h2>
      <p>
        We do not publish sponsored content. We do not write promotional articles in exchange for payment or other
        consideration. We do not allow advertisers or commercial partners to influence editorial decisions, topic
        selection, or article framing.
      </p>
      <p>
        We do not use patient testimonials as evidence of efficacy. We do not use before-and-after narratives to
        imply results. We do not publish content that presents anecdote as data.
      </p>
      <p>
        We do not publish articles that cannot be sourced, hedged, and reviewed to our editorial standard —
        regardless of how useful the topic might otherwise be to cover.
      </p>

      <h2 id="our-standard">Our Standard in Plain Language</h2>
      <p>
        We publish content we would want a family member to read before making a health decision. That means it needs
        to be accurate, honest about uncertainty, clear about what it is and is not, and free of any incentive to
        mislead.
      </p>
      <p>When an article falls short of that standard, it does not get published.</p>
    </PolicyLayout>
  )
}
