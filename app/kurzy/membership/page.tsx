import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { TrailerEmbed } from "@/components/trailer-embed"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { StatsBar } from "@/components/stats-bar"
import { ScrollAnimatedIllustration } from "@/components/scroll-animated-illustration"

const benefits: Array<{ bold?: string; rest: string }> = [
  {
    rest: "Co netrénuješ, ochabne. Posiluj svůj mindfulness sval pro větší životní rovnováhu",
  },
  {
    bold: "Návyk, který vydrží i podrží:",
    rest: " vytvoříš si zvyk, ke kterému se budeš bez přemáhání vracet. Podrží tě i ve dnech, kdy se ti zrovna nebude chtít do meditace.",
  },
  {
    bold: "Pořád něco nového:",
    rest: " nové techniky, nová témata, nový obsah. Tvůj rozvoj se nezastaví na jednom místě a i po měsících tě bude pořád bavit.",
  },
  {
    bold: "Víc klidu v situacích, které tě dřív rozhodily:",
    rest: " naučíš se zacházet s emocemi a stresem s větším nadhledem a laskavostí. Náročné chvíle začneš zvládat s větším nadhledem.",
  },
  {
    bold: "Přítomnost, která vydrží nápor, méně bloudění v myšlenkách:",
    rest: " naučíš se zůstat dlouhodobě v klidu a vnímat, co se děje tady a teď, i ve chvílích, které by tě dřív rozhodily.",
  },
  {
    bold: "Postoje, které mění všechno:",
    rest: " změníš to, jak vnímáš sebe, druhé i svět kolem. Rozvineš laskavost, zvídavost, důvěru, nehodnocení a postupně i další mindfulness postoje.",
  },
  {
    bold: "Lidé, kteří to mají podobně:",
    rest: " staneš se součástí komunity, která pomáhá a nehodnotí. Získáš motivaci, když polevuješ, inspiraci, když nevíš kudy dál, a třeba i pár nových přátelství.",
  },
]

const includes = [
  {
    image: "/Theme_Foundations.jpg",
    title: "be.mindful FOUNDATIONS",
    desc: "Základ, ke kterému se můžeš vracet. 30 videolekcí a audionahrávek pro chvíle, kdy si potřebuješ znovu připomenout to nejdůležitější z mindfulness nebo jít víc do hloubky.",
  },
  {
    image: "/Pictures/be.mindful MEMBERSHIP/Portrety_BeMindful2026AnnaSolcova.40.jpg",
    title: "be.mindful LIBRARY",
    desc: "Když si nevíš rady nebo hledáš inspiraci, máš kam sáhnout. Články, tipy a praktické rady pro všímavější dny a klidnější život. Všechno o mindfulness na jednom místě.",
  },
  {
    image: "/Pictures/be.mindful MEMBERSHIP/BeMindful_Applifting2026Annaśolcov†.6.jpg",
    title: "be.mindful COMMUNITY",
    desc: "Ve dvou se to lépe táhne, a co teprve v partě lidí, kteří řeší to co ty? Můžeš si sem přijít pro inspiraci i podporu, když tě bude opouštět motivace a měl/a bys chuť to vzdát.",
  },
  {
    image: "/Pictures/be.mindful MEMBERSHIP/_DSC7734.jpg",
    title: "Pravidelné meditace a Q&A naživo (online)",
    desc: "Nebudeš na to sám/sama. Každý měsíc tě čekají dvě vedené meditace s Michalem a jedno Q&A setkání pro otázky z praxe.",
  },
  {
    image: "/Mockup photos/Na bílém pozadí/nove_online.jpg",
    title: "be.mindful videokurzy – mindfulness pro reálný život",
    desc: "Tematické videokurzy pro situace, které právě řešíš: zdravější vztah k jídlu, omezení digitálního zahlcení, práci s emocemi i to, jak to nevzdat, když se ti zdá, že ti meditace zrovna nejde.",
  },
  {
    image: "/Pictures/be.mindful MEMBERSHIP/Portrety_BeMindful2026AnnaSolcova.36.jpg",
    title: "Audionahrávky cvičení mindfulness",
    desc: "Najdeš tu nahrávky na všechno, co zrovna řešíš – soustředění, stres, spánek i rozvoj všímavosti. A pořád přibývají.",
  },
]

