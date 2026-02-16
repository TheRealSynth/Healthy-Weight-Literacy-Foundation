import { NextResponse } from "next/server"
import { volunteerFormSchema } from "@/lib/validators"
import { sendAdminNotification, sendUserConfirmation, escapeHtml } from "@/lib/resend"

export async function POST(request: Request) {
  try {
    const body = await request.json()

    const validatedData = volunteerFormSchema.parse(body)
    const { firstName, lastName, email, phone, role, availability, experience, motivation } = validatedData

    // Send admin notification (non-critical - Resend free tier may restrict recipients)
    try {
      await sendAdminNotification({
        subject: `[HWLF Volunteer] New Application - ${firstName} ${lastName}`,
        html: `
          <h2>New Volunteer Application</h2>
          <p><strong>Name:</strong> ${escapeHtml(firstName)} ${escapeHtml(lastName)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
          <p><strong>Preferred Role:</strong> ${escapeHtml(role)}</p>
          <p><strong>Availability:</strong> ${escapeHtml(availability)}</p>
          ${experience ? `<p><strong>Experience:</strong> ${escapeHtml(experience)}</p>` : ""}
          <hr />
          <p><strong>Motivation:</strong></p>
          <p>${escapeHtml(motivation).replace(/\n/g, "<br />")}</p>
        `,
      })
    } catch (adminError) {
      console.error("Admin notification failed (non-critical):", adminError)
    }

    // Send user confirmation (non-critical - may fail if domain not verified)
    try {
      await sendUserConfirmation({
        to: email,
        subject: "Volunteer Application Received - HWLF",
        html: `
          <h2>Thank you for volunteering, ${escapeHtml(firstName)}!</h2>
          <p>We have received your application for the <strong>${escapeHtml(role)}</strong> role and are excited about your interest in joining our team.</p>
          <p>Our volunteer coordinator will review your application and contact you within 3-5 business days to discuss next steps.</p>
          <p>In the meantime, learn more about our programs at <a href="https://weightliteracy.org/programs">weightliteracy.org/programs</a>.</p>
          <br />
          <p>Best regards,<br />Healthy Weight Literacy Foundation<br />Volunteer Team</p>
        `,
      })
    } catch (confirmError) {
      console.error("User confirmation email failed (non-critical):", confirmError)
    }

    return NextResponse.json({ ok: true, message: "Volunteer application received successfully" })
  } catch (error) {
    console.error("Volunteer form error:", error)
    return NextResponse.json(
      { ok: false, message: "Something went wrong. Please try again later." },
      { status: 400 },
    )
  }
}
