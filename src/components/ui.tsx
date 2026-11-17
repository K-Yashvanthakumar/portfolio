import { motion } from 'framer-motion'
import { Download, Eye, Github, Linkedin, Mail } from 'lucide-react'
import { useEffect, useRef, type ReactNode } from 'react'
import { P } from '../data/site'

export const Reveal = ({ children, delay = 0, className = '' }: { children: ReactNode; delay?: number; className?: string }) => (
  <motion.div className={className} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.5, delay }}>{children}</motion.div>
)

export const Section = ({ id, title, sub, children }: { id: string; title: string; sub?: string; children: ReactNode }) => (
  <section id={id} className="mx-auto max-w-6xl px-5 py-20 sm:py-24">
    <Reveal><h2 className="font-display text-3xl font-bold sm:text-4xl">{title}</h2>
      {sub && <p className="mt-3 max-w-2xl text-muted">{sub}</p>}</Reveal>
    <div className="mt-10">{children}</div>
  </section>
)

export const ResumeButtons = ({ compact = false }: { compact?: boolean }) => (<>
  <a className={compact ? 'btn-g' : 'btn-p'} href={P.resume} target="_blank" rel="noopener noreferrer"><Eye size={16} />View Resume</a>
  <a className="btn-g" href={P.resume} download={P.resumeName}><Download size={16} />Download Resume</a>
</>)

export function Social({ kind, label }: { kind: 'github' | 'linkedin' | 'email'; label?: boolean }) {
  const map = { github: [Github, P.github, 'GitHub'], linkedin: [Linkedin, P.linkedin, 'LinkedIn'], email: [Mail, `mailto:${P.email}`, 'Email'] } as const
  const [Icon, href, name] = map[kind]
  const cls = 'glass inline-flex items-center gap-2 p-3 text-sm'
  const inner = <><Icon size={18} />{label && <span>{name}</span>}</>
  return href
    ? <a className={cls} href={href} target={kind === 'email' ? undefined : '_blank'} rel="noopener noreferrer" aria-label={name}>{inner}</a>
    : <span className={`${cls} cursor-not-allowed opacity-50`} title={`${name} URL placeholder – add it in src/data/site.ts`} aria-disabled="true">{inner}{label && <span className="text-xs">(add URL)</span>}</span>
}

export function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (!window.matchMedia('(hover:hover) and (pointer:fine)').matches || window.matchMedia('(prefers-reduced-motion:reduce)').matches) return
    const move = (e: MouseEvent) => { if (ref.current) ref.current.style.transform = `translate(${e.clientX - 150}px,${e.clientY - 150}px)` }
    window.addEventListener('mousemove', move); return () => window.removeEventListener('mousemove', move)
  }, [])
  return <div ref={ref} aria-hidden className="pointer-events-none fixed left-0 top-0 z-0 hidden h-[300px] w-[300px] rounded-full opacity-30 blur-3xl [background:radial-gradient(circle,#8b5cf6,#22d3ee_60%,transparent_70%)] [@media(hover:hover)]:block" />
}
