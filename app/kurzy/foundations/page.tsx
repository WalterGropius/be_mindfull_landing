import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { TrailerEmbed } from "@/components/trailer-embed"

import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { StatsBar } from "@/components/stats-bar"
import { SmileyIcon } from "@/components/list-icons"
import { CourseModules } from "@/components/course-modules"
import { ScrollAnimatedIllustration } from "@/components/scroll-animated-illustration"

const benefits = [
  {
    bold: "Mindfulness i pro pondělní ráno:",
    rest: " naučíš se jednoduché techniky a to, jak je přirozeně zapojit do běžného dne, aby ti pomáhaly být klidnější, soustředěnější a víc v pohodě.",
  },
  {
    bold: "Větší soustředění i pod tlakem:",
    rest: " přestaneš se tolik ztrácet v myšlenkách a rychleji vrátíš pozornost k tomu, co je právě důležité.",
  },
  {
    bold: "Emoce a stres, které tě nepohltí:",
    rest: " naučíš se pracovat se stresem i emocemi tak, aby tě méně ovládaly a vyčerpávaly.",
  },
  {
    bold: "Víc radosti z běžných chvil:",
    rest: " začneš si víc všímat momentů, které ti dnes často utíkají mezi povinnostmi, a získáš víc lehkosti v běžném životě.",
  },
  {
    bold: "Lepší spánek a méně napětí:",
    rest: " naučíš se pracovat se stresem tak, aby se ti nehromadil v těle a neovlivňoval tolik tvůj spánek, energii ani psychickou pohodu.",
  },
]

const howItWorks = [
  "30 krátkých videolekcí po 10 minutách",
  "20 audionahrávek vedených mindfulness cvičení",
  "Techniky, které můžeš hned použít.",
  "Pravidelné online skupinové setkání s Michalem: meditace + prostor pro tvé otázky",
  "Osobní konzultace, když si nevíš rady",
  "Stačí 10 minut denně",
  "Členství na 12 měsíců.",
  "Po dokončení FOUNDATIONS volně pokračuješ v navazujícím be.mindful MEMBERSHIP. Získáš tak přístup k dalším 200+ videolekcim a 150+ audionahrávkám",
]

const courseModules = [
  {
    label: "MODULE 1",
    title: "Mindfulness od základů: co to je a jak snadno začít",
    content:
      "Zjistíš, co všímavost skutečně obnáší, bez ezo nálepek a planých slibů. Osvojíš si základní cvičení mindfulness pro zklidnění mysli i to, jak je zapojit, aniž bys měnil/a celý den. Položíš stabilní základy mindfulness, o které se opřeš v dalších lekcích i mimo ně.",
  },
  {
    label: "MODULE 2",
    title: "Myšlenky přicházejí, nauč se je nepouštět k sobě",
    content:
      "Ztišíš hlavu od myšlenek, co se vrací pořád dokola, a získáš nástroje, jak si poradit i s těmi náročnými. Zlepšíš své soustředění a získáš tipy, jak nechat být obavy, plány i výčitky. Naučíš se překonávat typické nástrahy mindfulness meditací, jako jsou pochyby, netrpělivost a ospalost.",
  },
  {
    label: "MODULE 3",
    title: "Stres a náročné emoce: jak se jimi nenechat pohltit a zachovat si nadhled",
    content:
      "Stres a obtížné emoce přestanou mít navrch. Získáš víc odolnosti a nadhledu v náročných chvílích, osvojíš si nový přístup ke stresu a praktické techniky pro práci s nepříjemnými emocemi i s tělesným diskomfortem.",
  },
  {
    label: "MODULE 4",
    title: "Mindfulness v každodenním životě",
    content:
      "Přeneseš všímavost z meditace do běžného dne. Vytvoříš si ostrůvky klidu i ve dnech plných povinností, objevíš mindfulness při jídle pro zdravější vztah k jídlu. Vyzkoušíš si všímavost při chůzi a pohybu. Zjistíš, že klid není něco, na co si musíš najít čas, ale způsob, jak čas prožíváš.",
  },
]

const tabs = ["Každodenní", "Online", "10 min. praxe denně", "Pravidelná podpora"]

