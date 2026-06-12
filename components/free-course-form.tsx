"use client"

import { useState } from "react"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

type Status = "idle" | "loading" | "success" | "error"

const inputClass =
  "h-12 rounded-lg border border-[#C0D1C6] bg-white text-[16px] text-[#2D2C2B] placeholder:text-[#4B4C4D] focus-visible:border-primary-green focus-visible:ring-0 focus-visible:shadow-none"

export function FreeCourseForm({ source = "start-to-pause" }: { source?: string }) {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<Status>("idle")
  const [error, setError] = useState("")

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus("loading")
    setError("")
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ firstName, lastName, email, source }),
      })
      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        throw new Error(data?.error || "Něco se pokazilo. Zkus to prosím znovu.")
      }
      setStatus("success")
    } catch (err) {
      setStatus("error")
      setError(err instanceof Error ? err.message : "Něco se pokazilo. Zkus to prosím znovu.")
    }
  }

  if (status === "success") {
    return (
      <div className="mx-auto max-w-md rounded-2xl bg-white p-8 text-center shadow-sm">
        <p className="text-[20px] font-bold text-[#2D2C2B]">Hotovo! 🎉</p>
        <p className="mt-2 text-[16px] leading-[26px] text-[#4B4C4D]">
          Za chvíli ti dorazí e-mail s prvním dnem kurzu. Mrkni i do složky s hromadnou poštou.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="mx-auto max-w-md text-left">
      <div className="grid gap-4 sm:grid-cols-2">
        <Input
          id="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
          placeholder="Jméno"
          autoComplete="given-name"
          className={inputClass}
        />
        <Input
          id="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
          placeholder="Příjmení"
          autoComplete="family-name"
          className={inputClass}
        />
      </div>
      <Input
        id="email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        placeholder="Tvůj e-mail"
        autoComplete="email"
        className={`${inputClass} mt-4`}
      />
      <Button
        type="submit"
        variant="primary-orange"
        disabled={status === "loading"}
        className="group mt-5 w-full gap-0"
      >
        <span className="flex items-center gap-2">
          {status === "loading" ? "Odesílám…" : "Začni hned teď"}
          {status !== "loading" && <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />}
        </span>
      </Button>
      {status === "error" && <p className="mt-3 text-sm text-red-600">{error}</p>}
      <p className="mt-4 text-center text-xs leading-[18px] text-[#4B4C4D]">
        Zápisem souhlasíš se zpracováním osobních údajů. Kdykoli se můžeš odhlásit.
      </p>
    </form>
  )
}
