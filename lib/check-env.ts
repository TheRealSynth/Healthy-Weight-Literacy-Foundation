/**
 * Check required environment variables are set.
 * Logs warnings in development if missing.
 */
export function checkRequiredEnvVars() {
  const required: Record<string, string | undefined> = {
    "GA4 Analytics": process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID,
    "Resend Email": process.env.RESEND_API_KEY,
  }

  const missing: string[] = []

  Object.entries(required).forEach(([name, value]) => {
    if (!value) {
      missing.push(name)
    }
  })

  if (missing.length > 0) {
    console.warn("Missing required environment variables:", missing.join(", "))
    console.warn("Some features may not work correctly.")
  }
}
