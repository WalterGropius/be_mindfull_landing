import Image from "next/image"
import { ArrowRight, Check, TrendingUp, Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { NewsletterSection } from "@/components/newsletter-section"
import { Footer } from "@/components/footer"

const personalBenefits = [
  "Od reakce k vědomé odpovědi – když vás někdo naštve, dokážete se zastavit, dřív než řeknete něco, čeho byste pak litovali",
  "Od emočního zahlcení k emoční odolnosti",
  "Od fyzického vyčerpání, nespavosti a úzkosti k tělesné pohodě",
  "Od přemýšlení k vnitřnímu klidu",
  "Zlepšení vztahů – větší laskavost a propojení",
  "Lepší zvládání stresu",
]

const howItWorks = [
  "Jednoduché a krátké kroky, které mají okamžitý dopad",
  "Jen 10 minut denně",
  "Nástroje, které lze ihned použít v každodenním životě",
  "Osobní vedení",
  "A prvek hravosti – protože když se učíme s lehkostí, učíme se rychleji",
]

const courseModules = [
  { label: "MODULE 1", title: "Základy mindfulness & vědomá pauza" },
  { label: "MODULE 2", title: "Práce s myšlenkami a automatickými reakcemi" },
  { label: "MODULE 3", title: "Radost, spokojenost a mindfulness pro potěšení" },
  { label: "MODULE 4", title: "Přerušení stresových vzorců a práce s tělem" },
  { label: "MODULE 5", title: "Jak zvládat stres a těžké emoce" },
  { label: "MODULE 6", title: "Všímavá a náročná komunikace" },
  { label: "MODULE 7", title: "Mindfulness v každodenním životě, práce s energií a návyky" },
  { label: "MODULE 8", title: "Integrace" },
]

const testimonials = [
  {
    quote: "Pomohl mi začít přepínat z autopilota zpět na vědomé řízení.",
    name: "Běla Nedvědová",
    text: "Dřív jsem měla pocit, že se jen vezu – práce, povinnosti, stres, hlava plná myšlenek. Všechno jelo samo a já s tím. Teprve díky kurzu mindfulness jsem se naučila, jak můžu zpomalit, nadechnout se a začít znovu vědomě rozhodovat, jak chci reagovat.",
  },
  {
    quote: "Pomohl mi začít přepínat z autopilota zpět na vědomé řízení.",
    name: "Martina Junková",
    text: "Už se tolik neztotožňuji s tím, co se mi honí v hlavě. Víc vnímám dění v sobě i kolem sebe, bez hodnocení. To mi dává víc prostoru reagovat s klidem a nadhledem.",
  },
  {
    quote: "Pomohl mi začít přepínat z autopilota zpět na vědomé řízení.",
    name: "Michaela Brejchová",
    text: "Díky kurzu jsem si osvojila laskavější přístup ke svým myšlenkám a snížila tlak na to, jak by věci měly být.",
  },
]

export default function FoundationsPage() {
  return (
    <main className="min-h-screen font-sans">
      <Header />

      {/* Hero */}
      <section className="relative min-h-[500px] overflow-hidden bg-[#2D2C2B] lg:min-h-[600px]">
        <Image
          src="/Theme_Foundations.jpg"
          alt="be.mindful Foundations"
          fill
          className="object-cover opacity-45"
          priority
        />
        <div className="relative z-10 flex min-h-[500px] items-center lg:min-h-[600px]">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-xl">
              <p className="text-sm font-bold uppercase tracking-widest text-[#7BC0A4]">be.mindful</p>
              <h1 className="mt-3 text-4xl font-bold text-white lg:text-5xl">FOUNDATIONS</h1>
              <p className="mt-4 text-lg text-white/80">Vše, co potřebujete k přechodu od stresu k odolnosti</p>
              <div className="mt-8">
                <Button className="h-auto rounded-full bg-[#7BC0A4] px-8 py-3 text-sm font-semibold text-white hover:bg-[#008F7A]">
                  Vstupte do mindfulness <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto flex max-w-7xl flex-col gap-12 px-6 lg:flex-row lg:items-center lg:gap-16 lg:px-8">
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold text-[#2D2C2B] lg:text-4xl">Toto je základ vašeho duševního zdraví a pohody</h2>
            <p className="mt-5 text-base leading-relaxed text-[#4B4C4D]">
              Schopnost se zastavit patří dnes k těm nejdůležitějším dovednostem. Právě v tom okamžiku se můžeme znovu propojit sami se sebou, obrátit pozornost dovnitř místo ven a tím najít větší jasnost, klid a prostor pro vědomou reakci místo automatické.
            </p>
            <h3 className="mt-8 text-lg font-bold text-[#2D2C2B]">Nezmění se situace, ale způsob, jak na ni budete reagovat</h3>
            <div className="mt-4 space-y-4">
              {personalBenefits.map((b, i) => (
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
                Začít kurz <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl lg:w-1/2">
            <Image
              src="/BeMindful_Letna2026AnnaSolcova.17.jpg"
              alt="Mindfulness practice"
              width={600}
              height={600}
              className="w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Teacher section */}
      <section className="bg-[#F5F6F4] py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-widest text-[#7BC0A4]">Ověřený a osobní přístup</p>
            <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-bold text-[#2D2C2B] lg:text-4xl">
              Váš přístup k mindfulness se Senior Mindfulness Teacherem Michalem Dvořákem
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

      {/* How it works */}
      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-widest text-[#7BC0A4]">Výzkumy potvrzují</p>
            <h2 className="mt-4 text-3xl font-bold text-[#2D2C2B] lg:text-4xl">Ověřená cesta od pauzy k lehkosti</h2>
            <p className="mt-4 text-base text-[#4B4C4D]">
              krátká každodenní praxe může mít překvapivě silný dopad!<br />
              14–20% snížení stresu při 5–10 minutách meditace denně během osmi týdnů.
            </p>
          </div>
          <div className="mx-auto mt-12 flex max-w-2xl flex-col gap-4">
            {howItWorks.map((h, i) => (
              <div key={i} className="flex items-start gap-4 rounded-xl border border-[#C0D1C6] bg-[#F5F6F4] px-6 py-4">
                <TrendingUp className="mt-0.5 h-4 w-4 shrink-0 text-[#7BC0A4]" />
                <p className="text-sm text-[#4B4C4D]">{h}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Course modules */}
      <section className="bg-[#F5F6F4] py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <p className="text-center text-sm font-bold uppercase tracking-widest text-[#7BC0A4]">be.mindful FOUNDATIONS</p>
            <h2 className="mt-4 text-center text-3xl font-bold text-[#2D2C2B] lg:text-4xl">Co vás čeká</h2>
            <div className="mt-10 overflow-hidden rounded-2xl border border-[#C0D1C6] bg-white">
              {courseModules.map((m, i) => (
                <div key={i} className={`flex items-center justify-between px-7 py-5 ${i < courseModules.length - 1 ? "border-b border-[#AAAAAA]/40" : ""}`}>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-[#7BC0A4]">{m.label}</p>
                    <p className="mt-1 text-base font-bold text-[#2D2C2B]">{m.title}</p>
                  </div>
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#C0D1C6] text-[#9DA59C]">
                    <span className="text-lg leading-none">+</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <Button className="h-auto rounded-full bg-[#7BC0A4] px-10 py-3 text-sm font-semibold text-white hover:bg-[#008F7A]">
                Objednat kurz <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold text-[#2D2C2B]">Zkušenosti účastníků</h2>
          <div className="mx-auto mt-10 grid max-w-5xl gap-6 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <div key={i} className="rounded-2xl bg-[#F5F6F4] p-7">
                <p className="text-base font-bold text-[#2D2C2B]">&ldquo;{t.quote}&rdquo;</p>
                <p className="mt-4 text-sm leading-relaxed text-[#4B4C4D]">{t.text}</p>
                <p className="mt-5 text-sm font-semibold text-[#7BC0A4]">{t.name}</p>
              </div>
            ))}
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
            <p className="text-sm font-bold uppercase tracking-widest text-[#7BC0A4]">Jsem Michal Dvořák, zakladatel be.mindful</p>
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
