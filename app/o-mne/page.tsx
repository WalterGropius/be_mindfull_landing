import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { StatsBar } from "@/components/stats-bar"

type CredentialRow = { year: string; rest: string }

const credentials: CredentialRow[] = [
  {
    year: "2023",
    rest:
      "Získání nejvyšší kvalifikace **Senior Mindfulness Teacher** dle mezinárodních standardů (International Mindfulness Integrity Network). Tuto kvalifikaci mám nyní jako jediný v ČR.",
  },
  {
    year: "2021–2022",
    rest: "**Mindfulness Supervision Training** (Present Mind, Nizozemsko).",
  },
  {
    year: "2021–2022",
    rest:
      "**MBSR Teacher Certification** na Brown University v USA a získání nejvyšší možné kvalifikace **Certified MBSR Teacher (Level 3)**. Tuto certifikaci mám nyní jako jediný v ČR a jako 136. na světě.",
  },
  {
    year: "2021",
    rest:
      "**MBSR Individual Mentoring**, dvouměsíční program na Brown University v USA (Colleen Camenisch) a dokončení certifikace **MBSR Teacher Level 2**.",
  },
  {
    year: "2019",
    rest:
      "**8týdenní MBSR Group Supervision** (Margareth Fletcher, UMASS Medical School, USA).",
  },
  {
    year: "2018",
    rest:
      "**8týdenní Mindful Eating Facilitator training** (Judson Brewer, UMASS Medical School, USA).",
  },
  {
    year: "2018",
    rest:
      "**Practise Teaching Intensive** (Bob Stahl, Carolyne West, Christiane Wolf, UMASS Medical School, USA) a získání certifikátu **CFM Qualified MBSR Teacher (Level 1)**.",
  },
  {
    year: "2017–2023",
    rest:
      "Absolvování nebo spoluvedení více než **15 meditačních retreatů**.",
  },
  {
    year: "2017",
    rest:
      "**8týdenní MBSR Fundamental** (Carolyne West, UMASS Medical School, USA).",
  },
  {
    year: "2016",
    rest: "**Základní 8týdenní MBSR kurz** (Rebecca Eldridge).",
  },
  {
    year: "2010–2015",
    rest: "**Psychoterapeutický výcvik v systému SUR**.",
  },
  {
    year: "2004–2009",
    rest:
      "Studium andragogiky a sociologie, Univerzita Palackého v Olomouci.",
  },
]

