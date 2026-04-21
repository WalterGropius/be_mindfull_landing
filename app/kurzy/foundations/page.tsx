import Image from "next/image"
import { ArrowRight, Check, Plus, Play } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const benefits = [
  { bold: "Posílíte emoční odolnost:", rest: " zvládnete náročné emoce a životní výzvy s větší stabilitou." },
  { bold: "Zlepšíte kontrolu myšlenek a přerušíte cykly:", rest: " uniknete opakujícím se vzorcům a mentálním smyčkám, které vám neslouží." },
  { bold: "Zlepšíte fyzické zdraví:", rest: " snížíte příznaky stresu, jako jsou nespavost a úzkost." },
  { bold: "Lépe zvládnete každodenní stres", rest: " pro více klidu v práci i v životě." },
  { bold: "Získáte více soucitu a laskavosti", rest: " a posílíte své vztahy." },
]

const howItWorks = [
  "jednoduché a krátké kroky, které mají okamžitý dopad",
  "Jen 10 minut denně",
  "Nástroje, které lze ihned použít v každodenním životě",
  "Osobní vedení",
  "A prvek hravosti – protože když se učíme s lehkostí, učíme se rychleji",
]

const courseModules = [
  { label: "MODULE 1", title: "Základy mindfulness & vědomé jedení" },
  { label: "MODULE 2", title: "Práce s myšlenkami a automatickými reakcemi" },
  { label: "MODULE 3", title: "Radost, spokojenost a mindfulness pro potěšení" },
  { label: "MODULE 4", title: "Přerušení stresových vzorců a práce s tělem" },
  { label: "MODULE 5", title: "Jak zvládat stres a těžké emoce" },
  { label: "MODULE 6", title: "Všímavá a náročná komunikace" },
  { label: "MODULE 7", title: "Mindfulness v každodenním životě, práce s energií a návyky" },
  { label: "MODULE 8", title: "Integrace" },
]

const tabs = ["Každodenní", "Online", "10 min denní praxe", "WhatsApp podpora"]

const testimonials = [
  {
    quote: "Pomohl mi začít přepínat z autopilota zpět na vědomé řízení.",
    name: "Běla Nedvědová",
    text: "Dřív jsem měla pocit, že se jen vezu – práce, povinnosti, stres, hlava plná myšlenek. Všechno jelo samo a já s tím. Teprve díky kurzu mindfulness jsem se naučila, jak můžu zpomalit, nadechnout se a začít znovu vědomě rozhodovat, jak chci reagovat.",
  },
  {
    quote: "Pomohl mi začít přepínat z autopilota zpět na vědomé řízení.",
    name: "Běla Nedvědová",
    text: "Dřív jsem měla pocit, že se jen vezu – práce, povinnosti, stres, hlava plná myšlenek. Všechno jelo samo a já s tím. Teprve díky kurzu mindfulness jsem se naučila, jak můžu zpomalit, nadechnout se a začít znovu vědomě rozhodovat, jak chci reagovat.",
  },
  {
    quote: "Pomohl mi začít přepínat z autopilota zpět na vědomé řízení.",
    name: "Běla Nedvědová",
    text: "Dřív jsem měla pocit, že se jen vezu – práce, povinnosti, stres, hlava plná myšlenek. Všechno jelo samo a já s tím. Teprve díky kurzu mindfulness jsem se naučila, jak můžu zpomalit, nadechnout se a začít znovu vědomě rozhodovat, jak chci reagovat.",
  },
]

