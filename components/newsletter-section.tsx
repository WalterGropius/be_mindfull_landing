"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import { ArrowRight, Check } from "lucide-react"

const benefits = [
  "Bezplatná videa",
  "Přednostní přístup k programům a kurzům",
  "Zůstaňte propojeni s tématy mindfulness",
]

export function NewsletterSection() {
  const [email, setEmail] = useState("")

  return (
    <section className="bg-[#7BC0A4] py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">
          {/* Left - Title */}
          <div className="lg:w-1/3">
            <h2 className="text-2xl font-bold text-white lg:text-3xl">
              Získejte všechny novinky,<br />aktualizace a oznámení!
            </h2>
          </div>

          {/* Center - Form */}
          <div className="w-full lg:w-1/3 flex-1 lg:max-w-md">
            <form
              className="flex items-center gap-4 w-full"
              onSubmit={(e) => e.preventDefault()}
            >
              <Input
                type="email"
                placeholder="Váš e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-12 flex-1 rounded-none border-0 border-b-2 border-white/50 bg-transparent px-0 text-base text-white placeholder:text-white/70 focus-visible:ring-0 focus-visible:border-white"
              />
              <Button
                type="submit"
                variant="outline"
                className="h-12 rounded-full border-2 border-white bg-transparent px-6 text-sm font-bold text-white hover:bg-white hover:text-[#7BC0A4] transition-colors"
              >
                ODEBÍRAT
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>

        {/* Benefits */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 lg:justify-start">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-center gap-2 text-sm font-bold text-white">
              <Check className="h-5 w-5" />
              {benefit}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
