import { MetricGrid } from '../components/MetricGrid'
import { HowItWorks } from '../components/HowItWorks'
import { UseCases } from '../components/UseCases'
import { CTABanner } from '../components/CTASection'

export function HowItWorksPage() {
  return (
    <main className="pt-28">
      <MetricGrid />
      <HowItWorks />
      <UseCases />
      <CTABanner />
    </main>
  )
}
