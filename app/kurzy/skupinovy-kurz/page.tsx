import type { ReactNode } from "react"
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
    bold: "Víc jistoty a klidu:",
    rest: " Emoce ani černé myšlenky tě nebudou ovládat tak jako dřív. Naučíš se na ně reagovat jinak.",
  },
  {
    bold: "Větší sebedůvěru:",
    rest: " I když přijde těžký den, budeš vědět, že se máš o co opřít.",
  },
  {
    bold: "Lepší zvládání stresu:",
    rest: " Naučíš se včas rozpoznat přetížení, zklidnit hlavu a reagovat s větším nadhledem.",
  },
  {
    bold: "Všímavé jedení a komunikace:",
    rest: " Začneš víc vnímat své potřeby, návyky, druhé lidi i sebe a reagovat s větším klidem a porozuměním.",
  },
  {
    bold: "Polevíš v tlaku na sebe:",
    rest: " Méně sebekritiky, víc laskavosti k sobě i k lidem kolem.",
  },
  {
    bold: "Mindfulness pro každodenní život:",
    rest: " Ne jako další úkol navíc, ale dovednost, kterou začneš přirozeně využívat v běžných situacích.",
  },
  {
    bold: "Nezůstaneš na to sám/sama:",
    rest: " Podpora šitá tobě na míru, přesně na to, čím zrovna procházíš a co řešíš, ne obecné rady pro každého.",
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
      "neděle 29. 11. 10:00–16:00",
      "úterý 1. 12. 18:00–20:30",
      "úterý 8. 12. 18:00–20:30",
      "úterý 15. 12. 18:00–20:45",
    ],
  },
]

const howCourseWorks: ReactNode[] = [
  <>
    Kurz můžeš <strong className="font-semibold">absolvovat živě v Praze</strong> nebo{" "}
    <strong className="font-semibold">online přes Zoom</strong>, kam se můžeš připojit kdykoliv a
    odkudkoliv. Obsah i průběh kurzu jsou v obou variantách stejné.
  </>,
  <>
    Součástí kurzu je{" "}
    <strong className="font-semibold">8 setkání v délce 2,5 hodiny a jedno celodenní 6hodinové</strong>{" "}
    setkání o víkendu.
  </>,
  <>
    Každé setkání <strong className="font-semibold">kombinuje společnou mindfulness praxi </strong>–
    mindfulness meditace – s následnou diskuzí pro správné upevnění praxe. Potom se pustíme{" "}
    <strong className="font-semibold">do jednoho tématu do hloubky</strong> – třeba jak mindfulness
    využít pro lepší zvládání stresu.
  </>,
  <>
    Mezi jednotlivými setkáními{" "}
    <strong className="font-semibold">probíhá individuální praxe s vedenými meditacemi</strong>, které
    budeš mít k dispozici na audionahrávkách. Mají asi 30 minut a pomohou ti rozvinout větší všímavost
    a odolnost.
  </>,
]

