import Link from "next/link"
import { Play } from "lucide-react"
import { Button } from "@/components/ui/button"

export function VideoSection() {
  return (
    <section className="bg-background py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-bold text-[#2D2C2B] lg:text-4xl">
            Malé posuny, které přinášejí velké změny
          </h2>
          <p className="mt-5 text-base leading-relaxed text-[#4B4C4D]">
            Pusťte představu, že jednou bude život bez výzev. To, jak k nim přistupujeme, dělá v životě ten skutečný rozdíl.
          </p>
          <p className="mt-4 text-base leading-relaxed text-[#4B4C4D]">
            Je překvapivé, jak málo stačí, aby se chaos proměnil v prostor, stres v klid. Dokáže to každý. Udělejte dnes první krok.
          </p>
          <p className="mt-4 text-base leading-relaxed text-[#4B4C4D]">
            Vytváření trvalé změny ve formě větší emoční odolnosti, lepší kontroly myšlenek, přerušení nefunkčních vzorců a fyzických přínosů pro zdraví.
          </p>
        </div>

        <div className="mx-auto mt-24 max-w-3xl text-center">
          <p className="text-base font-bold text-[#7BC0A4]">
            MINDFULNESS NENÍ JEDEN PŘÍSTUP PRO VŠECHNY
          </p>
          <h3 className="mt-4 text-pretty text-3xl font-bold text-[#2D2C2B] lg:text-4xl leading-tight">
            Ověřený a osobní přístup k mindfulness pro běžný život od Senior Mindfulness Teacher Michala Dvořáka
          </h3>
        </div>

        <div className="relative mx-auto mt-12 max-w-5xl">
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-[2rem] bg-[#E3FFE2] shadow-xl">
            <img src="/Pictures/_DSC7728.jpg" alt="Michal Dvořák" className="w-full h-full object-cover" />
            <button className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#C0D1C6] transition-transform hover:scale-110" aria-label="Play video">
              <Play className="ml-1 h-8 w-8 fill-white text-white" />
            </button>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-6">
          <Button asChild className="h-auto rounded-full bg-[#7BC0A4] px-8 py-4 text-base font-bold text-white hover:bg-[#008F7A]">
            <Link href="/kurzy/foundations">Začni s mindfulness ještě dnes!</Link>
          </Button>
          <Button asChild variant="outline" className="h-auto rounded-full border-2 border-[#C0D1C6] bg-transparent px-8 py-4 text-base font-bold text-[#7BC0A4] hover:bg-[#E3FFE2]">
            <Link href="/kurzy/skupinovy-kurz">Skupinové kurzy v Praze</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
