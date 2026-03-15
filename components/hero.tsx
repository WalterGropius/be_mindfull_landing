import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative w-full bg-[#C0D1C6] overflow-hidden">
      {/* Background large circle */}
      <div className="absolute right-[-20%] bottom-[-40%] w-[600px] h-[600px] rounded-full bg-[#7BC0A4] lg:w-[1100px] lg:h-[1100px] lg:right-[0%] lg:bottom-[-60%] pointer-events-none"></div>
      
      <div className="relative mx-auto flex min-h-[500px] max-w-7xl items-center px-6 py-20 lg:px-8 z-10">
        <div className="flex w-full items-center justify-between">
          <div className="max-w-2xl">
            <h1 className="text-balance text-4xl font-bold leading-tight text-[#2D2C2B] sm:text-5xl lg:text-[64px] lg:leading-[1.1]">
              A pause, that creates<br />space to shift your life.
            </h1>
            <p className="mt-6 text-pretty text-lg font-normal leading-relaxed text-[#4B4C4D] max-w-md">
              The ability to pause is one of todays most important skills – to navigate us through daily decisions, stress, and change with greater clarity and ease.
            </p>
            <div className="mt-8">
              <Button asChild className="group h-auto rounded-full bg-[#E2763A] px-8 py-4 text-base font-bold text-white transition-all hover:bg-[#c9662f]">
                <Link href="/courses">
                  View Courses <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
