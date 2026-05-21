import { motion } from 'framer-motion'
import { hero } from '../data/siteContent'
import { Button } from './ui/Button'
import { ThreeDWireCube } from './ThreeDWireCube'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (d = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.7, delay: d, ease: [0.16, 1, 0.3, 1] } }),
}

function ArchitectureCard() {
  const nodeColor = 'rgba(56,189,248,0.9)'

  return (
    <motion.div
      className="relative w-full max-w-md mx-auto"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Concentric rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none" aria-hidden="true">
        {[220, 300, 380].map((size, i) => (
          <div
            key={i}
            className={i % 2 === 0 ? 'animate-rotate-ring absolute' : 'animate-rotate-ring-r absolute'}
            style={{
              width: size,
              height: size,
              borderRadius: '50%',
              border: `1px solid rgba(56,189,248,${0.15 - i * 0.04})`,
            }}
          />
        ))}
      </div>

      {/* Main glass card */}
      <motion.div
        className="glass rounded-2xl p-6 relative z-10 animate-float"
        style={{ boxShadow: '0 0 60px rgba(56,189,248,0.15), 0 30px 80px rgba(0,0,0,0.5)' }}
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-5">
          <span className="mono-label">ARCHITECTURE</span>
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan animate-ping-slow" />
            <span className="font-mono text-xs text-brand-cyan">LIVE</span>
          </span>
        </div>

        {/* Three-column layout */}
        <div className="grid grid-cols-3 gap-3 relative">
          {/* Inputs */}
          <div className="space-y-2">
            <p className="mono-label text-center mb-3" style={{ fontSize: '0.55rem', letterSpacing: '0.2em' }}>INPUTS</p>
            {hero.architectureInputs.map((item) => (
              <div
                key={item}
                className="glass rounded-lg px-2 py-1.5 text-center"
                style={{ border: '1px solid rgba(56,189,248,0.12)' }}
              >
                <span className="font-mono text-xs text-brand-textDim leading-tight block" style={{ fontSize: '0.6rem' }}>
                  {item}
                </span>
              </div>
            ))}
          </div>

          {/* SVG connector lines */}
          <svg
            className="absolute inset-0 pointer-events-none"
            style={{ zIndex: 1 }}
            aria-hidden="true"
          >
            {hero.architectureInputs.map((_, i) => (
              <line
                key={i}
                x1="33%"
                y1={`${22 + i * 13.5}%`}
                x2="50%"
                y2="50%"
                stroke={nodeColor}
                strokeWidth="0.5"
                strokeOpacity="0.25"
                strokeDasharray="3 4"
              />
            ))}
            {hero.architectureOutputs.map((_, i) => (
              <line
                key={i}
                x1="50%"
                y1="50%"
                x2="67%"
                y2={`${20 + i * 16}%`}
                stroke={nodeColor}
                strokeWidth="0.5"
                strokeOpacity="0.25"
                strokeDasharray="3 4"
              />
            ))}
          </svg>

          {/* Middle layer */}
          <div className="space-y-1.5 z-10">
            <p className="mono-label text-center mb-3" style={{ fontSize: '0.55rem', letterSpacing: '0.2em', color: '#67E8F9' }}>
              6A LOGIC
            </p>
            {hero.architectureMiddle.map((item) => (
              <div
                key={item}
                className="rounded-lg px-2 py-1.5 text-center"
                style={{
                  background: 'rgba(56,189,248,0.08)',
                  border: '1px solid rgba(56,189,248,0.3)',
                }}
              >
                <span className="font-mono text-xs text-brand-cyan leading-tight block" style={{ fontSize: '0.6rem' }}>
                  {item}
                </span>
              </div>
            ))}
          </div>

          {/* Outputs */}
          <div className="space-y-2 z-10">
            <p className="mono-label text-center mb-3" style={{ fontSize: '0.55rem', letterSpacing: '0.2em' }}>OUTPUTS</p>
            {hero.architectureOutputs.map((item) => (
              <div
                key={item}
                className="glass rounded-lg px-2 py-1.5 text-center"
                style={{ border: '1px solid rgba(129,140,248,0.2)' }}
              >
                <span className="font-mono text-xs text-brand-indigo leading-tight block" style={{ fontSize: '0.6rem' }}>
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Status footer */}
        <div className="mt-5 pt-4 border-t border-brand-cyan/10 flex items-center justify-between">
          <span className="font-mono text-xs text-brand-textDim">DATA_SYNC</span>
          <span className="font-mono text-xs text-brand-cyan">OPERATIONAL</span>
        </div>
      </motion.div>
    </motion.div>
  )
}

export function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden"
      aria-label="Hero section"
    >
      {/* Grid overlay */}
      <div className="absolute inset-0 grid-overlay opacity-100 pointer-events-none" aria-hidden="true" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 w-full">
        <div className="grid lg:grid-cols-[60%_40%] gap-12 lg:gap-8 items-center">

          {/* LEFT: Content */}
          <div>
            {/* Eyebrow */}
            <motion.div
              custom={0}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="mb-6"
            >
              <span className="mono-label inline-flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan animate-ping-slow" aria-hidden="true" />
                {hero.eyebrow}
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              className="font-display font-black uppercase tracking-tighter leading-[0.92] mb-8"
              initial="hidden"
              animate="show"
              style={{ fontSize: 'clamp(2.8rem, 7vw, 6rem)' }}
            >
              {hero.headline.map((line, i) => (
                <motion.span
                  key={i}
                  custom={0.1 + i * 0.12}
                  variants={fadeUp}
                  className={`block ${line === hero.gradientPhrase ? 'text-gradient' : 'text-white'}`}
                >
                  {line}
                </motion.span>
              ))}
            </motion.h1>

            {/* Subtext */}
            <motion.p
              custom={0.45}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="text-brand-textSecondary text-lg leading-relaxed max-w-xl mb-10"
            >
              {hero.subtext}
            </motion.p>

            {/* CTAs */}
            <motion.div
              custom={0.55}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="flex flex-wrap gap-4 mb-10"
            >
              <Button href="#contact" size="lg">
                {hero.primaryCta}
              </Button>
              <Button href="#services" variant="ghost" size="lg">
                {hero.secondaryCta}
              </Button>
              {/* 3D Cube */}
              <div className="hidden sm:flex items-center ml-2">
                <ThreeDWireCube size={56} />
              </div>
            </motion.div>

            {/* Trust pills */}
            <motion.div
              custom={0.65}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="flex flex-wrap gap-2 mb-10"
            >
              {hero.pills.map((pill) => (
                <span
                  key={pill}
                  className="font-mono text-xs tracking-wider px-3 py-1.5 rounded-full"
                  style={{
                    background: 'rgba(56,189,248,0.07)',
                    border: '1px solid rgba(56,189,248,0.2)',
                    color: '#94A3B8',
                  }}
                >
                  {pill}
                </span>
              ))}
            </motion.div>

            {/* System status block */}
            <motion.div
              custom={0.75}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="glass rounded-xl p-4 inline-block"
            >
              <p className="mono-label mb-3">SYSTEM STATUS</p>
              {hero.systemStatus.map((item, i) => (
                <div key={i} className="flex items-center gap-3 mb-1.5 last:mb-0">
                  <span className="font-mono text-xs text-brand-textDim">{item.from}</span>
                  <span className="text-brand-cyan font-mono text-xs">→</span>
                  <span className="font-mono text-xs text-brand-accent">{item.to}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT: Architecture card */}
          <div className="hidden lg:block">
            <ArchitectureCard />
          </div>

        </div>
      </div>
    </section>
  )
}
