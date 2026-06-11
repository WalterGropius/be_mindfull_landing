"use client"

import Link from "next/link"
import Image from "next/image"
import { Facebook, Linkedin, ArrowRight, Check } from "lucide-react"

// Custom filled Instagram icon — outer rounded square with inner ring + dot cut out via SVG mask
function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <defs>
        <mask id="bemindful-ig-holes">
          <rect width="24" height="24" fill="white" />
          {/* Inner circle hole */}
          <circle cx="12" cy="12" r="4" fill="black" />
          {/* Corner lens dot hole */}
          <circle cx="17.5" cy="6.5" r="1.5" fill="black" />
        </mask>
      </defs>
      <rect x="2" y="2" width="20" height="20" rx="5" mask="url(#bemindful-ig-holes)" />
    </svg>
  )
}

// Custom filled YouTube icon — rounded rect with play triangle cut out via SVG mask
function YoutubeIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <defs>
        <mask id="bemindful-yt-hole">
          <rect width="24" height="24" fill="white" />
          {/* Play triangle hole — matches lucide's polygon "10 15 15 12 10 9" */}
          <polygon points="10,15 15,12 10,9" fill="black" />
        </mask>
      </defs>
      <path
        d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"
        mask="url(#bemindful-yt-hole)"
      />
    </svg>
  )
}
import { Typography } from "@/components/ui/typography"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useState } from "react"

const footerLinks = {
  courses: [
    { label: "be.mindful FOUNDATIONS", href: "/kurzy/foundations" },
    { label: "be.mindful MEMBERSHIP", href: "/kurzy/membership" },
    { label: "8týdenní kurz mindfulness (MBSR)", href: "/kurzy/skupinovy-kurz" },
    { label: "Mindfulness ve firmách", href: "/kurzy/firmy" },
  ],
  bemindful: [
    { label: "O mně", href: "/o-mne" },
    { label: "Kontakt", href: "/kontakt" },
    { label: "Blog", href: "/blog" },
   /*  { label: "Podcast", href: "/podcast" }, */
  ],
  more: [
    { label: "Členská zóna", href: "/kurzy/membership" },
    { label: "Start-to-PAUSE", href: "/kurzy/start-to-pause" },
    { label: "Ochrana osobních údajů", href: "/ochrana-osobnich-udaju" },
  ],
}

// Odkazy na stažení aplikace be.mindful. Jakmile budou k dispozici finální
// URL z App Store / Google Play, stačí je doplnit sem — badge se zobrazí
// automaticky (s prázdnou hodnotou zůstává skrytý).
const APP_STORE_URL = ""
const PLAY_STORE_URL = ""

// Filled Apple logo (brand icons are no longer shipped by lucide)
function AppleIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
    </svg>
  )
}

// Filled Google Play triangle
function GooglePlayIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M3.61 1.81a1.5 1.5 0 0 0-.61 1.2v17.98a1.5 1.5 0 0 0 .61 1.2l9.07-10.19L3.61 1.81zm10.18 9.07 2.6-2.92-11.2-6.43a1.5 1.5 0 0 0-.48-.17l9.08 9.52zm0 2.24-9.08 9.52c.16-.03.32-.08.48-.17l11.2-6.43-2.6-2.92zm4.04-3.7 2.95 1.69c1 .57 1 2.01 0 2.58l-2.95 1.69-2.87-3.05 2.87-2.91z" />
    </svg>
  )
}

const appLinks = [
  { icon: AppleIcon, href: APP_STORE_URL, label: "App Store", store: "Stáhnout v" },
  { icon: GooglePlayIcon, href: PLAY_STORE_URL, label: "Google Play", store: "Stáhnout z" },
].filter((l) => l.href)

