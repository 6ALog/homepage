import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// Typed shim so TS doesn't complain about the global gtag injected by index.html
declare function gtag(
  command: 'event' | 'config' | 'js',
  target: string | Date,
  params?: Record<string, unknown>
): void

/**
 * Fires a GA4 page_view event on every React Router navigation.
 * Must be rendered inside <BrowserRouter>.
 */
export function GoogleAnalytics() {
  const location = useLocation()

  useEffect(() => {
    if (typeof gtag !== 'function') return

    gtag('event', 'page_view', {
      page_path:     location.pathname + location.search,
      page_location: window.location.href,
      page_title:    document.title,
    })
  }, [location])

  return null
}
