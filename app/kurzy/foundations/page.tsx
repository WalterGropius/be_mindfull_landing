import Link from "next/link"
import { ArrowRight, Check, TrendingUp } from "lucide-react"
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

const personalBenefits = [
  "Od reakce k vědomé odpovědi",
  "Od emočního zahlcení k emoční odolnosti",
  "Od fyzického vyčerpání, nespavosti a úzkosti k tělesné pohodě",
  "Od přemýšlení k vnitřnímu klidu",
]

const socialBenefits = [
  "Zlepšení vztahů",
  "Větší laskavost a propojení",
  "Lepší zvládání stresu",
]

const howItWorks = [
  "Jednoduché a krátké kroky, které mají okamžitý dopad",
  "Jen 10 minut denně",
  "Nástroje, které lze ihned použít v každodenním životě",
  "Osobní vedení",
  "A prvek hravosti – protože když se učíme s lehkostí, učíme se rychleji",
]

const courseContents = [
  "Denní 10minutová videa",
  "6 měsíců členství v be.mindful",
  "Měsíční živé skupinové setkání se mnou osobně",
  "Knihovnu be.mindful s tematickými meditacemi, tipy a rozhovory",
  "be.mindful komunitu – neocenitelné",
]

export default function FoundationsPage() {
  return (
    <main className="min-h-screen font-sans">
      <Header />

      {/* Hero */}
      <section className="bg-[#E3FFE2] py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-3xl font-bold text-[#5E767E] lg:text-4xl">be.mindful FOUNDATIONS</h1>
            <p className="mt-4 text-lg text-[#9DA59C]">Vše, co potřebujete k přechodu od stresu k odolnosti</p>
          </div>
        </div>
      </section>

      {/* Foundation */}
      <section className="bg-background py-16 lg:py-24">
        <div className="mx-auto flex max-w-7xl flex-col gap-12 px-6 lg:flex-row lg:items-center lg:gap-16 lg:px-8">
          <div className="lg:w-1/2">
            <h2 className="text-2xl font-bold text-[#5E767E] lg:text-3xl">Toto je základ vašeho duševního zdraví a pohody</h2>
            <p className="mt-5 text-sm leading-relaxed text-[#9DA59C]">
              Schopnost se zastavit patří dnes k těm nejdůležitějším dovednostem. Právě v tom okamžiku se můžeme znovu propojit sami se sebou, obrátit pozornost dovnitř místo ven a tím najít větší jasnost, klid a prostor pro vědomou reakci místo automatické.
            </p>
            <h3 className="mt-8 text-lg font-bold text-[#5E767E]">Nezmění se situace, ale způsob, jak na ni budete reagovat</h3>
            <div className="mt-4 space-y-3">
              {personalBenefits.map((b, i) => (
                <div key={i} className="flex items-start gap-3">
                  <TrendingUp className="mt-0.5 h-4 w-4 shrink-0 text-[#5E767E]" />
                  <p className="text-sm text-[#9DA59C]">{b}</p>
                </div>
              ))}
            </div>
            <h3 className="mt-8 text-base font-medium text-[#5E767E]">A nejde jen o vás – změna se dotkne i lidí kolem vás:</h3>
            <div className="mt-3 space-y-2">
              {socialBenefits.map((b, i) => (
                <div key={i} className="flex items-center gap-3">
                  <Check className="h-4 w-4 shrink-0 text-[#5E767E]" />
                  <p className="text-sm text-[#9DA59C]">{b}</p>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <Button className="h-auto rounded-full bg-[#7BC0A4] px-6 py-3 text-sm text-white hover:bg-[#008F7A]">
                Vstupte do mindfulness už teď <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
          <div className="lg:w-1/2">
            <ImagePlaceholder className="aspect-square w-full" />
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-[#E3FFE2] py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold text-[#5E767E] lg:text-3xl">Jak kurz funguje</h2>
            <p className="mt-4 text-base text-[#9DA59C]">Ověřená cesta od pauzy k lehkosti</p>
            <p className="mt-2 text-sm text-[#9DA59C]">Můj důkaz, proč tento přístup funguje – pro každého, kdo je otevřený začít.</p>
          </div>
          <div className="mx-auto mt-10 max-w-lg space-y-4">
            {howItWorks.map((h, i) => (
              <div key={i} className="flex items-start gap-3">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#5E767E]" />
                <p className="text-sm text-[#9DA59C]">{h}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="bg-background py-16 lg:py-24">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <h2 className="text-2xl font-bold text-[#5E767E]">Zkušenosti účastníků</h2>
          <div className="mt-10 rounded-2xl border border-[#C0D1C6] bg-[#E3FFE2] p-8">
            <p className="text-lg font-medium italic text-[#5E767E]">
              &ldquo;Pomohl mi začít přepínat z autopilota zpět na vědomé řízení.&rdquo;
            </p>
            <p className="mt-4 text-sm text-[#9DA59C]">
              Dřív jsem měla pocit, že se jen vezu – práce, povinnosti, stres, hlava plná myšlenek. Všechno jelo samo a já s tím. Teprve díky kurzu mindfulness jsem se naučila, jak můžu zpomalit, nadechnout se a začít znovu vědomě rozhodovat, jak chci reagovat.
            </p>
            <p className="mt-4 text-sm font-medium text-[#5E767E]">Běla Nedvědová</p>
          </div>
        </div>
      </section>

      {/* Course Content */}
      <section className="bg-[#E3FFE2] py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold text-[#5E767E] lg:text-3xl">Obsah kurzu be.mindful FOUNDATIONS</h2>
            <p className="mt-4 text-base text-[#9DA59C]">4týdenní online kurz, který vám pomůže stát se stabilním a odolným i v náročných chvílích</p>
          </div>
          <div className="mx-auto mt-10 max-w-lg space-y-3">
            {courseContents.map((c, i) => (
              <div key={i} className="flex items-start gap-3 rounded-lg border border-[#C0D1C6] bg-background px-5 py-4">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#5E767E]" />
                <p className="text-sm text-[#9DA59C]">{c}</p>
              </div>
            ))}
          </div>
          <div className="mx-auto mt-10 max-w-sm rounded-2xl bg-[#7BC0A4] p-8 text-center">
            <p className="text-sm text-white/70">Cena dnes</p>
            <p className="mt-2 text-3xl font-bold text-white">2 000 Kč</p>
            <Button className="mt-6 h-auto w-full rounded-full bg-white px-6 py-3 text-sm text-[#5E767E] hover:bg-white/90">
              Objednat kurz <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      <NewsletterSection />
      <Footer />
    </main>
  )
}
