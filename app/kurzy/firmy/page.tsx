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
    bold: "Odolnost vůči stresu a negativním emocím:",
    rest: " méně zahlcení, rychlejší návrat ke klidu po náročných situacích.",
  },
  {
    bold: "Méně přetížení:",
    rest: " zklidníte hlavu od myšlenek, lepší regenerace a méně příznaků chronického stresu.",
  },
  {
    bold: "Soustředění a produktivita:",
    rest: " méně roztěkanosti, více hluboké práce.",
  },
  {
    bold: "Lepší komunikace:",
    rest: " více naslouchání, méně automatických reakcí v konfliktu.",
  },
  {
    bold: "Prevence vyhoření:",
    rest: " včasné rozpoznání přetížení a schopnost dobíjet se dřív, než dojde energie.",
  },
  {
    bold: "Kreativita a schopnost řešit problémy:",
    rest: " klidnější mysl vidí jasněji a nachází řešení tam, kde zahlcená mysl vidí slepou uličku.",
  },
]

const investmentRight = [
  "Od přetížených lidí k větší odolnosti vůči stresu a dlouhodobě stabilnějšímu výkonu.",
  "Od emočních výkyvů k větší stabilitě – zvládání náročných situací s klidem a nadhledem.",
  "Od nedorozumění v týmech k otevřenější komunikaci a zdravější spolupráci.",
  "Od vyčerpání a vyhoření k lidem, kteří mají energii, jsou angažovanější a motivaci.",
]

const programs = [
  {
    image: "/Pictures/Company Courses/BeMindful_Applifting2026Annaśolcov†.1.jpg",
    label: "1–2h workshop",
    title: "Rychlý restart mysli: Ochutnávka mindfulness v pracovním životě",
    desc: "Seznámíte se se základními principy mindfulness a nejnovějšími poznatky neurovědy. Získáte jasnější pohled na to, co se děje ve vaší hlavě ve chvílích stresu a zahlcení. Vyzkoušíte si techniky pro rychlejší zklidnění i uprostřed náročného dne a pro vědomější práci s vlastními reakcemi. Nečekejte zázraky, ale solidní základ, na kterém můžete dál stavět.",
  },
  {
    image: "/Pictures/Company Courses/Portrety_BeMindful2026AnnaSolcova.5.jpg",
    label: "Celodenní kurz mindfulness",
    title: "Mozek pod tlakem: Jak získat klid a nadhled s mindfulness",
    desc: "Zjistíte, jak mozek reaguje na stres a proč občas sabotuje náš výkon. Naučíte se techniky pro rychlé zklidnění, lepší soustředění a snížení stresu. Odnesete si nástroje pro lepší zvládání náročných situací s nadhledem. Podloženo vědou, použitelné ihned.",
  },
  {
    image: "/Pictures/Company Courses/BeMindful_Applifting2026Annaśolcov†.45.jpg",
    label: "Vícetýdenní kurz mindfulness",
    title: "Od multitaskingu k flow: Pro hlubší soustředění a klid",
    desc: "Vícetýdenní program s pravidelnou praxí, ve kterém si lidé osvojí konkrétní techniky pro hlubší soustředění, zvládání stresu i komunikaci pod tlakem. Mindfulness se stane návykem, ne jednorázovým zážitkem – a změnu jde poznat v každodenním fungování týmu.",
  },
  {
    image: "/Pictures/Company Courses/BeMindful_Applifting2026Annaśolcov†.128.jpg",
    label: "Aplikace be.mindful",
    title: "Mindfulness v kapse: Pro lepší soustředění a klid",
    desc: "Přístup pro celý tým do aplikace be.mindful s knihovnou videolekcí, audiomeditací a tematických kurzů. 10 minut denně stačí, aby si lidé krok za krokem osvojili základy mindfulness a dál v nich pokračovali ve vlastním tempu.",
  },
]

