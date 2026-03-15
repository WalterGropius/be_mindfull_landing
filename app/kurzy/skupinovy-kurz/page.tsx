import { ArrowRight, Check, TrendingUp, Calendar, MapPin, Clock, Users } from "lucide-react"
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
  'Posílíte \u201Esval mindfulness\u201C a vytvoříte si prostor, kde můžete udržovat všímavost živou',
  "Vytvoříte si silný vnitřní kompas, který vám pomůže rozhodovat se pod tlakem a vědět, jak reagovat v náročných situacích",
  "Naučíte se důvěřovat sobě a zvládat životní výzvy s větší jistotou",
  "Vrátíte se ke zdravým návykům, i když se občas ztratíte z cesty",
  "Získáte podporu pro vaši konkrétní životní situaci",
  "Najdete svůj osobní přístup k mindfulness",
  "Vytvoříte si strukturu, která vás udrží motivované a propojené",
  "Zažijete podpůrné a nehodnotící prostředí, které umožňuje udržitelný růst",
]

const afterCourse = [
  "Budete více přítomní a naplno si užijete život",
  "Naučíte se zvládat náročné emoce i životní situace s větší stabilitou",
  "Zlepšíte kontrolu myšlenek a přerušíte mentální vzorce, které vám už neslouží",
  "Snížíte projevy stresu, jako je nespavost nebo úzkost, a zlepšíte svou celkovou pohodu",
]

const schedule = [
  "1. Základy mindfulness & vědomé jedení",
  "2. Práce s myšlenkami a automatickými reakcemi",
  "3. Radost, spokojenost a mindfulness pro potěšení",
  "4. Přerušení stresových vzorců a práce s tělem",
  "5. Jak zvládat stres a těžké emoce",
  "6. Všímavá a náročná komunikace",
  "7. Mindfulness v každodenním životě, práce s energií a návyky",
  "8. Integrace",
]

