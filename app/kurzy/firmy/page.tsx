import Image from "next/image"
import { ArrowRight, Check, TrendingUp, Play } from "lucide-react"

const clientLogos = [
  { src: "/logos/cez-skupina_logo_vertikalni_cz_barva_pozitiv_rgb 1.png", alt: "ČEZ skupina" },
  { src: "/logos/europool-logo 1.png", alt: "Europool" },
  { src: "/logos/images-3 1.png", alt: "Client" },
  { src: "/logos/kooperativa_logo 1.png", alt: "Kooperativa" },
  { src: "/logos/mibcon 1.png", alt: "Mibcon" },
  { src: "/logos/raiffeisen_BANK_logo.png 1.png", alt: "Raiffeisen Bank" },
  { src: "/logos/Česká_spořitelna_-_logo_2023 1.png", alt: "Česká spořitelna" },
]
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { NewsletterSection } from "@/components/newsletter-section"
import { Footer } from "@/components/footer"

const personalBenefits = [
  "Posílíte emoční odolnost pro náročné situace",
  "Zlepšíte kontrolu myšlenek a přerušíte stresové vzorce",
  "Snížíte stresové projevy, jako je nespavost či úzkost",
  "Naučíte se pracovat s lehkostí a ve flow",
  "Zvýšíte kreativitu a schopnost řešit problémy",
]

const companyBenefits = [
  "Od přetížených lidí a dlouhodobého tlaku k vyšší odolnosti vůči stresu a stabilnímu výkonu",
  "Od emočních výkyvů ke zvládání náročných situací s větším klidem",
  "Od nedorozumění a napětí v týmech k otevřené komunikaci a spolupráci",
  "Od vyhoření a ztráty smyslu práce k větší angažovanosti a vnitřní motivaci",
  "Od zahlcení e-maily a úkoly k většímu nadhledu a schopnosti prioritizovat",
]

const programs = [
  {
    title: "Rychlý restart mysli: Orchestrálna réžia vlastního života",
    desc: "Naučte se ovládat svou mysl a reagovat vědomě i v náročných momentech.",
  },
  {
    title: "Mozek pod tlakem: Jak získat klid a vyšší výkon s mindfulness",
    desc: "Praktické techniky pro zvládání stresu a zlepšení výkonu prostřednictvím vědecky ověřených metod.",
  },
  {
    title: "Od multitaskingu k flow: Najděte hlubokou soustředěnost v pracovním životě",
    desc: "Naučte se soustředit na to podstatné a pracovat efektivněji s méně stresem.",
  },
  {
    title: "Mindfulness v kapse: Pro lepší soustředění a klid",
    desc: "Krátké a efektivní techniky pro každodenní praxi v pracovním prostředí.",
  },
]

const testimonials = [
  {
    quote: "Pomohl mi začít přepínat z autopilota zpět na vědomé řízení.",
    name: "Běla Nedvědová",
    text: "Dřív jsem měla pocit, že se jen vezu – práce, povinnosti, stres, hlava plná myšlenek. Teprve díky kurzu mindfulness jsem se naučila, jak můžu zpomalit a začít znovu vědomě rozhodovat.",
  },
  {
    quote: "Pomohl mi začít přepínat z autopilota zpět na vědomé řízení.",
    name: "Martina Junková",
    text: "Už se tolik neztotožňuji s tím, co se mi honí v hlavě. Víc vnímám dění v sobě i kolem sebe, bez hodnocení. To mi dává víc prostoru reagovat s klidem.",
  },
  {
    quote: "Pomohl mi začít přepínat z autopilota zpět na vědomé řízení.",
    name: "Jitka Selingerová",
    text: "Díky mindfulness se mi daří být v lepším kontaktu sama se sebou a tím i s klienty. Doporučuji každému v intenzivním pracovním prostředí.",
  },
]

