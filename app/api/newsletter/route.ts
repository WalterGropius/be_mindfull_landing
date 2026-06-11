import { NextResponse } from "next/server"
import { sendMail, escapeHtml, isValidEmail, CONTACT_TO } from "@/lib/mail"

// Newsletter sign-up from the site footer. Every sign-up is e-mailed to the
// owner so nothing is lost until the mailing-list integration is in place.
//
// TODO(integration): subscribe { email } to the SmartEmailing newsletter list
// instead of (or in addition to) the notification e-mail. Requires
// SmartEmailing API credentials.
export async function POST(req: Request) {
  let data: Record<string, unknown>
  try {
    data = await req.json()
  } catch {
    return NextResponse.json({ error: "Neplatný požadavek." }, { status: 400 })
  }

  const email = String(data?.email ?? "").trim()

  if (!email || !isValidEmail(email)) {
    return NextResponse.json({ error: "Zadej prosím platný e-mail." }, { status: 400 })
  }

  const html = `
    <h2>Nové přihlášení k odběru newsletteru</h2>
    <p><strong>E-mail:</strong> ${escapeHtml(email)}</p>
    <p><strong>Zdroj:</strong> patička webu</p>
  `

  try {
    await sendMail({
      to: CONTACT_TO,
      subject: `Nový odběratel newsletteru: ${email}`,
      html,
      replyTo: email,
    })
  } catch (err) {
    console.error("[newsletter] send failed:", err)
    return NextResponse.json(
      { error: "Přihlášení se nepodařilo odeslat. Zkus to prosím znovu." },
      { status: 500 },
    )
  }

  return NextResponse.json({ ok: true })
}
