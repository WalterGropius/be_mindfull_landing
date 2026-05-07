import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Check, Plus, Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ScrollAnimatedIllustration } from "@/components/scroll-animated-illustration"
import { StatsBar } from "@/components/stats-bar"

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
          className="object-cover"
          priority
        />
        <div className="relative z-10 mx-auto flex min-h-[500px] max-w-7xl items-center px-6 py-20 lg:min-h-[580px] lg:px-8 lg:py-28">
          <div className="max-w-xl">
            <h1 className="text-[28px] font-bold leading-[38px] text-white sm:text-5xl lg:text-[64px] lg:leading-[1.1]">
              FREE 4denní<br />online kurz<br />Start-to-PAUSE
            </h1>
            <p className="mt-4 max-w-xs text-[18px] leading-[30px] text-white/75">
              Začněte, jak do svého života přidat trochu prostoru – a krok za krokem přeměníte způsoby, jak začleníte toto každodenního života.
            </p>
            <div className="mt-8">
              <Button asChild variant="primary-orange" className="group">
                <Link href="/objednavka">
                  <span className="flex items-center gap-2">Vstoupit do kurzu <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" /></span>
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
            Ukážu vám,<br />jak silná může být krátká pauza!
          </h2>
          <p className="mt-6 text-[18px] leading-[30px] text-[#4B4C4D]">
            Schopnost se zastavit patří dnes k těm nejdůležitějším dovednostem. Právě v tom okamžiku se můžeme znovu propojit sami se sebou, obrátit pozornost dovnitř místo ven a tím najít větší jasnost, klid a prostor pro vědomou reakci místo automatické.
          </p>
        </div>
      </section>

      {/* Teacher video */}
      <section className="bg-[#F5F6F7] py-16 lg:py-24">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-semibold text-[#7BC0A4]">Mindfulness není pro každého stejné</p>
            <h2 className="mx-auto mt-4 max-w-2xl text-[28px] font-bold leading-[38px] text-[#2D2C2B]">
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
          <h2 className="text-center text-[28px] font-bold leading-[38px] text-[#2D2C2B]">
            Jak se budete cítit po kurzu
          </h2>
          <div className="mt-12 flex flex-col gap-12 lg:flex-row lg:items-center">
            <div className="flex flex-col gap-5 lg:w-1/2">
              {benefits.map((b, i) => (
                <div key={i} className="flex items-start gap-4">
                  <img src="/tic.png" alt="" className="h-10 w-10 shrink-0" />
                  <p className="text-[18px] leading-[30px] text-[#4B4C4D]">{b}</p>
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
              <Link href="/kontakt">Kontaktujte nás pro osobní nabídku</Link>
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
            Výzkumy potvrzují:
          </h2>
          <p className="mt-2 text-[28px] leading-[38px] text-[#2D2C2B]">
            krátká každodenní praxe může mít překvapivě silný dopad!
          </p>
          <p className="mt-6 text-[24px] font-bold leading-[34px] text-[#2D2C2B]">
            14–20% snížení stresu<br />při 5–10 minutách meditace denně během osmi týdnů.
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
          <p className="text-center text-sm font-semibold text-[#7BC0A4]">
            Mindfulness není pro každého stejné
          </p>
          <h2 className="mt-2 text-center text-[28px] font-bold leading-[38px] text-[#2D2C2B]">ZDARMA 4denní online kurz</h2>
          <p className="mt-1 text-center text-[28px] font-bold leading-[38px] text-[#2D2C2B]">START to PAUSE</p>

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
          <div className="mt-8 flex flex-col gap-1">
            {days.map((d, i) => (
              <div key={i} className="flex items-center gap-4 rounded-xl bg-[#F5F6F7] px-5 py-4">
                <span className="min-w-[100px] text-[18px] font-bold uppercase tracking-wider leading-[30px] text-[#7BC0A4]">
                  {d.day}
                </span>
                <span className="text-[18px] font-bold leading-[30px] text-[#2D2C2B]">{d.title}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Button asChild variant="primary">
              <Link href="/objednavka">Vstoupit do START to PAUSE</Link>
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
              Mindfulness není jen přístup – je hluboce zakořeněn v mém životě. XXXX mě přivedl k první zkušenosti s mindfulness xxx.
            </p>
            <p className="mt-4 text-[18px] leading-[30px] text-[#2D2C2B]/80">
              Z této situace xxx se stalo a zjistil jsem, že xxx.
            </p>
            <p className="mt-4 text-[18px] leading-[30px] text-[#2D2C2B]/80">
              Dnes jsem jediným Senior Mindfulness Teacherem v České republice a můj specifický a radostný přístup zpřístupňuje mindfulness xxx lidem za posledních xxx let.
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
