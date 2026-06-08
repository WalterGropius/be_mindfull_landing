import Link from "next/link"
import { Button } from "@/components/ui/button"
import { TrailerEmbed } from "@/components/trailer-embed"
import { Typography } from "@/components/ui/typography"

export function VideoSection() {
  return (
    <section>
      <div className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
           <div className="mx-auto max-w-2xl text-center">
            <Typography variant="h2" align="center" className="text-balance">
              Problémy nezmizí, ale můžeš změnit způsob, jak je zvládáš
            </Typography>
            <Typography variant="p" align="center" className="mt-5">
              Nemusíš obrátit svůj život naruby ani jet meditovat do hor. Stačí pár minut mindfulness denně a začnou se dít věci.
            </Typography>
            <Typography variant="p" align="center" className="mt-4">
              Získáš větší nadhled, klidnější hlavu a schopnost zvládat stres s větším klidem.
            </Typography>
            <Typography variant="p" align="center" className="mt-4">
              Mindfulness nevyžaduje talent. Je to dovednost, která se dá snadno trénovat, a naučit se ji krok za krokem můžeš i ty.
            </Typography>
          </div>
        </div>
      </div>

      <div className="bg-[#F5F6F7] py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <Typography variant="span" color="primary" align="center" className="font-bold uppercase tracking-wider block">
              MINDFULNESS, KTERÉ ZAPADNE DO TVÉHO ŽIVOTA
            </Typography>
            <Typography variant="h2" align="center" className="mt-4 text-pretty leading-tight">
              Chceš se zastavit, ale hlava jede dál? Podívej se, jak z toho ven<br /><span className="text-[18px] font-medium leading-[30px]">Michal Dvořák,<br />jediný Senior Mindfulness Teacher v ČR</span>
            </Typography>
          </div>

          <div className="mx-auto mt-12 max-w-5xl">
            <TrailerEmbed
              videoSrc="/trailers/home-page.mp4"
              poster="/Pictures/_DSC7728.jpg"
              alt="Michal Dvořák"
            />
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-6">
            <Button asChild variant="primary" className="h-auto max-w-full whitespace-normal py-4 text-center leading-tight">
              <Link href="/kurzy/start-to-pause">Vyzkoušej 4denní kurz mindfulness zdarma</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
