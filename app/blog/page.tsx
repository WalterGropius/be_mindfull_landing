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

import { getBlogPosts } from "@/lib/blog"

export default async function BlogPage() {
  const blogPosts = getBlogPosts()
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
            {blogPosts.map((post) => (
              <article key={post.slug} className="flex flex-col rounded-xl border border-[#C0D1C6] bg-background overflow-hidden">
                <div className="flex h-48 items-center justify-center bg-[#E3FFE2]">
                  <BlogIcon />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center gap-3">
                    <span className="rounded-full bg-[#E3FFE2] px-3 py-1 text-xs text-[#5E767E]">{post.category}</span>
                    <span className="text-xs text-[#9DA59C]">{post.date}</span>
                  </div>
                  <h2 className="mt-3 text-lg font-bold text-[#5E767E]">{post.title}</h2>
                  <p className="mt-2 flex-1 text-sm text-[#9DA59C]">{post.excerpt}</p>
                  <div className="mt-4">
                    <Button asChild variant="outline" className="h-auto rounded-full border-[#C0D1C6] bg-transparent text-sm text-[#5E767E] hover:bg-[#E3FFE2]">
                      <Link href={`/blog/${post.slug}`}>
                        Přečíst celý článek <ArrowRight className="ml-2 h-3.5 w-3.5" />
                      </Link>
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
