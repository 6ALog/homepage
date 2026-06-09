import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { ctaBanner, finalCta } from '../data/siteContent'
import { Button } from './ui/Button'
import { ThreeDWireCube } from './ThreeDWireCube'

export function CTABanner() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section ref={ref} id="contact" className="relative py-16 lg:py-20" aria-labelledby="cta-banner-heading">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-2xl p-8 lg:p-12"
          style={{
            background: 'rgba(15,23,42,0.7)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(56,189,248,0.2)',
            boxShadow: '0 0 80px rgba(56,189,248,0.08), 0 40px 80px rgba(0,0,0,0.4)',
          }}
        >
          {/* Grid overlay inside card */}
          <div className="absolute inset-0 grid-overlay opacity-60 pointer-events-none rounded-2xl" aria-hidden="true" />

          {/* Glow blob */}
          <div
            className="absolute -top-20 -right-20 pointer-events-none"
            aria-hidden="true"
            style={{
              width: '300px',
              height: '300px',
              background: 'radial-gradient(circle, rgba(56,189,248,0.1) 0%, transparent 70%)',
              filter: 'blur(40px)',
            }}
          />

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-12">
            <div className="flex-1">
              <span className="mono-label block mb-4">READY TO START?</span>
              <h2
                id="cta-banner-heading"
                className="font-display font-black uppercase tracking-tighter text-white mb-4"
                style={{ fontSize: 'clamp(1.4rem, 3vw, 2.2rem)', lineHeight: 1.08 }}
              >
                {ctaBanner.headline}
              </h2>
              <p className="text-brand-textSecondary leading-relaxed max-w-xl">
                {ctaBanner.subtext}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-4 lg:flex-shrink-0">
              <Button href="https://calendar.app.google/xPb4454AYtz4CARJA" target="_blank" rel="noopener noreferrer" size="lg">
                {ctaBanner.primaryCta}
              </Button>
              <Button href="https://calendar.app.google/xPb4454AYtz4CARJA" target="_blank" rel="noopener noreferrer" variant="ghost" size="lg">
                {ctaBanner.secondaryCta}
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export function FinalCTA() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section ref={ref} className="relative py-28 lg:py-40 overflow-hidden text-center" aria-labelledby="final-cta-heading">
      {/* Background gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{ background: 'linear-gradient(180deg, transparent 0%, rgba(37,99,235,0.08) 50%, rgba(7,11,20,1) 100%)' }}
      />

      {/* Radial glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        aria-hidden="true"
        style={{
          width: '700px',
          height: '400px',
          background: 'radial-gradient(ellipse, rgba(56,189,248,0.12) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      <div className="absolute inset-0 grid-overlay opacity-50 pointer-events-none" aria-hidden="true" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-10">
        {/* Decorative cube */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-10"
          aria-hidden="true"
        >
          <ThreeDWireCube size={80} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <span className="mono-label block mb-6 text-center">THE BOTTOM LINE</span>
          <h2
            id="final-cta-heading"
            className="font-display font-black uppercase tracking-tighter text-white mb-8 mx-auto"
            style={{ fontSize: 'clamp(1.8rem, 5vw, 4rem)', lineHeight: 1.0 }}
          >
            <span className="block">YOUR COMPETITORS ARE BUILDING AI</span>
            <span className="block">INTO THEIR OPERATIONS.</span>
            <span className="block text-gradient">IS YOUR DATA LAYER READY?</span>
          </h2>

          <p className="text-brand-textSecondary text-xl leading-relaxed max-w-3xl mx-auto mb-12">
            {finalCta.subtext}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button href="https://calendar.app.google/xPb4454AYtz4CARJA" target="_blank" rel="noopener noreferrer" size="lg" className="px-10 py-5 text-lg">
              {finalCta.primaryCta}
            </Button>
            <Button href="https://calendar.app.google/xPb4454AYtz4CARJA" target="_blank" rel="noopener noreferrer" variant="outline" size="lg">
              {finalCta.secondaryCta}
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
