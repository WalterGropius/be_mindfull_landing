import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { StatsBar } from "@/components/stats-bar"

const credentials = [
  { bold: "Vystudoval mindfulness na", rest: " UMASS Medical School a Brown University." },
  { bold: "Jediný Senior Mindfulness Teacher", rest: " v České republice" },
  { bold: "Od roku 2018", rest: " učí mindfulness na plný úvazek" },
  { bold: "Zkušenosti s", rest: " certifikačními procesy MBSR" },
  { bold: "Zázemí i v psychologii", rest: " jako dobrý doplněk mindfulness" },
]

export default function AboutPage() {
  return (
    <main className="min-h-screen font-sans">
      <Header />

      {/* Hero — full bleed, text right */}
      <section className="relative min-h-[520px] overflow-hidden bg-[#2D2C2B] lg:min-h-[620px]">
        <Image
          src="/about-hero-98.jpg"
          alt="Michal Dvořák"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-10 mx-auto flex min-h-[520px] max-w-7xl items-center px-6 py-20 lg:min-h-[620px] lg:px-8 lg:py-28">
          <div className="ml-auto max-w-xl">
            <h1 className="text-[28px] font-bold leading-[38px] text-white sm:text-5xl lg:text-[64px] lg:leading-[1.1]">
              Můj přístup<br />k mindfulness
            </h1>
            <p className="mt-4 text-[18px] leading-[30px] text-white/80">
              Cítit se lépe znamená vést lépe – naučte se přejít od stresu k vnitřní stabilitě.
            </p>
          </div>
        </div>
      </section>

      {/* Big quote */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <p className="text-[24px] font-bold leading-[34px] text-[#2D2C2B]">
            &ldquo;Toto je věta, která je pro mě velmi důležitá. Buď moje poslání, nebo něco podstatného o mindfulness.&rdquo;
          </p>
        </div>
      </section>

      {/* Bio section 1 — teal bg */}
      <section className="bg-[#C0D1C6] py-16 lg:py-24">
        <div className="mx-auto flex max-w-7xl flex-col gap-12 px-6 lg:flex-row lg:items-center lg:gap-16 lg:px-8">
          <div className="lg:w-1/2">
            <h2 className="text-[28px] font-bold leading-[38px] text-[#2D2C2B]">
              Ahoj, jsem Michal Dvořák,<br />zakladatel be.mindful
            </h2>
            <p className="mt-6 text-[18px] leading-[30px] text-[#2D2C2B]/80">
              Mindfulness není jen přístup – je hluboce zakořeněn v mém životě. XXXX mě přivedl k první zkušenosti s mindfulness xxx.
            </p>
            <p className="mt-4 text-[18px] leading-[30px] text-[#2D2C2B]/80">
              Z této situace xxx se stalo a zjistil jsem, že xxx.
            </p>
            <p className="mt-4 text-[18px] leading-[30px] text-[#2D2C2B]/80">
              Dnes jsem jediným Senior Mindfulness Teacherem v České republice a můj specifický a radostný přístup zpřístupňuje mindfulness xxx lidem za posledních xxx let.
            </p>
          </div>
          <div className="relative aspect-[6/5] w-full overflow-hidden rounded-2xl lg:w-1/2">
            <Image
              src="/about-applifting-111.jpg"
              alt="Michal Dvořák při výuce"
              fill
              className="object-cover object-top"
            />
          </div>
        </div>
      </section>

      {/* Bio section 2 — gray bg */}
      <section className="bg-[#F5F6F7] py-16 lg:py-24">
        <div className="mx-auto flex max-w-7xl flex-col gap-12 px-6 lg:flex-row lg:items-center lg:gap-16 lg:px-8">
          <div className="relative aspect-[6/5] w-full overflow-hidden rounded-2xl lg:w-1/2">
            <Image
              src="/1320ea59166e2a5ba307126aaa80bb03c0da48af.jpg"
              alt="Michal Dvořák"
              fill
              className="object-cover object-top"
            />
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-[28px] font-bold leading-[38px] text-[#2D2C2B]">
              Toto je jedna konkrétní věta z mého života s mindfulness
            </h2>
            <p className="mt-5 text-[18px] leading-[30px] text-[#4B4C4D]">
              Mindfulness není jen přístup – je hluboce zakořeněn v mém životě. XXXX mě přivedl k první zkušenosti s mindfulness xxx.
            </p>
            <p className="mt-4 text-[18px] leading-[30px] text-[#4B4C4D]">
              Z této situace xxx se stalo a zjistil jsem, že xxx.
            </p>
            <p className="mt-4 text-[18px] leading-[30px] text-[#4B4C4D]">
              Dnes jsem jediným Senior Mindfulness Teacherem v České republice a můj specifický a radostný přístup zpřístupňuje mindfulness xxx lidem za posledních xxx let.
            </p>
          </div>
        </div>
      </section>

      {/* Second quote — teal bg */}
      <section className="bg-[#BFD1C6] py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <p className="text-[24px] font-bold leading-[34px] text-[#2D2C2B]">
            &ldquo;Mluvte přímo s lidmi, sdílejte něco osobního. Něco lehkého a přístupného.&rdquo;
          </p>
        </div>
      </section>

      {/* Credentials */}
      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:gap-16">
            <div className="lg:w-2/5">
              <h2 className="text-[28px] font-bold leading-[38px] text-[#2D2C2B]">15 let zkušeností</h2>
              <p className="mt-5 text-[18px] leading-[30px] text-[#4B4C4D]">
                Dopad nekončí u vás – rozšiřuje se i na ostatní:
              </p>
              <div className="mt-4 space-y-2">
                {["Lepší komunikace a zdravější hranice", "Silnější vztahy postavené na empatii", "Ukotvenější leadership i v tlaku"].map((item) => (
                  <p key={item} className="text-[18px] leading-[30px] text-[#4B4C4D]">{item}</p>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-4 lg:w-3/5">
              {credentials.map((c, i) => (
                <div key={i} className="flex items-start gap-4">
                  <img src="/tic.png" alt="" className="h-10 w-10 shrink-0" />
                  <p className="text-[18px] leading-[30px] text-[#4B4C4D]">
                    <strong className="font-bold text-[#2D2C2B]">{c.bold}</strong>
                    {c.rest}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <StatsBar />

      {/* CTA */}
      <section className="bg-[#F5F6F4] py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h2 className="text-[28px] font-bold leading-[38px] text-[#2D2C2B]">Připojte se k mé cestě</h2>
              <p className="mt-2 text-[18px] leading-[30px] text-[#4B4C4D]">Začněte svou cestu k mindfulness s osobním vedením.</p>
            </div>
            <div className="flex shrink-0 flex-wrap gap-4">
              <Button asChild variant="primary-orange" className="group">
                <Link href="/kurzy/start-to-pause">
                  <span className="flex items-center gap-2">Vstoupit do FREE kurzu <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" /></span>
                </Link>
              </Button>
              <Button asChild variant="primary">
                <Link href="/kontakt">Kontaktovat mě</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
