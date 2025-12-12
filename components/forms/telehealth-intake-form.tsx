"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Loader2, CheckCircle2, AlertCircle, ChevronLeft, ChevronRight } from "lucide-react"
import { telehealthIntakeSchema, type TelehealthIntakeData } from "@/lib/validators"
import { cn } from "@/lib/utils"

const steps = [
  { id: 1, title: "Personal Information" },
  { id: 2, title: "Health Goals" },
  { id: 3, title: "Health History" },
  { id: 4, title: "Payment" },
  { id: 5, title: "Consent & Review" },
]

const states = [
  "AL",
  "AK",
  "AZ",
  "AR",
  "CA",
  "CO",
  "CT",
  "DE",
  "FL",
  "GA",
  "HI",
  "ID",
  "IL",
  "IN",
  "IA",
  "KS",
  "KY",
  "LA",
  "ME",
  "MD",
  "MA",
  "MI",
  "MN",
  "MS",
  "MO",
  "MT",
  "NE",
  "NV",
  "NH",
  "NJ",
  "NM",
  "NY",
  "NC",
  "ND",
  "OH",
  "OK",
  "OR",
  "PA",
  "RI",
  "SC",
  "SD",
  "TN",
  "TX",
  "UT",
  "VT",
  "VA",
  "WA",
  "WV",
  "WI",
  "WY",
]

const goalOptions = [
  "Weight loss",
  "Weight maintenance",
  "Improved nutrition",
  "Increased physical activity",
  "Better relationship with food",
  "Managing a health condition",
  "Family wellness",
]

const conditionOptions = [
  "Diabetes or pre-diabetes",
  "High blood pressure",
  "Heart disease",
  "Sleep apnea",
  "Joint pain/arthritis",
  "Thyroid condition",
  "Mental health condition",
  "None of the above",
]

