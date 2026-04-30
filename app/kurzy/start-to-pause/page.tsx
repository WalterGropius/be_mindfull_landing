import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Check, Plus, Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ScrollAnimatedIllustration } from "@/components/scroll-animated-illustration"
import { StatsBar } from "@/components/stats-bar"

const benefits = [
  "Naučíte se, jak se zastavit i v okamžicích, kdy máte pocit, že to nejde",
  "Pochopíte, proč je pauza důležitá a proč je to první krok k tomu, jak přestat být ve stresu",
  "Objevíte různé způsoby, jak se zastavit: dechem, tělem, nebo během jídla",
  "Dozvíte se, co se děje v mozku, když se zastavíme – a jaké to má pozitivní dopady na soustředění, klid mysli i spánek",
  "Získáte základní vhled do fungování mysli a do toho, jak s ní můžeme vědomě pracovat",
]

const days = [
  { day: "DAY 1", title: "Síla mindfulness" },
  { day: "DAY 2", title: "Jak funguje mozek a jak mu mindfulness pomáhá" },
  { day: "DAY 3", title: "Jak využívat mindfulness během dne" },
  { day: "DAY 4", title: "Jak vytvořit základ pro trvalou změnu" },
]

const tabs = ["4denní", "Online", "5–10 min denní praxe", "WhatsApp podpora"]

