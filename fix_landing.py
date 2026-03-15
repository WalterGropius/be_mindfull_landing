import re
import os

files = {
    "app/globals.css": lambda c: c.replace("'DM Sans'", "'Noto Sans'"),
    "components/header.tsx": lambda c: c
        .replace('src="/bemindful_logo.svg"', 'src="/Logo/bemindful_logo.svg"')
        .replace("Home", "Domů")
        .replace("Courses", "Kurzy")
        .replace("Resources", "Zdroje")
        .replace("About mindfulness", "O mindfulness")
        .replace("Contact", "Kontakt")
        .replace("Login", "Přihlásit se")
        .replace("Group Courses in Prague", "Skupinový kurz v Praze")
        .replace("Mindfulness for companies", "Mindfulness pro firmy")
        .replace("Courses - Foundations", "Kurzy - Foundations")
        .replace('href="/courses/foundations"', 'href="/kurzy/foundations"')
        .replace('href="/courses/group"', 'href="/kurzy/skupinovy-kurz"')
        .replace('href="/courses/companies"', 'href="/kurzy/firmy"')
        .replace('href="/about"', 'href="/o-mne"')
        .replace('href="/blog"', 'href="/blog"')
        .replace('href="/podcast"', 'href="/blog"'),

    "components/hero.tsx": lambda c: c
        .replace('A pause, that creates<br />space to shift your life.', 'Zastav se a vytvoř si<br />prostor pro změnu tvého života.')
        .replace('The ability to pause is one of todays most important skills – to navigate us through daily decisions, stress, and change with greater clarity and ease.', 'Schopnost se zastavit patří dnes k nejdůležitějším dovednostem – pomáhá nám orientovat se v každodenních rozhodnutích, stresu a změnách s větší jasností a lehkostí.')
        .replace('View Courses', 'Zobrazit kurzy')
        .replace('href="/courses"', 'href="/kurzy/foundations"')
        .replace('bg-[#7BC0A4]', 'bg-[#C0D1C6]'),

    "components/video-section.tsx": lambda c: c
        .replace('src="/_DSC7728.jpg"', 'src="/Pictures/_DSC7728.jpg"')
        .replace('Little shifts, that create big change', 'Malé posuny, které přinášejí velké změny')
        .replace('Let go of the myth, that life will be without challenges one day. HOW we relate to those challenges is, what makes the difference in life.', 'Pusťte představu, že jednou bude život bez výzev. To, jak k nim přistupujeme, dělá v životě ten skutečný rozdíl.')
        .replace('It’s surprising how little it takes to shift from chaos to space. You’re one pause away to shift from stress to calmness. Everyone can do it.', 'Je překvapivé, jak málo stačí, aby se chaos proměnil v prostor, stres v klid. Dokáže to každý. Udělejte dnes první krok.')
        .replace('Create lasting change on emotional resilience, improved thought control & breaking cycles and physical health benefits', 'Vytváření trvalé změny ve formě větší emoční odolnosti, lepší kontroly myšlenek, přerušení nefunkčních vzorců a fyzických přínosů pro zdraví.')
        .replace('Mindfulness is not a one-size-fits-it-all', 'MINDFULNESS NENÍ JEDEN PŘÍSTUP PRO VŠECHNY')
        .replace('Daily-life approved and personal:<br/>Your approach to mindfulness<br/>by Senior Mindfulness Teacher Michal Dvořák', 'Ověřený a osobní přístup k mindfulness pro běžný život od Senior Mindfulness Teacher Michala Dvořáka')
        .replace('Start mindfulness today!', 'Začni s mindfulness ještě dnes!')
        .replace('Group Courses in Prague', 'Skupinové kurzy v Praze')
        .replace('href="/courses/foundations"', 'href="/kurzy/foundations"')
        .replace('href="/courses/group"', 'href="/kurzy/skupinovy-kurz"'),

    "components/features-section.tsx": lambda c: c
        .replace('src="/AdobeStock_313540527.jpeg"', 'src="/Pictures/AdobeStock_313540527.jpeg"')
        .replace('src="/brain1.svg"', 'src="/Illustrations/brain1.svg"')
        .replace('src="/brain2.svg"', 'src="/Illustrations/brain2.svg"')
        .replace('src="/brain00.svg"', 'src="/Illustrations/brain00.svg"')
        .replace('src="/brain01.svg"', 'src="/Illustrations/brain01.svg"')
        .replace('src="/brain02.svg"', 'src="/Illustrations/brain02.svg"')
        .replace('The scientifically proven approach to better health, wellbeing and resilience', 'Přínosy mindfulness – nejen trend, ale vědecky ověřený přístup k lepšímu zdraví, pohodě a odolnosti')
        .replace('This is for you, if you want to:', 'Tento program je pro vás, pokud chcete:')
        .replace('Build Emotional Resilience:', 'Budovat emoční odolnost:')
        .replace('handle difficult emotions and life challenges with greater stability.', 'naučit se zvládat těžké emoce a životní výzvy s větší stabilitou.')
        .replace('Improve Thought Control & Break Cycles:', 'Zlepšit kontrolu myšlenek:')
        .replace('escape repetitive patterns and break mental cycles, that are no longer serving.', 'a přerušit opakující se vzorce, které vám už neslouží.')
        .replace('Improve Physical Health Benefits:', 'Podpořit fyzické zdraví:')
        .replace('reduce stress-related symptoms like insomnia and anxiety.', 'a snížit projevy stresu, jako je nespavost či úzkost, a zlepšit celkovou pohodu.')
        .replace('Manage daily stress better', 'Lépe zvládat stres')
        .replace('for more calmness in work and life.', 'naučit se techniky podložené vědeckými poznatky, které pomáhají přinést do práce i života více klidu.')
        .replace('Gain more compassion and kindness', 'Zlepšit vztahy a více soucitu')
        .replace('and strengthen your relationships.', 'rozvíjet laskavost k sobě i druhým, posilovat vztahy a žít vyrovnanější život.')
        .replace('Start to care about your own well-being and you will impact all the world around you in a positive way', 'Start to care about your own well-being and you will impact all the world around you in a positive way.'),

    "components/courses-section.tsx": lambda c: c
        .replace('src="/AdobeStock_1844492057.jpeg"', 'src="/Pictures/AdobeStock_1844492057.jpeg"')
        .replace('You are at the beginning of your mindfulness journey or want to strengthen your foundation to reset your life with ease? Great! Than this is for you!', 'Krok za krokem k větší lehkosti a prostoru v životě pro každého, kdo chce začít s mindfulness. Budete odolnější a budete jednat s větším klidem a nadhledem.')
        .replace('This 4-week online course is for everyone who wants to start implementing mindfulness into their daily life - with minimum effort, but lots of fun.', 'Tento 4týdenní online kurz je pro každého, kdo chce začít implementovat mindfulness do každodenního života – s minimálním úsilím, ale spoustou zábavy.')
        .replace('Learn more', 'Více informací')
        .replace('FREE 3-days course', 'ZDARMA 3denní kurz')
        .replace('GROUP COURSES in Prague', 'SKUPINOVÉ KURZY v Praze')
        .replace('Join the community', '')
        .replace('Looking for personal guidance and a group of people to master mindfulness together?', 'Hledáte osobní vedení a skupinu kolem sebe, abyste společně zvládli mindfulness?')
        .replace('You will strengthen your inner compass. You will react differently to everyday problems. Group courses are a powerful space for maximum live support, guaranteeing rapid results and joy with every step.', 'Posílíte svůj vnitřní kompas. Začnete jinak reagovat na každodenní problémy. Skupinové kurzy jsou silným prostorem pro maximální živou podporu, která garantuje rychlé výsledky a radost s každým krokem na vaší cestě.')
        .replace('FREE Masterclass', 'ZDARMA Masterclass')
        .replace('Mindfulness for COMPANIES', 'Mindfulness pro FIRMY')
        .replace('From stress to resilience. Feeling better means leading better – learn how to shift from stress to inner stability.', 'Od stresu k odolnosti. Cítit se lépe znamená vést lépe – naučte se přejít od stresu k vnitřní stabilitě.')
        .replace('From a short introduction to mindfulness, through applicable topics, to an extended mindfulness program - let me tailor mindfulness to the needs of your company.', 'Od krátkého úvodu do mindfulness, přes aplikovatelná témata až po rozšířený mindfulness program – nechte mě přizpůsobit mindfulness potřebám vaší firmy.')
        .replace('href="/courses/foundations"', 'href="/kurzy/foundations"')
        .replace('href="/courses/group"', 'href="/kurzy/skupinovy-kurz"')
        .replace('href="/courses/companies"', 'href="/kurzy/firmy"')
        .replace('href="/courses/free"', 'href="/kurzy/start-to-pause"'),

    "components/free-course-section.tsx": lambda c: c
        .replace('Free 3-day program', 'Bezplatný 3denní program')
        .replace('Start-to-PAUSE: Three days to greater balance', 'Start-to-PAUSE: Tři dny k větší rovnováze')
        .replace('You will learn to stop in the middle of a busy day. You will be able to calm your mind and relax your body faster.', 'Naučíte se zastavit uprostřed rušeného dne. Budete schopni rychleji zklidnit mysl a uvolnit tělo.')
        .replace('You will take away 3 specific tools that will help you switch from stress to relaxation in five minutes.', 'Odnesete si 3 konkrétní nástroje, které vám pomohou přepnout během pěti minut ze stresu do uvolnění.')
        .replace('Join the free program', 'Přidej se k bezplatnému programu')
        .replace('href="/courses/start-to-pause"', 'href="/kurzy/start-to-pause"'),

    "components/about-section.tsx": lambda c: c
        .replace('src="/_DSC7728.jpg"', 'src="/Pictures/_DSC7728.jpg"')
        .replace('I am Michal Dvořák,<br />founder of be.mindful', 'Jsem Michal Dvořák,<br />zakladatel be.mindful')
        .replace('I am Michal Dvořák, senior mindfulness teacher. I studied mindfulness at two world centers - UMASS Medical School and Brown University - and have been teaching it full time since 2018.', 'Jsem Michal Dvořák, senior mindfulness teacher. Mindfulness jsem vystudoval ve dvou světových centrech – UMASS Medical School a Brown University – a od roku 2018 ji učím na plný úvazek.')
        .replace("I teach what I live myself, and I try to approach practice and life with perspective and my feet firmly on the ground. Because that's what mindfulness is about – changing how we react to problems and difficult situations. With kindness, but also firmly and consistently.", "Učím to, co sám žiju, a snažím se přistupovat k praxi i životu s nadhledem a nohama pevně na zemi. Protože právě o tom mindfulness je – měnit to, jak reagujeme na problémy a náročné situace. S laskavostí, ale také pevně a důsledně.")
        .replace('Today I am the only Senior Mindfulness Teacher in the Czech Republic and my specific and joyful approach has made mindfulness accessible to thousands of people over the last 15 years.', 'Dnes jsem jediný Senior Mindfulness Teacher v České republice a můj specifický a radostný přístup zpřístupňuje mindfulness tisícům lidí za posledních 15 let.')
        .replace('Meet your mindfulness guide', 'Poznejte svého průvodce mindfulness')
        .replace('href="/about"', 'href="/o-mne"'),

    "components/footer.tsx": lambda c: c
        .replace('src="/bemindful_logo.svg"', 'src="/Logo/bemindful_logo.svg"')
        .replace('href="/courses/foundations"', 'href="/kurzy/foundations"')
        .replace('href="/courses/membership"', 'href="/kurzy/membership"')
        .replace('href="/courses/group"', 'href="/kurzy/skupinovy-kurz"')
        .replace('href="/courses/companies"', 'href="/kurzy/firmy"')
        .replace('href="/courses/start-to-pause"', 'href="/kurzy/start-to-pause"')
        .replace('href="/about"', 'href="/o-mne"')
        .replace('href="/podcast"', 'href="/blog"')
        .replace('Group Courses Prague', 'Skupinové kurzy Praha')
        .replace('Mindfulness for companies', 'Mindfulness pro firmy')
        .replace('About', 'O mně')
        .replace('Contact', 'Kontakt')
        .replace('Member Area', 'Členská zóna')
        .replace('The power of one mindful pause – shift your life from stress to space.', 'Síla jedné všímavé pauzy – posunout svůj život od stresu k prostoru.')
        .replace('Courses', 'Kurzy')
        .replace('More', 'Více')
        .replace('All rights reserved', 'Všechna práva vyhrazena'),

    "components/newsletter-section.tsx": lambda c: c
        .replace('Get all news,<br />updates and announcements!', 'Získejte všechny novinky,<br />aktualizace a oznámení!')
        .replace('Enter your email', 'Zadejte svůj email')
        .replace('SUBSCRIBE', 'ODEBÍRAT')
        .replace('Free videos', 'Bezplatná videa')
        .replace('Priority access to programs and courses', 'Přednostní přístup k programům a kurzům')
        .replace('Stay connected to mindfulness topics', 'Zůstaňte propojeni s tématy mindfulness'),

    "components/blog-section.tsx": lambda c: c
        .replace('Explore the be.mindful blog', 'Prozkoumej blog be.mindful')
        .replace('First step to greater calm', 'První krok k většímu klidu')
        .replace('A short introduction and quick steps you can take right now for immediate impact.', 'Krátký úvod a rychlé kroky, které můžete udělat hned s okamžitým dopadem.')
        .replace('How to keep your balance', 'Jak si udržet rovnováhu')
        .replace('How to stay balanced even when life throws hurdles at you.', 'Jak zůstat v rovnováze, i když vám život hází klacky pod nohy.')
        .replace('From pause to performance', 'Od pauzy k výkonu')
        .replace("Why mindful pause is a forgotten skill for today's success.", 'Proč je všímavá pauza ztracená dovednost pro dnešní úspěch.')
        .replace('Read full article', 'Přečíst celý článek')
        .replace('Read all articles here', 'Přečti si všechny články zde')
}

for filepath, transform in files.items():
    if os.path.exists(filepath):
        with open(filepath, "r") as f:
            content = f.read()
        new_content = transform(content)
        with open(filepath, "w") as f:
            f.write(new_content)
