import { NextResponse } from "next/server"
import { partnerFormSchema } from "@/lib/validators"
import { sendAdminNotification, sendUserConfirmation, escapeHtml } from "@/lib/resend"

export async function POST(request: Request) {
  try {
    const body = await request.json()

    const validatedData = partnerFormSchema.parse(body)
    const {
      organizationName,
      organizationType,
      contactName,
      email,
      phone,
      website,
      partnershipType,
      description,
    } = validatedData

    // Send admin notification (non-critical - Resend free tier may restrict recipients)
    try {
      await sendAdminNotification({
        subject: `[HWLF Partner] New Inquiry - ${organizationName}`,
        html: `
          <h2>New Partnership Inquiry</h2>
          <p><strong>Organization:</strong> ${escapeHtml(organizationName)}</p>
          <p><strong>Type:</strong> ${escapeHtml(organizationType)}</p>
          <p><strong>Contact:</strong> ${escapeHtml(contactName)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
          ${website ? `<p><strong>Website:</strong> ${escapeHtml(website)}</p>` : ""}
          <p><strong>Partnership Type:</strong> ${escapeHtml(partnershipType)}</p>
          <hr />
          <p><strong>Description:</strong></p>
          <p>${escapeHtml(description).replace(/\n/g, "<br />")}</p>
        `,
      })
    } catch (adminError) {
      console.error("Admin notification failed (non-critical):", adminError)
    }

    // Send user confirmation (non-critical - may fail if domain not verified)
    try {
      await sendUserConfirmation({
        to: email,
        subject: "Partnership Inquiry Received - HWLF",
        html: `
          <h2>Thank you for your partnership interest, ${escapeHtml(contactName)}!</h2>
          <p>We have received the partnership inquiry from <strong>${escapeHtml(organizationName)}</strong> and are excited about the potential collaboration.</p>
          <p>A member of our partnerships team will review your inquiry and reach out within 5-7 business days to discuss opportunities.</p>
          <p>Learn more about our impact at <a href="https://weightliteracy.org/impact">weightliteracy.org/impact</a>.</p>
          <br />
          <p>Best regards,<br />Healthy Weight Literacy Foundation<br />Partnerships Team</p>
        `,
      })
    } catch (confirmError) {
      console.error("User confirmation email failed (non-critical):", confirmError)
    }

    return NextResponse.json({ ok: true, message: "Partnership inquiry received successfully" })
  } catch (error) {
    console.error("Partner form error:", error)
    return NextResponse.json(
      { ok: false, message: "Something went wrong. Please try again later." },
      { status: 400 },
    )
  }
}
