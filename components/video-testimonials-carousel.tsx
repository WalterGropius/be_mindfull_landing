"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Play, X } from "lucide-react"

export type VideoTestimonial = {
  quote: string
  name: string
  text?: string
  image: string
  video?: string
}

const SAMPLE_VIDEO = "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"

export function VideoTestimonialsCarousel({
  testimonials,
}: {
  testimonials: VideoTestimonial[]
}) {
  const [start, setStart] = useState(0)
  const [openIdx, setOpenIdx] = useState<number | null>(null)
  const visibleCount = 3
  const maxStart = Math.max(0, testimonials.length - visibleCount)

  useEffect(() => {
    if (maxStart === 0 || openIdx !== null) return
    const id = setInterval(() => {
      setStart((s) => (s >= maxStart ? 0 : s + 1))
    }, 6000)
    return () => clearInterval(id)
  }, [maxStart, openIdx])

  useEffect(() => {
    if (openIdx === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenIdx(null)
    }
    window.addEventListener("keydown", onKey)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"
    return () => {
      window.removeEventListener("keydown", onKey)
      document.body.style.overflow = prevOverflow
    }
  }, [openIdx])

  const openTestimonial = openIdx !== null ? testimonials[openIdx] : null

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
                  onClick={() => setOpenIdx(i)}
                  aria-label={`Přehrát video ${t.name}`}
                  className="group absolute inset-0 flex items-center justify-center"
                >
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#7BC0A4]/80 shadow-lg transition group-hover:scale-110">
                    <Play className="ml-1 h-5 w-5 fill-white text-white" />
                  </span>
                </button>
              </div>
              <div className="p-6">
                <p className="text-[18px] font-bold leading-[30px] text-[#2D2C2B]">&ldquo;{t.quote}&rdquo;</p>
                {t.text && (
                  <p className="mt-3 text-[18px] leading-[30px] text-[#4B4C4D]">{t.text}</p>
                )}
                <p className="mt-4 text-sm font-semibold text-[#2D2C2B]">{t.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

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

      {openTestimonial && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4 py-8"
          onClick={() => setOpenIdx(null)}
        >
          <div
            className="relative w-full max-w-3xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setOpenIdx(null)}
              aria-label="Zavřít"
              className="absolute -top-12 right-0 flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-white transition hover:bg-white/25"
            >
              <X className="h-5 w-5" />
            </button>
            <video
              key={openTestimonial.video ?? SAMPLE_VIDEO}
              src={openTestimonial.video ?? SAMPLE_VIDEO}
              controls
              autoPlay
              className="aspect-video w-full rounded-2xl bg-black"
            />
            <p className="mt-4 text-sm text-white/85">{openTestimonial.name}</p>
          </div>
        </div>
      )}
    </div>
  )
}
