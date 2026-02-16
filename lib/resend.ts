import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

const ADMIN_EMAIL = process.env.ADMIN_EMAIL || "info@weightliteracy.org"
const FROM_EMAIL = "Healthy Weight Literacy Foundation <onboarding@resend.dev>"

export async function sendAdminNotification({
  subject,
  html,
}: {
  subject: string
  html: string
}) {
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
