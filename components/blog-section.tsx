import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Typography } from "@/components/ui/typography"

import { getBlogPosts } from "@/lib/blog"

export async function BlogSection() {
  const blogPosts = getBlogPosts().slice(0, 3)
  return (
    <section className="bg-surface-white py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center">
          <Typography variant="h2" className="text-[36px] leading-[46px]">Prozkoumej blog be.mindful</Typography>
        </div>
        <div className="mt-16 grid gap-10 md:grid-cols-3 justify-items-center">
          {blogPosts.map((post) => (
            <div key={post.slug} className="flex flex-col w-full max-w-[388px] bg-surface-light rounded-[2rem] overflow-hidden">
              <div className="relative w-full aspect-[4/3] shrink-0">
                <Image src={post.image || "/placeholder.jpg"} alt={post.title} fill className="object-cover object-top" />
              </div>
              <div className="flex flex-col items-center flex-grow px-8 pt-8 pb-10 text-center w-full">
                <Typography variant="h3" className="mb-4 text-2xl font-bold text-typography-heading leading-tight">{post.title}</Typography>
                <Typography variant="p" className="mb-8 text-typography-body">{post.excerpt}</Typography>
                <Button asChild variant="secondary" className="mt-auto w-full rounded-full">
                  <Link href={`/blog/${post.slug}`}>Přečíst celý článek</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
