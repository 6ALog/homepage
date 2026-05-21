import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { whySixALogic } from '../data/siteContent'
import { GlassCard } from './ui/GlassCard'

export function WhySixALogic() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section ref={ref} className="relative py-24 lg:py-32 overflow-hidden" aria-labelledby="why-heading">
      {/* Background accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{ background: 'linear-gradient(135deg, rgba(37,99,235,0.04) 0%, transparent 50%, rgba(129,140,248,0.04) 100%)' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-[45%_55%] gap-12 lg:gap-16 items-start">

          {/* Left: Manifesto block */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className="mono-label block mb-4">WHY 6A LOGIC</span>
            <h2
              id="why-heading"
              className="font-display font-black uppercase tracking-tighter text-white mb-8"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', lineHeight: 1.0 }}
            >
              {whySixALogic.headline}
            </h2>
            <div className="glass rounded-2xl p-6 space-y-4">
              <p className="font-mono text-sm text-brand-textDim leading-relaxed">
                // We do not sell AI hype. We build the unglamorous infrastructure
                <br />// that makes tools, data, and teams work together reliably.
              </p>
              <p className="font-mono text-sm text-brand-textDim leading-relaxed">
                // If your team spends time copying between systems,
                <br />// reconciling spreadsheets, or explaining why reports don't match
                <br />// — that is the problem we fix.
              </p>
              <p className="font-mono text-sm text-brand-cyan leading-relaxed">
                // Clean data. Reliable sync. Useful automation.
                <br />// Infrastructure that holds up as your business changes.
              </p>
            </div>
          </motion.div>

          {/* Right: Differentiator cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            {whySixALogic.differentiators.map((d, i) => (
              <motion.div
                key={d.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
              >
                <GlassCard className="p-5 h-full">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center mb-4"
                    style={{ background: 'rgba(56,189,248,0.08)', border: '1px solid rgba(56,189,248,0.15)' }}
                    aria-hidden="true"
                  >
                    <span className="font-mono text-xs font-bold text-brand-cyan">0{i + 1}</span>
                  </div>
                  <h3 className="font-display font-bold text-white text-base mb-2 leading-snug">
                    {d.title}
                  </h3>
                  <p className="text-brand-textMuted text-sm leading-relaxed">
                    {d.description}
                  </p>
                </GlassCard>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
