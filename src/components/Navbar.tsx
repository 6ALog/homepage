import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link, useNavigate } from 'react-router-dom'
import { nav } from '../data/siteContent'
import { Button } from './ui/Button'
import { ThemeToggle } from './ThemeToggle'
import { useTheme } from '../hooks/useTheme'

type NavLink = {
  label: string
  href: string
  dropdown?: { label: string; href: string }[]
}

type PortalSession = { authenticated: true; username: string; csrf: string } | { authenticated: false }
const portalUrl = 'https://apps.6alogic.com'

function AccountControl({ session, mobile, onSignOut }: {
  session: PortalSession
  mobile?: boolean
  onSignOut: (csrf: string) => Promise<void>
}) {
  const [open, setOpen] = useState(false)
  const [error, setError] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return
    function closeOnOutsideClick(event: MouseEvent) {
      if (!ref.current?.contains(event.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', closeOnOutsideClick)
    return () => document.removeEventListener('mousedown', closeOnOutsideClick)
  }, [open])

  if (!session.authenticated) {
    return <Button href={`${portalUrl}/login?return_to=home`} variant="outline" size={mobile ? 'lg' : 'sm'} className={mobile ? 'w-full' : ''}>Log In</Button>
  }

  async function signOut() {
    if (!session.authenticated) return
    setError(false)
    try {
      await onSignOut(session.csrf)
      setOpen(false)
    } catch {
      setError(true)
    }
  }

  return (
    <div ref={ref} className={`relative ${mobile ? 'w-full' : ''}`}>
      <button
        type="button"
        onClick={() => setOpen(value => !value)}
        onKeyDown={event => { if (event.key === 'Escape') setOpen(false) }}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-label={`Account menu for ${session.username}`}
        className={`flex items-center justify-between gap-2 rounded-lg border border-brand-cyan/30 px-4 py-2 text-sm font-semibold text-brand-cyan hover:border-brand-cyan hover:bg-brand-cyan/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan ${mobile ? 'w-full' : ''}`}
      >
        <span>{session.username}</span>
        <span aria-hidden="true" className="text-xs">▾</span>
      </button>
      {open && (
        <div
          role="menu"
          className={`nav-dropdown z-50 min-w-44 overflow-hidden rounded-xl border border-brand-cyan/20 bg-brand-bgLight shadow-card ${mobile ? 'mt-2' : 'absolute right-0 top-full mt-2'}`}
        >
          <a href={portalUrl} role="menuitem" className="block px-4 py-3 text-sm text-brand-textSecondary hover:bg-brand-cyan/10 hover:text-white">Open portal</a>
          <button type="button" role="menuitem" onClick={signOut} className="block w-full border-t border-brand-cyan/10 px-4 py-3 text-left text-sm text-brand-textSecondary hover:bg-brand-cyan/10 hover:text-white">Sign out</button>
          {error && <p role="alert" className="px-4 pb-3 text-xs text-brand-error">Sign out failed. Try again.</p>}
        </div>
      )}
    </div>
  )
}

function DropdownMenu({ items, onClose }: { items: { label: string; href: string }[]; onClose: () => void }) {
  const navigate = useNavigate()

  function handleClick(href: string) {
    onClose()
    const [path, hash] = href.split('#')
    navigate(path || '/')
    if (hash) {
      setTimeout(() => {
        document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' })
      }, 80)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: -8, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -8, scale: 0.97 }}
      transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
      className="nav-dropdown absolute top-full left-0 mt-2 w-60 rounded-xl overflow-hidden z-50"
      style={{
        background: 'rgba(7,11,20,0.97)',
        backdropFilter: 'blur(20px)',
        border: '1px solid rgba(56,189,248,0.18)',
        boxShadow: '0 20px 60px rgba(0,0,0,0.5), 0 0 40px rgba(56,189,248,0.06)',
      }}
    >
      <ul role="menu">
        {items.map((item, i) => (
          <li key={item.href} role="none">
            <button
              role="menuitem"
              onClick={() => handleClick(item.href)}
              className="w-full text-left flex items-center gap-3 px-4 py-3 transition-colors duration-150 focus-visible:outline-none focus-visible:bg-brand-cyan/10 group"
              style={{ borderBottom: i < items.length - 1 ? '1px solid rgba(56,189,248,0.06)' : 'none' }}
              onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(56,189,248,0.06)')}
              onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
            >
              <span
                className="nav-dot w-1 h-1 rounded-full flex-shrink-0 transition-colors"
                style={{ background: 'rgba(56,189,248,0.4)' }}
                aria-hidden="true"
              />
              <span className="font-mono text-xs tracking-wider uppercase text-brand-textDim group-hover:text-white transition-colors">
                {item.label}
              </span>
            </button>
          </li>
        ))}
      </ul>
    </motion.div>
  )
}

