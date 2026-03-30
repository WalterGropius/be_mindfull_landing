import { getBlogPost, getBlogPosts } from "@/lib/blog"
import { notFound } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { NewsletterSection } from "@/components/newsletter-section"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"

export async function generateStaticParams() {
  const posts = getBlogPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getBlogPost(slug)

  if (!post) {
    notFound()
  }

  return (
    <main className="min-h-screen font-sans bg-background">
      <Header />
      
      <article className="mx-auto max-w-3xl px-6 py-16 lg:px-8 lg:py-24">
        <div className="mb-10">
          <Link href="/blog" className="inline-flex items-center text-sm font-semibold text-[#7BC0A4] hover:underline">
            <ChevronLeft className="mr-1 h-4 w-4" /> Zpět na blog
          </Link>
        </div>
        
        <header className="mb-12 text-center text-[#2D2C2B]">
          <div className="mb-6 flex items-center justify-center gap-3 text-sm text-[#9DA59C]">
            <span className="rounded-full bg-[#E3FFE2] px-3 py-1 text-[#5E767E]">{post.category}</span>
            <span>{post.date}</span>
            <span>{post.readTime}</span>
          </div>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">{post.title}</h1>
          <p className="text-lg text-[#4B4C4D] leading-relaxed">{post.excerpt}</p>
        </header>

        <div 
          className="prose prose-lg mx-auto max-w-none text-[#4B4C4D] prose-headings:text-[#2D2C2B] prose-a:text-[#7BC0A4]"
          dangerouslySetInnerHTML={{ __html: post.content }} 
        />
      </article>

      <NewsletterSection />
      <Footer />
    </main>
  )
}
