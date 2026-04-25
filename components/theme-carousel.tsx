"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"

const slides = [
  {
    src: "/Theme_4-days_FREE.jpg",
    title: "Start-to-PAUSE",
    subtitle: "Bezplatný 4denní online kurz",
    href: "/kurzy/start-to-pause",
  },
  {
    src: "/Theme_Foundations.jpg",
    title: "be.mindful FOUNDATIONS",
    subtitle: "Online kurz se základy mindfulness",
    href: "/kurzy/foundations",
  },
  {
    src: "/Theme_8-weeks-course.jpg",
    title: "8týdenní kurz mindfulness",
    subtitle: "Skupinový kurz v Praze",
    href: "/kurzy/skupinovy-kurz",
  },
  {
    src: "/Theme_Companies.jpg",
    title: "Mindfulness pro firmy",
    subtitle: "Programy na míru",
    href: "/kurzy/firmy",
  },
]

export function ThemeCarousel() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length)
    }, 5000)
    return () => clearInterval(id)
  }, [])

  const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length)
  const next = () => setIndex((i) => (i + 1) % slides.length)

  return (
    <section className="bg-surface-white py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[1.5rem]">
          <div
            className="flex transition-transform duration-700 ease-out"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {slides.map((slide) => (
              <Link
                key={slide.title}
                href={slide.href}
                className="group relative block min-w-full"
              >
                <div className="relative aspect-[16/7] w-full">
                  <Image
                    src={slide.src}
                    alt={slide.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 1280px) 100vw, 1280px"
                    priority={slide === slides[0]}
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
                  <div className="absolute inset-0 flex items-center px-8 lg:px-16">
                    <div className="max-w-lg text-white">
                      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/80">
                        {slide.subtitle}
                      </p>
                      <h3 className="mt-3 text-3xl font-bold leading-tight lg:text-4xl">
                        {slide.title}
                      </h3>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <button
            type="button"
            onClick={prev}
            aria-label="Předchozí"
            className="absolute left-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/85 text-[#2D2C2B] shadow transition hover:bg-white"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Další"
            className="absolute right-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/85 text-[#2D2C2B] shadow transition hover:bg-white"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 gap-2">
            {slides.map((s, i) => (
              <button
                key={s.title}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Slide ${i + 1}`}
                className={`h-2 rounded-full transition-all ${
                  i === index ? "w-6 bg-white" : "w-2 bg-white/60"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
