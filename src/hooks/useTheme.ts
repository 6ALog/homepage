import { useState, useEffect } from 'react'

export type Theme = 'brand' | 'mono'

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() => {
    return (localStorage.getItem('6al-theme') as Theme) ?? 'brand'
  })

  useEffect(() => {
    const html = document.documentElement
    if (theme === 'mono') {
      html.setAttribute('data-theme', 'mono')
    } else {
      html.removeAttribute('data-theme')
    }
    localStorage.setItem('6al-theme', theme)
  }, [theme])

  function toggle() {
    setTheme((t) => (t === 'brand' ? 'mono' : 'brand'))
  }

  return { theme, toggle }
}
