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
            <h1 className="text-3xl font-bold text-[#2D2C2B] lg:text-4xl">Kontakt</h1>
            <p className="mt-4 text-lg text-[#4B4C4D]">Ozvěte se mi, rád vám pomohu na vaší cestě k mindfulness.</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-background py-16 lg:py-24">
        <div className="mx-auto flex max-w-7xl flex-col gap-12 px-6 lg:flex-row lg:gap-16 lg:px-8">
          {/* Info */}
          <div className="lg:w-1/3">
            <h2 className="text-xl font-bold text-[#2D2C2B]">Kontaktní údaje</h2>
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
                  <p className="mt-1 text-sm text-[#4B4C4D]">+420 XXX XXX XXX</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#F5F6F4]">
                  <MapPin className="h-5 w-5 text-[#2D2C2B]" />
                </div>
                <div>
                  <p className="text-sm font-medium text-[#2D2C2B]">Adresa</p>
                  <p className="mt-1 text-sm text-[#4B4C4D]">Praha 10, Česká republika</p>
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
                    className="h-11 rounded-lg border-[#C0D1C6] bg-background text-sm text-[#2D2C2B] placeholder:text-[#4B4C4D]"
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
                    className="h-11 rounded-lg border-[#C0D1C6] bg-background text-sm text-[#2D2C2B] placeholder:text-[#4B4C4D]"
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
                  className="h-11 rounded-lg border-[#C0D1C6] bg-background text-sm text-[#2D2C2B] placeholder:text-[#4B4C4D]"
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
                  className="w-full rounded-lg border border-[#C0D1C6] bg-background px-3 py-2 text-sm text-[#2D2C2B] placeholder:text-[#4B4C4D] focus:outline-none focus:ring-2 focus:ring-[#5E767E]"
                  placeholder="Vaše zpráva..."
                />
              </div>
              <Button type="submit" className="h-auto rounded-full bg-[#5E767E] px-8 py-3 text-sm text-white hover:bg-[#008F7A]">
                Odeslat zprávu <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
