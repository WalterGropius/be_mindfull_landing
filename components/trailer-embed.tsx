"use client"

import { useRef, useState } from "react"
import Image from "next/image"
import { Play } from "lucide-react"

interface TrailerEmbedProps {
  videoSrc: string
  poster: string
  alt: string
  className?: string
}

// The VP9/WebM version sits next to the mp4 in /public (smaller, served first).
export function webmFrom(src: string) {
  return src.replace(/\.mp4(?=$|[?#])/, ".webm")
}

export function TrailerEmbed({ videoSrc, poster, alt, className }: TrailerEmbedProps) {
  const [started, setStarted] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const start = () => {
    const video = videoRef.current
    if (!video) return
    setStarted(true)
    video.play().catch(() => {})
  }

  return (
    <div
      className={`relative aspect-video w-full overflow-hidden rounded-2xl bg-secondary ${className ?? ""}`}
    >
      <video
        ref={videoRef}
        poster={poster}
        playsInline
        preload="none"
        controls={started}
        onEnded={() => {
          setStarted(false)
          if (videoRef.current) videoRef.current.currentTime = 0
        }}
        onError={() => setStarted(false)}
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src={webmFrom(videoSrc)} type="video/webm" />
        <source src={videoSrc} type="video/mp4" />
      </video>
      {!started && (
        <button
          type="button"
          onClick={start}
          aria-label="Přehrát video"
          className="group absolute inset-0 h-full w-full cursor-pointer"
        >
          <Image
            src={poster}
            alt={alt}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 1024px"
          />
          <span className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#C0D1C6] shadow-lg transition-transform group-hover:scale-110">
            <Play className="ml-1 h-6 w-6 fill-white text-white" />
          </span>
        </button>
      )}
    </div>
  )
}
