import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { AiUrgency } from './components/AiUrgency'
import { ProblemSection } from './components/ProblemSection'
import { BusinessSuite } from './components/BusinessSuite'
import { ServicesSection } from './components/ServicesSection'
import { MetricGrid } from './components/MetricGrid'
import { HowItWorks } from './components/HowItWorks'
import { UseCases } from './components/UseCases'
import { AiInfrastructure } from './components/AiInfrastructure'
import { WhySixALogic } from './components/WhySixALogic'
import { SystemsSection } from './components/SystemsSection'
import { CTABanner, FinalCTA } from './components/CTASection'
import { Footer } from './components/Footer'
import { MorphingBlobs } from './components/MorphingBlobs'

export default function App() {
  return (
    <div
      className="relative min-h-screen text-brand-textPrimary"
      style={{ background: 'linear-gradient(45deg, #030712 0%, #0B1020 45%, #061827 100%)' }}
    >
      <MorphingBlobs />

      <div className="relative z-10">
        <Navbar />

        <main>
          <Hero />
          <AiUrgency />
          <ProblemSection />
          <BusinessSuite />
          <ServicesSection />
          <MetricGrid />
          <HowItWorks />
          <UseCases />
          <AiInfrastructure />
          <WhySixALogic />
          <SystemsSection />
          <CTABanner />
          <FinalCTA />
        </main>

        <Footer />
      </div>
    </div>
  )
}
