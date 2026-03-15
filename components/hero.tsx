import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

function MountainIllustration() {
  return (
    <svg width="200" height="150" viewBox="0 0 200 150" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-48 lg:w-64">
      <path d="M40 120 L80 60 L120 120 Z" fill="#9DA59C" fillOpacity="0.4" />
      <path d="M80 120 L130 50 L180 120 Z" fill="#5E767E" fillOpacity="0.5" />
      <circle cx="150" cy="45" r="20" fill="#C0D1C6" fillOpacity="0.6" />
      <line x1="20" y1="120" x2="180" y2="120" stroke="#9DA59C" strokeWidth="2" strokeOpacity="0.3" />
    </svg>
  )
}

export function Hero() {
  return (
    <section className="relative w-full bg-[#E3FFE2]">
      <div className="relative mx-auto flex min-h-[400px] max-w-7xl items-center px-6 py-16 lg:px-8">
        <div className="flex w-full items-center justify-between">
          <div className="max-w-lg">
            <h1 className="text-balance text-3xl font-bold leading-tight text-[#5E767E] sm:text-4xl lg:text-[42px] lg:leading-[1.2]">
              Zastav se a vytvoř si prostor pro změnu tvého života.
            </h1>
            <p className="mt-5 text-pretty text-base leading-relaxed text-[#9DA59C]">
              Schopnost se zastavit patří dnes k nejdůležitějším dovednostem – pomáhá nám orientovat se v každodenních rozhodnutích, stresu a změnách s větší jasností a lehkostí.
            </p>
            <div className="mt-8">
              <Button asChild className="group h-auto rounded-full bg-[#7BC0A4] px-6 py-3 text-sm text-white transition-all hover:bg-[#008F7A]">
                <Link href="/kurzy/foundations">
                  Zobrazit kurzy
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
          <div className="hidden lg:block">
            <MountainIllustration />
          </div>
        </div>
      </div>
    </section>
  )
}
