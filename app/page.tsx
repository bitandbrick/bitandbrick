import { Header, Hero, Features, Solutions, CTA, Footer } from '@/components'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <Solutions />
      <CTA />
      <Footer />
    </main>
  )
}
