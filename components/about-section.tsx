import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Typography } from "@/components/ui/typography"

export function AboutSection() {
  return (
    <section className="bg-border-subtle py-16 lg:py-24">
      <div className="mx-auto flex max-w-7xl flex-col gap-12 px-6 lg:flex-row lg:items-stretch lg:gap-16 lg:px-8">
        <div className="flex flex-col justify-center lg:w-1/2">
          <Typography variant="h2" className="leading-tight">
            Jsem Michal Dvořák,<br />zakladatel be.mindful
          </Typography>
          <Typography variant="p" className="mt-6 leading-relaxed">
            Jsem Michal Dvořák, senior mindfulness teacher. Mindfulness jsem vystudoval ve dvou světových centrech – UMASS Medical School a Brown University – a od roku 2018 ji učím na plný úvazek.
          </Typography>
          <Typography variant="p" className="mt-4 leading-relaxed">
            Učím to, co sám žiju, a snažím se přistupovat k praxi i životu s nadhledem a nohama pevně na zemi. Protože právě o tom mindfulness je – měnit to, jak reagujeme na problémy a náročné situace. S laskavostí, ale také pevně a důsledně.
          </Typography>
          <Typography variant="p" className="mt-4 leading-relaxed">
            Dnes jsem jediný Senior Mindfulness Teacher v České republice a můj specifický a radostný přístup zpřístupňuje mindfulness tisícům lidí za posledních 15 let.
          </Typography>
          <div className="mt-10">
            <Button asChild variant="primary-orange" className="h-auto whitespace-normal text-center">
              <Link href="/o-mne">Poznejte svého průvodce mindfulness</Link>
            </Button>
          </div>
        </div>
        <div className="relative w-full h-[300px] md:h-[450px] lg:h-auto lg:w-1/2 lg:flex-shrink-0">
          <div className="absolute inset-0 overflow-hidden rounded-[1rem]">
               <img src="/Pictures/_DSC7728.jpg" alt="Michal Dvořák" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  )
}
