import Link from "next/link"
import { ArrowRight, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { NewsletterSection } from "@/components/newsletter-section"
import { Footer } from "@/components/footer"

function ImagePlaceholder({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center bg-[#E3FFE2] rounded-lg ${className}`}>
      <svg width="60" height="45" viewBox="0 0 60 45" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15 35 L25 20 L35 35 Z" fill="#C0D1C6" />
        <path d="M25 35 L40 15 L55 35 Z" fill="#9DA59C" />
        <circle cx="18" cy="12" r="5" fill="#C0D1C6" />
      </svg>
    </div>
  )
}

const stats = [
  { value: "15+", label: "let praxe" },
  { value: "2000+", label: "účastníků kurzů" },
  { value: "1", label: "jediný Senior Mindfulness Teacher v ČR" },
]

const credentials = [
  "Vystudoval mindfulness na UMASS Medical School a Brown University",
  "Jediný Senior Mindfulness Teacher v České republice",
  "Od roku 2018 učí mindfulness na plný úvazek",
  "Zkušenosti s certifikačními procesy MBSR",
  "Zázemí i v psychologii jako dobrý doplněk mindfulness",
  "Mezinárodní propojení s lektory ze zemí západní Evropy",
]

export default function AboutPage() {
  return (
    <main className="min-h-screen font-sans">
      <Header />

      {/* Hero */}
      <section className="bg-[#E3FFE2] py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-3xl font-bold text-[#5E767E] lg:text-4xl">O mně</h1>
            <p className="mt-4 text-lg text-[#9DA59C]">Michal Dvořák – Senior Mindfulness Teacher</p>
          </div>
        </div>
      </section>

      {/* Bio */}
      <section className="bg-background py-16 lg:py-24">
        <div className="mx-auto flex max-w-7xl flex-col gap-12 px-6 lg:flex-row lg:items-center lg:gap-16 lg:px-8">
          <div className="lg:w-1/2">
            <ImagePlaceholder className="aspect-[3/4] w-full" />
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-2xl font-bold text-[#5E767E] lg:text-3xl">Jsem Michal Dvořák, zakladatel be.mindful</h2>
            <p className="mt-5 text-sm leading-relaxed text-[#9DA59C]">
              Jsem Michal Dvořák, senior mindfulness teacher. Mindfulness jsem vystudoval ve dvou světových centrech – UMASS Medical School a Brown University – a od roku 2018 ji učím na plný úvazek.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-[#9DA59C]">
              Učím to, co sám žiju, a snažím se přistupovat k praxi i životu s nadhledem a nohama pevně na zemi. Protože právě o tom mindfulness je – měnit to, jak reagujeme na problémy a náročné situace. S laskavostí, ale také pevně a důsledně.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-[#9DA59C]">
              Dnes jsem jediný Senior Mindfulness Teacher v České republice a můj specifický a radostný přístup zpřístupňuje mindfulness tisícům lidí za posledních 15 let.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-[#E3FFE2] py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-3">
            {stats.map((s, i) => (
              <div key={i} className="text-center">
                <p className="text-4xl font-bold text-[#5E767E]">{s.value}</p>
                <p className="mt-2 text-sm text-[#9DA59C]">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="bg-background py-16 lg:py-24">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <h2 className="text-center text-2xl font-bold text-[#5E767E]">Kvalifikace a zkušenosti</h2>
          <div className="mt-10 space-y-4">
            {credentials.map((c, i) => (
              <div key={i} className="flex items-start gap-3">
                <Award className="mt-0.5 h-4 w-4 shrink-0 text-[#5E767E]" />
                <p className="text-sm text-[#9DA59C]">{c}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#5E767E] py-16 lg:py-20">
        <div className="mx-auto max-w-2xl px-6 text-center lg:px-8">
          <h2 className="text-2xl font-bold text-white">Připojte se k mé cestě</h2>
          <p className="mt-4 text-sm text-white/80">Začněte svou cestu k mindfulness s osobním vedením.</p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button asChild className="h-auto rounded-full bg-white px-6 py-3 text-sm text-[#5E767E] hover:bg-white/90">
              <Link href="/kurzy/foundations">Prohlédnout kurzy <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
            <Button asChild variant="outline" className="h-auto rounded-full border-white/30 bg-transparent px-6 py-3 text-sm text-white hover:bg-white/10">
              <Link href="/kontakt">Kontaktovat mě</Link>
            </Button>
          </div>
        </div>
      </section>

      <NewsletterSection />
      <Footer />
    </main>
  )
}
