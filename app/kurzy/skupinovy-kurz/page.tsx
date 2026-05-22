import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { TrailerEmbed } from "@/components/trailer-embed"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { StatsBar } from "@/components/stats-bar"
import { VideoTestimonialsCarousel } from "@/components/video-testimonials-carousel"
import { UpcomingDates } from "@/components/upcoming-dates"
import { CourseModules } from "@/components/course-modules"
import { ScrollAnimatedIllustration } from "@/components/scroll-animated-illustration"
import { SmileyIcon } from "@/components/list-icons"

const benefits = [
  {
    bold: "Více jistoty a klidu:",
    rest: " stres, emoce a negativní myšlenky tě nebudou tolik strhávat – naučíš se reagovat jinak.",
  },
  {
    bold: "Větší důvěra v sebe:",
    rest: " i ve chvílích pochybností budeš vědět, že se máš o co opřít.",
  },
  {
    bold: "Všímavé jedení a komunikace:",
    rest: " začneš více vnímat své potřeby, návyky i automatické reakce.",
  },
  {
    bold: "Méně sebekritiky, víc laskavosti k sobě i druhým:",
    rest: " budeš na sebe i ostatní vytvářet menší tlak a přistupovat k sobě s větší laskavostí.",
  },
  {
    bold: "Mindfulness ne jako technika, ale jako způsob života:",
    rest: " mindfulness a meditace se stane pevnou součástí tvého života.",
  },
  {
    bold: "Podpora šitá tobě na míru:",
    rest: " získáš podporu pro to, co právě řešíš a čím si procházíš.",
  },
]

const upcomingDates = [
  {
    date: "31. 8. – 19. 10. 2026",
    location: "Online",
    sessions: [
      "pondělí 31. 8. 18:00–20:45",
      "pondělí 7. 9. 18:00–20:30",
      "pondělí 14. 9. 18:00–20:30",
      "pondělí 21. 9. 18:00–20:30",
      "pondělí 28. 9. 18:00–20:30",
      "pondělí 5. 10. 18:00–20:30",
      "sobota 10. 10. 9:00–15:00",
      "pondělí 12. 10. 18:00–20:30",
      "pondělí 19. 10. 18:00–20:45",
    ],
  },
  {
    date: "1. 9. – 20. 10. 2026",
    location: "Praha",
    sessions: [
      "úterý 1. 9. 18:00–20:45",
      "úterý 8. 9. 18:00–20:30",
      "úterý 15. 9. 18:00–20:30",
      "úterý 22. 9. 18:00–20:30",
      "úterý 29. 9. 18:00–20:30",
      "úterý 6. 10. 18:00–20:30",
      "neděle 11. 10. 10:00–16:00",
      "úterý 13. 10. 18:00–20:30",
      "úterý 20. 10. 18:00–20:45",
    ],
  },
  {
    date: "26. 10. – 14. 12. 2026",
    location: "Online",
    sessions: [
      "pondělí 26. 10. 18:00–20:45",
      "pondělí 2. 11. 18:00–20:30",
      "pondělí 9. 11. 18:00–20:30",
      "pondělí 16. 11. 18:00–20:30",
      "pondělí 23. 11. 18:00–20:30",
      "pondělí 30. 11. 18:00–20:30",
      "sobota 5. 12. 9:00–15:00",
      "pondělí 7. 12. 18:00–20:30",
      "pondělí 14. 12. 18:00–20:45",
    ],
  },
  {
    date: "27. 10. – 14. 12. 2026",
    location: "Praha",
    sessions: [
      "úterý 27. 10. 18:00–20:45",
      "úterý 3. 11. 18:00–20:30",
      "úterý 10. 11. 18:00–20:30",
      "úterý 17. 11. 18:00–20:30",
      "úterý 24. 11. 18:00–20:30",
      "úterý 1. 12. 18:00–20:30",
      "neděle 6. 12. 10:00–16:00",
      "úterý 8. 12. 18:00–20:30",
      "úterý 15. 12. 18:00–20:45",
    ],
  },
]

