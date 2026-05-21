import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { StatsBar } from "@/components/stats-bar"
import { ScrollAnimatedIllustration } from "@/components/scroll-animated-illustration"

const benefits: Array<{ bold?: string; rest: string }> = [
  {
    rest: "Posílíš svůj mindfulness sval a udržíš ho živý – v klidných i náročných dnech.",
  },
  {
    bold: "Zdravý návyk:",
    rest: " tvůj mindfulness sval se bude dál rozvíjet a nezakrní. Vytvoříš si pravidelnost a návyk, který tě podrží v klidných i náročných dnech.",
  },
  {
    bold: "Pravidelnost bez přemáhání:",
    rest: " návyk, který tě podrží i v těžkých chvílích. Nové techniky, nová témata, nový obsah. Rozvoj, který se nezastaví.",
  },
  {
    bold: "Posílíš odolnost:",
    rest: " naučíš se přistupovat k emocím s větším klidem, laskavostí a soucitem.",
  },
  {
    bold: "Posílíš schopnost být tady a teď",
    rest: " – základ pro naplněný život i dlouhodobou odolnost.",
  },
  {
    bold: "Rozvineš mindfulness postoje,",
    rest: " které mění všechno – jak vnímáš sebe, druhé i svět kolem tebe. Laskavost, zvídavost, důvěra, nehodnocení – a postupně i další.",
  },
  {
    bold: "Staneš se součástí podpůrné komunity",
    rest: " bez hodnocení. Motivace, inspirace, přátelství.",
  },
]

const includes = [
  {
    image: "/Theme_Foundations.jpg",
    title: "be.mindful FOUNDATIONS",
    desc: "Kdykoli potřebuješ základ nebo chceš jít víc do hloubky. 30 videolekcí a audionahrávek, ke kterým se můžeš vracet vlastním tempem.",
  },
  {
    image: "/Pictures/be.mindful MEMBERSHIP/Portrety_BeMindful2026AnnaSolcova.40.jpg",
    title: "be.mindful LIBRARY",
    desc: "Vše, co chceš vědět o mindfulness – na jednom místě. Články, tipy a inspirace pro klidnější každodenní život.",
  },
  {
    image: "/Pictures/be.mindful MEMBERSHIP/BeMindful_Applifting2026Annaśolcov†.6.jpg",
    title: "be.mindful COMMUNITY",
    desc: "Staneš se součástí skupiny lidí, kteří řeší podobné věci jako ty – od stresu a přetížení až po hledání větší rovnováhy. Najdeš tu podporu, inspiraci i motivaci nepřestat.",
  },
  {
    image: "/Pictures/be.mindful MEMBERSHIP/_DSC7734.jpg",
    title: "Pravidelné meditace a Q&A naživo (online)",
    desc: "Každý týden se potkáme online – jeden týden vedená meditace s Michalem, druhý týden Q&A, kde se ptáš na cokoliv, co právě řešíš.",
  },
  {
    image: "/Mockup photos/Na bílém pozadí/nove_online.jpg",
    title: "be.mindful videokurzy – mindfulness pro reálný život",
    desc: "Čekají tu na tebe tematické videokurzy zaměřené na mindfulness v každodenním životě – od Mindful eating pro zdravější vztah k jídlu přes Digitální svobodu pro vědomější práci s technologiemi až po kurzy zaměřené na práci s emocemi, překážky při meditaci, mindfulness postoje nebo rozvoj laskavosti.",
  },
  {
    image: "/Pictures/be.mindful MEMBERSHIP/Portrety_BeMindful2026AnnaSolcova.36.jpg",
    title: "Audionahrávky cvičení mindfulness",
    desc: "Najdeš tu stále rostoucí databázi nahrávek zaměřených na soustředění, zvládání stresu, kvalitnější spánek i rozvoj všímavosti.",
  },
]

const testimonials = [
  {
    quote: "Pomohl mi začít přepínat z autopilota zpět na vědomé řízení.",
    name: "Běla Nedvědová",
    text: "Dřív jsem měla pocit, že se jen vezu – práce, povinnosti, stres, hlava plná myšlenek. Všechno jelo samo a já s tím. Teprve díky kurzu mindfulness jsem se naučila, jak můžu zpomalit, nadechnout se a začít znovu vědomě rozhodovat, jak chci reagovat.",
  },
  {
    quote: "Vnímám dění v sobě i kolem sebe – bez hodnocení.",
    name: "Martina Junková",
    text: "Už se tolik neztotožňuji s tím, co se mi honí v hlavě. Víc vnímám dění v sobě i kolem sebe, bez hodnocení. To mi dává víc prostoru reagovat s klidem a nadhledem.",
  },
  {
    quote: "Jsem v lepším kontaktu sama se sebou.",
    name: "Jitka Selingerová",
    text: "Díky mindfulness se mi daří být v lepším kontaktu sama se sebou a tím i s klienty.",
  },
]

