import Link from "next/link"
import { Button } from "@/components/ui/button"

function PhoneMockup() {
  return (
    <div className="relative mx-auto w-48 lg:w-56">
      <div className="rounded-[2rem] border-4 border-[#5E767E] bg-white p-2 shadow-xl">
        <div className="rounded-[1.5rem] bg-[#E3FFE2] p-4">
          <div className="mx-auto mb-4 h-1 w-12 rounded-full bg-[#C0D1C6]" />
          <div className="space-y-3">
            <div className="h-2 w-full rounded bg-[#C0D1C6]" />
            <div className="h-2 w-3/4 rounded bg-[#C0D1C6]" />
            <div className="h-20 w-full rounded-lg bg-[#E3FFE2]" />
            <div className="h-2 w-full rounded bg-[#C0D1C6]" />
            <div className="h-2 w-1/2 rounded bg-[#C0D1C6]" />
          </div>
        </div>
      </div>
    </div>
  )
}

function ImagePlaceholder() {
  return (
    <div className="flex h-full w-full items-center justify-center bg-[#E3FFE2] rounded-lg">
      <svg width="60" height="45" viewBox="0 0 60 45" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15 35 L25 20 L35 35 Z" fill="#C0D1C6" />
        <path d="M25 35 L40 15 L55 35 Z" fill="#9DA59C" />
        <circle cx="18" cy="12" r="5" fill="#C0D1C6" />
      </svg>
    </div>
  )
}

export function CoursesSection() {
  return (
    <section className="bg-[#E3FFE2] py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold text-[#5E767E] lg:text-3xl">Změňte svůj život už dnes</h2>
          <p className="mt-4 text-sm text-[#9DA59C]">
            Všechny kurzy vedu osobně. Ukážu vám snadnou, zábavnou a na míru šitou cestu k všímavému životu a práci – bez ohledu na to, kolik stresu, chaosu nebo málo prostoru máte.
          </p>
        </div>

        {/* FOUNDATIONS */}
        <div className="mt-16 flex flex-col items-center gap-10 lg:flex-row lg:gap-16">
          <div className="lg:w-1/2"><PhoneMockup /></div>
          <div className="lg:w-1/2">
            <h3 className="text-lg font-bold text-[#5E767E]">be.mindful FOUNDATIONS</h3>
            <p className="mt-3 text-sm text-[#9DA59C]">
              Krok za krokem k větší lehkosti a prostoru v životě pro každého, kdo chce začít s mindfulness. Budete odolnější a budete jednat s větším klidem a nadhledem.
            </p>
            <p className="mt-3 text-sm text-[#9DA59C]">
              Tento 4týdenní online kurz je pro každého, kdo chce začít implementovat mindfulness do každodenního života – s minimálním úsilím, ale spoustou zábavy.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild className="h-auto rounded-full bg-[#7BC0A4] px-5 py-2.5 text-sm text-white hover:bg-[#008F7A]">
                <Link href="/kurzy/foundations">Více informací</Link>
              </Button>
              <Button asChild variant="outline" className="h-auto rounded-full border-[#C0D1C6] bg-transparent px-5 py-2.5 text-sm text-[#5E767E] hover:bg-white">
                <Link href="/kurzy/start-to-pause">ZDARMA 3denní kurz</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* GROUP COURSES */}
        <div className="mt-20 flex flex-col-reverse items-center gap-10 lg:flex-row lg:gap-16">
          <div className="lg:w-1/2">
            <h3 className="text-xs font-medium uppercase tracking-[0.15em] text-[#5E767E]">
              SKUPINOVÉ KURZY v Praze
            </h3>
            <p className="mt-4 text-sm text-[#9DA59C]">
              Hledáte osobní vedení a skupinu kolem sebe, abyste společně zvládli mindfulness?
            </p>
            <p className="mt-3 text-sm text-[#9DA59C]">
              Posílíte svůj vnitřní kompas. Začnete jinak reagovat na každodenní problémy. Skupinové kurzy jsou silným prostorem pro maximální živou podporu, která garantuje rychlé výsledky a radost s každým krokem na vaší cestě.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild className="h-auto rounded-full bg-[#7BC0A4] px-5 py-2.5 text-sm text-white hover:bg-[#008F7A]">
                <Link href="/kurzy/skupinovy-kurz">Více informací</Link>
              </Button>
              <Button variant="outline" className="h-auto rounded-full border-[#C0D1C6] bg-transparent px-5 py-2.5 text-sm text-[#5E767E] hover:bg-white">
                ZDARMA Masterclass
              </Button>
            </div>
          </div>
          <div className="aspect-[4/3] w-full lg:w-1/2"><ImagePlaceholder /></div>
        </div>

        {/* COMPANIES */}
        <div className="mt-20 flex flex-col items-center gap-10 lg:flex-row lg:gap-16">
          <div className="aspect-[4/3] w-full lg:w-1/2"><ImagePlaceholder /></div>
          <div className="lg:w-1/2">
            <h3 className="text-lg font-bold text-[#5E767E]">Mindfulness pro FIRMY</h3>
            <p className="mt-3 text-sm text-[#9DA59C]">
              Od stresu k odolnosti. Cítit se lépe znamená vést lépe – naučte se přejít od stresu k vnitřní stabilitě.
            </p>
            <p className="mt-3 text-sm text-[#9DA59C]">
              Od krátkého úvodu do mindfulness, přes aplikovatelná témata až po rozšířený mindfulness program – nechte mě přizpůsobit mindfulness potřebám vaší firmy.
            </p>
            <div className="mt-6">
              <Button asChild className="h-auto rounded-full bg-[#7BC0A4] px-5 py-2.5 text-sm text-white hover:bg-[#008F7A]">
                <Link href="/kurzy/firmy">Více informací</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
