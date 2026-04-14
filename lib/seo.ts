import type { Metadata } from "next"

const WWW_BASE = "https://www.weightliteracy.org"

export const siteConfig = {
  name: "Healthy Weight Literacy Foundation",
  shortName: "HWLF",
  description:
    "Healthy Weight Literacy Foundation exists to improve public health by providing clear, evidence-based education on nutrition, weight management, and metabolic health so individuals and communities can make informed, sustainable lifestyle decisions.",
  url: WWW_BASE,
  ogImage: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&h=630&fit=crop",
  email: "info@weightliteracy.org",
  phone: "",
  address: {
    street: "736 Miami Chapel Rd",
    city: "Dayton",
    state: "OH",
    zip: "45417",
    country: "US",
  },
  ein: "41-2983678",
  social: {
    twitter: "https://twitter.com/hwlfoundation",
    facebook: "https://www.facebook.com/weightliteracy",
    instagram: "https://www.instagram.com/weight.literacy",
    linkedin: "https://www.linkedin.com/company/weightliteracy",
    youtube: "",
  },
}

export function generatePageMetadata({
  title,
  description,
  path,
  image,
  noIndex = false,
}: {
  title: string
  description: string
  path: string
  image?: string
  noIndex?: boolean
}): Metadata {
  const canonical = `${WWW_BASE}${path}`
  const ogImage = image || siteConfig.ogImage

  return {
    title,
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: siteConfig.name,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
    robots: noIndex ? { index: false, follow: false } : { index: true, follow: true },
  }
}

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": ["Organization", "NGO"],
  "@id": `${WWW_BASE}/#organization`,
  name: siteConfig.name,
  alternateName: siteConfig.shortName,
  url: WWW_BASE,
  logo: `${WWW_BASE}/logo.png`,
  description:
    "A 501(c)(3) nonprofit providing evidence-based education on nutrition, weight management, and metabolic health.",
  foundingDate: "2024",
  taxID: siteConfig.ein,
  nonprofitStatus: "Nonprofit501c3",
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.address.street,
    addressLocality: siteConfig.address.city,
    addressRegion: siteConfig.address.state,
    postalCode: siteConfig.address.zip,
    addressCountry: siteConfig.address.country,
  },
  contactPoint: {
    "@type": "ContactPoint",
    email: siteConfig.email,
    contactType: "General Inquiries",
  },
  sameAs: [] as string[],
}

export function generateArticleJsonLd({
  title,
  description,
  publishedTime,
  modifiedTime,
  author,
  image,
  url,
}: {
  title: string
  description: string
  publishedTime: string
  modifiedTime?: string
  author: string
  image: string
  url: string
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    image,
    datePublished: publishedTime,
    dateModified: modifiedTime || publishedTime,
    author: {
      "@type": "Person",
      name: author,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: {
        "@type": "ImageObject",
        url: `${WWW_BASE}/logo.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
  }
}

export function generateFAQJsonLd(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  }
}

export const generateFAQSchema = generateFAQJsonLd

type BreadcrumbItem = { name: string; item: string }

export function generateBreadcrumbs(
  pathname: string,
  articleTitle?: string,
): BreadcrumbItem[] {
  const base = WWW_BASE
  const crumbs: BreadcrumbItem[] = [{ name: "Home", item: base }]

  if (pathname === "/" || pathname === "") return crumbs

  const segmentLabels: Record<string, string> = {
    about: "About",
    programs: "Programs",
    education: "Education",
    blog: "Articles",
    "city-resources": "Community Resources",
    donate: "Donate",
    contact: "Contact",
    privacy: "Privacy Policy",
    terms: "Terms of Use",
    cookies: "Cookie Policy",
    accessibility: "Accessibility",
    "medical-disclaimer": "Medical Disclaimer",
    "medical-review": "Content Accuracy Standards",
    "editorial-policy": "Editorial Policy",
    "how-we-create-content": "How We Create Content",
    transparency: "Transparency",
    impact: "Impact",
    faq: "FAQ",
    financials: "Financials",
    careers: "Careers",
    press: "Press",
    partner: "Partner",
    volunteer: "Volunteer",
    events: "Events",
    subscribe: "Subscribe",
    authors: "Authors",
    search: "Search",
  }

  const parts = pathname.replace(/^\//, "").split("/")

  if (parts[0] === "blog" && parts.length === 2 && articleTitle) {
    crumbs.push({ name: "Articles", item: `${base}/blog` })
    crumbs.push({ name: articleTitle, item: `${base}${pathname}` })
  } else if (parts[0] === "blog" && parts.length === 1) {
    crumbs.push({ name: "Articles", item: `${base}/blog` })
  } else if (parts[0] === "authors" && parts.length === 2) {
    crumbs.push({ name: "Authors", item: `${base}/authors` })
    if (articleTitle) {
      crumbs.push({ name: articleTitle, item: `${base}${pathname}` })
    }
  } else {
    parts.forEach((seg, i) => {
      const href = `${base}/${parts.slice(0, i + 1).join("/")}`
      const label = segmentLabels[seg] || seg.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())
      crumbs.push({ name: label, item: href })
    })
  }

  return crumbs
}

export function buildBreadcrumbSchema(pathname: string, articleTitle?: string) {
  const crumbs = generateBreadcrumbs(pathname, articleTitle)
  if (crumbs.length <= 1) return null
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((crumb, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: crumb.name,
      item: crumb.item,
    })),
  }
}
