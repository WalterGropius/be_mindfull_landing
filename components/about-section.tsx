import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Typography } from "@/components/ui/typography"

export function AboutSection() {
  return (
    <section className="bg-border-subtle py-16 lg:py-24">
      <div className="mx-auto flex max-w-7xl flex-col gap-12 px-6 lg:flex-row lg:items-stretch lg:gap-16 lg:px-8">
        <div className="flex flex-col justify-center lg:w-1/2">
          <Typography variant="h2" className="leading-tight">
            Jsem Michal Dvořák,<br />zakladatel be.mindful a lektor
          </Typography>
          <Typography variant="p" className="mt-6 leading-relaxed">
            Mindfulness mě zachránilo před vyhořením a pomáhá mi zvládat stres i každodenní tlak. Studoval jsem ho přímo tam, kde vzniklo, na UMASS Medical School a na Brown University v USA.
          </Typography>
          <Typography variant="p" className="mt-4 leading-relaxed">
            Kurzy vedu od roku 2018. Jako jediný v Česku mám nejvyšší kvalifikaci Senior Mindfulness Teacher. Absolvoval jsem pětiletý psychoterapeutický výcvik SUR.
          </Typography>
          <Typography variant="p" className="mt-4 leading-relaxed">
            Jsem manžel, táta i člověk s nabitým diářem. Mindfulness mi pomáhá zklidnit hlavu a získat větší nadhled. A přesně to učím i ostatní. Prakticky, lidsky, tak aby to fungovalo i uprostřed každodenního shonu.
          </Typography>
          <div className="mt-10">
            <Button asChild variant="primary-orange" className="h-auto whitespace-normal text-center">
              <Link href="/o-mne">Zjisti víc o mně</Link>
            </Button>
          </div>
        </div>
        <div className="relative w-full h-[300px] md:h-[450px] lg:h-auto lg:w-1/2 lg:flex-shrink-0">
          <div className="absolute inset-0 overflow-hidden rounded-[1rem]">
               <img src="/about-applifting-111.jpg" alt="Michal Dvořák" className="w-full h-full object-cover object-top" />
          </div>
        </div>
      </div>
    </section>
  )
}
