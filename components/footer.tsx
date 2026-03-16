import Link from "next/link"
import Image from "next/image"
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
              <Image src="/Logo/bemindful_logo.svg" alt="be.mindful logo" width={260} height={68} className="h-16 w-auto opacity-70" />
            </Link>
            <p className="mt-6 max-w-sm text-sm text-[#4B4C4D] leading-relaxed">
              Síla jedné všímavé pauzy – posunout svůj život od stresu k prostoru.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {socialLinks.map((social) => (
                <Link key={social.label} href={social.href} className="flex h-10 w-10 items-center justify-center rounded-full bg-[#7BC0A4] text-white transition-transform hover:scale-110" aria-label={social.label}>
                  <social.icon className="h-4 w-4" />
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-base font-bold text-[#2D2C2B]">Kurzy</h3>
            <ul className="mt-6 space-y-3">
              {footerLinks.courses.map((link) => (
                <li key={link.label}><Link href={link.href} className="text-sm text-[#4B4C4D] transition-colors hover:text-[#7BC0A4] font-medium">{link.label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-base font-bold text-[#2D2C2B]">be.mindful</h3>
            <ul className="mt-6 space-y-3">
              {footerLinks.bemindful.map((link) => (
                <li key={link.label}><Link href={link.href} className="text-sm text-[#4B4C4D] transition-colors hover:text-[#7BC0A4] font-medium">{link.label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-base font-bold text-[#2D2C2B]">Více</h3>
            <ul className="mt-6 space-y-3">
              {footerLinks.more.map((link) => (
                <li key={link.label}><Link href={link.href} className="text-sm text-[#4B4C4D] transition-colors hover:text-[#7BC0A4] font-medium">{link.label}</Link></li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-16 border-t border-[#C0D1C6] pt-8">
          <p className="text-sm text-[#4B4C4D] text-center">Copyright &copy; 2026 be.mindful | Všechna práva vyhrazena</p>
        </div>
      </div>
    </footer>
  )
}
