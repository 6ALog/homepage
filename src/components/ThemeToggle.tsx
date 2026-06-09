import type { Theme } from '../hooks/useTheme'

export function ThemeToggle({ theme, onToggle }: { theme: Theme; onToggle: () => void }) {
  const isMono = theme === 'mono'

  return (
    <button
      onClick={onToggle}
      title={isMono ? 'Switch to color theme' : 'Switch to monochrome theme'}
      aria-label={isMono ? 'Switch to color theme' : 'Switch to monochrome theme'}
      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-mono text-[10px] tracking-widest uppercase transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan"
      style={{
        background: isMono ? 'rgba(255,255,255,0.06)' : 'rgba(56,189,248,0.06)',
        border: isMono ? '1px solid rgba(255,255,255,0.18)' : '1px solid rgba(56,189,248,0.18)',
        color: isMono ? 'rgba(255,255,255,0.5)' : 'rgba(56,189,248,0.6)',
      }}
    >
      {/* Half-circle contrast icon */}
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
        <circle cx="6" cy="6" r="5" stroke="currentColor" strokeWidth="1.2" />
        <path d="M6 1 A5 5 0 0 1 6 11 Z" fill="currentColor" />
      </svg>
      {isMono ? 'Color' : 'Mono'}
    </button>
  )
}
