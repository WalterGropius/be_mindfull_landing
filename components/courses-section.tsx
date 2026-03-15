import Link from "next/link"
import { Button } from "@/components/ui/button"

function ImagePlaceholder() {
  return (
    <div className="flex h-full w-full items-center justify-center bg-[#C0D1C6] rounded-[2rem]">
      <svg width="60" height="45" viewBox="0 0 60 45" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15 35 L25 20 L35 35 Z" fill="#E3FFE2" />
        <path d="M25 35 L40 15 L55 35 Z" fill="#9DA59C" />
        <circle cx="18" cy="12" r="5" fill="#E3FFE2" />
      </svg>
    </div>
  )
}

export function CoursesSection() {
  return (
    <section className="bg-[#E3FFE2] py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* FOUNDATIONS */}
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-16">
          <div className="lg:w-1/2">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[2rem] shadow-xl">
               <img src="/Pictures/AdobeStock_1844492057.jpeg" alt="Foundations Course" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="lg:w-1/2">
            <h3 className="text-3xl font-bold text-[#2D2C2B] uppercase">be.mindful FOUNDATIONS</h3>
            <p className="mt-6 text-base text-[#4B4C4D] leading-relaxed">
              Krok za krokem k větší lehkosti a prostoru v životě pro každého, kdo chce začít s mindfulness. Budete odolnější a budete jednat s větším klidem a nadhledem.
            </p>
            <p className="mt-4 text-base text-[#4B4C4D] leading-relaxed">
              Tento 4týdenní online kurz je pro každého, kdo chce začít implementovat mindfulness do každodenního života – s minimálním úsilím, ale spoustou zábavy.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button asChild className="h-auto rounded-full bg-[#7BC0A4] px-8 py-4 text-base font-bold text-white hover:bg-[#008F7A]">
                <Link href="/kurzy/foundations">Více informací</Link>
              </Button>
              <Button asChild variant="outline" className="h-auto rounded-full border-2 border-[#7BC0A4] bg-transparent px-8 py-4 text-base font-bold text-[#7BC0A4] hover:bg-white">
                <Link href="/kurzy/start-to-pause">ZDARMA 3denní kurz</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* GROUP COURSES */}
        <div className="mt-32 flex flex-col-reverse items-center gap-12 lg:flex-row lg:gap-16">
          <div className="lg:w-1/2">
            <h3 className="text-sm font-bold uppercase tracking-[0.15em] text-[#7BC0A4]">
              SKUPINOVÉ KURZY v Praze
            </h3>
            <h3 className="text-3xl mt-2 font-bold text-[#2D2C2B] uppercase"></h3>
            <p className="mt-6 text-base text-[#4B4C4D] leading-relaxed">
              Hledáte osobní vedení a skupinu kolem sebe, abyste společně zvládli mindfulness?
            </p>
            <p className="mt-4 text-base text-[#4B4C4D] leading-relaxed">
              Posílíte svůj vnitřní kompas. Začnete jinak reagovat na každodenní problémy. Skupinové kurzy jsou silným prostorem pro maximální živou podporu, která garantuje rychlé výsledky a radost s každým krokem na vaší cestě.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button asChild className="h-auto rounded-full bg-[#7BC0A4] px-8 py-4 text-base font-bold text-white hover:bg-[#008F7A]">
                <Link href="/kurzy/skupinovy-kurz">Více informací</Link>
              </Button>
              <Button variant="outline" className="h-auto rounded-full border-2 border-[#7BC0A4] bg-transparent px-8 py-4 text-base font-bold text-[#7BC0A4] hover:bg-white">
                ZDARMA Masterclass
              </Button>
            </div>
          </div>
          <div className="aspect-[4/3] w-full lg:w-1/2"><ImagePlaceholder /></div>
        </div>

        {/* COMPANIES */}
        <div className="mt-32 flex flex-col items-center gap-12 lg:flex-row lg:gap-16">
          <div className="aspect-[4/3] w-full lg:w-1/2"><ImagePlaceholder /></div>
          <div className="lg:w-1/2">
            <h3 className="text-3xl font-bold text-[#2D2C2B] uppercase">Mindfulness pro FIRMY</h3>
            <p className="mt-6 text-base text-[#4B4C4D] leading-relaxed">
              Od stresu k odolnosti. Cítit se lépe znamená vést lépe – naučte se přejít od stresu k vnitřní stabilitě.
            </p>
            <p className="mt-4 text-base text-[#4B4C4D] leading-relaxed">
              Od krátkého úvodu do mindfulness, přes aplikovatelná témata až po rozšířený mindfulness program – nechte mě přizpůsobit mindfulness potřebám vaší firmy.
            </p>
            <div className="mt-8">
              <Button asChild className="h-auto rounded-full bg-[#7BC0A4] px-8 py-4 text-base font-bold text-white hover:bg-[#008F7A]">
                <Link href="/kurzy/firmy">Více informací</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