export default function SkupinovyKurzPage() {
  return (
    <main className="min-h-screen font-sans">
      <Header />

      {/* Hero */}
      <section className="bg-[#E3FFE2] py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-3xl font-bold text-[#5E767E] lg:text-4xl">8týdenní kurz mindfulness</h1>
            <p className="mt-4 text-lg text-[#9DA59C]">Staňte se stabilními i v bouřlivých časech</p>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-background py-16 lg:py-24">
        <div className="mx-auto flex max-w-7xl flex-col gap-12 px-6 lg:flex-row lg:items-start lg:gap-16 lg:px-8">
          <div className="lg:w-1/2">
            <h2 className="text-2xl font-bold text-[#5E767E] lg:text-3xl">Hluboké propojení a vnitřní stabilita</h2>
            <p className="mt-5 text-sm leading-relaxed text-[#9DA59C]">
              Tento pokročilý kurz je určen pro ty, kteří chtějí jít do hloubky a udělat z mindfulness pevnou a přirozenou součást každodenního života.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-[#9DA59C]">
              Naučíte se rozvíjet stálý vnitřní kompas, který vás povede i v období stresu, nejistoty a složitých situací s větší jasností a klidem.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-[#9DA59C]">
              Získáte podporu šitou na míru přesně tomu, kde se právě nacházíte – a stanete se součástí silné a propojené skupiny, která kráčí vpřed společně.
            </p>
            <div className="mt-6 space-y-3">
              {benefits.map((b, i) => (
                <div key={i} className="flex items-start gap-3">
                  <TrendingUp className="mt-0.5 h-4 w-4 shrink-0 text-[#5E767E]" />
                  <p className="text-sm text-[#9DA59C]">{b}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:w-1/2">
            <ImagePlaceholder className="aspect-square w-full" />
          </div>
        </div>
      </section>

      {/* After course */}
      <section className="bg-[#E3FFE2] py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold text-[#5E767E]">Jak se budete cítit po kurzu</h2>
            <p className="mt-4 text-base text-[#5E767E]">Prostě se budete cítit lépe</p>
          </div>
          <div className="mx-auto mt-10 max-w-lg space-y-3">
            {afterCourse.map((a, i) => (
              <div key={i} className="flex items-start gap-3">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#5E767E]" />
                <p className="text-sm text-[#9DA59C]">{a}</p>
              </div>
            ))}
          </div>
          <p className="mx-auto mt-6 max-w-lg text-sm font-medium text-[#5E767E]">A tato změna se netýká jen vás, ale i lidí kolem vás:</p>
          <div className="mx-auto mt-3 max-w-lg space-y-2">
            {["Zlepšení vztahů", "Větší laskavost a propojení", "Lepší zvládání stresu"].map((s, i) => (
              <div key={i} className="flex items-center gap-3">
                <Check className="h-4 w-4 shrink-0 text-[#5E767E]" />
                <p className="text-sm text-[#9DA59C]">{s}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule */}
      <section className="bg-background py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold text-[#5E767E]">Harmonogram kurzu</h2>
            <p className="mt-4 text-base text-[#9DA59C]">8týdenní program mindfulness – udělejte z mindfulness součást svého života</p>
          </div>
          <div className="mx-auto mt-8 flex max-w-2xl flex-wrap justify-center gap-6">
            <div className="flex items-center gap-2 text-sm text-[#5E767E]"><Calendar className="h-4 w-4" /> Pondělí 10:00–12:30</div>
            <div className="flex items-center gap-2 text-sm text-[#5E767E]"><MapPin className="h-4 w-4" /> Praha 10</div>
            <div className="flex items-center gap-2 text-sm text-[#5E767E]"><Clock className="h-4 w-4" /> 35–55 min denní praxe</div>
            <div className="flex items-center gap-2 text-sm text-[#5E767E]"><Users className="h-4 w-4" /> WhatsApp podpora</div>
          </div>
          <div className="mx-auto mt-10 max-w-2xl space-y-3">
            {schedule.map((s, i) => (
              <div key={i} className="rounded-lg border border-[#C0D1C6] bg-[#E3FFE2] px-5 py-4">
                <p className="text-sm text-[#5E767E]">{s}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Summary + CTA */}
      <section className="bg-[#5E767E] py-16 lg:py-24">
        <div className="mx-auto max-w-2xl px-6 text-center lg:px-8">
          <h2 className="text-2xl font-bold text-white">Každodenní praxe. Skutečná podpora. Trvalá změna.</h2>
          <p className="mt-5 text-sm leading-relaxed text-white/80">
            Tento 8týdenní kurz je určen pro ty, kteří chtějí, aby mindfulness nebylo jen konceptem, ale součástí života. S upřímnou podporou, strukturovanou praxí a skupinou, která vás podrží bez hodnocení.
          </p>
          <p className="mt-3 text-sm text-white/80">
            Nejde o dokonalost, ale o to, být přítomen – den po dni, s opravdovostí a odhodláním.
          </p>
          <div className="mt-8">
            <Button className="h-auto rounded-full bg-white px-8 py-3 text-sm text-[#5E767E] hover:bg-white/90">
              Přihlásit se do kurzu <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Trust */}
      <section className="bg-background py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-2xl font-bold text-[#5E767E]">Důvody, proč věřit</h2>
          <p className="mt-2 text-center text-base text-[#9DA59C]">15 let zkušeností s proměnou lidských životů</p>
          <div className="mx-auto mt-10 grid max-w-3xl gap-8 md:grid-cols-2">
            <div className="rounded-xl border border-[#C0D1C6] bg-[#E3FFE2] p-6 text-center">
              <p className="text-3xl font-bold text-[#5E767E]">15+</p>
              <p className="mt-2 text-sm text-[#9DA59C]">let praxe</p>
            </div>
            <div className="rounded-xl border border-[#C0D1C6] bg-[#E3FFE2] p-6 text-center">
              <p className="text-3xl font-bold text-[#5E767E]">2000+</p>
              <p className="mt-2 text-sm text-[#9DA59C]">studentů, kteří kurzem prošli</p>
            </div>
          </div>
          <p className="mx-auto mt-8 max-w-xl text-center text-sm text-[#9DA59C]">
            Výzkumy potvrzují, že i krátká každodenní praxe může mít překvapivě silný dopad: 14–20% snížení stresu při 5–10 minutách meditace denně během osmi týdnů.
          </p>
        </div>
      </section>

      <NewsletterSection />
      <Footer />
    </main>
  )
}
