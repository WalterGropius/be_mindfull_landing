import { ArrowRight, Check, TrendingUp, Video, BookOpen, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { NewsletterSection } from "@/components/newsletter-section"
import { Footer } from "@/components/footer"

const benefits = [
  'Posilujte \u201Esval mindfulness\u201C a udržujte svou všímavost živou',
  "Důvěřujte sobě, že zvládnete životní výzvy",
  "Vracejte se ke zdravým návykům, i když z nich někdy sejdete",
  "Najděte podporu v náročných životních situacích",
  "Zůstaňte dlouhodobě motivovaní a propojení díky ověřené struktuře",
  "Zažijte neposuzující a pevnou komunitu",
  "Vytvářejte trvalý pozitivní dopad na své zdraví a pohodu",
  "Naučte se ovládat své myšlenky a měnit omezující přesvědčení",
  "Budujte emoční odolnost",
]

const socialBenefits = ["Lepší vztahy", "Větší laskavost a propojení", "Lepší zvládání stresu"]

const testimonials = [
  { name: "Martina Junková", text: "Už se tolik neztotožňuji s tím, co se mi honí v hlavě. Víc vnímám dění v sobě i kolem sebe, bez hodnocení. To mi dává víc prostoru reagovat s klidem a nadhledem." },
  { name: "Jitka Selingerová", text: "Díky mindfulness se mi daří být v lepším kontaktu sama se sebou a tím i s klienty." },
  { name: "Michaela Brejchová", text: "Díky kurzu jsem si osvojila laskavější přístup ke svým myšlenkám a snížila tlak na to, jak by věci měly být." },
]

export default function MembershipPage() {
  return (
    <main className="min-h-screen font-sans">
      <Header />

      {/* Hero */}
      <section className="bg-[#E3FFE2] py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-3xl font-bold text-[#5E767E] lg:text-4xl">be.mindful Membership</h1>
            <p className="mt-4 text-lg text-[#9DA59C]">Váš každodenní prostor k zastavení – udržujte rovnováhu</p>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-background py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl">
            <h2 className="text-2xl font-bold text-[#5E767E] lg:text-3xl">Zůstaňte propojeni – udržujte rovnováhu</h2>
            <p className="mt-5 text-sm leading-relaxed text-[#9DA59C]">
              Život se skládá z okamžiků – a právě schopnost zastavit se je nástroj, který nám umožňuje být přítomní s tím, co se děje v nás i kolem nás. Díky tomu můžeme naplno vnímat krásu kolem sebe a zvládat výzvy s větší lehkostí.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-[#9DA59C]">
              {'Jakmile máte svou \u201Evšímavou výbavu\u201C, rozumíte tomu, jak funguje mozek a jak pracovat s myšlenkami a stresem. Jde o trénink \u201Esvalu mindfulness\u201C, abychom mu mohli věřit v každé situaci.'}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-[#9DA59C]">
              Všichni to známe: vytvoříme si nové návyky, ale pak přijde život. Nepředvídané situace nebo stresující období nás mohou vrátit zpět do starých vzorců. Proto potřebujeme strukturu, která nám umožní se snadno vrátit na cestu.
            </p>
          </div>
          <div className="mx-auto mt-10 max-w-2xl space-y-3">
            {benefits.map((b, i) => (
              <div key={i} className="flex items-start gap-3">
                <TrendingUp className="mt-0.5 h-4 w-4 shrink-0 text-[#5E767E]" />
                <p className="text-sm text-[#9DA59C]">{b}</p>
              </div>
            ))}
          </div>
          <div className="mx-auto mt-6 max-w-2xl">
            <p className="text-sm font-medium text-[#5E767E]">A nejde jen o vás – ale i o lidi kolem vás:</p>
            <div className="mt-3 space-y-2">
              {socialBenefits.map((s, i) => (
                <div key={i} className="flex items-center gap-3">
                  <Check className="h-4 w-4 shrink-0 text-[#5E767E]" />
                  <p className="text-sm text-[#9DA59C]">{s}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="bg-[#E3FFE2] py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-2xl font-bold text-[#5E767E] lg:text-3xl">Co je součástí členství</h2>
          <div className="mx-auto mt-12 grid max-w-4xl gap-8 md:grid-cols-3">
            <div className="rounded-xl border border-[#C0D1C6] bg-background p-6 text-center">
              <Video className="mx-auto h-8 w-8 text-[#5E767E]" />
              <h3 className="mt-4 text-base font-bold text-[#5E767E]">4týdenní online kurz</h3>
              <p className="mt-2 text-sm text-[#9DA59C]">Krátká 10minutová videa se základy mindfulness – jak vytvořit prostor v zahlcené mysli, jak nacházet klid v napětí.</p>
            </div>
            <div className="rounded-xl border border-[#C0D1C6] bg-background p-6 text-center">
              <BookOpen className="mx-auto h-8 w-8 text-[#5E767E]" />
              <h3 className="mt-4 text-base font-bold text-[#5E767E]">be.mindful LIBRARY</h3>
              <p className="mt-2 text-sm text-[#9DA59C]">12 měsíců neomezeného přístupu do knihovny plné tematických meditací, praktických tipů a rozhovorů.</p>
            </div>
            <div className="rounded-xl border border-[#C0D1C6] bg-background p-6 text-center">
              <Users className="mx-auto h-8 w-8 text-[#5E767E]" />
              <h3 className="mt-4 text-base font-bold text-[#5E767E]">be.mindful COMMUNITY</h3>
              <p className="mt-2 text-sm text-[#9DA59C]">Změna je týmová záležitost. V okamžicích, kdy ztrácíme nadhled, je důležité mít kolem sebe lidi, kteří už tou cestou prošli.</p>
            </div>
          </div>
          <div className="mx-auto mt-12 max-w-2xl space-y-6">
            <div className="rounded-xl border border-[#C0D1C6] bg-background p-6">
              <h3 className="text-base font-bold text-[#5E767E]">Týdenní živé meditace + záznamy</h3>
              <p className="mt-2 text-sm text-[#9DA59C]">{'Bezpečný prostor pro návrat k sobě \u2013 když vás život rozhodí nebo když chcete udržet rovnováhu. Říkejte tomu své \u201Ewellbeing fitko pro mysl\u201C.'}</p>
            </div>
            <div className="rounded-xl border border-[#C0D1C6] bg-background p-6">
              <h3 className="text-base font-bold text-[#5E767E]">Měsíční živá setkání + záznamy</h3>
              <p className="mt-2 text-sm text-[#9DA59C]">Prostor pro vaše otázky a osobní podporu v konkrétních životních situacích. Skvělý způsob, jak vidět, že mindfulness funguje v reálném životě.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Summary */}
      <section className="bg-background py-16 lg:py-24">
        <div className="mx-auto max-w-2xl px-6 text-center lg:px-8">
          <h2 className="text-2xl font-bold text-[#5E767E]">Rovnováha se tvoří z okamžiků</h2>
          <p className="mt-4 text-sm leading-relaxed text-[#9DA59C]">
            Najdete zde všechny nástroje a podporu, které vám pomohou udržet rovnováhu a vrátit se k mindfulness, když život rozptýlí vaši pozornost.
          </p>
          <div className="mt-8">
            <Button className="h-auto rounded-full bg-[#7BC0A4] px-8 py-3 text-sm text-white hover:bg-[#008F7A]">
              Staňte se členem be.mindful <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-[#E3FFE2] py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-2xl font-bold text-[#5E767E]">Zkušenosti účastníků</h2>
          <div className="mx-auto mt-10 grid max-w-4xl gap-6 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <div key={i} className="rounded-xl border border-[#C0D1C6] bg-background p-6">
                <p className="text-sm italic text-[#9DA59C]">&ldquo;{t.text}&rdquo;</p>
                <p className="mt-4 text-sm font-medium text-[#5E767E]">{t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <NewsletterSection />
      <Footer />
    </main>
  )
}
