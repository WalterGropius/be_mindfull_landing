import { ObjednavkaPage } from "@/components/objednavka-page"

export default function MembershipCheckoutPage() {
  return (
    <ObjednavkaPage
      title="Skvělé rozhodnutí. Zbývá jediný krok"
      intro="Podívej se, co najdeš uvnitř, a vyber si způsob platby."
      includesHeading="be.mindful MEMBERSHIP obsahuje"
      includes={[
        {
          title: "be.mindful LIBRARY",
          content:
            "Když tě něco zajímá nebo se chceš ponořit do tématu hlouběji. Články, tipy a inspirace pro klidnější běžné dny, vždycky po ruce.",
        },
        {
          title: "be.mindful COMMUNITY",
          content:
            "Nejtěžší je zůstat na mindfulness praxi sám/sama. Tady potkáš lidi, kteří řeší podobné věci jako ty: stres, přetížení, hledání rovnováhy. Najdeš tu nejen inspiraci, ale i podporu a přátelství.",
        },
        {
          title: "Společná meditace online naživo",
          content:
            "Nejsi v tom sám. Dvakrát za měsíc se zastavíme společně. Vedená meditace s Michalem, díky které si udržíš rytmus, motivaci i klid v běžném dni.",
        },
        {
          title: "Otázky a odpovědi naživo online",
          content:
            "Když ti něco nejde, máš se koho zeptat. Jednou za tři týdny se můžeš ptát na cokoliv, co zrovna řešíš, a slyšíš zkušenosti lidí, kteří to mají podobně. Jeden týden meditace, druhý týden Q&A.",
        },
        {
          title: "Audionahrávky cvičení mindfulness",
          content:
            "Stres, spánek, obtížné emoce, ať už řešíš cokoliv, máš k dispozici desítky nahrávek meditací pro chvíle, kdy potřebuješ zklidnit hlavu, vrátit pozornost k sobě nebo si vydechnout. Databáze stále roste.",
        },
        {
          title: "be.mindful videokurzy | Mindful eating, Digitální svoboda, Mindfulness II",
          content:
            "Oblíbené videokurzy na aktuální témata: zdravější vztah k jídlu, digitální technologie a boj o pozornost, emoce nebo mindfulness postoje. Celkem 200+ videolekcí, ze kterých si vybereš podle toho, co zrovna řešíš. A Foundations máš pořád po ruce jako základ.",
        },
      ]}
      bonuses={[
        {
          title: "Bonus | Nový obsah po celý rok",
          content:
            "Během roku neustále přibývají nové nahrávky i videolekce. Nudit se rozhodně nebudeš.",
        },
        {
          title: "Bonus | Živá setkání 2× ročně v Praze",
          content:
            "Dvakrát do roka mindfulness akce jen pro členy be.mindful komunity. Společná praxe, nové podněty i čas s inspirativními lidmi.",
        },
        {
          title: "Bonus | Certifikát o absolvování",
          content:
            "Na vyžádání obdržíš certifikát o absolvování programu MEMBERSHIP.",
        },
      ]}
      plansHeading="Vyber si plán, který sedne tobě i tvé peněžence"
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
          price: "1 870 Kč",
          suffix: "/ rok",
          priceNote: "Sleva 15 % platí jen do 30. 6. 2026",
          cta: "To beru",
        },
        {
          title: "Roční členství ve dvou platbách",
          subtitle: "Platbu si rozložíš na 2 × 1 250 Kč. Vychází na 208 Kč měsíčně.",
          oldPrice: "1 250 Kč / 6 měsíců",
          price: "1 062 Kč",
          suffix: "/ 6 měsíců",
          priceNote: "Sleva 15 % platí jen do 30. 6. 2026",
          cta: "Jdu do toho",
        },
        {
          title: "Roční členství s měsíční platbou",
          subtitle: "Žádná velká částka na začátku.",
          oldPrice: "230 Kč / měsíc",
          price: "195 Kč",
          suffix: "/ měsíc",
          priceNote: "Sleva 15 % platí jen do 30. 6. 2026",
          cta: "Tady začnu",
        },
      ]}
    />
  )
}
