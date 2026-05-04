import { ObjednavkaPage } from "@/components/objednavka-page"

export default function OsmiTydenniKurzCheckoutPage() {
  return (
    <ObjednavkaPage
      title="Jste jeden krok od své mindful cesty"
      intro="Tady je přehled toho, co vás v 8týdenním kurzu mindfulness čeká, a možnosti, jak za něj zaplatit. (Sem doplňte konkrétní popis kurzu.)"
      includesHeading="8týdenní kurz mindfulness obsahuje:"
      includes={[
        { title: "8 x 2,5 hodinová setkání (1 setkání týdně)" },
        { title: "1x celodenní setkání (6 hodin včetně přestávky)" },
        { title: "Audio nahrávky vedených meditací pro každodenní praxi" },
      ]}
      bonuses={[
        { title: "BONUS 1: Možnost soukromých konzultací během kurzu" },
        { title: "BONUS 2: Prostor pro sdílení a otázky" },
        { title: "BONUS 3: Přístup do členské sekce" },
      ]}
      plans={[
        { title: "Jednorázová platba", subtitle: "Nejlepší cenová varianta", price: "2 300 Kč", suffix: null },
        { title: "3 splátky", subtitle: "Vhodné pro", price: "900 Kč", suffix: "/ měsíc po dobu 3 měsíců" },
        { title: "6 měsíčních splátek", subtitle: "Vhodné pro", price: "400 Kč", suffix: "/ měsíc" },
      ]}
    />
  )
}
