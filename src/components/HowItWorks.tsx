import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { howItWorks } from '../data/siteContent'

export function HowItWorks() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section
      ref={ref}
      id="how-it-works"
      className="relative py-24 lg:py-32 overflow-hidden"
      aria-labelledby="how-heading"
    >
      {/* Background gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{ background: 'linear-gradient(180deg, transparent 0%, rgba(37,99,235,0.04) 50%, transparent 100%)' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mb-16 lg:mb-20"
        >
          <span className="mono-label block mb-4">PROCESS</span>
          <h2
            id="how-heading"
            className="font-display font-black uppercase tracking-tighter text-white"
            style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', lineHeight: 1.05 }}
          >
            {howItWorks.headline}
          </h2>
        </motion.div>

        {/* Desktop: horizontal timeline */}
        <div className="hidden lg:block">
          {/* Connector line */}
          <div className="relative mb-8">
            <div
              className="absolute top-6 left-0 right-0 h-px"
              style={{ background: 'linear-gradient(90deg, transparent 0%, rgba(56,189,248,0.3) 20%, rgba(56,189,248,0.3) 80%, transparent 100%)' }}
              aria-hidden="true"
            />
          </div>

          <div className="grid grid-cols-4 gap-6">
            {howItWorks.steps.map((step, i) => (
              <motion.div
                key={step.label}
                initial={{ opacity: 0, y: 32 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                className="relative"
              >
                {/* Node dot */}
                <div className="relative flex justify-start mb-8" aria-hidden="true">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center z-10"
                    style={{
                      background: 'rgba(56,189,248,0.1)',
                      border: '2px solid rgba(56,189,248,0.5)',
                      boxShadow: '0 0 20px rgba(56,189,248,0.2)',
                    }}
                  >
                    <span className="font-mono text-xs font-bold text-brand-cyan">0{i + 1}</span>
                  </div>
                </div>

                <span className="mono-label block mb-3">{step.label}</span>
                <h3 className="font-display font-bold text-white text-lg mb-3 leading-snug">
                  {step.title}
                </h3>
                <p className="text-brand-textMuted text-sm leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile: stacked cards */}
        <div className="lg:hidden space-y-4">
          {howItWorks.steps.map((step, i) => (
            <motion.div
              key={step.label}
              initial={{ opacity: 0, x: -24 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
              className="glass rounded-2xl p-6"
            >
              <div className="flex items-start gap-4">
                <div
                  className="w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center"
                  style={{
                    background: 'rgba(56,189,248,0.1)',
                    border: '1px solid rgba(56,189,248,0.4)',
                  }}
                  aria-hidden="true"
                >
                  <span className="font-mono text-xs font-bold text-brand-cyan">0{i + 1}</span>
                </div>
                <div>
                  <span className="mono-label block mb-1">{step.label}</span>
                  <h3 className="font-display font-bold text-white text-lg mb-2">{step.title}</h3>
                  <p className="text-brand-textMuted text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
