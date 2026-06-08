import { NextResponse } from "next/server"
import { sendMail, escapeHtml, isValidEmail, CONTACT_TO } from "@/lib/mail"

// Contact form -> e-mail to info@bemindful.cz (CONTACT_TO).
export async function POST(req: Request) {
  let data: Record<string, unknown>
  try {
    data = await req.json()
  } catch {
    return NextResponse.json({ error: "Neplatný požadavek." }, { status: 400 })
  }

  const name = String(data?.name ?? "").trim()
  const email = String(data?.email ?? "").trim()
  const subject = String(data?.subject ?? "").trim()
  const message = String(data?.message ?? "").trim()

  if (!email || !message) {
    return NextResponse.json({ error: "Vyplň prosím e-mail a zprávu." }, { status: 400 })
  }
  if (!isValidEmail(email)) {
    return NextResponse.json({ error: "Zadej prosím platný e-mail." }, { status: 400 })
  }

  const html = `
    <h2>Nová zpráva z kontaktního formuláře</h2>
    <p><strong>Jméno:</strong> ${escapeHtml(name) || "—"}</p>
    <p><strong>E-mail:</strong> ${escapeHtml(email)}</p>
    <p><strong>Předmět:</strong> ${escapeHtml(subject) || "—"}</p>
    <p><strong>Zpráva:</strong></p>
    <p>${escapeHtml(message).replace(/\n/g, "<br />")}</p>
  `

  try {
    await sendMail({
      to: CONTACT_TO,
      subject: subject ? `Kontakt: ${subject}` : `Nová zpráva z webu od ${name || email}`,
      html,
      replyTo: email,
    })
  } catch (err) {
    console.error("[kontakt] send failed:", err)
    return NextResponse.json(
      { error: "Zprávu se nepodařilo odeslat. Zkus to prosím znovu." },
      { status: 500 },
    )
  }

  return NextResponse.json({ ok: true })
}
