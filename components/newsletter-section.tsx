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
              className="flex items-center gap-2"
              onSubmit={(e) => e.preventDefault()}
            >
              <Input
                type="email"
                placeholder="Zadejte svůj email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-12 flex-1 rounded-full border-0 bg-white px-5 text-base text-[#4B4C4D] placeholder:text-[#9DA59C]"
              />
              <Button
                type="submit"
                className="h-12 rounded-full bg-[#E2763A] px-6 text-sm font-bold text-white hover:bg-[#c9662f]"
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
