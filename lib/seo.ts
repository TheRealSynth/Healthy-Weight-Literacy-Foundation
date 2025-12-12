import type { Metadata } from "next"

export const siteConfig = {
  name: "Healthy Weight Literacy Foundation",
  shortName: "HWLF",
  description:
    "Empowering communities through evidence-based healthy weight education, accessible programs, and compassionate care.",
  url: "https://healthyweightliteracy.org",
  ogImage: "/og-image.png",
  email: "info@healthyweightliteracy.org",
  phone: "(555) 123-4567",
  address: {
    street: "123 Wellness Way",
    city: "Health City",
    state: "CA",
    zip: "90210",
    country: "United States",
  },
  ein: "XX-XXXXXXX",
  social: {
    twitter: "https://twitter.com/hwlfoundation",
    facebook: "https://facebook.com/hwlfoundation",
    instagram: "https://instagram.com/hwlfoundation",
    linkedin: "https://linkedin.com/company/hwlfoundation",
    youtube: "https://youtube.com/@hwlfoundation",
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
  const url = `${siteConfig.url}${path}`
  const ogImage = image || siteConfig.ogImage

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
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
  "@type": "NGO",
  name: siteConfig.name,
  alternateName: siteConfig.shortName,
  url: siteConfig.url,
  logo: `${siteConfig.url}/logo.png`,
  description: siteConfig.description,
  email: siteConfig.email,
  telephone: siteConfig.phone,
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.address.street,
    addressLocality: siteConfig.address.city,
    addressRegion: siteConfig.address.state,
    postalCode: siteConfig.address.zip,
    addressCountry: siteConfig.address.country,
  },
  sameAs: Object.values(siteConfig.social),
  nonprofitStatus: "Nonprofit501c3",
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
        url: `${siteConfig.url}/logo.png`,
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
