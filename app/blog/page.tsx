import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { NewsletterSection } from "@/components/newsletter-section"
import { Footer } from "@/components/footer"

function BlogIcon() {
  return (
    <svg width="60" height="50" viewBox="0 0 60 50" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 40 L25 20 L40 40 Z" fill="#E3FFE2" />
      <path d="M25 40 L42 15 L55 40 Z" fill="#C0D1C6" />
      <circle cx="45" cy="12" r="8" fill="#E3FFE2" />
    </svg>
  )
}

const blogPosts = [
  {
    title: "První krok k většímu klidu",
    description: "Krátký úvod a rychlé kroky, které můžete udělat hned s okamžitým dopadem. Naučte se základy mindfulness a jak je použít ve svém každodenním životě.",
    category: "Začátečníci",
    date: "15. ledna 2025",
  },
  {
    title: "Jak si udržet rovnováhu",
    description: "Jak zůstat v rovnováze, i když vám život hází klacky pod nohy. Praktické tipy pro udržení mindfulness v náročných obdobích.",
    category: "Členství",
    date: "8. ledna 2025",
  },
  {
    title: "Od pauzy k výkonu",
    description: "Proč je všímavá pauza ztracená dovednost pro dnešní úspěch. Jak krátké zastavení může zlepšit vaši produktivitu a kreativitu.",
    category: "Pro firmy",
    date: "1. ledna 2025",
  },
  {
    title: "Mindfulness a spánek",
    description: "Jak mindfulness pomáhá s nespavostí a zlepšuje kvalitu spánku. Techniky pro uklidnění mysli před usnutím.",
    category: "Zdraví",
    date: "20. prosince 2024",
  },
  {
    title: "Vědomá komunikace",
    description: "Jak mindfulness zlepšuje naše vztahy a komunikaci s ostatními. Naučte se naslouchat a reagovat s větším klidem.",
    category: "Vztahy",
    date: "12. prosince 2024",
  },
  {
    title: "Emoční odolnost v praxi",
    description: "Jak budovat emoční odolnost pomocí jednoduchých každodenních cvičení. Zvládejte těžké emoce s větší stabilitou.",
    category: "Praxe",
    date: "5. prosince 2024",
  },
]

export default function BlogPage() {
  return (
    <main className="min-h-screen font-sans">
      <Header />

      {/* Hero */}
      <section className="bg-[#E3FFE2] py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-3xl font-bold text-[#5E767E] lg:text-4xl">Blog be.mindful</h1>
            <p className="mt-4 text-lg text-[#9DA59C]">Témata podle cesty účastníka</p>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="bg-background py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post, index) => (
              <article key={index} className="flex flex-col rounded-xl border border-[#C0D1C6] bg-background overflow-hidden">
                <div className="flex h-48 items-center justify-center bg-[#E3FFE2]">
                  <BlogIcon />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center gap-3">
                    <span className="rounded-full bg-[#E3FFE2] px-3 py-1 text-xs text-[#5E767E]">{post.category}</span>
                    <span className="text-xs text-[#9DA59C]">{post.date}</span>
                  </div>
                  <h2 className="mt-3 text-lg font-bold text-[#5E767E]">{post.title}</h2>
                  <p className="mt-2 flex-1 text-sm text-[#9DA59C]">{post.description}</p>
                  <div className="mt-4">
                    <Button variant="outline" className="h-auto rounded-full border-[#C0D1C6] bg-transparent px-5 py-2 text-sm text-[#5E767E] hover:bg-[#E3FFE2]">
                      Přečíst celý článek <ArrowRight className="ml-2 h-3.5 w-3.5" />
                    </Button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <NewsletterSection />
      <Footer />
    </main>
  )
}
