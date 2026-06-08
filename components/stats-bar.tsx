"use client"

import { useEffect, useRef, useState } from "react"

type Stat = { num: string; label: string }

const defaultStats: Stat[] = [
  { num: "9+", label: "Let praxe" },
  { num: "3000+", label: "Absolventů" },
  { num: "1", label: "Senior Mindfulness Teacher v ČR" },
]

function parseStat(num: string) {
  const match = num.match(/^(\d+)(.*)$/)
  if (!match) return { target: 0, suffix: num }
  return { target: parseInt(match[1], 10), suffix: match[2] }
}

function AnimatedNumber({ value }: { value: string }) {
  const { target, suffix } = parseStat(value)
  const [current, setCurrent] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const startedRef = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !startedRef.current) {
            startedRef.current = true
            const duration = 2200
            const start = performance.now() + 250
            const tick = (now: number) => {
              if (now < start) {
                requestAnimationFrame(tick)
                return
              }
              const elapsed = now - start
              const progress = Math.min(1, elapsed / duration)
              const eased = 1 - Math.pow(1 - progress, 3)
              setCurrent(Math.round(target * eased))
              if (progress < 1) requestAnimationFrame(tick)
            }
            requestAnimationFrame(tick)
          }
        })
      },
      { threshold: 0.85 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [target])

  return (
    <span ref={ref}>
      {current}
      {suffix}
    </span>
  )
}

export function StatsBar({ stats = defaultStats }: { stats?: Stat[] }) {
  return (
    <section className="bg-[#7BC0A4] py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-3 divide-x-2 divide-[#E3FFE2] text-center">
          {stats.map((s) => (
            <div key={s.label} className="px-2 sm:px-6">
              <p className="text-3xl font-bold text-[#E3FFE2] sm:text-5xl lg:text-6xl">
                <AnimatedNumber value={s.num} />
              </p>
              <p className="mt-2 text-sm font-semibold leading-snug text-[#E3FFE2] sm:text-[18px] sm:leading-[30px]">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