export default function FoundationsPage() {
  return (
    <main className="min-h-screen font-sans">
      <Header />

      {/* Hero */}
      <section className="relative min-h-[500px] overflow-hidden bg-[#1A1A1A] lg:min-h-[580px]">
        <Image
          src="/Theme_Foundations.jpg"
          alt="be.mindful Foundations"
          fill
          className="object-cover opacity-50"
          priority
        />
        <div className="relative z-10 flex min-h-[500px] items-center lg:min-h-[580px]">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-xl">
              <h1 className="text-4xl font-bold leading-tight text-white lg:text-5xl">
                be.mindful<br />FOUNDATIONS
              </h1>
              <p className="mt-4 text-base text-white/80">
                Vše, co potřebujete k přechodu od stresu k odolnosti
              </p>
              <div className="mt-8">
                <Button className="h-auto rounded-full bg-[#E2763A] px-8 py-3 text-sm font-semibold text-white hover:bg-[#D96B2E]">
                  Vstoupit do kurzu <ArrowRight className="ml-2 h-4 w-4" />
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
            Toto je základ vašeho duševního<br />zdraví a pohody
          </h2>
          <p className="mt-6 text-base leading-relaxed text-[#4B4C4D]">
            Schopnost se zastavit patří dnes k těm nejdůležitějším dovednostem. Právě v tom okamžiku se můžeme znovu propojit sami se sebou, obrátit pozornost dovnitř místo ven a tím najít větší jasnost, klid a prostor pro vědomou reakci místo automatické.
          </p>
        </div>
      </section>

      {/* Teacher video */}
      <section className="bg-[#F5F6F7] py-16 lg:py-24">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-semibold text-[#7BC0A4]">Mindfulness není pro každého stejné</p>
            <h2 className="mx-auto mt-4 max-w-2xl text-2xl font-bold text-[#2D2C2B] lg:text-3xl">
              Ověřeno pro každodenní život a osobní přístup:<br />Vaše cesta k mindfulness<br />se Senior Mindfulness Teacherem Michalem Dvořákem
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
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#C0D1C6] shadow-lg backdrop-blur-sm">
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
            Nezmění se situace, ale způsob, jak na<br />ni budete reagovat
          </h2>
          <div className="mt-12 flex flex-col gap-12 lg:flex-row lg:items-start">
            <div className="flex flex-col gap-5 lg:w-1/2">
              {benefits.map((b, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#E3FFE2]">
                    <Check className="h-3.5 w-3.5 text-[#7BC0A4]" strokeWidth={3} />
                  </div>
                  <p className="text-sm leading-relaxed text-[#4B4C4D]">
                    <strong className="font-semibold text-[#2D2C2B]">{b.bold}</strong>
                    {b.rest}
                  </p>
                </div>
              ))}
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
          <div className="mt-12 text-center">
            <Button
              variant="outline"
              className="h-auto rounded-full border-[#7BC0A4] px-10 py-3 text-sm font-semibold text-[#7BC0A4] hover:bg-[#7BC0A4] hover:text-white"
            >
              Vstoupit do kurzu
            </Button>
          </div>
        </div>
      </section>

      {/* Research stats */}
      <section className="bg-[#8ECDB5] py-16 lg:py-24">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <div className="mx-auto mb-6 flex justify-center">
            <Image src="/Illustrations/pause1.svg" alt="" width={80} height={80} />
          </div>
          <h2 className="text-2xl font-bold text-[#2D2C2B] lg:text-3xl">
            Výzkumy potvrzují:<br />krátká každodenní praxe může mít překvapivě silný dopad!
          </h2>
          <p className="mt-6 text-xl font-bold text-[#2D2C2B] lg:text-2xl">
            14–20% snížení stresu<br />při 5–10 minutách meditace denně během osmi týdnů.
          </p>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-[#5B8A78] py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col gap-12 lg:flex-row lg:items-start">
            <div className="lg:w-2/5">
              <h2 className="text-3xl font-bold text-white lg:text-4xl">
                Ověřená cesta od pauzy k lehkosti
              </h2>
              <p className="mt-4 text-base text-white/75">
                Můj důkaz, proč tento přístup funguje – pro každého, kdo je otevřený začít.
              </p>
            </div>
            <div className="flex flex-col gap-5 lg:w-3/5">
              {howItWorks.map((h, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/20">
                    <Check className="h-3 w-3 text-white" strokeWidth={3} />
                  </div>
                  <p className="text-sm leading-relaxed text-white/90">{h}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold text-[#2D2C2B]">Hlasy účastníků</h2>
          <div className="mx-auto mt-10 grid max-w-5xl gap-6 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <div key={i} className="rounded-2xl bg-white p-7 shadow-md">
                <p className="text-base font-bold text-[#2D2C2B]">&ldquo;{t.quote}&rdquo;</p>
                <p className="mt-4 text-sm leading-relaxed text-[#4B4C4D]">{t.text}</p>
                <p className="mt-5 text-sm font-semibold text-[#2D2C2B]">{t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modules */}
      <section className="bg-white pb-16 pt-4 lg:pb-24 lg:pt-8">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <p className="text-center text-sm font-semibold text-[#7BC0A4]">
            Mindfulness není pro každého stejné
          </p>
          <h2 className="mt-2 text-center text-3xl font-bold text-[#2D2C2B]">be.mindful FOUNDATIONS</h2>

          {/* Tabs */}
          <div className="mt-8 flex overflow-x-auto border-b border-[#E5E5E5]">
            {tabs.map((tab, i) => (
              <button
                key={i}
                className={`whitespace-nowrap px-4 pb-3 text-sm font-medium transition-colors ${
                  i === 0
                    ? "border-b-2 border-[#7BC0A4] text-[#7BC0A4]"
                    : "text-[#9DA59C] hover:text-[#4B4C4D]"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Accordion rows */}
          <div className="divide-y divide-[#E5E5E5]">
            {courseModules.map((m, i) => (
              <div key={i} className="flex items-center justify-between py-4">
                <div className="flex items-center gap-3">
                  <span className="min-w-[72px] text-xs font-bold uppercase tracking-wider text-[#7BC0A4]">
                    {m.label}
                  </span>
                  <span className="text-sm font-medium text-[#2D2C2B]">{m.title}</span>
                </div>
                <button className="ml-4 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[#C0D1C6] text-[#9DA59C] hover:border-[#7BC0A4] hover:text-[#7BC0A4]">
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Button className="h-auto rounded-full bg-[#7BC0A4] px-10 py-3 text-sm font-semibold text-white hover:bg-[#6BB194]">
              Vstoupit do kurzu
            </Button>
          </div>
        </div>
      </section>

      {/* Teacher bio */}
      <section className="bg-[#C0D1C6] py-16 lg:py-24">
        <div className="mx-auto flex max-w-7xl flex-col gap-12 px-6 lg:flex-row lg:items-center lg:gap-16 lg:px-8">
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold text-[#2D2C2B] lg:text-4xl">
              Ahoj, jsem Michal Dvořák,<br />zakladatel be.mindful
            </h2>
            <p className="mt-5 text-base leading-relaxed text-[#2D2C2B]/80">
              Mindfulness není jen přístup – je hluboce zakořeněn v mém životě. XXXX mě přivedl k první zkušenosti s mindfulness xxx.
            </p>
            <p className="mt-4 text-base leading-relaxed text-[#2D2C2B]/80">
              Z této situace xxx se stalo a zjistil jsem, že xxx.
            </p>
            <p className="mt-4 text-base leading-relaxed text-[#2D2C2B]/80">
              Dnes jsem jediným Senior Mindfulness Teacherem v České republice a můj specifický a radostný přístup zpřístupňuje mindfulness xxx lidem za posledních xxx let.
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
      <section className="bg-[#2D5A4A] py-14">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-3 divide-x divide-white/20 text-center">
            {[
              { num: "15+", label: "Let praxe" },
              { num: "2K+", label: "Absolventi" },
              { num: "1", label: "Senior Mindfulness Teacher v CR" },
            ].map((s) => (
              <div key={s.num} className="px-6">
                <p className="text-4xl font-bold text-white lg:text-5xl">{s.num}</p>
                <p className="mt-2 text-sm text-white/70">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
