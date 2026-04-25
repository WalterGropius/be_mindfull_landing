"use client"

import { useEffect, useRef, useState } from "react"

type Stat = { num: string; label: string }

const defaultStats: Stat[] = [
  { num: "15+", label: "Let praxe" },
  { num: "2K+", label: "Absolventi" },
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
            const duration = 1200
            const start = performance.now()
            const tick = (now: number) => {
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
      { threshold: 0.4 }
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
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-3 divide-x-2 divide-[#E3FFE2] text-center">
          {stats.map((s) => (
            <div key={s.label} className="px-6">
              <p className="text-5xl font-bold text-[#E3FFE2] lg:text-6xl">
                <AnimatedNumber value={s.num} />
              </p>
              <p className="mt-2 text-base font-semibold text-[#E3FFE2]">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
