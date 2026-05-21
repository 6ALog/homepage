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
          bg:            '#030712',
          bgMid:         '#070B14',
          bgLight:       '#0B1020',
          bgCard:        '#151C2E',
          cyan:          '#38BDF8',
          sky:           '#0EA5E9',
          blue:          '#2563EB',
          indigo:        '#818CF8',
          textPrimary:   '#F8FAFC',
          textSecondary: '#CBD5E1',
          textMuted:     '#94A3B8',
          textDim:       '#64748B',
          textDimmer:    '#475569',
          accent:        '#67E8F9',
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
        'brand-gradient': 'linear-gradient(45deg, #030712 0%, #0B1020 45%, #061827 100%)',
        'text-gradient':  'linear-gradient(to bottom, #FFFFFF 20%, #38BDF8 70%, #2563EB 100%)',
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
