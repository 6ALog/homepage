import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { systems } from '../data/siteContent'

export function SystemsSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section ref={ref} id="system-integration" className="relative py-24 lg:py-28 overflow-hidden" aria-labelledby="systems-heading">
      <div className="absolute inset-0 grid-overlay opacity-30 pointer-events-none" aria-hidden="true" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-4"
        >
          <span className="mono-label block mb-4">INTEGRATIONS</span>
          <h2
            id="systems-heading"
            className="font-display font-black uppercase tracking-tighter text-white mb-3"
            style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', lineHeight: 1.05 }}
          >
            {systems.headline}
          </h2>
          <p className="font-mono text-xs text-brand-textDim mb-12">{systems.disclaimer}</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {systems.categories.map((cat, i) => (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.05 + i * 0.07 }}
              className="glass rounded-xl p-5"
            >
              <span className="mono-label block mb-4" style={{ color: '#38BDF8' }}>
                {cat.label}
              </span>
              <ul className="space-y-2">
                {cat.items.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span
                      className="w-1 h-1 rounded-full flex-shrink-0"
                      style={{ background: 'rgba(56,189,248,0.5)' }}
                      aria-hidden="true"
                    />
                    <span className="text-brand-textMuted text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
