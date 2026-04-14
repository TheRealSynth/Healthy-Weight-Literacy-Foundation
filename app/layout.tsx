import type React from "react"
import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Toaster } from "@/components/ui/sonner"
import { organizationJsonLd } from "@/lib/seo"
import { GA4Provider } from "@/components/analytics/ga4-provider"
import { CookieConsent } from "@/components/layout/cookie-consent"
import { checkRequiredEnvVars } from "@/lib/check-env"

if (process.env.NODE_ENV === "development") {
  checkRequiredEnvVars()
}

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID

export const metadata: Metadata = {
  metadataBase: new URL("https://www.weightliteracy.org"),
  title: {
    default: "Healthy Weight Literacy Foundation | Evidence-Based Health Education",
    template: "%s | Healthy Weight Literacy Foundation",
  },
  description:
    "Free, evidence-based education on nutrition, weight management, and metabolic health from the Healthy Weight Literacy Foundation — a 501(c)(3) nonprofit.",
  keywords: [
    "health literacy",
    "nutrition education",
    "weight management",
    "metabolic health",
    "nonprofit",
    "evidence-based education",
    "public health",
    "weight literacy",
  ],
  authors: [{ name: "Healthy Weight Literacy Foundation" }],
  creator: "Healthy Weight Literacy Foundation",
  publisher: "Healthy Weight Literacy Foundation",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "https://www.weightliteracy.org",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.weightliteracy.org",
    siteName: "Healthy Weight Literacy Foundation",
    title: "Healthy Weight Literacy Foundation | Evidence-Based Health Education",
    description:
      "Free, evidence-based education on nutrition, weight management, and metabolic health from the Healthy Weight Literacy Foundation — a 501(c)(3) nonprofit.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "Healthy Weight Literacy Foundation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Healthy Weight Literacy Foundation",
    description:
      "Free, evidence-based education on nutrition, weight management, and metabolic health from the Healthy Weight Literacy Foundation — a 501(c)(3) nonprofit.",
    images: ["https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&h=630&fit=crop"],
    creator: "@hwlfoundation",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    apple: "/icon.svg",
  },
  manifest: "/site.webmanifest",
  verification: {
    google: "leBIqjXCkqYmnfmaruVk0B9tuMCsE6Pj2rZT16_9rWA",
  },
}

export const viewport: Viewport = {
  themeColor: "#059669",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        {GTM_ID && (
          <script
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`,
            }}
          />
        )}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body className="font-sans antialiased min-h-screen flex flex-col">
        {GTM_ID && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            />
          </noscript>
        )}
        <a href="#main-content" className="skip-to-content">
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
        <Toaster />
        <Analytics />
        <GA4Provider />
        <CookieConsent />
      </body>
    </html>
  )
}
