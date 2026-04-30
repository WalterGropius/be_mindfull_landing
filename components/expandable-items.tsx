"use client"

import { useState } from "react"
import { Plus, Minus } from "lucide-react"

export type ExpandableItem = {
  title: string
  content?: string
}

export function ExpandableItems({ items }: { items: ExpandableItem[] }) {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <ul className="bg-[#A7CDB6]">
      {items.map((item, i) => {
        const isOpen = open === i
        return (
          <li
            key={item.title}
            className="border-b border-white/40 last:border-b-0"
          >
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left text-[18px] leading-[30px] text-[#2D2C2B] transition-colors hover:bg-[#9DC4AE]"
            >
              <span>{item.title}</span>
              {isOpen ? (
                <Minus className="h-5 w-5 shrink-0 text-[#2D2C2B]/70" />
              ) : (
                <Plus className="h-5 w-5 shrink-0 text-[#2D2C2B]/70" />
              )}
            </button>
            <div
              className={`grid transition-all duration-300 ease-out ${
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <div className="px-6 pb-5 pt-1 text-[16px] leading-[26px] text-[#2D2C2B]/80">
                  {item.content ?? "Více informací brzy doplníme."}
                </div>
              </div>
            </div>
          </li>
        )
      })}
    </ul>
  )
}
