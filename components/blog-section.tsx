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

const blogPosts = [
  { title: "First step to greater calm", description: "A short introduction and quick steps you can take right now for immediate impact.", category: "beginners" },
  { title: "How to keep your balance", description: "How to stay balanced even when life throws hurdles at you.", category: "membership" },
  { title: "From pause to performance", description: "Why mindful pause is a forgotten skill for today's success.", category: "for companies" },
]

export function BlogSection() {
  return (
    <section className="bg-background py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-[#2D2C2B] uppercase">Explore the be.mindful blog</h2>
        </div>
        <div className="mt-16 grid gap-10 md:grid-cols-3">
          {blogPosts.map((post, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="mb-6 flex h-32 w-32 items-center justify-center rounded-2xl bg-[#E3FFE2]">
                <BlogIcon />
              </div>
              <h3 className="text-xl font-bold text-[#2D2C2B]">{post.title}</h3>
              <p className="mt-4 text-base leading-relaxed text-[#4B4C4D]">{post.description}</p>
              <Button asChild variant="outline" className="mt-8 h-auto rounded-full border-2 border-[#7BC0A4] bg-transparent px-6 py-3 text-sm font-bold text-[#7BC0A4] hover:bg-[#E3FFE2]">
                <Link href="/blog">Read full article</Link>
              </Button>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <Button asChild variant="outline" className="h-auto rounded-full border-2 border-[#C0D1C6] bg-transparent px-8 py-4 text-base font-bold text-[#7BC0A4] hover:bg-[#E3FFE2]">
            <Link href="/blog">Read all articles here</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
