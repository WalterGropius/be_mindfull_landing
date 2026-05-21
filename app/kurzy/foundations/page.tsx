import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Play } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { StatsBar } from "@/components/stats-bar"
import { SmileyIcon } from "@/components/list-icons"
import { CourseModules } from "@/components/course-modules"
import { ScrollAnimatedIllustration } from "@/components/scroll-animated-illustration"

const benefits = [
  {
    bold: "Mindfulness, které přežije pondělní ráno:",
    rest: " naučíš se, jak mindfulness přirozeně zapojit do běžného dne, aby ti pomáhalo být klidnější, soustředěnější a víc v pohodě.",
  },
  {
    bold: "Soustředění, které funguje i ve chvílích, kdy ti to nejde:",
    rest: " začneš se méně ztrácet v myšlenkách a rychleji vracet pozornost k tomu, co je právě důležité.",
  },
  {
    bold: "Emoce cítit, ale nedat se jimi ovládat:",
    rest: " budeš pracovat s emocemi i stresem tak, aby tě méně ovládaly a nezahlcovaly.",
  },
  {
    bold: "Víc radosti z běžných chvil:",
    rest: " začneš si víc všímat drobných okamžiků, které běžně přehlížíme, a nacházet v nich větší pohodu, radost i energii.",
  },
  {
    bold: "Méně napětí v těle, lepší spánek, víc energie:",
    rest: " naučíš se pracovat se stresem tak, aby se nehromadil v těle a neovlivňoval tolik tvůj spánek, energii ani psychickou pohodu.",
  },
]

const howItWorks = [
  "30 videolekcí – každá 10 minut",
  "20 audionahrávek vedených meditací",
  "Techniky, které ihned využiješ",
  "Pravidelné setkání online s Michalem: vedená meditace a Q&A – ptej se na cokoliv",
  "Osobní konzultace, když si nevíš rady",
  "10 minut denně stačí",
  "Membership na 12 měsíců – až dokončíš be.mindful FOUNDATIONS, pokračuješ v be.mindful MEMBERSHIP",
]

const courseModules = [
  {
    label: "MODULE 1",
    title: "Začínáme: co je mindfulness, co není, a proč ti to může změnit každý den.",
    content:
      "Objevíš kouzlo všímavosti a pochopíš, jak ji přirozeně začlenit do svého života. Osvojíš si techniky mindfulness meditace pro zklidnění mysli a položíš stabilní základy, o které se můžeš opřít v dalším rozvoji své praxe.",
  },
  {
    label: "MODULE 2",
    title: "Myšlenky přicházejí. Teď se naučíš, jak je nepouštět k sobě.",
    content:
      "Naučíš se zklidnit hlavu od neustále se opakujících myšlenek a pracovat s těmi náročnými. Získáš konkrétní tipy, jak nechávat být obavy, plány nebo výčitky, zlepšíš svou schopnost soustředit se a naučíš se překonávat ospalost, netrpělivost nebo pochyby, které se při meditaci objevují.",
  },
  {
    label: "MODULE 3",
    title: "Stres a těžké emoce – jak s nimi pracovat, ne se jich zbavit.",
    content:
      "Budeš lépe zvládat stres a obtížné emoce. Získáš větší odolnost a nadhled v náročných situacích, osvojíš si nový přístup ke stresu a naučíš se techniky pro práci s negativními emocemi i s fyzickým diskomfortem.",
  },
  {
    label: "MODULE 4",
    title: "Mindfulness v každodenním životě.",
    content:
      "Přeneseš mindfulness do běžného dne. Získáš tipy, jak si vytvářet ostrůvky klidu i ve dnech plných povinností, naučíš se být všímavější při jídle a využívat mindful eating pro zdravější vztah ke stravování. Vyzkoušíš si všímavost při chůzi a pohybu a objevíš, jak mindfulness využít pro větší uvolnění a klid v každodenním životě.",
  },
]

const tabs = ["Každodenní", "Online", "10 min denní praxe", "Pravidelná podpora"]

