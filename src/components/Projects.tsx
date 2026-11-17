import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ExternalLink, Github, X } from 'lucide-react'
import { projects, type Project } from '../data/site'
import { Reveal, Section } from './ui'

const Preview = ({ p }: { p: Project }) => p.image
  ? <img src={p.image} alt={`${p.title} screenshot`} loading="lazy" className="h-44 w-full rounded-xl object-cover" />
  : <div role="img" aria-label={`${p.title} preview placeholder`} className="grid h-44 place-items-center rounded-xl bg-gradient-to-br from-violet-600/30 via-blue-600/20 to-cyan-400/30"><p.icon size={44} className="text-cyan-300" /></div>

function Links({ p }: { p: Project }) {
  return (<div className="flex flex-wrap gap-2">
    {p.repo ? <a className="btn-g" href={p.repo} target="_blank" rel="noopener noreferrer"><Github size={15} />GitHub</a>
      : <span className="btn-g cursor-not-allowed opacity-50" title="Repository link not added yet"><Github size={15} />Repo link pending</span>}
    {p.demo && <a className="btn-g" href={p.demo} target="_blank" rel="noopener noreferrer"><ExternalLink size={15} />Live Demo</a>}
  </div>)
}

export default function Projects() {
  const [sel, setSel] = useState<Project | null>(null)
  useEffect(() => {
    const k = (e: KeyboardEvent) => e.key === 'Escape' && setSel(null)
    window.addEventListener('keydown', k); return () => window.removeEventListener('keydown', k)
  }, [])
  return (
    <Section id="projects" title="Featured Projects" sub="Selected work across AI, full-stack and desktop development.">
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={(i % 2) * 0.08}>
            <article className="glass flex h-full flex-col gap-4 p-5">
              <Preview p={p} />
              <h3 className="font-display text-xl font-semibold">{p.title}</h3>
              <p className="text-sm text-muted">{p.desc}</p>
              <ul className="flex flex-wrap gap-2">{p.tech.map((t) => <li key={t} className="chip">{t}</li>)}</ul>
              <ul className="list-disc space-y-1 pl-5 text-sm text-muted">{p.features.slice(0, 3).map((f) => <li key={f}>{f}</li>)}</ul>
              <div className="mt-auto flex flex-wrap items-center gap-2 pt-2"><Links p={p} /><button className="btn-p" onClick={() => setSel(p)}>View Details</button></div>
            </article>
          </Reveal>
        ))}
      </div>
      <AnimatePresence>
        {sel && (
          <motion.div className="fixed inset-0 z-50 grid place-items-center bg-black/70 p-4 backdrop-blur-sm" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSel(null)}>
            <motion.div role="dialog" aria-modal="true" aria-label={sel.title} onClick={(e) => e.stopPropagation()} initial={{ scale: 0.95, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.95, y: 20 }}
              className="glass max-h-[90vh] w-full max-w-2xl overflow-y-auto !bg-[rgb(var(--bg))] p-6">
              <div className="flex items-start justify-between gap-4"><h3 className="font-display text-2xl font-bold">{sel.title}</h3><button onClick={() => setSel(null)} aria-label="Close details" className="btn-g !px-2.5"><X size={16} /></button></div>
              <div className="mt-4"><Preview p={sel} /></div>
              <p className="mt-4 text-muted">{sel.desc}</p>
              <h4 className="mt-5 font-medium">Key features</h4>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-muted">{sel.features.map((f) => <li key={f}>{f}</li>)}</ul>
              <h4 className="mt-5 font-medium">Technologies</h4>
              <ul className="mt-2 flex flex-wrap gap-2">{sel.tech.map((t) => <li key={t} className="chip">{t}</li>)}</ul>
              <div className="mt-6"><Links p={sel} /></div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  )
}
