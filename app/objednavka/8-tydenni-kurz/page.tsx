import { ObjednavkaPage } from "@/components/objednavka-page"

export default function OsmiTydenniKurzCheckoutPage() {
  return (
    <ObjednavkaPage
      title="Skvělé rozhodnutí. Stačí už jen objednat"
      intro="Podívej se, co tě v kurzu čeká, a vyber si kurz v Praze nebo naživo online."
      includesHeading="Co tě čeká v 8týdenním kurzu?"
      includes={[
        {
          title: "8 setkání po 2,5 hodině",
          content:
            "Jedno setkání týdně, vždy s Michalem. Vedená meditace, společná reflexe a pak ponor do jednoho tématu, např.: zvládání stresu, práce s myšlenkami a emocemi i mindfulness v běžném dni ad.",
        },
        {
          title: "Jedno 6hodinové setkání o víkendu",
          content:
            "Čas, kdy konečně zpomalíš. Speciální den věnovaný mindfulness praxi a hlubšímu prožitku všímavosti. Účastníci ho často označují za jeden z nejsilnějších momentů celého kurzu.",
        },
        {
          title: "Audionahrávky ke všem cvičením",
          content:
            "Osm vedených meditací a cvičení, které tě mindfulness praxí provedou krok za krokem.",
        },
        {
          title: "Workbook, který máš vždy po ruce",
          content:
            "Tvůj tištěný průvodce celým kurzem. Informace, cvičení i tipy pro každodenní praxi, přehledně pohromadě.",
        },
        {
          title: "Přístup do aplikace be.mindful",
          content:
            "Členská sekce kurzu s audionahrávkami cvičení, studijními materiály a soukromým chatem jen pro účastníky. Mindfulness na pár kliků, které využiješ kdykoliv a kdekoliv.",
        },
        {
          title: "Individuální zpětná vazba od Michala",
          content:
            "V polovině kurzu vyplníš krátkou reflexi své praxe a získáš konkrétní doporučení a tipy podle toho, co právě řešíš.",
        },
      ]}
      bonusesHeading="Bonusy"
      bonuses={[
        {
          title: "Bonus | be.mindful MEMBERSHIP na měsíc zdarma",
          content:
            "Kurz nekončí posledním setkáním. Měsíc pokračuješ s komunitou absolventů v be.mindful aplikaci. K dispozici máš knihovnu videokurzů, audionahrávky, materiály, čekají tě i společná online setkání. Praxe jde dál.",
        },
        {
          title: "Bonus | 6hodinové online setkání kdykoliv v budoucnu zdarma",
          content:
            "Kdo kurzem prošel, má dveře otevřené napořád. Celodenní online setkání si můžeš kdykoli v budoucnu zopakovat, a to zdarma.",
        },
        {
          title: "Bonus | Soukromé konzultace s Michalem",
          content:
            "Kdykoli během kurzu jsem ti k dispozici, stačí napsat nebo zavolat. Proberu s tebou cokoliv, co potřebuješ: otázky k praxi, náročnější momenty i tvoji konkrétní situaci.",
        },
        {
          title: "Bonus | Certifikát o absolvování",
          content:
            "Na vyžádání ti po dokončení kurzu vystavím certifikát o absolvování programu.",
        },
      ]}
      plansHeading="Naživo, nebo online? Vyber si kurz, který ti sedne"
      plansSubheading="Jeden kurz, dvě formy. Obsah i lektor jsou stejné, vybíráš jen, kde u toho budeš."
      plans={[
        {
          title: "Kurz MBSR v Praze",
          subtitle: (
            <>
              <span className="font-bold">Naživo se skupinou</span>
              <br />
              Osobní setkání, energie skupiny v jedné místnosti.
            </>
          ),
          price: "7 800 Kč",
          suffix: null,
          cta: "Jdu do toho",
        },
        {
          title: "Kurz MBSR online",
          subtitle: (
            <>
              <span className="font-bold">Z domova, se skupinou</span>
              <br />
              Připojíš se odkudkoliv, skupinu máš na obrazovce.
            </>
          ),
          price: "7 500 Kč",
          suffix: null,
          cta: "Hlásím se",
        },
      ]}
    />
  )
}
