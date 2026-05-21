import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { features } from '../data/siteContent'

function MockDashboard() {
  return (
    <div className="glass rounded-xl p-4" aria-hidden="true">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-2 h-2 rounded-full bg-brand-cyan" />
        <span className="font-mono text-xs text-brand-textDim">OPERATIONAL_DASHBOARD</span>
      </div>
      <div className="grid grid-cols-2 gap-2 mb-3">
        {['RECORDS_UNIFIED', 'WORKFLOWS_ACTIVE', 'SYNC_LAG', 'ERRORS_TODAY'].map((label, i) => (
          <div key={label} className="rounded-lg p-3" style={{ background: 'rgba(56,189,248,0.05)', border: '1px solid rgba(56,189,248,0.1)' }}>
            <div className="font-mono text-xs text-brand-textDim mb-1">{label}</div>
            <div className="font-mono text-sm text-brand-cyan font-bold">
              {['48,291', '24', '0.3s', '0'][i]}
            </div>
          </div>
        ))}
      </div>
      <div className="h-12 rounded-lg overflow-hidden" style={{ background: 'rgba(56,189,248,0.04)', border: '1px solid rgba(56,189,248,0.08)' }}>
        <svg viewBox="0 0 200 48" className="w-full h-full">
          <polyline
            points="0,40 20,35 40,38 60,20 80,25 100,15 120,18 140,10 160,14 180,8 200,12"
            fill="none"
            stroke="rgba(56,189,248,0.6)"
            strokeWidth="1.5"
          />
          <polyline
            points="0,40 20,35 40,38 60,20 80,25 100,15 120,18 140,10 160,14 180,8 200,12 200,48 0,48"
            fill="rgba(56,189,248,0.06)"
          />
        </svg>
      </div>
    </div>
  )
}

function MockApiPanel() {
  return (
    <div className="glass rounded-xl p-4 font-mono text-xs" aria-hidden="true">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-2 h-2 rounded-full bg-brand-accent" />
        <span className="text-brand-textDim">MCP_SERVER_RESPONSE</span>
      </div>
      <div className="space-y-1" style={{ color: '#64748B' }}>
        <span className="text-brand-textDim">{`{`}</span>
        <div className="pl-4 space-y-1">
          <div><span style={{ color: '#818CF8' }}>"tool"</span><span>: </span><span style={{ color: '#67E8F9' }}>"get_customer_data"</span><span>,</span></div>
          <div><span style={{ color: '#818CF8' }}>"status"</span><span>: </span><span style={{ color: '#38BDF8' }}>"success"</span><span>,</span></div>
          <div><span style={{ color: '#818CF8' }}>"records"</span><span>: </span><span style={{ color: '#F8FAFC' }}>142</span><span>,</span></div>
          <div><span style={{ color: '#818CF8' }}>"normalized"</span><span>: </span><span style={{ color: '#38BDF8' }}>true</span><span>,</span></div>
          <div><span style={{ color: '#818CF8' }}>"audit_log"</span><span>: </span><span style={{ color: '#67E8F9' }}>"attached"</span></div>
        </div>
        <span className="text-brand-textDim">{`}`}</span>
      </div>
    </div>
  )
}

function MockWorkflowPanel() {
  const steps = ['CRM Update Received', 'ID Matched → QB Customer', 'Invoice Triggered', 'Confirmation Logged']
  return (
    <div className="glass rounded-xl p-4" aria-hidden="true">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-2 h-2 rounded-full bg-brand-indigo" />
        <span className="font-mono text-xs text-brand-textDim">WORKFLOW_TRACE</span>
      </div>
      <div className="space-y-2">
        {steps.map((s, i) => (
          <div key={i} className="flex items-center gap-3">
            <div className="w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center"
              style={{ background: 'rgba(56,189,248,0.12)', border: '1px solid rgba(56,189,248,0.3)' }}>
              <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                <path d="M1.5 4L3.5 6L6.5 2" stroke="#38BDF8" strokeWidth="1.2" strokeLinecap="round" />
              </svg>
            </div>
            <span className="font-mono text-xs text-brand-textMuted">{s}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function MockInternalTool() {
  return (
    <div className="glass rounded-xl p-4" aria-hidden="true">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-2 h-2 rounded-full bg-brand-sky" />
        <span className="font-mono text-xs text-brand-textDim">RECONCILIATION_TOOL</span>
      </div>
      <div className="space-y-2">
        {[{ label: 'POs matched', val: '1,204 / 1,206', ok: true }, { label: 'Invoices reconciled', val: '983 / 983', ok: true }, { label: 'Open exceptions', val: '2', ok: false }].map((row) => (
          <div key={row.label} className="flex items-center justify-between py-1.5 border-b border-brand-cyan/05">
            <span className="font-mono text-xs text-brand-textDim">{row.label}</span>
            <span className={`font-mono text-xs font-bold ${row.ok ? 'text-brand-cyan' : 'text-amber-400'}`}>{row.val}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

const visuals = [MockDashboard, MockApiPanel, MockWorkflowPanel, MockInternalTool]

export function FeatureHighlights() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section ref={ref} className="relative py-24 lg:py-32 overflow-hidden" aria-labelledby="features-heading">
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <span className="mono-label block mb-4">CAPABILITIES</span>
          <h2
            id="features-heading"
            className="font-display font-black uppercase tracking-tighter text-white"
            style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', lineHeight: 1.05 }}
          >
            How the Infrastructure Works
          </h2>
        </motion.div>

        <div className="space-y-16 lg:space-y-24">
          {features.map((feat, i) => {
            const Visual = visuals[i]
            const isEven = i % 2 === 0

            return (
              <motion.div
                key={feat.tag}
                initial={{ opacity: 0, y: 32 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.1 + i * 0.1 }}
                className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center ${!isEven ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className={!isEven ? 'lg:order-2' : ''}>
                  <span className="mono-label block mb-4">{feat.tag}</span>
                  <h3
                    className="font-display font-bold text-white mb-5 leading-tight"
                    style={{ fontSize: 'clamp(1.4rem, 2.5vw, 2rem)' }}
                  >
                    {feat.title}
                  </h3>
                  <p className="text-brand-textSecondary text-lg leading-relaxed">
                    {feat.description}
                  </p>
                </div>
                <div className={!isEven ? 'lg:order-1' : ''}>
                  <Visual />
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
