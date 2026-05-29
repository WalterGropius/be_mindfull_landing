"use client"

import { TrailerEmbed } from "@/components/trailer-embed"

interface BlogVideo {
  src: string
  poster: string
  alt: string
}

interface BlogContentProps {
  html: string
  video?: BlogVideo
}

const VIDEO_MARKER = "[[VIDEO]]"

export function BlogContent({ html, video }: BlogContentProps) {
  if (video && html.includes(VIDEO_MARKER)) {
    const [before, after] = html.split(VIDEO_MARKER)
    return (
      <div className="blog-content mx-auto max-w-none">
        <div dangerouslySetInnerHTML={{ __html: before }} />
        <TrailerEmbed videoSrc={video.src} poster={video.poster} alt={video.alt} className="my-6" />
        <div dangerouslySetInnerHTML={{ __html: after }} />
      </div>
    )
  }

  return (
    <div className="blog-content mx-auto max-w-none" dangerouslySetInnerHTML={{ __html: html }} />
  )
}
