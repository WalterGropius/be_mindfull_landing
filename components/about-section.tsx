import Link from "next/link"
import { Button } from "@/components/ui/button"

function ImagePlaceholder() {
  return (
    <div className="flex h-full w-full items-center justify-center bg-[#3D5A50] rounded-lg">
      <svg width="60" height="45" viewBox="0 0 60 45" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15 35 L25 20 L35 35 Z" fill="#7BC0A4" />
        <path d="M25 35 L40 15 L55 35 Z" fill="#9DA59C" />
        <circle cx="18" cy="12" r="5" fill="#7BC0A4" />
      </svg>
    </div>
  )
}

export function AboutSection() {
  return (
    <section className="bg-[#5E767E] py-16 lg:py-24">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6 lg:flex-row lg:items-center lg:gap-16 lg:px-8">
        <div className="lg:w-1/2">
          <h2 className="text-2xl font-bold text-white lg:text-3xl">
            Jsem Michal Dvořák,<br />zakladatel be.mindful
          </h2>
          <p className="mt-5 text-sm leading-relaxed text-white/80">
            Jsem Michal Dvořák, senior mindfulness teacher. Mindfulness jsem vystudoval ve dvou světových centrech – UMASS Medical School a Brown University – a od roku 2018 ji učím na plný úvazek.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-white/80">
            Učím to, co sám žiju, a snažím se přistupovat k praxi i životu s nadhledem a nohama pevně na zemi. Protože právě o tom mindfulness je – měnit to, jak reagujeme na problémy a náročné situace. S laskavostí, ale také pevně a důsledně.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-white/80">
            Dnes jsem jediný Senior Mindfulness Teacher v České republice a můj specifický a radostný přístup zpřístupňuje mindfulness tisícům lidí za posledních 15 let.
          </p>
          <div className="mt-8">
            <Button asChild variant="outline" className="h-auto rounded-full border-white/30 bg-transparent px-5 py-2.5 text-sm text-white hover:bg-white/10">
              <Link href="/o-mne">Poznejte svého průvodce mindfulness</Link>
            </Button>
          </div>
        </div>
        <div className="lg:w-1/2">
          <div className="aspect-[4/3] w-full overflow-hidden rounded-lg"><ImagePlaceholder /></div>
        </div>
      </div>
    </section>
  )
}