function NavItem({ link, onClose }: { link: NavLink; onClose: () => void }) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLLIElement>(null)

  useEffect(() => {
    if (!open) return
    function handler(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [open])

  if (!link.dropdown) {
    return (
      <li ref={ref}>
        <Link
          to={link.href}
          className="font-mono text-xs tracking-[0.28em] uppercase text-brand-textDim hover:text-white transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan rounded"
        >
          {link.label}
        </Link>
      </li>
    )
  }

  return (
    <li ref={ref} className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        onKeyDown={(e) => e.key === 'Escape' && setOpen(false)}
        aria-haspopup="true"
        aria-expanded={open}
        className="flex items-center gap-1.5 font-mono text-xs tracking-[0.28em] uppercase text-brand-textDim hover:text-white transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan rounded"
      >
        {link.label}
        <motion.svg
          width="10"
          height="10"
          viewBox="0 0 10 10"
          fill="none"
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          aria-hidden="true"
        >
          <path d="M2 3.5l3 3 3-3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        </motion.svg>
      </button>

      <AnimatePresence>
        {open && (
          <DropdownMenu
            items={link.dropdown}
            onClose={() => { setOpen(false); onClose() }}
          />
        )}
      </AnimatePresence>
    </li>
  )
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const navigate = useNavigate()
  const { theme, toggle } = useTheme()
  const [portalSession, setPortalSession] = useState<PortalSession>({ authenticated: false })

  useEffect(() => {
    let mounted = true
    async function refreshSession() {
      try {
        const response = await fetch(`${portalUrl}/api/session`, { credentials: 'include', cache: 'no-store' })
        if (!response.ok) throw new Error('Session check failed')
        const session = await response.json()
        if (mounted) setPortalSession(session.authenticated && typeof session.username === 'string' && typeof session.csrf === 'string'
          ? { authenticated: true, username: session.username, csrf: session.csrf }
          : { authenticated: false })
      } catch {
        if (mounted) setPortalSession({ authenticated: false })
      }
    }
    void refreshSession()
    window.addEventListener('focus', refreshSession)
    return () => { mounted = false; window.removeEventListener('focus', refreshSession) }
  }, [])

  async function signOut(csrf: string) {
    const response = await fetch(`${portalUrl}/api/logout`, {
      method: 'POST', credentials: 'include', headers: { 'Content-Type': 'application/json', 'X-CSRF-Token': csrf }, body: '{}',
    })
    if (!response.ok) throw new Error('Sign out failed')
    const { logoutUrl } = await response.json()
    const target = new URL(logoutUrl)
    if (target.protocol !== 'https:' || !['auth.6alogic.com', 'auth.apps.6alogic.com'].includes(target.hostname))
      throw new Error('Unexpected logout URL')
    setPortalSession({ authenticated: false })
    window.location.assign(target.toString())
  }

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  function closeMenu() {
    setMobileOpen(false)
    setMobileServicesOpen(false)
  }

  function handleMobileLink(href: string) {
    closeMenu()
    const [path, hash] = href.split('#')
    navigate(path || '/')
    if (hash) {
      setTimeout(() => {
        document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' })
      }, 80)
    }
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'glass-dark border-b border-brand-cyan/10' : 'bg-transparent'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between py-5 lg:py-6">
          {/* Logo */}
          <Link
            to="/"
            className="inline-flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan rounded"
            aria-label="6A Logic home"
          >
            <img src="/logo-mark.png"       alt="6A Logic" className="logo-default h-[60px] lg:h-[72px] w-auto" />
            <img src="/logo-mark-white.png" alt="6A Logic" className="logo-mono    h-[60px] lg:h-[72px] w-auto" />
          </Link>

          {/* Desktop nav */}
          <ul className="hidden xl:flex items-center gap-8" role="list">
            {(nav.links as NavLink[]).map((link) => (
              <NavItem key={link.href} link={link} onClose={() => {}} />
            ))}
          </ul>

          {/* Desktop CTAs */}
          <div className="hidden xl:flex items-center gap-3">
            <ThemeToggle theme={theme} onToggle={toggle} />
            <Button
              href={portalUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="outline"
              size="sm"
            >
              Client Portal
            </Button>
            <Button
              href="https://calendar.app.google/xPb4454AYtz4CARJA"
              target="_blank"
              rel="noopener noreferrer"
              size="sm"
            >
              {nav.cta}
            </Button>
            <AccountControl session={portalSession} onSignOut={signOut} />
          </div>

          {/* Hamburger */}
          <button
            className="xl:hidden flex flex-col gap-1.5 p-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan rounded"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            <motion.span
              className="block h-0.5 w-6 bg-brand-textSecondary origin-center"
              animate={mobileOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.2 }}
            />
            <motion.span
              className="block h-0.5 w-6 bg-brand-textSecondary"
              animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.15 }}
            />
            <motion.span
              className="block h-0.5 w-6 bg-brand-textSecondary origin-center"
              animate={mobileOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.2 }}
            />
          </button>
        </nav>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 glass-dark flex flex-col pt-24 pb-10 px-8 overflow-y-auto"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
          >
            <ul className="flex flex-col gap-2 flex-1" role="list">
              {(nav.links as NavLink[]).map((link) => (
                <li key={link.href}>
                  {link.dropdown ? (
                    <>
                      <button
                        onClick={() => setMobileServicesOpen((v) => !v)}
                        className="w-full flex items-center justify-between font-mono text-sm tracking-[0.28em] uppercase text-brand-textSecondary py-3 border-b border-brand-cyan/10 focus-visible:outline-none"
                      >
                        {link.label}
                        <motion.svg
                          width="12" height="12" viewBox="0 0 10 10" fill="none"
                          animate={{ rotate: mobileServicesOpen ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                          aria-hidden="true"
                        >
                          <path d="M2 3.5l3 3 3-3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                        </motion.svg>
                      </button>
                      <AnimatePresence>
                        {mobileServicesOpen && (
                          <motion.ul
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden pl-4 space-y-1 py-2"
                          >
                            {link.dropdown.map((item) => (
                              <li key={item.href}>
                                <button
                                  onClick={() => handleMobileLink(item.href)}
                                  className="flex items-center gap-2 py-2 font-mono text-xs tracking-wider uppercase text-brand-textDim hover:text-brand-cyan transition-colors w-full text-left"
                                >
                                  <span className="w-1 h-1 rounded-full bg-brand-cyan/40" aria-hidden="true" />
                                  {item.label}
                                </button>
                              </li>
                            ))}
                          </motion.ul>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <button
                      onClick={() => handleMobileLink(link.href)}
                      className="font-mono text-sm tracking-[0.28em] uppercase text-brand-textSecondary hover:text-white transition-colors duration-200 block py-3 border-b border-brand-cyan/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan rounded w-full text-left"
                    >
                      {link.label}
                    </button>
                  )}
                </li>
              ))}
            </ul>
            <div className="flex flex-col gap-3 mt-6">
              <div className="flex justify-start">
                <ThemeToggle theme={theme} onToggle={toggle} />
              </div>
              <Button
                href={portalUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="outline"
                size="lg"
                className="w-full"
              >
                Client Portal
              </Button>
              <Button
                href="https://calendar.app.google/xPb4454AYtz4CARJA"
                target="_blank"
                rel="noopener noreferrer"
                size="lg"
                className="w-full"
              >
                {nav.cta}
              </Button>
              <AccountControl session={portalSession} mobile onSignOut={signOut} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
