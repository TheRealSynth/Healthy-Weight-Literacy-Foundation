import { NextResponse } from "next/server"
import { newsletterFormSchema } from "@/lib/validators"
import { sendAdminNotification, sendUserConfirmation, escapeHtml } from "@/lib/resend"

export async function POST(request: Request) {
  try {
    const body = await request.json()

    const validatedData = newsletterFormSchema.parse(body)
    const { email } = validatedData

    // Send admin notification (non-critical - Resend free tier may restrict recipients)
    try {
      await sendAdminNotification({
        subject: "[HWLF Newsletter] New Subscriber",
        html: `
          <h2>New Newsletter Subscriber</h2>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p><em>Subscribed on ${new Date().toLocaleDateString("en-US", { timeZone: "America/New_York" })}</em></p>
        `,
      })
    } catch (adminError) {
      console.error("Admin notification failed (non-critical):", adminError)
    }

    // Send user confirmation (non-critical - may fail if domain not verified in Resend)
    try {
      await sendUserConfirmation({
        to: email,
        subject: "Welcome to the HWLF Newsletter!",
        html: `
          <h2>Welcome to the Healthy Weight Literacy Foundation Newsletter!</h2>
          <p>Thank you for subscribing. You will receive updates on:</p>
          <ul>
            <li>Educational resources and articles</li>
            <li>Upcoming community events</li>
            <li>New programs and services</li>
            <li>Health tips and wellness information</li>
          </ul>
          <p>Visit our website at <a href="https://weightliteracy.org">weightliteracy.org</a> for the latest resources.</p>
          <br />
          <p>Best regards,<br />Healthy Weight Literacy Foundation</p>
        `,
      })
    } catch (confirmError) {
      console.error("User confirmation email failed (non-critical):", confirmError)
    }

    return NextResponse.json({ ok: true, message: "Successfully subscribed to newsletter" })
  } catch (error) {
    console.error("Newsletter signup error:", error)
    return NextResponse.json(
      { ok: false, message: "Something went wrong. Please try again later." },
      { status: 400 },
    )
  }
}