const testimonials = [
  {
    quote: "Pomohl mi začít přepínat z autopilota zpět na vědomé řízení.",
    name: "Eva Procházková",
    text: "Dřív jsem měla pocit, že se jen vezu – práce, povinnosti, stres, hlava plná myšlenek. Všechno jelo samo a já s tím. Teprve díky kurzu mindfulness jsem se naučila, jak můžu zpomalit, nadechnout se a začít se znovu vědomě rozhodovat, jak chci reagovat.",
  },
  {
    quote: "Vnímám dění v sobě i kolem sebe – bez hodnocení.",
    name: "Lukáš Beneš",
    text: "Už se tolik neztotožňuji s tím, co se mi honí hlavou. Víc vnímám dění v sobě i kolem sebe, bez hodnocení. To mi dává víc prostoru reagovat s klidem a nadhledem.",
  },
  {
    quote: "Jsem v lepším kontaktu sama se sebou.",
    name: "Barbora Marešová",
    text: "Díky mindfulness se mi daří být v lepším kontaktu sama se sebou, a tím i s klienty.",
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
              Tvůj každodenní prostor k zastavení. Pro rovnováhu, kterou neztratíš ani v náročných dnech.
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
            Výzvy tu budou vždycky.<br />Mindfulness ti pomůže zvládat je s nadhledem
          </h2>
          <p className="mt-6 text-[18px] leading-[30px] text-[#4B4C4D]">
            Pár týdnů to jde samo. Pak přijde náročný měsíc a první, co odpadne, je čas pro sebe. Znáš to. Membership je tu proto, aby tvá praxe nevyšuměla ve chvíli, kdy ji potřebuješ nejvíc, a aby tvá schopnost zastavit se nevyprchala s počátečním nadšením.
          </p>
        </div>
      </section>

      {/* Teacher video */}
      <section className="bg-[#F5F6F7] py-16 lg:py-24">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-[#7BC0A4]">Mindfulness, které zapadne do tvého života</p>
            <h2 className="mx-auto mt-4 max-w-2xl text-[28px] font-bold leading-[38px] text-[#2D2C2B]">
              Víš, co rozhoduje o tom, jestli ti mindfulness bude fungovat i za půl roku?<br /><span className="text-[18px] font-medium leading-[30px]">Michal Dvořák, Senior Mindfulness Teacher</span>
            </h2>
          </div>
          <TrailerEmbed
            videoSrc="/trailers/membership.mp4"
            poster="/trailers/cover-membership.jpg"
            alt="Michal Dvořák – Senior Mindfulness Teacher"
            className="mt-10"
          />
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
            Každodenní zastavení pro větší rovnováhu
          </h2>
          <p className="mt-6 text-[18px] leading-[30px] text-[#2D2C2B]/80">
            Praktická cvičení, podpora a inspirace, díky kterým mindfulness zůstane součástí tvého života.
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
          <p className="text-center text-sm font-semibold uppercase tracking-wider text-[#7BC0A4]">Co tě čeká během 12 měsíců?</p>
          <h2 className="mt-2 text-center text-[28px] font-bold leading-[38px] text-[#2D2C2B]">
            be.mindful MEMBERSHIP<br />Mindfulness s živou podporou pro reálný život.
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
            <h2 className="text-[28px] font-bold leading-[38px] text-white">Malé kroky každý den. Změny, které překvapí</h2>
            <p className="mx-auto mt-4 max-w-xl text-[18px] leading-[30px] text-white/80">
              Víc klidu, stability a opory bez ohledu na to, co den přinese.
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
