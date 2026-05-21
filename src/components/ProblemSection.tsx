import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { problem } from '../data/siteContent'
import { ParallaxCard } from './ui/ParallaxCard'

export function ProblemSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="relative py-24 lg:py-32 overflow-hidden" aria-labelledby="problem-heading">
      <div className="absolute inset-0 grid-overlay pointer-events-none opacity-50" aria-hidden="true" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mb-16"
        >
          <span className="mono-label block mb-4">DIAGNOSIS</span>
          <h2 id="problem-heading" className="font-display font-black uppercase tracking-tighter text-white mb-6"
            style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', lineHeight: 1.05 }}>
            {problem.headline}
          </h2>
          <p className="text-brand-textSecondary text-lg leading-relaxed">
            {problem.subtext}
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {problem.cards.map((card, i) => (
            <motion.div
              key={card.label}
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            >
              <ParallaxCard className="p-6 h-full group">
                <span className="mono-label block mb-3 group-hover:text-brand-accent transition-colors">
                  {card.label}
                </span>
                <h3 className="font-display font-bold text-white text-lg mb-3 leading-snug">
                  {card.title}
                </h3>
                <p className="text-brand-textMuted text-sm leading-relaxed">
                  {card.description}
                </p>
              </ParallaxCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
