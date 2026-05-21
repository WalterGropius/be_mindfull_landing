"use client"

import { useState } from "react"
import { Plus, Minus } from "lucide-react"

export type UpcomingDate = {
  date: string
  location: string
  sessions?: string[]
}

export function UpcomingDates({ dates }: { dates: UpcomingDate[] }) {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <div className="overflow-hidden rounded-2xl">
      {dates.map((d, i) => {
        const isOpen = open === i
        return (
          <div
            key={i}
            className={`bg-[#7BC0A4] ${
              i < dates.length - 1 ? "border-b-2 border-[#BFD1C6]" : ""
            }`}
          >
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-3 px-5 py-5 text-left transition-colors hover:bg-[#6BB194] sm:px-8 sm:py-6"
            >
              <div className="flex flex-1 flex-col items-start gap-1 sm:flex-row sm:items-baseline sm:gap-5">
                <span className="text-xl font-bold text-[#E3FFE2] sm:text-3xl">{d.date}</span>
                <span className="text-lg text-[#E3FFE2] sm:text-3xl">{d.location}</span>
              </div>
              <span className="shrink-0 text-[#E3FFE2]">
                {isOpen ? (
                  <Minus className="h-6 w-6" />
                ) : (
                  <Plus className="h-6 w-6" />
                )}
              </span>
            </button>
            <div
              className={`grid transition-all duration-300 ease-out ${
                isOpen
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <div className="flex items-start gap-5 px-5 pb-6 pt-3 sm:px-8">
                  <span
                    aria-hidden="true"
                    className="hidden select-none whitespace-nowrap text-3xl font-bold leading-none sm:inline-block"
                  >
                    {d.date}
                  </span>
                  <ul className="flex-1 space-y-1 text-[16px] leading-[26px] text-white sm:text-[18px] sm:leading-[30px]">
                    {(d.sessions ?? []).map((s, idx) => (
                      <li key={idx}>{s}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
