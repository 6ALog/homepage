/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          // Surfaces
          bg:            '#030712',
          bgMid:         '#070B14',
          bgLight:       '#0B1020',
          bgCard:        '#151C2E',
          paper:         '#F6F8FB',
          // Accents
          cyan:          '#38BDF8',
          accent:        '#67E8F9',
          sky:           '#0EA5E9',
          blue:          '#2563EB',
          indigo:        '#818CF8',
          // Text
          textPrimary:   '#F8FAFC',
          textSecondary: '#CBD5E1',
          textMuted:     '#94A3B8',
          textDim:       '#64748B',
          textDimmer:    '#475569',
          // Semantic
          success:       '#22D3A7',
          warn:          '#FCD34D',
          error:         '#F87171',
        },
      },
      fontFamily: {
        display: ['Inter', 'system-ui', 'sans-serif'],
        body:    ['Inter', 'system-ui', 'sans-serif'],
        mono:    ['"JetBrains Mono"', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
      },
      fontSize: {
        '10xl': ['10rem', { lineHeight: '0.9' }],
        '9xl':  ['8rem',  { lineHeight: '0.9' }],
      },
      backgroundImage: {
        // Signature brand gradient: cyan → blue (mark, CTAs, key headings)
        'brand-gradient': 'linear-gradient(135deg, #67E8F9 0%, #38BDF8 50%, #2563EB 100%)',
        'brand-halo':     'linear-gradient(135deg, #38BDF8 0%, #818CF8 100%)',
        // Text gradients
        'text-gradient':  'linear-gradient(180deg, #FFFFFF 20%, #38BDF8 70%, #2563EB 100%)',
        // Grid overlay pattern
        'grid-overlay':
          'linear-gradient(rgba(56,189,248,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,0.07) 1px, transparent 1px)',
      },
      animation: {
        'spin-slow':     'spin 12s linear infinite',
        'float':         'float 6s ease-in-out infinite',
        'float-slow':    'float 9s ease-in-out infinite',
        'float-delayed': 'float 7s ease-in-out 2s infinite',
        'blob':          'blob 18s ease-in-out infinite',
        'blob-slow':     'blob 24s ease-in-out infinite',
        'blob-delayed':  'blob 21s ease-in-out 6s infinite',
        'ping-slow':     'ping 2.5s cubic-bezier(0,0,0.2,1) infinite',
        'ticker':        'ticker 40s linear infinite',
        'pulse-glow':    'pulseGlow 3s ease-in-out infinite',
        'rotate-ring':   'rotateRing 8s linear infinite',
        'rotate-ring-r': 'rotateRingR 12s linear infinite',
        'slide-up':      'slideUp 0.6s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-12px)' },
        },
        blob: {
          '0%':   { borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%', transform: 'rotate(0deg) scale(1)' },
          '25%':  { borderRadius: '30% 60% 70% 40% / 50% 60% 30% 60%', transform: 'rotate(90deg) scale(1.05)' },
          '50%':  { borderRadius: '50% 60% 30% 60% / 40% 30% 70% 50%', transform: 'rotate(180deg) scale(0.95)' },
          '75%':  { borderRadius: '60% 30% 60% 40% / 70% 50% 30% 60%', transform: 'rotate(270deg) scale(1.05)' },
          '100%': { borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%', transform: 'rotate(360deg) scale(1)' },
        },
        ticker: {
          '0%':   { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(56,189,248,0.3)' },
          '50%':      { boxShadow: '0 0 40px rgba(56,189,248,0.6), 0 0 80px rgba(56,189,248,0.2)' },
        },
        rotateRing: {
          '0%':   { transform: 'rotateX(60deg) rotateZ(0deg)' },
          '100%': { transform: 'rotateX(60deg) rotateZ(360deg)' },
        },
        rotateRingR: {
          '0%':   { transform: 'rotateX(60deg) rotateZ(0deg)' },
          '100%': { transform: 'rotateX(60deg) rotateZ(-360deg)' },
        },
        slideUp: {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
      },
      boxShadow: {
        'cyan-glow':    '0 0 30px rgba(56,189,248,0.45)',
        'cyan-glow-lg': '0 0 60px rgba(56,189,248,0.3), 0 20px 60px rgba(56,189,248,0.18)',
        'glass':        '0 8px 32px rgba(0,0,0,0.4)',
        'card-hover':   '0 20px 60px rgba(56,189,248,0.18)',
      },
    },
  },
  plugins: [],
}
