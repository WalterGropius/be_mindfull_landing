"use client"

import { useState, useRef, useEffect } from "react"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Typography } from "@/components/ui/typography"
import { Input } from "@/components/ui/input"

// Start/end coordinates for the orange dot within the cloud SVG viewBox.
const DOT_START = { cx: 35.35, cy: 113.52 }
const DOT_END = { cx: 141.61, cy: 39.43 }
const DOT_R = 15.16

// Section background colour — used to fill the cloud paths so the sun
// passes BEHIND them instead of in front.
const SECTION_BG = "#C0D1C6"

const CLOUD_PATHS = [
  "M9.85,107.13c.08,0,.85,0,.93,0,3.64,0,7.34-.3,11.02-.3,4.01,0,9.82.37,17.39.37,6.4,0,14.21.14,14.21-5.23,0-2.26-2.2-4.47-5.37-4.47-.97,0-2.02.21-3.13.68.4-.82.59-1.64.59-2.38,0-1.68-.97-2.95-2.66-2.95-.61,0-1.33.17-2.12.55,2.32-2.06,3.25-4.16,3.25-5.99,0-3.02-2.53-5.28-5.46-5.28-1.98,0-4.14,1.03-5.83,3.56.1-.5.14-1,.14-1.48,0-3.87-2.95-6.91-6.53-6.91-3.79,0-7.72,2.98-7.98,10.51-1.47-1.05-3.04-1.89-4.71-1.89-2.6,0-5.91,2.2-5.91,6.88,0,2.62.95,5.45,1.92,7.61-.78-.09-1.52-.26-2.27-.26-2.09,0-3.25,1.46-3.25,3.38,0,1.26.56,2.52,1.68,3.06,1.41.69,2.4.55,4.11.55Z",
  "M147.75,116.83c.28,0,.56,0,.82,0,6.34.04,12.68.21,19.01.54,6.11.31,12.17.88,18.27.11,3.36-.42,8.85-1.85,8.85-6.16,0-2.86-3.62-5.46-8.1-5.46-1.41,0-2.91.26-4.4.85,2.3-2.81,3.22-5.13,3.22-6.94,0-2.92-2.42-4.47-5.32-4.47-2.34,0-4.99,1-6.96,3.11.61-1.6,1.43-3.11,1.43-4.83,0-3.44-3.22-5.63-6.7-5.63s-7.18,2.17-8.09,7.37c-.81-3.4-2.81-4.9-4.97-4.9-3.49,0-7.39,3.9-7.39,10.06,0,1.38.19,2.86.63,4.44-.51-.04-1.01-.05-1.49-.05-6.41,0-9.76,3.06-9.76,6.07,0,5.64,6.69,5.85,10.95,5.88Z",
  "M75.15,134.43c1.16-.01,2.33-.02,3.49,0,7.79.04,15.58.08,23.37.12,7.66.04,24.09.88,24.33-10.48.07-3.18-2.04-6.26-6.87-7.6,1.22-2.16,2.56-4.99,2.61-7.68.14-6.63-5.7-5.49-6.05-7.2-.4-1.93,1.83-12.91-10.71-13.18-5.88-.12-9.69,4.52-12.44,9.7-2.34-3.04-4.96-4.47-7.43-4.52-3.7-.08-7.04,2.93-8.55,8.24-1.25-1.78-2.81-6.95-9.93-7.1-5.55-.12-7.92,5.39-8.04,10.9-.06,2.78.46,5.57,1.43,7.63-2.04-.09-4.13-.42-6.17-.47-9.35-.2-12.93,10.12-13.02,14.29-.15,6.89,7.58,7.4,14.62,7.55,6.45.14,12.9-.13,19.35-.19Z",
]

// Animation timing — start a bit after the section enters, finish before
// it leaves so the user gets a clear look at both the initial and final
// states. Both values are in [0..1] of the section's full traversal of
// the viewport.
const START_PROGRESS = 0.32
const END_PROGRESS = 0.7

export function FreeCourseSection() {
  const ref = useRef<HTMLDivElement>(null)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    let frame = 0
    const update = () => {
      frame = 0
      const el = ref.current
      if (!el) return
      const rect = el.getBoundingClientRect()
      const viewport = window.innerHeight || document.documentElement.clientHeight
      const total = viewport + rect.height
      const traveled = viewport - rect.top
      const p = Math.min(1, Math.max(0, traveled / total))
      setProgress(p)
    }
    const onScroll = () => {
      if (frame) return
      frame = requestAnimationFrame(update)
    }
    update()
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onScroll)
    return () => {
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onScroll)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [])

  const span = Math.max(0.001, END_PROGRESS - START_PROGRESS)
  const t = Math.min(1, Math.max(0, (progress - START_PROGRESS) / span))
  const dotCx = DOT_START.cx + (DOT_END.cx - DOT_START.cx) * t
  const dotCy = DOT_START.cy + (DOT_END.cy - DOT_START.cy) * t

  return (
    <section className="bg-[#C0D1C6] relative overflow-hidden py-20 lg:py-28">
      <div className="relative mx-auto z-10 mb-10 mt-0 max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          {/* Cloud + sun illustration. Sun is rendered first so the
              filled cloud paths overlap it and it appears tucked
              between the clouds. */}
          <div ref={ref} className="relative mx-auto w-[90%] md:w-[70%] max-w-[500px] h-[200px] lg:h-[250px] pointer-events-none">
            <svg
              viewBox="0 0 198.43 170.08"
              preserveAspectRatio="xMidYMax meet"
              className="absolute inset-0 w-full h-full"
              aria-hidden="true"
            >
              <circle fill="#e58c34" cx={dotCx} cy={dotCy} r={DOT_R} />
              {CLOUD_PATHS.map((d, i) => (
                <path
                  key={i}
                  d={d}
                  fill={SECTION_BG}
                  stroke="#010101"
                  strokeWidth="0.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              ))}
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
