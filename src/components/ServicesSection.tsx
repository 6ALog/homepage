import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { services } from '../data/siteContent'

const serviceIcons: Record<string, React.ReactNode> = {
  '▦': (
    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" aria-hidden="true">
      <rect x="2" y="2" width="9" height="9" rx="2" stroke="#38BDF8" strokeWidth="1.4" fill="rgba(56,189,248,0.08)" />
      <rect x="15" y="2" width="9" height="9" rx="2" stroke="#38BDF8" strokeWidth="1.4" fill="rgba(56,189,248,0.08)" />
      <rect x="2" y="15" width="9" height="9" rx="2" stroke="#38BDF8" strokeWidth="1.4" fill="rgba(56,189,248,0.08)" />
      <rect x="15" y="15" width="9" height="9" rx="2" stroke="#38BDF8" strokeWidth="1.4" fill="rgba(56,189,248,0.08)" />
    </svg>
  ),
  '⇄': (
    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" aria-hidden="true">
      <path d="M4 10h16M16 6l4 4-4 4" stroke="#38BDF8" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M22 17H6M10 13l-4 4 4 4" stroke="#38BDF8" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  '◈': (
    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" aria-hidden="true">
      <rect x="3" y="3" width="20" height="20" rx="2.5" stroke="#38BDF8" strokeWidth="1.4" fill="rgba(56,189,248,0.05)" />
      <rect x="8" y="8" width="10" height="10" rx="1.5" stroke="#38BDF8" strokeWidth="1" fill="rgba(56,189,248,0.08)" />
      <circle cx="13" cy="13" r="2.5" fill="#38BDF8" fillOpacity="0.7" />
    </svg>
  ),
  '⟳': (
    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" aria-hidden="true">
      <path d="M5 13a8 8 0 018-8 8 8 0 015.66 2.34" stroke="#38BDF8" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M21 13a8 8 0 01-8 8 8 8 0 01-5.66-2.34" stroke="#38BDF8" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M19 8l0.66 4.34L15 12" stroke="#38BDF8" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M7 18l-0.66-4.34L11 14" stroke="#38BDF8" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
}

export function ServicesSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section
      ref={ref}
      id="services"
      className="relative py-24 lg:py-32 overflow-hidden"
      aria-labelledby="services-heading"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16 max-w-2xl"
        >
          <span className="mono-label block mb-4">SERVICES</span>
          <h2
            id="services-heading"
            className="font-display font-black uppercase tracking-tighter text-white mb-4"
            style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', lineHeight: 1.05 }}
          >
            Four Ways We Work With You
          </h2>
          <p className="text-brand-textSecondary leading-relaxed">
            Every engagement maps to one or more of these service areas — sometimes all four.
          </p>
        </motion.div>

        {/* 2×2 grid */}
        <div className="grid sm:grid-cols-2 gap-5">
          {services.map((svc, i) => (
            <motion.div
              key={svc.id}
              id={svc.id}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.08 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="glass rounded-2xl p-8 group hover:border-brand-cyan/35 hover:shadow-card-hover transition-all duration-300 flex flex-col"
            >
              {/* Icon + label row */}
              <div className="flex items-start justify-between mb-5">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ background: 'rgba(56,189,248,0.07)', border: '1px solid rgba(56,189,248,0.15)' }}
                >
                  {serviceIcons[svc.icon]}
                </div>
                <span className="mono-label group-hover:text-brand-accent transition-colors">
                  {svc.label}
                </span>
              </div>

              {/* Title + tagline */}
              <h3 className="font-display font-black text-white text-2xl mb-1 leading-tight">
                {svc.title}
              </h3>
              <p className="font-mono text-xs text-brand-cyan mb-4 tracking-wide">{svc.tagline}</p>

              {/* Description */}
              <p className="text-brand-textMuted text-sm leading-relaxed mb-6 flex-1">
                {svc.description}
              </p>

              {/* Feature list */}
              <ul className="space-y-2 pt-5 border-t border-brand-cyan/08">
                {svc.features.map((f) => (
                  <li key={f} className="flex items-center gap-2.5">
                    <span
                      className="w-4 h-4 rounded flex-shrink-0 flex items-center justify-center"
                      style={{ background: 'rgba(56,189,248,0.1)', border: '1px solid rgba(56,189,248,0.25)' }}
                      aria-hidden="true"
                    >
                      <svg width="7" height="7" viewBox="0 0 7 7" fill="none">
                        <path d="M1 3.5L3 5.5L6 1.5" stroke="#38BDF8" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <span className="font-mono text-xs text-brand-textMuted">{f}</span>
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