function renderBold(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g)
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={i} className="font-bold text-[#2D2C2B]">{part.slice(2, -2)}</strong>
    }
    return <span key={i}>{part}</span>
  })
}

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
          className="object-cover object-top lg:object-center"
          priority
        />
        <div className="relative z-10 mx-auto flex min-h-[520px] max-w-7xl items-end px-6 pb-10 pt-20 lg:min-h-[620px] lg:items-center lg:px-8 lg:py-28">
          <div className="ml-auto max-w-xl">
            <h1 className="text-[28px] font-bold leading-[38px] text-white sm:text-5xl lg:text-[64px] lg:leading-[1.1]">
              Mindfulness pro reálný život. To je můj přístup
            </h1>
            <p className="mt-4 text-[18px] leading-[30px] text-white/85">
              Nejsem teoretik. Mindfulness žiju každý den, v dobrých i náročných chvílích. A přesně to učím.
            </p>
          </div>
        </div>
      </section>

      {/* Big quote */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <p className="text-[24px] font-bold leading-[34px] text-[#2D2C2B]">
            „Mindfulness mě sice nezbavilo problémů. Ale naučilo mě procházet jimi s větším klidem a nadhledem.“
          </p>
        </div>
      </section>

      {/* Bio section 1 — teal bg */}
      <section className="bg-[#C0D1C6] py-16 lg:py-24">
        <div className="mx-auto flex max-w-7xl flex-col gap-12 px-6 lg:flex-row lg:items-center lg:gap-16 lg:px-8">
          <div className="lg:w-1/2">
            <h2 className="text-[28px] font-bold leading-[38px] text-[#2D2C2B]">
              Jsem Michal Dvořák,<br />zakladatel be.mindful a lektor
            </h2>
            <p className="mt-6 text-[18px] leading-[30px] text-[#2D2C2B]/85">
              Jsem jediný Senior Mindfulness Teacher v ČR, s výcvikem z UMASS Medical School a Brown University. Mindfulness učím od roku 2018, mám za sebou pětiletý psychoterapeutický výcvik v systému SUR a mými kurzy prošlo přes 3 000 lidí.
            </p>
            <p className="mt-4 text-[18px] leading-[30px] text-[#2D2C2B]/85">
              Nejsem žádný guru. Jsem manžel, táta a člověk, který má také špatné dny, jen ví, jak s nimi pracovat. Mindfulness učím tak, aby ho lidé opravdu dokázali použít. Ne jako hezkou teorii, ale jako něco, co funguje i uprostřed každodenního shonu.
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
              className="object-cover object-bottom"
            />
          </div>
          <div className="lg:w-1/2">
            <p className="text-[15px] font-bold uppercase tracking-wider text-[#7BC0A4]">
              Jak jsem se dostal k mindfulness
            </p>
            <h2 className="mt-3 text-[28px] font-bold leading-[38px] text-[#2D2C2B]">
              Zjistil jsem, že klid není něco, na co si musím najít čas, ale způsob, jak mohu čas prožívat
            </h2>
            <p className="mt-5 text-[18px] leading-[30px] text-[#4B4C4D]">
              K mindfulness mě přivedla zvědavost a kus zoufalství. Hektický život, věčně plná hlava a potřeba dostat se z toho kolotoče ven. Přihlásil jsem se na 8týdenní kurz a ten změnil víc, než jsem čekal.
            </p>
            <p className="mt-4 text-[18px] leading-[30px] text-[#4B4C4D]">
              Mindfulness totiž neznamená vypnout hlavu. Znamená naučit se s ní pracovat. Náročné dny mám dál, jen jimi dnes procházím s větším klidem a nadhledem.
            </p>
            <p className="mt-4 text-[18px] leading-[30px] text-[#4B4C4D]">
              A přesně tohle chci předat dál. Aby mindfulness bylo dostupné, pochopitelné a použitelné pro každého. Bez ezoteriky a podložené vědou.
            </p>
          </div>
        </div>
      </section>

      {/* Second quote — teal bg */}
      <section className="bg-[#BFD1C6] py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <p className="text-[24px] font-bold leading-[34px] text-[#2D2C2B]">
            „S narozením syna se mi život obrátil naruby. O to víc jsem si uvědomil, jak moc mindfulness potřebuju a co mi v těžkých chvílích opravdu pomáhá. To, co se mi osvědčilo, dnes učím dál.“
          </p>
        </div>
      </section>

      {/* Credentials */}
      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:gap-16">
            <div className="lg:w-2/5">
              <h2 className="text-[28px] font-bold leading-[38px] text-[#2D2C2B]">Mgr. Michal Dvořák</h2>
              <p className="mt-5 text-[18px] leading-[30px] text-[#4B4C4D]">
                Senior Mindfulness Teacher<br />
                (International Mindfulness Integrity Network)
              </p>
              <ul className="mt-4 space-y-2 text-[18px] leading-[30px] text-[#4B4C4D]">
                <li>• Certified MBSR Teacher (Brown University, USA)</li>
                <li>• Mindfulness Supervisor (Present Mind, Nizozemsko)</li>
                <li>• Mindful Eating Facilitator (UMASS Medical School, USA)</li>
              </ul>
            </div>
            <div className="flex flex-col gap-4 lg:w-3/5">
              {credentials.map((c, i) => (
                <div key={i} className="flex items-start gap-4">
                  <span className="min-w-[110px] text-[15px] font-bold uppercase tracking-wider text-[#7BC0A4]">
                    {c.year}
                  </span>
                  <p className="text-[18px] leading-[30px] text-[#4B4C4D]">{renderBold(c.rest)}</p>
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
              <h2 className="text-[28px] font-bold leading-[38px] text-[#2D2C2B]">Mindfulness pro skutečný život</h2>
              <p className="mt-2 text-[18px] leading-[30px] text-[#4B4C4D]">Udělej první krok s mojí podporou.</p>
            </div>
            <div className="flex w-full shrink-0 flex-wrap gap-4 lg:w-auto">
              <Button asChild variant="primary-orange" className="group h-auto max-w-full whitespace-normal py-4 text-center leading-tight">
                <Link href="/kurzy/start-to-pause">
                  <span className="flex items-center justify-center gap-2">Začni 4denní kurz Restart hlavy zdarma <ArrowRight className="h-5 w-5 shrink-0 transition-transform group-hover:translate-x-1" /></span>
                </Link>
              </Button>
              <Button asChild variant="primary">
                <Link href="/kontakt">Napiš mi</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
