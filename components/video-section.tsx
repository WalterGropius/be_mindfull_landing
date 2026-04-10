import Link from "next/link"
import { Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Typography } from "@/components/ui/typography"

export function VideoSection() {
  return (
    <section>
      <div className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
           <div className="mx-auto max-w-2xl text-center">
            <Typography variant="h2" align="center" className="text-balance">
              Malé posuny, které přinášejí velké změny
            </Typography>
            <Typography variant="p" align="center" className="mt-5">
              Pusťte představu, že jednou bude život bez výzev. <br></br>To, jak k nim přistupujeme, dělá v životě ten skutečný rozdíl.
            </Typography>
            <Typography variant="p" align="center" className="mt-4">
              Je překvapivé, jak málo stačí, aby se chaos proměnil v prostor, stres v klid. Dokáže to každý. Udělejte dnes první krok.
            </Typography>
            <Typography variant="p" align="center" className="mt-4">
              Vytváření trvalé změny ve formě větší emoční odolnosti, lepší kontroly myšlenek, přerušení nefunkčních vzorců a fyzických přínosů pro zdraví.
            </Typography>
          </div>
        </div>
      </div>

      <div className="bg-[#F5F6F7] py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <Typography variant="span" color="primary" align="center" className="font-bold uppercase tracking-wider block">
              MINDFULNESS NENÍ JEDEN PŘÍSTUP PRO VŠECHNY
            </Typography>
            <Typography variant="h2" align="center" className="mt-4 text-pretty leading-tight">
              Ověřený a osobní přístup k mindfulness pro běžný život od Senior Mindfulness Teacher Michala Dvořáka
            </Typography>
          </div>

          <div className="relative mx-auto mt-12 max-w-5xl">
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-[1rem] bg-secondary">
              <img src="/Pictures/_DSC7728.jpg" alt="Michal Dvořák" className="w-full h-full object-cover" />
              <button className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-border-subtle transition-transform hover:scale-110" aria-label="Play video">
                <Play className="ml-1 h-8 w-8 fill-surface-white text-surface-white" />
              </button>
            </div>
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-6">
            <Button asChild variant="primary">
              <Link href="/kurzy/foundations">Začni s mindfulness ještě dnes!</Link>
            </Button>
            <Button asChild variant="secondary">
              <Link href="/kurzy/skupinovy-kurz">Skupinové kurzy v Praze</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
