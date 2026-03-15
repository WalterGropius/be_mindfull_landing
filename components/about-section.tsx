import Link from "next/link"
import { Button } from "@/components/ui/button"

export function AboutSection() {
  return (
    <section className="bg-background py-16 lg:py-24">
      <div className="mx-auto flex max-w-7xl flex-col gap-12 px-6 lg:flex-row lg:items-center lg:gap-16 lg:px-8">
        <div className="lg:w-1/2">
          <h2 className="text-3xl font-bold text-[#2D2C2B] lg:text-4xl leading-tight">
            I am Michal Dvořák,<br />founder of be.mindful
          </h2>
          <p className="mt-6 text-base leading-relaxed text-[#4B4C4D]">
            I am Michal Dvořák, senior mindfulness teacher. I studied mindfulness at two world centers - UMASS Medical School and Brown University - and have been teaching it full time since 2018.
          </p>
          <p className="mt-4 text-base leading-relaxed text-[#4B4C4D]">
            I teach what I live myself, and I try to approach practice and life with perspective and my feet firmly on the ground. Because that's what mindfulness is about – changing how we react to problems and difficult situations. With kindness, but also firmly and consistently.
          </p>
          <p className="mt-4 text-base leading-relaxed text-[#4B4C4D]">
            Today I am the only Senior Mindfulness Teacher in the Czech Republic and my specific and joyful approach has made mindfulness accessible to thousands of people over the last 15 years.
          </p>
          <div className="mt-10">
            <Button asChild className="h-auto rounded-full bg-[#7BC0A4] px-8 py-4 text-base font-bold text-white hover:bg-[#008F7A]">
              <Link href="/about">Meet your mindfulness guide</Link>
            </Button>
          </div>
        </div>
        <div className="lg:w-1/2">
          <div className="aspect-[4/5] w-full overflow-hidden rounded-[2rem] shadow-xl">
               <img src="/_DSC7728.jpg" alt="Michal Dvořák" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  )
}
