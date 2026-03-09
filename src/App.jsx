import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Header, Footer, ScrollToTop } from './components/layout'
import { 
  HeroSection, 
  HowItWorksSection, 
  ArtistsSection, 
  AlbumsSection, 
  ToolsSection, 
  NineWaysSection, 
  FinalCTASection 
} from './components/sections'

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <HeroSection />
          <HowItWorksSection />
          <ArtistsSection />
          <AlbumsSection />
          <ToolsSection />
          <NineWaysSection />
          <FinalCTASection />
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </BrowserRouter>
  )
}

export default App
