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
    <section className="bg-background py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* FOUNDATIONS */}
        <div className="bg-white rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.06)] overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-1/2 h-64 lg:h-auto relative">
               <img src="/Pictures/WhatsApp%20Image%202026-03-02%20at%2013.29.56.jpeg" alt="Foundations Course" className="w-full h-full object-cover absolute inset-0" />
            </div>
            <div className="lg:w-1/2 p-8 lg:p-14">
              <h3 className="text-3xl font-bold text-[#2D2C2B] uppercase mb-6">be.mindful FOUNDATIONS</h3>
              <p className="text-base text-[#4B4C4D] leading-relaxed">
                Krok za krokem k větší lehkosti a prostoru v životě pro každého, kdo chce začít s mindfulness. Budete odolnější a budete jednat s větším klidem a nadhledem.
              </p>
              <p className="mt-4 text-base text-[#4B4C4D] leading-relaxed">
                Tento 4týdenní online kurz je pro každého, kdo chce začít implementovat mindfulness do každodenního života – s minimálním úsilím, ale spoustou zábavy.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Button asChild className="h-auto rounded-full bg-[#7BC0A4] px-8 py-4 text-base font-bold text-white hover:bg-[#008F7A]">
                  <Link href="/kurzy/foundations">Více informací</Link>
                </Button>
                <Button asChild variant="outline" className="h-auto rounded-full border-2 border-[#7BC0A4] bg-transparent px-8 py-4 text-base font-bold text-[#7BC0A4] hover:bg-[#E3FFE2]">
                  <Link href="/kurzy/start-to-pause">ZDARMA 3denní kurz</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* GROUP COURSES */}
        <div className="mt-16 bg-[#E3FFE2] rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.06)] overflow-hidden">
          <div className="flex flex-col-reverse lg:flex-row">
            <div className="lg:w-1/2 p-8 lg:p-14 border-r border-white/40">
              <h3 className="text-sm font-bold uppercase tracking-[0.15em] text-[#7BC0A4] mb-2">
                SKUPINOVÉ KURZY v Praze
              </h3>
              <p className="text-xl font-bold text-[#2D2C2B] leading-relaxed mb-4">
                Hledáte osobní vedení a skupinu kolem sebe, abyste společně zvládli mindfulness?
              </p>
              <p className="text-base text-[#4B4C4D] leading-relaxed">
                Posílíte svůj vnitřní kompas. Začnete jinak reagovat na každodenní problémy. Skupinové kurzy jsou silným prostorem pro maximální živou podporu, která garantuje rychlé výsledky a radost s každým krokem na vaší cestě.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Button asChild className="h-auto rounded-full bg-[#7BC0A4] px-8 py-4 text-base font-bold text-white hover:bg-[#008F7A]">
                  <Link href="/kurzy/skupinovy-kurz">Více informací</Link>
                </Button>
                <Button variant="outline" className="h-auto rounded-full border-2 border-[#7BC0A4] bg-transparent px-8 py-4 text-base font-bold text-[#7BC0A4] hover:bg-white">
                  ZDARMA Masterclass
                </Button>
              </div>
            </div>
            <div className="lg:w-1/2 h-64 lg:h-auto relative">
              <img src="/Pictures/BeMindful_Applifting2026Annaśolcov†.39.jpg" alt="Group Courses" className="w-full h-full object-cover absolute inset-0" />
            </div>
          </div>
        </div>

        {/* COMPANIES */}
        <div className="mt-16 bg-white rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.06)] overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-1/2 h-64 lg:h-auto relative">
              <img src="/Pictures/AdobeStock_1844492057.jpeg" alt="Companies Courses" className="w-full h-full object-cover absolute inset-0" />
            </div>
            <div className="lg:w-1/2 p-8 lg:p-14">
              <h3 className="text-3xl font-bold text-[#2D2C2B] uppercase mb-6">Mindfulness pro FIRMY</h3>
              <p className="text-base text-[#4B4C4D] leading-relaxed">
                Od stresu k odolnosti. Cítit se lépe znamená vést lépe – naučte se přejít od stresu k vnitřní stabilitě.
              </p>
              <p className="mt-4 text-base text-[#4B4C4D] leading-relaxed">
                Od krátkého úvodu do mindfulness, přes aplikovatelná témata až po rozšířený mindfulness program – nechte mě přizpůsobit mindfulness potřebám vaší firmy.
              </p>
              <div className="mt-10">
                <Button asChild className="h-auto rounded-full bg-[#7BC0A4] px-8 py-4 text-base font-bold text-white hover:bg-[#008F7A]">
                  <Link href="/kurzy/firmy">Více informací</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