const courseModules = [
  {
    label: "MODUL 1",
    title: "Úvod do mindfulness, základy praxe a všímavé jedení",
    content:
      "První setkání se věnuje základům a tomu, proč se vyplatí praxi udržet. Zjistíš, co mindfulness doopravdy je, projdeme si několik prvních cvičení a zastavíme se i u všímavého jedení. Cílem je dát ti všechno, co potřebuješ pro dobrý start do kurzu. Doporučená samostatná mindfulness praxe: 35 minut denně do dalšího setkání.",
  },
  {
    label: "MODUL 2",
    title: "Práce s obtížnými myšlenkami a všímavost",
    content:
      "Po společném cvičení se ohlédneme za uplynulým týdnem. Povíme si, co dělat ve dnech, kdy praxe nejde podle našich představ, a v čem všímavost vlastně spočívá. A hlavně: jak pracovat s myšlenkami, aby nad námi neměly takovou moc. Doporučená samostatná mindfulness praxe: 35 + 10 minut denně do dalšího setkání.",
  },
  {
    label: "MODUL 3",
    title: "Radost, spokojenost a přeměna obyčejného v neobyčejné",
    content:
      "Ranní káva, procházka, rozhovor s blízkým. Chvíle, které většinou automaticky přejdeme. Po společné praxi se zaměříme na to, jak být během dne přítomnější, víc si užívat každodenní drobné momenty, které nám často unikají. Ukážeme si, jak díky větší všímavosti nacházet více radosti a spokojenosti v obyčejných chvílích každodenního života. Doporučená samostatná mindfulness praxe: 35 + 15 minut denně do dalšího setkání.",
  },
  {
    label: "MODUL 4",
    title: "Přerušení stresových vzorců a práce s tělem",
    content:
      "Začneme společnou mindfulness praxí a sdílením zkušeností z uplynulého týdne. Zaměříme se na vzorce chování, které nás automaticky stahují do stresu a napětí, včetně reakcí typu boj, útěk nebo zamrznutí. Ukážeme si, jak na náročné situace reagovat s větším nadhledem, otevřeností a zvídavosti. Doporučená samostatná mindfulness praxe: 35 + 20 minut denně do dalšího setkání.",
  },
  {
    label: "MODUL 5",
    title: "Zvládání stresu a obtížných emocí",
    content:
      "Setkání otevřeme novým mindfulness cvičením a reflexí uplynulého týdne. Podíváme se na to, jak stres ovlivňuje tělo i mysl. Naučíš se praktické techniky mindfulness pro zvládání náročných situací, včetně techniky STOP a dalších cvičení. Doporučená samostatná mindfulness praxe: 35 minut denně do dalšího setkání.",
  },
  {
    label: "MODUL 6",
    title: "Všímavá komunikace a zvládání náročné komunikace",
    content:
      "Umíš naslouchat? A co se v tobě děje, když komunikace začne být nepříjemná? Při setkání se zaměříme na vědomější komunikaci, naslouchání i lepší práci s obtížnými emocemi během rozhovorů. Prakticky si vyzkoušíš principy všímavé komunikace a naučíš se zvládat konfliktní situace s větším klidem, nadhledem a menší impulzivností. Doporučená samostatná praxe: 35 minut denně do dalšího setkání.",
  },
  {
    label: "MODUL 7",
    title: "Celodenní setkání o víkendu: hlubší praxe a prohloubení dovedností",
    content:
      "Den plný mindfulness. Žádné deadliny, žádné notifikace, jen mindfulness praxe, skupina a prostor skutečně zpomalit. Šest hodin společné praxe včetně oběda: projdeš známá cvičení a vyzkoušíš si dvě nová. Odcházíš s hlubšími dovednostmi a novou energií. Účastníci ho často označují za jeden z nejsilnějších momentů kurzu.",
  },
  {
    label: "MODUL 8",
    title: "Všímavost v každodenním životě a budování zdravých návyků",
    content:
      "Spěch, multitasking, telefon. Co ti bere energii a co tě naopak dobíjí? Po reflexi celodenního setkání se podíváme na návyky, které ti už neslouží, a na to, jak z nich vědomě vystupovat. Odcházíš s konkrétními technikami pro vědomější každodenní fungování. Doporučená samostatná praxe: 35 minut denně do dalšího setkání.",
  },
  {
    label: "MODUL 9",
    title: "Závěr kurzu: nekončíme, pokračujeme",
    content:
      "I když skončí kurz, život jede dál naplno. Právě proto se na posledním setkání zaměříme na to, jak si pravidelnou praxi udržet dlouhodobě. Ohlédneme se za celým kurzem, ujasníš si, co ti funguje nejlépe, a vytvoříš si způsob, jak dostat mindfulness přirozeně do každého dne.",
  },
]

const tabs = [
  "8 setkání (2,5 hodiny) + 1 víkendové celodenní setkání (6 hodin)",
  "35–50 minut denní praxe",
  "Soukromý chat a možnost individuálních konzultací",
]

