import { Resend } from "resend"

const ADMIN_EMAIL = process.env.ADMIN_EMAIL || "info@weightliteracy.org"
const FROM_EMAIL = "Healthy Weight Literacy Foundation <onboarding@resend.dev>"

// Create Resend client at runtime, not module scope
// This prevents build-time crashes when RESEND_API_KEY is missing
function getResendClient() {
  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    throw new Error("RESEND_API_KEY is not configured. Email functionality is unavailable.")
  }
  return new Resend(apiKey)
}

export async function sendAdminNotification({
  subject,
  html,
}: {
  subject: string
  html: string
}) {
  const resend = getResendClient()
  return resend.emails.send({
    from: FROM_EMAIL,
    to: [ADMIN_EMAIL],
    subject,
    html,
  })
}

export async function sendUserConfirmation({
  to,
  subject,
  html,
}: {
  to: string
  subject: string
  html: string
}) {
  const resend = getResendClient()
  return resend.emails.send({
    from: FROM_EMAIL,
    to: [to],
    subject,
    html,
  })
}

export function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;")
}
