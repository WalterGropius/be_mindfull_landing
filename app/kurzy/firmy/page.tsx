import React from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Check } from "lucide-react"
import { TrailerEmbed } from "@/components/trailer-embed"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ScrollAnimatedIllustration } from "@/components/scroll-animated-illustration"

const clientLogos = [
  { src: "/logos/clients/ceska-sporitelna.png", alt: "Česká spořitelna" },
  { src: "/logos/clients/kooperativa.png", alt: "Kooperativa" },
  { src: "/logos/clients/cez.png", alt: "ČEZ" },
  { src: "/logos/clients/mibcon.png", alt: "mibcon" },
  { src: "/logos/clients/t-mobile.png", alt: "T-Mobile" },
  { src: "/logos/clients/raiffeisen.png", alt: "Raiffeisen Bank" },
  { src: "/logos/clients/europool.png", alt: "Europool System" },
]

const benefits = [
  {
    bold: "Větší odolnost vůči stresu a negativním emocím:",
    rest: " méně zahlcení, větší nadhled a schopnost vrátit se rychleji do klidu i po náročných situacích.",
  },
  {
    bold: "Méně mentálního přetížení:",
    rest: " klidnější hlava, lepší regenerace a menší dopad dlouhodobého stresu na psychiku i tělo.",
  },
  {
    bold: "Lepší soustředění a efektivnější práce:",
    rest: " méně roztěkanosti, více mentální kapacity na hlubokou práci.",
  },
  {
    bold: "Klidnější komunikace:",
    rest: " schopnost víc naslouchat, reagovat s větším nadhledem, méně impulzivních reakcí a zbytečných konfliktů.",
  },
  {
    bold: "Prevence vyhoření:",
    rest: " schopnost včas rozpoznat přetížení a doplnění energie dřív, než dojde k úplnému vyčerpání.",
  },
  {
    bold: "Větší kreativita a lepší rozhodování:",
    rest: " klidnější mysl dokáže vidět souvislosti, hledat řešení a nezaseknout se pod tlakem.",
  },
]

const investmentRight: React.ReactNode[] = [
  "Z přetížených lidí se stane tým, který zvládá nápor, tlak a drží dlouhodobě stabilní výkon.",
  <>
    Místo emočních výkyvů přijde{" "}
    <strong className="font-semibold text-[#2D2C2B]">stabilita a větší schopnost procházet náročnými situacemi </strong>
    s klidem a nadhledem.
  </>,
  "Otevřenější komunikace a zdravější spolupráce nahradí častá nedorozumění v týmech.",
  <>
    Místo vyčerpaných a vyhořelých zaměstnanců{" "}
    <strong className="font-semibold text-[#2D2C2B]">angažovanější lidé, kteří mají energii, chuť </strong>
    i motivaci do práce.
  </>,
]

const programs = [
  {
    image: "/Pictures/Company Courses/BeMindful_Applifting2026Annaśolcov†.1.jpg",
    label: "1–2h workshop",
    title: "Rychlý restart mysli: Ochutnávka mindfulness v pracovním životě",
    desc: "Seznamte se se základními principy mindfulness i tím, co se děje v hlavě ve chvílích stresu. To vše podle nejnovějších poznatků neurovědy. Vyzkoušíte si techniky pro rychlejší zklidnění i uprostřed náročného dne a vědomější práci s vlastními reakcemi. Nečekejte zázraky, ale solidní základ, na kterém se dá stavět.",
  },
  {
    image: "/Pictures/Company Courses/Portrety_BeMindful2026AnnaSolcova.5.jpg",
    label: "Celodenní kurz mindfulness",
    title: "Mozek pod tlakem: Jak získat klid a nadhled s mindfulness",
    desc: "Jak mozek reaguje na stres a proč občas sabotuje náš výkon? Osvojíte si techniky na rychlé zklidnění, lepší soustředění a snížení stresu. Odnesete si nástroje, jak zvládat náročné situace s nadhledem. Podloženo vědou, použitelné ihned.",
  },
  {
    image: "/Pictures/Company Courses/BeMindful_Applifting2026Annaśolcov†.45.jpg",
    label: "Několikatýdenní kurz",
    title: "Od multitaskingu k flow: Pro hlubší soustředění a klid",
    desc: "Dlouhodobý program s pravidelnou mindfulness praxí, ve kterém si lidé osvojí konkrétní techniky na soustředění, zvládání stresu i komunikaci pod tlakem. Z mindfulness se stane návyk, ne jednorázový zážitek. Změnu poznáte i na každodenním fungování celého týmu.",
  },
  {
    image: "/Pictures/Company Courses/BeMindful_Applifting2026Annaśolcov†.128.jpg",
    label: "Aplikace be.mindful",
    title: "Mindfulness v kapse: klid a soustředění na pár kliků",
    desc: "Přístup pro celý tým do aplikace be.mindful s knihovnou videolekcí, audiomeditací a tematických kurzů. Stačí 10 minut denně a lidé si krok za krokem osvojí základy mindfulness. Součástí jsou i pravidelná online setkání – vedené mindfulness praxe a prostor pro otázky, sdílení i podporu.",
  },
]

