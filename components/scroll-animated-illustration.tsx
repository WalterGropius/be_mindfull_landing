"use client"

import { useEffect, useRef, useState } from "react"

export type IllustrationDot = {
  from: { cx: number; cy: number; r: number }
  to: { cx: number; cy: number; r: number }
  fill?: string
}

type OutlineImg = {
  src: string
}

type OutlineInline = {
  paths: { d: string }[]
  /** Fill colour for the inline paths. Use the section's bg colour to
   * have the outline occlude any dots rendered behind it. */
  fill?: string
  /** Stroke colour. Defaults to #010101 to match the source SVGs. */
  stroke?: string
  strokeWidth?: number
}

/** A single styled SVG path. Used for `frontPaths` so each path can opt
 * into its own fill (e.g. only the rim of a glass needs to occlude). */
export type StyledPath = {
  d: string
  fill?: string
  stroke?: string
  strokeWidth?: number
}

type Props = {
  outline: OutlineImg | OutlineInline
  /** Optional paths drawn AFTER the dots, on top of everything. Use this
   * for the parts of an illustration that should occlude the dots — e.g.
   * the rim of a glass when the dot passes behind it on its way up. Fill
   * an occluding path with the section's background colour. */
  frontPaths?: StyledPath[]
  /** SVG viewBox matching the outline + dot coordinate space. */
  viewBox: string
  dots: IllustrationDot[]
  /** When true, dots are rendered behind the outline so the outline
   * occludes them (requires inline outline with a non-transparent fill). */
  dotsBehind?: boolean
  width?: number
  height?: number
  /** Scroll progress (0..1 across the element's traversal of the
   * viewport) at which the animation starts. Default 0.50. */
  startProgress?: number
  /** Scroll progress at which the animation ends. Default 0.55. */
  endProgress?: number
}

function isInline(o: OutlineImg | OutlineInline): o is OutlineInline {
  return Array.isArray((o as OutlineInline).paths)
}

export function ScrollAnimatedIllustration({
  outline,
  frontPaths,
  viewBox,
  dots,
  dotsBehind = false,
  width = 320,
  height = 320,
  startProgress = 0.5,
  endProgress = 0.55,
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

  const inline = isInline(outline)

  const circles = dots.map((dot, i) => (
    <circle
      key={i}
      cx={lerp(dot.from.cx, dot.to.cx)}
      cy={lerp(dot.from.cy, dot.to.cy)}
      r={lerp(dot.from.r, dot.to.r)}
      fill={dot.fill ?? "#e58c34"}
    />
  ))

  return (
    <div
      ref={ref}
      className="relative pointer-events-none"
      style={{ width, height }}
    >
      {!inline && (
        <img
          src={(outline as OutlineImg).src}
          alt=""
          className="absolute inset-0 h-full w-full object-contain"
        />
      )}
      <svg
        viewBox={viewBox}
        preserveAspectRatio="xMidYMid meet"
        className="absolute inset-0 h-full w-full"
        aria-hidden="true"
      >
        {dotsBehind && circles}
        {inline &&
          (outline as OutlineInline).paths.map((p, i) => (
            <path
              key={`p-${i}`}
              d={p.d}
              fill={(outline as OutlineInline).fill ?? "none"}
              stroke={(outline as OutlineInline).stroke ?? "#010101"}
              strokeWidth={(outline as OutlineInline).strokeWidth ?? 0.6}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          ))}
        {!dotsBehind && circles}
        {frontPaths?.map((p, i) => (
          <path
            key={`f-${i}`}
            d={p.d}
            fill={p.fill ?? "none"}
            stroke={p.stroke ?? "#010101"}
            strokeWidth={p.strokeWidth ?? 0.6}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        ))}
      </svg>
    </div>
  )
}
