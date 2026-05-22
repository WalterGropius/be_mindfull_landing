import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Check, Plus } from "lucide-react"
import { TrailerEmbed } from "@/components/trailer-embed"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ScrollAnimatedIllustration } from "@/components/scroll-animated-illustration"
import { StatsBar } from "@/components/stats-bar"

const benefits: Array<{ bold?: string; rest: string }> = [
  { rest: "Zastavíš se i tehdy, kdy máš pocit, že na to není čas." },
  { bold: "Pochopíš, proč pauza funguje", rest: " – a proč je prvním krokem ven ze stresu." },
  { bold: "Vyzkoušíš si 3 různé způsoby zastavení", rest: " – dechem, tělem a jídlem." },
  { bold: "Zjistíš, co se děje v mozku", rest: " – a proč ti na změnu stačí 10 minut denně." },
  { bold: "Uděláš první konkrétní krok ke změně", rest: " – bez přemáhání." },
]

const days = [
  {
    day: "DAY 1",
    title: "Proč je tak těžké se zastavit",
    desc: "Pochopíš, proč je tak těžké zpomalit – a co s tím. Vyzkoušíš si první jednoduché cvičení, které zvládneš hned.",
  },
  {
    day: "DAY 2",
    title: "Myšlenky přicházejí, nemusíš je následovat.",
    desc: "Naučíš se pracovat s myšlenkami bez boje a vyzkoušíš si cvičení, které ti pomůže rychle uvolnit napětí. A zjistíš, jak využívat mindfulness během dne.",
  },
  {
    day: "DAY 3",
    title: "Mindfulness při jídle?",
    desc: "Zjistíš, jak moc z dne prožíváš na autopilota – a jak to změnit. Naučíš se využívat mindfulness při jídle.",
  },
  {
    day: "DAY 4",
    title: "Klid a soustředění jsou dovednosti, ne talent.",
    desc: "Ukážeme si, jak odolnost, nebo klid dál pěstovat.",
  },
]

