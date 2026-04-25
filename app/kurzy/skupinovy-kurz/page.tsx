import Image from "next/image"
import { ArrowRight, Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { StatsBar } from "@/components/stats-bar"
import { VideoTestimonialsCarousel } from "@/components/video-testimonials-carousel"
import { UpcomingDates } from "@/components/upcoming-dates"

const benefits = [
  { bold: "Vytváříte si silný vnitřní kompas,", rest: " který vám pomáhá rozhodovat se pod tlakem a vědět, jak reagovat v náročných situacích" },
  { bold: "Zlepšíte kontrolu myšlenek a přerušíte cykly:", rest: " uniknete opakujícím se vzorcům a mentálním smyčkám, které vám neslouží." },
  { bold: "Zlepšíte fyzické zdraví:", rest: " snížíte příznaky stresu, jako jsou nespavost a úzkost." },
  { bold: "Lépe zvládnete každodenní stres", rest: " pro více klidu v práci i v životě." },
  { bold: "Získáte více soucitu a laskavosti", rest: " a posílíte své vztahy." },
]

const afterCourse = [
  { bold: "Posílíte emoční odolnost:", rest: " zvládnete náročné emoce a životní výzvy s větší stabilitou." },
  { bold: "Zlepšíte kontrolu myšlenek a přerušíte cykly:", rest: " uniknete opakujícím se vzorcům a mentálním smyčkám, které vám neslouží." },
  { bold: "Zlepšíte fyzické zdraví:", rest: " snížíte příznaky stresu, jako jsou nespavost a úzkost." },
  { bold: "Lépe zvládnete každodenní stres", rest: " pro více klidu v práci i v životě." },
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
  { label: "MODULE 3", title: "Radost, spokojenost a mindfulness pro potěšení" },
  { label: "MODULE 4", title: "Přerušení stresových vzorců a práce s tělem" },
  { label: "MODULE 5", title: "Jak zvládat stres a těžké emoce" },
  { label: "MODULE 6", title: "Všímavá a náročná komunikace" },
  { label: "MODULE 7", title: "Mindfulness v každodenním životě, práce s energií a návyky" },
  { label: "MODULE 8", title: "Integrace" },
]

const tabs = ["Pondělí 10:00–12:30", "Praha 10", "16–18 min denní praxe", "WhatsApp podpora"]

const testimonials = [
  {
    quote: "be.mindful mi pomohl najít cestu zpět do těla. Opět vím, jak dýchat.",
    name: "Betty R.",
    text: "Bezpečný prostor pro návrat k sobě – když vás život rozhodí nebo když chcete udržet rovnováhu. Říkejte tomu své „wellbeing fitko pro mysl\".",
    image: "/Pictures/AdobeStock_1844492057.jpeg",
  },
  {
    quote: "be.mindful mi pomohl najít cestu zpět do těla. Opět vím, jak dýchat.",
    name: "Betty R.",
    text: "Bezpečný prostor pro návrat k sobě – když vás život rozhodí nebo když chcete udržet rovnováhu. Říkejte tomu své „wellbeing fitko pro mysl\".",
    image: "/Pictures/AdobeStock_1844492057.jpeg",
  },
  {
    quote: "be.mindful mi pomohl najít cestu zpět do těla. Opět vím, jak dýchat.",
    name: "Betty R.",
    text: "Bezpečný prostor pro návrat k sobě – když vás život rozhodí nebo když chcete udržet rovnováhu. Říkejte tomu své „wellbeing fitko pro mysl\".",
    image: "/Pictures/AdobeStock_313540527.jpeg",
  },
]

export default function SkupinovyKurzPage() {
  return (
    <main className="min-h-screen font-sans">
      <Header />

      {/* Hero */}
      <section className="relative min-h-[500px] overflow-hidden bg-[#1A1A1A] lg:min-h-[580px]">
        <Image
          src="/Theme_8-weeks-course.jpg"
          alt="8týdenní kurz mindfulness"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-10 flex min-h-[500px] items-center py-20 lg:min-h-[580px] lg:py-28">
          <div className="w-full px-6 lg:px-16">
            <div className="max-w-xl">
              <h1 className="text-4xl font-bold leading-tight text-white lg:text-5xl">
                8týdenní kurz<br />mindfulness
              </h1>
              <p className="mt-4 text-base text-white/80">
                Staňte se stabilními i v bouřlivých časech
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
            Hluboké propojení a vnitřní stabilita
          </h2>
          <p className="mt-6 text-base leading-relaxed text-[#4B4C4D]">
            Tento pokročilý kurz je určen pro ty, kteří chtějí jít do hloubky a udělat z mindfulness pevnou a přirozenou součást každodenního života. Naučíte se rozvíjet stálý vnitřní kompas, který vás povede i v období stresu, nejistoty a složitých situací s větší jasností a klidem. Získáte podporu šitou na míru přesně tomu, kde se právě nacházíte – a stanete se součástí silné a propojené skupiny, která kráčí vpřed společně.
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

      {/* Upcoming dates */}
      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <h2 className="text-center text-2xl font-bold text-[#2D2C2B]">Upcoming dates</h2>
          <p className="mt-1 text-center text-2xl font-bold text-[#2D2C2B]">8týdenní kurz mindfulness</p>
          <div className="mt-10">
            <UpcomingDates dates={upcomingDates} />
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-[#F5F6F4] py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold text-[#2D2C2B] lg:text-4xl">
            Posilíte si „sval mindfulness":<br />vytvořit prostor, kde můžete udržovat<br />všímavost živou
          </h2>
          <div className="mt-12 flex flex-col gap-12 lg:flex-row lg:items-start">
            <div className="flex flex-col gap-5 lg:w-1/2">
              {benefits.map((b, i) => (
                <div key={i} className="flex items-start gap-4">
                  <img src="/tic.png" alt="" className="h-10 w-10 shrink-0" />
                  <p className="text-sm leading-relaxed text-[#4B4C4D]">
                    <strong className="font-semibold text-[#2D2C2B]">{b.bold}</strong>
                    {b.rest}
                  </p>
                </div>
              ))}
            </div>
            <div className="overflow-hidden rounded-2xl lg:w-1/2">
              <Image
                src="/BeMindful_Letna2026AnnaSolcova.55.jpg"
                alt="Group mindfulness session"
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
      <section className="bg-[#C0D1C6] py-16 lg:py-24">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <div className="mx-auto mb-6 flex justify-center">
            <Image src="/Illustrations/wave1.svg" alt="" width={220} height={220} />
          </div>
          <h2 className="text-2xl font-bold text-[#2D2C2B] lg:text-3xl">
            Výzkumy potvrzují:
          </h2>
          <p className="mt-2 text-2xl text-[#2D2C2B] lg:text-3xl">
            krátká každodenní praxe může mít překvapivě silný dopad!
          </p>
          <p className="mt-6 text-xl font-bold text-[#2D2C2B] lg:text-2xl">
            14–20% snížení stresu<br />při 5–10 minutách meditace denně během osmi týdnů.
          </p>
        </div>
      </section>

      {/* After course feelings */}
      <section className="bg-[#8ECDB5] py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col gap-12 lg:flex-row lg:items-start">
            <div className="lg:w-2/5">
              <h2 className="text-3xl font-bold text-[#2D2C2B] lg:text-4xl">
                Jak se budete cítit po kurzu
              </h2>
              <p className="mt-4 text-base text-[#2D2C2B]/75">
                Pravděpodobně se budete cítit lépe a také změna se nastejvá jak vám vás říkám vám:
              </p>
              <ul className="mt-5 space-y-2">
                {["Zlepšení vztahů", "Více klidu a pohody", "Lepší zvládání stresu"].map((item) => (
                  <li key={item} className="text-sm text-[#2D2C2B]/90">• {item}</li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-5 lg:w-3/5">
              {afterCourse.map((b, i) => (
                <div key={i} className="flex items-center gap-4">
                  <img src="/tic.png" alt="" className="h-10 w-10 shrink-0" />
                  <p className="text-sm leading-relaxed text-[#2D2C2B]">
                    <strong className="font-semibold text-[#2D2C2B]">{b.bold}</strong>
                    {b.rest}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Modules */}
      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-center text-sm font-semibold text-[#7BC0A4]">
            Mindfulness není pro každého stejné
          </p>
          <h2 className="mt-2 text-center text-2xl font-bold text-[#2D2C2B]">8týdenní kurz mindfulness</h2>
          <p className="mt-1 text-center text-2xl font-bold text-[#2D2C2B]">To vás čeká</p>

          {/* Meta row (no underline / index line — these are not clickable tabs) */}
          <div className="mt-8 flex flex-wrap justify-center gap-x-10 gap-y-3">
            {tabs.map((tab, i) => (
              <span
                key={i}
                className="whitespace-nowrap text-sm font-medium text-[#4B4C4D]"
              >
                {tab}
              </span>
            ))}
          </div>

          {/* Accordion rows */}
          <div className="mt-8 flex flex-col gap-1">
            {courseModules.map((m, i) => (
              <div key={i} className="flex items-center gap-4 rounded-xl bg-[#F5F6F7] px-5 py-4">
                <span className="min-w-[80px] text-xs font-bold uppercase tracking-wider text-[#7BC0A4]">
                  {m.label}
                </span>
                <span className="text-sm font-bold text-[#2D2C2B]">{m.title}</span>
              </div>
            ))}
          </div>

          {/* Bonus app section */}
          <div className="mt-12 flex flex-col gap-8 lg:flex-row lg:items-center">
            <div className="lg:w-1/2">
              <h3 className="text-2xl font-bold text-[#2D2C2B]">
                Bonus: Získejte novou<br />aplikaci be.mindful ZDARMA
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-[#4B4C4D]">
                Mindfulness is not only an approach – it is deeply embedded into my life. XXXX brought me to my first mindfulness experience here xxx.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-[#4B4C4D]">
                From this situation xxx happened and I discovered, that xxx.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Button className="h-auto rounded-full bg-[#7BC0A4] px-8 py-3 text-sm font-semibold text-white hover:bg-[#6BB194]">
                  Vstoupit do kurzu
                </Button>
                <button className="text-sm font-medium text-[#7BC0A4] underline hover:text-[#6BB194]">
                  Sledovat webinář zdarma
                </button>
              </div>
            </div>
            <div className="flex justify-center lg:w-1/2">
              <div className="relative h-64 w-36 overflow-hidden rounded-3xl bg-[#1A2B3C] shadow-xl lg:h-72 lg:w-40">
                <div className="flex h-full items-center justify-center text-white/30 text-xs">
                  App mockup
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Daily practice CTA */}
      <section className="bg-[#8ECDB5] py-16 lg:py-24">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <h2 className="text-3xl font-bold text-[#2D2C2B] lg:text-4xl">
            Každodenní praxe. Skutečná podpora.<br />Trvalá změna.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-[#2D2C2B]/75">
            Tento 8týdenní kurz je určen pro ty, kteří chtějí, aby mindfulness nebylo jen konceptem, ale součástí života. Naučíte se rozvíjet stálý vnitřní kompas, který vás povede i v období stresu, nejistoty a složitých situací s větší jasností a klidem.
          </p>
        </div>
      </section>

      {/* Video testimonials */}
      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="mb-10 text-center text-3xl font-bold text-[#2D2C2B]">Hlasy našich účastníků</h2>
          <VideoTestimonialsCarousel testimonials={testimonials} />
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
      <StatsBar />

      <Footer />
    </main>
  )
}
