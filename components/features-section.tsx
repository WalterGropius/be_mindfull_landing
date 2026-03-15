import { TrendingUp } from "lucide-react"

function ImagePlaceholder() {
  return (
    <div className="flex h-full w-full items-center justify-center bg-[#E3FFE2] rounded-lg">
      <svg width="80" height="60" viewBox="0 0 80 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 45 L35 25 L50 45 Z" fill="#C0D1C6" />
        <path d="M35 45 L55 20 L75 45 Z" fill="#9DA59C" />
        <circle cx="25" cy="18" r="6" fill="#C0D1C6" />
      </svg>
    </div>
  )
}

const features = [
  { title: "Budovat emoční odolnost", description: "naučit se zvládat těžké emoce a životní výzvy s větší stabilitou." },
  { title: "Zlepšit kontrolu myšlenek", description: "a přerušit opakující se vzorce, které vám už neslouží." },
  { title: "Podpořit fyzické zdraví", description: "a snížit projevy stresu, jako je nespavost či úzkost, a zlepšit celkovou pohodu." },
  { title: "Lépe zvládat stres", description: "naučit se techniky podložené vědeckými poznatky, které pomáhají přinést do práce i života více klidu." },
  { title: "Zlepšit vztahy a více soucitu", description: "rozvíjet laskavost k sobě i druhým, posilovat vztahy a žít vyrovnanější život." },
  { title: "Pracovat na sobě", description: "tak, aby to pozitivně ovlivnilo i svět kolem mě." },
]

export function FeaturesSection() {
  return (
    <section className="bg-background py-16 lg:py-24">
      <div className="mx-auto flex max-w-7xl flex-col gap-12 px-6 lg:flex-row lg:items-start lg:gap-16 lg:px-8">
        <div className="lg:w-1/2">
          <h2 className="text-balance text-2xl font-bold text-[#5E767E] lg:text-3xl">
            Přínosy mindfulness – nejen trend, ale vědecky ověřený přístup k lepšímu zdraví, pohodě a odolnosti
          </h2>
          <p className="mt-6 text-sm text-[#9DA59C]">Tento program je pro vás, pokud chcete:</p>
          <div className="mt-6 space-y-4">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center">
                  <TrendingUp className="h-4 w-4 text-[#5E767E]" />
                </div>
                <p className="text-sm text-[#9DA59C]">
                  <span className="font-medium text-[#5E767E]">{feature.title}</span> – {feature.description}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-[#9DA59C]">
            Start to care about your own well-being and you will impact all the world around you in a positive way.
          </p>
        </div>
        <div className="lg:w-1/2">
          <div className="aspect-[4/5] w-full lg:min-h-[500px]">
            <ImagePlaceholder />
          </div>
        </div>
      </div>
    </section>
  )
}