const testimonials = [
  {
    quote: "Zklidnil jsem se a získal řád do svého života.",
    name: "Pavel Bohatý",
    image: "",
    video: "/videos/testimonials/medailonek-3.mp4",
  },
  {
    quote: "Vrátila jsem se zpátky do těla.",
    name: "Pavla Fridrichová",
    image: "",
    video: "/videos/testimonials/medailonek-2.mp4",
  },
  {
    quote: "Kurz mi přinesl schopnost vnímat přítomný okamžik.",
    name: "Dušan Lužný",
    image: "",
    video: "/videos/testimonials/medailonek-1.mp4",
  },
  {
    quote: "Kurz mi pomohl projít náročným obdobím života.",
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
              Nejlépe vědecky podložený mindfulness program na světě. Pro klid, který vydrží i v náročných dnech.
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
            Když se kolem strhne bouře, ty zůstaneš v klidu
          </h2>
          <p className="mt-6 text-[18px] leading-[30px] text-[#4B4C4D]">
            Mindfulness-based stress reduction (MBSR) je nejprověřenější mindfulness program na světě, stojí na desítkách let výzkumu a milionech lidí, kteří jím prošli. Osm týdnů hluboké praxe, osobního vedení a skupiny, co tě podrží. Pro ty, kdo chtějí změnu, která zůstane.
          </p>
        </div>
      </section>

      {/* Teacher video */}
      <section className="bg-[#F5F6F7] py-16 lg:py-24">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-[#7BC0A4]">Mindfulness, které zapadne do tvého života</p>
            <h2 className="mx-auto mt-4 max-w-2xl text-[28px] font-bold leading-[38px] text-[#2D2C2B]">
              8 týdnů, které promění způsob, jak zvládáš náročné situace<br /><span className="text-[18px] font-medium leading-[30px]">Michal Dvořák, Senior Mindfulness Teacher</span>
            </h2>
          </div>
          <TrailerEmbed
            videoSrc="/trailers/8tydenni-kurz.mp4"
            poster="/trailers/cover-8tydenni-kurz.jpg"
            alt="Michal Dvořák – Senior Mindfulness Teacher"
            className="mt-10"
          />
        </div>
      </section>

      {/* Upcoming dates */}
      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <h2 className="text-center text-[28px] font-bold leading-[38px] text-[#2D2C2B]">Vyber si termín, který ti sedne. Online i naživo</h2>
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
            Co si z 8týdenního kurzu odneseš?
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
            Výzkumy mluví jasně
          </h2>
          <p className="mt-6 text-[24px] font-bold leading-[34px] text-[#2D2C2B]">
            Osmitýdenní kurz mindfulness snižuje stres o 30 % a efekt přetrvává i po jeho skončení.
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
                Pro koho je kurz a jak probíhá?
              </h2>
              <p className="mt-6 text-[18px] font-bold leading-[30px] text-[#2D2C2B]">
                Intenzivní trénink mysli pro ty, kdo chtějí jít do hloubky
              </p>
              <p className="mt-3 text-[18px] leading-[30px] text-[#2D2C2B]/85">
                Ať už znáš mindfulness z programu FOUNDATIONS či MEMBERSHIPU, nebo začínáš od začátku a chceš jít víc do hloubky, kurz tě provede pravidelnou praxí, kterou postupně přeneseš i do běžného života.
              </p>
              <p className="mt-3 text-[18px] leading-[30px] text-[#2D2C2B]/85">
                Počítej s každodenní praxí v délce alespoň 30 minut po dobu 8 týdnů. Během celého kurzu tě bude podporovat lektor i skupina lidí na podobné cestě.
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
            Léty vyladěný kurz
          </p>
          <h2 className="mt-2 text-center text-[28px] font-bold leading-[38px] text-[#2D2C2B]">Co tě v 8týdenním kurzu mindfulness čeká?</h2>

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
              Bonus | přístup do be.mindful app – mindfulness v kapse
            </h3>
            <p className="mt-4 text-[18px] leading-[30px] text-[#4B4C4D]">
              V rámci kurzu získáš přístup do aplikace be.mindful se všemi meditacemi, materiály i podklady k celé 8týdenní praxi.
            </p>
            <p className="mt-3 text-[18px] leading-[30px] text-[#4B4C4D]">
              Součástí je také soukromý chat jen pro účastníky kurzu a po dokončení kurzu navíc měsíční přístup do be.mindful MEMBERSHIPU.
            </p>
            <h3 className="mt-6 text-[24px] font-bold leading-[34px] text-[#2D2C2B]">
              Bonus | Certifikát o absolvování
            </h3>
            <p className="mt-4 text-[18px] leading-[30px] text-[#4B4C4D]">
              Na vyžádání obdržíš po dokončení kurzu certifikát o absolvování programu.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button asChild variant="primary">
                <Link href="/objednavka/8-tydenni-kurz">Přihlas se do kurzu</Link>
              </Button>
            </div>
          </div>
          <div className="hidden w-full lg:block lg:w-1/2">
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
            Život je stejný. Ty už ne
          </h2>
          <p className="mt-6 text-[18px] leading-[30px] text-[#2D2C2B]/75">
            Okolnosti nezměníš, ale za 8 týdnů se změní to, jak je prožíváš – s větším klidem a nadhledem.
          </p>
        </div>
      </section>

      {/* Video testimonials */}
      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="mb-10 text-center text-[28px] font-bold leading-[38px] text-[#2D2C2B]">Skutečné zkušenosti účastníků kurzu</h2>
          <VideoTestimonialsCarousel testimonials={testimonials} />
        </div>
      </section>

      {/* Teacher bio */}
      <section className="bg-[#C0D1C6] py-16 lg:py-24">
        <div className="mx-auto flex max-w-7xl flex-col gap-12 px-6 lg:flex-row lg:items-center lg:gap-16 lg:px-8">
          <div className="lg:w-1/2">
            <h2 className="text-[28px] font-bold leading-[38px] text-[#2D2C2B]">
              Ahoj, jsem Michal Dvořák,<br />zakladatel be.mindful a lektor
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