export default function FirmyPage() {
  return (
    <main className="min-h-screen font-sans">
      <Header />

      {/* Hero */}
      <section className="relative min-h-[500px] overflow-hidden bg-[#1A1A1A] lg:min-h-[580px]">
        <Image
          src="/Theme_Companies.jpg"
          alt="Mindfulness pro firmy"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-10 mx-auto flex min-h-[500px] max-w-7xl items-center px-6 py-20 lg:min-h-[580px] lg:px-8 lg:py-28">
          <div className="max-w-xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-[#E58C34]">Pomozte svým lidem k větší odolnosti</p>
            <h1 className="mt-2 text-[28px] font-bold leading-[38px] text-white sm:text-5xl lg:text-[64px] lg:leading-[1.1]">
              Tlak z práce nezmizí. Způsob, jak ho zvládat, se ale změnit dá. Vybudujte odolnější týmy a prostředí, kde výkon nestojí na dlouhodobém vyčerpání.
            </h1>
            <p className="mt-4 text-[18px] leading-[30px] text-white/85">
              Lidé, kteří zvládají tlak, jsou silnějšími leadery, spolupracují bez tření a podávají výkon – i v těžších chvílích.
            </p>
            <div className="mt-8">
              <Button asChild variant="primary-orange" className="group">
                <Link href="/kontakt">
                  <span className="flex items-center gap-2">Zobrazit kurzy <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" /></span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-[#F5F6F7] py-16 lg:py-24">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <h2 className="text-[28px] font-bold leading-[38px] text-[#2D2C2B]">
            Schopnost zastavit se je dnes stejně důležitá jako odbornost
          </h2>
          <p className="mt-6 text-[18px] leading-[30px] text-[#4B4C4D]">
            Zahlcení ukrajuje z produktivity. Chronický stres končí vyhořením. Mindfulness dává vašim lidem moment navíc, mezi tím, co se stane, a tím, jak zareagují. A to se násobí přes celý tým: klidnější komunikací, větším nadhledem a lepší spoluprací.
          </p>
          <p className="mt-4 text-[18px] leading-[30px] text-[#4B4C4D]">
            Pomáhám firmám zavádět programy, díky kterým jejich lidé zvládají stres, udrží soustředění a najdou rovnováhu i v náročném pracovním prostředí.
          </p>
        </div>
      </section>

      {/* Client logos */}
      <section className="bg-white py-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="mb-6 text-center text-[18px] leading-[30px] text-[#4B4C4D]">
            ČEZ skupina · Europool · Kooperativa · Mibcon · Raiffeisen Bank · Česká spořitelna
          </p>
          <div className="-mx-6 flex items-center gap-x-8 overflow-x-auto px-6 sm:mx-0 sm:flex-wrap sm:justify-center sm:gap-x-10 sm:gap-y-6 sm:overflow-visible sm:px-0">
            {clientLogos.map((logo) => (
              <div
                key={logo.alt}
                className="relative flex h-16 w-28 shrink-0 items-center justify-center sm:w-32"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  fill
                  sizes="128px"
                  className="object-contain opacity-70 grayscale transition hover:opacity-100 hover:grayscale-0"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Teacher video */}
      <section className="bg-[#F5F6F7] py-16 lg:py-24">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-[#7BC0A4]">Mindfulness, které přirozeně zapadne do vašeho pracovního tempa</p>
            <h2 className="mx-auto mt-4 max-w-2xl text-[28px] font-bold leading-[38px] text-[#2D2C2B]">
              Přetížení zaměstnanci stojí firmu víc než špatné procesy. Změňte to<br /><span className="text-[18px] font-medium leading-[30px]">Michal Dvořák, Senior Mindfulness Teacher</span>
            </h2>
          </div>
          <TrailerEmbed
            videoSrc="/trailers/firmy.mp4"
            poster="/trailers/cover-firmy.jpg"
            alt="Michal Dvořák – Senior Mindfulness Teacher"
            className="mt-10"
          />
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-[28px] font-bold leading-[38px] text-[#2D2C2B]">
            Deadline o hodinu neposunete. Ale to, jak na něj vaši lidé zareagují, ano
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
                src="/Pictures/Company Courses/BeMindful_Applifting2026Annaśolcov†.100.jpg"
                alt="Skupinová mindfulness lekce"
                fill
                className="object-cover object-top"
              />
            </div>
          </div>
          <div className="mt-12 text-center">
            <Button asChild variant="primary">
              <Link href="/kontakt">Kontaktujte nás</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Pause section */}
      <section className="bg-[#C0D1C6] py-16 lg:py-24">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <div className="mx-auto mb-6 flex justify-center">
            <ScrollAnimatedIllustration
              outline={{ src: "/Illustrations/speech_00.svg" }}
              viewBox="0 0 170.08 170.08"
              dots={[
                {
                  from: { cx: 53.62, cy: 74.43, r: 2.78 },
                  to: { cx: 30.62, cy: 73.43, r: 2.78 },
                },
                {
                  from: { cx: 53.57, cy: 88.44, r: 2.78 },
                  to: { cx: 30.57, cy: 88.44, r: 2.78 },
                },
              ]}
              width={320}
              height={320}
            />
          </div>
          <h2 className="text-[28px] font-bold leading-[38px] text-[#2D2C2B]">
            Pauza není opak výkonu, je jeho součástí
          </h2>
          <p className="mt-6 text-[18px] leading-[30px] text-[#2D2C2B]/80">
            Méně impulzivních reakcí, více soustředění a větší odolnost vůči stresu. Praktické techniky pro každodenní pracovní realitu, které se dají zvládnout za pár minut.
          </p>
        </div>
      </section>

      {/* Investment */}
      <section className="bg-[#F5F6F7] py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-[28px] font-bold leading-[38px] text-[#2D2C2B]">
            Investice, která se vám vrátí
          </h2>
          <div className="mt-12 flex flex-col gap-12 lg:flex-row lg:items-start lg:gap-16">
            <div className="lg:w-2/5">
              <p className="text-[18px] leading-[30px] text-[#4B4C4D]">
                Mindfulness ve firmě není „další“ workshop, na který se do týdne zapomene. Je to změna toho, jak lidé pracují, komunikují a zvládají tlak.
              </p>
            </div>
            <div className="flex flex-col gap-4 lg:w-3/5">
              {investmentRight.map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <img src="/tic.png" alt="" className="h-10 w-10 shrink-0" />
                  <p className="text-[18px] leading-[30px] text-[#4B4C4D]">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-center text-sm font-semibold uppercase tracking-wider text-[#7BC0A4]">MINDFULNESS PROGRAMY NA MÍRU</p>
          <h2 className="mt-2 text-center text-[28px] font-bold leading-[38px] text-[#2D2C2B]">Nabídka programů pro firmy</h2>
          <p className="mx-auto mt-3 max-w-3xl text-center text-[18px] leading-[30px] text-[#4B4C4D]">
            Odolnost se dnes cení stejně jako odbornost. Proto programy stavíme na míru a propojujeme v nich teorii s praxí. Aby vaši lidé věděli nejen co dělat, ale kdy a proč to v běžném dni i při práci použít.
          </p>
          <div className="mt-12 flex flex-col gap-12">
            {programs.map((p, i) => (
              <div key={i} className="overflow-hidden rounded-[1rem] bg-[#f5f6f4]">
                <div className={`flex flex-col ${i % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"}`}>
                  <div className="relative h-64 lg:h-auto lg:w-1/2">
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-col p-8 lg:w-1/2 lg:p-14">
                    <p className="text-sm font-bold uppercase tracking-[0.15em] text-[#7BC0A4]">{p.label}</p>
                    <h3 className="mt-4 text-[24px] font-bold leading-[34px] text-[#2D2C2B]">{p.title}</h3>
                    <p className="mt-4 text-[18px] leading-[30px] text-[#4B4C4D]">{p.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#7BC0A4] py-16 lg:py-24">
        <div className="mx-auto max-w-2xl px-6 text-center lg:px-8">
          <h2 className="text-[28px] font-bold leading-[38px] text-white">První krok k odolnějšímu týmu začíná zde</h2>
          <p className="mt-4 text-[18px] leading-[30px] text-white/80">
            V be.mindful vám připravíme program na míru. Stačí vyplnit krátký dotazník.
          </p>
          <div className="mt-8">
            <Button asChild variant="secondary" className="group">
              <Link href="/kontakt">
                <span className="flex items-center gap-2">Kontaktujte nás <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" /></span>
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About teacher */}
      <section className="bg-[#C0D1C6] py-16 lg:py-24">
        <div className="mx-auto flex max-w-7xl flex-col gap-12 px-6 lg:flex-row lg:items-center lg:gap-16 lg:px-8">
          <div className="lg:w-1/2">
            <h2 className="text-[28px] font-bold leading-[38px] text-[#2D2C2B]">
              Těší mě, jsem Michal Dvořák, zakladatel be.mindful
            </h2>
            <div className="mt-8 space-y-4">
              <p className="text-[18px] leading-[30px] text-[#2D2C2B]/80">
                Jsem jediný Senior Mindfulness Teacher v ČR, s výcvikem z UMASS Medical School a Brown University. Mindfulness učím od roku 2018, mám za sebou pětiletý psychoterapeutický výcvik v systému SUR a mými kurzy prošlo přes 3 000 lidí.
              </p>
              <p className="text-[18px] leading-[30px] text-[#2D2C2B]/80">
                Nejsem žádný guru. Jsem manžel, táta a člověk, který má také špatné dny, jen ví, jak s nimi pracovat. Mindfulness učím tak, aby ho lidé opravdu dokázali použít. Ne jako hezkou teorii, ale jako něco, co funguje i po pondělní poradě.
              </p>
            </div>
          </div>
          <div className="relative aspect-[6/5] w-full overflow-hidden rounded-2xl lg:w-1/2">
            <Image
              src="/Pictures/Company Courses/BeMindful_Letn†2026AnnaÊolcov†.98.jpg"
              alt="Michal Dvořák"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
