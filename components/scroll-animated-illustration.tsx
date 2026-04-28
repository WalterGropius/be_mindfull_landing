"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

type Props = {
  state1Src: string
  state2Src: string
  alt?: string
  width?: number
  height?: number
  /**
   * Fraction of the viewport (from top) at which the illustration's
   * vertical centre triggers the swap to state 2. Lower values mean
   * the swap happens later (after more scrolling). Default 0.45.
   */
  triggerAt?: number
}

export function ScrollAnimatedIllustration({
  state1Src,
  state2Src,
  alt = "",
  width = 320,
  height = 320,
  triggerAt = 0.45,
}: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const [advanced, setAdvanced] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    let frame = 0
    const update = () => {
      frame = 0
      const rect = el.getBoundingClientRect()
      const viewport = window.innerHeight
      const elementCenter = rect.top + rect.height / 2
      setAdvanced(elementCenter < viewport * triggerAt)
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
  }, [triggerAt])

  return (
    <div
      ref={ref}
      className="relative"
      style={{ width, height }}
    >
      <Image
        src={state1Src}
        alt={alt}
        width={width}
        height={height}
        className={`absolute inset-0 h-full w-full transition-opacity duration-300 ease-out ${
          advanced ? "opacity-0" : "opacity-100"
        }`}
      />
      <Image
        src={state2Src}
        alt={alt}
        width={width}
        height={height}
        className={`absolute inset-0 h-full w-full transition-opacity duration-300 ease-out ${
          advanced ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  )
}
