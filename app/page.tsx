import { Header, Footer, LayoutWrapper } from '@/components/layout'
import { Hero, HowItWorks, Artists, Albums, Tools, NineWays, FinalCTA } from '@/components/sections'

export default function Home() {
  return (
    <LayoutWrapper>
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <Artists />
        <Albums />
        <Tools />
        <NineWays />
        <FinalCTA />
      </main>
      <Footer />
    </LayoutWrapper>
  )
}
