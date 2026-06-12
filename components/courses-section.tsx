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
              <Typography variant="p" className="leading-relaxed font-bold">
                Cítíš se nonstop pod tlakem? Mindfulness ti ukáže, jak z toho ven
              </Typography>
              <Typography variant="p" className="mt-4 leading-relaxed">
                To nejdůležitější z mindfulness pro běžný život. Nauč se pracovat se stresem, zahlcením a otravnými myšlenkami s podporou zkušeného lektora. Získej lepší soustředění i nadhled. Kurz, který zvládneš i v tramvaji – 30 lekcí, 10 minut denně.
              </Typography>
              <div className="mt-10 flex flex-wrap gap-4">
                <Button asChild variant="primary">
                  <Link href="/kurzy/foundations">Jdu do toho</Link>
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
                Nauč se díky mindfulness zastavit dřív, než tě zastaví stres a vyčerpání
              </Typography>
              <Typography variant="p" className="leading-relaxed">
                Zažij 8 týdnů intenzivní mindfulness praxe ve skupině podobně naladěných lidí. Naučíš se zpomalit, zvládat tlak a najít vnitřní klid v každodenním chaosu. Krok za krokem si vytvoříš pevnější vnitřní oporu, o kterou se můžeš opřít i v těžkých chvílích.
              </Typography>
              <div className="mt-10 flex flex-wrap gap-4">
                <Button asChild variant="primary">
                  <Link href="/kurzy/skupinovy-kurz">Hlásím se</Link>
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
              <Typography variant="p" className="leading-relaxed font-bold">
                Když jsou lidé přetížení, doplácí na to celá firma. Změňte to
              </Typography>
              <Typography variant="p" className="mt-4 leading-relaxed">
                Stres a zahlcení snižují výkon i kvalitu práce a vedou k odchodu schopných zaměstnanců. Využijte mindfulness pro budování odolnějších týmů, stabilnějšího leadershipu a prostředí, kde dlouhodobý výkon nestojí na vyčerpání.
              </Typography>
              <div className="mt-10">
                <Button asChild variant="primary">
                  <Link href="/kurzy/firmy">Zajistit víc</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
