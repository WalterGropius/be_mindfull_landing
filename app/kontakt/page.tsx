"use client"

import { useState } from "react"
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" })

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
  }

  return (
    <main className="min-h-screen font-sans">
      <Header />

      {/* Hero */}
      <section className="bg-[#F5F6F4] py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-[28px] font-bold leading-[38px] text-[#2D2C2B] sm:text-5xl lg:text-[64px] lg:leading-[1.1]">Kontakt</h1>
            <p className="mt-4 text-[18px] leading-[30px] text-[#4B4C4D]">Napiš mi. Rád odpovím.</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-background py-16 lg:py-24">
        <div className="mx-auto flex max-w-7xl flex-col gap-12 px-6 lg:flex-row lg:gap-16 lg:px-8">
          {/* Info */}
          <div className="lg:w-1/3">
            <h2 className="text-[28px] font-bold leading-[38px] text-[#2D2C2B]">Kontaktní údaje</h2>
            <div className="mt-8 space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#F5F6F4]">
                  <Mail className="h-5 w-5 text-[#2D2C2B]" />
                </div>
                <div>
                  <p className="text-sm font-medium text-[#2D2C2B]">Email</p>
                  <p className="mt-1 text-sm text-[#4B4C4D]">info@bemindful.cz</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#F5F6F4]">
                  <Phone className="h-5 w-5 text-[#2D2C2B]" />
                </div>
                <div>
                  <p className="text-sm font-medium text-[#2D2C2B]">Telefon</p>
                  <p className="mt-1 text-sm text-[#4B4C4D]">+420 777 945 605</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#F5F6F4]">
                  <MapPin className="h-5 w-5 text-[#2D2C2B]" />
                </div>
                <div>
                  <p className="text-sm font-medium text-[#2D2C2B]">Adresa</p>
                  <p className="mt-1 text-sm leading-[22px] text-[#4B4C4D]">
                    Michal Dvořák<br />
                    Karla Nového 432, 257 51, Bystřice<br />
                    IČ: 75934949 · DIČ: CZ8503280401<br />
                    Fyzická osoba zapsaná v Živnostenském rejstříku v Benešově od 23. 10. 2007
                  </p>
                  <p className="mt-3 text-sm leading-[22px] text-[#4B4C4D]">
                    bemindfulcz s.r.o.<br />
                    Krupská 3084/3, 100 00, Praha 10<br />
                    IČ: 08362840 · DIČ: CZ08362840<br />
                    Spisová značka C 317662, Městský soud v Praze (26. 7. 2019)
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:w-2/3">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-medium text-[#2D2C2B]">Jméno</label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="h-11 rounded-lg border-[#C0D1C6] bg-background text-sm text-[#2D2C2B] placeholder:text-[#4B4C4D] focus-visible:border-primary-green focus-visible:ring-0 focus-visible:shadow-none"
                    placeholder="Vaše jméno"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium text-[#2D2C2B]">Email</label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="h-11 rounded-lg border-[#C0D1C6] bg-background text-sm text-[#2D2C2B] placeholder:text-[#4B4C4D] focus-visible:border-primary-green focus-visible:ring-0 focus-visible:shadow-none"
                    placeholder="vas@email.cz"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="mb-2 block text-sm font-medium text-[#2D2C2B]">Předmět</label>
                <Input
                  id="subject"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="h-11 rounded-lg border-[#C0D1C6] bg-background text-sm text-[#2D2C2B] placeholder:text-[#4B4C4D] focus-visible:border-primary-green focus-visible:ring-0 focus-visible:shadow-none"
                  placeholder="Čím vám mohu pomoct?"
                />
              </div>
              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-medium text-[#2D2C2B]">Zpráva</label>
                <textarea
                  id="message"
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full rounded-lg border border-[#C0D1C6] bg-background px-3 py-2 text-sm text-[#2D2C2B] placeholder:text-[#4B4C4D] outline-none focus-visible:border-primary-green focus-visible:ring-0 focus-visible:shadow-none"
                  placeholder="Vaše zpráva..."
                />
              </div>
              <Button type="submit" variant="primary" className="group">
                <span className="flex items-center gap-2">Odeslat zprávu <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" /></span>
              </Button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
