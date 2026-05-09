import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Typography } from "@/components/ui/typography"

export function AboutSection() {
  return (
    <section className="bg-border-subtle py-16 lg:py-24">
      <div className="mx-auto flex max-w-7xl flex-col gap-12 px-6 lg:flex-row lg:items-stretch lg:gap-16 lg:px-8">
        <div className="flex flex-col justify-center lg:w-1/2">
          <Typography variant="h2" className="leading-tight">
            Jsem Michal Dvořák,<br />zakladatel be.mindful
          </Typography>
          <Typography variant="p" className="mt-6 leading-relaxed">
            Jsem certifikovaný lektor s výcvikem z UMASS Medical School a Brown University, kde mindfulness vzniklo. V ČR jsem jediným držitelem mezinárodního titulu Senior Mindfulness Teacher. Mindfulness učím od roku 2018 a absolvoval jsem také pětiletý psychoterapeutický výcvik v systému SUR.
          </Typography>
          <Typography variant="p" className="mt-4 leading-relaxed">
            Učím to, co sám žiju. Jsem také manžel a otec. Mindfulness mi přináší klid a větší nadhled a pomáhá mi zvládat stres i zklidnit hlavu.
          </Typography>
          <Typography variant="p" className="mt-4 leading-relaxed">
            Můj přístup stojí na praktičnosti, lidskosti a hledání řešení na míru. Snažím se mít obě nohy pevně na zemi, využívat humor a být laskavý, ale zároveň důsledný.
          </Typography>
          <div className="mt-10">
            <Button asChild variant="primary-orange" className="h-auto whitespace-normal text-center">
              <Link href="/o-mne">Zjisti o mně víc</Link>
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
