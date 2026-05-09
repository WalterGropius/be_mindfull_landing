import { TrendingUp } from "lucide-react"
import { Typography } from "@/components/ui/typography"

export function FeaturesSection() {
  return (
    <section className="bg-surface-white py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Centered Header */}
        <div className="mx-auto max-w-3xl mb-12 lg:mb-20">
          <Typography variant="h2" align="center" className="text-balance">
            Výsledky, které ucítíš. Věda to potvrzuje.
          </Typography>
        </div>

        {/* Two Columns: List & Image */}
        <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:gap-16">
          <div className="lg:w-1/2 lg:pr-12">
            <Typography variant="p" className="font-bold">Je to pro tebe, pokud chceš:</Typography>
            <div className="mt-8 space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-end justify-start rounded-full bg-secondary">
                  <img src="/tic.png" alt="Thought Control" className="w-10 h-10" />
                </div>
                <Typography variant="p" className="pt-2">
                  Lépe zvládat myšlenky a vystoupit z kruhů, které nikam nevedou.
                </Typography>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-end justify-start rounded-full bg-secondary">
                  <img src="/tic.png" alt="Manage Stress" className="w-10 h-10" />
                </div>
                <Typography variant="p" className="pt-2">
                  Zvládat stres s větším nadhledem – ne ho jen překousnout a jít dál.
                </Typography>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-end justify-start rounded-full bg-secondary">
                  <img src="/tic.png" alt="Emotional Resilience" className="w-10 h-10" />
                </div>
                <Typography variant="p" className="pt-2">
                  Nenechat se pohltit emocemi – ani v těch nejnáročnějších chvílích.
                </Typography>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-end justify-start rounded-full bg-secondary">
                  <img src="/tic.png" alt="Present moment" className="w-10 h-10" />
                </div>
                <Typography variant="p" className="pt-2">
                  Přestat žít v hlavě a začít žít naplno – tady a teď.
                </Typography>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-end justify-start rounded-full bg-secondary">
                  <img src="/tic.png" alt="Inner calm" className="w-10 h-10" />
                </div>
                <Typography variant="p" className="pt-2">
                  Lépe spát, méně se trápit, více si odpočinout – bez pocitu viny.
                </Typography>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-end justify-start rounded-full bg-secondary">
                  <img src="/tic.png" alt="Compassion" className="w-10 h-10" />
                </div>
                <Typography variant="p" className="pt-2">
                  Být laskavější k sobě i k těm, na kom ti záleží.
                </Typography>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-end justify-start rounded-full bg-secondary">
                  <img src="/tic.png" alt="Pause" className="w-10 h-10" />
                </div>
                <Typography variant="p" className="pt-2">
                  Získat nadhled i ve chvílích, kdy vše jede naplno.
                </Typography>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-end justify-start rounded-full bg-secondary">
                  <img src="/tic.png" alt="Daily practice" className="w-10 h-10" />
                </div>
                <Typography variant="p" className="pt-2">
                  Osvojit si mindfulness a naučit se mindfulness meditace využívat v běžném životě.
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