const testimonials = [
  {
    quote: "Jsem laskavější a méně se kritizuji.",
    name: "Karolína Dvorská",
    text: "Kurz mi pomohl být k sobě laskavější, méně se kritizovat a častěji se během dne zastavit.",
  },
  {
    quote: "Méně se stresuji a lépe se soustředím.",
    name: "Martina Junková",
    text: "Kurz mi přinesl více klidu do každodenního života. Vnímám své okolí jinak, s menším stresem a lépe se soustředím. Moje mysl už není přeplněná myšlenkami, obavami a starostmi, které nikam nevedou. Rozhodně budu ve všímavosti pokračovat dál.",
  },
  {
    quote: "Díky všímavosti lze lépe zvládat náročné situace.",
    name: "Mira Šťovíček",
    text: "Kurz je výborně sestavený, s dobře propojenými tématy. Kurz bych doporučil každému, kdo se cítí ztracený v událostech a životních výzvách. Díky všímavosti lze tyto situace lépe zvládat a opuštěním špatných návyků zlepšit nejen současný, ale i budoucí život.",
  },
  {
    quote: "Kurz byl pro mě skutečným obohacením.",
    name: "Helena Timrová",
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
              Vylaď způsob, jakým zvládáš stres a zahlcení. Získej pevný základ pro klidnější dny.
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
            Méně zmatku v hlavě. Víc prostoru pro všechno ostatní
          </h2>
          <p className="mt-6 text-[18px] leading-[30px] text-[#4B4C4D]">
            Dny plné výkonu, hlava plná myšlenek. Kdo by to neznal. be.mindful FOUNDATIONS tě naučí, jak z toho vystoupit a získat větší odolnost i klid.
          </p>
        </div>
      </section>

      {/* Teacher video */}
      <section className="bg-[#F5F6F7] py-16 lg:py-24">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-[#7BC0A4]">Mindfulness, které funguje i v pondělí ráno</p>
            <h2 className="mx-auto mt-4 max-w-2xl text-[28px] font-bold leading-[38px] text-[#2D2C2B]">
              Stres nezmizí, ale nemusí řídit tvůj život<br /><span className="text-[18px] font-medium leading-[30px]">Michal Dvořák, Senior Mindfulness Teacher</span>
            </h2>
          </div>
          <TrailerEmbed
            videoSrc="/trailers/foundations.mp4"
            poster="/trailers/cover-foundations.jpg"
            alt="Michal Dvořák – Senior Mindfulness Teacher"
            className="mt-10"
          />
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-[28px] font-bold leading-[38px] text-[#2D2C2B]">
            Věci kolem tebe se nezmění.<br />Ale tvoje reakce mohou
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
            Podloženo vědou, ne dojmy
          </h2>
          <p className="mt-6 text-[24px] font-bold leading-[34px] text-[#2D2C2B]">
            Už 10 minut meditace denně po dobu 8 týdnů<br />prokazatelně snižuje stres o 20 %.
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
                Pro každého, kdo chce výsledky, ne další dobrou radu
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
          <h2 className="text-center text-[28px] font-bold leading-[38px] text-[#2D2C2B]">Co říkají lidé po absolvování kurzu?</h2>
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
            Mindfulness pro život, který je někdy až moc intenzivní
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
              Jsem Michal Dvořák,<br />zakladatel be.mindful a lektor
            </h2>
            <p className="mt-5 text-[18px] leading-[30px] text-[#2D2C2B]/80">
              Mindfulness mě zachránilo před vyhořením a pomáhá mi zvládat stres i každodenní tlak. Studoval jsem ho přímo tam, kde vzniklo, na UMASS Medical School a na Brown University v USA.
            </p>
            <p className="mt-4 text-[18px] leading-[30px] text-[#2D2C2B]/80">
              Kurzy vedu od roku 2018. Jako jediný v Česku mám nejvyšší kvalifikaci Senior Mindfulness Teacher. Absolvoval jsem pětiletý psychoterapeutický výcvik SUR.
            </p>
            <p className="mt-4 text-[18px] leading-[30px] text-[#2D2C2B]/80">
              Jsem manžel, táta i člověk s nabitým diářem. Mindfulness mi pomáhá zklidnit hlavu a získat větší nadhled. A přesně to učím i ostatní. Prakticky, lidsky, tak aby to fungovalo i uprostřed každodenního shonu.
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
