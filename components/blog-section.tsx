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
  { title: "První krok k většímu klidu", description: "Krátký úvod a rychlé kroky, které můžete udělat hned s okamžitým dopadem.", category: "začátečníci" },
  { title: "Jak si udržet rovnováhu", description: "Jak zůstat v rovnováze, i když vám život hází klacky pod nohy.", category: "členství" },
  { title: "Od pauzy k výkonu", description: "Proč je všímavá pauza ztracená dovednost pro dnešní úspěch.", category: "pro firmy" },
]

export function BlogSection() {
  return (
    <section className="bg-background py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-[#5E767E]">Prozkoumej blog be.mindful</h2>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {blogPosts.map((post, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="mb-4 flex h-24 w-24 items-center justify-center rounded-xl bg-[#E3FFE2]">
                <BlogIcon />
              </div>
              <h3 className="text-base font-bold text-[#5E767E]">{post.title}</h3>
              <p className="mt-2 text-sm text-[#9DA59C]">{post.description}</p>
              <Button asChild variant="outline" className="mt-4 h-auto rounded-full border-[#C0D1C6] bg-transparent px-5 py-2 text-sm text-[#5E767E] hover:bg-[#E3FFE2]">
                <Link href="/blog">Přečíst celý článek</Link>
              </Button>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button asChild variant="outline" className="h-auto rounded-full border-[#C0D1C6] bg-transparent px-6 py-3 text-sm text-[#5E767E] hover:bg-[#E3FFE2]">
            <Link href="/blog">Přečti si všechny články zde</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
