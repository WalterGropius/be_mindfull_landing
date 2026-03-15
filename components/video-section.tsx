import Link from "next/link"
import { Play } from "lucide-react"
import { Button } from "@/components/ui/button"

export function VideoSection() {
  return (
    <section className="bg-background py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-2xl font-bold text-[#5E767E] lg:text-3xl">
            Malé posuny, které přinášejí velké změny
          </h2>
          <p className="mt-5 text-sm leading-relaxed text-[#9DA59C]">
            Pusťte představu, že jednou bude život bez výzev. To, jak k nim přistupujeme, dělá v životě ten skutečný rozdíl.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-[#9DA59C]">
            Je překvapivé, jak málo stačí, aby se chaos proměnil v prostor, stres v klid. Dokáže to každý. Udělejte dnes první krok.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-[#9DA59C]">
            Nejde o to změnit celý život, ale vytvořit v něm prostor klidu v každodenním chaosu.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-[#9DA59C]">
            Vytváření trvalé změny ve formě větší emoční odolnosti, lepší kontroly myšlenek, přerušení nefunkčních vzorců a fyzických přínosů pro zdraví.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#9DA59C]">
            MINDFULNESS NENÍ JEDEN PŘÍSTUP PRO VŠECHNY
          </p>
          <h3 className="mt-4 text-pretty text-xl font-bold text-[#5E767E] lg:text-2xl">
            Ověřený a osobní přístup k mindfulness pro běžný život od Senior Mindfulness Teacher Michala Dvořáka
          </h3>
          <div className="mx-auto mt-6 max-w-md space-y-2 text-sm text-[#9DA59C]">
            <p>Ukážu vám, jak tuto silnou metodu využít a integrovat do vašeho každodenního života.</p>
            <p>Jednoduché, vedené kroky, které zvládne každý.</p>
            <p>Krátká cvičení, která fungují zejména ve stresujícím životním tempu.</p>
          </div>
        </div>

        <div className="relative mx-auto mt-10 max-w-4xl">
          <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-[#3D5A50]">
            <button className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/20 transition-transform hover:scale-110" aria-label="Přehrát video">
              <Play className="ml-1 h-6 w-6 fill-white text-white" />
            </button>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Button asChild className="h-auto rounded-full bg-[#7BC0A4] px-6 py-3 text-sm text-white hover:bg-[#008F7A]">
            <Link href="/kurzy/foundations">Začni s mindfulness ještě dnes!</Link>
          </Button>
          <Button asChild variant="outline" className="h-auto rounded-full border-[#C0D1C6] bg-transparent px-6 py-3 text-sm text-[#5E767E] hover:bg-[#E3FFE2]">
            <Link href="/kurzy/skupinovy-kurz">Skupinové kurzy v Praze</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
