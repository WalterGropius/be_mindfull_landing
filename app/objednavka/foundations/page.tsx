import { ObjednavkaPage } from "@/components/objednavka-page"

export default function FoundationsCheckoutPage() {
  return (
    <ObjednavkaPage
      title="Skvělé rozhodnutí. Zbývá jediný krok"
      intro="Podívej se, co je uvnitř, a vyber si způsob platby."
      includesHeading="Co všechno najdeš ve Foundations?"
      includes={[
        {
          title: "30 krátkých lekcí, které tě posunou",
          content:
            "Praktické 10minutové lekce zaměřené na témata z běžného života – stres, zahlcení, emoce, soustředění – propojené s jednoduchými tipy, které můžeš hned využít.",
        },
        {
          title: "20 meditací mindfulness. Pustíš, zavřeš oči, cvičíš",
          content:
            "Ke každé lekci nahrávka, díky které začneš mindfulness opravdu používat. Krok za krokem k většímu klidu, soustředění a odolnosti.",
        },
        {
          title: "Společná meditace online naživo",
          content:
            "Dvakrát za měsíc tě čeká vedená online meditace s Michalem, díky které si udržíš pravidelnou praxi i prostor na chvíli opravdu vypnout.",
        },
        {
          title: "Otázky a odpovědi naživo online",
          content:
            "Když ti něco nejde, máš se koho zeptat. Jednou za tři týdny se můžeš ptát na cokoliv, co zrovna řešíš, a uslyšíš zkušenosti lidí, kteří to mají podobně.",
        },
      ]}
      bonuses={[
        {
          title: "Bonus | Přístup do be.mindful Membership",
          content:
            "Přístup do aplikace máš na 12 měsíců. Začínáš v programu FOUNDATIONS, a jakmile dokončíš základy, otevře se ti přístup do navazujícího be.mindful MEMBERSHIP.",
        },
        {
          title: "Bonus | Živá setkání 2× ročně v Praze",
          content:
            "Akce pro be.mindful komunitu – společná praxe, nová setkání a inspirativní čas s lidmi, kteří to mají podobně jako ty.",
        },
        {
          title: "Bonus | Certifikát o absolvování",
          content:
            "Na vyžádání obdržíš certifikát o absolvování programu FOUNDATIONS.",
        },
      ]}
      plansHeading="Vyber si plán, co sedne tobě i tvé peněžence"
      plans={[
        {
          title: "Roční členství",
          subtitle: (
            <>
              Nejoblíbenější volba
              <br />
              Jen 183 Kč měsíčně. Ušetříš 560 Kč.
            </>
          ),
          oldPrice: "2 200 Kč / rok",
          price: "1 870 Kč / rok",
          suffix: null,
          priceNote: "Sleva 15 % platí jen do 30. 6. 2026",
          cta: "To beru",
        },
        {
          title: "Roční členství ve dvou platbách",
          subtitle: "Platbu si rozložíš na 2 × 1 250 Kč. Vychází na 208 Kč měsíčně.",
          oldPrice: "1 250 Kč / 6 měsíců",
          price: "1 062 Kč / 6 měsíců",
          suffix: null,
          priceNote: "Sleva 15 % platí jen do 30. 6. 2026",
          cta: "Jdu do toho",
        },
        {
          title: "Roční členství s měsíční platbou",
          subtitle: "Žádná velká částka na začátku.",
          oldPrice: "230 Kč / měsíc",
          price: "195 Kč / měsíc",
          suffix: null,
          priceNote: "Sleva 15 % platí jen do 30. 6. 2026",
          cta: "Tady začnu",
        },
      ]}
    />
  )
}
