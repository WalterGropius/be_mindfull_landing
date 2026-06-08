"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { X } from "lucide-react"

// End-of-June 15% discount banner. Dismissible; the choice is remembered in
// localStorage so a visitor only sees it until they close it. To retire the
// promo after June, simply remove <PromoBanner /> from app/layout.tsx.
const STORAGE_KEY = "promo-sleva-15-cerven-dismissed"

export function PromoBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    try {
      if (localStorage.getItem(STORAGE_KEY) !== "1") setVisible(true)
    } catch {
      setVisible(true)
    }
  }, [])

  if (!visible) return null

  function dismiss() {
    setVisible(false)
    try {
      localStorage.setItem(STORAGE_KEY, "1")
    } catch {
      /* ignore */
    }
  }

  return (
    <div className="relative bg-primary-green text-surface-white">
      <div className="mx-auto max-w-7xl px-10 py-2.5 text-center text-sm font-medium leading-[20px]">
        <p>
          🎁 Do konce června máš na všechny kurzy <strong>slevu 15&nbsp;%</strong>.{" "}
          <Link href="/kurzy/foundations" className="font-bold underline underline-offset-2 hover:opacity-90">
            Vybrat kurz
          </Link>
        </p>
      </div>
      <button
        onClick={dismiss}
        aria-label="Zavřít oznámení"
        className="absolute right-3 top-1/2 flex h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full hover:bg-white/15"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  )
}
