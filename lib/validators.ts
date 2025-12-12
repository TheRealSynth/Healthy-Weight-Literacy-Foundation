import { z } from "zod"

export const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(20, "Message must be at least 20 characters"),
})

export const newsletterFormSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  consent: z.boolean().refine((val) => val === true, {
    message: "You must consent to receive emails",
  }),
})

export const volunteerFormSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  role: z.string().min(1, "Please select a volunteer role"),
  availability: z.string().min(1, "Please select your availability"),
  experience: z.string().optional(),
  motivation: z.string().min(20, "Please tell us more about your motivation"),
})

export const partnerFormSchema = z.object({
  organizationName: z.string().min(2, "Organization name must be at least 2 characters"),
  organizationType: z.string().min(1, "Please select organization type"),
  contactName: z.string().min(2, "Contact name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  website: z.string().url("Please enter a valid URL").optional().or(z.literal("")),
  partnershipType: z.string().min(1, "Please select partnership type"),
  description: z.string().min(20, "Please provide more details about your organization"),
})

export const telehealthIntakeSchema = z.object({
  // Demographics
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  dateOfBirth: z.string().min(1, "Please enter your date of birth"),
  address: z.string().min(5, "Please enter your address"),
  city: z.string().min(2, "Please enter your city"),
  state: z.string().min(2, "Please select your state"),
  zipCode: z.string().min(5, "Please enter a valid zip code"),

  // Goals
  primaryGoals: z.array(z.string()).min(1, "Please select at least one goal"),
  otherGoals: z.string().optional(),

  // Health Information
  currentWeight: z.string().optional(),
  height: z.string().optional(),
  medicalConditions: z.array(z.string()).optional(),
  medications: z.string().optional(),
  allergies: z.string().optional(),
  previousPrograms: z.string().optional(),

  // Insurance
  paymentMethod: z.enum(["insurance", "self-pay"]),
  insuranceProvider: z.string().optional(),
  insuranceId: z.string().optional(),

  // Consent
  consentToTreatment: z.boolean().refine((val) => val === true, {
    message: "You must consent to treatment",
  }),
  consentToPrivacy: z.boolean().refine((val) => val === true, {
    message: "You must acknowledge the privacy policy",
  }),
  consentToContact: z.boolean().refine((val) => val === true, {
    message: "You must consent to be contacted",
  }),
})

export type ContactFormData = z.infer<typeof contactFormSchema>
export type NewsletterFormData = z.infer<typeof newsletterFormSchema>
export type VolunteerFormData = z.infer<typeof volunteerFormSchema>
export type PartnerFormData = z.infer<typeof partnerFormSchema>
export type TelehealthIntakeData = z.infer<typeof telehealthIntakeSchema>