export default function StartToPausePage() {
  return (
    <main className="min-h-screen font-sans">
      <Header />

      {/* Hero */}
      <section className="relative min-h-[500px] overflow-hidden bg-[#1A1A1A] lg:min-h-[580px]">
        <Image
          src="/Theme_4-days_FREE.jpg"
          alt="FREE 4denní online kurz Start-to-PAUSE"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-10 mx-auto flex min-h-[500px] max-w-7xl items-center px-6 py-20 lg:min-h-[580px] lg:px-8 lg:py-28">
          <div className="max-w-xl">
            <h1 className="text-[28px] font-bold leading-[38px] text-white sm:text-5xl lg:text-[64px] lg:leading-[1.1]">
              FREE 4denní<br />online kurz<br />Start-to-PAUSE
            </h1>
            <p className="mt-4 max-w-xs text-[18px] leading-[30px] text-white/75">
              Začněte, jak do svého života přidat trochu prostoru – a krok za krokem přeměníte způsoby, jak začleníte toto každodenního života.
            </p>
            <div className="mt-8">
              <Button asChild className="h-auto rounded-full bg-[#E2763A] px-8 py-3 text-sm font-semibold text-white hover:bg-[#D96B2E]">
                <Link href="/objednavka">Vstoupit do kurzu <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Intro — centered */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-2xl px-6 text-center lg:px-8">
          <h2 className="text-[28px] font-bold leading-[38px] text-[#2D2C2B]">
            Ukážu vám,<br />jak silná může být krátká pauza!
          </h2>
          <p className="mt-6 text-[18px] leading-[30px] text-[#4B4C4D]">
            Schopnost se zastavit patří dnes k těm nejdůležitějším dovednostem. Právě v tom okamžiku se můžeme znovu propojit sami se sebou, obrátit pozornost dovnitř místo ven a tím najít větší jasnost, klid a prostor pro vědomou reakci místo automatické.
          </p>
        </div>
      </section>

      {/* Teacher video */}
      <section className="bg-[#F5F6F7] py-16 lg:py-24">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-semibold text-[#7BC0A4]">Mindfulness není pro každého stejné</p>
            <h2 className="mx-auto mt-4 max-w-2xl text-[28px] font-bold leading-[38px] text-[#2D2C2B]">
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
          <h2 className="text-center text-[28px] font-bold leading-[38px] text-[#2D2C2B]">
            Jak se budete cítit po kurzu
          </h2>
          <div className="mt-12 flex flex-col gap-12 lg:flex-row lg:items-start">
            <div className="flex flex-col gap-5 lg:w-1/2">
              {benefits.map((b, i) => (
                <div key={i} className="flex items-start gap-4">
                  <img src="/tic.png" alt="" className="h-10 w-10 shrink-0" />
                  <p className="text-[18px] leading-[30px] text-[#4B4C4D]">{b}</p>
                </div>
              ))}
            </div>
            <div className="overflow-hidden rounded-2xl lg:w-1/2">
              <Image
                src="/Pictures/FREE 4-days course/AdobeStock_542235713_Preview.jpeg"
                alt="Mindfulness practice"
                width={600}
                height={500}
                className="w-full object-cover"
              />
            </div>
          </div>
          <div className="mt-12 text-center">
            <Button asChild className="h-auto rounded-full bg-[#7BC0A4] px-10 py-3 text-sm font-semibold text-white hover:bg-[#6BB194]">
              <Link href="/kontakt">Kontaktujte nás pro osobní nabídku</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Research stats */}
      <section className="bg-[#C0D1C6] py-16 lg:py-24">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <div className="mx-auto mb-6 flex justify-center">
            <ScrollAnimatedIllustration
              outline={{ src: "/Illustrations/glass_00.svg" }}
              viewBox="0 0 170.08 170.08"
              dots={[
                {
                  from: { cx: 72.53, cy: 130.29, r: 11.17 },
                  to: { cx: 103.44, cy: 30.73, r: 11.17 },
                },
              ]}
              width={320}
              height={320}
            />
          </div>
          <h2 className="text-[28px] font-bold leading-[38px] text-[#2D2C2B]">
            Výzkumy potvrzují:
          </h2>
          <p className="mt-2 text-[28px] leading-[38px] text-[#2D2C2B]">
            krátká každodenní praxe může mít překvapivě silný dopad!
          </p>
          <p className="mt-6 text-[24px] font-bold leading-[34px] text-[#2D2C2B]">
            14–20% snížení stresu<br />při 5–10 minutách meditace denně během osmi týdnů.
          </p>
        </div>
      </section>

      {/* Device mockup */}
      <section className="bg-white py-12 lg:py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <Image
            src="/Pictures/be.mindful FOUNDATIONS/Device Set_v01_Mockup.png"
            alt="be.mindful on all devices"
            width={900}
            height={560}
            className="w-full object-contain"
          />
        </div>
      </section>

      {/* Course days */}
      <section className="bg-white pb-16 pt-4 lg:pb-24 lg:pt-8">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <p className="text-center text-sm font-semibold text-[#7BC0A4]">
            Mindfulness není pro každého stejné
          </p>
          <h2 className="mt-2 text-center text-[28px] font-bold leading-[38px] text-[#2D2C2B]">ZDARMA 4denní online kurz</h2>
          <p className="mt-1 text-center text-[28px] font-bold leading-[38px] text-[#2D2C2B]">START to PAUSE</p>

          {/* Meta row (informational, not clickable tabs) */}
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

          {/* Day rows */}
          <div className="mt-8 flex flex-col gap-1">
            {days.map((d, i) => (
              <div key={i} className="flex items-center gap-4 rounded-xl bg-[#F5F6F7] px-5 py-4">
                <span className="min-w-[100px] text-[18px] font-bold uppercase tracking-wider leading-[30px] text-[#7BC0A4]">
                  {d.day}
                </span>
                <span className="text-[18px] font-bold leading-[30px] text-[#2D2C2B]">{d.title}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Button asChild className="h-auto rounded-full bg-[#7BC0A4] px-10 py-3 text-sm font-semibold text-white hover:bg-[#6BB194]">
              <Link href="/objednavka">Vstoupit do START to PAUSE</Link>
            </Button>
          </div>
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
              Mindfulness není jen přístup – je hluboce zakořeněn v mém životě. XXXX mě přivedl k první zkušenosti s mindfulness xxx.
            </p>
            <p className="mt-4 text-[18px] leading-[30px] text-[#2D2C2B]/80">
              Z této situace xxx se stalo a zjistil jsem, že xxx.
            </p>
            <p className="mt-4 text-[18px] leading-[30px] text-[#2D2C2B]/80">
              Dnes jsem jediným Senior Mindfulness Teacherem v České republice a můj specifický a radostný přístup zpřístupňuje mindfulness xxx lidem za posledních xxx let.
            </p>
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

      {/* Stats bar */}
      <StatsBar />

      <Footer />
    </main>
  )
}
