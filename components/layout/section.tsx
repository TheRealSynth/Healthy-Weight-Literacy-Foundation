import type React from "react"
import { cn } from "@/lib/utils"

interface SectionProps {
  children: React.ReactNode
  className?: string
  id?: string
  background?: "default" | "muted" | "primary" | "gradient"
}

export function Section({ children, className, id, background = "default" }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "py-16 sm:py-20 lg:py-24",
        background === "muted" && "bg-muted",
        background === "primary" && "bg-primary-soft",
        background === "gradient" && "hero-gradient text-white",
        className,
      )}
    >
      {children}
    </section>
  )
}
