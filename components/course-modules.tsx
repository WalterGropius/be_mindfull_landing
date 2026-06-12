"use client"

import type { ReactNode } from "react"
import { useState } from "react"
import { Plus, Minus } from "lucide-react"

export type CourseModule = {
  label: string
  title: string
  content?: ReactNode
}

export function CourseModules({ modules }: { modules: CourseModule[] }) {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <div className="flex flex-col gap-1">
      {modules.map((m, i) => {
        const isOpen = open === i
        return (
          <div key={i} className="overflow-hidden rounded-xl bg-[#F5F6F7]">
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex w-full items-center gap-4 px-5 py-4 text-left transition-colors hover:bg-[#EDEEF0]"
            >
              <span className="min-w-[100px] text-[18px] font-bold uppercase tracking-wider leading-[30px] text-[#7BC0A4]">
                {m.label}
              </span>
              <span className="flex-1 text-[18px] font-bold leading-[30px] text-[#2D2C2B]">
                {m.title}
              </span>
              <span className="text-[#7BC0A4]">
                {isOpen ? <Minus className="h-5 w-5" /> : <Plus className="h-5 w-5" />}
              </span>
            </button>
            <div
              className={`grid transition-all duration-300 ease-out ${
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <div className="px-5 pb-5 pt-2 text-[18px] leading-[30px] text-[#4B4C4D] sm:pl-[140px]">
                  {m.content ?? "Více informací o tomto modulu brzy doplníme."}
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
