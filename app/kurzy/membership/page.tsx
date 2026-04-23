import Image from "next/image"
import { ArrowRight, Check, Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { NewsletterSection } from "@/components/newsletter-section"
import { Footer } from "@/components/footer"

const benefits = [
  { bold: "Vytvoříte si silný vnitřní kompas,", rest: " který vám pomůže rozhodovat se pod tlakem a vědět, jak reagovat v náročných situacích." },
  { bold: "Zlepšíte kontrolu myšlenek a přerušíte cykly:", rest: " uniknete opakujícím se vzorcům a mentálním smyčkám, které vám neslouží." },
  { bold: "Zlepšíte fyzické zdraví:", rest: " snížíte příznaky stresu, jako jsou nespavost a úzkost." },
  { bold: "Lépe zvládnete každodenní stres", rest: " pro více klidu v práci i v životě." },
  { bold: "Získáte více soucitu a laskavosti", rest: " a posílíte své vztahy." },
]

const includes = [
  {
    image: "/Pictures/_DSC7728.jpg",
    title: "Mindfulness FOUNDATIONS",
    desc: "Krátká 10minutová videa se základy mindfulness – jak vytvořit prostor v zahlcené mysli, jak nacházet klid v napětí.",
  },
  {
    image: "/BeMindful_Letna2026AnnaSolcova.17.jpg",
    title: "be.mindful LIBRARY",
    desc: "12 měsíců neomezeného přístupu do knihovny plné tematických meditací, praktických tipů a rozhovorů.",
  },
  {
    image: "/Pictures/AdobeStock_1844492057.jpeg",
    title: "be.mindful COMMUNITY",
    desc: "Změna je týmová záležitost. V okamžicích, kdy ztrácíme nadhled, je důležité mít kolem sebe lidi, kteří už tou cestou prošli.",
  },
  {
    image: "/BeMindful_Letna2026AnnaSolcova.5.jpg",
    title: "Týdenní živé meditace + záznamy",
    desc: "Bezpečný prostor pro návrat k sobě – když vás život rozhodí nebo když chcete udržet rovnováhu. Říkejte tomu své \u201Ewellbeing fitko pro mysl\u201C.",
  },
  {
    image: "/BeMindful_Letna2026AnnaSolcova.16.jpg",
    title: "Měsíční živá setkání + záznamy",
    desc: "Prostor pro vaše otázky a osobní podporu v konkrétních životních situacích. Skvělý způsob, jak vidět, že mindfulness funguje v reálném životě.",
  },
  {
    image: "/Pictures/AdobeStock_313540527.jpeg",
    title: "Audio nahrávky",
    desc: "Každá s jiným zaměřením – lepší spánek, soustředění, zvládání stresu a práce s emocemi.",
  },
]

const testimonials = [
  {
    quote: "Pomohl mi začít přepínat z autopilota zpět na vědomé řízení.",
    name: "Běla Nedvědová",
    text: "Dřív jsem měla pocit, že se jen vezu – práce, povinnosti, stres, hlava plná myšlenek. Všechno jelo samo a já s tím. Teprve díky kurzu mindfulness jsem se naučila, jak můžu zpomalit, nadechnout se a začít znovu vědomě rozhodovat, jak chci reagovat.",
  },
  {
    quote: "Pomohl mi začít přepínat z autopilota zpět na vědomé řízení.",
    name: "Martina Junková",
    text: "Už se tolik neztotožňuji s tím, co se mi honí v hlavě. Víc vnímám dění v sobě i kolem sebe, bez hodnocení. To mi dává víc prostoru reagovat s klidem a nadhledem.",
  },
  {
    quote: "Pomohl mi začít přepínat z autopilota zpět na vědomé řízení.",
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
          src="/AdobeStock_431961372_Preview.jpeg"
          alt="be.mindful Membership"
          fill
          className="object-cover object-top"
          priority
        />
        <div className="relative z-10 flex min-h-[500px] items-center lg:min-h-[580px]">
          <div className="w-full px-6 lg:px-16">
            <div className="max-w-xl">
              <h1 className="text-4xl font-bold leading-tight text-white lg:text-5xl">
                be.mindful<br />MEMBERSHIP
              </h1>
              <p className="mt-4 text-base text-white/80">
                Váš každodenní prostor k zastavení – udržujte rovnováhu
              </p>
              <div className="mt-8">
                <Button className="h-auto rounded-full bg-[#E2763A] px-8 py-3 text-sm font-semibold text-white hover:bg-[#D96B2E]">
                  Přidat se <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-2xl px-6 text-center lg:px-8">
          <h2 className="text-3xl font-bold text-[#2D2C2B] lg:text-4xl">
            Zůstaňte propojeni –<br />udržujte rovnováhu
          </h2>
          <p className="mt-6 text-base leading-relaxed text-[#4B4C4D]">
            Život se skládá z okamžiků – a právě schopnost zastavit se je nástroj, který nám umožňuje být přítomní s tím, co se děje v nás i kolem nás. Díky tomu můžeme naplno vnímat krásu kolem sebe a zvládat výzvy s větší lehkostí.
          </p>
        </div>
      </section>

      {/* Teacher video */}
      <section className="bg-[#F5F6F7] py-16 lg:py-24">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-semibold text-[#7BC0A4]">Mindfulness není pro každého stejné</p>
            <h2 className="mx-auto mt-4 max-w-2xl text-2xl font-bold text-[#2D2C2B] lg:text-3xl">
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
          <h2 className="text-center text-2xl font-bold text-[#2D2C2B] lg:text-3xl">
            Posílíte „sval mindfulness":<br />vytvořit prostor, kde můžete udržovat<br />všímavost živou
          </h2>
          <div className="mt-12 flex flex-col gap-12 lg:flex-row lg:items-start">
            <div className="flex flex-col gap-5 lg:w-1/2">
              {benefits.map((b, i) => (
                <div key={i} className="flex items-start gap-4">
                  <img src="/tic.png" alt="" className="h-10 w-10 shrink-0" />
                  <p className="text-sm leading-relaxed text-[#4B4C4D]">
                    <strong className="font-semibold text-[#2D2C2B]">{b.bold}</strong>
                    {b.rest}
                  </p>
                </div>
              ))}
            </div>
            <div className="overflow-hidden rounded-2xl lg:w-1/2">
              <Image
                src="/membership-laptop.jpeg"
                alt="be.mindful member watching session on laptop"
                width={600}
                height={500}
                className="w-full object-cover"
              />
            </div>
          </div>
          <div className="mt-12 text-center">
            <Button className="h-auto rounded-full bg-[#7BC0A4] px-10 py-3 text-sm font-semibold text-white hover:bg-[#6BB194]">
              Přidat se
            </Button>
          </div>
        </div>
      </section>

      {/* Research / SVG section */}
      <section className="bg-[#C0D1C6] py-16 lg:py-24">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <div className="mx-auto mb-6 flex justify-center">
            <Image src="/Illustrations/shapes1.svg" alt="" width={220} height={220} />
          </div>
          <h2 className="text-2xl font-bold text-[#2D2C2B] lg:text-3xl">
            Rovnováha se tvoří z okamžiků.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-[#2D2C2B]/80">
            Najdete zde všechny nástroje a podporu, které vám pomohou udržet rovnováhu a vrátit se k mindfulness, když život rozptýlí vaši pozornost.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-[#7BC0A4] py-14">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-3 divide-x-2 divide-[#E4FFE3] text-center">
            {[
              { num: "200+", label: "Video lekcí" },
              { num: "150 h", label: "Audio nahrávek" },
              { num: "60", label: "Vedených meditací" },
            ].map((s) => (
              <div key={s.num} className="px-6">
                <p className="text-5xl font-bold text-[#E4FFE3] lg:text-6xl">{s.num}</p>
                <p className="mt-2 text-base font-semibold text-[#E4FFE3]">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Device mockup */}
      <section className="bg-white py-12 lg:py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <Image
            src="/Pictures/be.mindful MEMBERSHIP/Device Set_v01_Mockup.png"
            alt="be.mindful na všech zařízeních"
            width={900}
            height={560}
            className="w-full object-contain"
          />
        </div>
      </section>

      {/* What you get */}
      <section className="bg-white pb-16 pt-4 lg:pb-24 lg:pt-8">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-center text-sm font-semibold text-[#7BC0A4]">Mindfulness není pro každého stejné</p>
          <h2 className="mt-2 text-center text-2xl font-bold text-[#2D2C2B] lg:text-3xl">
            be.mindful MEMBERSHIP<br />Co získáte
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
                  <h3 className="text-base font-bold text-[#2D2C2B]">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#4B4C4D]">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button className="h-auto rounded-full bg-[#7BC0A4] px-10 py-3 text-sm font-semibold text-white hover:bg-[#6BB194]">
              Staňte se členem <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-[#7BC0A4] py-14">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white lg:text-4xl">Rovnováha se tvoří z okamžiků.</h2>
            <p className="mx-auto mt-4 max-w-xl text-base text-white/80">
              Najdete zde všechny nástroje a podporu, které vám pomohou udržet rovnováhu a vrátit se k mindfulness, když život rozptýlí vaši pozornost.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold text-[#2D2C2B]">Hlasy účastníků</h2>
          <div className="mx-auto mt-10 grid max-w-5xl gap-6 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <div key={i} className="rounded-2xl bg-[#F5F6F7] p-7">
                <p className="text-base font-bold text-[#2D2C2B]">&ldquo;{t.quote}&rdquo;</p>
                <p className="mt-4 text-sm leading-relaxed text-[#4B4C4D]">{t.text}</p>
                <p className="mt-5 text-sm font-semibold text-[#2D2C2B]">{t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About teacher */}
      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 px-6 lg:flex-row lg:gap-16 lg:px-8">
          <div className="overflow-hidden rounded-2xl lg:w-2/5">
            <Image
              src="/Pictures/_DSC7728.jpg"
              alt="Michal Dvořák"
              width={500}
              height={560}
              className="w-full object-cover"
            />
          </div>
          <div className="lg:w-3/5">
            <p className="text-sm font-bold uppercase tracking-widest text-[#7BC0A4]">Jsem Michal Dvořák, zakladatel be.mindful</p>
            <p className="mt-5 text-base leading-relaxed text-[#4B4C4D]">
              Jsem Michal Dvořák, senior mindfulness teacher. Mindfulness jsem vystudoval ve dvou světových centrech – UMASS Medical School a Brown University – a od roku 2018 ji učím na plný úvazek.
            </p>
            <p className="mt-4 text-base leading-relaxed text-[#4B4C4D]">
              Učím to, co sám žiju, a snažím se přistupovat k praxi i životu s nadhledem a nohama pevně na zemi.
            </p>
            <div className="mt-8 flex gap-12">
              {[{ num: "15+", label: "Let praxe" }, { num: "2K+", label: "Absolventi" }, { num: "1", label: "Senior Mindfulness Teacher v ČR" }].map((s) => (
                <div key={s.num}>
                  <p className="text-3xl font-bold text-[#2D2C2B]">{s.num}</p>
                  <p className="mt-1 text-xs text-[#4B4C4D]">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <NewsletterSection />
      <Footer />
    </main>
  )
}
