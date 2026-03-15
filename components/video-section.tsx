import Link from "next/link"
import { Play } from "lucide-react"
import { Button } from "@/components/ui/button"

export function VideoSection() {
  return (
    <section className="bg-background py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-bold text-[#2D2C2B] lg:text-4xl">
            Little shifts, that create big change
          </h2>
          <p className="mt-5 text-base leading-relaxed text-[#4B4C4D]">
            Let go of the myth, that life will be without challenges one day. HOW we relate to those challenges is, what makes the difference in life.
          </p>
          <p className="mt-4 text-base leading-relaxed text-[#4B4C4D]">
            It’s surprising how little it takes to shift from chaos to space. You’re one pause away to shift from stress to calmness. Everyone can do it.
          </p>
          <p className="mt-4 text-base leading-relaxed text-[#4B4C4D]">
            Create lasting change on emotional resilience, improved thought control & breaking cycles and physical health benefits
          </p>
        </div>

        <div className="mx-auto mt-24 max-w-3xl text-center">
          <p className="text-base font-bold text-[#7BC0A4]">
            Mindfulness is not a one-size-fits-it-all
          </p>
          <h3 className="mt-4 text-pretty text-3xl font-bold text-[#2D2C2B] lg:text-4xl leading-tight">
            Daily-life approved and personal:<br/>Your approach to mindfulness<br/>by Senior Mindfulness Teacher Michal Dvořák
          </h3>
        </div>

        <div className="relative mx-auto mt-12 max-w-5xl">
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-[2rem] bg-[#E3FFE2] shadow-xl">
            <img src="/_DSC7728.jpg" alt="Michal Dvořák" className="w-full h-full object-cover" />
            <button className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#C0D1C6] transition-transform hover:scale-110" aria-label="Play video">
              <Play className="ml-1 h-8 w-8 fill-white text-white" />
            </button>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-6">
          <Button asChild className="h-auto rounded-full bg-[#7BC0A4] px-8 py-4 text-base font-bold text-white hover:bg-[#008F7A]">
            <Link href="/courses/foundations">Start mindfulness today!</Link>
          </Button>
          <Button asChild variant="outline" className="h-auto rounded-full border-2 border-[#C0D1C6] bg-transparent px-8 py-4 text-base font-bold text-[#7BC0A4] hover:bg-[#E3FFE2]">
            <Link href="/courses/group">Group Courses in Prague</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
