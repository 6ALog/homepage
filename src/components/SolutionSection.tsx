import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { solution } from '../data/siteContent'

function FlowIcon({ color }: { color: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M4 10h12M12 6l4 4-4 4" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function SolutionSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      ref={ref}
      id="services"
      className="relative py-24 lg:py-32 overflow-hidden"
      aria-labelledby="solution-heading"
    >
      {/* Radial glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        aria-hidden="true"
        style={{
          width: '800px',
          height: '400px',
          background: 'radial-gradient(ellipse, rgba(37,99,235,0.12) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mb-16"
        >
          <span className="mono-label block mb-4">THE SOLUTION</span>
          <h2
            id="solution-heading"
            className="font-display font-black uppercase tracking-tighter text-white mb-6"
            style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.6rem)', lineHeight: 1.08 }}
          >
            {solution.headline}
          </h2>
          <p className="text-brand-textSecondary text-lg leading-relaxed">
            {solution.subtext}
          </p>
        </motion.div>

        {/* Before → After layout */}
        <div className="grid lg:grid-cols-[1fr_auto_1fr] gap-6 items-stretch">

          {/* Before */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="glass rounded-2xl p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="w-2 h-2 rounded-full bg-red-500/60" aria-hidden="true" />
              <span className="font-mono text-xs tracking-widest text-red-400/80 uppercase">Before</span>
            </div>
            <ul className="space-y-4" aria-label="Before state">
              {solution.before.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 w-4 h-4 rounded-sm border border-red-500/30 flex-shrink-0" aria-hidden="true" />
                  <span className="text-brand-textDim text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Arrow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="hidden lg:flex items-center justify-center px-4"
            aria-hidden="true"
          >
            <div className="flex flex-col items-center gap-3">
              <div className="w-px h-16 bg-gradient-to-b from-transparent via-brand-cyan/40 to-transparent" />
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center animate-pulse-glow"
                style={{ background: 'rgba(56,189,248,0.1)', border: '1px solid rgba(56,189,248,0.3)' }}
              >
                <FlowIcon color="#38BDF8" />
              </div>
              <div className="w-px h-16 bg-gradient-to-b from-transparent via-brand-cyan/40 to-transparent" />
            </div>
          </motion.div>

          {/* After */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="glass rounded-2xl p-8"
            style={{ border: '1px solid rgba(56,189,248,0.25)' }}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="w-2 h-2 rounded-full bg-brand-cyan animate-ping-slow" aria-hidden="true" />
              <span className="mono-label">After 6A Logic</span>
            </div>
            <ul className="space-y-4" aria-label="After state">
              {solution.after.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span
                    className="mt-1 w-4 h-4 rounded-sm flex-shrink-0 flex items-center justify-center"
                    style={{ background: 'rgba(56,189,248,0.15)', border: '1px solid rgba(56,189,248,0.4)' }}
                    aria-hidden="true"
                  >
                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                      <path d="M1.5 4L3.5 6L6.5 2" stroke="#38BDF8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span className="text-brand-textSecondary text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
