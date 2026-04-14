# Healthy Weight Literacy Foundation (HWLF) — WeightLiteracy.org

## Project Overview
Next.js 16 (App Router) website for the Healthy Weight Literacy Foundation, a 501(c)(3) nonprofit serving Ohio communities with free, evidence-based health education on nutrition, weight management, and metabolic health.

## Tech Stack
- **Framework**: Next.js 16 (App Router, Turbopack)
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS v4 (with `@tailwindcss/oxide-linux-x64-gnu` native binary — MUST stay in dependencies)
- **Package Manager**: pnpm
- **Database**: Supabase (PostgreSQL) — `lib/supabase-blog.ts`
- **Port**: 5000 (dev: `next dev -p 5000`)
- **Node**: 20 (via Nix: `/nix/store/1lagpgadaybvs1n2312gysg2phjk89y8-nodejs-20.20.0-wrapped/bin`)

## Architecture

### Key Directories
- `app/` — Next.js App Router pages
- `components/` — Shared React components
  - `components/layout/` — Header, Footer, PageHeader, Section, Container
  - `components/seo/` — ArticleSchema, BreadcrumbSchema
  - `components/blocks/` — CityTabs (city resources tab client component)
  - `components/forms/` — ContactForm, NewsletterForm
  - `components/analytics/` — GA4Provider
- `lib/` — Utilities and data fetching
  - `lib/seo.ts` — siteConfig, organizationJsonLd, generatePageMetadata, buildBreadcrumbSchema
  - `lib/supabase-blog.ts` — BlogPost interface + getBlogPost/getBlogPosts
  - `lib/authors.ts` — Author type + getAuthor/getAuthorByName
  - `lib/internal-links.ts` — 15-entry keyword→href map (wired for future injection)
  - `lib/routes.ts` — Canonical route constants (ROUTES.*)

### Base URL & Canonicals
- `siteConfig.url` = `https://www.weightliteracy.org` (www-prefixed)
- All canonical tags use this base

## Completed Work

### Tier 1 SEO / Technical Infrastructure
- ✅ GTM snippet in `app/layout.tsx` (env-var guarded via `NEXT_PUBLIC_GTM_ID`)
- ✅ Organization JSON-LD schema sitewide (`@id`, `foundingDate`, `taxID=41-2983678`, www URL)
- ✅ MedicalWebPage schema on ALL `/blog/[slug]` pages with `dateReviewed`
- ✅ BreadcrumbList schema via `buildBreadcrumbSchema` helper on blog + all static pages
- ✅ Self-referencing canonical tags + 5 duplicate-article override map (`CANONICAL_OVERRIDES`)
- ✅ `app/sitemap.ts` — excludes legal pages, adds `/subscribe`, correct priorities
- ✅ `app/robots.ts` — standard allow-all with sitemap reference
- ✅ Review date displayed in article footer
- ✅ Meta descriptions updated for 7+ static pages

### Tier 2 UX / Content
- ✅ `lib/authors.ts` — Author type + `hwlf-editorial-team` seed data
- ✅ `/authors/[slug]` page with Person schema + article list
- ✅ `/subscribe` page with NewsletterForm, value bullets, recent article preview
- ✅ `app/api/posts/route.ts` — slim post JSON for client-side search
- ✅ Programs page fully rebuilt — 4 pillars (Nutrition Literacy, Metabolic Health, Telehealth/Medication, Weight Science) with live Supabase article cards
- ✅ City resources SSR — all 4 cities (Dayton, Columbus, Cincinnati, Cleveland) in raw HTML; `CityTabs` client component manages CSS visibility only
- ✅ Homepage: donation prominence strip + impact stats strip ("39+", "Free", "Ohio")
- ✅ Header search modal — desktop Search icon opens full-width overlay with client-side filtering via `/api/posts`
- ✅ Article author byline with SVG placeholder, link to `/authors/[slug]`, review date display
- ✅ `lib/internal-links.ts` — 15-entry keyword→href map (SQL migration scripts in `supabase/migrations/add_internal_links.sql`)

## Important Notes

### `@ts-nocheck` Required
Must remain on first line of:
- `components/ui/chart.tsx`
- `components/ui/resizable.tsx`
- `lib/render-markdown.tsx`

### BlogPost Interface
Optional fields added (not yet in Supabase schema — handled gracefully via optional chaining):
- `author_slug?: string` — falls back to `"hwlf-editorial-team"`
- `reviewed_at?: string | null`
- `canonical_url?: string | null`

### Canonical Override Map
5 duplicate article slugs mapped in `app/blog/[slug]/page.tsx` `CANONICAL_OVERRIDES`.

### Internal Links
`lib/internal-links.ts` exists with 15-entry map. SQL injection scripts are in `supabase/migrations/add_internal_links.sql` — these are commented-out and should be run manually via Supabase SQL Editor after previewing each match.

### Environment Variables
- `NEXT_PUBLIC_GTM_ID` — Google Tag Manager container ID (placeholder in .env.local)
- `NEXT_PUBLIC_SUPABASE_URL` — Supabase project URL
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` — Supabase anon key

### Tailwind Native Binary
`@tailwindcss/oxide-linux-x64-gnu` MUST remain in `dependencies` (not `devDependencies`). This is the native Rust binding for Tailwind v4 and pnpm doesn't auto-install it via optional deps on this platform.
