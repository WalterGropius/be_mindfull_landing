"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Typography } from "@/components/ui/typography"

const courseSlides = [
  {
    src: "/Theme_4-days_FREE.jpg",
    title: "Nauč se zastavit. Restart hlavy za čtyři dny.",
    subtitle: "Bezplatný 4denní program.",
    cta: "Vstoupit do kurzu",
    href: "/kurzy/start-to-pause",
  },
  {
    src: "/Theme_Foundations.jpg",
    title: "be.mindful FOUNDATIONS",
    subtitle: "Krok za krokem k větší lehkosti v životě.",
    cta: "Vstoupit do kurzu",
    href: "/kurzy/foundations",
  },
  {
    src: "/Theme_8-weeks-course.jpg",
    title: "8týdenní kurz mindfulness (MBSR)",
    subtitle: "Začni reagovat jinak na každodenní problémy.",
    cta: "Vstoupit do kurzu",
    href: "/kurzy/skupinovy-kurz",
  },
  {
    src: "/Theme_Companies.jpg",
    title: "Mindfulness ve firmách",
    subtitle: "Klid a nadhled i v době spěchu, deadlinů a změn.",
    cta: "Zobrazit programy",
    href: "/kurzy/firmy",
  },
]

const totalSlides = 1 + courseSlides.length

export function Hero() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % totalSlides)
    }, 3500)
    return () => clearInterval(id)
  }, [])

  return (
    <section className="relative w-full overflow-hidden">
      <div
        className="flex transition-transform duration-700 ease-out"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {/* Slide 1: Homepage hero */}
        <div className="relative min-h-[500px] min-w-full overflow-hidden bg-primary-green-dark lg:min-h-[580px]">
          <div className="pointer-events-none absolute bottom-[-40%] left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-primary-green lg:bottom-[-100%] lg:h-[950px] lg:w-[950px]" />
          <div className="relative z-10 mx-auto flex min-h-[500px] max-w-7xl items-center px-6 py-20 lg:min-h-[580px] lg:px-8">
            <div className="relative z-20 max-w-2xl">
              <Typography
                variant="display"
                className="text-balance sm:text-5xl lg:text-[64px] lg:leading-[1.1]"
              >
                Zastav se a vytvoř si<br />prostor pro změnu ve svém životě.
              </Typography>
              <Typography variant="p" className="mt-6 max-w-md text-pretty">
                Schopnost zastavit se patří v dnešním světě k důležitým dovednostem. Pomůže ti zklidnit mysl, lépe zvládat stres a přinést do života víc klidu, lehkosti a nadhledu.
              </Typography>
              <div className="mt-8">
                <Button asChild variant="primary-orange" className="group">
                  <Link href="/kurzy/foundations">
                    <span className="flex items-center gap-2">
                      Zobrazit kurzy{" "}
                      <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </span>
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Course slides */}
        {courseSlides.map((slide) => (
          <div
            key={slide.title}
            className="relative min-h-[500px] min-w-full overflow-hidden bg-[#1A1A1A] lg:min-h-[580px]"
          >
            <Image
              src={slide.src}
              alt={slide.title}
              fill
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/20 to-transparent" />
            <div className="relative z-10 mx-auto flex min-h-[500px] max-w-7xl items-center px-6 py-20 lg:min-h-[580px] lg:px-8 lg:py-28">
              <div className="max-w-2xl">
                <h1 className="text-[28px] font-bold leading-[38px] text-white sm:text-5xl lg:text-[64px] lg:leading-[1.1]">
                  {slide.title}
                </h1>
                <p className="mt-4 max-w-md text-[18px] leading-[30px] text-white/85">
                  {slide.subtitle}
                </p>
                <div className="mt-8">
                  <Button asChild variant="primary-orange" className="group">
                    <Link href={slide.href}>
                      <span className="flex items-center gap-2">
                        {slide.cta}
                        <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                      </span>
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute bottom-5 left-1/2 z-30 flex -translate-x-1/2 gap-2">
        {Array.from({ length: totalSlides }, (_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setIndex(i)}
            aria-label={`Slide ${i + 1}`}
            className={`h-2 rounded-full transition-all ${
              i === index ? "w-6 bg-white" : "w-2 bg-white/60"
            }`}
          />
        ))}
      </div>
    </section>
  )
}
