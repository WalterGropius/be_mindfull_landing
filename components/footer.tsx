"use client"

import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Linkedin, ArrowRight, Check } from "lucide-react"

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
    { label: "Skupinové kurzy Praha", href: "/kurzy/skupinovy-kurz" },
    { label: "Mindfulness pro firmy", href: "/kurzy/firmy" },
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
  ],
}

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: InstagramIcon, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: YoutubeIcon, href: "#", label: "YouTube" },
]

export function Footer() {
  const [email, setEmail] = useState("")

  return (
    <footer className="border-t border-border-subtle bg-surface-white">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        {/* Row 1: Logo + Column Headers */}
        <div className="grid gap-x-10 md:grid-cols-2 lg:grid-cols-5 items-end">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-1 translate-y-4">
              <Image src="/Logo/bemindful_logo.svg" alt="be.mindful logo" width={300} height={80} className="h-20 w-auto opacity-70" />
            </Link>
          </div>
          <div>
            <Typography variant="h4" className="text-base text-typography-heading">Kurzy</Typography>
          </div>
          <div>
            <Typography variant="h4" className="text-base text-typography-heading">be.mindful</Typography>
          </div>
          <div>
            <Typography variant="h4" className="text-base text-typography-heading">Více</Typography>
          </div>
        </div>

        {/* Row 2: Tagline/Social + Links */}
        <div className="mt-8 grid gap-x-10 gap-y-10 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Typography variant="span" className="max-w-sm block text-sm leading-relaxed text-typography-body">
              Síla jedné všímavé pauzy – posunout svůj život od stresu k prostoru.
            </Typography>
            <div className="mt-6 flex items-center gap-3">
              {socialLinks.map((social) => (
                <Link key={social.label} href={social.href} className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-green text-surface-white transition-transform hover:scale-110 hover:bg-primary-green-hover" aria-label={social.label}>
                  <social.icon className="h-4 w-4 fill-current" />
                </Link>
              ))}
            </div>
          </div>
          <div>
            <ul className="space-y-3">
              {footerLinks.courses.map((link) => (
                <li key={link.label}><Link href={link.href} className="text-[15px] font-bold text-primary-green transition-colors hover:text-primary-green-hover">{link.label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <ul className="space-y-3">
              {footerLinks.bemindful.map((link) => (
                <li key={link.label}><Link href={link.href} className="text-[15px] font-bold text-primary-green transition-colors hover:text-primary-green-hover">{link.label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
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
              Získejte všechny novinky, aktualizace a oznámení:
            </Typography>
            <div className="mb-5 flex flex-wrap gap-x-6 gap-y-2">
              {["Bezplatná videa", "Přednostní přístup k programům a kurzům", "Zůstaňte propojeni s tématy mindfulness"].map((b) => (
                <div key={b} className="flex items-center gap-2 text-sm text-typography-body">
                  <Check className="h-4 w-4 text-primary-green" />
                  {b}
                </div>
              ))}
            </div>
            <form
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 max-w-lg"
              onSubmit={(e) => e.preventDefault()}
            >
              <Input
                type="email"
                placeholder="E-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-auto py-[18px] px-[24px] flex-1 rounded-2xl border border-border-subtle bg-surface-white text-[18px] text-typography-body placeholder:text-muted-foreground focus-visible:border-primary-green focus-visible:ring-0 focus-visible:shadow-none"
              />
              <Button
                type="submit"
                variant="primary-orange"
                size="default"
                className="group gap-0"
              >
                <span className="flex items-center gap-2">Odebírat <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" /></span>
              </Button>
            </form>
          </div>
        </div>

        <div className="mt-20 border-t border-border-subtle pt-8">
          <Typography variant="p" className="text-sm text-center text-typography-body">Copyright &copy; 2026 be.mindful | Všechna práva vyhrazena</Typography>
        </div>
      </div>
    </footer>
  )
}
