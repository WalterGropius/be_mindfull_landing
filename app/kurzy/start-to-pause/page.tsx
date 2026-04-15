import Image from "next/image"
import { ArrowRight, Check, Clock, Video, Headphones, Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { NewsletterSection } from "@/components/newsletter-section"
import { Footer } from "@/components/footer"

const benefits = [
  "Naučíte se, jak se zastavit i v okamžicích, kdy máte pocit, že to nejde",
  "Pochopíte, proč je pauza důležitá a proč je to první krok k tomu, jak přestat být ve stresu",
  "Objevíte různé způsoby, jak se zastavit: dechem, tělem, nebo během jídla",
  "Dozvíte se, co se děje v mozku, když se zastavíme – a jaké to má pozitivní dopady na soustředění, klid mysli i spánek",
  "Získáte základní vhled do fungování mysli a do toho, jak s ní můžeme vědomě pracovat",
]

const modules = [
  { day: "DAY 1", title: "Síla mindfulness" },
  { day: "DAY 2", title: "Jak funguje mozek a jak mu mindfulness pomáhá" },
  { day: "DAY 3", title: "Jak využívat mindfulness během dne" },
  { day: "DAY 4", title: "Jak vytvořit základ pro trvalou změnu" },
]

export default function StartToPausePage() {
  return (
    <main className="min-h-screen font-sans">
      <Header />

      {/* Hero */}
      <section className="relative min-h-[500px] overflow-hidden bg-[#2D2C2B] lg:min-h-[600px]">
        <Image
          src="/Theme_4-days_FREE.jpg"
          alt="FREE 4denní online kurz Start-to-PAUSE"
          fill
          className="object-cover opacity-50"
          priority
        />
        <div className="relative z-10 flex min-h-[500px] items-center lg:min-h-[600px]">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-xl">
              <p className="text-sm font-bold uppercase tracking-widest text-[#7BC0A4]">FREE 4denní online kurz</p>
              <h1 className="mt-3 text-4xl font-bold text-white lg:text-5xl">Start-to-PAUSE</h1>
              <p className="mt-4 text-lg text-white/80">Ukážu vám, jak silná může být krátká pauza!</p>
              <div className="mt-8">
                <Button className="h-auto rounded-full bg-[#7BC0A4] px-8 py-3 text-sm font-semibold text-white hover:bg-[#008F7A]">
                  Přihlaste se zdarma <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How you will feel */}
      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto flex max-w-7xl flex-col gap-12 px-6 lg:flex-row lg:items-center lg:gap-16 lg:px-8">
          <div className="lg:w-1/2">
            <p className="text-sm font-bold uppercase tracking-widest text-[#7BC0A4]">Jak se budete cítit po kurzu</p>
            <h2 className="mt-4 text-3xl font-bold text-[#2D2C2B] lg:text-4xl">Ukážu vám, jak silná může být krátká pauza!</h2>
            <div className="mt-8 space-y-4">
              {benefits.map((b, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#7BC0A4]/15">
                    <Check className="h-3 w-3 text-[#7BC0A4]" />
                  </div>
                  <p className="text-sm leading-relaxed text-[#4B4C4D]">{b}</p>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <Button className="h-auto rounded-full bg-[#7BC0A4] px-8 py-3 text-sm font-semibold text-white hover:bg-[#008F7A]">
                Vstoupit do kurzu zdarma <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl lg:w-1/2">
            <Image
              src="/BeMindful_Letna2026AnnaSolcova.17.jpg"
              alt="Mindfulness practice"
              width={600}
              height={500}
              className="w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Teacher section */}
      <section className="bg-[#F5F6F4] py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-widest text-[#7BC0A4]">Mindfulness is not a one-size-fits-it-all</p>
            <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-bold text-[#2D2C2B] lg:text-4xl">
              Daily-life approved and personal: Your approach to mindfulness by Senior Mindfulness Teacher Michal Dvořák
            </h2>
          </div>
          <div className="relative mx-auto mt-10 max-w-3xl overflow-hidden rounded-2xl">
            <Image
              src="/Pictures/_DSC7728.jpg"
              alt="Michal Dvořák – Senior Mindfulness Teacher"
              width={900}
              height={600}
              className="w-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90 shadow-lg">
                <Play className="ml-1 h-6 w-6 text-[#5E767E]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research callout */}
      <section className="bg-[#7BC0A4] py-14">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <p className="text-sm font-bold uppercase tracking-widest text-[#E3FFE2]/80">Výzkumy potvrzují</p>
          <p className="mt-3 text-xl font-bold text-[#E3FFE2]">
            14–20% snížení stresu při 5–10 minutách meditace denně během osmi týdnů.
          </p>
        </div>
      </section>

      {/* Course Content */}
      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <p className="text-center text-sm font-bold uppercase tracking-widest text-[#7BC0A4]">FREE 4-days Online kurz</p>
            <h2 className="mt-4 text-center text-3xl font-bold text-[#2D2C2B]">START to PAUSE</h2>
            <div className="mt-4 flex flex-wrap justify-center gap-8">
              <div className="flex items-center gap-2 text-sm text-[#4B4C4D]"><Clock className="h-4 w-4 text-[#7BC0A4]" /> 15 minut denně</div>
              <div className="flex items-center gap-2 text-sm text-[#4B4C4D]"><Video className="h-4 w-4 text-[#7BC0A4]" /> 4 video lekce</div>
              <div className="flex items-center gap-2 text-sm text-[#4B4C4D]"><Headphones className="h-4 w-4 text-[#7BC0A4]" /> 4 audio nahrávky</div>
              <div className="flex items-center gap-2 text-sm text-[#4B4C4D]"><Check className="h-4 w-4 text-[#7BC0A4]" /> Průvodní průběžné program</div>
            </div>
            <div className="mt-10 overflow-hidden rounded-2xl border border-[#C0D1C6] bg-[#F5F6F4]">
              {modules.map((m, i) => (
                <div key={i} className={`flex items-center gap-5 px-7 py-5 ${i < modules.length - 1 ? "border-b border-[#AAAAAA]/40" : ""}`}>
                  <span className="text-sm font-bold text-[#7BC0A4]">{m.day}</span>
                  <p className="text-sm font-bold text-[#2D2C2B]">{m.title}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <Button className="h-auto rounded-full bg-[#7BC0A4] px-10 py-3 text-sm font-semibold text-white hover:bg-[#008F7A]">
                Join START to PAUSE <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About teacher */}
      <section className="bg-[#F5F6F4] py-16 lg:py-24">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 px-6 lg:flex-row lg:gap-16 lg:px-8">
          <div className="overflow-hidden rounded-2xl lg:w-2/5">
            <Image
              src="/Pictures/_DSC7728.jpg"
              alt="Michal Dvořák"
              width={500}
              height={560}
              className="w-full object-cover"
            />
          </div>
          <div className="lg:w-3/5">
            <p className="text-sm font-bold uppercase tracking-widest text-[#7BC0A4]">Hi, I&apos;m Michal Dvořák, founder of be.mindful</p>
            <p className="mt-5 text-base leading-relaxed text-[#4B4C4D]">
              Jsem Michal Dvořák, senior mindfulness teacher. Mindfulness jsem vystudoval ve dvou světových centrech – UMASS Medical School a Brown University – a od roku 2018 ji učím na plný úvazek.
            </p>
            <p className="mt-4 text-base leading-relaxed text-[#4B4C4D]">
              Učím to, co sám žiju, a snažím se přistupovat k praxi i životu s nadhledem a nohama pevně na zemi.
            </p>
            <div className="mt-8 flex gap-12">
              {[{ num: "15+", label: "let praxe" }, { num: "2K+", label: "Absolventi" }, { num: "1", label: "Senior Mindfulness Teacher v ČR" }].map((s) => (
                <div key={s.num}>
                  <p className="text-3xl font-bold text-[#2D2C2B]">{s.num}</p>
                  <p className="mt-1 text-xs text-[#4B4C4D]">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <NewsletterSection />
      <Footer />
    </main>
  )
}
