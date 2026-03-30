import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Typography } from "@/components/ui/typography"
import { Input } from "@/components/ui/input"

export function FreeCourseSection() {
  return (
    <section className="bg-primary-green-dark py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Typography variant="span" color="primary" className="text-sm font-bold uppercase tracking-[0.2em] block">
            Bezplatný 3denní program
          </Typography>
          <Typography variant="h2" className="mt-4">
            Start-to-PAUSE: Tři dny k větší rovnováze
          </Typography>
          <Typography variant="p" className="mt-6">
            Naučíte se zastavit uprostřed rušeného dne. Budete schopni rychleji zklidnit mysl a uvolnit tělo.
          </Typography>
          <Typography variant="p" className="mt-4">
            Odnesete si 3 konkrétní nástroje, které vám pomohou přepnout během pěti minut ze stresu do uvolnění.
          </Typography>
          <div className="mt-10 mx-auto max-w-md">
            <form className="flex flex-col sm:flex-row gap-4">
               <Input 
                 type="email" 
                 placeholder="Váš e-mail" 
                 required
                 className="h-auto py-[18px] px-[24px] flex-1 rounded-full border border-border-subtle bg-surface-white text-[18px] text-typography-body shadow-sm placeholder:text-muted-foreground focus-visible:ring-primary-green" 
               />
               <Button type="submit" variant="primary-orange" size="default" className="group shadow-md gap-0">
                 <span className="flex items-center gap-2">Začít hned <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" /></span>
               </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
