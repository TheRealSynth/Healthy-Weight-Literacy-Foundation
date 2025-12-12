import type React from "react"
import { cn } from "@/lib/utils"

interface ContainerProps {
  children: React.ReactNode
  className?: string
  size?: "default" | "sm" | "lg" | "xl"
}

export function Container({ children, className, size = "default" }: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto px-4 sm:px-6 lg:px-8",
        size === "sm" && "max-w-4xl",
        size === "default" && "max-w-7xl",
        size === "lg" && "max-w-[1400px]",
        size === "xl" && "max-w-[1600px]",
        className,
      )}
    >
      {children}
    </div>
  )
}
