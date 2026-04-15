import Image from "next/image"
import { ArrowRight, Check, TrendingUp, Video, BookOpen, Users, Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { NewsletterSection } from "@/components/newsletter-section"
import { Footer } from "@/components/footer"

const benefits = [
  'Posílíte „sval mindfulness": vytvořit prostor, kde můžete udržovat všímavost živou',
  "Vytvoříte si silný vnitřní kompas, který vám pomůže rozhodovat se pod tlakem a vědět, jak reagovat v náročných situacích",
  "Improve Thought Control & Break Cycles: escape repetitive patterns and break mental cycles, that are no longer serving.",
  "Improve Physical Health Benefits: reduce stress-related symptoms like insomnia and anxiety.",
  "Manage daily stress better for more calmness in work and life.",
  "Gain more compassion and kindness and strengthen your relationships.",
]

const includes = [
  {
    icon: Video,
    title: "Mindfulness FOUNDATIONS",
    desc: "Krátká 10minutová videa se základy mindfulness – jak vytvořit prostor v zahlcené mysli, jak nacházet klid v napětí.",
  },
  {
    icon: BookOpen,
    title: "be.mindful LIBRARY",
    desc: "12 měsíců neomezeného přístupu do knihovny plné tematických meditací, praktických tipů a rozhovorů.",
  },
  {
    icon: Users,
    title: "be.mindful COMMUNITY",
    desc: "Změna je týmová záležitost. V okamžicích, kdy ztrácíme nadhled, je důležité mít kolem sebe lidi, kteří už tou cestou prošli.",
  },
  {
    icon: Play,
    title: "Týdenní živé meditace + záznamy",
    desc: 'Bezpečný prostor pro návrat k sobě – když vás život rozhodí nebo když chcete udržet rovnováhu. Říkejte tomu své \u201Ewellbeing fitko pro mysl\u201C.',
  },
  {
    icon: Users,
    title: "Měsíční živá setkání + záznamy",
    desc: "Prostor pro vaše otázky a osobní podporu v konkrétních životních situacích. Skvělý způsob, jak vidět, že mindfulness funguje v reálném životě.",
  },
  {
    icon: BookOpen,
    title: "Audio recordings",
    desc: "Each with a different focus—covering themes like better sleep, improved focus, stress management, and working with emotions.",
  },
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
    name: "Jitka Selingerová",
    text: "Díky mindfulness se mi daří být v lepším kontaktu sama se sebou a tím i s klienty.",
  },
]

export default function MembershipPage() {
  return (
    <main className="min-h-screen font-sans">
      <Header />

      {/* Hero */}
      <section className="relative min-h-[500px] overflow-hidden bg-[#2D2C2B] lg:min-h-[600px]">
        <Image
          src="/Pictures/AdobeStock_1844492057.jpeg"
          alt="be.mindful Membership"
          fill
          className="object-cover opacity-50"
          priority
        />
        <div className="relative z-10 flex min-h-[500px] items-center lg:min-h-[600px]">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-xl">
              <p className="text-sm font-bold uppercase tracking-widest text-[#7BC0A4]">be.mindful</p>
              <h1 className="mt-3 text-4xl font-bold text-white lg:text-5xl">MEMBERSHIP</h1>
              <p className="mt-4 text-lg text-white/80">Váš každodenní prostor k zastavení – udržujte rovnováhu</p>
              <div className="mt-8">
                <Button className="h-auto rounded-full bg-[#7BC0A4] px-8 py-3 text-sm font-semibold text-white hover:bg-[#008F7A]">
                  Join the Course <ArrowRight className="ml-2 h-4 w-4" />
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
            <h2 className="text-3xl font-bold text-[#2D2C2B] lg:text-4xl">Zůstaňte propojeni – udržujte rovnováhu</h2>
            <p className="mt-5 text-base leading-relaxed text-[#4B4C4D]">
              Život se skládá z okamžiků – a právě schopnost zastavit se je nástroj, který nám umožňuje být přítomní s tím, co se děje v nás i kolem nás. Díky tomu můžeme naplno vnímat krásu kolem sebe a zvládat výzvy s větší lehkostí.
            </p>
            <div className="mt-8 space-y-4">
              {benefits.map((b, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#7BC0A4]">
                    <Check className="h-3 w-3 text-white" />
                  </div>
                  <p className="text-sm leading-relaxed text-[#4B4C4D]">{b}</p>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <Button className="h-auto rounded-full bg-[#7BC0A4] px-8 py-3 text-sm font-semibold text-white hover:bg-[#008F7A]">
                Join the Course <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-2xl lg:w-1/2">
            <Image
              src="/BeMindful_Letna2026AnnaSolcova.16.jpg"
              alt="Mindfulness session"
              width={600}
              height={500}
              className="w-full rounded-2xl object-cover"
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

      {/* Stats */}
      <section className="bg-[#7BC0A4] py-14">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-center text-sm font-bold uppercase tracking-widest text-[#E3FFE2]/80">Rovnováha se tvoří z okamžiků.</p>
          <p className="mx-auto mt-2 max-w-xl text-center text-base text-[#E3FFE2]">
            Najdete zde všechny nástroje a podporu, které vám pomohou udržet rovnováhu a vrátit se k mindfulness, když život rozptýlí vaši pozornost.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-16">
            {[
              { num: "200+", label: "Video lessons" },
              { num: "150 h", label: "Audio recordings" },
              { num: "60", label: "Guided Meditations" },
            ].map((s) => (
              <div key={s.num} className="text-center">
                <p className="text-5xl font-bold text-[#E3FFE2]">{s.num}</p>
                <p className="mt-2 text-sm font-medium text-[#E3FFE2]/80">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What you get */}
      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-center text-sm font-bold uppercase tracking-widest text-[#7BC0A4]">Mindfulness is not a one-size-fits-it-all</p>
          <h2 className="mt-4 text-center text-3xl font-bold text-[#2D2C2B] lg:text-4xl">be.mindfulness MEMBERSHIP</h2>
          <p className="mt-2 text-center text-lg text-[#4B4C4D]">This is what you will get</p>
          <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-3">
            {includes.map((item, i) => (
              <div key={i} className="rounded-2xl border border-[#C0D1C6] bg-[#F5F6F4] p-7">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#7BC0A4]/15">
                  <item.icon className="h-5 w-5 text-[#7BC0A4]" />
                </div>
                <h3 className="mt-4 text-base font-bold text-[#2D2C2B]">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#4B4C4D]">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button className="h-auto rounded-full bg-[#7BC0A4] px-10 py-3 text-sm font-semibold text-white hover:bg-[#008F7A]">
              Become a member <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-[#9DA59C] py-14">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white lg:text-4xl">Rovnováha se tvoří z okamžiků.</h2>
            <p className="mx-auto mt-4 max-w-xl text-base text-white/80">
              Najdete zde všechny nástroje a podporu, které vám pomohou udržet rovnováhu a vrátit se k mindfulness, když život rozptýlí vaši pozornost.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-[#F5F6F4] py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold text-[#2D2C2B]">Voices from participants</h2>
          <div className="mx-auto mt-10 grid max-w-5xl gap-6 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <div key={i} className="rounded-2xl bg-white p-7 shadow-sm">
                <p className="text-base font-bold text-[#2D2C2B]">&ldquo;{t.quote}&rdquo;</p>
                <p className="mt-4 text-sm leading-relaxed text-[#4B4C4D]">{t.text}</p>
                <p className="mt-5 text-sm font-semibold text-[#7BC0A4]">{t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About teacher */}
      <section className="bg-white py-16 lg:py-24">
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
