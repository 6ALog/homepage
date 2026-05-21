import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { useCases } from '../data/siteContent'
import { GlassCard } from './ui/GlassCard'

export function UseCases() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section
      ref={ref}
      id="use-cases"
      className="relative py-24 lg:py-32 overflow-hidden"
      aria-labelledby="usecases-heading"
    >
      <div className="absolute inset-0 grid-overlay opacity-40 pointer-events-none" aria-hidden="true" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <span className="mono-label block mb-4">APPLIED WORK</span>
          <h2
            id="usecases-heading"
            className="font-display font-black uppercase tracking-tighter text-white"
            style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', lineHeight: 1.05 }}
          >
            Real Problems. Real Builds.
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {useCases.map((uc, i) => (
            <motion.div
              key={uc.label}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.05 + i * 0.07, ease: [0.16, 1, 0.3, 1] }}
            >
              <GlassCard className="p-6 h-full group">
                <span className="mono-label block mb-3 group-hover:text-brand-accent transition-colors">
                  {uc.label}
                </span>
                <h3 className="font-display font-bold text-white text-lg mb-5 leading-snug">
                  {uc.title}
                </h3>

                <div className="space-y-4">
                  <div>
                    <span className="font-mono text-xs tracking-wider text-brand-textDim uppercase block mb-1">
                      Problem
                    </span>
                    <p className="text-brand-textMuted text-sm leading-relaxed">{uc.problem}</p>
                  </div>
                  <div
                    className="h-px"
                    style={{ background: 'linear-gradient(90deg, rgba(56,189,248,0.15), transparent)' }}
                    aria-hidden="true"
                  />
                  <div>
                    <span className="font-mono text-xs tracking-wider text-brand-cyan uppercase block mb-1">
                      Build
                    </span>
                    <p className="text-brand-textMuted text-sm leading-relaxed">{uc.build}</p>
                  </div>
                  <div
                    className="h-px"
                    style={{ background: 'linear-gradient(90deg, rgba(56,189,248,0.15), transparent)' }}
                    aria-hidden="true"
                  />
                  <div>
                    <span className="font-mono text-xs tracking-wider text-brand-accent uppercase block mb-1">
                      Result
                    </span>
                    <p className="text-brand-textSecondary text-sm leading-relaxed">{uc.result}</p>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
