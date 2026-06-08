// Minimal server-side email sender backed by the Resend REST API.
// No SDK dependency — just fetch — so it's trivial to swap for SMTP later.
//
// Configure via environment variables (see .env.example):
//   RESEND_API_KEY  – required, from https://resend.com
//   MAIL_FROM       – verified sender, e.g. "Be Mindful <noreply@bemindful.cz>"
//   CONTACT_TO      – inbox that receives form submissions (default info@bemindful.cz)

export const CONTACT_TO = process.env.CONTACT_TO || "info@bemindful.cz"
const MAIL_FROM = process.env.MAIL_FROM || "Be Mindful <noreply@bemindful.cz>"

interface SendMailOptions {
  to?: string
  subject: string
  html: string
  replyTo?: string
}

export async function sendMail({ to = CONTACT_TO, subject, html, replyTo }: SendMailOptions) {
  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    throw new Error("RESEND_API_KEY is not configured")
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: MAIL_FROM,
      to: [to],
      subject,
      html,
      ...(replyTo ? { reply_to: replyTo } : {}),
    }),
  })

  if (!res.ok) {
    const detail = await res.text().catch(() => "")
    throw new Error(`Resend API error ${res.status}: ${detail}`)
  }

  return res.json()
}

// Escape user-supplied text before embedding it in an HTML email.
export function escapeHtml(input: string): string {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
}

// Basic e-mail shape check, shared by the form route handlers.
export function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}
