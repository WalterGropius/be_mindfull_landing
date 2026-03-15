import Link from "next/link"
import { ArrowRight, Check, Clock, Video, Headphones } from "lucide-react"
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

const benefits = [
  "Naučíte se, jak se zastavit i v okamžicích, kdy máte pocit, že to nejde",
  "Pochopíte, proč je pauza důležitá a proč je to první krok k tomu, jak přestat být ve stresu",
  "Objevíte různé způsoby, jak se zastavit: dechem, tělem, nebo během jídla",
  "Dozvíte se, co se děje v mozku, když se zastavíme – a jaké to má pozitivní dopady na soustředění, klid mysli i spánek",
  "Získáte základní vhled do fungování mysli a do toho, jak s ní můžeme vědomě pracovat",
]

const modules = [
  "Síla mindfulness",
  "Jak funguje mozek a jak mu mindfulness pomáhá",
  "Jak využívat mindfulness během dne",
  "Jak vytvořit základ pro trvalou změnu",
]

export default function StartToPausePage() {
  return (
    <main className="min-h-screen font-sans">
      <Header />

      {/* Hero */}
      <section className="bg-[#E3FFE2] py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#9DA59C]">Bezplatný 3denní program</p>
            <h1 className="mt-4 text-3xl font-bold text-[#5E767E] lg:text-4xl">3denní kurz Start-to-PAUSE</h1>
            <p className="mt-5 text-base leading-relaxed text-[#9DA59C]">
              Zažijte, jak do svého života přinést trochu prostoru – a krok za krokem proměnit způsob, jak zvládáte výzvy každodenního života.
            </p>
            <div className="mt-8">
              <Button className="group h-auto rounded-full bg-[#7BC0A4] px-8 py-3 text-sm text-white hover:bg-[#008F7A]">
                Přihlaste se zdarma
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* How you will feel */}
      <section className="bg-background py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold text-[#5E767E] lg:text-3xl">Jak se budete cítit po kurzu</h2>
            <p className="mt-4 text-base text-[#9DA59C]">Ukážu vám, jak silná může být krátká pauza!</p>
          </div>
          <div className="mx-auto mt-10 max-w-2xl space-y-4">
            {benefits.map((b, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#E3FFE2]">
                  <Check className="h-3 w-3 text-[#5E767E]" />
                </div>
                <p className="text-sm text-[#9DA59C]">{b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Course Content */}
      <section className="bg-[#E3FFE2] py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold text-[#5E767E] lg:text-3xl">Získejte zpět svůj prostor za 3 dny</h2>
          </div>
          <div className="mx-auto mt-10 flex max-w-3xl flex-wrap items-center justify-center gap-8">
            <div className="flex items-center gap-3 text-sm text-[#5E767E]">
              <Clock className="h-5 w-5" /> 15 minut denně
            </div>
            <div className="flex items-center gap-3 text-sm text-[#5E767E]">
              <Video className="h-5 w-5" /> 3 video lekce
            </div>
            <div className="flex items-center gap-3 text-sm text-[#5E767E]">
              <Headphones className="h-5 w-5" /> 3 audio nahrávky
            </div>
          </div>
          <div className="mx-auto mt-10 max-w-2xl">
            <div className="space-y-3">
              {modules.map((m, i) => (
                <div key={i} className="flex items-center gap-3 rounded-lg border border-[#C0D1C6] bg-background px-5 py-4">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#7BC0A4] text-xs font-medium text-white">{i + 1}</span>
                  <p className="text-sm text-[#5E767E]">{m}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Instructor */}
      <section className="bg-background py-16 lg:py-24">
        <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6 lg:flex-row lg:items-center lg:gap-16 lg:px-8">
          <div className="lg:w-1/2">
            <ImagePlaceholder className="aspect-[4/3] w-full" />
          </div>
          <div className="lg:w-1/2">
            <p className="text-xs font-medium uppercase tracking-[0.15em] text-[#9DA59C]">O lektorovi</p>
            <h2 className="mt-3 text-2xl font-bold text-[#5E767E]">Michal Dvořák</h2>
            <p className="mt-4 text-sm leading-relaxed text-[#9DA59C]">
              Jsem Michal Dvořák, senior mindfulness teacher. Mindfulness jsem vystudoval ve dvou světových centrech – UMASS Medical School a Brown University – a od roku 2018 ji učím na plný úvazek.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-[#9DA59C]">
              Učím to, co sám žiju, a snažím se přistupovat k praxi i životu s nadhledem a nohama pevně na zemi.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#7BC0A4] py-16 lg:py-20">
        <div className="mx-auto max-w-2xl px-6 text-center lg:px-8">
          <h2 className="text-2xl font-bold text-white lg:text-3xl">Vyplňte formulář a začněte svou cestu zdarma ještě dnes</h2>
          <div className="mt-8">
            <Button className="group h-auto rounded-full bg-white px-8 py-3 text-sm text-[#5E767E] hover:bg-white/90">
              Přihlaste se zdarma
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </section>

      <NewsletterSection />
      <Footer />
    </main>
  )
}
