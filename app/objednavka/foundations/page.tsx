import { ObjednavkaPage } from "@/components/objednavka-page"

export default function FoundationsCheckoutPage() {
  return (
    <ObjednavkaPage
      title="Skvělé. Už tě dělí jen jeden krok od začátku be.mindful FOUNDATIONS."
      intro="Co dostaneš a jak zaplatit be.mindful FOUNDATIONS."
      includesHeading="be.mindful FOUNDATIONS obsahuje:"
      includes={[
        {
          title: "30 lekcí po 10 minutách. Každá tě posune.",
          content:
            "Každá lekce se zaměřuje na jedno téma a propojuje teorii s praxí. Na závěr dostaneš konkrétní kroky, jak téma hned začít využívat.",
        },
        {
          title: "20 audiomeditací. Pouštíš, zavřeš oči, cvičíš. Mindfulness v praxi.",
          content:
            "Každá lekce je doplněná audionahrávkou, díky které začneš mindfulness opravdu přenášet do každodenního života. Krok za krokem si buduješ větší klid, soustředění, odolnost i schopnost lépe zvládat stres a náročné situace.",
        },
        {
          title: "Vedená meditace s Michalem naživo (online)",
          content:
            "Nejsi v tom sám/a. Jednou za 14 dní se zastavíme společně – vedená meditace naživo, pravidelný rytmus a podpora, která tě drží v praxi.",
        },
        {
          title: "Tvé otázky, moje odpovědi. Naživo (online)",
          content:
            "Jednou za 14 dní prostor jen pro tebe – ptej se na cokoliv, co tě zajímá nebo právě řešíš. Praxe, pochybnosti, konkrétní situace. Rád odpovím. A setkáš se s lidmi, kteří řeší podobné věci jako ty.",
        },
      ]}
      bonuses={[
        {
          title: "BONUS 1: Přístup do be.mindful Membership",
          content:
            "Přístup do aplikace máš celkem 12 měsíců. Začínáš ve Foundations – a jakmile dokončíš základy, plynule pokračuješ v be.mindful Membership.",
        },
        {
          title: "BONUS 2: Naživo v Praze. Dvakrát ročně. Jen pro vás.",
          content:
            "Jednou za půl roku mindfulness akce pro be.mindful komunitu – prostor pro společnou praxi, setkání a povídání s lidmi.",
        },
      ]}
      plans={[
        { title: "Roční členství – jednorázově", subtitle: "Nejlepší cena", price: "2 200 Kč", suffix: "(183 Kč měsíčně)" },
        { title: "Roční členství – dvě platby", subtitle: "Rozložená platba", price: "1 250 Kč", suffix: "/ 6 měsíců (208 Kč měsíčně)" },
        { title: "Roční členství – měsíční platby", subtitle: "Nejmenší jednorázová částka", price: "230 Kč", suffix: "/ měsíc" },
      ]}
    />
  )
}
