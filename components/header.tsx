"use client"

import Link from "next/link"
import Image from "next/image"
import { ChevronDown, Menu, X } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-background sticky top-0 z-50 w-full border-b border-[#C0D1C6]">
      <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-1">
          <Image src="/bemindful_logo.svg" alt="be.mindful logo" width={180} height={48} className="h-10 w-auto" />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          <Link href="/" className="text-[15px] font-bold text-[#7BC0A4] transition-colors hover:opacity-80">
            Home
          </Link>

          <div className="group relative">
            <button className="flex items-center gap-1 text-[15px] font-bold text-[#7BC0A4] transition-colors hover:opacity-80">
              Courses <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
            </button>
            <div className="pointer-events-none absolute left-0 top-full pt-2 opacity-0 transition-all duration-200 group-hover:pointer-events-auto group-hover:opacity-100">
              <div className="w-56 rounded-lg border border-[#C0D1C6] bg-background p-2 shadow-lg">
                <Link href="/courses/foundations" className="block rounded-md px-3 py-2 text-sm text-[#4B4C4D] hover:bg-secondary hover:text-[#7BC0A4] font-medium">be.mindful FOUNDATIONS</Link>
                <Link href="/courses/group" className="block rounded-md px-3 py-2 text-sm text-[#4B4C4D] hover:bg-secondary hover:text-[#7BC0A4] font-medium">Group Courses in Prague</Link>
                <Link href="/courses/companies" className="block rounded-md px-3 py-2 text-sm text-[#4B4C4D] hover:bg-secondary hover:text-[#7BC0A4] font-medium">Mindfulness for companies</Link>
              </div>
            </div>
          </div>

          <div className="group relative">
            <button className="flex items-center gap-1 text-[15px] font-bold text-[#7BC0A4] transition-colors hover:opacity-80">
              Resources <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
            </button>
            <div className="pointer-events-none absolute left-0 top-full pt-2 opacity-0 transition-all duration-200 group-hover:pointer-events-auto group-hover:opacity-100">
              <div className="w-48 rounded-lg border border-[#C0D1C6] bg-background p-2 shadow-lg">
                <Link href="/blog" className="block rounded-md px-3 py-2 text-sm text-[#4B4C4D] hover:bg-secondary hover:text-[#7BC0A4] font-medium">Blog</Link>
                <Link href="/podcast" className="block rounded-md px-3 py-2 text-sm text-[#4B4C4D] hover:bg-secondary hover:text-[#7BC0A4] font-medium">Podcast</Link>
              </div>
            </div>
          </div>

          <Link href="/about" className="text-[15px] font-bold text-[#7BC0A4] transition-colors hover:opacity-80">
            About mindfulness
          </Link>
          <Link href="/contact" className="text-[15px] font-bold text-[#7BC0A4] transition-colors hover:opacity-80">
            Contact
          </Link>
        </nav>

        <div className="hidden lg:block">
          <Button variant="outline" className="rounded-full border-[#C0D1C6] border-2 px-6 py-2 text-[15px] font-bold text-[#7BC0A4] hover:bg-secondary bg-transparent h-auto">
            Login
          </Button>
        </div>

        <button className="lg:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
          {mobileMenuOpen ? <X className="h-6 w-6 text-[#7BC0A4]" /> : <Menu className="h-6 w-6 text-[#7BC0A4]" />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="border-t border-[#C0D1C6] bg-background lg:hidden">
          <nav className="flex flex-col gap-4 px-6 py-6">
            <Link href="/" className="text-base font-bold text-[#7BC0A4]" onClick={() => setMobileMenuOpen(false)}>Home</Link>
            <Link href="/courses/foundations" className="text-base font-bold text-[#7BC0A4]" onClick={() => setMobileMenuOpen(false)}>Courses - Foundations</Link>
            <Link href="/courses/group" className="text-base font-bold text-[#7BC0A4]" onClick={() => setMobileMenuOpen(false)}>Group Courses in Prague</Link>
            <Link href="/courses/companies" className="text-base font-bold text-[#7BC0A4]" onClick={() => setMobileMenuOpen(false)}>Mindfulness for companies</Link>
            <Link href="/about" className="text-base font-bold text-[#7BC0A4]" onClick={() => setMobileMenuOpen(false)}>About mindfulness</Link>
            <Link href="/blog" className="text-base font-bold text-[#7BC0A4]" onClick={() => setMobileMenuOpen(false)}>Resources</Link>
            <Link href="/contact" className="text-base font-bold text-[#7BC0A4]" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
            <Button variant="outline" className="mt-2 w-fit rounded-full border-[#C0D1C6] border-2 px-6 py-2 text-base font-bold text-[#7BC0A4] bg-transparent h-auto">
              Login
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
