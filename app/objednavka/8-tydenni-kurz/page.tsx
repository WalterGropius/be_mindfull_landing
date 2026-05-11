import { ObjednavkaPage } from "@/components/objednavka-page"

export default function OsmiTydenniKurzCheckoutPage() {
  return (
    <ObjednavkaPage
      title="Skvělé. Už tě dělí jen jeden krok od toho začít 8týdenní kurz mindfulness (MBSR)."
      intro="Tady je přehled toho, co tě v 8týdenním kurzu mindfulness čeká a uhrazení kurzovného."
      includesHeading="8týdenní kurz mindfulness obsahuje:"
      includes={[
        {
          title: "8 setkání po 2,5 hodinách",
          content:
            "Jedno setkání týdně. Každé kombinuje vedené meditace, společné reflexe i hlubší zaměření na konkrétní téma – například zvládání stresu, práci s myšlenkami, emocemi nebo mindfulness v každodenním životě.",
        },
        {
          title: "Celodenní setkání o víkendu",
          content:
            "Speciální den věnovaný hlubšímu prožitku mindfulness a prohloubení všímavosti v praxi. 6 hodin prostoru opravdu zpomalit.",
        },
        {
          title: "Audionahrávky ke všem cvičením – 8 meditací pro každodenní praxi doma.",
          content:
            "Pro každodenní praxi doma máš k dispozici vedené audionahrávky, které tě praxí provedou krok za krokem. Během kurzu si postupně osvojíš všech 8 mindfulness cvičení.",
        },
        {
          title: "Vytištěný workbook",
          content:
            "Přehledně zpracovaná brožura se vším, co ke kurzu potřebuješ – důležité informace, praktická cvičení, tipy i inspirace pro každodenní praxi.",
        },
        {
          title: "Přístup do aplikace be.mindful – členská sekce kurzu",
          content:
            "Audionahrávky, studijní materiály a soukromý chat jen pro účastníky kurzu. Vše na jednom místě – kdykoliv a odkudkoliv.",
        },
        {
          title: "Individuální zpětná vazba v polovině kurzu",
          content:
            "V polovině kurzu se zastavíme nad tím, jak ti to jde. Napíšeš, co funguje a co řešíš – a já ti osobně odpovím s konkrétními tipy a doporučeními přesně pro tebe.",
        },
      ]}
      bonuses={[
        {
          title: "BONUS 1: 3 měsíce be.mindful Membership zdarma.",
          content:
            "Kurz nekončí posledním setkáním. Tři měsíce pokračuješ s komunitou absolventů – knihovna videokurzů, audionahrávky, materiály a společná online setkání. Praxe jde dál.",
        },
        {
          title: "BONUS 2: Celodenní online setkání kdykoliv v budoucnu – zdarma.",
          content:
            "Chci tě podporovat dlouhodobě. Proto se budeš moct kdykoli v budoucnu vrátit na celodenní online setkání – a to zdarma.",
        },
        {
          title: "BONUS 3: Soukromé konzultace s Michalem",
          content:
            "Kdykoliv v průběhu kurzu – napiš nebo zavolej. Proberu s tebou cokoliv, co potřebuješ: otázky k praxi, náročnější momenty i tvoji konkrétní situaci.",
        },
      ]}
      plans={[
        { title: "Kurz v Praze – osobní setkání", subtitle: "Naživo se skupinou", price: "7 800 Kč", suffix: null },
        { title: "Kurz online – z pohodlí domova", subtitle: "Stejný obsah", price: "7 500 Kč", suffix: null },
      ]}
    />
  )
}