const howCourseWorks = [
  "Kurz můžeš absolvovat buď naživo v Praze, nebo online přes platformu Zoom. Na online kurz se tak můžeš připojit odkudkoliv. Průběh kurzů je identický.",
  "Čeká tě osm 2,5h setkání a jedno celodenní setkání (6 h).",
  "Na každém setkání probíhá společný trénink mindfulness meditace. Po tréninku probíhá diskuse, která má za cíl upevnit správné provádění cvičení. Následně se zabýváme jedním tématem více do hloubky (například, jak využívat mindfulness pro lepší zvládání stresu).",
  "Mezi setkáními probíhá každodenní individuální trénink – každý trénuje sám dle nahrávek řízených meditací, které dostane.",
]

const courseModules = [
  {
    label: "MODULE 1",
    title: "Úvod do mindfulness, základy praxe a všímavé jedení",
    content:
      "První setkání je zaměřené na základy mindfulness a motivaci k pravidelné praxi. Seznámíš se s tím, co mindfulness je, projdeme společně několik cvičení a zaměříme se také na všímavé jedení. Cílem je dát ti vše, co potřebuješ pro dobrý start do osmitýdenního kurzu. Doporučená samostatná praxe: 35 minut denně.",
  },
  {
    label: "MODULE 2",
    title: "Práce s obtížnými myšlenkami a všímavost",
    content:
      "Po společném cvičení se ohlédneme za uplynulým týdnem. Budeme se věnovat tomu, jak zvládat chvíle, kdy se praxe nedaří podle představ, a povíme si, v čem spočívá všímavost. Zaměříme se také na práci s myšlenkami, aby nad tebou neměly takovou kontrolu. Doporučená samostatná praxe: 35 + 10 minut denně.",
  },
  {
    label: "MODULE 3",
    title: "Radost, spokojenost a přeměna obyčejného v neobyčejné",
    content:
      "Po společné praxi se zaměříme na to, jak být během dne všímavější a víc vnímat drobné každodenní momenty, které často přehlížíme. Ranní káva. Procházka. Rozhovor s přítelem. Věci, které máš každý den – a přesto je nevnímáš. Ukážeme si, jak díky větší přítomnosti začneš nacházet radost a spokojenost tam, kde jsi je dosud přehlížel/a. Doporučená samostatná praxe: 35 + 15 minut denně.",
  },
  {
    label: "MODULE 4",
    title: "Přerušení stresových vzorců a práce s tělem",
    content:
      "Začínáme společnou praxí a ohlédnutím za uplynulým týdnem. Zaměříme se na automatické reakce, které přispívají ke stresu a napětí – prozkoumáme reakce „boj, útěk, zamrznutí“, zmapujeme osobní vzorce a hledáme nové způsoby, jak na stresové situace reagovat s větší otevřeností a zvědavostí. Doporučená samostatná praxe: 35 + 20 minut denně.",
  },
  {
    label: "MODULE 5",
    title: "Zvládání stresu a obtížných emocí",
    content:
      "Začínáme novým cvičením mindfulness a reflexí uplynulého týdne. Hlavním tématem je porozumění stresu, jeho reakcím a dopadům na tělo i mysl. Naučíš se, jak stres zvládat pomocí mindfulness – včetně praktických technik, jako je metoda STOP a krátké dechové cvičení. Doporučená samostatná praxe: 35 minut denně.",
  },
  {
    label: "MODULE 6",
    title: "Všímavá komunikace a zvládání obtížné komunikace",
    content:
      "Jak nasloucháš? Jak reaguješ, když je to těžké? Na tomto setkání se zaměříme na komunikaci – jak mluvit srozumitelněji, lépe naslouchat a být víc v kontaktu s tím, co při rozhovoru prožíváš. Principy všímavé komunikace si prakticky vyzkoušíš a naučíš se, jak mindfulness pomáhá zvládat i obtížné nebo konfliktní situace. Doporučená samostatná praxe: 35 minut denně.",
  },
  {
    label: "MODULE 7",
    title: "Celodenní setkání o víkendu: Prohloubení dovedností a hlubší praxe",
    content:
      "Jeden celý den věnovaný mindfulness. Žádné deadliny, žádné notifikace – jen praxe, skupina a prostor opravdu zpomalit. Účastníci tento den často označují za jeden z nejsilnějších momentů celého kurzu. Čeká tě šest hodin společné praxe (včetně pauzy na oběd) – projdeme dosavadní cvičení a vyzkoušíš si dvě nová. Odcházíš s prohloubenými dovednostmi, novou energií a zážitkem toho, jaké to je věnovat mindfulness celý den.",
  },
  {
    label: "MODULE 8",
    title: "Všímavost v každodenním životě a vytváření zdravých návyků",
    content:
      "Spěch. Multitasking. Telefon. Co ti bere energii – a co tě dobíjí? Po reflexi celodenního setkání se zaměříme na návyky, které tě drží v automatickém režimu, a na to, jak z něj vědomě vystupovat. Odcházíš s konkrétními technikami pro vědomější každodenní fungování. Doporučená samostatná praxe: 35 minut denně.",
  },
  {
    label: "MODULE 9",
    title: "Závěr kurzu: Nekončíme, ale pokračujeme",
    content:
      "V první části setkání se budeme věnovat společnému cvičení a reflexi uplynulého týdne. Poté se ohlédneme za celým kurzem a zaměříme se na to, co si chceš z mindfulness odnést do běžného života. Budeme se věnovat také tomu, jak si udržet pravidelnou praxi a postupně udělat z mindfulness přirozenou součást svého života.",
  },
]

