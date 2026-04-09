"use client"

import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Instagram, Linkedin, Youtube, ArrowRight } from "lucide-react"
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
    { label: "Podcast", href: "/podcast" },
  ],
  more: [
    { label: "Členská zóna", href: "/kurzy/membership" },
    { label: "Start-to-PAUSE", href: "/kurzy/start-to-pause" },
  ],
}

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Youtube, href: "#", label: "YouTube" },
]

export function Footer() {
  const [email, setEmail] = useState("")

  return (
    <footer className="border-t border-border-subtle bg-surface-white">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        {/* Row 1: Logo + Column Headers */}
        <div className="grid gap-x-10 md:grid-cols-2 lg:grid-cols-5 items-end">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-1">
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
                  <social.icon className="h-4 w-4" />
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
        <div className="mt-12 border-t border-border-subtle pt-8">
          <Typography variant="h4" className="text-base text-typography-heading mb-4">
            Získejte všechny novinky, aktualizace a oznámení:
          </Typography>
          <form
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 max-w-lg"
            onSubmit={(e) => e.preventDefault()}
          >
            <Input
              type="email"
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-12 flex-1 rounded-full border border-border-subtle bg-surface-white px-5 text-base placeholder:text-muted-foreground focus-visible:ring-primary-green"
            />
            <Button
              type="submit"
              variant="primary-orange"
              size="default"
              className="group gap-0"
            >
              <span className="flex items-center gap-2">Odebírat <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></span>
            </Button>
          </form>
        </div>

        <div className="mt-8 border-t border-border-subtle pt-8">
          <Typography variant="p" className="text-sm text-center text-typography-body">Copyright &copy; 2026 be.mindful | Všechna práva vyhrazena</Typography>
        </div>
      </div>
    </footer>
  )
}
