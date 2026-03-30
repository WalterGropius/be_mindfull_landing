import { TrendingUp } from "lucide-react"
import { Typography } from "@/components/ui/typography"

export function FeaturesSection() {
  return (
    <section className="bg-surface-white py-16 lg:py-24">
      <div className="mx-auto flex max-w-7xl flex-col gap-12 px-6 lg:flex-row lg:items-start lg:gap-16 lg:px-8">
        <div className="lg:w-1/2 lg:pr-12">
          <Typography variant="h2" className="text-balance">
            Přínosy mindfulness – nejen trend, ale vědecky ověřený přístup k lepšímu zdraví, pohodě a odolnosti
          </Typography>
          <Typography variant="p" className="mt-8 font-bold">Tento program je pro vás, pokud chcete:</Typography>
          <div className="mt-8 space-y-6">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-secondary">
                <img src="/Illustrations/brain1.svg" alt="Emotional Resilience" className="w-6 h-6" />
              </div>
              <Typography variant="p" className="pt-3">
                <span className="font-bold block mb-1">Budovat emoční odolnost:</span> naučit se zvládat těžké emoce a životní výzvy s větší stabilitou.
              </Typography>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-secondary">
                <img src="/Illustrations/brain2.svg" alt="Thought Control" className="w-6 h-6" />
              </div>
              <Typography variant="p" className="pt-3">
                <span className="font-bold block mb-1">Zlepšit kontrolu myšlenek:</span> a přerušit opakující se vzorce, které vám už neslouží.
              </Typography>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-secondary">
                <img src="/Illustrations/brain00.svg" alt="Physical Health" className="w-6 h-6" />
              </div>
              <Typography variant="p" className="pt-3">
                <span className="font-bold block mb-1">Podpořit fyzické zdraví:</span> a snížit projevy stresu, jako je nespavost či úzkost, a zlepšit celkovou pohodu.
              </Typography>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-secondary">
                <img src="/Illustrations/brain01.svg" alt="Manage Stress" className="w-6 h-6" />
              </div>
              <Typography variant="p" className="pt-3">
                <span className="font-bold block mb-1">Lépe zvládat stres:</span> naučit se techniky podložené vědeckými poznatky, které pomáhají přinést do práce i života více klidu.
              </Typography>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-secondary">
                <img src="/Illustrations/brain02.svg" alt="Compassion" className="w-6 h-6" />
              </div>
              <Typography variant="p" className="pt-3">
                <span className="font-bold block mb-1">Zlepšit vztahy a více soucitu:</span> rozvíjet laskavost k sobě i druhým, posilovat vztahy a žít vyrovnanější život.
              </Typography>
            </div>
          </div>
          <Typography variant="h4" className="mt-12 text-lg">
            Start to care about your own well-being and you will impact all the world around you in a positive way.
          </Typography>
        </div>
        <div className="lg:w-1/2">
          <div className="aspect-[4/5] w-full lg:min-h-[600px] overflow-hidden rounded-[2rem] rounded-tl-[8rem] shadow-xl">
            <img src="/Pictures/AdobeStock_313540527.jpeg" alt="Wellbeing" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  )
}
