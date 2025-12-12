import type React from "react"
import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Toaster } from "@/components/ui/sonner"
import { organizationJsonLd } from "@/lib/seo"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://healthyweightliteracy.org"),
  title: {
    default: "Healthy Weight Literacy Foundation | Education, Programs & Access",
    template: "%s | Healthy Weight Literacy Foundation",
  },
  description:
    "Empowering communities through evidence-based healthy weight education, accessible programs, and compassionate care. Join us in building a healthier future for all.",
  keywords: [
    "healthy weight",
    "nutrition education",
    "wellness programs",
    "nonprofit",
    "health literacy",
    "community health",
    "obesity prevention",
    "family wellness",
  ],
  authors: [{ name: "Healthy Weight Literacy Foundation" }],
  creator: "Healthy Weight Literacy Foundation",
  publisher: "Healthy Weight Literacy Foundation",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://healthyweightliteracy.org",
    siteName: "Healthy Weight Literacy Foundation",
    title: "Healthy Weight Literacy Foundation | Education, Programs & Access",
    description:
      "Empowering communities through evidence-based healthy weight education, accessible programs, and compassionate care.",
    images: [
      {
        url: "/og-image.png",
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
      "Empowering communities through evidence-based healthy weight education, accessible programs, and compassionate care.",
    images: ["/og-image.png"],
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
    icon: [{ url: "/favicon.ico" }, { url: "/icon.svg", type: "image/svg+xml" }],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
    generator: 'v0.app'
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
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }} />
      </head>
      <body className="font-sans antialiased min-h-screen flex flex-col">
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
      </body>
    </html>
  )
}
