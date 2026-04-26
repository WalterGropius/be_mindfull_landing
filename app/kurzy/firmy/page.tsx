import Image from "next/image"
import { ArrowRight, Check, Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const clientLogos = [
  { src: "/logos/Česká_spořitelna_-_logo_2023 1.png", alt: "Česká spořitelna" },
  { src: "/logos/cez-skupina_logo_vertikalni_cz_barva_pozitiv_rgb 1.png", alt: "ČEZ skupina" },
  { src: "/logos/europool-logo 1.png", alt: "Europool" },
  { src: "/logos/Wrapper.png", alt: "SHV" },
  { src: "/logos/kooperativa_logo 1.png", alt: "Kooperativa" },
  { src: "/logos/mibcon 1.png", alt: "Mibcon" },
  { src: "/logos/raiffeisen_BANK_logo.png 1.png", alt: "Raiffeisen Bank" },
]

const benefits = [
  { bold: "Posílíte emoční odolnost:", rest: " zvládnete náročné emoce a životní výzvy s větší stabilitou." },
  { bold: "Zlepšíte kontrolu myšlenek a přerušíte cykly:", rest: " uniknete opakujícím se vzorcům a mentálním smyčkám, které vám neslouží." },
  { bold: "Zlepšíte fyzické zdraví:", rest: " snížíte příznaky stresu, jako jsou nespavost a úzkost." },
  { bold: "Lépe zvládnete každodenní stres", rest: " pro více klidu v práci i v životě." },
  { bold: "Získáte více soucitu a laskavosti", rest: " a posílíte své vztahy." },
]

const investmentLeft = [
  "Lepší komunikace a zdravější hranice",
  "Silnější vztahy postavené na empatii",
  "Ukotvenější leadership i v tlaku",
]

const investmentRight = [
  "Od přetížených lidí k vyšší odolnosti vůči stresu a stabilnímu výkonu",
  "Od emočních výkyvů ke zvládání náročných situací s větším klidem",
  "Od nedorozumění v týmech k otevřené komunikaci a spolupráci",
  "Od vyhoření k větší angažovanosti a vnitřní motivaci",
]

const programs = [
  {
    image: "/BeMindful_Letna2026AnnaSolcova.16.jpg",
    label: "Pro firemní kurzy mindfulness",
    title: "Rychlý restart mysli: Ochutnávka mindfulness v pracovním životě",
    desc: "Na workshopu se seznámíte se základními principy mindfulness a nejpouž ívanějšími postupy. Zjistíte, proč je mindfulness užitečné i pro vás, jak se vcítit do stresu a zaměřit se na vědomé napětí v různých situacích. Naslouchejte a uvidíte, jak se vaše věci změní nad tlakem a situacemi.",
  },
  {
    image: "/BeMindful_Letna2026AnnaSolcova.17.jpg",
    label: "Firemní kurz mindfulness",
    title: "Mozek pod tlakem: Jak získat klid a zvýšit výkon s mindfulness",
    desc: "Na tomto workshopu zjistíte, jak váš mozek reaguje na tlak a na pracovní místa. Naučí se vy sami přijímat stres prostě a s láskou. Zkušenosti a dobrý čas jsou základy pro dobrou a soustředěnou práci. Naslouchejte a ukáže vás na pozice a situacích v pracovním prostředí.",
  },
  {
    image: "/BeMindful_Letna2026AnnaSolcova.5.jpg",
    label: "Firemní kurz mindfulness",
    title: "Od multitaskingu k flow: Pro hlubší soustředění a klid",
    desc: "Jsou pracující lidé, kteří jsou schopni vnímat přítomný okamžik? Fungujete ve stresu. Nevíte, jak být ve flow stavu? Jsou to témata a dovednosti. Naučíte se vy sami přijímat práci, věnovat více pozornost věcem. Naučíte se vycítit vaše vlastní silné a slabé stránky a úspěšné techniky.",
  },
  {
    image: "/BeMindful_Letna2026AnnaSolcova.8.jpg",
    label: "Firemní kurz mindfulness",
    title: "Mindfulness v kapse: Pro lepší soustředění a klid",
    desc: "Aplikace, která vám pomůže chápat základy mindfulness přes dobrá témata a naučíte vás jak přistoupit k mindfulness, s minulostí i v práci. Umí 10minutovou lekci a podpůrné záznamy a naučíte je a zapamatujete všechny techniky, videa a základní psychologické principy.",
  },
]

const teacherPoints = [
  { bold: "Nejvyšší kvalifikace", rest: " jediný plně certifikovaný Senior Mindfulness Teacher v ČR" },
  { bold: "Mezinárodní Know-How", rest: " zkušenosti z UMASS, Brown University, ověřené metody MBSR" },
  { bold: "Dlouhodobý vývoj vlastní metody", rest: " testované a laděné kurzy" },
  { bold: "Zkušený tým lektorů s garantovanou supervizí", rest: " a metodickým vedením" },
  { bold: "Různé úrovně kurzů", rest: " od workshopů po dlouhodobé programy, online i offline" },
  { bold: "Více než 8 let praxe, přes 2000 účastníků kurzů", rest: "" },
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
        <div className="relative z-10 flex min-h-[500px] items-center py-20 lg:min-h-[580px] lg:py-28">
          <div className="w-full px-6 lg:px-16">
            <div className="max-w-xl">
              <h1 className="text-5xl font-bold leading-tight text-white lg:text-[64px] lg:leading-[1.1]">
                Od stresu<br />k odolnosti
              </h1>
              <p className="mt-4 text-base text-white/80">
                Cítit se lépe znamená vést lépe – naučte se přejít od stresu k vnitřní stabilitě.
              </p>
              <div className="mt-8">
                <Button className="h-auto rounded-full bg-[#E2763A] px-8 py-3 text-sm font-semibold text-white hover:bg-[#D96B2E]">
                  Zobrazit kurzy <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-[#F5F6F7] py-16 lg:py-24">
        <div className="mx-auto max-w-2xl px-6 text-center lg:px-8">
          <h2 className="text-3xl font-bold text-[#2D2C2B] lg:text-4xl">
            Schopnost se zastavit – jedna z nejdůležitějších dovedností dneška
          </h2>
          <p className="mt-6 text-base leading-relaxed text-[#4B4C4D]">
            V době neustálého spěchu a hluku už pauza není luxus, ale klíčová dovednost. Všímavé zastavení vytváří prostor mezi podnětem a reakcí, díky čemuž jednáme s jasností místo automatické reakce na stres.
          </p>
          <p className="mt-4 text-base leading-relaxed text-[#4B4C4D]">
            Pomáhám firmám zavádět programy, které podporují zvládání stresu, soustředění a vnitřní rovnováhu i v náročném prostředí.
          </p>
        </div>
      </section>

      {/* Client logos */}
      <section className="bg-white py-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
            {clientLogos.map((logo) => (
              <div
                key={logo.alt}
                className="relative flex h-12 w-32 items-center justify-center"
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
          <h2 className="text-center text-3xl font-bold text-[#2D2C2B] lg:text-4xl">
            Není to situace, která se změní,<br />ale způsob, jak na ni reagujete
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
                src="/Pictures/_DSC7728.jpg"
                alt="Michal Dvořák"
                width={600}
                height={500}
                className="w-full object-cover"
              />
            </div>
          </div>
          <div className="mt-12 text-center">
            <Button className="h-auto rounded-full bg-[#7BC0A4] px-10 py-3 text-sm font-semibold text-white hover:bg-[#6BB194]">
              Kontaktujte nás pro osobní nabídku
            </Button>
          </div>
        </div>
      </section>

      {/* Pause section */}
      <section className="bg-[#C0D1C6] py-16 lg:py-24">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <div className="mx-auto mb-6 flex justify-center">
            <Image src="/Illustrations/clouds1.svg" alt="" width={220} height={220} />
          </div>
          <h2 className="text-2xl font-bold text-[#2D2C2B] lg:text-3xl">
            Pauza neznamená zpomalit výkon
          </h2>
          <p className="mt-6 text-base leading-relaxed text-[#2D2C2B]/80">
            Znamená získat nadhled a umět reagovat nejen na to, co se děje kolem nás, ale i v nás samotných. Pauza nemusí trvat dvacet minut, když víte, jak na to. Učíme praktické techniky, které zvládnete během pár minut.
          </p>
        </div>
      </section>

      {/* Investment */}
      <section className="bg-[#F5F6F7] py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold text-[#2D2C2B] lg:text-4xl">
            Investice, která se vrátí na všech úrovních
          </h2>
          <div className="mt-12 flex flex-col gap-12 lg:flex-row lg:items-start lg:gap-16">
            <div className="space-y-4 lg:w-2/5">
              {investmentLeft.map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <ArrowRight className="h-4 w-4 shrink-0 text-[#7BC0A4]" />
                  <p className="text-sm font-medium text-[#2D2C2B]">{item}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-4 lg:w-3/5">
              {investmentRight.map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <img src="/tic.png" alt="" className="h-10 w-10 shrink-0" />
                  <p className="text-sm leading-relaxed text-[#4B4C4D]">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-center text-sm font-semibold text-[#7BC0A4]">Kurzy pro firmy a týmy</p>
          <h2 className="mt-2 text-center text-3xl font-bold text-[#2D2C2B] lg:text-4xl">Nabídka programů</h2>
          <p className="mx-auto mt-3 max-w-3xl text-center text-base text-[#4B4C4D]">
            V době neustálého spěchu a hluku už pauza není luxus, ale klíčová dovednost, díky které firma může dosahovat klid. Tyto firmy musely kurzu naučit na míru na ní naučit.
          </p>
          <div className="mx-auto mt-12 grid max-w-6xl gap-6 md:grid-cols-2">
            {programs.map((p, i) => (
              <div key={i} className="flex flex-col overflow-hidden rounded-2xl bg-[#F5F6F7] sm:flex-row">
                <div className="sm:w-2/5">
                  <Image
                    src={p.image}
                    alt={p.title}
                    width={400}
                    height={400}
                    className="h-56 w-full object-cover sm:h-full"
                  />
                </div>
                <div className="flex flex-col p-6 sm:w-3/5">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#7BC0A4]">{p.label}</p>
                  <h3 className="mt-2 text-base font-bold text-[#2D2C2B]">{p.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#4B4C4D]">{p.desc}</p>
                  <p className="mt-4 text-sm font-semibold text-[#2D2C2B]">Zjistit více →</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#7BC0A4] py-16 lg:py-24">
        <div className="mx-auto max-w-2xl px-6 text-center lg:px-8">
          <h2 className="text-3xl font-bold text-white lg:text-4xl">Požádejte o nabídku</h2>
          <p className="mt-4 text-base text-white/80">
            Vyplňte dotazník a my vám připravíme řešení na míru potřebám vaší firmy.
          </p>
          <div className="mt-8">
            <Button className="h-auto rounded-full bg-white px-10 py-3 text-sm font-semibold text-[#5E767E] hover:bg-white/90">
              Kontaktujte nás <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* About teacher */}
      <section className="bg-[#C0D1C6] py-16 lg:py-24">
        <div className="mx-auto flex max-w-7xl flex-col gap-12 px-6 lg:flex-row lg:items-center lg:gap-16 lg:px-8">
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold text-[#2D2C2B] lg:text-4xl">
              Ahoj, jsem Michal Dvořák,<br />zakladatel be.mindful
            </h2>
            <div className="mt-8 space-y-4">
              {teacherPoints.map((p, i) => (
                <p key={i} className="text-sm leading-relaxed text-[#2D2C2B]/80">
                  <strong className="font-bold text-[#2D2C2B]">{p.bold}</strong>
                  {p.rest}
                </p>
              ))}
            </div>
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

      <Footer />
    </main>
  )
}