const testimonials = [
  {
    quote: "Jsem laskavější a méně se kritizuji.",
    name: "Karolína Dvorská",
    text: "Kurz mi pomohl být k sobě laskavější, méně se kritizovat a častěji se během dne zastavit.",
  },
  {
    quote: "Méně se stresuju a lépe se soustředím.",
    name: "Martina Junková",
    text: "Kurz mi přinesl více klidu do každodenního života. Vnímám své okolí jinak, s menším stresem, a lépe se soustředím. Moje mysl už není přeplněná myšlenkami, obavami a starostmi, které nikam nevedou. Rozhodně budu ve všímavosti pokračovat dál.",
  },
  {
    quote: "Díky všímavosti lze lépe zvládat náročné situace.",
    name: "Mira Šťovíček",
    text: "Kurz je výborně sestavený s dobře propojenými tématy. Kurz bych doporučil každému, kdo se cítí ztracený v událostech a životních výzvách. Díky všímavosti lze tyto situace lépe zvládat a opuštěním špatných návyků zlepšit nejen současný, ale i budoucí život.",
  },
  {
    quote: "Kurz byl pro mě skutečným obohacením.",
    name: "Helena Timrov",
    text: "Oceňuji perfektně připravený kurz, přátelskou atmosféru a jasně vysvětlené základy mindfulness. Pro mě je účast na kurzu skutečným životním obohacením. Doporučuji ho všem, kteří chtějí zlepšit kvalitu svého života a najít životní rovnováhu.",
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
          className="object-cover"
          priority
        />
        <div className="relative z-10 mx-auto flex min-h-[500px] max-w-7xl items-center px-6 py-20 lg:min-h-[580px] lg:px-8 lg:py-28">
          <div className="max-w-xl">
            <h1 className="text-[28px] font-bold leading-[38px] text-white sm:text-5xl lg:text-[64px] lg:leading-[1.1]">
              be.mindful<br />FOUNDATIONS
            </h1>
            <p className="mt-4 text-[18px] leading-[30px] text-white/80">
              Základ, který ti vydrží. Od stresu a zahlcení ke klidu a větší lehkosti.
            </p>
            <div className="mt-8">
              <Button asChild variant="primary-orange" className="group">
                <Link href="/objednavka/foundations">
                  <span className="flex items-center gap-2">Chci začít <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" /></span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Intro — centered */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-2xl px-6 text-center lg:px-8">
          <h2 className="text-[28px] font-bold leading-[38px] text-[#2D2C2B]">
            Pevný základ pro klidnější<br />a odolnější život.
          </h2>
          <p className="mt-6 text-[18px] leading-[30px] text-[#4B4C4D]">
            Stres, zahlcení, myšlenky v kruhu – to zná každý. Kurz tě naučí pracovat s tím, co máš uvnitř, tak aby tě to méně ovládalo.
          </p>
        </div>
      </section>

      {/* Teacher video */}
      <section className="bg-[#F5F6F7] py-16 lg:py-24">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-[#7BC0A4]">Mindfulness, které zapadne do tvého života</p>
            <h2 className="mx-auto mt-4 max-w-2xl text-[28px] font-bold leading-[38px] text-[#2D2C2B]">
              Ověřený přístup, který funguje v reálném životě.<br /><span className="text-[18px] font-medium leading-[30px]">Michal Dvořák, Senior Mindfulness Teacher.</span>
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
          <h2 className="text-center text-[28px] font-bold leading-[38px] text-[#2D2C2B]">
            Situace se nezmění.<br />Ale tvoje reakce ano.
          </h2>
          <div className="mt-12 flex flex-col gap-12 lg:flex-row lg:items-center">
            <div className="flex flex-col gap-5 lg:w-1/2">
              {benefits.map((b, i) => (
                <div key={i} className="flex items-start gap-4">
                  <img src="/tic.png" alt="" className="h-10 w-10 shrink-0" />
                  <p className="text-[18px] leading-[30px] text-[#4B4C4D]">
                    <strong className="font-semibold text-[#2D2C2B]">{b.bold}</strong>
                    {b.rest}
                  </p>
                </div>
              ))}
            </div>
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl lg:aspect-auto lg:h-[560px] lg:w-1/2">
              <Image
                src="/Pictures/be.mindful FOUNDATIONS/Portrety_BeMindful2026AnnaSolcova.22.jpg"
                alt="Mindfulness practice"
                fill
                className="object-cover object-top"
              />
            </div>
          </div>
          <div className="mt-12 text-center">
            <Button asChild variant="primary">
              <Link href="/objednavka/foundations">Jdu do toho</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Research stats */}
      <section className="bg-[#C0D1C6] pb-20">
        <div className="mx-auto max-w-3xl text-center">
          <div className="flex justify-center">
            <ScrollAnimatedIllustration
              outline={{ src: "/Illustrations/wave_00.svg" }}
              viewBox="0 0 170.08 170.08"
              dots={[
                {
                  from: { cx: 99.28, cy: 121.57, r: 8.04 },
                  to: { cx: 93.08, cy: 65.33, r: 8.04 },
                },
              ]}
              width={320}
              height={320}
            />
          </div>
          <h2 className="text-[28px] font-bold leading-[38px] text-[#2D2C2B]">
            Výzkum ukazuje:
          </h2>
          <p className="mt-6 text-[24px] font-bold leading-[34px] text-[#2D2C2B]">
            10 minut meditace denně po dobu 8 týdnů<br />snižuje stres o 20 %.
          </p>
          <p className="mt-4 text-[14px] leading-[22px] text-[#2D2C2B]/70 italic">
            Radin et al. (2025). JAMA Network Open.
          </p>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-[#8ECDB5] py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col gap-12 lg:flex-row lg:items-start">
            <div className="lg:w-2/5">
              <h2 className="text-[28px] font-bold leading-[38px] text-[#2D2C2B]">
                Ověřená cesta od stresu k nadhledu.
              </h2>
              <p className="mt-4 text-[18px] font-semibold leading-[30px] text-[#2D2C2B]/80">
                Pro každého, kdo chce udělat první krok.
              </p>
            </div>
            <div className="flex flex-col gap-5 lg:w-3/5">
              {howItWorks.map((h, i) => (
                <div key={i} className="flex items-center gap-4">
                  <SmileyIcon className="h-10 w-10 shrink-0" />
                  <p className="text-[18px] leading-[30px] text-[#2D2C2B]">{h}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-[28px] font-bold leading-[38px] text-[#2D2C2B]">Ohlasy absolventů</h2>
          <div className="mx-auto mt-10 grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-4">
            {testimonials.map((t, i) => (
              <div key={i} className="rounded-2xl bg-[#F5F6F7] p-7">
                <p className="text-[18px] font-bold leading-[30px] text-[#2D2C2B]">&ldquo;{t.quote}&rdquo;</p>
                <p className="mt-4 text-[18px] leading-[30px] text-[#4B4C4D]">{t.text}</p>
                <p className="mt-5 text-sm font-semibold text-[#2D2C2B]">{t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Device mockup */}
      <section className="bg-white">
        <Image
          src="/Mockup photos/Průhledné/univerz.png"
          alt="be.mindful na všech zařízeních"
          width={1600}
          height={900}
          className="block w-full object-contain"
        />
      </section>

      {/* Modules */}
      <section className="bg-white pb-16 pt-4 lg:pb-24 lg:pt-8">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <p className="text-center text-sm font-semibold uppercase tracking-wider text-[#7BC0A4]">
            Mindfulness, které zapadne do tvého života
          </p>
          <h2 className="mt-2 text-center text-[28px] font-bold leading-[38px] text-[#2D2C2B]">be.mindful FOUNDATIONS</h2>

          {/* Meta row (informational, not clickable tabs) */}
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
          <div className="mt-8">
            <CourseModules modules={courseModules} />
          </div>

          <div className="mt-8 text-center">
            <Button asChild variant="primary">
              <Link href="/objednavka/foundations">Chci začít</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Teacher bio */}
      <section className="bg-[#C0D1C6] py-16 lg:py-24">
        <div className="mx-auto flex max-w-7xl flex-col gap-12 px-6 lg:flex-row lg:items-center lg:gap-16 lg:px-8">
          <div className="lg:w-1/2">
            <h2 className="text-[28px] font-bold leading-[38px] text-[#2D2C2B]">
              Ahoj, jsem Michal Dvořák,<br />zakladatel be.mindful
            </h2>
            <p className="mt-5 text-[18px] leading-[30px] text-[#2D2C2B]/80">
              Mindfulness mě zachránilo od vyhoření a změnilo způsob, jak žiju. Dnes jako jediný Senior Mindfulness Teacher v ČR pomáhám ostatním udělat totéž – prakticky a lidsky. Mindfulness jsem vystudoval na UMASS Medical School a Brown University a učím jej od roku 2018. Absolvoval jsem také pětiletý psychoterapeutický výcvik v systému SUR.
            </p>
            <p className="mt-4 text-[18px] leading-[30px] text-[#2D2C2B]/80">
              Učím to, co sám žiju. Jsem také manžel a otec. Mindfulness mi přináší klid a větší nadhled a pomáhá mi zvládat stres i zklidnit hlavu.
            </p>
          </div>
          <div className="relative aspect-[6/5] w-full overflow-hidden rounded-2xl lg:w-1/2">
            <Image
              src="/Pictures/Portrety_BeMindful2026AnnaSolcova.44.jpg"
              alt="Michal Dvořák"
              fill
              className="object-cover"
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
