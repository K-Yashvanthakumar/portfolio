import { useEffect, useState } from 'react'
export function useTheme() {
  const [light, setLight] = useState(() => document.documentElement.classList.contains('light'))
  useEffect(() => {
    const r = document.documentElement
    r.classList.toggle('light', light); r.classList.toggle('dark', !light)
    try { localStorage.setItem('theme', light ? 'light' : 'dark') } catch { /* storage unavailable */ }
  }, [light])
  return { light, toggle: () => setLight((v) => !v) }
}
