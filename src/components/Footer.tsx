import { footer } from '../data/siteContent'
import { StatusTicker } from './StatusTicker'

function LinkedInIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

function GithubIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  )
}

function EmailIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  )
}

export function Footer() {
  return (
    <footer className="relative" aria-label="Site footer">
      <StatusTicker />

      <div
        className="border-t border-brand-cyan/10 pt-16 pb-10"
        style={{ background: 'rgba(7,11,20,0.95)' }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-10 lg:gap-16 mb-12">
            {/* Brand */}
            <div>
              <a href="#" className="inline-block mb-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan rounded" aria-label="6A Logic — home">
                <span className="font-display font-black text-2xl tracking-tight">
                  <span className="text-gradient-cyan">6A</span>
                  <span className="text-white"> Logic</span>
                </span>
              </a>
              <p className="text-brand-textDim text-sm leading-relaxed max-w-xs mb-6">
                {footer.description}
              </p>

              {/* Status pill */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full"
                style={{ background: 'rgba(56,189,248,0.07)', border: '1px solid rgba(56,189,248,0.18)' }}>
                <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan animate-ping-slow" aria-hidden="true" />
                <span className="font-mono text-xs text-brand-cyan tracking-widest">SYSTEMS ONLINE</span>
              </div>

              {/* Social */}
              <div className="flex items-center gap-4 mt-6">
                {[
                  { icon: <LinkedInIcon />, label: 'LinkedIn', href: '#' },
                  { icon: <GithubIcon />, label: 'GitHub', href: '#' },
                  { icon: <EmailIcon />, label: `Email ${footer.email}`, href: `mailto:${footer.email}` },
                ].map(({ icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="text-brand-textDim hover:text-white transition-all duration-200 hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan rounded p-1"
                  >
                    {icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Nav */}
            <div>
              <span className="mono-label block mb-5">Navigation</span>
              <ul className="space-y-3" role="list">
                {footer.links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-brand-textDim hover:text-white text-sm transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan rounded"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <span className="mono-label block mb-5">Contact</span>
              <a
                href={`mailto:${footer.email}`}
                className="text-brand-textDim hover:text-brand-cyan text-sm transition-colors duration-200 block mb-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan rounded"
              >
                {footer.email}
              </a>
              <a
                href="mailto:contact@6alogic.com"
                className="inline-flex items-center gap-2 font-mono text-xs tracking-wider px-4 py-2 rounded-lg transition-all duration-200 hover:border-brand-cyan/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan"
                style={{ background: 'rgba(56,189,248,0.06)', border: '1px solid rgba(56,189,248,0.18)' }}
              >
                Book a Consultation
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                  <path d="M2 5h6M5 2l3 3-3 3" stroke="#38BDF8" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </div>

          {/* Bottom bar */}
          <div
            className="pt-6 border-t border-brand-cyan/08 flex flex-col sm:flex-row items-center justify-between gap-3"
          >
            <p className="font-mono text-xs text-brand-textDimmer">{footer.copyright}</p>
            <p className="font-mono text-xs text-brand-textDimmer">
              Data infrastructure. Workflow automation. AI-ready systems.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
