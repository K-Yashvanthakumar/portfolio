import { useState } from 'react'
import { Menu, Moon, Sun, X } from 'lucide-react'
import { nav } from '../data/site'
import { useTheme } from '../hooks/useTheme'
import { ResumeButtons } from './ui'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { light, toggle } = useTheme()
  const id = (n: string) => `#${n.toLowerCase()}`
  return (
    <header className="sticky top-0 z-40 border-b backdrop-blur-xl" style={{ borderColor: 'rgb(var(--card)/.08)', background: 'rgb(var(--bg)/.7)' }}>
      <nav aria-label="Main" className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <a href="#home" className="font-display text-lg font-bold grad">KY</a>
        <ul className="hidden items-center gap-6 text-sm text-muted xl:flex">
          {nav.map((n) => <li key={n}><a className="transition hover:text-fg" href={id(n)}>{n}</a></li>)}
        </ul>
        <div className="flex items-center gap-2">
          <button onClick={toggle} className="btn-g !px-3" aria-label={light ? 'Switch to dark theme' : 'Switch to light theme'}>{light ? <Moon size={16} /> : <Sun size={16} />}</button>
          <a href="#resume" className="btn-g hidden md:inline-flex">View Resume</a>
          <a href="#contact" className="btn-p hidden md:inline-flex">Contact Me</a>
          <button className="btn-g !px-3 xl:hidden" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Toggle menu">{open ? <X size={18} /> : <Menu size={18} />}</button>
        </div>
      </nav>
      {open && (
        <div className="border-t px-5 pb-5 pt-3 xl:hidden" style={{ borderColor: 'rgb(var(--card)/.08)' }}>
          <ul className="grid gap-1">{nav.map((n) => <li key={n}><a onClick={() => setOpen(false)} className="block rounded-lg px-3 py-2 text-muted hover:text-fg" href={id(n)}>{n}</a></li>)}</ul>
          <div className="mt-3 flex flex-wrap gap-2"><ResumeButtons compact /><a href="#contact" onClick={() => setOpen(false)} className="btn-p">Contact Me</a></div>
        </div>
      )}
    </header>
  )
}
