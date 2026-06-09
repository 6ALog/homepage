import { Hero } from '../components/Hero'
import { AiUrgency } from '../components/AiUrgency'
import { ProblemSection } from '../components/ProblemSection'
import { BusinessSuite } from '../components/BusinessSuite'
import { ServicesSection } from '../components/ServicesSection'
import { CTABanner } from '../components/CTASection'

export function HomePage() {
  return (
    <main>
      <Hero />
      <AiUrgency />
      <ProblemSection />
      <BusinessSuite />
      <ServicesSection />
      <CTABanner />
    </main>
  )
}
