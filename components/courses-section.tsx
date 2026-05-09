import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Typography } from "@/components/ui/typography"

function ImagePlaceholder() {
  return (
    <div className="flex h-full w-full items-center justify-center bg-[#C0D1C6] rounded-[1rem]">
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
    <section className="bg-surface-white py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* FOUNDATIONS */}
        <div className="bg-[#f5f6f4] rounded-[1rem] overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-1/2 h-64 lg:h-auto relative">
               <img src="/Pictures/be.mindful%20MEMBERSHIP/Portrety_BeMindful2026AnnaSolcova.40.jpg" alt="Foundations Course" className="w-full h-full object-cover absolute inset-0" />
            </div>
            <div className="lg:w-1/2 p-8 lg:p-14">
              <Typography variant="h3" className="uppercase mb-6">be.mindful FOUNDATIONS</Typography>
              <Typography variant="p" className="leading-relaxed">
                Základ, který ti vydrží. 30 lekcí, 10 minut denně.
              </Typography>
              <Typography variant="p" className="mt-4 leading-relaxed">
                Získáš větší odolnost a víc klidu v každodenním jednání.
              </Typography>
              <Typography variant="p" className="mt-4 leading-relaxed">
                To nejdůležitější z mindfulness pro tvůj život.
              </Typography>
              <div className="mt-10 flex flex-wrap gap-4">
                <Button asChild variant="primary">
                  <Link href="/kurzy/foundations">Chci vědět víc</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* GROUP COURSES */}
        <div className="mt-16 bg-[#f5f6f4] rounded-[1rem] overflow-hidden">
          <div className="flex flex-col-reverse lg:flex-row">
            <div className="lg:w-1/2 p-8 lg:p-14 border-r border-white/40">
              <Typography variant="span" color="primary" className="text-sm font-bold uppercase tracking-[0.15em] mb-2 block">
                8TÝDENNÍ KURZ MINDFULNESS (MBSR)
              </Typography>
              <Typography variant="h4" className="text-xl leading-relaxed mb-4">
                Chceš jít do hloubky? S vedením a se skupinou podobně naladěných lidí?<br />Začni reagovat jinak na každodenní problémy.
              </Typography>
              <Typography variant="p" className="leading-relaxed">
                Osm týdnů intenzivní praxe s osobním vedením a skupinou, která ti dá energii pokračovat. Vytvoříš si vnitřní kompas, o který se opřeš i v těžkých chvílích. Získáš podporu šitou na míru přesně tomu, kde se právě nacházíš.
              </Typography>
              <div className="mt-10 flex flex-wrap gap-4">
                <Button asChild variant="primary">
                  <Link href="/kurzy/skupinovy-kurz">Více informací</Link>
                </Button>
              </div>
            </div>
            <div className="lg:w-1/2 h-64 lg:h-auto relative">
              <img src="/Pictures/BeMindful_Applifting2026Annaśolcov†.39.jpg" alt="Group Courses" className="w-full h-full object-cover absolute inset-0" />
            </div>
          </div>
        </div>

        {/* COMPANIES */}
        <div className="mt-16 bg-[#f5f6f4] rounded-[1rem] overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-1/2 h-64 lg:h-auto relative">
              <img src="/Pictures/Homepage/BeMindful_Applifting2026Annaśolcov†.5.jpg" alt="Companies Courses" className="w-full h-full object-cover absolute inset-0" />
            </div>
            <div className="lg:w-1/2 p-8 lg:p-14">
              <Typography variant="h3" className="uppercase mb-6">MINDFULNESS VE FIRMÁCH</Typography>
              <Typography variant="p" className="leading-relaxed">
                Vyhoření, stres, ztráta soustředění – to stojí firmy víc, než si myslí. Mindfulness je investice, která se vrátí: odolnější lidé, lepší komunikace, klidnější vedení.
              </Typography>
              <div className="mt-10">
                <Button asChild variant="primary">
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
