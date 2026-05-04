import { ObjednavkaPage } from "@/components/objednavka-page"

export default function FoundationsCheckoutPage() {
  return (
    <ObjednavkaPage
      title="Jste jeden krok od svých be.mindful FOUNDATIONS"
      intro="Tady je přehled toho, co vás v kurzu be.mindful FOUNDATIONS čeká, a možnosti, jak za něj zaplatit. (Sem doplňte konkrétní popis kurzu.)"
      includesHeading="be.mindful FOUNDATIONS obsahuje:"
      includes={[
        { title: "8 modulů s krátkými 10minutovými videi se základy mindfulness" },
        { title: "Audio nahrávky vedených meditací pro každodenní praxi" },
        { title: "Pracovní materiály a praktické tipy pro každý modul" },
      ]}
      bonuses={[
        { title: "BONUS 1: WhatsApp podpora po celou dobu kurzu" },
        { title: "BONUS 2: Přístup do členské sekce" },
      ]}
      plans={[
        { title: "Jednorázová platba", subtitle: "Nejlepší cenová varianta", price: "1 900 Kč", suffix: null },
        { title: "3 splátky", subtitle: "Vhodné pro", price: "750 Kč", suffix: "/ měsíc po dobu 3 měsíců" },
        { title: "6 měsíčních splátek", subtitle: "Vhodné pro", price: "350 Kč", suffix: "/ měsíc" },
      ]}
    />
  )
}
