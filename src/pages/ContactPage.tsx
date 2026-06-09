import { motion } from 'framer-motion'
import { footer } from '../data/siteContent'
import { Button } from '../components/ui/Button'
import { CTABanner, FinalCTA } from '../components/CTASection'

export function ContactPage() {
  return (
    <main className="pt-28">
      <section className="py-16 lg:py-24">
        <div className="max-w-5xl mx-auto px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="mono-label block mb-4">GET IN TOUCH</span>
            <h1
              className="font-display font-black uppercase tracking-tighter text-white mb-6"
              style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', lineHeight: 1.05 }}
            >
              LET'S BUILD SOMETHING<br />
              <span className="text-gradient">THAT ACTUALLY WORKS</span>
            </h1>
            <p className="text-brand-textSecondary text-lg max-w-2xl mx-auto">
              Whether you're ready to start or just exploring what's possible, we're here to talk through your operations and show you what a connected data layer looks like for your business.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
          >
            {[
              { label: 'General Inquiries', addr: footer.emails.contact, desc: 'Questions about our services or company' },
              { label: 'Sales',             addr: footer.emails.sales,   desc: 'Pricing, proposals, and partnerships' },
              { label: 'Support',           addr: footer.emails.support, desc: 'Help with your existing systems' },
            ].map(({ label, addr, desc }) => (
              <div
                key={addr}
                className="rounded-xl p-6"
                style={{
                  background: 'rgba(15,23,42,0.6)',
                  border: '1px solid rgba(56,189,248,0.14)',
                }}
              >
                <span className="mono-label block mb-2">{label}</span>
                <a
                  href={`mailto:${addr}`}
                  className="text-brand-cyan hover:text-white text-sm font-mono transition-colors duration-200 block mb-2"
                >
                  {addr}
                </a>
                <p className="text-brand-textDim text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-center"
          >
            <Button
              href="https://calendar.app.google/xPb4454AYtz4CARJA"
              target="_blank"
              rel="noopener noreferrer"
              size="lg"
              className="px-12 py-5 text-lg"
            >
              Schedule a Call
            </Button>
          </motion.div>
        </div>
      </section>

      <CTABanner />
      <FinalCTA />
    </main>
  )
}
