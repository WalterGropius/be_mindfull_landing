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
              Stačí malé kroky, které zvládne každý.
            </Typography>
            <Typography variant="p" align="center" className="mt-5">
              Pusť představu, že jednou budeš mít život bez problémů. <br></br>Nejde o to se zbavit náročných situací, ale naučit se k nim přistupovat jinak. V tom spočívá zásadní změna.
            </Typography>
            <Typography variant="p" align="center" className="mt-4">
              Je překvapivé, jak málo někdy stačí, aby se chaos proměnil v prostor a stres v klid. Nemusíš hned všechno měnit. Stačí začít postupnými kroky, které zvládne každý.
            </Typography>
            <Typography variant="p" align="center" className="mt-4">
              Zklidnění hlavy, větší emoční odolnost i změnu nefunkčních vzorců máš ve svých rukách. Začni dnes.
            </Typography>
          </div>
        </div>
      </div>

      <div className="bg-[#F5F6F7] py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <Typography variant="span" color="primary" align="center" className="font-bold uppercase tracking-wider block">
              MINDFULNESS NA MÍRU - PRO TVŮJ ŽIVOT
            </Typography>
            <Typography variant="h2" align="center" className="mt-4 text-pretty leading-tight">
              Ověřený a osobní přístup k mindfulness pro běžný život – Michal Dvořák, Senior Mindfulness Teacher.
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
              <Link href="/kurzy/start-to-pause">Začni ještě dnes s 4denním kurzem mindfulness zdarma</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
