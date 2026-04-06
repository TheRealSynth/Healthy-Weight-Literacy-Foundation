# Full System Audit — Healthy Weight Literacy Foundation
### weightliteracy.org | April 2026 | Adversarial Review

---

## EXECUTIVE SCORECARD

| Dimension | Score | Status |
|---|---|---|
| Trustworthiness / E-E-A-T | 28/100 | FAILING |
| Compliance Safety (HIPAA, Ad Grants, 501c3) | 10/100 | CRITICAL |
| SEO Scalability | 42/100 | POOR |
| Conversion Effectiveness | 55/100 | MARGINAL |
| Technical Quality | 58/100 | MARGINAL |
| **Composite** | **35/100** | **FAILING** |

The surface presentation is professional. The operational layer has multiple first-tier failures that individually could end the organization's Ad Grant, 501(c)(3) status, or expose it to federal regulatory action.

---

## CRITICAL FAILURES

---

### CRITICAL-1: The Telehealth Intake Is a Commercial Service Operating Under Nonprofit Cover

**Severity:** Existential  
**Files:** `components/forms/telehealth-intake-form.tsx:479–488`, `app/api/telehealth-intake/route.ts`, `app/transparency/page.tsx:47`, `app/editorial-policy/page.tsx:83`

The `/telehealth-intake` page is a five-step clinical intake pipeline that:

- Collects full PII: name, DOB, address, phone, email
- Collects PHI: diagnoses, medications, allergies, weight, height
- Collects insurance provider and member ID
- Presents commercial pricing: **$75 initial / $50 follow-up / $250 six-session package**
- Obtains binding consent to "receive telehealth wellness services from HWLF"
- Sends confirmation: "Our care team will contact you within 24–48 hours"
- API confirms: "Our clinical team will review your information within 2–3 business days"

`app/transparency/page.tsx` line 47 states: *"We do not operate commercial programs, sell advertising, or generate revenue through affiliate arrangements as a primary function."*

`app/editorial-policy/page.tsx` line 83 prohibits: *"Articles designed to generate leads for any commercial entity."*

These are not tensions. They are direct contradictions. The telehealth form is a commercial lead-gen pipeline charging money for clinical services, operating on the same domain as the educational nonprofit, with no disclosure of that separation.

**Legal exposure:**
- **501(c)(3) jeopardy:** Unrelated business income from a fee-for-service telehealth operation, while claiming pure educational purpose, is grounds for IRS revocation
- **FTC § 45:** Representing as a free nonprofit educator while routing to a $75 intake is potentially deceptive
- **State telehealth licensing:** "Registered dietitians" offering services across 50 states requires state-by-state licensure — no evidence this exists in the codebase or documentation

**This finding alone justifies halting deployment.**

---

### CRITICAL-2: PHI Is Being Collected Without HIPAA Infrastructure

**Severity:** Critical — criminal referral exposure  
**Files:** `lib/validators.ts:40–79`, `app/api/telehealth-intake/route.ts`, `lib/resend.ts`

The `telehealthIntakeSchema` combines name + DOB + address + phone + diagnoses + medications + allergies + insurance ID. This is the canonical HIPAA PHI definition under 45 CFR §160.103.

This PHI is:
1. Received by a Next.js API route with no encryption beyond standard HTTPS
2. **Emailed via Resend in plaintext HTML** to `info@weightliteracy.org`
3. Sent as a patient confirmation from `onboarding@resend.dev` — Resend's free-tier sandbox domain

`lib/resend.ts` hardcodes:
```
FROM_EMAIL = "Healthy Weight Literacy Foundation <onboarding@resend.dev>"
```

There is zero evidence in this codebase of:
- A HIPAA BAA with Resend (Resend does not offer BAAs on free/standard tiers)
- A HIPAA BAA with Supabase
- Encryption at rest for intake payloads
- Audit logging of PHI access
- A breach notification policy
- A HIPAA Security Officer

Every telehealth intake submission is a reportable breach. HIPAA civil penalties: $100–$50,000 per violation per day. Criminal referral applies to willful neglect.

**The form must be taken offline immediately pending legal review.**

---

### CRITICAL-3: Google Ad Grant Policy Violation

