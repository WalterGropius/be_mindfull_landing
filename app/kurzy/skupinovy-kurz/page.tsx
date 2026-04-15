import Image from "next/image"
import { ArrowRight, Check, TrendingUp, Calendar, MapPin, Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { NewsletterSection } from "@/components/newsletter-section"
import { Footer } from "@/components/footer"

const benefits = [
  'Posílíte „sval mindfulness" a vytvoříte si prostor, kde můžete udržovat všímavost živou',
  "Vytvoříte si silný vnitřní kompas, který vám pomůže rozhodovat se pod tlakem a vědět, jak reagovat v náročných situacích",
  "Naučíte se důvěřovat sobě a zvládat životní výzvy s větší jistotou",
  "Vrátíte se ke zdravým návykům, i když se občas ztratíte z cesty",
  "Získáte podporu pro vaši konkrétní životní situaci",
  "Najdete svůj osobní přístup k mindfulness",
]

const upcomingDates = [
  { date: "02.03.", location: "Praha" },
  { date: "07.06.", location: "Praha" },
  { date: "04.09.", location: "Praha" },
  { date: "04.11.", location: "Praha" },
]

const courseModules = [
  { label: "MODULE 1", title: "Základy mindfulness & vědomé jedení" },
  { label: "MODULE 2", title: "Práce s myšlenkami a automatickými reakcemi" },
  { label: "MODULE 2.1", title: "Obecné domácí úkoly a praktiky" },
  { label: "MODULE 3", title: "Přerušení stresových vzorců a práce s tělem" },
  { label: "MODULE 4", title: "Přerušení stresových vzorců a práce s tělem" },
  { label: "MODULE 5", title: "Jak zvládat stres a těžké emoce" },
  { label: "MODULE 6", title: "Všímavá a náročná komunikace" },
  { label: "MODULE 7", title: "Mindfulness v každodenním životě, práce s energií a návyky" },
  { label: "MODULE 8", title: "Integrace" },
]

const testimonials = [
  {
    quote: "be.mindful brought me home to my body. I can hear my breath again.",
    name: "Běla Nedvědová",
    text: "Dřív jsem měla pocit, že se jen vezu – práce, povinnosti, stres, hlava plná myšlenek. Všechno jelo samo a já s tím. Teprve díky kurzu mindfulness jsem se naučila, jak můžu zpomalit, nadechnout se a začít znovu vědomě rozhodovat, jak chci reagovat.",
  },
  {
    quote: "be.mindful brought me home to my body. I can hear my breath again.",
    name: "Martina Junková",
    text: "Už se tolik neztotožňuji s tím, co se mi honí v hlavě. Víc vnímám dění v sobě i kolem sebe, bez hodnocení. To mi dává víc prostoru reagovat s klidem a nadhledem.",
  },
  {
    quote: "be.mindful brought me home to my body. I can hear my breath again.",
    name: "Michaela Brejchová",
    text: "Díky kurzu jsem si osvojila laskavější přístup ke svým myšlenkám a snížila tlak na to, jak by věci měly být.",
  },
]

export default function SkupinovyKurzPage() {
  return (
    <main className="min-h-screen font-sans">
      <Header />

      {/* Hero */}
      <section className="relative min-h-[500px] overflow-hidden bg-[#2D2C2B] lg:min-h-[600px]">
        <Image
          src="/BeMindful_Letna2026AnnaSolcova.8.jpg"
          alt="8týdenní kurz mindfulness"
          fill
          className="object-cover opacity-45"
          priority
        />
        <div className="relative z-10 flex min-h-[500px] items-center lg:min-h-[600px]">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-xl">
              <p className="text-sm font-bold uppercase tracking-widest text-[#7BC0A4]">Skupinový kurz</p>
              <h1 className="mt-3 text-4xl font-bold text-white lg:text-5xl">8týdenní kurz<br />mindfulness</h1>
              <p className="mt-4 text-lg text-white/80">Staňte se stabilními i v bouřlivých časech</p>
              <div className="mt-8">
                <Button className="h-auto rounded-full bg-[#7BC0A4] px-8 py-3 text-sm font-semibold text-white hover:bg-[#008F7A]">
                  Přihlásit se <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto flex max-w-7xl flex-col gap-12 px-6 lg:flex-row lg:items-start lg:gap-16 lg:px-8">
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold text-[#2D2C2B] lg:text-4xl">Hluboké propojení a vnitřní stabilita</h2>
            <p className="mt-5 text-base leading-relaxed text-[#4B4C4D]">
              Tento pokročilý kurz je určen pro ty, kteří chtějí jít do hloubky a udělat z mindfulness pevnou a přirozenou součást každodenního života.
            </p>
            <p className="mt-3 text-base leading-relaxed text-[#4B4C4D]">
              Naučíte se rozvíjet stálý vnitřní kompas, který vás povede i v období stresu, nejistoty a složitých situací s větší jasností a klidem.
            </p>
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
          </div>
          <div className="overflow-hidden rounded-2xl lg:w-1/2">
            <Image
              src="/BeMindful_Letna2026AnnaSolcova.16.jpg"
              alt="Group mindfulness session"
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

      {/* Upcoming dates */}
      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold text-[#2D2C2B]">Upcoming dates</h2>
          <p className="mt-2 text-center text-base text-[#4B4C4D]">8týdenní kurz mindfulness</p>
          <div className="mx-auto mt-10 max-w-xl space-y-3">
            {upcomingDates.map((d, i) => (
              <div key={i} className="flex items-center justify-between rounded-xl bg-[#7BC0A4] px-7 py-4">
                <div className="flex items-center gap-4">
                  <Calendar className="h-5 w-5 text-white/80" />
                  <span className="text-lg font-bold text-white">{d.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-white/80" />
                  <span className="text-base text-white">{d.location}</span>
                </div>
                <div className="flex h-7 w-7 items-center justify-center rounded-full border border-white/50 text-white">
                  <span className="text-base leading-none">+</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research callout */}
      <section className="bg-[#7BC0A4] py-14">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <p className="text-sm font-bold uppercase tracking-widest text-[#E3FFE2]/80">Výzkumy potvrzují</p>
          <p className="mt-3 text-base text-[#E3FFE2]">
            krátká každodenní praxe může mít překvapivě silný dopad!
          </p>
          <p className="mt-2 text-xl font-bold text-[#E3FFE2]">
            14–20% snížení stresu při 5–10 minutách meditace denně během osmi týdnů.
          </p>
        </div>
      </section>

      {/* Course modules */}
      <section className="bg-[#F5F6F4] py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:gap-16">
            <div className="lg:w-1/2">
              <p className="text-sm font-bold uppercase tracking-widest text-[#7BC0A4]">8týdenní kurz mindfulness</p>
              <h2 className="mt-4 text-3xl font-bold text-[#2D2C2B]">This is what awaits you</h2>
              <div className="mt-8 overflow-hidden rounded-2xl border border-[#C0D1C6] bg-white">
                {courseModules.map((m, i) => (
                  <div key={i} className={`flex items-center justify-between px-6 py-4 ${i < courseModules.length - 1 ? "border-b border-[#AAAAAA]/40" : ""}`}>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-[#7BC0A4]">{m.label}</p>
                      <p className="mt-0.5 text-sm font-bold text-[#2D2C2B]">{m.title}</p>
                    </div>
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[#C0D1C6] text-[#9DA59C]">
                      <span className="text-base leading-none">+</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 flex gap-4">
                <Button className="h-auto rounded-full bg-[#7BC0A4] px-8 py-3 text-sm font-semibold text-white hover:bg-[#008F7A]">
                  Přihlásit se do kurzu <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" className="h-auto rounded-full border-[#C0D1C6] px-8 py-3 text-sm font-semibold text-[#5E767E] hover:bg-[#F5F6F4]">
                  Stáhnout program
                </Button>
              </div>
            </div>
            <div className="overflow-hidden rounded-2xl lg:w-1/2">
              <Image
                src="/BeMindful_Letna2026AnnaSolcova.17.jpg"
                alt="Mindfulness community"
                width={600}
                height={700}
                className="w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Daily support CTA */}
      <section className="bg-[#C0D1C6] py-14">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <h2 className="text-2xl font-bold text-[#2D2C2B]">Každodenní praxe. Skutečná podpora. Trvalá změna.</h2>
          <p className="mt-4 text-base leading-relaxed text-[#2D2C2B]/70">
            Tento 8týdenní kurz je určen pro ty, kteří chtějí, aby mindfulness nebylo jen konceptem, ale součástí života.
          </p>
          <div className="mt-8">
            <Button className="h-auto rounded-full bg-[#2D2C2B] px-8 py-3 text-sm font-semibold text-white hover:bg-[#2D2C2B]/80">
              Přihlásit se do kurzu <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold text-[#2D2C2B]">Voices of our participants</h2>
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
            <p className="text-sm font-bold uppercase tracking-widest text-[#7BC0A4]">Hi, I&apos;m Michal Dvořák, founder of be.mindful</p>
            <p className="mt-5 text-base leading-relaxed text-[#4B4C4D]">
              Mindfulness changed my life. As a result, my motivation has become to share mindfulness to help people in their everyday life. That&apos;s why I dedicated my life to it.
            </p>
            <p className="mt-4 text-base leading-relaxed text-[#4B4C4D]">
              Today I am the Senior Mindfulness Teacher in Czech Republic, which is key to be able to help people learn the tools to use in their life for the benefit of people now like and in years to come.
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
