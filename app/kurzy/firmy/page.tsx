import { ArrowRight, Check, TrendingUp, Award, Users, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { NewsletterSection } from "@/components/newsletter-section"
import { Footer } from "@/components/footer"

function ImagePlaceholder({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center bg-[#E3FFE2] rounded-lg ${className}`}>
      <svg width="60" height="45" viewBox="0 0 60 45" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15 35 L25 20 L35 35 Z" fill="#C0D1C6" />
        <path d="M25 35 L40 15 L55 35 Z" fill="#9DA59C" />
        <circle cx="18" cy="12" r="5" fill="#C0D1C6" />
      </svg>
    </div>
  )
}

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
  "Od neustálého přepínání mezi úkoly k soustředění na to podstatné",
  "Od strachu ze změny k větší flexibilitě a vnímání změny jako příležitosti",
  "Od dlouhodobého napětí a únavy k lepšímu řízení energie",
]

const teamBenefits = [
  "Lepší komunikace a zdravější hranice",
  "Silnější vztahy postavené na empatii",
  "Ukotvenější leadership i v tlaku",
]

const programs = [
  { title: "1h Úvod do mindfulness", desc: "Krátké a praktické seznámení s principy mindfulness a jejím využitím v každodenním životě." },
  { title: "2h Mindfulness Basics", desc: "Interaktivní workshop se základními technikami pro zvládání stresu a zlepšení soustředění." },
  { title: "Polodenní kurz: Myšlenky a stres pod kontrolou", desc: "Praktické nástroje pro zvládání vnitřního napětí a klid mysli." },
  { title: "Celodenní kurz: Mindfulness v praxi", desc: "Rozvoj klíčových dovedností, jako je pozornost, regulace emocí a vědomá komunikace." },
  { title: "6týdenní kurz: Od multitaskingu k flow", desc: "Šest setkání, která pomáhají integrovat mindfulness do práce i života." },
  { title: "Mindful Eating (celodenní kurz)", desc: "Práce se vztahy k jídlu a emocím, bez diet." },
  { title: "Digitální svoboda (3h workshop)", desc: "Jak zvládat digitální přetížení a zlepšit soustředění." },
  { title: "Online kurz (30 lekcí)", desc: "Videolekce s praktickými technikami pro zvládání stresu a větší klid." },
]

const credentials = [
  "Nejvyšší kvalifikace – jediný plně certifikovaný Senior Mindfulness Teacher v ČR",
  "Mezinárodní know-how – zkušenosti z UMASS, Brown University, ověřené metody MBSR",
  "Dlouhodobý vývoj vlastní metody, testované a laděné kurzy",
  "Zkušený tým lektorů s garantovanou supervizí a metodickým vedením",
  "Různé úrovně kurzů – od workshopů po dlouhodobé programy, online i offline",
  "Více než 8 let praxe, přes 2000 účastníků kurzů",
]

export default function FirmyPage() {
  return (
    <main className="min-h-screen font-sans">
      <Header />

      {/* Hero */}
      <section className="bg-[#E3FFE2] py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#9DA59C]">Firemní kurzy</p>
            <h1 className="mt-4 text-3xl font-bold text-[#5E767E] lg:text-4xl">Od stresu k odolnosti</h1>
            <p className="mt-4 text-lg text-[#9DA59C]">Cítit se lépe znamená vést lépe – naučte se přejít od stresu k vnitřní stabilitě.</p>
          </div>
        </div>
      </section>

      {/* Ability to pause */}
      <section className="bg-background py-16 lg:py-24">
        <div className="mx-auto flex max-w-7xl flex-col gap-12 px-6 lg:flex-row lg:items-start lg:gap-16 lg:px-8">
          <div className="lg:w-1/2">
            <h2 className="text-2xl font-bold text-[#5E767E]">Schopnost se zastavit – jedna z nejdůležitějších dovedností dneška</h2>
            <p className="mt-5 text-sm leading-relaxed text-[#9DA59C]">
              V době neustálého spěchu a hluku už pauza není luxus, ale klíčová dovednost. Všímavé zastavení vytváří prostor mezi podnětem a reakcí, díky čemuž jednáme s jasností místo automatické reakce na stres.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-[#9DA59C]">
              Pomáhám firmám zavádět programy, které podporují zvládání stresu, soustředění a vnitřní rovnováhu i v náročném prostředí.
            </p>
            <h3 className="mt-8 text-base font-bold text-[#5E767E]">Není to situace, která se změní, ale způsob, jak na ni reagujete</h3>
            <div className="mt-4 space-y-3">
              {personalBenefits.map((b, i) => (
                <div key={i} className="flex items-start gap-3">
                  <TrendingUp className="mt-0.5 h-4 w-4 shrink-0 text-[#5E767E]" />
                  <p className="text-sm text-[#9DA59C]">{b}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:w-1/2">
            <ImagePlaceholder className="aspect-square w-full" />
          </div>
        </div>
      </section>

      {/* Pause explanation */}
      <section className="bg-[#E3FFE2] py-16 lg:py-24">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <h2 className="text-2xl font-bold text-[#5E767E]">Pauza neznamená zpomalit výkon</h2>
          <p className="mt-5 text-sm leading-relaxed text-[#9DA59C]">
            Znamená získat nadhled a umět reagovat nejen na to, co se děje kolem nás, ale i v nás samotných. Pauza nemusí trvat dvacet minut, když víte, jak na to. Učíme praktické techniky, které zvládnete během pár minut.
          </p>
        </div>
      </section>

      {/* Company benefits */}
      <section className="bg-background py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-2xl font-bold text-[#5E767E]">Investice, která se vrátí na všech úrovních</h2>
          <div className="mx-auto mt-10 max-w-3xl space-y-3">
            {companyBenefits.map((b, i) => (
              <div key={i} className="flex items-start gap-3 rounded-lg border border-[#C0D1C6] bg-[#E3FFE2] px-5 py-4">
                <TrendingUp className="mt-0.5 h-4 w-4 shrink-0 text-[#5E767E]" />
                <p className="text-sm text-[#9DA59C]">{b}</p>
              </div>
            ))}
          </div>
          <div className="mx-auto mt-8 max-w-3xl">
            <p className="text-sm font-medium text-[#5E767E]">Dopad nekončí u vás – rozšiřuje se i na ostatní:</p>
            <div className="mt-3 space-y-2">
              {teamBenefits.map((t, i) => (
                <div key={i} className="flex items-center gap-3">
                  <Check className="h-4 w-4 shrink-0 text-[#5E767E]" />
                  <p className="text-sm text-[#9DA59C]">{t}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="bg-[#E3FFE2] py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-2xl font-bold text-[#5E767E]">Nabídka programů</h2>
          <div className="mx-auto mt-10 grid max-w-4xl gap-4 md:grid-cols-2">
            {programs.map((p, i) => (
              <div key={i} className="rounded-xl border border-[#C0D1C6] bg-background p-5">
                <h3 className="text-sm font-bold text-[#5E767E]">{p.title}</h3>
                <p className="mt-2 text-sm text-[#9DA59C]">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="bg-background py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-2xl font-bold text-[#5E767E]">Důvěryhodnost a zkušenosti</h2>
          <div className="mx-auto mt-10 max-w-2xl space-y-3">
            {credentials.map((c, i) => (
              <div key={i} className="flex items-start gap-3">
                <Award className="mt-0.5 h-4 w-4 shrink-0 text-[#5E767E]" />
                <p className="text-sm text-[#9DA59C]">{c}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#5E767E] py-16 lg:py-20">
        <div className="mx-auto max-w-2xl px-6 text-center lg:px-8">
          <h2 className="text-2xl font-bold text-white">Požádejte o nabídku</h2>
          <p className="mt-4 text-sm text-white/80">
            Vyplňte dotazník a my vám připravíme řešení na míru potřebám vaší firmy.
          </p>
          <div className="mt-8">
            <Button className="h-auto rounded-full bg-white px-8 py-3 text-sm text-[#5E767E] hover:bg-white/90">
              Vyplnit dotazník <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      <NewsletterSection />
      <Footer />
    </main>
  )
}