export default function MembershipPage() {
  return (
    <main className="min-h-screen font-sans">
      <Header />

      {/* Hero */}
      <section className="relative min-h-[500px] overflow-hidden bg-[#1A1A1A] lg:min-h-[580px]">
        <Image
          src="/Pictures/be.mindful MEMBERSHIP/Header_membership.jpg"
          alt="be.mindful Membership"
          fill
          className="object-cover object-[75%_center] lg:object-center"
          priority
        />
        <div className="relative z-10 mx-auto flex min-h-[500px] max-w-7xl items-center px-6 py-20 lg:min-h-[580px] lg:px-8 lg:py-28">
          <div className="max-w-xl">
            <h1 className="text-[28px] font-bold leading-[38px] text-white sm:text-5xl lg:text-[64px] lg:leading-[1.1]">
              be.mindful<br />MEMBERSHIP
            </h1>
            <p className="mt-4 text-[18px] leading-[30px] text-white/80">
              Tvůj každodenní prostor k zastavení. Rovnováha, kterou si pěstuješ – den po dni.
            </p>
            <div className="mt-8">
              <Button asChild variant="primary-orange" className="group">
                <Link href="/objednavka/membership">
                  <span className="flex items-center gap-2">Chci být součástí <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" /></span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-2xl px-6 text-center lg:px-8">
          <h2 className="text-[28px] font-bold leading-[38px] text-[#2D2C2B]">
            Výzvy nepřestanou přicházet.<br />Pravidelná praxe ti pomůže je zvládat jinak.
          </h2>
          <p className="mt-6 text-[18px] leading-[30px] text-[#4B4C4D]">
            Život se skládá z okamžiků. Většinu z nich ale přehlédneme – jsme příliš zaneprázdnění, abychom je vůbec zaregistrovali. Schopnost zastavit se to mění. A Membership tě v tom podrží každý den.
          </p>
        </div>
      </section>

      {/* Teacher video */}
      <section className="bg-[#F5F6F7] py-16 lg:py-24">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-[#7BC0A4]">Mindfulness, který zapadne do tvého života</p>
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
            Posílíš svůj mindfulness sval<br />a udržíš ho živý
          </h2>
          <div className="mt-12 flex flex-col gap-12 lg:flex-row lg:items-center">
            <div className="flex flex-col gap-5 lg:w-1/2">
              {benefits.map((b, i) => (
                <div key={i} className="flex items-start gap-4">
                  <img src="/tic.png" alt="" className="h-10 w-10 shrink-0" />
                  <p className="text-[18px] leading-[30px] text-[#4B4C4D]">
                    {b.bold ? <strong className="font-semibold text-[#2D2C2B]">{b.bold}</strong> : null}
                    {b.rest}
                  </p>
                </div>
              ))}
            </div>
            <div className="relative aspect-[6/5] w-full overflow-hidden rounded-2xl lg:w-1/2">
              <Image
                src="/Mockup photos/Na bílém pozadí/nove_online.jpg"
                alt="be.mindful member watching session on laptop"
                fill
                className="object-cover object-center"
              />
            </div>
          </div>
          <div className="mt-12 text-center">
            <Button asChild variant="primary">
              <Link href="/objednavka/membership">Staň se členem</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Research / SVG section */}
      <section className="bg-[#C0D1C6] py-16 lg:py-24">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <div className="mx-auto mb-6 flex justify-center">
            <ScrollAnimatedIllustration
              outline={{ src: "/Illustrations/shapes_00.svg" }}
              viewBox="0 0 170.08 170.08"
              dots={[
                {
                  from: { cx: 94.73, cy: 120.6, r: 5.62 },
                  to: { cx: 47.06, cy: 46.98, r: 7.11 },
                },
              ]}
              width={320}
              height={320}
            />
          </div>
          <h2 className="text-[28px] font-bold leading-[38px] text-[#2D2C2B]">
            Rovnováha se tvoří z okamžiků.
          </h2>
          <p className="mt-6 text-[18px] leading-[30px] text-[#2D2C2B]/80">
            Tady je vše, co tě v každodenní praxi podrží. Podpora. Inspirace. Praktická cvičení.
          </p>
        </div>
      </section>

      {/* Stats */}
      <StatsBar
        stats={[
          { num: "200+", label: "Videolekcí" },
          { num: "120", label: "Audionahrávek" },
          { num: "50 h", label: "Materiálu" },
        ]}
      />

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

      {/* What you get */}
      <section className="bg-white pb-16 pt-4 lg:pb-24 lg:pt-8">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-center text-sm font-semibold uppercase tracking-wider text-[#7BC0A4]">Mindfulness pro reálný život</p>
          <h2 className="mt-2 text-center text-[28px] font-bold leading-[38px] text-[#2D2C2B]">
            be.mindful MEMBERSHIP<br />Vše, co dostaneš na 12 měsíců
          </h2>
          <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-3">
            {includes.map((item, i) => (
              <div key={i} className="overflow-hidden rounded-2xl bg-[#F5F6F4]">
                <div className="h-48 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={400}
                    height={200}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold leading-snug text-[#2D2C2B]">{item.title}</h3>
                  <p className="mt-2 text-[18px] leading-[30px] text-[#4B4C4D]">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button asChild variant="primary" className="group">
              <Link href="/objednavka/membership">
                <span className="flex items-center gap-2">Staň se členem <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" /></span>
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-[#7BC0A4] py-14">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-[28px] font-bold leading-[38px] text-white">Malé kroky. Každý den. Větší změna, než čekáš.</h2>
            <p className="mx-auto mt-4 max-w-xl text-[18px] leading-[30px] text-white/80">
              Větší klid, stabilita a opora – bez ohledu na to, jaký den tě čeká.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-[28px] font-bold leading-[38px] text-[#2D2C2B]">Ohlasy absolventů</h2>
          <div className="mx-auto mt-10 grid max-w-5xl gap-6 md:grid-cols-3">
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

      <Footer />
    </main>
  )
}