**Severity:** Critical — grant suspension risk  
**Files:** `app/sitemap.ts:31`, `next.config.mjs:43`, `app/editorial-policy/page.tsx:163`

The editorial policy explicitly references the Ad Grant: *"We do not participate in affiliate marketing programs on content that is eligible for our Google Ad Grant."* This confirms awareness of the grant and its restrictions.

`app/sitemap.ts` includes `/telehealth-intake` at priority 0.6 — submitted to Google Search Console. `next.config.mjs` redirects `/telehealth` → `/telehealth-intake` via permanent 301 — fully crawlable by Google.

Ad Grants policy prohibits directing grant-funded traffic to pages with commercial transactions or fee-for-service lead generation. The `/telehealth-intake` page charges $75–$250. If any Ad Grant campaign drives traffic that converts here, the grant is in violation.

**Secondary:** The sitemap includes `/telehealth-intake` but excludes `/medical-disclaimer`, `/editorial-policy`, `/how-we-create-content`, and `/medical-review` — the pages that would demonstrate legitimate educational purpose to a grant reviewer.

---

### CRITICAL-4: Author Credentials Are Entirely Hardcoded — E-E-A-T Failure for YMYL

**Severity:** Critical (SEO + Trust)  
**Files:** `app/blog/[slug]/page.tsx:175–183`, `lib/supabase-blog.ts:30–46`

Every blog post renders this, hardcoded in the template:

```tsx
<p className="font-medium text-secondary">{post.author}</p>
<p className="text-sm text-muted-foreground">Health Writer</p>
<p className="text-sm text-muted-foreground">
  Passionate about empowering individuals through education and
  accessible healthcare resources.
</p>
```

The name comes from the database. "Health Writer" and the bio are **static strings**. A cardiologist, a registered dietitian, and a staff assistant display identically. The `BlogPost` interface (`lib/supabase-blog.ts`) has no `author_bio`, `author_credentials`, `author_title`, `medical_reviewer`, or `reviewer_credentials` fields. The schema makes accurate credential display structurally impossible.

This content covers GLP-1 medications, clinical conditions, and treatment efficacy — Google YMYL. E-E-A-T for YMYL requires demonstrable author expertise. "Health Writer" with a generic bio is not compliant.

The Article JSON-LD in `lib/seo.ts` populates `author.name` but provides no `author.url`, `author.sameAs`, or credential data. The structured data is incomplete for YMYL ranking.

---

### CRITICAL-5: Policy Documents Are Marketing Copy — The Database Enforces None of It

**Severity:** High — due diligence failure  
**Files:** `lib/supabase-blog.ts:30–46`, `app/editorial-policy/page.tsx`, `app/how-we-create-content/page.tsx`, `app/medical-review/page.tsx`

`/editorial-policy` states: *"Review dates are shown in the article footer."*  
`/how-we-create-content` states: *"Sources are listed at the end of every clinical article."*  
`/medical-review` states: *"Review dates reflect the most recent medical review."*

The `BlogPost` schema has exactly these fields:
`id, slug, title, description, author, author_image, published_at, updated_at, hero_image, tags[], category, reading_time, content, is_published, created_at`

**Missing from schema — all promised in policy:**
- `medical_reviewer` — does not exist
- `last_reviewed_date` — does not exist
- `review_due_date` — does not exist
- `citations` / `sources` — does not exist
- `author_bio` — does not exist
- `author_credentials` — does not exist

An article can be published with no reviewer, no citations, and no review date and the system accepts it identically to a fully compliant article. The policies describe a rigorous operation. The database enforces nothing.

---

## HIGH-IMPACT FAILURES

---

### HIGH-1: Financial Documents Are Dead Buttons

`app/financials/page.tsx` lists: 2022 Annual Report, 2022 Form 990, 2023 Annual Report, 2023 Form 990, Audited Financials. Six download buttons. Zero `href` attributes. No PDFs in `/public/`. Under 26 U.S.C. §6104, Form 990 public disclosure is a legal requirement for 501(c)(3) organizations. A donor, journalist, or IRS examiner clicking "Download 2023 Form 990" gets nothing.

**Secondary:** The financials chart shows 5% "Program Fees" revenue. If that is telehealth revenue, it directly contradicts the transparency page claim of no commercial programs.

---

### HIGH-2: Email Delivery Is Running on a Sandbox Domain

