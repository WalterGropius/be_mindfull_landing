import { TrendingUp } from "lucide-react"

export function FeaturesSection() {
  return (
    <section className="bg-background py-16 lg:py-24">
      <div className="mx-auto flex max-w-7xl flex-col gap-12 px-6 lg:flex-row lg:items-start lg:gap-16 lg:px-8">
        <div className="lg:w-1/2 lg:pr-12">
          <h2 className="text-balance text-3xl font-bold text-[#2D2C2B] lg:text-4xl">
            Přínosy mindfulness – nejen trend, ale vědecky ověřený přístup k lepšímu zdraví, pohodě a odolnosti
          </h2>
          <p className="mt-8 text-base font-bold text-[#4B4C4D]">Tento program je pro vás, pokud chcete:</p>
          <div className="mt-8 space-y-6">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-[#E3FFE2]">
                <img src="/Illustrations/brain1.svg" alt="Emotional Resilience" className="w-6 h-6" />
              </div>
              <p className="text-base text-[#4B4C4D] pt-3">
                <span className="font-bold block text-lg mb-1">Budovat emoční odolnost:</span> naučit se zvládat těžké emoce a životní výzvy s větší stabilitou.
              </p>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-[#E3FFE2]">
                <img src="/Illustrations/brain2.svg" alt="Thought Control" className="w-6 h-6" />
              </div>
              <p className="text-base text-[#4B4C4D] pt-3">
                <span className="font-bold block text-lg mb-1">Zlepšit kontrolu myšlenek:</span> a přerušit opakující se vzorce, které vám už neslouží.
              </p>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-[#E3FFE2]">
                <img src="/Illustrations/brain00.svg" alt="Physical Health" className="w-6 h-6" />
              </div>
              <p className="text-base text-[#4B4C4D] pt-3">
                <span className="font-bold block text-lg mb-1">Podpořit fyzické zdraví:</span> a snížit projevy stresu, jako je nespavost či úzkost, a zlepšit celkovou pohodu.
              </p>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-[#E3FFE2]">
                <img src="/Illustrations/brain01.svg" alt="Manage Stress" className="w-6 h-6" />
              </div>
              <p className="text-base text-[#4B4C4D] pt-3">
                <span className="font-bold block text-lg mb-1">Lépe zvládat stres:</span> naučit se techniky podložené vědeckými poznatky, které pomáhají přinést do práce i života více klidu.
              </p>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-[#E3FFE2]">
                <img src="/Illustrations/brain02.svg" alt="Compassion" className="w-6 h-6" />
              </div>
              <p className="text-base text-[#4B4C4D] pt-3">
                <span className="font-bold block text-lg mb-1">Zlepšit vztahy a více soucitu:</span> rozvíjet laskavost k sobě i druhým, posilovat vztahy a žít vyrovnanější život.
              </p>
            </div>
          </div>
          <p className="mt-12 text-lg font-bold text-[#2D2C2B]">
            Start to care about your own well-being and you will impact all the world around you in a positive way.
          </p>
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
