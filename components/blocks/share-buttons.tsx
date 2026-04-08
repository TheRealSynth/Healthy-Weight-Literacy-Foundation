"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Twitter, Facebook, Share2, CheckCircle2 } from "lucide-react"

interface ShareButtonsProps {
  url: string
  title: string
}

export function ShareButtons({ url, title }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false)

  function shareOnTwitter() {
    window.open(
      `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
      "_blank",
      "noopener,noreferrer",
    )
  }

  function shareOnFacebook() {
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      "_blank",
      "noopener,noreferrer",
    )
  }

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(url)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // Fallback for browsers without clipboard API
      const el = document.createElement("textarea")
      el.value = url
      document.body.appendChild(el)
      el.select()
      document.execCommand("copy")
      document.body.removeChild(el)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  return (
    <div className="mt-12 pt-8 border-t">
      <h3 className="text-lg font-semibold text-secondary mb-4">Share this article</h3>
      <div className="flex gap-3">
        <Button variant="outline" size="icon" aria-label="Share on Twitter" onClick={shareOnTwitter}>
          <Twitter className="h-4 w-4" />
        </Button>
        <Button variant="outline" size="icon" aria-label="Share on Facebook" onClick={shareOnFacebook}>
          <Facebook className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          aria-label={copied ? "Link copied" : "Copy link"}
          onClick={copyLink}
          className={copied ? "text-green-600 border-green-600" : ""}
        >
          {copied ? <CheckCircle2 className="h-4 w-4" /> : <Share2 className="h-4 w-4" />}
        </Button>
      </div>
    </div>
  )
}
