"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"

const STORAGE_KEY = "bemindful-cookie-consent"

type Consent = "accepted" | "rejected"

export function CookieConsent() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY)
      if (stored !== "accepted" && stored !== "rejected") {
        setVisible(true)
      }
    } catch {
      setVisible(true)
    }
  }, [])

  function persist(value: Consent) {
    try {
      window.localStorage.setItem(STORAGE_KEY, value)
    } catch {
      // ignore (private mode etc.)
    }
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Souhlas s cookies"
      className="fixed inset-x-4 bottom-4 z-50 mx-auto max-w-3xl rounded-2xl border border-border-subtle bg-surface-white p-5 shadow-2xl sm:p-6"
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="text-sm leading-relaxed text-typography-body">
          <p className="font-bold text-typography-heading">
            Cookies a soukromí
          </p>
          <p className="mt-1">
            Používáme cookies pro měření návštěvnosti a zlepšování webu.
            Kliknutím na „Přijmout" souhlasíte s jejich používáním. Více v{" "}
            <Link
              href="/ochrana-osobnich-udaju"
              className="underline text-primary-green hover:text-primary-green-hover"
            >
              Ochraně osobních údajů
            </Link>
            .
          </p>
        </div>
        <div className="flex shrink-0 gap-2 sm:flex-col md:flex-row">
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={() => persist("rejected")}
          >
            Odmítnout
          </Button>
          <Button
            type="button"
            variant="primary"
            size="sm"
            onClick={() => persist("accepted")}
          >
            Přijmout
          </Button>
        </div>
      </div>
    </div>
  )
}
