import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { aiUrgency } from '../data/siteContent'

export function AiUrgency() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section
      ref={ref}
      className="relative py-24 lg:py-36 overflow-hidden"
      aria-labelledby="urgency-heading"
    >
      {/* Deep background gradient to separate from hero */}
      <div
        className="section-bg absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            'linear-gradient(180deg, #030712 0%, #070E1C 40%, #0A1628 70%, #030712 100%)',
        }}
      />

      {/* Subtle grid */}
      <div className="absolute inset-0 grid-overlay opacity-60 pointer-events-none" aria-hidden="true" />

      {/* Left edge glow */}
      <div
        className="absolute top-1/2 -left-32 -translate-y-1/2 pointer-events-none"
        aria-hidden="true"
        style={{
          width: '500px',
          height: '600px',
          background: 'radial-gradient(ellipse, rgba(37,99,235,0.14) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />
      {/* Right edge glow */}
      <div
        className="absolute top-1/2 -right-32 -translate-y-1/2 pointer-events-none"
        aria-hidden="true"
        style={{
          width: '400px',
          height: '500px',
          background: 'radial-gradient(ellipse, rgba(56,189,248,0.08) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">

        {/* Top label */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <span className="mono-label inline-flex items-center gap-2">
            <span
              className="w-1.5 h-1.5 rounded-full animate-ping-slow"
              style={{ background: '#EF4444' }}
              aria-hidden="true"
            />
            {aiUrgency.eyebrow}
          </span>
        </motion.div>

        {/* Main headline */}
        <motion.h2
          id="urgency-heading"
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.75, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          className="font-display font-black uppercase tracking-tighter text-white mb-8 max-w-5xl"
          style={{ fontSize: 'clamp(2rem, 5.5vw, 4.5rem)', lineHeight: 0.95 }}
        >
          {aiUrgency.headline.split('IT\'S AN EXPECTATION.')[0]}
          <span className="text-gradient">IT'S AN EXPECTATION.</span>
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.18 }}
          className="text-brand-textSecondary text-xl leading-relaxed max-w-3xl mb-14"
        >
          {aiUrgency.subtext}
        </motion.p>

        {/* Stats row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
          {aiUrgency.stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.22 + i * 0.09, ease: [0.16, 1, 0.3, 1] }}
              className="glass rounded-2xl p-6"
              style={{ border: '1px solid rgba(56,189,248,0.12)' }}
            >
              <div
                className="font-display font-black text-white mb-2 tracking-tighter"
                style={{ fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', lineHeight: 1 }}
              >
                <span className="text-gradient-cyan">{stat.value}</span>
              </div>
              <p className="font-mono text-xs text-brand-textSecondary leading-snug mb-2">
                {stat.label}
              </p>
              <p className="font-mono text-xs text-brand-textDim leading-snug">
                {stat.note}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Divider callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="accent-callout relative rounded-2xl px-8 py-6 overflow-hidden"
          style={{
            background: 'rgba(56,189,248,0.05)',
            border: '1px solid rgba(56,189,248,0.2)',
          }}
        >
          {/* Inner glow */}
          <div
            className="absolute inset-0 pointer-events-none rounded-2xl"
            aria-hidden="true"
            style={{
              background: 'radial-gradient(ellipse at 20% 50%, rgba(56,189,248,0.06) 0%, transparent 60%)',
            }}
          />
          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-10">
            <div
              className="accent-icon-ring flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center"
              style={{ background: 'rgba(56,189,248,0.12)', border: '1px solid rgba(56,189,248,0.35)' }}
              aria-hidden="true"
            >
              {/* Warning chevron */}
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M8 2L14.5 13H1.5L8 2Z" stroke="#38BDF8" strokeWidth="1.4" fill="rgba(56,189,248,0.1)" strokeLinejoin="round" />
                <path d="M8 6v3.5" stroke="#38BDF8" strokeWidth="1.4" strokeLinecap="round" />
                <circle cx="8" cy="11.5" r="0.75" fill="#38BDF8" />
              </svg>
            </div>
            <p className="font-display font-semibold text-brand-textSecondary text-lg leading-snug">
              <span className="text-white">{aiUrgency.callout.split('They can only')[0]}</span>
              <span className="text-brand-cyan">They can only buy tools that don't work.</span>
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
