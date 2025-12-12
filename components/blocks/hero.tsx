"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

interface HeroProps {
  title: string
  subtitle: string
  primaryCTA: { label: string; href: string }
  secondaryCTA?: { label: string; href: string }
  backgroundImage?: string
}

export function Hero({
  title,
  subtitle,
  primaryCTA,
  secondaryCTA,
  backgroundImage = "/diverse-healthy-community-wellness.jpg",
}: HeroProps) {
  return (
    <section className="relative min-h-[600px] lg:min-h-[700px] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={backgroundImage || "/placeholder.svg"}
          alt="Diverse community members engaging in healthy activities"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 hero-gradient" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl text-balance">{title}</h1>
          <p className="mt-6 text-lg sm:text-xl text-white/90 max-w-2xl text-pretty">{subtitle}</p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link href={primaryCTA.href}>
              <Button
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent-hover font-semibold text-base px-8"
              >
                {primaryCTA.label}
                <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
              </Button>
            </Link>
            {secondaryCTA && (
              <Link href={secondaryCTA.href}>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white/10 text-white border-white/30 hover:bg-white/20 font-semibold text-base px-8"
                >
                  {secondaryCTA.label}
                </Button>
              </Link>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
