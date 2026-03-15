import Link from "next/link"
import { Button } from "@/components/ui/button"

function ImagePlaceholder() {
  return (
    <div className="flex h-full w-full items-center justify-center bg-[#C0D1C6] rounded-[2rem]">
      <svg width="60" height="45" viewBox="0 0 60 45" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15 35 L25 20 L35 35 Z" fill="#E3FFE2" />
        <path d="M25 35 L40 15 L55 35 Z" fill="#9DA59C" />
        <circle cx="18" cy="12" r="5" fill="#E3FFE2" />
      </svg>
    </div>
  )
}

export function CoursesSection() {
  return (
    <section className="bg-[#E3FFE2] py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* FOUNDATIONS */}
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-16">
          <div className="lg:w-1/2">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[2rem] shadow-xl">
               <img src="/AdobeStock_1844492057.jpeg" alt="Foundations Course" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="lg:w-1/2">
            <h3 className="text-3xl font-bold text-[#2D2C2B] uppercase">be.mindful FOUNDATIONS</h3>
            <p className="mt-6 text-base text-[#4B4C4D] leading-relaxed">
              You are at the beginning of your mindfulness journey or want to strengthen your foundation to reset your life with ease? Great! Than this is for you!
            </p>
            <p className="mt-4 text-base text-[#4B4C4D] leading-relaxed">
              This 4-week online course is for everyone who wants to start implementing mindfulness into their daily life - with minimum effort, but lots of fun.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button asChild className="h-auto rounded-full bg-[#7BC0A4] px-8 py-4 text-base font-bold text-white hover:bg-[#008F7A]">
                <Link href="/courses/foundations">Learn more</Link>
              </Button>
              <Button asChild variant="outline" className="h-auto rounded-full border-2 border-[#7BC0A4] bg-transparent px-8 py-4 text-base font-bold text-[#7BC0A4] hover:bg-white">
                <Link href="/courses/free">FREE 3-days course</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* GROUP COURSES */}
        <div className="mt-32 flex flex-col-reverse items-center gap-12 lg:flex-row lg:gap-16">
          <div className="lg:w-1/2">
            <h3 className="text-sm font-bold uppercase tracking-[0.15em] text-[#7BC0A4]">
              GROUP COURSES in Prague
            </h3>
            <h3 className="text-3xl mt-2 font-bold text-[#2D2C2B] uppercase">Join the community</h3>
            <p className="mt-6 text-base text-[#4B4C4D] leading-relaxed">
              Looking for personal guidance and a group of people to master mindfulness together?
            </p>
            <p className="mt-4 text-base text-[#4B4C4D] leading-relaxed">
              You will strengthen your inner compass. You will react differently to everyday problems. Group courses are a powerful space for maximum live support, guaranteeing rapid results and joy with every step.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button asChild className="h-auto rounded-full bg-[#7BC0A4] px-8 py-4 text-base font-bold text-white hover:bg-[#008F7A]">
                <Link href="/courses/group">Learn more</Link>
              </Button>
              <Button variant="outline" className="h-auto rounded-full border-2 border-[#7BC0A4] bg-transparent px-8 py-4 text-base font-bold text-[#7BC0A4] hover:bg-white">
                FREE Masterclass
              </Button>
            </div>
          </div>
          <div className="aspect-[4/3] w-full lg:w-1/2"><ImagePlaceholder /></div>
        </div>

        {/* COMPANIES */}
        <div className="mt-32 flex flex-col items-center gap-12 lg:flex-row lg:gap-16">
          <div className="aspect-[4/3] w-full lg:w-1/2"><ImagePlaceholder /></div>
          <div className="lg:w-1/2">
            <h3 className="text-3xl font-bold text-[#2D2C2B] uppercase">Mindfulness for COMPANIES</h3>
            <p className="mt-6 text-base text-[#4B4C4D] leading-relaxed">
              From stress to resilience. Feeling better means leading better – learn how to shift from stress to inner stability.
            </p>
            <p className="mt-4 text-base text-[#4B4C4D] leading-relaxed">
              From a short introduction to mindfulness, through applicable topics, to an extended mindfulness program - let me tailor mindfulness to the needs of your company.
            </p>
            <div className="mt-8">
              <Button asChild className="h-auto rounded-full bg-[#7BC0A4] px-8 py-4 text-base font-bold text-white hover:bg-[#008F7A]">
                <Link href="/courses/companies">Learn more</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