const teacherPoints = [
  { bold: "Nejvyšší kvalifikace:", rest: " jediný držitel mezinárodního titulu Senior Mindfulness Teacher v ČR." },
  { bold: "Mezinárodní know-how:", rest: " výcvik z UMASS Medical School a Brown University, kde mindfulness vzniklo." },
  { bold: "Pětiletý psychoterapeutický výcvik:", rest: " v systému SUR jako doplněk mindfulness." },
  { bold: "Praktický a lidský přístup:", rest: " hledání řešení na míru, s humorem, laskavě a důsledně." },
  { bold: "Různé úrovně kurzů:", rest: " od workshopů po dlouhodobé programy, online i offline." },
  { bold: "Od roku 2018 učí mindfulness na plný úvazek,", rest: " s tisíci absolventy." },
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
            <p className="text-sm font-semibold uppercase tracking-wider text-[#E58C34]">Firemní programy</p>
            <h1 className="mt-2 text-[28px] font-bold leading-[38px] text-white sm:text-5xl lg:text-[64px] lg:leading-[1.1]">
              Od stresu k odolnosti vašich lidí.
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
            V době neustálého tlaku je schopnost zastavit se klíčová dovednost.
          </h2>
          <p className="mt-6 text-[18px] leading-[30px] text-[#4B4C4D]">
            Zahlcení snižuje produktivitu. Chronický stres způsobuje vyhoření. Mindfulness dává lidem moment navíc – mezi tím, co se stane, a tím, jak zareagují. To se projeví v celém týmu. Klidnější hlava, větší nadhled, lepší spolupráce.
          </p>
          <p className="mt-4 text-[18px] leading-[30px] text-[#4B4C4D]">
            Firmám pomáhám zavádět programy, které jejich lidem pomáhají zvládat stres, udržet soustředění a zachovat vnitřní rovnováhu – i v náročném pracovním prostředí.
          </p>
        </div>
      </section>

      {/* Client logos */}
      <section className="bg-white py-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
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
            <p className="text-sm font-semibold uppercase tracking-wider text-[#7BC0A4]">Mindfulness přirozeně zapadne do vašeho pracovního života.</p>
            <h2 className="mx-auto mt-4 max-w-2xl text-[28px] font-bold leading-[38px] text-[#2D2C2B]">
              Učím lidi, jak se neztratit ve stresu, změnách a tlaku – prakticky a lidsky. Mindfulness, které funguje v reálném životě.<br /><span className="text-[18px] font-medium leading-[30px]">Michal Dvořák, Senior Mindfulness Teacher.</span>
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
            Deadline nepůjde o hodinu zpozdit.<br />Ale reakce vašich lidí se změnit dá.
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
            Pauza neznamená zpomalit výkon
          </h2>
          <p className="mt-6 text-[18px] leading-[30px] text-[#2D2C2B]/80">
            Nadhled, promyšlenější reakce na stres a tlak – a schopnost pracovat s tím, co se děje uvnitř. Naučíte se praktické techniky, které zvládnete za několik minut kdekoliv a kdykoliv.
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
                Mindfulness ve firmě není „další“ workshop. Je to změna způsobu, jak lidé pracují, komunikují a zvládají tlak.
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
          <p className="text-center text-sm font-semibold uppercase tracking-wider text-[#7BC0A4]">Mindfulness programy na míru</p>
          <h2 className="mt-2 text-center text-[28px] font-bold leading-[38px] text-[#2D2C2B]">Nabídka programů</h2>
          <p className="mx-auto mt-3 max-w-3xl text-center text-[18px] leading-[30px] text-[#4B4C4D]">
            V době neustálého tlaku, změn a nejistoty je odolnost klíčovou dovedností. Programy proto vytváříme na míru a propojujeme v nich teorii s praktickými cvičeními, abyste věděli, jak, kdy a proč je využít v každodenním životě i práci.
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
          <h2 className="text-[28px] font-bold leading-[38px] text-white">Požádejte o nabídku</h2>
          <p className="mt-4 text-[18px] leading-[30px] text-white/80">
            Vyplňte dotazník a my vám připravíme řešení na míru potřebám vaší firmy.
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
              Ahoj, jsem Michal Dvořák,<br />zakladatel be.mindful
            </h2>
            <div className="mt-8 space-y-4">
              {teacherPoints.map((p, i) => (
                <p key={i} className="text-[18px] leading-[30px] text-[#2D2C2B]/80">
                  <strong className="font-bold text-[#2D2C2B]">{p.bold}</strong>
                  {p.rest}
                </p>
              ))}
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
