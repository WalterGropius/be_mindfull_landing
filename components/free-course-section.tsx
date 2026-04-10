"use client"

import { useState, useRef, useEffect } from "react"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Typography } from "@/components/ui/typography"
import { Input } from "@/components/ui/input"

// Start/end coordinates for the orange dot within the cloud SVG viewBox.
const DOT_START = { cx: 35.35, cy: 113.52 }
const DOT_END = { cx: 141.61, cy: 39.43 }

export function FreeCourseSection() {
  const ref = useRef<HTMLDivElement>(null)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const update = () => {
      const el = ref.current
      if (!el) return
      const rect = el.getBoundingClientRect()
      const viewport = window.innerHeight || document.documentElement.clientHeight
      // Map the element's travel through the viewport to a 0..1 progress.
      // 0  -> element's top has just entered the bottom of the viewport
      // 1  -> element's bottom has just left the top of the viewport
      const total = viewport + rect.height
      const traveled = viewport - rect.top
      const p = Math.min(1, Math.max(0, traveled / total))
      setProgress(p)
    }
    update()
    window.addEventListener("scroll", update, { passive: true })
    window.addEventListener("resize", update)
    return () => {
      window.removeEventListener("scroll", update)
      window.removeEventListener("resize", update)
    }
  }, [])

  const dotCx = DOT_START.cx + (DOT_END.cx - DOT_START.cx) * progress
  const dotCy = DOT_START.cy + (DOT_END.cy - DOT_START.cy) * progress

  return (
    <section className="bg-[#C0D1C6] relative overflow-hidden py-20 lg:py-28">
      <div className="relative mx-auto z-10 mb-10 mt-0 max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          {/* Cloud Illustrations */}
          <div ref={ref} className="relative mx-auto w-[90%] md:w-[70%] max-w-[500px] h-[200px] lg:h-[250px] pointer-events-none">
            <img src="/Illustrations/clouds_00.svg" alt="" className="absolute inset-0 w-full h-full object-contain object-bottom" />
            <svg
              viewBox="0 0 198.43 170.08"
              preserveAspectRatio="xMidYMax meet"
              className="absolute inset-0 w-full h-full"
            >
              <circle
                fill="#e58c34"
                cx={dotCx}
                cy={dotCy}
                r="15.16"
              />
            </svg>
          </div>

          <Typography variant="span" align="center" color="inverse" className="text-sm font-bold uppercase tracking-[0.2em] block">
            Bezplatný 3denní program
          </Typography>
          <Typography variant="h2" align="center" className="mt-4">
            Start-to-PAUSE: Tři dny k větší rovnováze
          </Typography>
          <Typography variant="p" align="center" className="mt-6">
            Naučíte se zastavit uprostřed rušeného dne. Budete schopni rychleji zklidnit mysl a uvolnit tělo.
          </Typography>
          <Typography variant="p" align="center" className="mt-4">
            Odnesete si 3 konkrétní nástroje, které vám pomohou přepnout během pěti minut ze stresu do uvolnění.
          </Typography>
          <div className="mt-10 mx-auto max-w-md">
            <form className="flex flex-col sm:flex-row gap-4">
               <Input 
                 type="email" 
                 placeholder="Váš e-mail" 
                 required
                 className="h-auto py-[18px] px-[24px] flex-1 rounded-2xl border border-border-subtle bg-surface-white text-[18px] text-typography-body placeholder:text-muted-foreground focus-visible:border-primary-green focus-visible:ring-0 focus-visible:shadow-none"
               />
               <Button type="submit" variant="primary-orange" size="default" className="group gap-0">
                 <span className="flex items-center gap-2">Začít hned <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" /></span>
               </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
