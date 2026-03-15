import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function FreeCourseSection() {
  return (
    <section className="bg-[#E3FFE2] py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#9DA59C]">
            Bezplatný 3denní program
          </p>
          <h2 className="mt-4 text-2xl font-bold text-[#5E767E] lg:text-3xl">
            Start-to-PAUSE: Tři dny k větší rovnováze
          </h2>
          <p className="mt-5 text-sm leading-relaxed text-[#9DA59C]">
            Naučíte se zastavit uprostřed rušeného dne. Budete schopni rychleji zklidnit mysl a uvolnit tělo.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-[#9DA59C]">
            Odnesete si 3 konkrétní nástroje, které vám pomohou přepnout během pěti minut ze stresu do uvolnění.
          </p>
          <div className="mt-8">
            <Button asChild className="group h-auto rounded-full bg-[#7BC0A4] px-6 py-3 text-sm text-white hover:bg-[#008F7A]">
              <Link href="/kurzy/start-to-pause">
                Přidej se k bezplatnému programu
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
