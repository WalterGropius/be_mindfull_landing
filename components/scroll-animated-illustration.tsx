"use client"

import { useEffect, useRef, useState } from "react"

export type IllustrationDot = {
  from: { cx: number; cy: number; r: number }
  to: { cx: number; cy: number; r: number }
  fill?: string
}

type Props = {
  /** path to the static outline SVG (e.g. /Illustrations/wave_00.svg) */
  outlineSrc: string
  /** SVG viewBox matching the outline + dot coordinate space */
  viewBox: string
  /** one or more orange dots whose cx/cy/r interpolate from state 1 to state 2 */
  dots: IllustrationDot[]
  width?: number
  height?: number
  /** scroll progress (0..1 across the element's traversal of the viewport)
   * at which the animation starts. Default 0.30 — the user has scrolled
   * about a third of the way past the section's entry before motion begins,
   * giving them a clear look at the initial state. */
  startProgress?: number
  /** scroll progress at which the animation reaches its final state.
   * Default 0.65 — animation finishes before the section starts leaving
   * the top of the viewport, so the final state is visible too. */
  endProgress?: number
}

export function ScrollAnimatedIllustration({
  outlineSrc,
  viewBox,
  dots,
  width = 320,
  height = 320,
  startProgress = 0.3,
  endProgress = 0.65,
}: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    let frame = 0
    const update = () => {
      frame = 0
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

  const span = Math.max(0.001, endProgress - startProgress)
  const t = Math.min(1, Math.max(0, (progress - startProgress) / span))
  const lerp = (a: number, b: number) => a + (b - a) * t

  return (
    <div
      ref={ref}
      className="relative pointer-events-none"
      style={{ width, height }}
    >
      <img
        src={outlineSrc}
        alt=""
        className="absolute inset-0 h-full w-full object-contain"
      />
      <svg
        viewBox={viewBox}
        preserveAspectRatio="xMidYMid meet"
        className="absolute inset-0 h-full w-full"
        aria-hidden="true"
      >
        {dots.map((dot, i) => (
          <circle
            key={i}
            cx={lerp(dot.from.cx, dot.to.cx)}
            cy={lerp(dot.from.cy, dot.to.cy)}
            r={lerp(dot.from.r, dot.to.r)}
            fill={dot.fill ?? "#e58c34"}
          />
        ))}
      </svg>
    </div>
  )
}