const socialLinks = [
  { icon: InstagramIcon, href: "https://www.instagram.com/bemindfulcz/", label: "Instagram" },
  { icon: Facebook, href: "https://www.facebook.com/bemindful.cz", label: "Facebook" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/michal-dvořák-27437946/", label: "LinkedIn" },
  { icon: YoutubeIcon, href: "https://www.youtube.com/@bemindfulcz3945", label: "YouTube" },
]

export function Footer() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [error, setError] = useState("")

  async function handleNewsletterSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus("loading")
    setError("")
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      })
      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        throw new Error(data?.error || "Něco se pokazilo. Zkus to prosím znovu.")
      }
      setStatus("success")
      setEmail("")
    } catch (err) {
      setStatus("error")
      setError(err instanceof Error ? err.message : "Něco se pokazilo. Zkus to prosím znovu.")
    }
  }

  return (
    <footer className="border-t border-border-subtle bg-surface-white">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        {/* Logo + tagline/social + link columns */}
        <div className="grid gap-x-10 gap-y-10 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link href="/" className="-ml-1 inline-flex items-center gap-1">
              <Image src="/Logo/bemindful_logo.svg" alt="be.mindful logo" width={300} height={80} className="h-14 w-auto opacity-70 sm:h-20" />
            </Link>
            <Typography variant="span" className="mt-4 block max-w-sm text-sm leading-relaxed text-typography-body">
              Síla jedné všímavé pauzy – posuň se od stresu k většímu prostoru a klidu.
            </Typography>
            <div className="mt-6 flex items-center gap-3">
              {socialLinks.map((social) => (
                <Link key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-green text-surface-white transition-transform hover:scale-110 hover:bg-primary-green-hover" aria-label={social.label}>
                  <social.icon className="h-4 w-4 fill-current" />
                </Link>
              ))}
            </div>
            {appLinks.length > 0 && (
              <div className="mt-6">
                <Typography variant="span" className="block text-sm font-medium text-typography-heading">
                  Stáhni si aplikaci be.mindful
                </Typography>
                <div className="mt-3 flex flex-wrap items-center gap-3">
                  {appLinks.map((app) => (
                    <Link
                      key={app.label}
                      href={app.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2.5 rounded-xl bg-[#2D2C2B] px-4 py-2.5 text-surface-white transition-colors hover:bg-[#4B4C4D]"
                      aria-label={`${app.store} ${app.label}`}
                    >
                      <app.icon className="h-6 w-6" />
                      <span className="flex flex-col leading-none">
                        <span className="text-[10px] uppercase tracking-wide opacity-80">{app.store}</span>
                        <span className="mt-0.5 text-sm font-semibold">{app.label}</span>
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
          <div>
            <Typography variant="h4" className="mb-4 text-base text-typography-heading">Kurzy</Typography>
            <ul className="space-y-3">
              {footerLinks.courses.map((link) => (
                <li key={link.label}><Link href={link.href} className="text-[15px] font-bold text-primary-green transition-colors hover:text-primary-green-hover">{link.label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <Typography variant="h4" className="mb-4 text-base text-typography-heading">be.mindful</Typography>
            <ul className="space-y-3">
              {footerLinks.bemindful.map((link) => (
                <li key={link.label}><Link href={link.href} className="text-[15px] font-bold text-primary-green transition-colors hover:text-primary-green-hover">{link.label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <Typography variant="h4" className="mb-4 text-base text-typography-heading">Více</Typography>
            <ul className="space-y-3">
              {footerLinks.more.map((link) => (
                <li key={link.label}><Link href={link.href} className="text-[15px] font-bold text-primary-green transition-colors hover:text-primary-green-hover">{link.label}</Link></li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter sign-up */}
        <div className="mt-12 grid gap-x-10 md:grid-cols-2 lg:grid-cols-5">
          <div className="md:col-start-2 lg:col-start-3 lg:col-span-3">
            <Typography variant="h4" className="text-base text-typography-heading mb-4">
              Mindfulness přímo do schránky. Jednou za 14 dní.
            </Typography>
            <div className="mb-5 flex flex-wrap gap-x-6 gap-y-2">
              {["Tipy a cvičení pro běžný den", "Novinky ze světa mindfulness", "Akce a kurzy jako první"].map((b) => (
                <div key={b} className="flex items-center gap-2 text-sm text-typography-body">
                  <Check className="h-4 w-4 text-primary-green" />
                  {b}
                </div>
              ))}
            </div>
            {status === "success" ? (
              <p className="max-w-lg rounded-2xl bg-[#F5F6F4] px-6 py-[18px] text-[16px] font-medium text-typography-heading">
                Hotovo! Od teď ti jednou za 14 dní přistane mindfulness přímo do schránky.
              </p>
            ) : (
              <form
                className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 max-w-lg"
                onSubmit={handleNewsletterSubmit}
              >
                <Input
                  type="email"
                  placeholder="E-mail"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-auto py-[18px] px-[24px] flex-1 rounded-2xl border border-border-subtle bg-surface-white text-[18px] text-typography-body placeholder:text-muted-foreground focus-visible:border-primary-green focus-visible:ring-0 focus-visible:shadow-none"
                />
                <Button
                  type="submit"
                  variant="primary-orange"
                  size="default"
                  disabled={status === "loading"}
                  className="group gap-0"
                >
                  <span className="flex items-center gap-2">{status === "loading" ? "Odesílám…" : "Odebírat"} {status !== "loading" && <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />}</span>
                </Button>
              </form>
            )}
            {status === "error" && <p className="mt-3 text-sm font-medium text-[#b00020]">{error}</p>}
          </div>
        </div>

        <div className="mt-20 border-t border-border-subtle pt-8">
          <Typography variant="p" className="text-sm text-center text-typography-body">Copyright &copy; 2026 be.mindful | Všechna práva vyhrazena</Typography>
        </div>
      </div>
    </footer>
  )
}
