"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Play } from "lucide-react"
import { webmFrom } from "@/components/trailer-embed"

export type VideoTestimonial = {
  quote: string
  name: string
  text?: string
  image: string
  video?: string
  poster?: string
}

export function VideoTestimonialsCarousel({
  testimonials,
}: {
  testimonials: VideoTestimonial[]
}) {
  const [start, setStart] = useState(0)
  const [playingIdx, setPlayingIdx] = useState<number | null>(null)
  const visibleCount = 3
  const maxStart = Math.max(0, testimonials.length - visibleCount)
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([])

  // Auto-advance the carousel — pause while a video is playing.
  useEffect(() => {
    if (maxStart === 0 || playingIdx !== null) return
    const id = setInterval(() => {
      setStart((s) => (s >= maxStart ? 0 : s + 1))
    }, 6000)
    return () => clearInterval(id)
  }, [maxStart, playingIdx])

  // Whenever playingIdx changes, pause every other video and reset its
  // playback position so its preview frame shows again.
  useEffect(() => {
    videoRefs.current.forEach((v, i) => {
      if (!v) return
      if (i !== playingIdx && !v.paused) {
        v.pause()
        try {
          v.currentTime = 0
        } catch {
          /* some browsers throw before metadata loads — safe to ignore */
        }
      }
    })
  }, [playingIdx])

  const handlePlay = (i: number) => {
    setPlayingIdx(i)
    const v = videoRefs.current[i]
    if (v) {
      v.play().catch(() => {
        /* autoplay blocked — user can hit native controls */
      })
    }
  }

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div
          className="flex gap-6 transition-transform duration-500 ease-out"
          style={{
            transform: `translateX(calc(-${start} * (100% / ${visibleCount} + 1.5rem / ${visibleCount})))`,
          }}
        >
          {testimonials.map((t, i) => {
            const isPlaying = playingIdx === i
            // Append a small time fragment so browsers render a real frame as the
            // initial preview instead of a black box (works without separate poster files).
            const fragment = t.video ? "#t=0.5" : ""
            return (
              <div
                key={i}
                className="flex w-full shrink-0 flex-col overflow-hidden rounded-2xl bg-[#F5F6F7] md:w-[calc((100%-3rem)/3)]"
              >
                <div
                  className="relative w-full shrink-0 bg-black aspect-video"
                >
                  {t.video ? (
                    <>
                      <video
                        ref={(el) => {
                          videoRefs.current[i] = el
                        }}
                        poster={t.poster}
                        playsInline
                        preload="metadata"
                        controls={isPlaying}
                        onPause={() => setPlayingIdx((cur) => (cur === i ? null : cur))}
                        onEnded={() => setPlayingIdx((cur) => (cur === i ? null : cur))}
                        className="h-full w-full bg-black object-cover"
                      >
                        <source src={`${webmFrom(t.video)}${fragment}`} type="video/webm" />
                        <source src={`${t.video}${fragment}`} type="video/mp4" />
                      </video>
                      {!isPlaying && (
                        <button
                          type="button"
                          onClick={() => handlePlay(i)}
                          aria-label={`Přehrát video ${t.name}`}
                          className="group absolute inset-0 flex items-center justify-center bg-black/10 transition hover:bg-black/20"
                        >
                          <span className="flex h-16 w-16 items-center justify-center rounded-full bg-[#7BC0A4]/90 shadow-lg transition group-hover:scale-110">
                            <Play className="ml-1 h-6 w-6 fill-white text-white" />
                          </span>
                        </button>
                      )}
                    </>
                  ) : (
                    <Image
                      src={t.poster ?? t.image}
                      alt={t.name}
                      fill
                      sizes="(min-width: 768px) 33vw, 100vw"
                      className="object-cover"
                    />
                  )}
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="font-bold text-[#2D2C2B] text-[18px] leading-[30px]">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  {t.text && (
                    <p className="mt-3 text-[#4B4C4D] text-[18px] leading-[30px]">
                      {t.text}
                    </p>
                  )}
                  <p className="mt-4 font-semibold text-[#2D2C2B] text-sm">
                    {t.name}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      <div className="mt-8 flex justify-center gap-2">
        {Array.from({ length: maxStart + 1 }).map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setStart(i)}
            aria-label={`Skupina ${i + 1}`}
            className={`h-2 rounded-full transition-all ${
              i === start ? "w-6 bg-[#7BC0A4]" : "w-2 bg-[#C0D1C6]"
            }`}
          />
        ))}
      </div>
    </div>
  )
}