`lib/resend.ts` line 4: `FROM_EMAIL = "Healthy Weight Literacy Foundation <onboarding@resend.dev>"`

All emails — including clinical intake confirmations referencing "our care team" and "your appointment" — route from Resend's free-tier sandbox address. This means:
- Deliverability is near zero (spam filters reject `resend.dev`)
- PHI confirmation emails route through an uncontrolled third-party subdomain
- This is consistent with a prototype that was never production-configured

---

### HIGH-3: Newsletter CTA Links to a Non-Existent Anchor

`app/blog/[slug]/page.tsx:193`: `<Link href="/#newsletter">Subscribe</Link>`

The homepage has no element with `id="newsletter"`. Every user who clicks "Subscribe" after reading a health article is silently deposited at the top of the homepage with no form in view. This is the highest-intent conversion moment on the site, and it is broken.

---

### HIGH-4: Share Buttons Do Nothing

`app/blog/[slug]/page.tsx:116–125`: Three buttons — Twitter, Facebook, Copy Link. None have `onClick` handlers. They render, they look functional, they do nothing. For YMYL content depending on social signals and authority, broken share functionality is a direct SEO cost.

---

### HIGH-5: Blog Search Excludes All Blog Content

`lib/search-index.ts` queries only `lib/mdx.ts` (static, ~2 hardcoded sample posts). All Supabase blog posts are invisible to site search. A user searching for any topic covered in a published article gets zero results.

---

### HIGH-6: No Rate Limiting on Any Endpoint

Five POST endpoints (`/api/contact`, `/api/newsletter`, `/api/volunteer`, `/api/partner`, `/api/telehealth-intake`) have no IP rate limiting, no CSRF tokens, no body size limits, no `middleware.ts`. The newsletter endpoint sends two emails per submission — a bot submitting 1,000 requests sends 2,000 emails, exhausting the Resend quota and potentially blacklisting the domain. The telehealth endpoint allows a bad actor to send fake intake confirmations from "our clinical team" to any email address.

---

### HIGH-7: TypeScript Errors Are Silenced at Build

`next.config.mjs`: `typescript: { ignoreBuildErrors: true }`. TypeScript is configured `strict: true` but that strictness is overridden at build time. Type regressions reach production silently. There is no CI configuration in the repository to catch this.

---

## SCALE RISKS

### At 1,000 pages:
- **No pagination on blog listing.** `getBlogPosts()` fetches all posts with no `LIMIT`. At 1,000 posts the page sends a massive payload, breaks LCP, and fails Core Web Vitals.
- **`generateStaticParams()` fetches all posts at build time.** Build time scales linearly with post count.
- **Education page loads all posts then filters in JS** — category string matching fails silently on any variation.
- **City resources page is hardcoded to 4 Ohio cities.** Zero programmatic SEO value.

### At 10,000 pages:
- `generateStaticParams()` build time is measured in hours. ISR must replace full static generation.
- Supabase free tier rate limits will trigger during builds.
- No sitemap segmentation — a single sitemap at 10,000 URLs exceeds Google's 50MB/50,000 URL limit and becomes a crawl budget problem.
- No `noindex` strategy for thin or low-value pages.
- Category string matching in `app/education/page.tsx` silently drops articles with any variation in category name.

---

## TRUST BREAKPOINTS

Exact moments a user, Google reviewer, or journalist loses trust:

1. **Author bio is identical on every article.** "Health Writer. Passionate about empowering individuals." This is the signature pattern of AI content farms. A Google quality rater flags it on first contact.
2. **Click "Download 2023 Form 990" — nothing happens.** A transparency page that promises documents and delivers broken buttons is worse than no transparency page.
3. **User finds the $75 telehealth intake on a site claiming to be a free educational nonprofit.** The interpretation is immediate: "this is a lead gen site."
4. **User tries to share a health article — share buttons do nothing.**
5. **User searches for content they just read — zero results.**
6. **Ad Grant reviewer checks `/telehealth-intake`.** Commercial pricing + insurance collection = grant suspension.

---

## CODE-LEVEL FIXES

### Fix 1 — Author System (CRITICAL)

`app/blog/[slug]/page.tsx:175–183` — remove hardcoded strings:

