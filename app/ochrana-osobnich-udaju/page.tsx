import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Ochrana osobních údajů | be.mindful",
  description:
    "Zásady zpracování a ochrany osobních údajů (GDPR) be.mindful.",
}

export default function OchranaOsobnichUdajuPage() {
  return (
    <main className="min-h-screen font-sans">
      <Header />

      {/* Hero */}
      <section className="bg-[#F5F6F4] py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-[28px] font-bold leading-[38px] text-[#2D2C2B] sm:text-5xl lg:text-[64px] lg:leading-[1.1]">
              Ochrana osobních údajů
            </h1>
            <p className="mt-4 text-[18px] leading-[30px] text-[#4B4C4D]">
              Pokud jste mým zákazníkem, odběratelem novinek nebo návštěvníkem
              webu, svěřujete mi své osobní údaje. Zodpovídám za jejich
              ochranu a zabezpečení.
            </p>
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="bg-background py-16 lg:py-24">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="space-y-10 text-[18px] leading-[30px] text-[#4B4C4D]">
            <p>
              Prosím vás tedy, seznamte se s ochranou osobních údajů, zásadami
              a právy, které máte v souvislosti s GDPR (Nařízení o ochraně
              osobních údajů).
            </p>

            <div>
              <h2 className="text-[24px] font-bold leading-[34px] text-[#2D2C2B]">
                Kdo je správce?
              </h2>
              <p className="mt-4">
                Já, Michal Dvořák, IČ: 75934949, trvalé bydliště Karla Nového
                432, Bystřice 257 51 a také jako bemindfucz s.r.o., Krupská
                3080/3, Praha 10, 10000, IČO 08362840, DIČ CZ08362840.
                Provozuji webovou stránku{" "}
                <Link
                  href="https://www.bemindful.cz"
                  className="text-primary-green underline hover:text-primary-green-hover"
                >
                  www.bemindful.cz
                </Link>
                . Vaše osobní údaje zpracovávám jako správce, tj. určuji, jak
                budou osobní údaje zpracovávány a za jakým účelem, po jak
                dlouhou dobu a vybírám případné další zpracovatele, kteří mi
                zpracováním budou pomáhat.
              </p>
            </div>

            <div>
              <h2 className="text-[24px] font-bold leading-[34px] text-[#2D2C2B]">
                Kontaktní údaje
              </h2>
              <p className="mt-4">
                Pokud se na mne budete chtít v průběhu zpracování obrátit,
                můžete mě kontaktovat na tel. čísle +420 777 945 605 nebo na
                e-mailu info@bemindful.cz.
              </p>
            </div>

            <div>
              <h2 className="text-[24px] font-bold leading-[34px] text-[#2D2C2B]">
                Prohlašuji
              </h2>
              <p className="mt-4">
                Prohlašuji, že jako správce vašich osobních údajů splňuji
                veškeré zákonné povinnosti vyžadované platnou legislativou,
                zejména zákonem o ochraně osobních údajů a GDPR, a tedy že:
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-6">
                <li>
                  budu zpracovávat vaše osobní údaje jen na základě platného
                  právního důvodu, a to především oprávněného zájmu, plnění
                  smlouvy, zákonné povinnosti či uděleného souhlasu,
                </li>
                <li>
                  plním dle článku 13 GDPR informační povinnost ještě před
                  zahájením zpracování osobních údajů,
                </li>
                <li>
                  umožním vám a budu vás podporovat v uplatňování a plnění
                  vašich práv podle zákona o ochraně osobních údajů a GDPR.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-[24px] font-bold leading-[34px] text-[#2D2C2B]">
                Rozsah osobních údajů a účely zpracování
              </h2>
              <p className="mt-4">
                Zpracovávám osobní údaje, které mi svěříte sami, a to z
                následujících důvodů (pro naplnění těchto účelů):
              </p>
              <ul className="mt-4 space-y-4 pl-6 list-disc">
                <li>
                  <strong className="font-bold text-[#2D2C2B]">
                    Poskytování služeb, plnění smlouvy
                  </strong>
                  <br />
                  vaše osobní údaje v rozsahu: e-mail, nezbytně potřebuji k
                  plnění smlouvy (např. zaslání přístupů do aplikace, zasílání
                  online kurzu, dodání zboží, poskytnutí informace ke kurzu
                  apod.)
                </li>
                <li>
                  <strong className="font-bold text-[#2D2C2B]">
                    Vedení účetnictví
                  </strong>
                  <br />
                  jste-li zákazníky, vaše osobní údaje (fakturační údaje)
                  potřebuji, abych vyhověl zákonné povinnosti pro vystavování
                  a evidenci daňových dokladů
                </li>
                <li>
                  <strong className="font-bold text-[#2D2C2B]">
                    Marketing – zasílání newsletterů
                  </strong>
                  <br />
                  vaše osobní údaje (e-mail a jméno a příjmení) využívám za
                  účelem přímého marketingu – zasílání obchodních sdělení.
                  Jste-li mým zákazníkem, dělám tak z oprávněného zájmu, neboť
                  důvodně předpokládám, že vás mé novinky zajímají, a to po
                  dobu 5 let od poslední objednávky. Pokud nejste mým
                  zákazníkem, zasílám vám newslettery jen na základě vašeho
                  souhlasu, po dobu 5 let od udělení. V obou případech můžete
                  tento souhlas odvolat použitím odhlašovacího odkazu v každém
                  zaslaném e-mailu.
                </li>
                <li>
                  <strong className="font-bold text-[#2D2C2B]">
                    Fotografická dokumentace
                  </strong>
                  <br />
                  pouze na základě vašeho souhlasu mohu využít vaše
                  fotografie, reference, zpětné vazby apod. a to do doby, než
                  souhlas sami odvoláte.
                </li>
              </ul>
              <p className="mt-4">
                Vaše osobní údaje si ponecháváme po dobu běhu promlčecích
                lhůt, pokud zákon nestanoví delší dobu k jejich uchování nebo
                jsme v konkrétních případech neuvedli jinak.
              </p>
            </div>

            <div>
              <h2 className="text-[24px] font-bold leading-[34px] text-[#2D2C2B]">
                Cookies
              </h2>
              <p className="mt-4">
                Při procházení mých webových stránek zaznamenávám vaši IP
                adresu, jak dlouho se na stránce zdržíte a ze které stránky
                přicházíte. Používání cookies pro měření návštěvnosti webu a
                přizpůsobení zobrazení webových stránek vnímám jako svůj
                oprávněný zájem správce, neboť věřím, že díky tomu vám mohu
                nabídnout ještě lepší služby.
              </p>
              <p className="mt-4">
                Cookies pro cílení reklamy budou zpracovávány jen na základě
                vašeho souhlasu.
              </p>
              <p className="mt-4">
                Mé webové stránky lze procházet také v režimu, který
                neumožňuje sbírání osobních údajů. Používání cookies můžete na
                svém počítači zakázat.
              </p>
              <p className="mt-4">
                Více informací o fungování Cookies a nástroj pro jejich správu
                můžete nalézt například na následující adrese{" "}
                <Link
                  href="http://www.youronlinechoices.com/cz/"
                  className="text-primary-green underline hover:text-primary-green-hover"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  http://www.youronlinechoices.com/cz/
                </Link>
              </p>
            </div>

            <div>
              <h2 className="text-[24px] font-bold leading-[34px] text-[#2D2C2B]">
                Zabezpečení a ochrana osobních údajů
              </h2>
              <p className="mt-4">
                Chráním vaše osobní údaje v maximální možné míře pomocí
                moderních technologií, které odpovídají stupni technického
                rozvoje. Chráním je, jako kdyby byly mé vlastní. Přijal jsem a
                udržuji veškerá možná (aktuálně známá) technická a
                organizační opatření, která zamezují zneužití, poškození nebo
                zničení vašich osobních údajů.
              </p>
            </div>

            <div>
              <h2 className="text-[24px] font-bold leading-[34px] text-[#2D2C2B]">
                Předání osobních údajů třetím osobám
              </h2>
              <p className="mt-4">
                K vašim osobním údajům mají přístup mí spolupracovníci. Pro
                zajištění konkrétních zpracovatelských operací, které
                nedokáži zajistit vlastními silami, využívám služeb a aplikací
                zpracovatelů, kteří umí data ochránit ještě lépe než já sám a
                na dané zpracování se specializují. Jsou to poskytovatelé:
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-6">
                <li>provozovatel aplikace pro komunikaci, web a fakturaci,</li>
                <li>
                  provozovatel aplikace pro e-mailovou komunikaci a
                  zákaznickou podporu,
                </li>
                <li>Facebook, Google,</li>
                <li>poskytovatelé IT služeb a hostingu,</li>
                <li>
                  poskytovatelé platebních brán (poskytovatelé platebních
                  karet),
                </li>
                <li>
                  lektoři a asistenti na seminářích, kurzech a dalších akcích.
                </li>
              </ul>
              <p className="mt-4">
                Je možné, že se v budoucnu rozhodnu využít další aplikace či
                zpracovatele, pro usnadnění a zkvalitnění zpracování. Slibuji
                vám však, že v takovém případě při výběru, budeme na
                zpracovatele klást minimálně stejné nároky na zabezpečení a
                kvalitu zpracování jako na sebe.
              </p>
            </div>

            <div>
              <h2 className="text-[24px] font-bold leading-[34px] text-[#2D2C2B]">
                Předávání dat mimo Evropskou unii
              </h2>
              <p className="mt-4">
                Veškeré zpracování osobních údajů bude prováděno na území EU.
              </p>
            </div>

            <div>
              <h2 className="text-[24px] font-bold leading-[34px] text-[#2D2C2B]">
                Vaše práva v souvislosti s ochranou osobních údajů
              </h2>
              <p className="mt-4">
                V souvislosti s ochranou osobních údajů máte řadu práv. Pokud
                budete chtít některého z těchto práv využít, prosím,
                kontaktujte mě prostřednictvím e-mailu: info@bemindful.cz.
              </p>
              <p className="mt-4">
                Máte právo na informace, které je plněno již touto informační
                stránkou se zásadami zpracování osobních údajů.
              </p>
              <p className="mt-4">
                Díky právu na přístup k osobním údajům mne můžete kdykoli
                vyzvat a já vám doložím ve lhůtě 30 dní, jaké vaše osobní
                údaje zpracovávám a proč.
              </p>
              <p className="mt-4">
                Pokud se u vás něco změní nebo shledáte své osobní údaje
                neaktuální nebo neúplné, máte právo na doplnění a změnu
                osobních údajů.
              </p>
              <p className="mt-4">
                Právo na omezení zpracování můžete využít, pokud se domníváte,
                že zpracovávám vaše nepřesné údaje, domníváte se, že provádím
                zpracování nezákonně, ale nechcete všechny údaje smazat nebo
                pokud jste vznesl námitku proti zpracování.
              </p>
              <p className="mt-4">
                Omezit můžete rozsah osobních údajů nebo účelů zpracování.
                (Např. odhlášením z newsletteru omezujete účel zpracování pro
                zasílání obchodních sdělení.)
              </p>
            </div>

            <div>
              <h2 className="text-[24px] font-bold leading-[34px] text-[#2D2C2B]">
                Právo na přenositelnost
              </h2>
              <p className="mt-4">
                Pokud byste chtěli své osobní údaje vzít a přenést k někomu
                jinému, budu postupovat stejně jako při využití práva na
                přístup – jen s tím rozdílem, že vám informace dodám ve
                strojově čitelné podobě. Tady potřebuji alespoň 90 dní.
              </p>
            </div>

            <div>
              <h2 className="text-[24px] font-bold leading-[34px] text-[#2D2C2B]">
                Právo na výmaz (být zapomenut/a)
              </h2>
              <p className="mt-4">
                Vaším dalším právem je právo na výmaz (být zapomenut/a).
                Nechci na vás zapomenout, ale pokud si to budete přát, máte na
                to právo. V takovém případě vymažu veškeré vaše osobní údaje
                ze svého systému i ze systému všech dílčích zpracovatelů. Na
                zajištění práva na výmaz potřebujeme 90 dní.
              </p>
              <p className="mt-4">
                V některých případech jsem vázán zákonnou povinností, a např.
                musím evidovat vystavené daňové doklady po lhůtu stanovenou
                zákonem. V tomto případě tedy smažu všechny takové osobní
                údaje, které nejsou vázány jiným zákonem. O dokončení výmazu
                vás budeme informovat na e-mail.
              </p>
            </div>

            <div>
              <h2 className="text-[24px] font-bold leading-[34px] text-[#2D2C2B]">
                Stížnost u Úřadu na ochranu osobních údajů
              </h2>
              <p className="mt-4">
                Pokud máte pocit, že s vašimi údaji nezacházím v souladu se
                zákonem, máte právo se se svou stížností kdykoli obrátit na
                Úřad pro ochranu osobních údajů. Budu moc rád, pokud nejprve
                budete o tomto podezření informovat mne, abych s tím mohl něco
                udělat a případné pochybení napravit.
              </p>
            </div>

            <div>
              <h2 className="text-[24px] font-bold leading-[34px] text-[#2D2C2B]">
                Odhlášení ze zasílání newsletterů a obchodních sdělení
              </h2>
              <p className="mt-4">
                E-maily s inspirací, články, videi, pozvánkami či produkty a
                službami vám zasílám, jste-li můj zákazník na základě mého
                oprávněného zájmu.
              </p>
              <p className="mt-4">
                Pokud zákazníkem ještě nejste, posílám vám je jen na základě
                vašeho souhlasu. V obou případech můžete ukončit odběr mých
                e-mailů stisknutím odhlašovacího odkazu v každém zaslaném
                e-mailu.
              </p>
            </div>

            <div>
              <h2 className="text-[24px] font-bold leading-[34px] text-[#2D2C2B]">
                Mlčenlivost
              </h2>
              <p className="mt-4">
                Dovoluji si Vás ujistit, že mí spolupracovníci, kteří budou
                zpracovávat Vaše osobní údaje, jsou povinni zachovávat
                mlčenlivost o osobních údajích a o bezpečnostních opatřeních,
                jejichž zveřejnění by ohrozilo zabezpečení Vašich osobních
                údajů. Tato mlčenlivost přitom trvá i po skončení závazkových
                vztahů se mnou. Bez vašeho souhlasu nebudou vaše osobní údaje
                vydány žádné jiné třetí straně.
              </p>
              <p className="mt-4">Děkuji Vám za spolupráci.</p>
              <p className="mt-4 text-[#7a7b7c]">
                Tyto zásady zpracování osobních údajů platí od 25. 5. 2018.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
