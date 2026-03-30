import Link from "next/link"
import { Button } from "@/components/ui/button"

function BlogIcon() {
  return (
    <svg width="60" height="50" viewBox="0 0 60 50" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 40 L25 20 L40 40 Z" fill="#C0D1C6" />
      <path d="M25 40 L42 15 L55 40 Z" fill="#C0D1C6" />
      <circle cx="45" cy="12" r="8" fill="#C0D1C6" />
    </svg>
  )
}

import { getBlogPosts } from "@/lib/blog"

export async function BlogSection() {
  const blogPosts = getBlogPosts().slice(0, 3)
  return (
    <section className="bg-background py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-[#2D2C2B] uppercase">Prozkoumej blog be.mindful</h2>
        </div>
        <div className="mt-16 grid gap-10 md:grid-cols-3">
          {blogPosts.map((post) => (
            <div key={post.slug} className="flex flex-col items-center text-center">
              <div className="mb-6 flex h-32 w-32 items-center justify-center rounded-2xl bg-[#E3FFE2]">
                <BlogIcon />
              </div>
              <h3 className="text-xl font-bold text-[#2D2C2B]">{post.title}</h3>
              <p className="mt-4 text-base leading-relaxed text-[#4B4C4D]">{post.excerpt}</p>
              <Button asChild variant="outline" className="mt-8 h-auto rounded-full border-2 border-[#7BC0A4] bg-transparent px-6 py-3 text-sm font-bold text-[#7BC0A4] hover:bg-[#E3FFE2]">
                <Link href={`/blog/${post.slug}`}>Přečíst celý článek</Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