```tsx
// CURRENT — identical on every article:
<p className="text-sm text-muted-foreground">Health Writer</p>
<p className="text-sm text-muted-foreground">Passionate about empowering...</p>

// REQUIRED — from database:
<p className="text-sm text-muted-foreground">{post.author_title}</p>
<p className="text-sm text-muted-foreground">{post.author_bio}</p>
```

Add to Supabase schema:
```sql
ALTER TABLE blog_posts
  ADD COLUMN author_title TEXT,
  ADD COLUMN author_bio TEXT,
  ADD COLUMN author_credentials TEXT,
  ADD COLUMN medical_reviewer TEXT,
  ADD COLUMN last_reviewed_date DATE,
  ADD COLUMN review_due_date DATE,
  ADD COLUMN citations JSONB DEFAULT '[]';
```

### Fix 2 — Newsletter Anchor

`app/blog/[slug]/page.tsx:193`: Verify `id="newsletter"` exists on the homepage newsletter section. If not, add it or change the href to `/contact#newsletter`.

### Fix 3 — Share Buttons

Extract to a `"use client"` component:
```tsx
'use client'
export function ShareButtons({ url, title }: { url: string; title: string }) {
  return (
    <div className="flex gap-3">
      <Button variant="outline" size="icon" aria-label="Share on Twitter"
        onClick={() => window.open(
          `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
          '_blank'
        )}>
        <Twitter className="h-4 w-4" />
      </Button>
      <Button variant="outline" size="icon" aria-label="Share on Facebook"
        onClick={() => window.open(
          `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
          '_blank'
        )}>
        <Facebook className="h-4 w-4" />
      </Button>
      <Button variant="outline" size="icon" aria-label="Copy link"
        onClick={() => navigator.clipboard.writeText(url)}>
        <Share2 className="h-4 w-4" />
      </Button>
    </div>
  )
}
```

### Fix 4 — Financial Documents

Either upload real PDFs to Supabase Storage and link them, or replace the download buttons with:
```tsx
<p className="text-sm text-muted-foreground">
  To request our Form 990 or financial statements, contact{' '}
  <a href="mailto:info@weightliteracy.org">info@weightliteracy.org</a>.
</p>
```

Dead download buttons are worse than honest disclosure.

### Fix 5 — Rate Limiting

Create `middleware.ts` at project root:
```ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const rateMap = new Map<string, { count: number; reset: number }>()

export function middleware(request: NextRequest) {
  if (!request.nextUrl.pathname.startsWith('/api/')) return NextResponse.next()
  const ip = request.headers.get('x-forwarded-for') ?? 'unknown'
  const now = Date.now()
  const entry = rateMap.get(ip) ?? { count: 0, reset: now + 60_000 }
  if (now > entry.reset) { entry.count = 0; entry.reset = now + 60_000 }
  entry.count++
  rateMap.set(ip, entry)
  if (entry.count > 10) {
    return NextResponse.json({ error: 'Too many requests' }, { status: 429 })
  }
  return NextResponse.next()
}

export const config = { matcher: '/api/:path*' }
```

### Fix 6 — Search Index

Replace MDX-only search with Supabase full-text search:
```ts
export async function searchPosts(query: string) {
  const client = getSupabaseClient()
  if (!client) return []
  const { data } = await client
    .from('blog_posts')
    .select('slug, title, description, tags, category')
    .eq('is_published', true)
    .or(`title.ilike.%${query}%,description.ilike.%${query}%`)
    .limit(20)
  return data ?? []
}
```

### Fix 7 — Blog Pagination

`app/blog/page.tsx` — add page param and range query:
```ts
const PAGE_SIZE = 12
const page = Number(searchParams?.page ?? 1)
const from = (page - 1) * PAGE_SIZE
const { data } = await client
  .from('blog_posts')
  .select('*')
  .eq('is_published', true)
  .order('published_at', { ascending: false })
  .range(from, from + PAGE_SIZE - 1)
```

### Fix 8 — Email Domain

`lib/resend.ts:4`: Replace `onboarding@resend.dev` with `noreply@weightliteracy.org`. Requires domain verification in Resend dashboard. One-line fix + DNS step.

### Fix 9 — Static Sitemap Conflict

Delete `public/sitemap.xml`. Add policy pages to `app/sitemap.ts`:
```ts
{ url: `${base}/medical-disclaimer`, priority: 0.6, changeFrequency: 'yearly' as const },
{ url: `${base}/editorial-policy`, priority: 0.6, changeFrequency: 'yearly' as const },
{ url: `${base}/how-we-create-content`, priority: 0.6, changeFrequency: 'yearly' as const },
{ url: `${base}/medical-review`, priority: 0.6, changeFrequency: 'yearly' as const },
```

### Fix 10 — TypeScript Enforcement

`next.config.mjs`: Remove `ignoreBuildErrors: true`. Fix all resulting type errors before any further deployment.

---

## STRATEGIC MISALIGNMENT

The site presents itself as a pure educational nonprofit while operating a commercial healthcare intake service that collects insurance information and charges $75–$250 for clinical services.

This is not a code problem. It is an identity problem.

The editorial policy explicitly prohibits "articles designed to generate leads for any commercial entity." The telehealth intake form is a lead generation form for a commercial healthcare service, on the same domain, reachable from the same navigation. Every trust signal the site builds through its editorial policy, medical review process, and transparency page is compromised the moment a user finds the intake form.

**Google's perspective:** A YMYL health site that collects clinical intake data and charges for appointments is not operating primarily as a nonprofit educator. The grant is at risk.

**The IRS's perspective:** A 501(c)(3) generating revenue from fee-for-service clinical appointments, while its transparency page says it doesn't operate commercial programs, has a documentation problem that survives any audit.

**The user's perspective:** "I came here to learn about GLP-1 medications from a nonprofit. Why is this nonprofit charging me $75?"

---

## FINAL VERDICT

The technical foundation is solid enough to build on. The compliance documentation is well-written. The content strategy is defensible.

**This system fails under adversarial scrutiny on one decisive point: the telehealth intake is a commercial clinical service operating under nonprofit cover, without HIPAA compliance, on a domain funded by an Ad Grant that prohibits it.**

The other issues — broken share buttons, dead financial downloads, hardcoded author bios, search that doesn't search — are fixable in days.

The strategic identity crisis requires an organizational decision: either the telehealth service gets its own legal entity, its own domain, and its own compliance infrastructure, or it gets removed.

Until that decision is made and executed, deploying this system as-is is a funded regulatory violation across three simultaneous vectors: HIPAA, the Ad Grant, and 501(c)(3) operational scope.

**Recommendation:** Take `/telehealth-intake` offline now. Fix the technical issues in parallel. Do not drive traffic to this domain until the legal structure around the telehealth service is documented and verified.

---

## REMEDIATION PRIORITY ORDER

### Phase 0 — Immediate (before any public traffic)
1. Disable or password-protect `/telehealth-intake` pending legal review
2. Replace `onboarding@resend.dev` with verified domain email (`lib/resend.ts`)
3. Remove or replace non-functional download buttons on `/financials`
4. Add rate limiting to all 5 POST endpoints (`middleware.ts`)

### Phase 1 — Within 30 days
1. Add `medical_reviewer`, `last_reviewed_date`, `review_due_date`, `citations`, `author_bio`, `author_credentials` fields to Supabase schema
2. Remove hardcoded "Health Writer" credential and bio; drive from author schema
3. Delete `public/sitemap.xml`; add policy pages to dynamic sitemap
4. Fix newsletter anchor (`id="newsletter"` on homepage or redirect)
5. Wire up share button `onClick` handlers (client component)
6. Set `typescript: { ignoreBuildErrors: false }` and fix type errors

### Phase 2 — Within 60 days
1. Implement server-side search querying Supabase blog posts
2. Add blog pagination with Supabase `.range()` and URL-based page param
3. Replace category string matching with taxonomy-based filtering
4. Pin all dependencies to exact versions (remove `latest`)
5. Enable Next.js image optimization (`unoptimized: false`)
6. Remove or lazy-load `recharts` (only used on financials page)

### Phase 3 — Ongoing
1. Upgrade Article JSON-LD to `MedicalWebPage` schema with reviewer and review date
2. Add `vercel.json` with CDN caching headers
3. Implement ISR strategy for blog posts at scale
4. Build author profile pages with full credentials
5. Evaluate city resources expansion beyond 4 Ohio cities
