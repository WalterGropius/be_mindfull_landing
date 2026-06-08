import { NextResponse } from "next/server"
import { sendMail, escapeHtml, isValidEmail, CONTACT_TO } from "@/lib/mail"

// Sign-ups for the free 4-day course (home page + Start-to-PAUSE page).
// For now every lead is e-mailed to the owner so nothing is lost. Wiring the
// lead into SmartEmailing + the app is the remaining step (needs credentials) —
// see the TODO below.
export async function POST(req: Request) {
  let data: Record<string, unknown>
  try {
    data = await req.json()
  } catch {
    return NextResponse.json({ error: "Neplatný požadavek." }, { status: 400 })
  }

  const firstName = String(data?.firstName ?? "").trim()
  const lastName = String(data?.lastName ?? "").trim()
  const email = String(data?.email ?? "").trim()
  const source = String(data?.source ?? "web").trim()

  if (!email || !isValidEmail(email)) {
    return NextResponse.json({ error: "Zadej prosím platný e-mail." }, { status: 400 })
  }

  // TODO(integration): subscribe { firstName, lastName, email } to the
  // SmartEmailing list for the free 4-day course and create/sync the contact
  // in the app. Requires SmartEmailing API credentials.

  const fullName = [firstName, lastName].filter(Boolean).join(" ")
  const html = `
    <h2>Nová registrace do 4denního kurzu zdarma</h2>
    <p><strong>Jméno:</strong> ${escapeHtml(fullName) || "—"}</p>
    <p><strong>E-mail:</strong> ${escapeHtml(email)}</p>
    <p><strong>Zdroj:</strong> ${escapeHtml(source)}</p>
  `

  try {
    await sendMail({
      to: CONTACT_TO,
      subject: `Nová registrace (4denní kurz): ${fullName || email}`,
      html,
      replyTo: email,
    })
  } catch (err) {
    console.error("[lead] send failed:", err)
    return NextResponse.json(
      { error: "Registraci se nepodařilo odeslat. Zkus to prosím znovu." },
      { status: 500 },
    )
  }

  return NextResponse.json({ ok: true })
}
