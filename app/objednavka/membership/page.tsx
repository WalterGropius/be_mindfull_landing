import { ObjednavkaPage } from "@/components/objednavka-page"

export default function MembershipCheckoutPage() {
  return (
    <ObjednavkaPage
      title="Skvělé. Už tě dělí jen jeden krok od začátku be.mindful MEMBERSHIP."
      intro="Tady je přehled toho, co vše získáš v be.mindful MEMBERSHIP a možnosti, jak jej uhradit."
      includesHeading="be.mindful MEMBERSHIP obsahuje:"
      includes={[
        {
          title: "be.mindful LIBRARY",
          content:
            "Získáš přístup na 12 měsíců do knihovny plné článků, praktických tipů a další inspirace pro klidnější a vědomější život.",
        },
        {
          title: "be.mindful COMMUNITY",
          content:
            "Lidé, kteří řeší podobné věci jako ty. Stres, přetížení, hledání rovnováhy – nebo prostě chuť nepřestat. Najdeš tu podporu, inspiraci i přátelství, které tě drží v praxi.",
        },
        {
          title: "Pravidelné meditace naživo (online)",
          content:
            "Nejsi v tom sám/a. Jednou za 14 dní se zastavíme společně – vedená meditace s Michalem, která ti pomáhá udržet rytmus, motivaci i klid v každodenním životě.",
        },
        {
          title: "Pravidelná Q&A setkání naživo (online)",
          content:
            "Jednou za 14 dní proběhne online Q&A, kde se můžeš zeptat na cokoliv, co tě zajímá nebo právě řešíš. Rád ti odpovím. Získáš podporu pro pokračování v praxi, větší motivaci i kontakt s lidmi, kteří řeší podobné věci jako ty. Jeden týden meditace, druhý týden Q&A – takže se potkáme naživo každý týden.",
        },
        {
          title: "Audionahrávky cvičení mindfulness",
          content:
            "Soustředění. Stres. Spánek. Všímavost. Na každou situaci jiná nahrávka – a databáze stále roste.",
        },
        {
          title: "be.mindful videokurzy – Mindful eating, Digitální svoboda, Mindfulness II. a další",
          content:
            "Zdravý vztah k jídlu. Digitální technologie. Emoce. Překážky při meditaci. Mindfulness postoje. Každé oblasti věnovaný vlastní videokurz. 200 videolekcí a 100+ audionahrávek, které tě posouvají tam, kde to právě potřebuješ. A základy mindfulness v be.mindful Foundations máš vždy po ruce.",
        },
      ]}
      bonuses={[
        {
          title: "BONUS 1: Nové lekce a nahrávky přibývají celý rok – a ty k nim máš přístup v ceně členství.",
          content:
            "Během roku budou přibývat nové nahrávky a videolekce, ke kterým budeš mít samozřejmě přístup.",
        },
        {
          title: "BONUS 2: Dvakrát ročně offline setkání v Praze – jen pro členy komunity.",
          content:
            "Jednou za půl roku se společně potkáme na jednodenní mindfulness akci v Praze určené pouze pro členy be.mindful komunity. Bude to prostor pro společnou praxi, inspiraci i povídání.",
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
