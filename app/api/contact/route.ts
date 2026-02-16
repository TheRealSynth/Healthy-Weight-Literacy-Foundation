import { NextResponse } from "next/server"
import { contactFormSchema } from "@/lib/validators"
import { sendAdminNotification, sendUserConfirmation, escapeHtml } from "@/lib/resend"

export async function POST(request: Request) {
  try {
    const body = await request.json()

    const validatedData = contactFormSchema.parse(body)
    const { name, email, phone, subject, message } = validatedData

    // Send admin notification (non-critical - Resend free tier may restrict recipients)
    try {
      await sendAdminNotification({
        subject: `[HWLF Contact] ${subject}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          ${phone ? `<p><strong>Phone:</strong> ${escapeHtml(phone)}</p>` : ""}
          <p><strong>Subject:</strong> ${escapeHtml(subject)}</p>
          <hr />
          <p><strong>Message:</strong></p>
          <p>${escapeHtml(message).replace(/\n/g, "<br />")}</p>
        `,
      })
    } catch (adminError) {
      console.error("Admin notification failed (non-critical):", adminError)
    }

    // Send user confirmation (non-critical - may fail if domain not verified)
    try {
      await sendUserConfirmation({
        to: email,
        subject: "We received your message - Healthy Weight Literacy Foundation",
        html: `
          <h2>Thank you for contacting us, ${escapeHtml(name)}!</h2>
          <p>We have received your message regarding "<strong>${escapeHtml(subject)}</strong>" and will get back to you within 1-2 business days.</p>
          <p>If your matter is urgent, please call us at <strong>(937) 550-3980</strong>.</p>
          <br />
          <p>Best regards,<br />Healthy Weight Literacy Foundation<br />Dayton, Ohio</p>
        `,
      })
    } catch (confirmError) {
      console.error("User confirmation email failed (non-critical):", confirmError)
    }

    return NextResponse.json({ ok: true, message: "Message received successfully" })
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json(
      { ok: false, message: "Something went wrong. Please try again later." },
      { status: 400 },
    )
  }
}
