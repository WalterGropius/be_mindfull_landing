import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

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
          src="/Pictures/_DSC7728.jpg"
          alt="Michal Dvořák"
          fill
          className="object-cover object-top opacity-70"
          priority
        />
        <div className="relative z-10 flex min-h-[520px] items-center lg:min-h-[620px]">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="ml-auto max-w-sm">
              <h1 className="text-4xl font-bold text-white lg:text-5xl">
                Můj přístup<br />k mindfulness
              </h1>
              <p className="mt-4 text-base text-white/80">
                Cítit se lépe znamená vést lépe – naučte se přejít od stresu k vnitřní stabilitě.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Big quote */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <p className="text-xl font-bold leading-snug text-[#2D2C2B] lg:text-2xl">
            &ldquo;Toto je věta, která je pro mě velmi důležitá. Buď moje poslání, nebo něco podstatného o mindfulness.&rdquo;
          </p>
        </div>
      </section>

      {/* Bio section 1 — teal bg */}
      <section className="bg-[#C0D1C6] py-16 lg:py-24">
        <div className="mx-auto flex max-w-7xl flex-col gap-12 px-6 lg:flex-row lg:items-center lg:gap-16 lg:px-8">
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold text-[#2D2C2B] lg:text-4xl">
              Ahoj, jsem Michal Dvořák,<br />zakladatel be.mindful
            </h2>
            <p className="mt-6 text-base leading-relaxed text-[#2D2C2B]/80">
              Mindfulness není jen přístup – je hluboce zakořeněn v mém životě. XXXX mě přivedl k první zkušenosti s mindfulness xxx.
            </p>
            <p className="mt-4 text-base leading-relaxed text-[#2D2C2B]/80">
              Z této situace xxx se stalo a zjistil jsem, že xxx.
            </p>
            <p className="mt-4 text-base leading-relaxed text-[#2D2C2B]/80">
              Dnes jsem jediným Senior Mindfulness Teacherem v České republice a můj specifický a radostný přístup zpřístupňuje mindfulness xxx lidem za posledních xxx let.
            </p>
          </div>
          <div className="overflow-hidden rounded-2xl lg:w-1/2">
            <Image
              src="/BeMindful_Letna2026AnnaSolcova.16.jpg"
              alt="Michal Dvořák při výuce"
              width={600}
              height={500}
              className="w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Bio section 2 — gray bg */}
      <section className="bg-[#F5F6F7] py-16 lg:py-24">
        <div className="mx-auto flex max-w-7xl flex-col gap-12 px-6 lg:flex-row lg:items-center lg:gap-16 lg:px-8">
          <div className="overflow-hidden rounded-2xl lg:w-2/5">
            <Image
              src="/BeMindful_Letna2026AnnaSolcova.5.jpg"
              alt="Michal Dvořák"
              width={400}
              height={400}
              className="w-full object-cover"
            />
          </div>
          <div className="lg:w-3/5">
            <h2 className="text-2xl font-bold text-[#2D2C2B] lg:text-3xl">
              Toto je jedna konkrétní věta z mého života s mindfulness
            </h2>
            <p className="mt-5 text-base leading-relaxed text-[#4B4C4D]">
              Mindfulness není jen přístup – je hluboce zakořeněn v mém životě. XXXX mě přivedl k první zkušenosti s mindfulness xxx.
            </p>
            <p className="mt-4 text-base leading-relaxed text-[#4B4C4D]">
              Z této situace xxx se stalo a zjistil jsem, že xxx.
            </p>
            <p className="mt-4 text-base leading-relaxed text-[#4B4C4D]">
              Dnes jsem jediným Senior Mindfulness Teacherem v České republice a můj specifický a radostný přístup zpřístupňuje mindfulness xxx lidem za posledních xxx let.
            </p>
          </div>
        </div>
      </section>

      {/* Second quote — teal bg */}
      <section className="bg-[#8ECDB5] py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <p className="text-xl font-bold leading-snug text-[#2D2C2B] lg:text-2xl">
            &ldquo;Mluvte přímo s lidmi, sdílejte něco osobního. Něco lehkého a přístupného.&rdquo;
          </p>
        </div>
      </section>

      {/* Credentials */}
      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:gap-16">
            <div className="lg:w-2/5">
              <h2 className="text-3xl font-bold text-[#2D2C2B] lg:text-4xl">15 let zkušeností</h2>
              <p className="mt-5 text-base leading-relaxed text-[#4B4C4D]">
                Dopad nekončí u vás – rozšiřuje se i na ostatní:
              </p>
              <div className="mt-4 space-y-2">
                {["Lepší komunikace a zdravější hranice", "Silnější vztahy postavené na empatii", "Ukotvenější leadership i v tlaku"].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <ArrowRight className="h-4 w-4 shrink-0 text-[#7BC0A4]" />
                    <p className="text-sm text-[#4B4C4D]">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-4 lg:w-3/5">
              {credentials.map((c, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#E3FFE2]">
                    <Check className="h-3.5 w-3.5 text-[#7BC0A4]" strokeWidth={3} />
                  </div>
                  <p className="text-sm leading-relaxed text-[#4B4C4D]">
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
      <section className="bg-[#7BC0A4] py-14">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-3 divide-x divide-white/30 text-center">
            {[
              { num: "15+", label: "Let praxe" },
              { num: "2K+", label: "Absolventi" },
              { num: "1", label: "Senior Mindfulness Teacher v CR" },
            ].map((s) => (
              <div key={s.num} className="px-6">
                <p className="text-4xl font-bold text-white lg:text-5xl">{s.num}</p>
                <p className="mt-2 text-sm text-white/80">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h2 className="text-3xl font-bold text-[#2D2C2B] lg:text-4xl">Připojte se k mé cestě</h2>
              <p className="mt-2 text-base text-[#4B4C4D]">Začněte svou cestu k mindfulness s osobním vedením.</p>
            </div>
            <div className="flex shrink-0 flex-wrap gap-4">
              <Button asChild className="h-auto rounded-full bg-[#E2763A] px-8 py-3 text-sm font-semibold text-white hover:bg-[#D96B2E]">
                <Link href="/kurzy/start-to-pause">Vstoupit do FREE kurzu <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
              <Button asChild variant="outline" className="h-auto rounded-full border-[#7BC0A4] px-8 py-3 text-sm font-semibold text-[#7BC0A4] hover:bg-[#7BC0A4] hover:text-white">
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
