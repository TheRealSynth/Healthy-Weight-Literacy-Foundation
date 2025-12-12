"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Loader2, CheckCircle2 } from "lucide-react"
import { newsletterFormSchema, type NewsletterFormData } from "@/lib/validators"
import { cn } from "@/lib/utils"

interface NewsletterFormProps {
  variant?: "default" | "footer"
}

export function NewsletterForm({ variant = "default" }: NewsletterFormProps) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    watch,
    formState: { errors },
  } = useForm<NewsletterFormData>({
    resolver: zodResolver(newsletterFormSchema),
    defaultValues: { consent: false },
  })

  const consent = watch("consent")

  async function onSubmit(data: NewsletterFormData) {
    setStatus("loading")
    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
      const result = await response.json()
      if (result.ok) {
        setStatus("success")
        reset()
      } else {
        throw new Error(result.message)
      }
    } catch {
      setStatus("error")
    }
  }

  if (status === "success") {
    return (
      <div
        className={cn("flex items-center gap-2", variant === "footer" ? "text-secondary-foreground" : "text-success")}
      >
        <CheckCircle2 className="h-5 w-5" />
        <span>Thanks for subscribing!</span>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className={cn("flex gap-2", variant === "footer" ? "flex-col sm:flex-row" : "")}>
        <Input
          type="email"
          placeholder="Enter your email"
          {...register("email")}
          aria-invalid={!!errors.email}
          className={cn(
            variant === "footer" &&
              "bg-secondary-soft/10 border-secondary-foreground/20 text-secondary-foreground placeholder:text-secondary-foreground/50",
          )}
        />
        <Button
          type="submit"
          disabled={status === "loading"}
          className={cn(variant === "footer" && "bg-primary hover:bg-primary/90")}
        >
          {status === "loading" ? <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" /> : "Subscribe"}
        </Button>
      </div>
      {errors.email && (
        <p className={cn("text-sm", variant === "footer" ? "text-warning" : "text-danger")}>{errors.email.message}</p>
      )}

      <div className="flex items-start gap-2">
        <Checkbox
          id="newsletter-consent"
          checked={consent}
          onCheckedChange={(checked) => setValue("consent", checked as boolean)}
          className={variant === "footer" ? "border-secondary-foreground/40" : ""}
        />
        <Label
          htmlFor="newsletter-consent"
          className={cn(
            "text-xs leading-tight",
            variant === "footer" ? "text-secondary-foreground/70" : "text-muted-foreground",
          )}
        >
          I agree to receive health tips and updates. Unsubscribe anytime.
        </Label>
      </div>
      {errors.consent && (
        <p className={cn("text-sm", variant === "footer" ? "text-warning" : "text-danger")}>{errors.consent.message}</p>
      )}
    </form>
  )
}
