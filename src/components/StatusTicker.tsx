import { footer } from '../data/siteContent'

export function StatusTicker() {
  const doubled = [...footer.tickerItems, ...footer.tickerItems]

  return (
    <div
      className="relative overflow-hidden border-y border-brand-cyan/10 bg-brand-bgMid/60 py-3"
      aria-label="System status ticker"
    >
      <div
        className="flex gap-12 whitespace-nowrap animate-ticker"
        style={{ width: 'max-content' }}
      >
        {doubled.map((item, i) => {
          const [key, val] = item.split(': ')
          return (
            <span key={i} className="flex items-center gap-2 font-mono text-xs tracking-widest">
              <span className="text-brand-textDim">{key}:</span>
              <span className="text-brand-cyan font-semibold">{val}</span>
              <span className="text-brand-textDimmer mx-4">|</span>
            </span>
          )
        })}
      </div>
    </div>
  )
}
