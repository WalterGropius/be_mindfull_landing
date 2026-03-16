import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function FreeCourseSection() {
  return (
    <section className="bg-[#E3FFE2] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#7BC0A4]">
            Bezplatný 3denní program
          </p>
          <h2 className="mt-4 text-3xl font-bold text-[#2D2C2B] lg:text-4xl">
            Start-to-PAUSE: Tři dny k větší rovnováze
          </h2>
          <p className="mt-6 text-base leading-relaxed text-[#4B4C4D]">
            Naučíte se zastavit uprostřed rušeného dne. Budete schopni rychleji zklidnit mysl a uvolnit tělo.
          </p>
          <p className="mt-4 text-base leading-relaxed text-[#4B4C4D]">
            Odnesete si 3 konkrétní nástroje, které vám pomohou přepnout během pěti minut ze stresu do uvolnění.
          </p>
          <div className="mt-10 mx-auto max-w-md">
            <form className="flex flex-col sm:flex-row gap-4">
               <Input 
                 type="email" 
                 placeholder="Váš e-mail" 
                 required
                 className="h-14 flex-1 rounded-full border-0 bg-white px-6 text-base text-[#4B4C4D] shadow-sm placeholder:text-[#9DA59C]" 
               />
               <Button type="submit" className="group h-14 rounded-full bg-[#E2763A] px-8 text-base font-bold text-white shadow-md transition-all hover:bg-[#c9662f]">
                 Začít hned
                 <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
               </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
