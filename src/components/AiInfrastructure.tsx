import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { aiInfrastructure } from '../data/siteContent'

function ArchDiagram() {
  const layers = aiInfrastructure.layers

  return (
    <div className="glass rounded-2xl p-6 lg:p-8" aria-label="AI infrastructure architecture diagram">
      <div className="flex items-center justify-between mb-6">
        <span className="mono-label">ARCHITECTURE</span>
        <span className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan animate-ping-slow" aria-hidden="true" />
          <span className="font-mono text-xs text-brand-cyan">OPERATIONAL</span>
        </span>
      </div>

      <div className="flex flex-col lg:flex-row items-stretch gap-3">
        {layers.map((layer, i) => (
          <div key={layer.label} className="flex lg:flex-col items-center lg:items-stretch gap-3 flex-1">
            {/* Layer card */}
            <div
              className="flex-1 rounded-xl p-4"
              style={{
                background: i === 1 ? 'rgba(56,189,248,0.08)' : i === 2 ? 'rgba(129,140,248,0.06)' : 'rgba(15,23,42,0.6)',
                border: `1px solid ${i === 1 ? 'rgba(56,189,248,0.3)' : i === 2 ? 'rgba(129,140,248,0.2)' : 'rgba(56,189,248,0.1)'}`,
              }}
            >
              <span
                className="font-mono block mb-3"
                style={{
                  fontSize: '0.6rem',
                  letterSpacing: '0.3em',
                  textTransform: 'uppercase',
                  color: i === 1 ? '#38BDF8' : i === 2 ? '#818CF8' : '#64748B',
                }}
              >
                {layer.label}
              </span>
              <ul className="space-y-1.5">
                {layer.items.map((item) => (
                  <li key={item} className="font-mono text-xs text-brand-textMuted">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Connector arrow (not last) */}
            {i < layers.length - 1 && (
              <div
                className="flex-shrink-0 flex items-center justify-center lg:rotate-90"
                aria-hidden="true"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12h14M15 8l4 4-4 4" stroke="rgba(56,189,248,0.5)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export function AiInfrastructure() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section
      ref={ref}
      id="ai-infrastructure"
      className="relative py-24 lg:py-32 overflow-hidden"
      aria-labelledby="ai-heading"
    >
      {/* Glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none"
        aria-hidden="true"
        style={{
          width: '600px',
          height: '300px',
          background: 'radial-gradient(ellipse, rgba(129,140,248,0.12) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: Copy */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className="mono-label block mb-4">AI INFRASTRUCTURE</span>
            <h2
              id="ai-heading"
              className="font-display font-black uppercase tracking-tighter text-white mb-6"
              style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', lineHeight: 1.05 }}
            >
              {aiInfrastructure.headline}
            </h2>
            <p className="text-brand-textSecondary text-lg leading-relaxed mb-6">
              {aiInfrastructure.subtext}
            </p>

            {/* Wrap note pill */}
            <div
              className="inline-flex items-center gap-3 px-4 py-2.5 rounded-xl mb-10"
              style={{ background: 'rgba(56,189,248,0.07)', border: '1px solid rgba(56,189,248,0.25)' }}
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M7 1l1.8 3.6L13 5.4l-3 2.9.7 4.1L7 10.4l-3.7 2 .7-4.1-3-2.9 4.2-.8z" stroke="#38BDF8" strokeWidth="1.2" fill="rgba(56,189,248,0.15)" strokeLinejoin="round" />
              </svg>
              <span className="font-mono text-xs text-brand-cyan tracking-wide">
                {aiInfrastructure.wrapNote}
              </span>
            </div>

            {/* Capabilities grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {aiInfrastructure.capabilities.map((cap, i) => (
                <motion.div
                  key={cap}
                  initial={{ opacity: 0, x: -16 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.06 }}
                  className="flex items-center gap-3"
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                    style={{ background: '#38BDF8' }}
                    aria-hidden="true"
                  />
                  <span className="font-mono text-xs text-brand-textMuted">{cap}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Architecture diagram */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <ArchDiagram />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
