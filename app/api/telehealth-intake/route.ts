import { NextResponse } from "next/server"
import { telehealthIntakeSchema } from "@/lib/validators"
import { sendAdminNotification, sendUserConfirmation, escapeHtml } from "@/lib/resend"

export async function POST(request: Request) {
  try {
    const body = await request.json()

    const validatedData = telehealthIntakeSchema.parse(body)
    const { firstName, lastName, email, phone, city, state, primaryGoals } = validatedData

    // Send admin notification (non-critical - Resend free tier may restrict recipients)
    try {
      await sendAdminNotification({
        subject: `[HWLF Telehealth] New Intake - ${firstName} ${lastName}`,
        html: `
          <h2>New Telehealth Intake Submission</h2>
          <p><strong>Patient:</strong> ${escapeHtml(firstName)} ${escapeHtml(lastName)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
          <p><strong>Location:</strong> ${escapeHtml(city)}, ${escapeHtml(state)}</p>
          <p><strong>Primary Goals:</strong> ${primaryGoals.map((g) => escapeHtml(g)).join(", ")}</p>
          <hr />
          <p><em>Full patient details are available in the intake form submission. Please review and schedule a consultation.</em></p>
        `,
      })
    } catch (adminError) {
      console.error("Admin notification failed (non-critical):", adminError)
    }

    // Send user confirmation (non-critical - may fail if domain not verified)
    try {
      await sendUserConfirmation({
        to: email,
        subject: "Telehealth Intake Received - HWLF",
        html: `
          <h2>Thank you, ${escapeHtml(firstName)}!</h2>
          <p>We have received your telehealth intake form. Here is what happens next:</p>
          <ol>
            <li>Our clinical team will review your information within 2-3 business days.</li>
            <li>You will receive a call or email to schedule your initial consultation.</li>
            <li>Before your appointment, we may send additional paperwork if needed.</li>
          </ol>
          <p>If you have immediate questions, please call us at <strong>(937) 550-3980</strong>.</p>
          <br />
          <p>Best regards,<br />Healthy Weight Literacy Foundation<br />Telehealth Team</p>
        `,
      })
    } catch (confirmError) {
      console.error("User confirmation email failed (non-critical):", confirmError)
    }

    return NextResponse.json({ ok: true, message: "Intake form submitted successfully" })
  } catch (error) {
    console.error("Telehealth intake error:", error)
    return NextResponse.json(
      { ok: false, message: "Something went wrong. Please try again later." },
      { status: 400 },
    )
  }
}
