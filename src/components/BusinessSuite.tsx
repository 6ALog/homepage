import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { businessSuite } from '../data/siteContent'

const toolIcons: Record<string, React.ReactNode> = {
  crm: (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
      <circle cx="8" cy="7" r="3" stroke="#38BDF8" strokeWidth="1.4" />
      <circle cx="15" cy="7" r="3" stroke="#38BDF8" strokeWidth="1.4" strokeOpacity="0.5" />
      <path d="M2 18c0-3.314 2.686-6 6-6s6 2.686 6 6" stroke="#38BDF8" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M15 12c1.657 0 3 1.343 3 3v3" stroke="#38BDF8" strokeWidth="1.4" strokeLinecap="round" strokeOpacity="0.5" />
    </svg>
  ),
  accounting: (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
      <rect x="2" y="4" width="18" height="14" rx="2" stroke="#38BDF8" strokeWidth="1.4" />
      <path d="M2 9h18" stroke="#38BDF8" strokeWidth="1.4" />
      <path d="M7 14h4M13 14h2" stroke="#38BDF8" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  ),
  pm: (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
      <rect x="2" y="3" width="18" height="16" rx="2" stroke="#38BDF8" strokeWidth="1.4" />
      <path d="M6 8h4M6 11h6M6 14h3" stroke="#38BDF8" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M14 11l1.5 1.5L18 9.5" stroke="#38BDF8" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  transcript: (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
      <path d="M11 2C7.686 2 5 4.686 5 8v2a6 6 0 0012 0V8c0-3.314-2.686-6-6-6z" stroke="#38BDF8" strokeWidth="1.4" />
      <path d="M2 10a9 9 0 0018 0" stroke="#38BDF8" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M11 16v4M8 20h6" stroke="#38BDF8" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  ),
  analytics: (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
      <rect x="2" y="2" width="18" height="18" rx="2" stroke="#38BDF8" strokeWidth="1.4" />
      <path d="M6 14l3-4 3 2 4-5" stroke="#38BDF8" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="6" cy="14" r="1.2" fill="#38BDF8" />
      <circle cx="9" cy="10" r="1.2" fill="#38BDF8" />
      <circle cx="12" cy="12" r="1.2" fill="#38BDF8" />
      <circle cx="16" cy="7" r="1.2" fill="#38BDF8" />
    </svg>
  ),
  automation: (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
      <path d="M5 11a6 6 0 016-6 6 6 0 014.24 1.76" stroke="#38BDF8" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M17 11a6 6 0 01-6 6 6 6 0 01-4.24-1.76" stroke="#38BDF8" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M15 8l0.24 3.76L12 11" stroke="#38BDF8" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M7 14l-0.24-3.76L10 11" stroke="#38BDF8" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
}

function PortalMockup() {
  const tools = ['CRM', 'Accounting', 'Projects', 'Analytics', 'AI Assistant']
  return (
    <div
      className="suite-portal-mock glass rounded-2xl overflow-hidden"
      style={{ border: '1px solid rgba(56,189,248,0.2)', boxShadow: '0 0 60px rgba(56,189,248,0.1)' }}
      aria-hidden="true"
    >
      {/* Browser chrome */}
      <div
        className="flex items-center gap-2 px-4 py-3 border-b border-brand-cyan/10"
        style={{ background: 'rgba(7,11,20,0.9)' }}
      >
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full" style={{ background: 'rgba(239,68,68,0.6)' }} />
          <div className="w-2.5 h-2.5 rounded-full" style={{ background: 'rgba(251,191,36,0.6)' }} />
          <div className="w-2.5 h-2.5 rounded-full" style={{ background: 'rgba(34,197,94,0.6)' }} />
        </div>
        <div
          className="flex-1 mx-4 rounded px-3 py-1 font-mono text-xs text-brand-textDim"
          style={{ background: 'rgba(56,189,248,0.05)', border: '1px solid rgba(56,189,248,0.1)' }}
        >
          portal.yourbusiness.com
        </div>
        <div className="w-6 h-6 rounded-full flex items-center justify-center"
          style={{ background: 'rgba(56,189,248,0.1)' }}>
          <div className="w-2 h-2 rounded-full bg-brand-cyan" />
        </div>
      </div>

      {/* Portal body */}
      <div className="flex" style={{ background: 'rgba(3,7,18,0.95)', minHeight: '320px' }}>
        {/* Sidebar */}
        <div className="w-44 border-r border-brand-cyan/08 p-4 flex flex-col gap-1">
          <div className="font-mono text-xs text-brand-textDimmer mb-3 tracking-widest uppercase">YOUR STACK</div>
          {tools.map((t, i) => (
            <div
              key={t}
              className={`flex items-center gap-2.5 px-3 py-2 rounded-lg cursor-pointer transition-colors ${i === 0 ? 'bg-brand-cyan/10 border border-brand-cyan/25' : 'hover:bg-brand-cyan/5'}`}
            >
              <div className={`w-1.5 h-1.5 rounded-full ${i === 0 ? 'bg-brand-cyan' : 'bg-brand-textDimmer'}`} />
              <span className={`font-mono text-xs ${i === 0 ? 'text-brand-cyan' : 'text-brand-textDim'}`}>{t}</span>
            </div>
          ))}
          <div className="mt-auto pt-4 border-t border-brand-cyan/08">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-brand-cyan/20 flex items-center justify-center">
                <span className="font-mono text-xs text-brand-cyan font-bold">A</span>
              </div>
              <span className="font-mono text-xs text-brand-textDim">Admin</span>
            </div>
          </div>
        </div>

        {/* Main panel */}
        <div className="flex-1 p-5">
          <div className="flex items-center justify-between mb-4">
            <span className="font-mono text-xs text-brand-textDim tracking-wider uppercase">CRM / Pipeline</span>
            <div className="flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-brand-cyan animate-ping-slow" />
              <span className="font-mono text-xs text-brand-cyan">LIVE</span>
            </div>
          </div>
          {/* Pipeline stages */}
          <div className="grid grid-cols-3 gap-2">
            {[
              { stage: 'Lead', count: 12, color: 'rgba(56,189,248,0.15)' },
              { stage: 'Qualified', count: 7, color: 'rgba(129,140,248,0.15)' },
              { stage: 'Proposal', count: 4, color: 'rgba(34,197,94,0.1)' },
            ].map((col) => (
              <div key={col.stage} className="rounded-xl p-3" style={{ background: col.color, border: '1px solid rgba(56,189,248,0.08)' }}>
                <div className="font-mono text-xs text-brand-textDim mb-2">{col.stage}</div>
                <div className="font-display font-black text-2xl text-white">{col.count}</div>
                <div className="mt-2 space-y-1">
                  {Array.from({ length: Math.min(col.count, 3) }).map((_, i) => (
                    <div key={i} className="h-1.5 rounded-full" style={{ background: 'rgba(56,189,248,0.2)', width: `${70 + i * 10}%` }} />
                  ))}
                </div>
              </div>
            ))}
          </div>
          {/* AI bar at bottom */}
          <div
            className="mt-4 flex items-center gap-3 px-3 py-2 rounded-xl"
            style={{ background: 'rgba(56,189,248,0.05)', border: '1px solid rgba(56,189,248,0.15)' }}
          >
            <div className="w-5 h-5 rounded-full bg-brand-cyan/15 flex items-center justify-center flex-shrink-0">
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                <path d="M5 1l1 3h3L7 6l1 3-3-2-3 2 1-3-2-2h3z" fill="#38BDF8" />
              </svg>
            </div>
            <span className="font-mono text-xs text-brand-textDim">"How many deals closed this month?"</span>
            <div className="ml-auto font-mono text-xs text-brand-cyan">Ask AI →</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function BusinessSuite() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section
      ref={ref}
      id="business-suite"
      className="relative py-24 lg:py-36 overflow-hidden"
      aria-labelledby="suite-heading"
    >
      {/* Background */}
      <div
        className="suite-section-bg absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{ background: 'linear-gradient(180deg, #030712 0%, #070E1C 30%, #0A1628 60%, #030712 100%)' }}
      />
      <div className="absolute inset-0 grid-overlay opacity-50 pointer-events-none" aria-hidden="true" />
      <div
        className="suite-glow absolute top-0 right-0 pointer-events-none"
        aria-hidden="true"
        style={{
          width: '600px', height: '600px',
          background: 'radial-gradient(ellipse, rgba(37,99,235,0.1) 0%, transparent 70%)',
          filter: 'blur(80px)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16 max-w-3xl"
        >
          <span className="mono-label block mb-4">{businessSuite.eyebrow}</span>
          <h2
            id="suite-heading"
            className="font-display font-black uppercase tracking-tighter text-white mb-6"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.8rem)', lineHeight: 0.95 }}
          >
            {businessSuite.headline.split('HOSTED.')[0]}
            <span className="text-gradient">HOSTED.</span>
            {' '}AI-READY. YOURS.
          </h2>
          <p className="text-brand-textSecondary text-xl leading-relaxed">{businessSuite.subtext}</p>
        </motion.div>

        {/* Two-track cards */}
        <div className="grid lg:grid-cols-2 gap-5 mb-20">
          {businessSuite.tracks.map((track, i) => (
            <motion.div
              key={track.label}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.12 }}
              className="glass rounded-2xl p-8 relative overflow-hidden group"
              style={{ border: i === 0 ? '1px solid rgba(56,189,248,0.2)' : '1px solid rgba(129,140,248,0.2)' }}
            >
              <div
                className="absolute top-0 right-0 w-48 h-48 pointer-events-none"
                aria-hidden="true"
                style={{
                  background: `radial-gradient(circle, ${i === 0 ? 'rgba(56,189,248,0.06)' : 'rgba(129,140,248,0.06)'} 0%, transparent 70%)`,
                  filter: 'blur(20px)',
                }}
              />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-5">
                  <span
                    className="suite-track-badge px-2.5 py-1 rounded-full font-mono text-xs tracking-widest"
                    style={{
                      background: i === 0 ? 'rgba(56,189,248,0.1)' : 'rgba(129,140,248,0.1)',
                      border: `1px solid ${i === 0 ? 'rgba(56,189,248,0.3)' : 'rgba(129,140,248,0.3)'}`,
                      color: i === 0 ? '#38BDF8' : '#818CF8',
                    }}
                  >
                    {track.label}
                  </span>
                  <span className="font-mono text-xs text-brand-textDimmer">{track.badge}</span>
                </div>
                <h3 className="font-display font-black text-white text-2xl mb-4 leading-tight">
                  {track.title}
                </h3>
                <p className="text-brand-textSecondary leading-relaxed">
                  {track.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tool grid + Portal mockup */}
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-16 items-start mb-20">

          {/* Left: Tool cards */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-8"
            >
              <span className="mono-label block mb-3">INCLUDED TOOLS</span>
              <p className="text-brand-textMuted text-sm">Open-source, self-hostable, configured for your business.</p>
            </motion.div>
            <div className="grid grid-cols-2 gap-3">
              {businessSuite.tools.map((tool, i) => (
                <motion.div
                  key={tool.name}
                  initial={{ opacity: 0, y: 16 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.45, delay: 0.25 + i * 0.07 }}
                  className="glass rounded-xl p-4 group hover:border-brand-cyan/30 transition-colors"
                >
                  <div
                    className="suite-tool-icon w-9 h-9 rounded-lg flex items-center justify-center mb-3"
                    style={{ background: 'rgba(56,189,248,0.07)', border: '1px solid rgba(56,189,248,0.15)' }}
                    aria-hidden="true"
                  >
                    {toolIcons[tool.icon]}
                  </div>
                  <h4 className="font-display font-bold text-white text-sm mb-1">{tool.name}</h4>
                  <p className="font-mono text-xs text-brand-textDim leading-snug mb-2">{tool.description}</p>
                  <p
                    className="suite-tool-link font-mono text-xs leading-snug"
                    style={{ color: 'rgba(56,189,248,0.6)' }}
                  >
                    {tool.openSource}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: Portal mockup */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <span className="mono-label block mb-4">{businessSuite.portal.headline.toUpperCase()}</span>
            <p className="text-brand-textSecondary mb-6 leading-relaxed">
              {businessSuite.portal.description}
            </p>

            {/* Portal features */}
            <ul className="grid grid-cols-2 gap-2 mb-7">
              {businessSuite.portal.features.map((f) => (
                <li key={f} className="flex items-center gap-2">
                  <span
                    className="w-4 h-4 rounded flex-shrink-0 flex items-center justify-center"
                    style={{ background: 'rgba(56,189,248,0.12)', border: '1px solid rgba(56,189,248,0.3)' }}
                    aria-hidden="true"
                  >
                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                      <path d="M1.5 4L3.5 6L6.5 2" stroke="#38BDF8" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span className="font-mono text-xs text-brand-textMuted">{f}</span>
                </li>
              ))}
            </ul>

            <PortalMockup />
          </motion.div>
        </div>

        {/* Cost angle callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="suite-cost-callout relative rounded-2xl px-8 py-7 overflow-hidden"
          style={{ background: 'rgba(56,189,248,0.04)', border: '1px solid rgba(56,189,248,0.18)' }}
        >
          <div
            className="absolute inset-0 rounded-2xl pointer-events-none"
            aria-hidden="true"
            style={{ background: 'radial-gradient(ellipse at 10% 50%, rgba(56,189,248,0.05) 0%, transparent 60%)' }}
          />
          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-8">
            <span className="mono-label flex-shrink-0">COST REALITY</span>
            <p className="text-brand-textSecondary text-sm leading-relaxed">{businessSuite.costNote}</p>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