export default function FirmyPage() {
  return (
    <main className="min-h-screen font-sans">
      <Header />

      {/* Hero */}
      <section className="relative min-h-[500px] overflow-hidden bg-[#2D2C2B] lg:min-h-[600px]">
        <Image
          src="/Theme_Companies.jpg"
          alt="Mindfulness pro firmy"
          fill
          className="object-cover opacity-45"
          priority
        />
        <div className="relative z-10 flex min-h-[500px] items-center lg:min-h-[600px]">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-xl">
              <p className="text-sm font-bold uppercase tracking-widest text-[#7BC0A4]">Firemní programy</p>
              <h1 className="mt-3 text-4xl font-bold text-white lg:text-5xl">Od stresu<br />k odolnosti</h1>
              <p className="mt-4 text-lg text-white/80">Cítit se lépe znamená vést lépe – naučte se přejít od stresu k vnitřní stabilitě.</p>
              <div className="mt-8">
                <Button className="h-auto rounded-full bg-[#7BC0A4] px-8 py-3 text-sm font-semibold text-white hover:bg-[#008F7A]">
                  Více o nás <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client logos */}
      <section className="bg-white py-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-center text-xs font-bold uppercase tracking-widest text-[#9DA59C]">Naši klienti</p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-10">
            {clientLogos.map((logo) => (
              <Image
                key={logo.alt}
                src={logo.src}
                alt={logo.alt}
                width={120}
                height={48}
                className="h-10 w-auto object-contain opacity-70 grayscale transition hover:opacity-100 hover:grayscale-0"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-[#F5F6F4] py-16 lg:py-24">
        <div className="mx-auto flex max-w-7xl flex-col gap-12 px-6 lg:flex-row lg:items-start lg:gap-16 lg:px-8">
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold text-[#2D2C2B] lg:text-4xl">Schopnost se zastavit – jedna z nejdůležitějších dovedností dneška</h2>
            <p className="mt-5 text-base leading-relaxed text-[#4B4C4D]">
              V době neustálého spěchu a hluku už pauza není luxus, ale klíčová dovednost. Všímavé zastavení vytváří prostor mezi podnětem a reakcí, díky čemuž jednáme s jasností místo automatické reakce na stres.
            </p>
            <p className="mt-3 text-base leading-relaxed text-[#4B4C4D]">
              Pomáhám firmám zavádět programy, které podporují zvládání stresu, soustředění a vnitřní rovnováhu i v náročném prostředí.
            </p>
            <h3 className="mt-8 text-lg font-bold text-[#2D2C2B]">Není to situace, která se změní, ale způsob, jak na ni reagujete</h3>
            <div className="mt-4 space-y-4">
              {personalBenefits.map((b, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#7BC0A4]/15">
                    <Check className="h-3 w-3 text-[#7BC0A4]" />
                  </div>
                  <p className="text-sm leading-relaxed text-[#4B4C4D]">{b}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl lg:w-1/2">
            <Image
              src="/BeMindful_Letna2026AnnaSolcova.17.jpg"
              alt="Corporate mindfulness"
              width={600}
              height={600}
              className="w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Teacher section */}
      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-widest text-[#7BC0A4]">Ověřený a osobní přístup</p>
            <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-bold text-[#2D2C2B] lg:text-4xl">
              Váš přístup k mindfulness se Senior Mindfulness Teacherem Michalem Dvořákem
            </h2>
          </div>
          <div className="relative mx-auto mt-10 max-w-3xl overflow-hidden rounded-2xl">
            <Image
              src="/Pictures/_DSC7728.jpg"
              alt="Michal Dvořák – Senior Mindfulness Teacher"
              width={900}
              height={600}
              className="w-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90 shadow-lg">
                <Play className="ml-1 h-6 w-6 text-[#5E767E]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pause explanation */}
      <section className="bg-[#7BC0A4] py-14">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <h2 className="text-2xl font-bold text-[#E3FFE2]">Pauza neznamená zpomalit výkon</h2>
          <p className="mt-5 text-base leading-relaxed text-[#E3FFE2]/90">
            Znamená získat nadhled a umět reagovat nejen na to, co se děje kolem nás, ale i v nás samotných. Pauza nemusí trvat dvacet minut, když víte, jak na to. Učíme praktické techniky, které zvládnete během pár minut.
          </p>
        </div>
      </section>

      {/* Investment returns */}
      <section className="bg-[#F5F6F4] py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold text-[#2D2C2B]">Investice, která se vrátí na všech úrovních</h2>
          <p className="mt-3 text-center text-base text-[#4B4C4D]">Není to situace, která se změní, ale způsob, jak na ni reagujete</p>
          <div className="mx-auto mt-10 grid max-w-4xl gap-4 md:grid-cols-2">
            {companyBenefits.map((b, i) => (
              <div key={i} className="flex items-start gap-4 rounded-xl border border-[#C0D1C6] bg-white px-6 py-5">
                <TrendingUp className="mt-0.5 h-4 w-4 shrink-0 text-[#7BC0A4]" />
                <p className="text-sm leading-relaxed text-[#4B4C4D]">{b}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap justify-center gap-6">
            {["Lepší komunikace a zdravější hranice", "Silnější vztahy postavené na empatii", "Ukotvenější leadership i v tlaku"].map((t) => (
              <div key={t} className="flex items-center gap-2">
                <Check className="h-4 w-4 text-[#7BC0A4]" />
                <span className="text-sm text-[#4B4C4D]">{t}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold text-[#2D2C2B]">Nabídka programů</h2>
          <p className="mt-3 text-center text-base text-[#4B4C4D]">Vyberte si program, který nejlépe odpovídá potřebám vaší firmy.</p>
          <div className="mx-auto mt-12 grid max-w-4xl gap-6 md:grid-cols-2">
            {programs.map((p, i) => (
              <div key={i} className="overflow-hidden rounded-2xl border border-[#C0D1C6] bg-[#F5F6F4]">
                <div className="h-40 w-full overflow-hidden">
                  <Image
                    src={i % 2 === 0 ? "/BeMindful_Letna2026AnnaSolcova.16.jpg" : "/BeMindful_Letna2026AnnaSolcova.8.jpg"}
                    alt={p.title}
                    width={500}
                    height={200}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#7BC0A4]">Pro firmy</p>
                  <h3 className="mt-2 text-base font-bold text-[#2D2C2B]">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#4B4C4D]">{p.desc}</p>
                  <p className="mt-4 text-sm font-semibold text-[#7BC0A4]">Zjistit více →</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#9DA59C] py-16">
        <div className="mx-auto max-w-2xl px-6 text-center lg:px-8">
          <h2 className="text-3xl font-bold text-white">Požádejte o nabídku</h2>
          <p className="mt-4 text-base text-white/80">
            Vyplňte dotazník a my vám připravíme řešení na míru potřebám vaší firmy.
          </p>
          <div className="mt-8">
            <Button className="h-auto rounded-full bg-white px-10 py-3 text-sm font-semibold text-[#5E767E] hover:bg-white/90">
              Vyplnit dotazník <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-[#F5F6F4] py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold text-[#2D2C2B]">Zkušenosti účastníků</h2>
          <div className="mx-auto mt-10 grid max-w-5xl gap-6 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <div key={i} className="rounded-2xl bg-white p-7 shadow-sm">
                <p className="text-base font-bold text-[#2D2C2B]">&ldquo;{t.quote}&rdquo;</p>
                <p className="mt-4 text-sm leading-relaxed text-[#4B4C4D]">{t.text}</p>
                <p className="mt-5 text-sm font-semibold text-[#7BC0A4]">{t.name}</p>
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
              {[{ num: "15+", label: "let praxe" }, { num: "2K+", label: "Absolventi" }, { num: "1", label: "Senior Mindfulness Teacher v ČR" }].map((s) => (
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
