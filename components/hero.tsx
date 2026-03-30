import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Typography } from "@/components/ui/typography"

export function Hero() {
  return (
    <section className="relative w-full bg-primary-green-dark overflow-hidden">
      {/* Background large circle */}
      <div className="absolute left-1/2 bottom-[-40%] -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-primary-green lg:w-[950px] lg:h-[950px] lg:bottom-[-100%] pointer-events-none"></div>
      
      <div className="relative mx-auto flex min-h-[500px] max-w-7xl items-center px-6 py-20 lg:px-8 z-10">
        <div className="flex w-full items-center justify-between">
          <div className="max-w-2xl relative z-20">
            <Typography variant="display" className="text-balance sm:text-5xl lg:text-[64px] lg:leading-[1.1]">
              Zastav se a vytvoř si<br />prostor pro změnu tvého života.
            </Typography>
            <Typography variant="p" className="mt-6 text-pretty max-w-md">
              Schopnost se zastavit patří dnes k nejdůležitějším dovednostem – pomáhá nám orientovat se v každodenních rozhodnutích, stresu a změnách s větší jasností a lehkostí.
            </Typography>
            <div className="mt-8">
              <Button asChild variant="primary-orange" className="group">
                <Link href="/kurzy/foundations">
                  <span className="flex items-center gap-2">Zobrazit kurzy <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" /></span>
                </Link>
              </Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
