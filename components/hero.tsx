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
    alt: "FREE 4denní online kurz Start-to-PAUSE",
    eyebrow: null as string | null,
    title: (
      <>
        Nauč se zastavit.<br />Restart hlavy za 4 dny.<br />Zdarma.
      </>
    ),
    subtitle: "Dokážeš se zastavit i uprostřed rušného dne a rychleji zklidníš mysl i tělo.",
    imgClassName: "object-cover",
    cta: "Vstoupit do kurzu",
    href: "/kurzy/start-to-pause",
  },
  {
    src: "/Theme_Foundations.jpg",
    alt: "be.mindful Foundations",
    eyebrow: null,
    title: (
      <>
        be.mindful<br />FOUNDATIONS
      </>
    ),
    subtitle: "Základ, který ti vydrží. Od stresu a zahlcení ke klidu a větší lehkosti.",
    imgClassName: "object-cover",
    cta: "Vstoupit do kurzu",
    href: "/kurzy/foundations",
  },
  {
    src: "/Theme_8-weeks-course.jpg",
    alt: "8týdenní kurz mindfulness",
    eyebrow: "Skupinový kurz",
    title: <>8týdenní kurz mindfulness (MBSR)</>,
    subtitle: "Nejuznávanější program na světě. Klid, který vydrží – i když přijde bouře.",
    imgClassName: "object-cover object-[75%_center] lg:object-center",
    cta: "Vstoupit do kurzu",
    href: "/kurzy/skupinovy-kurz",
  },
  {
    src: "/Theme_Companies.jpg",
    alt: "Mindfulness pro firmy",
    eyebrow: "Firemní programy",
    title: <>Od stresu k odolnosti vašich lidí.</>,
    subtitle:
      "Lidé, kteří zvládají tlak, jsou silnějšími leadery, spolupracují bez tření a podávají výkon – i v těžších chvílích.",
    imgClassName: "object-cover",
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
                Schopnost zastavit se patří v dnešním světě k nejdůležitějším dovednostem. Pomůže ti zklidnit mysl, lépe zvládat stres a přinést do života víc klidu, lehkosti a nadhledu.
              </Typography>
              <div className="mt-8">
                <Button asChild variant="primary-orange" className="group">
                  <Link href="/kurzy/foundations">
                    <span className="flex items-center gap-2">
                      Podívej se na kurzy{" "}
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
            key={slide.href}
            className="relative min-h-[500px] min-w-full overflow-hidden bg-[#1A1A1A] lg:min-h-[580px]"
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              className={slide.imgClassName}
              sizes="100vw"
            />
            <div className="relative z-10 mx-auto flex min-h-[500px] max-w-7xl items-center px-6 py-20 lg:min-h-[580px] lg:px-8 lg:py-28">
              <div className="max-w-xl">
                {slide.eyebrow && (
                  <p className="text-sm font-semibold uppercase tracking-wider text-[#E58C34]">
                    {slide.eyebrow}
                  </p>
                )}
                <h1
                  className={`${slide.eyebrow ? "mt-2 " : ""}text-[28px] font-bold leading-[38px] text-white sm:text-5xl lg:text-[64px] lg:leading-[1.1]`}
                >
                  {slide.title}
                </h1>
                <p className="mt-4 text-[18px] leading-[30px] text-white/85">
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
