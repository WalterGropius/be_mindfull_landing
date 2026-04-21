import Image from "next/image"
import { ArrowRight, Check, Plus, Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const benefits = [
  "Naučíte se, jak se zastavit i v okamžicích, kdy máte pocit, že to nejde",
  "Pochopíte, proč je pauza důležitá a proč je to první krok k tomu, jak přestat být ve stresu",
  "Objevíte různé způsoby, jak se zastavit: dechem, tělem, nebo během jídla",
  "Dozvíte se, co se děje v mozku, když se zastavíme – a jaké to má pozitivní dopady na soustředění, klid mysli i spánek",
  "Získáte základní vhled do fungování mysli a do toho, jak s ní můžeme vědomě pracovat",
]

const days = [
  { day: "DAY 1", title: "Síla mindfulness" },
  { day: "DAY 2", title: "Jak funguje mozek a jak mu mindfulness pomáhá" },
  { day: "DAY 3", title: "Jak využívat mindfulness během dne" },
  { day: "DAY 4", title: "Jak vytvořit základ pro trvalou změnu" },
]

const tabs = ["4denní", "Online", "5–10 min denní praxe", "WhatsApp podpora"]

export default function StartToPausePage() {
  return (
    <main className="min-h-screen font-sans">
      <Header />

      {/* Hero */}
      <section className="relative min-h-[500px] overflow-hidden bg-[#1A1A1A] lg:min-h-[580px]">
        <Image
          src="/Theme_4-days_FREE.jpg"
          alt="FREE 4denní online kurz Start-to-PAUSE"
          fill
          className="object-cover opacity-55"
          priority
        />
        <div className="relative z-10 flex min-h-[500px] items-center lg:min-h-[580px]">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-xl">
              <h1 className="text-4xl font-bold leading-tight text-white lg:text-5xl">
                FREE 4denní<br />online kurz<br />Start-to-PAUSE
              </h1>
              <p className="mt-4 text-sm text-white/75 max-w-xs">
                Začněte, jak do svého života přidat trochu prostoru – a krok za krokem přeměníte způsoby, jak začleníte toto každodenního života.
              </p>
              <div className="mt-8">
                <Button className="h-auto rounded-full bg-[#E2763A] px-8 py-3 text-sm font-semibold text-white hover:bg-[#D96B2E]">
                  Join the Course <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro — centered */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-2xl px-6 text-center lg:px-8">
          <h2 className="text-3xl font-bold text-[#2D2C2B] lg:text-4xl">
            Ukážu vám,<br />jak silná může být krátká pauza!
          </h2>
          <p className="mt-6 text-base leading-relaxed text-[#4B4C4D]">
            Schopnost se zastavit patří dnes k těm nejdůležitějším dovednostem. Právě v tom okamžiku se můžeme znovu propojit sami se sebou, obrátit pozornost dovnitř místo ven a tím najít větší jasnost, klid a prostor pro vědomou reakci místo automatické.
          </p>
        </div>
      </section>

      {/* Teacher video */}
      <section className="bg-[#F5F6F4] py-16 lg:py-24">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-semibold text-[#7BC0A4]">Mindfulness is not a one-size-fits-it-all</p>
            <h2 className="mx-auto mt-4 max-w-2xl text-2xl font-bold text-[#2D2C2B] lg:text-3xl">
              Daily-life approved and personal:<br />Your approach to mindfulness<br />by Senior Mindfulness Teacher Michal Dvořák
            </h2>
          </div>
          <div className="relative mt-10 overflow-hidden rounded-2xl">
            <Image
              src="/Pictures/_DSC7728.jpg"
              alt="Michal Dvořák – Senior Mindfulness Teacher"
              width={900}
              height={560}
              className="w-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#7BC0A4]/80 shadow-lg backdrop-blur-sm">
                <Play className="ml-1 h-6 w-6 fill-white text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold text-[#2D2C2B] lg:text-4xl">
            Jak se budete cítit po kurzu
          </h2>
          <div className="mt-12 flex flex-col gap-12 lg:flex-row lg:items-start">
            <div className="flex flex-col gap-5 lg:w-1/2">
              {benefits.map((b, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#7BC0A4]/15">
                    <Check className="h-3.5 w-3.5 text-[#7BC0A4]" strokeWidth={3} />
                  </div>
                  <p className="text-sm leading-relaxed text-[#4B4C4D]">{b}</p>
                </div>
              ))}
            </div>
            <div className="overflow-hidden rounded-2xl lg:w-1/2">
              <Image
                src="/Pictures/FREE 4-days course/AdobeStock_542235713_Preview.jpeg"
                alt="Mindfulness practice"
                width={600}
                height={500}
                className="w-full object-cover"
              />
            </div>
          </div>
          <div className="mt-12 text-center">
            <Button className="h-auto rounded-full bg-[#7BC0A4] px-10 py-3 text-sm font-semibold text-white hover:bg-[#6BB194]">
              Contact us for a personal offer
            </Button>
          </div>
        </div>
      </section>

      {/* Research stats — glass SVG */}
      <section className="bg-[#8ECDB5] py-16 lg:py-24">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <div className="mx-auto mb-6 flex justify-center">
            <Image src="/Illustrations/glass1.svg" alt="" width={80} height={80} />
          </div>
          <h2 className="text-2xl font-bold text-[#2D2C2B] lg:text-3xl">
            Výzkumy potvrzují:<br />krátká každodenní praxe může mít překvapivě silný dopad!
          </h2>
          <p className="mt-6 text-xl font-bold text-[#2D2C2B] lg:text-2xl">
            14–20% snížení stresu<br />při 5–10 minutách meditace denně během osmi týdnů.
          </p>
        </div>
      </section>

      {/* Device mockup */}
      <section className="bg-white py-12 lg:py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <Image
            src="/Pictures/be.mindful FOUNDATIONS/Device Set_v01_Mockup.png"
            alt="be.mindful on all devices"
            width={900}
            height={560}
            className="w-full object-contain"
          />
        </div>
      </section>

      {/* Course days */}
      <section className="bg-white pb-16 pt-4 lg:pb-24 lg:pt-8">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <p className="text-center text-sm font-semibold text-[#7BC0A4]">
            Mindfulness is not a one-size-fits-it-all
          </p>
          <h2 className="mt-2 text-center text-2xl font-bold text-[#2D2C2B]">FREE 4-days Online kurz</h2>
          <p className="mt-1 text-center text-2xl font-bold text-[#2D2C2B]">START to PAUSE</p>

          {/* Tabs */}
          <div className="mt-8 flex overflow-x-auto border-b border-[#E5E5E5]">
            {tabs.map((tab, i) => (
              <button
                key={i}
                className={`whitespace-nowrap px-5 pb-3 text-sm font-medium transition-colors ${
                  i === 0
                    ? "border-b-2 border-[#7BC0A4] text-[#7BC0A4]"
                    : "text-[#9DA59C] hover:text-[#4B4C4D]"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Day rows */}
          <div className="divide-y divide-[#E5E5E5]">
            {days.map((d, i) => (
              <div key={i} className="flex items-center justify-between py-5">
                <div className="flex items-center gap-5">
                  <span className="min-w-[48px] text-xs font-bold uppercase tracking-wider text-[#7BC0A4]">
                    {d.day}
                  </span>
                  <span className="text-sm font-medium text-[#2D2C2B]">{d.title}</span>
                </div>
                <button className="ml-4 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[#C0D1C6] text-[#9DA59C] hover:border-[#7BC0A4] hover:text-[#7BC0A4]">
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Button className="h-auto rounded-full bg-[#7BC0A4] px-10 py-3 text-sm font-semibold text-white hover:bg-[#6BB194]">
              Join START to PAUSE
            </Button>
          </div>
        </div>
      </section>

      {/* Teacher bio */}
      <section className="bg-[#BFD8CC] py-16 lg:py-24">
        <div className="mx-auto flex max-w-7xl flex-col gap-12 px-6 lg:flex-row lg:items-center lg:gap-16 lg:px-8">
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold text-[#2D2C2B] lg:text-4xl">
              Hi, I&apos;m Michal Dvořák,<br />founder of be.mindful
            </h2>
            <p className="mt-5 text-base leading-relaxed text-[#2D2C2B]/80">
              Mindfulness is not only an approach – it is deeply embedded into my life. XXXX brought me to my first mindfulness experience here xxx.
            </p>
            <p className="mt-4 text-base leading-relaxed text-[#2D2C2B]/80">
              From this situation xxx happened and I discovered, that xxx.
            </p>
            <p className="mt-4 text-base leading-relaxed text-[#2D2C2B]/80">
              Today I am the only Senior Mindfulness Teacher in Czech Republic, and my specific and joyful way to makes mindfulness accessible for xxx amount of people over the last xxx years.
            </p>
          </div>
          <div className="overflow-hidden rounded-2xl lg:w-1/2">
            <Image
              src="/Pictures/_DSC7728.jpg"
              alt="Michal Dvořák"
              width={600}
              height={500}
              className="w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-[#7BC0A4] py-14">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-3 divide-x divide-white/30 text-center">
            {[
              { num: "15+", label: "Let praxe" },
              { num: "2K+", label: "Absolventi" },
              { num: "1", label: "Senior Mindfulness Teacher v CR" },
            ].map((s) => (
              <div key={s.num} className="px-6">
                <p className="text-4xl font-bold text-white lg:text-5xl">{s.num}</p>
                <p className="mt-2 text-sm text-white/80">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
