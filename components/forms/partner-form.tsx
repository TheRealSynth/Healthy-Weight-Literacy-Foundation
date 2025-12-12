"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react"
import { partnerFormSchema, type PartnerFormData } from "@/lib/validators"

const organizationTypes = [
  "Healthcare Provider",
  "School/Educational Institution",
  "Community Organization",
  "Corporate/Business",
  "Government Agency",
  "Faith-Based Organization",
  "Other Nonprofit",
]

const partnershipTypes = [
  "Program Hosting",
  "Funding/Sponsorship",
  "In-Kind Support",
  "Referral Partnership",
  "Research Collaboration",
  "Employee Wellness",
  "Other",
]

export function PartnerForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [message, setMessage] = useState("")

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<PartnerFormData>({
    resolver: zodResolver(partnerFormSchema),
  })

  async function onSubmit(data: PartnerFormData) {
    setStatus("loading")
    try {
      const response = await fetch("/api/partner", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
      const result = await response.json()
      if (result.ok) {
        setStatus("success")
        setMessage("Thank you for your partnership interest! Our team will reach out within 3 business days.")
        reset()
      } else {
        throw new Error(result.message)
      }
    } catch {
      setStatus("error")
      setMessage("Something went wrong. Please try again later.")
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {status === "success" && (
        <Alert className="bg-success/10 border-success text-success">
          <CheckCircle2 className="h-4 w-4" />
          <AlertDescription>{message}</AlertDescription>
        </Alert>
      )}
      {status === "error" && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>{message}</AlertDescription>
        </Alert>
      )}

      <div className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="organizationName">
            Organization Name <span className="text-danger">*</span>
          </Label>
          <Input id="organizationName" {...register("organizationName")} aria-invalid={!!errors.organizationName} />
          {errors.organizationName && <p className="text-sm text-danger">{errors.organizationName.message}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="organizationType">
            Organization Type <span className="text-danger">*</span>
          </Label>
          <Select onValueChange={(value) => setValue("organizationType", value)}>
            <SelectTrigger id="organizationType">
              <SelectValue placeholder="Select type" />
            </SelectTrigger>
            <SelectContent>
              {organizationTypes.map((type) => (
                <SelectItem key={type} value={type}>
                  {type}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.organizationType && <p className="text-sm text-danger">{errors.organizationType.message}</p>}
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="contactName">
            Contact Name <span className="text-danger">*</span>
          </Label>
          <Input id="contactName" {...register("contactName")} aria-invalid={!!errors.contactName} />
          {errors.contactName && <p className="text-sm text-danger">{errors.contactName.message}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="partner-email">
            Email <span className="text-danger">*</span>
          </Label>
          <Input id="partner-email" type="email" {...register("email")} aria-invalid={!!errors.email} />
          {errors.email && <p className="text-sm text-danger">{errors.email.message}</p>}
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="partner-phone">
            Phone <span className="text-danger">*</span>
          </Label>
          <Input id="partner-phone" type="tel" {...register("phone")} aria-invalid={!!errors.phone} />
          {errors.phone && <p className="text-sm text-danger">{errors.phone.message}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="website">Website (optional)</Label>
          <Input id="website" type="url" {...register("website")} placeholder="https://" />
          {errors.website && <p className="text-sm text-danger">{errors.website.message}</p>}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="partnershipType">
          Partnership Interest <span className="text-danger">*</span>
        </Label>
        <Select onValueChange={(value) => setValue("partnershipType", value)}>
          <SelectTrigger id="partnershipType">
            <SelectValue placeholder="Select partnership type" />
          </SelectTrigger>
          <SelectContent>
            {partnershipTypes.map((type) => (
              <SelectItem key={type} value={type}>
                {type}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {errors.partnershipType && <p className="text-sm text-danger">{errors.partnershipType.message}</p>}
      </div>

      <div className="space-y-2">
        <Label htmlFor="description">
          Tell us about your organization <span className="text-danger">*</span>
        </Label>
        <Textarea
          id="description"
          rows={4}
          {...register("description")}
          aria-invalid={!!errors.description}
          placeholder="Describe your organization and how you envision partnering with us..."
        />
        {errors.description && <p className="text-sm text-danger">{errors.description.message}</p>}
      </div>

      <Button type="submit" disabled={status === "loading"}>
        {status === "loading" ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" aria-hidden="true" />
            Submitting...
          </>
        ) : (
          "Submit Partnership Inquiry"
        )}
      </Button>
    </form>
  )
}
