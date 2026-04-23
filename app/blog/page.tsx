import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { getBlogPosts } from "@/lib/blog"

export default async function BlogPage() {
  const allPosts = getBlogPosts()
  const topReads = allPosts.slice(0, 3)
  const morePosts = allPosts.slice(3)

  return (
    <main className="min-h-screen font-sans">
      <Header />

      {/* Top Reads */}
      <section className="bg-white pt-16 pb-4 lg:pt-24 lg:pb-6">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-3xl font-bold text-[#2D2C2B] lg:text-4xl">Top Reads</h1>
            <p className="mt-4 text-base leading-relaxed text-[#4B4C4D]">
              V době neustálého spěchu a hluku už pauza není luxus, ale klíčová dovednost. Všímavé zastavení vytváří prostor mezi podnětem a reakcí, díky čemuž jednáme s jasností místo automatické reakce na stres.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {topReads.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>

      {/* More about mindfulness */}
      {morePosts.length > 0 && (
        <section className="bg-white py-12 lg:py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="mb-10 text-center text-2xl font-bold text-[#2D2C2B] lg:text-3xl">More about mindfulness</h2>
            <div className="grid gap-6 md:grid-cols-3">
              {morePosts.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Load more */}
      <div className="flex justify-center pb-16 pt-8 lg:pb-24">
        <Button variant="outline" className="h-auto rounded-full border-[#C0D1C6] px-10 py-3 text-sm font-medium text-[#4B4C4D] hover:border-[#7BC0A4] hover:text-[#7BC0A4]">
          Načíst více
        </Button>
      </div>
      <Footer />
    </main>
  )
}

function BlogCard({ post }: { post: { slug: string; title: string; category: string; date: string; excerpt: string; image: string } }) {
  return (
    <article className="flex flex-col overflow-hidden rounded-2xl bg-[#F5F6F4]">
      <div className="h-72 overflow-hidden">
        <Image
          src={post.image}
          alt={post.title}
          width={500}
          height={210}
          className="h-full w-full object-cover object-top transition-transform duration-300 hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center gap-3">
          <span className="rounded-full bg-[#E3FFE2] px-3 py-1 text-xs font-medium text-[#5E767E]">{post.category}</span>
          <span className="text-xs text-[#9DA59C]">{post.date}</span>
        </div>
        <h2 className="mt-3 text-lg font-bold leading-snug text-[#2D2C2B]">{post.title}</h2>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-[#4B4C4D]">{post.excerpt}</p>
        <div className="mt-5">
          <Link
            href={`/blog/${post.slug}`}
            className="text-sm font-bold text-[#2D2C2B] underline underline-offset-2 hover:text-[#7BC0A4]"
          >
            Přečíst celý článek
          </Link>
        </div>
      </div>
    </article>
  )
}
