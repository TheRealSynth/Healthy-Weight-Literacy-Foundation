import Link from "next/link"
import { Heart, Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react"
import { siteConfig } from "@/lib/seo"
import { NewsletterForm } from "@/components/forms/newsletter-form"

const footerNavigation = {
  about: [
    { name: "Our Story", href: "/about" },
    { name: "Impact", href: "/impact" },
    { name: "Financials", href: "/financials" },
    { name: "Press", href: "/press" },
    { name: "Careers", href: "/careers" },
  ],
  programs: [
    { name: "All Programs", href: "/programs" },
    { name: "Resources", href: "/resources" },
    { name: "Blog", href: "/blog" },
    { name: "Events", href: "/events" },
    { name: "Telehealth", href: "/telehealth-intake" },
  ],
  getInvolved: [
    { name: "Donate", href: "/donate" },
    { name: "Volunteer", href: "/volunteer" },
    { name: "Partner", href: "/partner" },
    { name: "Contact", href: "/contact" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Accessibility", href: "/accessibility" },
  ],
}

const socialLinks = [
  { name: "Facebook", href: siteConfig.social.facebook, icon: Facebook },
  { name: "Twitter", href: siteConfig.social.twitter, icon: Twitter },
  { name: "Instagram", href: siteConfig.social.instagram, icon: Instagram },
  { name: "LinkedIn", href: siteConfig.social.linkedin, icon: Linkedin },
  { name: "YouTube", href: siteConfig.social.youtube, icon: Youtube },
]

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          {/* Brand and Newsletter */}
          <div className="space-y-8 xl:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary">
                <Heart className="h-5 w-5 text-primary-foreground" aria-hidden="true" />
              </div>
              <span className="text-lg font-bold">HWLF</span>
            </Link>
            <p className="text-sm text-secondary-foreground/80 max-w-xs">
              Empowering communities through evidence-based healthy weight education, accessible programs, and
              compassionate care.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-secondary-foreground/60 hover:text-secondary-foreground transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Follow us on ${item.name}`}
                >
                  <item.icon className="h-5 w-5" aria-hidden="true" />
                </a>
              ))}
            </div>

            <div className="pt-4">
              <h3 className="text-sm font-semibold mb-3">Stay Updated</h3>
              <NewsletterForm variant="footer" />
            </div>
          </div>

          {/* Navigation Links */}
          <div className="mt-12 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0 md:grid-cols-4">
            <div>
              <h3 className="text-sm font-semibold">About</h3>
              <ul className="mt-4 space-y-3" role="list">
                {footerNavigation.about.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm text-secondary-foreground/70 hover:text-secondary-foreground transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold">Programs</h3>
              <ul className="mt-4 space-y-3" role="list">
                {footerNavigation.programs.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm text-secondary-foreground/70 hover:text-secondary-foreground transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold">Get Involved</h3>
              <ul className="mt-4 space-y-3" role="list">
                {footerNavigation.getInvolved.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm text-secondary-foreground/70 hover:text-secondary-foreground transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold">Legal</h3>
              <ul className="mt-4 space-y-3" role="list">
                {footerNavigation.legal.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm text-secondary-foreground/70 hover:text-secondary-foreground transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 border-t border-secondary-foreground/10 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-secondary-foreground/60">
              &copy; {new Date().getFullYear()} Healthy Weight Literacy Foundation. All rights reserved.
            </p>
            <p className="text-sm text-secondary-foreground/60">
              501(c)(3) Nonprofit Organization | EIN: {siteConfig.ein}
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
