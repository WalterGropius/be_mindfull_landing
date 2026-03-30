import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative w-full bg-[#bfd1c6] overflow-hidden">
      {/* Background large circle */}
      <div className="absolute right-[-20%] bottom-[-40%] w-[500px] h-[500px] rounded-full bg-[#7BC0A4] lg:w-[950px] lg:h-[950px] lg:right-[0%] lg:bottom-[-60%] pointer-events-none"></div>
      
      <div className="relative mx-auto flex min-h-[500px] max-w-7xl items-center px-6 py-20 lg:px-8 z-10">
        <div className="flex w-full items-center justify-between">
          <div className="max-w-2xl relative z-20">
            <h1 className="text-balance text-4xl font-bold leading-tight text-[#2D2C2B] sm:text-5xl lg:text-[64px] lg:leading-[1.1]">
              Zastav se a vytvoř si<br />prostor pro změnu tvého života.
            </h1>
            <p className="mt-6 text-pretty text-lg font-normal leading-relaxed text-[#4B4C4D] max-w-md">
              Schopnost se zastavit patří dnes k nejdůležitějším dovednostem – pomáhá nám orientovat se v každodenních rozhodnutích, stresu a změnách s větší jasností a lehkostí.
            </p>
            <div className="mt-8">
              <Button asChild className="group h-auto rounded-full bg-[#E2763A] px-8 py-4 text-base font-bold text-white transition-all hover:bg-[#c9662f]">
                <Link href="/kurzy/foundations">
                 <div  className="flex items-center">Zobrazit kurzy <div/><ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" /></div>
                </Link>
              </Button>
            </div>
          </div>

          {/* Animated Brain Visuals */}
          <div className="hidden lg:flex w-full max-w-[550px] relative justify-center items-center h-[550px] mr-0 lg:mr-10 pointer-events-none">
            {/* Breathing Brain Background */}
            <div className="absolute inset-0 flex items-center justify-center animate-breathe">
                <img src="/Illustrations/brain00.svg" alt="" className="w-[480px] h-[480px] object-contain opacity-50" />
            </div>
            
            {/* Floating Container for foreground brains */}
            <div className="absolute inset-0 flex items-center justify-center animate-float">
              {/* Brain 1 toggling */}
              <img src="/Illustrations/brain01.svg" alt="" className="absolute w-[400px] h-[400px] object-contain animate-crossfade-1" />
              {/* Brain 2 toggling */}
              <img src="/Illustrations/brain02.svg" alt="" className="absolute w-[400px] h-[400px] object-contain animate-crossfade-2" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
