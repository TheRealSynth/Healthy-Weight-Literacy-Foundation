"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem("hwlf-cookie-consent")
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 1500)
      return () => clearTimeout(timer)
    }
  }, [])

  function handleAccept() {
    localStorage.setItem("hwlf-cookie-consent", "accepted")
    setIsVisible(false)
  }

  function handleDecline() {
    localStorage.setItem("hwlf-cookie-consent", "declined")
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 border-t bg-surface/95 backdrop-blur supports-[backdrop-filter]:bg-surface/80 p-4 shadow-lg"
      role="dialog"
      aria-label="Cookie consent"
    >
      <div className="mx-auto max-w-5xl flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-muted-foreground leading-relaxed">
          We use cookies to improve your experience and analyze site traffic. Read our{" "}
          <Link href="/cookies" className="text-primary underline hover:no-underline">
            Cookie Policy
          </Link>{" "}
          for more information.
        </p>
        <div className="flex items-center gap-2 shrink-0">
          <Button variant="outline" size="sm" onClick={handleDecline}>
            Decline
          </Button>
          <Button size="sm" onClick={handleAccept}>
            Accept
          </Button>
        </div>
      </div>
    </div>
  )
}