const tabs = [
  "8 setkání (2,5 hodiny) + 1 celodenní setkání",
  "35–50 minut denní praxe",
  "Soukromý chat a možnost individuálních konzultací",
]

const testimonials = [
  {
    quote: "Kurz mi přinesl schopnost vnímání okamžiku.",
    name: "Dušan Lužný",
    image: "",
    video: "/videos/testimonials/medailonek-1.mp4",
  },
  {
    quote: "Vrátila jsem se zpátky do těla.",
    name: "Pavla Fridrichová",
    image: "",
    video: "/videos/testimonials/medailonek-2.mp4",
  },
  {
    quote: "Zklidnil jsem se a získal jsem řád do svého života.",
    name: "Pavel Bohatý",
    image: "",
    video: "/videos/testimonials/medailonek-3.mp4",
  },
  {
    quote: "Kurz mi pomohl projít náročným obdobím mého života.",
    name: "Julius Smolej",
    image: "",
    video: "/videos/testimonials/medailonek-4.mp4",
  },
  {
    quote: "Naučil jsem se pravidelně meditovat a vím, co dělat, když jsem ve stresu.",
    name: "Ladislav Dobiáš",
    image: "",
    video: "/videos/testimonials/medailonek-5.mp4",
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
          className="object-cover object-[75%_center] lg:object-center"
          priority
        />
        <div className="relative z-10 mx-auto flex min-h-[500px] max-w-7xl items-center px-6 py-20 lg:min-h-[580px] lg:px-8 lg:py-28">
          <div className="max-w-xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-[#E58C34]">Skupinový kurz</p>
            <h1 className="mt-2 text-[28px] font-bold leading-[38px] text-white sm:text-5xl lg:text-[64px] lg:leading-[1.1]">
              8týdenní kurz mindfulness (MBSR)
            </h1>
            <p className="mt-4 text-[18px] leading-[30px] text-white/85">
              Nejuznávanější program na světě. Klid, který vydrží – i když přijde bouře.
            </p>
            <div className="mt-8">
              <Button asChild variant="primary-orange" className="group">
                <Link href="/objednavka/8-tydenni-kurz">
                  <span className="flex items-center gap-2">Přihlas se <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" /></span>
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
            Vnitřní kompas, který tě povede –<br />i když je kolem bouře.
          </h2>
          <p className="mt-6 text-[18px] leading-[30px] text-[#4B4C4D]">
            MBSR kurz je celosvětově nejuznávanější mindfulness program s desetiletími vědeckého výzkumu. 8 týdnů hlubší praxe, osobního vedení a skupiny, která tě podrží. Pro ty, kdo chtějí skutečnou a trvalou změnu.
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
          <TrailerEmbed
            driveId="1wXopTNuyPvZ3FN8tcloe799Qq0ANfoVu"
            poster="/trailers/cover-8tydenni-kurz.jpg"
            alt="Michal Dvořák – Senior Mindfulness Teacher"
            className="mt-10"
          />
        </div>
      </section>

      {/* Upcoming dates */}
      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <h2 className="text-center text-[28px] font-bold leading-[38px] text-[#2D2C2B]">Kdy se můžeme vidět</h2>
          <p className="mt-1 text-center text-[18px] leading-[30px] text-[#4B4C4D]">8týdenní kurz mindfulness (MBSR)</p>
          <div className="mt-10">
            <UpcomingDates dates={upcomingDates} />
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-[#F5F6F4] py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-[28px] font-bold leading-[38px] text-[#2D2C2B]">
            Co ti 8týdenní kurz přinese
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
            <div className="relative aspect-[6/5] w-full overflow-hidden rounded-2xl lg:w-1/2">
              <Image
                src="/BeMindful_Letna2026AnnaSolcova.55.jpg"
                alt="Group mindfulness session"
                fill
                className="object-cover object-top"
              />
            </div>
          </div>
          <div className="mt-12 text-center">
            <Button asChild variant="primary">
              <Link href="/objednavka/8-tydenni-kurz">Jdu do toho</Link>
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
                fill: "none",
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
            Výzkum ukazuje:
          </h2>
          <p className="mt-6 text-[24px] font-bold leading-[34px] text-[#2D2C2B]">
            8týdenní kurz mindfulness snižuje stres o 30 %.<br />Efekt přetrvává i po skončení kurzu.
          </p>
          <p className="mt-4 text-[14px] leading-[22px] text-[#2D2C2B]/70 italic">
            Khoury et al. (2013). Mindfulness-based therapy: A comprehensive meta-analysis. Clinical Psychology Review.
          </p>
        </div>
      </section>

      {/* How the course works */}
      <section className="bg-[#8ECDB5] py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col gap-12 lg:flex-row lg:items-start">
            <div className="lg:w-2/5">
              <h2 className="text-[28px] font-bold leading-[38px] text-[#2D2C2B]">
                Jak kurz probíhá a pro koho je určený?
              </h2>
              <p className="mt-6 text-[18px] font-bold leading-[30px] text-[#2D2C2B]">
                Kurz je pro tebe, pokud chceš jít do hloubky.
              </p>
              <p className="mt-3 text-[18px] leading-[30px] text-[#2D2C2B]/85">
                Ať už máš za sebou Foundations nebo Membership – anebo s mindfulness začínáš a víš, že do toho chceš jít naplno. Čeká tě 30–50 minut denně pravidelné praxe, skupina lidí na stejné cestě a moje osobní podpora.
              </p>
            </div>
            <div className="flex flex-col gap-5 lg:w-3/5">
              {howCourseWorks.map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <SmileyIcon className="h-10 w-10 shrink-0" />
                  <p className="text-[18px] leading-[30px] text-[#2D2C2B]">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Modules */}
      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <p className="text-center text-sm font-semibold uppercase tracking-wider text-[#7BC0A4]">
            Roky vybroušený kurz
          </p>
          <h2 className="mt-2 text-center text-[28px] font-bold leading-[38px] text-[#2D2C2B]">Co tě čeká na 8týdenním kurzu mindfulness</h2>

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
        </div>

        {/* Bonus app section — full width so the mockup fills its column */}
        <div className="mx-auto mt-12 flex max-w-7xl flex-col gap-0 px-6 lg:flex-row lg:items-center lg:px-8">
          <div className="w-full lg:w-1/2 lg:pr-8">
            <h3 className="text-[24px] font-bold leading-[34px] text-[#2D2C2B]">
              Bonus: Přístup do aplikace be.mindful –<br />vše přehledně na jednom místě
            </h3>
            <p className="mt-4 text-[18px] leading-[30px] text-[#4B4C4D]">
              Součástí kurzu je přístup do aplikace be.mindful. Najdeš tu všechny audionahrávky k 8týdennímu kurzu i online verzi materiálů.
            </p>
            <p className="mt-3 text-[18px] leading-[30px] text-[#4B4C4D]">
              K dispozici máš také soukromý chat jen pro účastníky kurzu. A po skončení kurzu získáš tříměsíční přístup do be.mindful Membership.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button asChild variant="primary">
                <Link href="/objednavka/8-tydenni-kurz">Přihlas se do kurzu</Link>
              </Button>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <Image
              src="/Mockup photos/Průhledné/8ty.kurz.png"
              alt="be.mindful aplikace pro 8týdenní kurz"
              width={800}
              height={1200}
              className="mx-auto block h-auto w-full max-w-md object-contain lg:max-w-none"
            />
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
            8týdenní kurz je určen pro ty, kteří chtějí, aby mindfulness nebylo jen konceptem, ale pevnou součástí jejich života.
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
