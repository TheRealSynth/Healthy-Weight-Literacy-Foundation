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
import { volunteerFormSchema, type VolunteerFormData } from "@/lib/validators"

const volunteerRoles = [
  "Event Support",
  "Program Assistant",
  "Administrative Support",
  "Marketing & Communications",
  "Translation Services",
  "Health Education",
  "Other",
]

const availabilityOptions = [
  "Weekday mornings",
  "Weekday afternoons",
  "Weekday evenings",
  "Weekend mornings",
  "Weekend afternoons",
  "Flexible",
]

export function VolunteerForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [message, setMessage] = useState("")

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<VolunteerFormData>({
    resolver: zodResolver(volunteerFormSchema),
  })

  async function onSubmit(data: VolunteerFormData) {
    setStatus("loading")
    try {
      const response = await fetch("/api/volunteer", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
      const result = await response.json()
      if (result.ok) {
        setStatus("success")
        setMessage("Thank you for your interest in volunteering! We'll be in touch soon.")
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
          <Label htmlFor="firstName">
            First Name <span className="text-danger">*</span>
          </Label>
          <Input id="firstName" {...register("firstName")} aria-invalid={!!errors.firstName} />
          {errors.firstName && <p className="text-sm text-danger">{errors.firstName.message}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="lastName">
            Last Name <span className="text-danger">*</span>
          </Label>
          <Input id="lastName" {...register("lastName")} aria-invalid={!!errors.lastName} />
          {errors.lastName && <p className="text-sm text-danger">{errors.lastName.message}</p>}
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="vol-email">
            Email <span className="text-danger">*</span>
          </Label>
          <Input id="vol-email" type="email" {...register("email")} aria-invalid={!!errors.email} />
          {errors.email && <p className="text-sm text-danger">{errors.email.message}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="vol-phone">
            Phone <span className="text-danger">*</span>
          </Label>
          <Input id="vol-phone" type="tel" {...register("phone")} aria-invalid={!!errors.phone} />
          {errors.phone && <p className="text-sm text-danger">{errors.phone.message}</p>}
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="role">
            Volunteer Role <span className="text-danger">*</span>
          </Label>
          <Select onValueChange={(value) => setValue("role", value)}>
            <SelectTrigger id="role">
              <SelectValue placeholder="Select a role" />
            </SelectTrigger>
            <SelectContent>
              {volunteerRoles.map((role) => (
                <SelectItem key={role} value={role}>
                  {role}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.role && <p className="text-sm text-danger">{errors.role.message}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="availability">
            Availability <span className="text-danger">*</span>
          </Label>
          <Select onValueChange={(value) => setValue("availability", value)}>
            <SelectTrigger id="availability">
              <SelectValue placeholder="Select availability" />
            </SelectTrigger>
            <SelectContent>
              {availabilityOptions.map((option) => (
                <SelectItem key={option} value={option}>
                  {option}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.availability && <p className="text-sm text-danger">{errors.availability.message}</p>}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="experience">Relevant Experience (optional)</Label>
        <Textarea
          id="experience"
          rows={3}
          {...register("experience")}
          placeholder="Tell us about any relevant skills or experience..."
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="motivation">
          Why do you want to volunteer? <span className="text-danger">*</span>
        </Label>
        <Textarea id="motivation" rows={4} {...register("motivation")} aria-invalid={!!errors.motivation} />
        {errors.motivation && <p className="text-sm text-danger">{errors.motivation.message}</p>}
      </div>

      <Button type="submit" disabled={status === "loading"}>
        {status === "loading" ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" aria-hidden="true" />
            Submitting...
          </>
        ) : (
          "Submit Application"
        )}
      </Button>
    </form>
  )
}
