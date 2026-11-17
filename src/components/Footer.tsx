import { ArrowUp } from 'lucide-react'
import { nav } from '../data/site'
import { Social } from './ui'
export default function Footer() {
  return (
    <footer className="border-t" style={{ borderColor: 'rgb(var(--card)/.1)' }}>
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-12 md:grid-cols-[1fr_auto]">
        <div><p className="font-display text-xl font-bold grad">K. Yashvanthakumar</p><p className="mt-1 text-sm text-muted">Software Developer | AI/ML Enthusiast</p>
          <div className="mt-4 flex gap-3"><Social kind="github" /><Social kind="linkedin" /><Social kind="email" /></div></div>
        <nav aria-label="Footer"><ul className="grid grid-cols-2 gap-x-8 gap-y-2 text-sm text-muted">{nav.map((n) => <li key={n}><a className="hover:text-fg" href={`#${n.toLowerCase()}`}>{n}</a></li>)}</ul></nav>
      </div>
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 pb-8 text-xs text-muted">
        <p>© 2026 K. Yashvanthakumar. All Rights Reserved.</p>
        <a href="#home" className="btn-g" aria-label="Back to top"><ArrowUp size={14} />Back to Top</a>
      </div>
    </footer>
  )
}
