import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react"

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
    { label: "Podcast", href: "/blog" },
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
  return (
    <footer className="border-t border-[#C0D1C6] bg-background">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-1">
              <span className="text-2xl italic text-[#5E767E]" style={{ fontFamily: 'serif' }}>be.</span>
              <span className="text-xl font-medium text-[#5E767E]">mindful</span>
            </Link>
            <p className="mt-4 max-w-xs text-xs text-[#9DA59C]">
              Síla jedné všímavé pauzy – posunout svůj život od stresu k prostoru.
            </p>
            <div className="mt-4 flex items-center gap-2">
              {socialLinks.map((social) => (
                <Link key={social.label} href={social.href} className="flex h-8 w-8 items-center justify-center rounded-full border border-[#C0D1C6] text-[#5E767E] transition-colors hover:bg-[#E3FFE2]" aria-label={social.label}>
                  <social.icon className="h-3.5 w-3.5" />
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-sm font-bold text-[#5E767E]">Kurzy</h3>
            <ul className="mt-4 space-y-2">
              {footerLinks.courses.map((link) => (
                <li key={link.label}><Link href={link.href} className="text-xs text-[#9DA59C] transition-colors hover:text-[#5E767E]">{link.label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-bold text-[#5E767E]">be.mindful</h3>
            <ul className="mt-4 space-y-2">
              {footerLinks.bemindful.map((link) => (
                <li key={link.label}><Link href={link.href} className="text-xs text-[#9DA59C] transition-colors hover:text-[#5E767E]">{link.label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-bold text-[#5E767E]">Více</h3>
            <ul className="mt-4 space-y-2">
              {footerLinks.more.map((link) => (
                <li key={link.label}><Link href={link.href} className="text-xs text-[#9DA59C] transition-colors hover:text-[#5E767E]">{link.label}</Link></li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-10 border-t border-[#C0D1C6] pt-6">
          <p className="text-xs text-[#9DA59C]">Copyright &copy; 2025 be.mindful | Všechna práva vyhrazena</p>
        </div>
      </div>
    </footer>
  )
}
