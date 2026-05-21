import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { metrics } from '../data/siteContent'
import { ParallaxCard } from './ui/ParallaxCard'

export function MetricGrid() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section ref={ref} className="relative py-16 lg:py-20" aria-label="Key metrics">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <ParallaxCard className="p-6 text-center h-full" intensity={6}>
                <span className="mono-label block mb-4">{m.label}</span>
                <div
                  className="font-display font-black text-white mb-3 tracking-tighter"
                  style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', lineHeight: 1 }}
                  aria-label={m.value}
                >
                  <span className="text-gradient-cyan">{m.value}</span>
                </div>
                <p className="text-brand-textDim text-xs leading-relaxed">{m.description}</p>
              </ParallaxCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
