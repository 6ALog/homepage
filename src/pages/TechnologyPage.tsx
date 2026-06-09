import { AiInfrastructure } from '../components/AiInfrastructure'
import { WhySixALogic } from '../components/WhySixALogic'
import { SystemsSection } from '../components/SystemsSection'
import { CTABanner } from '../components/CTASection'

export function TechnologyPage() {
  return (
    <main className="pt-28">
      <AiInfrastructure />
      <WhySixALogic />
      <SystemsSection />
      <CTABanner />
    </main>
  )
}
