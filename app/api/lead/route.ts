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
  // in the app (incl. login credentials for the members' zone). Requires
  // SmartEmailing + app API credentials. Until then the welcome e-mail below
  // confirms the sign-up and the course content is sent manually/by automation.

  const fullName = [firstName, lastName].filter(Boolean).join(" ")
  const html = `
    <h2>Nová registrace do 4denního kurzu zdarma</h2>
    <p><strong>Jméno:</strong> ${escapeHtml(fullName) || "—"}</p>
    <p><strong>E-mail:</strong> ${escapeHtml(email)}</p>
    <p><strong>Zdroj:</strong> ${escapeHtml(source)}</p>
  `

  const welcomeHtml = `
    <p>Ahoj${firstName ? ` ${escapeHtml(firstName)}` : ""},</p>
    <p>díky za registraci do bezplatného 4denního kurzu mindfulness <strong>Start-to-PAUSE</strong>.</p>
    <p>První lekce ti brzy dorazí na tento e-mail. Kdyby nepřišla, mrkni prosím i do složky s hromadnou poštou nebo spamem.</p>
    <p>Měj se všímavě,<br />Michal Dvořák<br />be.mindful | <a href="https://bemindful.cz">bemindful.cz</a></p>
  `

  try {
    await sendMail({
      to: email,
      subject: "Vítej ve 4denním kurzu mindfulness zdarma",
      html: welcomeHtml,
    })
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
