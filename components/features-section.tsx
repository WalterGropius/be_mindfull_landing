import { TrendingUp } from "lucide-react"
import { Typography } from "@/components/ui/typography"

export function FeaturesSection() {
  return (
    <section className="bg-surface-white py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Centered Header */}
        <div className="mx-auto max-w-3xl mb-12 lg:mb-20">
          <Typography variant="h2" align="center" className="text-balance">
            Přínosy mindfulness – nejen trend, ale vědecky ověřený přístup k lepšímu zdraví, pohodě a odolnosti
          </Typography>
        </div>

        {/* Two Columns: List & Image */}
        <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:gap-16">
          <div className="lg:w-1/2 lg:pr-12">
            <Typography variant="p" className="font-bold">Tento program je pro vás, pokud chcete:</Typography>
            <div className="mt-8 space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-end justify-start rounded-full bg-secondary">
                  <img src="/tic.png" alt="Emotional Resilience" className="w-10 h-10" />
                </div>
                <Typography variant="p" className="pt-2">
                  <span className="font-bold mb-1">Budovat emoční odolnost:</span> naučit se zvládat těžké emoce a životní výzvy s větší stabilitou.
                </Typography>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-end justify-start rounded-full bg-secondary">
                  <img src="/tic.png" alt="Thought Control" className="w-10 h-10" />
                </div>
                <Typography variant="p" className="pt-2">
                  <span className="font-bold mb-1">Zlepšit kontrolu myšlenek:</span> a přerušit opakující se vzorce, které vám už neslouží.
                </Typography>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-end justify-start rounded-full bg-secondary">
                  <img src="/tic.png" alt="Physical Health" className="w-10 h-10" />
                </div>
                <Typography variant="p" className="pt-2">
                  <span className="font-bold  mb-1">Podpořit fyzické zdraví:</span> a snížit projevy stresu, jako je nespavost či úzkost, a zlepšit celkovou pohodu.
                </Typography>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-end justify-start rounded-full bg-secondary">
                  <img src="/tic.png" alt="Manage Stress" className="w-10 h-10" />
                </div>
                <Typography variant="p" className="pt-2">
                  <span className="font-bold mb-1">Lépe zvládat stres:</span> naučit se techniky podložené vědeckými poznatky, které pomáhají přinést do práce i života více klidu.
                </Typography>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-end justify-start rounded-full bg-secondary">
                  <img src="/tic.png" alt="Compassion" className="w-10 h-10" />
                </div>
                <Typography variant="p" className="pt-2">
                  <span className="font-bold mb-1">Zlepšit vztahy a více soucitu:</span> rozvíjet laskavost k sobě i druhým, posilovat vztahy a žít vyrovnanější život.
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
                style={{ objectPosition: "50% 10%" }}
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
