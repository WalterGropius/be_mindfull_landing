import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ExpandableItems, type ExpandableItem } from "@/components/expandable-items"

export type PricingPlan = {
  title: string
  subtitle: string
  price: string
  suffix: string | null
  cta?: string
}

export type ObjednavkaPageProps = {
  title: string
  intro: string
  includesHeading: string
  includes: ExpandableItem[]
  bonusesHeading?: string
  bonuses?: ExpandableItem[]
  plansHeading?: string
  plansSubheading?: string
  plans: PricingPlan[]
}

export function ObjednavkaPage({
  title,
  intro,
  includesHeading,
  includes,
  bonusesHeading = "Bonusy",
  bonuses,
  plansHeading = "Vyberte si platební plán",
  plansSubheading,
  plans,
}: ObjednavkaPageProps) {
  return (
    <main className="min-h-screen font-sans">
      <Header />

      {/* Intro */}
      <section className="bg-[#F5F6F4] py-16 lg:py-24">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <h1 className="text-[28px] font-bold leading-[38px] text-[#2D2C2B] sm:text-5xl lg:text-[64px] lg:leading-[1.1]">
            {title}
          </h1>
          <p className="mt-6 text-[18px] leading-[30px] text-[#4B4C4D]">{intro}</p>
        </div>
      </section>

      {/* Includes box */}
      <section className="bg-[#F5F6F4] pb-16 lg:pb-24">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="overflow-hidden rounded-2xl">
            <div className="bg-[#7BC0A4] px-6 py-5">
              <p className="text-[18px] font-bold leading-[30px] text-white">
                {includesHeading}
              </p>
            </div>
            <ExpandableItems items={includes} />
            {bonuses && bonuses.length > 0 && (
              <>
                <div className="bg-[#7BC0A4] px-6 py-5">
                  <p className="text-[18px] font-bold leading-[30px] text-white">{bonusesHeading}</p>
                </div>
                <ExpandableItems items={bonuses} />
              </>
            )}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-[28px] font-bold leading-[38px] text-[#2D2C2B]">
            {plansHeading}
          </h2>
          {plansSubheading && (
            <p className="mx-auto mt-4 max-w-2xl text-center text-[18px] leading-[30px] text-[#4B4C4D]">
              {plansSubheading}
            </p>
          )}
          <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-3">
            {plans.map((p) => (
              <div
                key={p.title}
                className="flex flex-col rounded-2xl bg-[#F5F6F4] p-8"
              >
                <p className="text-[24px] font-bold leading-[34px] text-[#2D2C2B]">
                  {p.title}
                </p>
                <p className="mt-1 text-sm text-[#4B4C4D]">{p.subtitle}</p>
                <p className="mt-8 text-[36px] font-bold leading-[46px] text-[#2D2C2B]">
                  {p.price}
                  {p.suffix && (
                    <span className="ml-2 text-sm font-normal text-[#4B4C4D]">
                      {p.suffix}
                    </span>
                  )}
                </p>
                <div className="mt-8">
                  <Button
                    className="h-auto w-full rounded-full bg-[#7BC0A4] px-8 py-3 text-[18px] font-semibold text-white hover:bg-[#6BB194]"
                  >
                    {p.cta ?? "Pokračovat k platbě"}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
