import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

import { getBlogPosts } from "@/lib/blog"

export async function BlogSection() {
  const blogPosts = getBlogPosts().slice(0, 3)
  return (
    <section className="bg-background py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-[36px] leading-[46px] font-bold text-[#2D2C2B]">Prozkoumej blog be.mindful</h2>
        </div>
        <div className="mt-16 grid gap-10 md:grid-cols-3 justify-items-center">
          {blogPosts.map((post) => (
            <div key={post.slug} className="flex flex-col w-full max-w-[388px] bg-white border border-[#C0D1C6] rounded-[24px] overflow-hidden">
              <div className="relative w-full h-[360px] shrink-0">
                <Image src={post.image || "/placeholder.jpg"} alt={post.title} fill className="object-cover object-top" />
              </div>
              <div className="flex flex-col items-center flex-grow p-[24px] md:p-[32px] text-center w-full">
                <h3 className="text-[28px] leading-[38px] font-bold text-[#2D2C2B] mt-[8px] mb-[12px]">{post.title}</h3>
                <p className="text-[18px] leading-[30px] text-[#4B4C4D] flex-grow mb-[24px]">{post.excerpt}</p>
                <Button asChild variant="outline" className="mt-auto border-[1.33px] border-[#C0D1C6] rounded-[40px] px-[36px] py-[24px] h-[66px] bg-white text-[#7BC0A4] text-base font-bold hover:bg-[#E3FFE2] w-full max-w-[324px]">
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
