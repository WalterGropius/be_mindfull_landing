"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Play } from "lucide-react"

export type VideoTestimonial = {
  quote: string
  name: string
  text: string
  image: string
}

export function VideoTestimonialsCarousel({
  testimonials,
}: {
  testimonials: VideoTestimonial[]
}) {
  const [start, setStart] = useState(0)
  const visibleCount = 3
  const maxStart = Math.max(0, testimonials.length - visibleCount)
  const canPrev = start > 0
  const canNext = start < maxStart

  const prev = () => setStart((s) => Math.max(0, s - 1))
  const next = () => setStart((s) => Math.min(maxStart, s + 1))

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div
          className="flex gap-6 transition-transform duration-500 ease-out"
          style={{
            transform: `translateX(calc(-${start} * (100% / ${visibleCount} + 1.5rem / ${visibleCount})))`,
          }}
        >
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="w-full shrink-0 overflow-hidden rounded-2xl bg-[#F5F6F7] md:w-[calc((100%-3rem)/3)]"
            >
              <div className="relative">
                <Image
                  src={t.image}
                  alt={t.name}
                  width={400}
                  height={280}
                  className="h-52 w-full object-cover"
                />
                <button
                  type="button"
                  aria-label={`Přehrát video ${t.name}`}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#7BC0A4]/80 shadow-lg transition group-hover:scale-110">
                    <Play className="ml-1 h-5 w-5 fill-white text-white" />
                  </span>
                </button>
              </div>
              <div className="p-6">
                <p className="text-base font-bold text-[#2D2C2B]">&ldquo;{t.quote}&rdquo;</p>
                <p className="mt-3 text-sm leading-relaxed text-[#4B4C4D]">{t.text}</p>
                <p className="mt-4 text-sm font-semibold text-[#2D2C2B]">{t.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        type="button"
        onClick={prev}
        disabled={!canPrev}
        aria-label="Předchozí"
        className="absolute -left-4 top-24 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-md transition disabled:cursor-not-allowed disabled:opacity-40 hover:bg-[#F5F6F4] md:flex lg:-left-6"
      >
        <ChevronLeft className="h-5 w-5 text-[#2D2C2B]" />
      </button>
      <button
        type="button"
        onClick={next}
        disabled={!canNext}
        aria-label="Další"
        className="absolute -right-4 top-24 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-md transition disabled:cursor-not-allowed disabled:opacity-40 hover:bg-[#F5F6F4] md:flex lg:-right-6"
      >
        <ChevronRight className="h-5 w-5 text-[#2D2C2B]" />
      </button>

      <div className="mt-8 flex justify-center gap-2">
        {Array.from({ length: maxStart + 1 }).map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setStart(i)}
            aria-label={`Skupina ${i + 1}`}
            className={`h-2 rounded-full transition-all ${
              i === start ? "w-6 bg-[#7BC0A4]" : "w-2 bg-[#C0D1C6]"
            }`}
          />
        ))}
      </div>
    </div>
  )
}
