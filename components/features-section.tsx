import { TrendingUp } from "lucide-react"
import { Typography } from "@/components/ui/typography"

export function FeaturesSection() {
  return (
    <section className="bg-surface-white py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Centered Header */}
        <div className="mx-auto max-w-3xl mb-12 lg:mb-20">
          <Typography variant="h2" align="center" className="text-balance">
            Změna, které si všimne i tvé okolí. Podloženo vědou
          </Typography>
        </div>

        {/* Two Columns: List & Image */}
        <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:gap-16">
          <div className="lg:w-1/2 lg:pr-12">
            <Typography variant="p" className="font-bold">V be.mindful se naučíš:</Typography>
            <div className="mt-8 space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-end justify-start rounded-full bg-secondary">
                  <img src="/tic.png" alt="Thought Control" className="w-10 h-10" />
                </div>
                <Typography variant="p" className="pt-2">
                  <strong>Zvládat lépe myšlenky</strong>, které tě vyčerpávají a berou ti energii.
                </Typography>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-end justify-start rounded-full bg-secondary">
                  <img src="/tic.png" alt="Manage Stress" className="w-10 h-10" />
                </div>
                <Typography variant="p" className="pt-2">
                  <strong>Zvládat stres s nadhledem</strong> namísto režimu „musím to vydržet“.
                </Typography>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-end justify-start rounded-full bg-secondary">
                  <img src="/tic.png" alt="Emotional Resilience" className="w-10 h-10" />
                </div>
                <Typography variant="p" className="pt-2">
                  <strong>Nenechat se semlít emocemi</strong> ani v těch nejnáročnějších situacích.
                </Typography>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-end justify-start rounded-full bg-secondary">
                  <img src="/tic.png" alt="Present moment" className="w-10 h-10" />
                </div>
                <Typography variant="p" className="pt-2">
                  <strong>Přestat být vždy o krok napřed</strong> a začít víc žít to, co se děje právě teď.
                </Typography>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-end justify-start rounded-full bg-secondary">
                  <img src="/tic.png" alt="Inner calm" className="w-10 h-10" />
                </div>
                <Typography variant="p" className="pt-2">
                  <strong>Lépe spát, hluboce si odpočinout</strong> a nebýt neustále v napětí.
                </Typography>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-end justify-start rounded-full bg-secondary">
                  <img src="/tic.png" alt="Relationships" className="w-10 h-10" />
                </div>
                <Typography variant="p" className="pt-2">
                  <strong>Nenechat napětí ničit tvůj soukromý život</strong> a vztahy s okolím.
                </Typography>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-end justify-start rounded-full bg-secondary">
                  <img src="/tic.png" alt="Daily practice" className="w-10 h-10" />
                </div>
                <Typography variant="p" className="pt-2">
                  <strong>Osvojit si mindfulness techniky</strong> a využívat je v běžném životě.
                </Typography>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2">
            <div className="aspect-[4/5] w-full overflow-hidden rounded-[1rem] lg:aspect-auto lg:h-[560px]">
              <img
                src="/Pictures/Homepage/Portrety_BeMindful2026AnnaSolcova.25.jpg"
                alt="Wellbeing"
                className="w-full h-full object-cover"
                style={{ objectPosition: "50% 30%" }}
              />
            </div>
          </div>
        </div>

        {/* Centered Footer 
        <div className="mx-auto max-w-4xl mt-16 lg:mt-24">
          <Typography variant="h3" align="center" className="text-balance">
            Start to care about your own well-being and you will impact all the world around you in a positive way.
          </Typography>
        </div>*/}
      </div>
    </section>
  )
}
