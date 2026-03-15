"use client"

import Link from "next/link"
import { ChevronDown, Menu, X } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-background sticky top-0 z-50 w-full border-b border-border/40">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-1">
          <span className="text-2xl italic text-[#5E767E]" style={{ fontFamily: 'serif' }}>be.</span>
          <span className="text-xl font-medium text-[#5E767E]">mindful</span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          <Link href="/" className="text-sm text-foreground transition-colors hover:text-[#7BC0A4]">
            Domů
          </Link>

          {/* Kurzy - hover dropdown */}
          <div className="group relative">
            <button className="flex items-center gap-1 text-sm text-foreground transition-colors hover:text-[#7BC0A4]">
              Kurzy <ChevronDown className="h-3.5 w-3.5 transition-transform group-hover:rotate-180" />
            </button>
            <div className="pointer-events-none absolute left-0 top-full pt-2 opacity-0 transition-all duration-200 group-hover:pointer-events-auto group-hover:opacity-100">
              <div className="w-56 rounded-lg border border-border bg-background p-2 shadow-lg">
                <Link href="/kurzy/start-to-pause" className="block rounded-md px-3 py-2 text-sm text-foreground hover:bg-secondary hover:text-[#7BC0A4]">Start-to-PAUSE (zdarma)</Link>
                <Link href="/kurzy/foundations" className="block rounded-md px-3 py-2 text-sm text-foreground hover:bg-secondary hover:text-[#7BC0A4]">be.mindful FOUNDATIONS</Link>
                <Link href="/kurzy/skupinovy-kurz" className="block rounded-md px-3 py-2 text-sm text-foreground hover:bg-secondary hover:text-[#7BC0A4]">Skupinový kurz v Praze</Link>
                <Link href="/kurzy/membership" className="block rounded-md px-3 py-2 text-sm text-foreground hover:bg-secondary hover:text-[#7BC0A4]">be.mindful Membership</Link>
                <Link href="/kurzy/firmy" className="block rounded-md px-3 py-2 text-sm text-foreground hover:bg-secondary hover:text-[#7BC0A4]">Mindfulness pro firmy</Link>
              </div>
            </div>
          </div>

          {/* Zdroje - hover dropdown */}
          <div className="group relative">
            <button className="flex items-center gap-1 text-sm text-foreground transition-colors hover:text-[#7BC0A4]">
              Zdroje <ChevronDown className="h-3.5 w-3.5 transition-transform group-hover:rotate-180" />
            </button>
            <div className="pointer-events-none absolute left-0 top-full pt-2 opacity-0 transition-all duration-200 group-hover:pointer-events-auto group-hover:opacity-100">
              <div className="w-48 rounded-lg border border-border bg-background p-2 shadow-lg">
                <Link href="/blog" className="block rounded-md px-3 py-2 text-sm text-foreground hover:bg-secondary hover:text-[#7BC0A4]">Blog</Link>
                <Link href="/blog" className="block rounded-md px-3 py-2 text-sm text-foreground hover:bg-secondary hover:text-[#7BC0A4]">Podcast</Link>
              </div>
            </div>
          </div>

          <Link href="/o-mne" className="text-sm text-foreground transition-colors hover:text-[#7BC0A4]">
            O mindfulness
          </Link>
          <Link href="/kontakt" className="text-sm text-foreground transition-colors hover:text-[#7BC0A4]">
            Kontakt
          </Link>
        </nav>

        <div className="hidden lg:block">
          <Button variant="outline" className="rounded-full border-border px-5 py-2 text-sm text-foreground hover:bg-secondary hover:text-[#7BC0A4] bg-transparent">
            Přihlásit se
          </Button>
        </div>

        <button className="lg:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
          {mobileMenuOpen ? <X className="h-6 w-6 text-foreground" /> : <Menu className="h-6 w-6 text-foreground" />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="border-t border-border bg-background lg:hidden">
          <nav className="flex flex-col gap-4 px-6 py-6">
            <Link href="/" className="text-base text-foreground" onClick={() => setMobileMenuOpen(false)}>Domů</Link>
            <Link href="/kurzy/start-to-pause" className="text-base text-foreground" onClick={() => setMobileMenuOpen(false)}>Start-to-PAUSE (zdarma)</Link>
            <Link href="/kurzy/foundations" className="text-base text-foreground" onClick={() => setMobileMenuOpen(false)}>be.mindful FOUNDATIONS</Link>
            <Link href="/kurzy/skupinovy-kurz" className="text-base text-foreground" onClick={() => setMobileMenuOpen(false)}>Skupinový kurz v Praze</Link>
            <Link href="/kurzy/membership" className="text-base text-foreground" onClick={() => setMobileMenuOpen(false)}>be.mindful Membership</Link>
            <Link href="/kurzy/firmy" className="text-base text-foreground" onClick={() => setMobileMenuOpen(false)}>Mindfulness pro firmy</Link>
            <Link href="/o-mne" className="text-base text-foreground" onClick={() => setMobileMenuOpen(false)}>O mindfulness</Link>
            <Link href="/blog" className="text-base text-foreground" onClick={() => setMobileMenuOpen(false)}>Blog</Link>
            <Link href="/kontakt" className="text-base text-foreground" onClick={() => setMobileMenuOpen(false)}>Kontakt</Link>
            <Button variant="outline" className="mt-2 w-fit rounded-full border-border px-5 py-2 text-sm text-foreground bg-transparent">
              Přihlásit se
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
