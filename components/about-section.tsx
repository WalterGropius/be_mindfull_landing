import Link from "next/link"
import { Button } from "@/components/ui/button"

export function AboutSection() {
  return (
    <section className="bg-background py-16 lg:py-24">
      <div className="mx-auto flex max-w-7xl flex-col gap-12 px-6 lg:flex-row lg:items-center lg:gap-16 lg:px-8">
        <div className="lg:w-1/2">
          <h2 className="text-3xl font-bold text-[#2D2C2B] lg:text-4xl leading-tight">
            Jsem Michal Dvořák,<br />zakladatel be.mindful
          </h2>
          <p className="mt-6 text-base leading-relaxed text-[#4B4C4D]">
            Jsem Michal Dvořák, senior mindfulness teacher. Mindfulness jsem vystudoval ve dvou světových centrech – UMASS Medical School a Brown University – a od roku 2018 ji učím na plný úvazek.
          </p>
          <p className="mt-4 text-base leading-relaxed text-[#4B4C4D]">
            Učím to, co sám žiju, a snažím se přistupovat k praxi i životu s nadhledem a nohama pevně na zemi. Protože právě o tom mindfulness je – měnit to, jak reagujeme na problémy a náročné situace. S laskavostí, ale také pevně a důsledně.
          </p>
          <p className="mt-4 text-base leading-relaxed text-[#4B4C4D]">
            Dnes jsem jediný Senior Mindfulness Teacher v České republice a můj specifický a radostný přístup zpřístupňuje mindfulness tisícům lidí za posledních 15 let.
          </p>
          <div className="mt-10">
            <Button asChild className="h-auto rounded-full bg-[#7BC0A4] px-8 py-4 text-base font-bold text-white hover:bg-[#008F7A]">
              <Link href="/o-mne">Poznejte svého průvodce mindfulness</Link>
            </Button>
          </div>
        </div>
        <div className="lg:w-1/2">
          <div className="aspect-[4/5] w-full overflow-hidden rounded-[2rem] shadow-xl">
               <img src="/Pictures/_DSC7728.jpg" alt="Michal Dvořák" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  )
}
