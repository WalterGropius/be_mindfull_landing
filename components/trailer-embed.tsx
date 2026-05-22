"use client"

import { useState } from "react"
import Image from "next/image"
import { Play } from "lucide-react"

interface TrailerEmbedProps {
  driveId: string
  poster: string
  alt: string
  className?: string
}

export function TrailerEmbed({ driveId, poster, alt, className }: TrailerEmbedProps) {
  const [playing, setPlaying] = useState(false)

  return (
    <div
      className={`relative aspect-video w-full overflow-hidden rounded-2xl bg-secondary ${className ?? ""}`}
    >
      {playing ? (
        <iframe
          src={`https://drive.google.com/file/d/${driveId}/preview`}
          title={alt}
          allow="autoplay; fullscreen"
          allowFullScreen
          className="absolute inset-0 h-full w-full border-0"
        />
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
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
