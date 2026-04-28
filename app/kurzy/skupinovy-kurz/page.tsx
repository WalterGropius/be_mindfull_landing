import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { StatsBar } from "@/components/stats-bar"
import { VideoTestimonialsCarousel } from "@/components/video-testimonials-carousel"
import { UpcomingDates } from "@/components/upcoming-dates"
import { SmileyIcon } from "@/components/list-icons"
import { CourseModules } from "@/components/course-modules"
import { ScrollAnimatedIllustration } from "@/components/scroll-animated-illustration"

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
  {
    label: "MODULE 1",
    title: "Základy mindfulness & vědomé jedení",
    content:
      "Položíme si základ celé praxe – co mindfulness je, co rozhodně není, a jak ho začít vnášet do běžného dne. Cvičení vědomého jedení vám ukáže, jak velký rozdíl dělá pozornost i v těch nejobyčejnějších situacích.",
  },
  {
    label: "MODULE 2",
    title: "Práce s myšlenkami a automatickými reakcemi",
    content:
      "Naučíte se rozpoznávat opakující se vzorce mysli a získáte nástroje, jak od myšlenek získat odstup. Místo automatické reakce přichází prostor pro vědomou volbu.",
  },
  {
    label: "MODULE 3",
    title: "Radost, spokojenost a mindfulness pro potěšení",
    content:
      "Mindfulness není jen o zvládání obtížných stavů. Tento týden se zaměříme na to, jak vědomě prohlubovat příjemné okamžiky a posilovat schopnost si jich všímat.",
  },
  {
    label: "MODULE 4",
    title: "Přerušení stresových vzorců a práce s tělem",
    content:
      "Tělo nese stres dřív, než si to uvědomíme. Naučíte se rozpoznávat tělesné signály a přerušovat stresovou reakci přímo v momentě, kdy začne.",
  },
  {
    label: "MODULE 5",
    title: "Jak zvládat stres a těžké emoce",
    content:
      "Praktické techniky pro chvíle, kdy je toho moc – ať už v práci, ve vztazích nebo uvnitř sebe. Naučíte se být s emocemi tak, aby vás nepřeválcovaly.",
  },
  {
    label: "MODULE 6",
    title: "Všímavá a náročná komunikace",
    content:
      "Jak naslouchat i mluvit s pozorností – i v rozhovorech, kde je napětí nebo nesouhlas. Mindfulness ve vztazích jako konkrétní dovednost, ne jen koncept.",
  },
  {
    label: "MODULE 7",
    title: "Mindfulness v každodenním životě, práce s energií a návyky",
    content:
      "Jak udržet praxi i poté, co skončí kurz. Vytvoříme si návyky a kotvy, které drží i v zaneprázdněných týdnech.",
  },
  {
    label: "MODULE 8",
    title: "Integrace",
    content:
      "Závěrečný týden propojuje vše předchozí. Podíváme se zpět na to, co se posunulo, a nastavíme si dlouhodobý plán, jak v praxi pokračovat samostatně.",
  },
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
    quote: "Naučil jsem se dýchat dřív, než zareaguji – a to změnilo všechno.",
    name: "Jakub M.",
    text: "Skupinová dynamika a Michalovo vedení mi daly stabilní rámec, který drží i v náročných týdnech. Místo rychlých soudů přichází zvědavost.",
    image: "/Pictures/AdobeStock_313540527.jpeg",
  },
  {
    quote: "Po kurzu mi mindfulness konečně dává smysl v praxi, ne jen na papíře.",
    name: "Lenka V.",
    text: "Krátké každodenní praxe a sdílení s ostatními mi pomohly udržet rytmus i po skončení kurzu. Cítím se klidnější a víc ve svém těle.",
    image: "/Pictures/AdobeStock_1844492057.jpeg",
  },
  {
    quote: "Konečně chápu, co znamená 'být tady a teď' – a co s tím dělat.",
    name: "Martin K.",
    text: "Skupina i Michal nabídli prostor bez tlaku. Naučil jsem se rozpoznávat automatické reakce dřív, než mě převálcují, a vracet pozornost k tomu, co opravdu chci.",
    image: "/Pictures/AdobeStock_313540527.jpeg",
  },
  {
    quote: "Mindfulness se stalo součástí mého dne, ne další položkou v kalendáři.",
    name: "Tereza S.",
    text: "Líbí se mi, jak Michal propojuje vědu s praxí. Po osmi týdnech mám konkrétní nástroje, které sahají dál než jen meditace u rána.",
    image: "/Pictures/AdobeStock_1844492057.jpeg",
  },
  {
    quote: "Skupina mě držela v praxi i ve chvílích, kdy bych sám/sama přestal/a.",
    name: "Petr H.",
    text: "Bez té skupinové podpory bych pravděpodobně po druhém týdnu skončil. Společné sdílení mi ukázalo, že nejsem v tom sám – a to je obrovsky úlevné.",
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
        <div className="relative z-10 mx-auto flex min-h-[500px] max-w-7xl items-center px-6 py-20 lg:min-h-[580px] lg:px-8 lg:py-28">
          <div className="max-w-xl">
            <h1 className="text-[28px] font-bold leading-[38px] text-white sm:text-5xl lg:text-[64px] lg:leading-[1.1]">
              8týdenní kurz<br />mindfulness
            </h1>
            <p className="mt-4 text-[18px] leading-[30px] text-white/80">
              Staňte se stabilními i v bouřlivých časech
            </p>
            <div className="mt-8">
              <Button asChild className="h-auto rounded-full bg-[#E2763A] px-8 py-3 text-sm font-semibold text-white hover:bg-[#D96B2E]">
                <Link href="/objednavka">Vstoupit do kurzu <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Intro — centered */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-2xl px-6 text-center lg:px-8">
          <h2 className="text-[28px] font-bold leading-[38px] text-[#2D2C2B]">
            Hluboké propojení a vnitřní stabilita
          </h2>
          <p className="mt-6 text-[18px] leading-[30px] text-[#4B4C4D]">
            Tento pokročilý kurz je určen pro ty, kteří chtějí jít do hloubky a udělat z mindfulness pevnou a přirozenou součást každodenního života. Naučíte se rozvíjet stálý vnitřní kompas, který vás povede i v období stresu, nejistoty a složitých situací s větší jasností a klidem. Získáte podporu šitou na míru přesně tomu, kde se právě nacházíte – a stanete se součástí silné a propojené skupiny, která kráčí vpřed společně.
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

      {/* Upcoming dates */}
      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <h2 className="text-center text-[28px] font-bold leading-[38px] text-[#2D2C2B]">Upcoming dates</h2>
          <p className="mt-1 text-center text-[28px] font-bold leading-[38px] text-[#2D2C2B]">8týdenní kurz mindfulness</p>
          <div className="mt-10">
            <UpcomingDates dates={upcomingDates} />
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-[#F5F6F4] py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-[28px] font-bold leading-[38px] text-[#2D2C2B]">
            Posilíte si „sval mindfulness":<br />vytvořit prostor, kde můžete udržovat<br />všímavost živou
          </h2>
          <div className="mt-12 flex flex-col gap-12 lg:flex-row lg:items-start">
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
              asChild
              variant="outline"
              className="h-auto rounded-full border-[#7BC0A4] px-10 py-3 text-sm font-semibold text-[#7BC0A4] hover:bg-[#7BC0A4] hover:text-white"
            >
              <Link href="/objednavka">Vstoupit do kurzu</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Research stats */}
      <section className="bg-[#C0D1C6] py-16 lg:py-24">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <div className="mx-auto mb-6 flex justify-center">
            <ScrollAnimatedIllustration
              outline={{
                paths: [
                  { d: "M109.78,125.68c-1.05-.03-4.33-.17-8.18-.17-7.31,0-16.68.5-16.68,3.2,0,2.84,5.01,3.2,7.82,3.27" },
                  { d: "M91.06,131.9c-3.61.16-6.76,1.04-6.79,2.16-.04,2.13,6.25,2.63,9.33,2.78" },
                  { d: "M93.6,136.85c-1.63.05-9.29,0-9.29,2.37,0,2.96,6.32,3.49,9.65,3.55,3.91.06,6.15.13,9.22.13,3.93,0,7.49.35,13.09.35,11.12,0,24.66-1.39,24.66-12.49,0-18.43-44.23-22.71-44.23-46.05,0-5.26,1.15-10.91,1.15-15.87,0-9.32-5.54-13.69-13.02-13.69-5.35,0-14.84,3.91-14.84,16.08,0,5.77,1.62,12.13,1.62,17.91,0,25-42.29,13.52-41.8,41.65.08,4.37,2.66,10.91,14.19,11.08s29.09.52,32.36.52c5.08,0,7.76-1.44,7.93-3.16s-9.48-2.35-9.48-2.35c0,0,8.85-.47,9.44-2.8s-9.11-2.28-9.11-2.28" },
                  { d: "M76.33,131.73s8.3-1.08,8.59-3.02-14.96-3.44-18.22-3.58c-3.26-.14-19.5-.82-19.5-.82" },
                ],
                fill: "#C0D1C6",
              }}
              viewBox="0 0 170.08 170.08"
              dots={[
                {
                  from: { cx: 84.27, cy: 69.14, r: 6.31 },
                  to: { cx: 84.27, cy: 69.14, r: 26.72 },
                },
              ]}
              dotsBehind
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

      {/* After course feelings */}
      <section className="bg-[#8ECDB5] py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col gap-12 lg:flex-row lg:items-start">
            <div className="lg:w-2/5">
              <h2 className="text-[28px] font-bold leading-[38px] text-[#2D2C2B]">
                Jak se budete cítit po kurzu
              </h2>
              <p className="mt-4 text-[18px] leading-[30px] text-[#2D2C2B]/75">
                Pravděpodobně se budete cítit lépe a také změna se nastejvá jak vám vás říkám vám:
              </p>
              <ul className="mt-5 space-y-2">
                {["Zlepšení vztahů", "Více klidu a pohody", "Lepší zvládání stresu"].map((item) => (
                  <li key={item} className="text-[18px] leading-[30px] text-[#2D2C2B]/90">• {item}</li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-5 lg:w-3/5">
              {afterCourse.map((b, i) => (
                <div key={i} className="flex items-center gap-4">
                  <SmileyIcon className="h-10 w-10 shrink-0" />
                  <p className="text-[18px] leading-[30px] text-[#2D2C2B]">
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
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <p className="text-center text-sm font-semibold text-[#7BC0A4]">
            Mindfulness není pro každého stejné
          </p>
          <h2 className="mt-2 text-center text-[28px] font-bold leading-[38px] text-[#2D2C2B]">8týdenní kurz mindfulness</h2>
          <p className="mt-1 text-center text-[28px] font-bold leading-[38px] text-[#2D2C2B]">To vás čeká</p>

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
          <div className="mt-8">
            <CourseModules modules={courseModules} />
          </div>

          {/* Bonus app section */}
          <div className="mt-12 flex flex-col gap-8 lg:flex-row lg:items-center">
            <div className="lg:w-1/2">
              <h3 className="text-[24px] font-bold leading-[34px] text-[#2D2C2B]">
                Bonus: Získejte novou<br />aplikaci be.mindful ZDARMA
              </h3>
              <p className="mt-4 text-[18px] leading-[30px] text-[#4B4C4D]">
                Mindfulness is not only an approach – it is deeply embedded into my life. XXXX brought me to my first mindfulness experience here xxx.
              </p>
              <p className="mt-3 text-[18px] leading-[30px] text-[#4B4C4D]">
                From this situation xxx happened and I discovered, that xxx.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Button asChild className="h-auto rounded-full bg-[#7BC0A4] px-8 py-3 text-sm font-semibold text-white hover:bg-[#6BB194]">
                  <Link href="/objednavka">Vstoupit do kurzu</Link>
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
          <h2 className="text-[28px] font-bold leading-[38px] text-[#2D2C2B]">
            Každodenní praxe. Skutečná podpora.<br />Trvalá změna.
          </h2>
          <p className="mt-6 text-[18px] leading-[30px] text-[#2D2C2B]/75">
            Tento 8týdenní kurz je určen pro ty, kteří chtějí, aby mindfulness nebylo jen konceptem, ale součástí života. Naučíte se rozvíjet stálý vnitřní kompas, který vás povede i v období stresu, nejistoty a složitých situací s větší jasností a klidem.
          </p>
        </div>
      </section>

      {/* Video testimonials */}
      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="mb-10 text-center text-[28px] font-bold leading-[38px] text-[#2D2C2B]">Hlasy našich účastníků</h2>
          <VideoTestimonialsCarousel testimonials={testimonials} />
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