const tabs = ["4denní", "Online", "5–10 min denní praxe", "Videolekce a audionahrávky cvičení"]

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
          className="object-cover"
          priority
        />
        <div className="relative z-10 mx-auto flex min-h-[500px] max-w-7xl items-center px-6 py-20 lg:min-h-[580px] lg:px-8 lg:py-28">
          <div className="max-w-xl">
            <h1 className="text-[28px] font-bold leading-[38px] text-white sm:text-5xl lg:text-[64px] lg:leading-[1.1]">
              Nauč se zastavit.<br />Restart hlavy za 4 dny.<br />Zdarma.
            </h1>
            <p className="mt-4 max-w-md text-[18px] leading-[30px] text-white/75">
              Dokážeš se zastavit i uprostřed rušného dne a rychleji zklidníš mysl i tělo.
            </p>
            <div className="mt-8">
              <Button asChild variant="primary-orange" className="group">
                <Link href="/objednavka">
                  <span className="flex items-center gap-2">Chci začít zdarma <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" /></span>
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
            I krátká pauza má sílu,<br />když víš, jak na to.
          </h2>
          <p className="mt-6 text-[18px] leading-[30px] text-[#4B4C4D]">
            Mozek pod tlakem funguje hůř. Pauza ho resetuje. A naučit se zastavit správně – to je dovednost, ne luxus.
          </p>
        </div>
      </section>

      {/* Teacher video */}
      <section className="bg-[#F5F6F7] py-16 lg:py-24">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-[#7BC0A4]">Nauč se zastavit</p>
            <h2 className="mx-auto mt-4 max-w-2xl text-[28px] font-bold leading-[38px] text-[#2D2C2B]">
              Restart hlavy za 4 dny.
            </h2>
          </div>
          <TrailerEmbed
            videoSrc="/trailers/4denni-kurz.mp4"
            poster="/trailers/cover-4denni-kurz.jpg"
            alt="Michal Dvořák – Senior Mindfulness Teacher"
            className="mt-10"
          />
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-[28px] font-bold leading-[38px] text-[#2D2C2B]">
            Co si odneseš za 4 dny
          </h2>
          <div className="mt-12 flex flex-col gap-12 lg:flex-row lg:items-center">
            <div className="flex flex-col gap-5 lg:w-1/2">
              {benefits.map((b, i) => (
                <div key={i} className="flex items-start gap-4">
                  <img src="/tic.png" alt="" className="h-10 w-10 shrink-0" />
                  <p className="text-[18px] leading-[30px] text-[#4B4C4D]">
                    {b.bold ? <strong>{b.bold}</strong> : null}
                    {b.rest}
                  </p>
                </div>
              ))}
            </div>
            <div className="relative aspect-[6/5] w-full overflow-hidden rounded-2xl lg:w-1/2">
              <Image
                src="/Pictures/FREE 4-days course/AdobeStock_542235713.jpeg"
                alt="Mindfulness practice"
                fill
                className="object-cover object-top"
              />
            </div>
          </div>
          <div className="mt-12 text-center">
            <Button asChild variant="primary">
              <Link href="/objednavka">Jdu do toho</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Research stats */}
      <section className="bg-[#C0D1C6] py-16 lg:py-24">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <div className="mx-auto mb-6 flex justify-center">
            <ScrollAnimatedIllustration
              // Back layer: the ladder (two diagonal rails + horizontal
              // rungs). The dot sits on top of these.
              outline={{
                paths: [
                  { d: "M69.42,141.55c1.58-8.5,3.15-17,4.73-25.51,2.86-15.46,5.73-30.91,8.59-46.37,2.42-13.07,4.84-26.14,7.26-39.21l.19-1.02" },
                  { d: "M87.2,141.98c2.7-15.51,5.39-31.01,8.1-46.52,1.18-6.8,2.37-13.6,3.55-20.4,1.65-6.59,2.36-13.57,3.53-20.27,1.16-6.68,2.31-13.36,3.47-20.04l.7-4.03" },
                  { d: "M70.82,134.02c.92.01,1.84.01,2.76.01,4.08,0,8.16-.08,12.24-.08.93,0,1.85,0,2.78.01" },
                  { d: "M73.16,121.37c1.59.03,3.19.03,4.78.03,1.86,0,3.72,0,5.58,0,2.42,0,4.84.02,7.24.09" },
                  { d: "M75.23,110.17c.27,0,.53,0,.8,0,5.6,0,11.18-.3,16.78-.44" },
                  { d: "M77.46,98.18c3.52,0,7.04-.05,10.56-.05,2.27,0,4.53.02,6.8.09" },
                  { d: "M80.19,83.42c5.77-.41,11.53-.61,17.31-.62" },
                  { d: "M82.94,68.59c5.72.21,11.44.48,17.16.59" },
                  { d: "M85.49,54.8c3.61.25,7.21.29,10.81.29,2,0,4.01-.02,6.03-.02" },
                  { d: "M87.92,41.69c5.53.3,11.08.53,16.62.63" },
                ],
                fill: "none",
              }}
              // Front layer: the glass itself. The rim is filled with the
              // section's bg colour so it occludes the dot when the dot
              // passes behind it climbing up through the rim.
              frontPaths={[
                { d: "M75.6,49.72c-4.39.17-8.76.6-13.06,1.32-2.09.35-4.21.98-6.15,1.7-1.12.41-2.31,1.01-2.61,2.01-.42,1.41,1.15,2.65,2.62,3.4,4.26,2.15,9.12,3.27,13.95,4.09,8.5,1.46,17.38,2.12,25.89.35,3.69-.77,8.24-2.11,9.83-5.31.48-.96.53-2.12-.08-3.02-.64-.95-1.87-1.48-3.07-1.88-4.14-1.38-8.72-1.89-13.12-2.29-4.71-.42-9.46-.55-14.2-.37Z" },
                { d: "M53.78,54.75c.51,11.79,1.02,23.58,1.54,35.37.62,14.22,1.24,28.44,1.85,42.66.13,2.98.26,5.95.39,8.93,0,0,42.54.61,42.54.61.25,0,1.91-26.09,2.03-27.7,1.15-15.68,2.3-31.36,3.45-47.03.28-3.84.56-7.68.84-11.52" },
              ]}
              viewBox="0 0 170.08 170.08"
              dots={[
                {
                  from: { cx: 72.53, cy: 130.29, r: 11.17 },
                  to: { cx: 96, cy: 42, r: 11.17 },
                },
              ]}
              width={320}
              height={320}
            />
          </div>
          <h2 className="text-[28px] font-bold leading-[38px] text-[#2D2C2B]">
            Věda hovoří jasně
          </h2>
          <p className="mt-6 text-[20px] leading-[32px] text-[#2D2C2B]">
            10 minut denně po dobu 14 dnů prokazatelně snižuje mentální putování z myšlenky na myšlenku a zlepšuje soustředění.
          </p>
          <p className="mt-4 text-[14px] leading-[22px] text-[#2D2C2B]/70 italic">
            Feruglio et al. (2021). The Impact of Mindfulness Meditation on the Wandering Mind: a Systematic Review.
          </p>
        </div>
      </section>

      {/* Device mockup */}
      <section className="bg-white">
        <Image
          src="/Mockup photos/Průhledné/univerz.png"
          alt="be.mindful Start-to-PAUSE na všech zařízeních"
          width={1600}
          height={900}
          className="block w-full object-contain"
        />
      </section>

      {/* Course days */}
      <section className="bg-white pb-16 pt-4 lg:pb-24 lg:pt-8">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <p className="text-center text-sm font-semibold uppercase tracking-wider text-[#7BC0A4]">
            Bezplatný 4denní program
          </p>
          <h2 className="mt-2 text-center text-[28px] font-bold leading-[38px] text-[#2D2C2B]">
            Nauč se zastavit. Restart hlavy za 4 dny.
          </h2>

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

          {/* Day rows */}
          <div className="mt-8 flex flex-col gap-3">
            {days.map((d, i) => (
              <div key={i} className="rounded-xl bg-[#F5F6F7] px-5 py-4">
                <div className="flex items-start gap-4">
                  <span className="min-w-[100px] text-[18px] font-bold uppercase tracking-wider leading-[30px] text-[#7BC0A4]">
                    {d.day}
                  </span>
                  <div className="flex-1">
                    <p className="text-[18px] font-bold leading-[30px] text-[#2D2C2B]">{d.title}</p>
                    <p className="mt-1 text-[16px] leading-[26px] text-[#4B4C4D]">{d.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Button asChild variant="primary">
              <Link href="/objednavka">Jdu do toho</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Teacher bio */}
      <section className="bg-[#C0D1C6] py-16 lg:py-24">
        <div className="mx-auto flex max-w-7xl flex-col gap-12 px-6 lg:flex-row lg:items-center lg:gap-16 lg:px-8">
          <div className="lg:w-1/2">
            <h2 className="text-[28px] font-bold leading-[38px] text-[#2D2C2B]">
              Jsem Michal Dvořák,<br />zakladatel be.mindful
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
