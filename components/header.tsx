"use client"

import Link from "next/link"
import Image from "next/image"
import { ChevronDown, Menu, X } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-surface-white sticky top-0 z-50 w-full border-b border-border-subtle shadow-[0_1px_4px_rgba(0,0,0,0.06)]">
      <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-6 lg:px-8">
        <div className="flex w-1/4 items-center">
          <Link href="/" className="flex items-center gap-1">
            <Image src="/Logo/bemindful_logo.svg" alt="be.mindful logo" width={300} height={80} className="h-24 w-auto" />
          </Link>
        </div>

        <nav className="hidden flex-1 items-center justify-center gap-6 xl:gap-8 lg:flex">
          <Link href="/" className="text-[18px] font-bold text-primary-green transition-colors hover:text-primary-green-hover">
            Domů
          </Link>

          <div className="group relative">
            <button className="flex items-center gap-1 text-[18px] font-bold text-primary-green transition-colors hover:text-primary-green-hover">
              Kurzy <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
            </button>
            <div className="pointer-events-none absolute left-1/2 top-full -translate-x-1/2 pt-4 opacity-0 transition-all duration-200 group-hover:pointer-events-auto group-hover:opacity-100">
              <div className="relative w-96 rounded-[0.2rem] bg-border-subtle py-2">
                <div className="absolute -top-2 left-1/2 h-0 w-0 -translate-x-1/2 border-x-8 border-b-8 border-x-transparent border-b-border-subtle"></div>
                <div className="flex flex-col">
                  <Link href="/kurzy/start-to-pause" className="block whitespace-nowrap px-5 py-2.5 text-[18px] font-medium text-typography-body transition-colors hover:font-bold hover:text-typography-heading">Kurz zdarma</Link>
                  <Link href="/kurzy/foundations" className="block whitespace-nowrap px-5 py-2.5 text-[18px] font-medium text-typography-body transition-colors hover:font-bold hover:text-typography-heading">be.mindful FOUNDATIONS</Link>
                  <Link href="/kurzy/membership" className="block whitespace-nowrap px-5 py-2.5 text-[18px] font-medium text-typography-body transition-colors hover:font-bold hover:text-typography-heading">be.mindful MEMBERSHIP</Link>
                  <Link href="/kurzy/skupinovy-kurz" className="block whitespace-nowrap px-5 py-2.5 text-[18px] font-medium text-typography-body transition-colors hover:font-bold hover:text-typography-heading">8týdenní kurz mindfulness (MBSR)</Link>
                  <Link href="/kurzy/firmy" className="block whitespace-nowrap px-5 py-2.5 text-[18px] font-medium text-typography-body transition-colors hover:font-bold hover:text-typography-heading">Firemní kurzy mindfulness</Link>
                </div>
              </div>
            </div>
          </div>

          <Link href="/blog" className="text-[18px] font-bold text-primary-green transition-colors hover:text-primary-green-hover">
            Blog
          </Link>

          <Link href="/o-mne" className="text-[18px] font-bold text-primary-green transition-colors hover:text-primary-green-hover">
            O mně
          </Link>
          <Link href="/kontakt" className="text-[18px] font-bold text-primary-green transition-colors hover:text-primary-green-hover">
            Kontakt
          </Link>
        </nav>

        <div className="hidden w-1/4 justify-end lg:flex">
          <Button variant="secondary" size="sm">
            Přihlásit se
          </Button>
        </div>

        <button className="lg:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
          {mobileMenuOpen ? <X className="h-6 w-6 text-primary-green" /> : <Menu className="h-6 w-6 text-primary-green" />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="border-t border-border-subtle bg-surface-white lg:hidden">
          <nav className="flex flex-col gap-4 px-6 py-6">
            <Link href="/" className="text-base font-bold text-primary-green" onClick={() => setMobileMenuOpen(false)}>Domů</Link>
            <Link href="/kurzy/start-to-pause" className="text-base font-bold text-primary-green" onClick={() => setMobileMenuOpen(false)}>Kurz zdarma</Link>
            <Link href="/kurzy/foundations" className="text-base font-bold text-primary-green" onClick={() => setMobileMenuOpen(false)}>be.mindful FOUNDATIONS</Link>
            <Link href="/kurzy/membership" className="text-base font-bold text-primary-green" onClick={() => setMobileMenuOpen(false)}>be.mindful MEMBERSHIP</Link>
            <Link href="/kurzy/skupinovy-kurz" className="text-base font-bold text-primary-green" onClick={() => setMobileMenuOpen(false)}>8týdenní kurz mindfulness (MBSR)</Link>
            <Link href="/kurzy/firmy" className="text-base font-bold text-primary-green" onClick={() => setMobileMenuOpen(false)}>Firemní kurzy mindfulness</Link>
            <Link href="/o-mne" className="text-base font-bold text-primary-green" onClick={() => setMobileMenuOpen(false)}>O mně</Link>
            <Link href="/blog" className="text-base font-bold text-primary-green" onClick={() => setMobileMenuOpen(false)}>Blog</Link>
            <Link href="/kontakt" className="text-base font-bold text-primary-green" onClick={() => setMobileMenuOpen(false)}>Kontakt</Link>
            <Button variant="secondary" size="sm" className="mt-2 w-fit">
              Přihlásit se
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
