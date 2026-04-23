import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Typography } from "@/components/ui/typography"

export default function PodcastPage() {
  return (
    <main className="min-h-screen font-sans bg-surface-white flex flex-col">
      <Header />

      <section className="flex-1 flex flex-col items-center justify-center px-6 py-32 text-center lg:px-8">
        <div className="flex flex-col items-center justify-center my-10">
          <Typography variant="h2" className="text-typography-heading mb-6">
            Připravujeme...
          </Typography>
          <Typography variant="p" className="max-w-2xl mx-auto text-typography-body leading-relaxed">
            Již brzy pro vás spustíme náš nový podcast plný inspirace, sdílení zkušeností a praktických tipů pro každodenní mindfulness.<br></br> Přihlaste se k odběru novinek níže a my vám dáme vědět hned, jakmile vyjde první epizoda!
          </Typography>
        </div>
      </section>

      <Footer />
    </main>
  )
}