export function TelehealthIntakeForm() {
  const [currentStep, setCurrentStep] = useState(1)
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [message, setMessage] = useState("")

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    trigger,
    formState: { errors },
  } = useForm<TelehealthIntakeData>({
    resolver: zodResolver(telehealthIntakeSchema),
    defaultValues: {
      primaryGoals: [],
      medicalConditions: [],
      paymentMethod: "insurance",
      consentToTreatment: false,
      consentToPrivacy: false,
      consentToContact: false,
    },
  })

  const watchedGoals = watch("primaryGoals")
  const watchedConditions = watch("medicalConditions")
  const paymentMethod = watch("paymentMethod")

  async function onSubmit(data: TelehealthIntakeData) {
    setStatus("loading")
    try {
      const response = await fetch("/api/telehealth-intake", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
      const result = await response.json()
      if (result.ok) {
        setStatus("success")
        setMessage(
          "Your intake form has been submitted successfully! Our care team will contact you within 24-48 hours to schedule your first appointment.",
        )
      } else {
        throw new Error(result.message)
      }
    } catch {
      setStatus("error")
      setMessage("Something went wrong. Please try again later.")
    }
  }

  async function nextStep() {
    let fieldsToValidate: (keyof TelehealthIntakeData)[] = []

    switch (currentStep) {
      case 1:
        fieldsToValidate = [
          "firstName",
          "lastName",
          "email",
          "phone",
          "dateOfBirth",
          "address",
          "city",
          "state",
          "zipCode",
        ]
        break
      case 2:
        fieldsToValidate = ["primaryGoals"]
        break
      case 3:
        fieldsToValidate = []
        break
      case 4:
        fieldsToValidate = ["paymentMethod"]
        break
    }

    const isValid = await trigger(fieldsToValidate)
    if (isValid) {
      setCurrentStep((prev) => Math.min(prev + 1, 5))
    }
  }

  function prevStep() {
    setCurrentStep((prev) => Math.max(prev - 1, 1))
  }

  if (status === "success") {
    return (
      <Card>
        <CardContent className="pt-6">
          <div className="text-center py-8">
            <div className="mx-auto w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mb-4">
              <CheckCircle2 className="h-8 w-8 text-success" />
            </div>
            <h3 className="text-xl font-semibold text-secondary mb-2">Submission Successful!</h3>
            <p className="text-muted-foreground max-w-md mx-auto">{message}</p>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Telehealth Intake Form</CardTitle>
        <CardDescription>Complete this form to begin your telehealth wellness journey.</CardDescription>

        {/* Progress Steps */}
        <div className="flex items-center justify-between mt-6">
          {steps.map((step, index) => (
            <div key={step.id} className="flex items-center">
              <div
                className={cn(
                  "w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium",
                  currentStep === step.id
                    ? "bg-primary text-primary-foreground"
                    : currentStep > step.id
                      ? "bg-success text-success-foreground"
                      : "bg-muted text-muted-foreground",
                )}
              >
                {currentStep > step.id ? "✓" : step.id}
              </div>
              {index < steps.length - 1 && (
                <div className={cn("w-12 h-0.5 mx-1", currentStep > step.id ? "bg-success" : "bg-muted")} />
              )}
            </div>
          ))}
        </div>
        <p className="text-sm text-muted-foreground mt-2">
          Step {currentStep}: {steps[currentStep - 1].title}
        </p>
      </CardHeader>

      <CardContent>
        {status === "error" && (
          <Alert variant="destructive" className="mb-6">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>{message}</AlertDescription>
          </Alert>
        )}

        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Step 1: Personal Information */}
          {currentStep === 1 && (
            <div className="space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name *</Label>
                  <Input id="firstName" {...register("firstName")} />
                  {errors.firstName && <p className="text-sm text-danger">{errors.firstName.message}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name *</Label>
                  <Input id="lastName" {...register("lastName")} />
                  {errors.lastName && <p className="text-sm text-danger">{errors.lastName.message}</p>}
                </div>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="intake-email">Email *</Label>
                  <Input id="intake-email" type="email" {...register("email")} />
                  {errors.email && <p className="text-sm text-danger">{errors.email.message}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="intake-phone">Phone *</Label>
                  <Input id="intake-phone" type="tel" {...register("phone")} />
                  {errors.phone && <p className="text-sm text-danger">{errors.phone.message}</p>}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="dateOfBirth">Date of Birth *</Label>
                <Input id="dateOfBirth" type="date" {...register("dateOfBirth")} />
                {errors.dateOfBirth && <p className="text-sm text-danger">{errors.dateOfBirth.message}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="address">Street Address *</Label>
                <Input id="address" {...register("address")} />
                {errors.address && <p className="text-sm text-danger">{errors.address.message}</p>}
              </div>

              <div className="grid gap-6 sm:grid-cols-3">
                <div className="space-y-2">
                  <Label htmlFor="city">City *</Label>
                  <Input id="city" {...register("city")} />
                  {errors.city && <p className="text-sm text-danger">{errors.city.message}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="state">State *</Label>
                  <Select onValueChange={(value) => setValue("state", value)}>
                    <SelectTrigger id="state">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      {states.map((state) => (
                        <SelectItem key={state} value={state}>
                          {state}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.state && <p className="text-sm text-danger">{errors.state.message}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="zipCode">ZIP Code *</Label>
                  <Input id="zipCode" {...register("zipCode")} />
                  {errors.zipCode && <p className="text-sm text-danger">{errors.zipCode.message}</p>}
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Health Goals */}
          {currentStep === 2 && (
            <div className="space-y-6">
              <div className="space-y-4">
                <Label>What are your primary health goals? (Select all that apply) *</Label>
                <div className="grid gap-3 sm:grid-cols-2">
                  {goalOptions.map((goal) => (
                    <div key={goal} className="flex items-center space-x-2">
                      <Checkbox
                        id={goal}
                        checked={watchedGoals?.includes(goal)}
                        onCheckedChange={(checked) => {
                          const current = watchedGoals || []
                          if (checked) {
                            setValue("primaryGoals", [...current, goal])
                          } else {
                            setValue(
                              "primaryGoals",
                              current.filter((g) => g !== goal),
                            )
                          }
                        }}
                      />
                      <Label htmlFor={goal} className="font-normal">
                        {goal}
                      </Label>
                    </div>
                  ))}
                </div>
                {errors.primaryGoals && <p className="text-sm text-danger">{errors.primaryGoals.message}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="otherGoals">Other goals or notes (optional)</Label>
                <Textarea
                  id="otherGoals"
                  {...register("otherGoals")}
                  placeholder="Share any additional goals or information..."
                />
              </div>
            </div>
          )}

          {/* Step 3: Health History */}
          {currentStep === 3 && (
            <div className="space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="currentWeight">Current Weight (optional)</Label>
                  <Input id="currentWeight" {...register("currentWeight")} placeholder="e.g., 180 lbs" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="height">Height (optional)</Label>
                  <Input id="height" {...register("height")} placeholder="e.g., 5 ft 8 in" />
                </div>
              </div>

              <div className="space-y-4">
                <Label>Do you have any of the following conditions? (Select all that apply)</Label>
                <div className="grid gap-3 sm:grid-cols-2">
                  {conditionOptions.map((condition) => (
                    <div key={condition} className="flex items-center space-x-2">
                      <Checkbox
                        id={condition}
                        checked={watchedConditions?.includes(condition)}
                        onCheckedChange={(checked) => {
                          const current = watchedConditions || []
                          if (checked) {
                            setValue("medicalConditions", [...current, condition])
                          } else {
                            setValue(
                              "medicalConditions",
                              current.filter((c) => c !== condition),
                            )
                          }
                        }}
                      />
                      <Label htmlFor={condition} className="font-normal">
                        {condition}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="medications">Current medications (optional)</Label>
                <Textarea
                  id="medications"
                  {...register("medications")}
                  placeholder="List any medications you're currently taking..."
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="allergies">Allergies (optional)</Label>
                <Input id="allergies" {...register("allergies")} placeholder="Food or medication allergies" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="previousPrograms">Previous weight management programs (optional)</Label>
                <Textarea
                  id="previousPrograms"
                  {...register("previousPrograms")}
                  placeholder="Describe any programs you've tried in the past..."
                />
              </div>
            </div>
          )}

          {/* Step 4: Payment */}
          {currentStep === 4 && (
            <div className="space-y-6">
              <div className="space-y-4">
                <Label>Payment Method *</Label>
                <RadioGroup
                  defaultValue="insurance"
                  onValueChange={(value) => setValue("paymentMethod", value as "insurance" | "self-pay")}
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="insurance" id="insurance" />
                    <Label htmlFor="insurance" className="font-normal">
                      Insurance
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="self-pay" id="self-pay" />
                    <Label htmlFor="self-pay" className="font-normal">
                      Self-Pay
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              {paymentMethod === "insurance" && (
                <div className="space-y-6 p-4 bg-muted rounded-lg">
                  <div className="space-y-2">
                    <Label htmlFor="insuranceProvider">Insurance Provider</Label>
                    <Input
                      id="insuranceProvider"
                      {...register("insuranceProvider")}
                      placeholder="e.g., Blue Cross Blue Shield"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="insuranceId">Member ID</Label>
                    <Input id="insuranceId" {...register("insuranceId")} />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    We'll verify your coverage and contact you with details about any costs.
                  </p>
                </div>
              )}

              {paymentMethod === "self-pay" && (
                <div className="p-4 bg-muted rounded-lg">
                  <h4 className="font-medium mb-2">Self-Pay Options</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Initial consultation: $75</li>
                    <li>• Follow-up sessions: $50 each</li>
                    <li>• Package of 6 sessions: $250 (save $50)</li>
                  </ul>
                  <p className="text-sm text-muted-foreground mt-3">
                    Payment will be collected at the time of your appointment.
                  </p>
                </div>
              )}
            </div>
          )}

          {/* Step 5: Consent */}
          {currentStep === 5 && (
            <div className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-start space-x-3 p-4 border rounded-lg">
                  <Checkbox
                    id="consentToTreatment"
                    checked={watch("consentToTreatment")}
                    onCheckedChange={(checked) => setValue("consentToTreatment", checked as boolean)}
                  />
                  <div>
                    <Label htmlFor="consentToTreatment" className="font-medium">
                      Consent to Treatment *
                    </Label>
                    <p className="text-sm text-muted-foreground mt-1">
                      I consent to receive telehealth wellness services from HWLF. I understand that telehealth involves
                      the use of electronic communications to enable healthcare providers to deliver services remotely.
                    </p>
                  </div>
                </div>
                {errors.consentToTreatment && (
                  <p className="text-sm text-danger">{errors.consentToTreatment.message}</p>
                )}

                <div className="flex items-start space-x-3 p-4 border rounded-lg">
                  <Checkbox
                    id="consentToPrivacy"
                    checked={watch("consentToPrivacy")}
                    onCheckedChange={(checked) => setValue("consentToPrivacy", checked as boolean)}
                  />
                  <div>
                    <Label htmlFor="consentToPrivacy" className="font-medium">
                      Privacy Policy Acknowledgment *
                    </Label>
                    <p className="text-sm text-muted-foreground mt-1">
                      I have read and understand the{" "}
                      <a href="/privacy" className="text-primary underline">
                        Privacy Policy
                      </a>
                      . I understand how my health information will be used and protected.
                    </p>
                  </div>
                </div>
                {errors.consentToPrivacy && <p className="text-sm text-danger">{errors.consentToPrivacy.message}</p>}

                <div className="flex items-start space-x-3 p-4 border rounded-lg">
                  <Checkbox
                    id="consentToContact"
                    checked={watch("consentToContact")}
                    onCheckedChange={(checked) => setValue("consentToContact", checked as boolean)}
                  />
                  <div>
                    <Label htmlFor="consentToContact" className="font-medium">
                      Communication Consent *
                    </Label>
                    <p className="text-sm text-muted-foreground mt-1">
                      I consent to be contacted via email, phone, and/or text message regarding my care and
                      appointments.
                    </p>
                  </div>
                </div>
                {errors.consentToContact && <p className="text-sm text-danger">{errors.consentToContact.message}</p>}
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8 pt-6 border-t">
            <Button type="button" variant="outline" onClick={prevStep} disabled={currentStep === 1}>
              <ChevronLeft className="mr-2 h-4 w-4" />
              Previous
            </Button>

            {currentStep < 5 ? (
              <Button type="button" onClick={nextStep}>
                Next
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            ) : (
              <Button type="submit" disabled={status === "loading"}>
                {status === "loading" ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  "Submit Intake Form"
                )}
              </Button>
            )}
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
