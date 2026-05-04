import { ObjednavkaPage } from "@/components/objednavka-page"

export default function MembershipCheckoutPage() {
  return (
    <ObjednavkaPage
      title="Jste jeden krok od be.mindful MEMBERSHIP"
      intro="Tady je přehled toho, co vás v členství be.mindful MEMBERSHIP čeká, a možnosti, jak za něj zaplatit. (Sem doplňte konkrétní popis členství.)"
      includesHeading="be.mindful MEMBERSHIP obsahuje:"
      includes={[
        { title: "12 měsíců neomezeného přístupu do knihovny meditací a tipů" },
        { title: "Týdenní živé meditace + záznamy" },
        { title: "Měsíční živá setkání + záznamy" },
        { title: "Audio nahrávky pro spánek, soustředění, zvládání stresu" },
        { title: "Členství v komunitě be.mindful COMMUNITY" },
      ]}
      bonuses={[
        { title: "BONUS 1: Přístup k novým lekcím v ceně členství" },
        { title: "BONUS 2: Speciální slevy na další kurzy a workshopy" },
      ]}
      plans={[
        { title: "Roční členství", subtitle: "Nejlepší cenová varianta", price: "4 800 Kč", suffix: "/ rok" },
        { title: "Půlroční členství", subtitle: "Vhodné pro", price: "2 700 Kč", suffix: "/ 6 měsíců" },
        { title: "Měsíční členství", subtitle: "Vhodné pro", price: "490 Kč", suffix: "/ měsíc" },
      ]}
    />
  )
}
