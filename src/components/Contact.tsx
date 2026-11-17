import { useRef, useState, type FormEvent } from 'react'
import emailjs from '@emailjs/browser'
import { Loader2, Mail, MapPin, Send } from 'lucide-react'
import { P } from '../data/site'
import { Reveal, Section, Social } from './ui'

type Status = 'idle' | 'loading' | 'ok' | 'err'
const env = import.meta.env
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

export default function Contact() {
  const [status, setStatus] = useState<Status>('idle')
  const [msg, setMsg] = useState('')
  const [errs, setErrs] = useState<Record<string, string>>({})
  const opened = useRef(Date.now())

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const f = new FormData(form)
    if (f.get('website')) return // honeypot: bots fill hidden field
    const v = (k: string) => String(f.get(k) || '').trim()
    const next: Record<string, string> = {}
    if (v('name').length < 2) next.name = 'Enter your full name.'
    if (!EMAIL_RE.test(v('email'))) next.email = 'Enter a valid email address.'
    if (v('subject').length < 3) next.subject = 'Enter a subject.'
    if (v('message').length < 10) next.message = 'Message must be at least 10 characters.'
    setErrs(next)
    if (Object.keys(next).length) return
    const last = Number(localStorage.getItem('lastSend') || 0)
    if (Date.now() - opened.current < 3000 || Date.now() - last < 30000) { setStatus('err'); setMsg('Please wait a few seconds before sending again.'); return }
    if (!env.VITE_EMAILJS_SERVICE_ID || !env.VITE_EMAILJS_TEMPLATE_ID || !env.VITE_EMAILJS_PUBLIC_KEY) {
      setStatus('err'); setMsg(`Contact form isn’t configured yet. Email me directly at ${P.email}.`); return
    }
    setStatus('loading')
    try {
      await emailjs.send(env.VITE_EMAILJS_SERVICE_ID, env.VITE_EMAILJS_TEMPLATE_ID,
        { from_name: v('name'), from_email: v('email'), reply_to: v('email'), subject: v('subject'), message: v('message'), to_email: P.email },
        { publicKey: env.VITE_EMAILJS_PUBLIC_KEY })
      try { localStorage.setItem('lastSend', String(Date.now())) } catch { /* ignore */ }
      setStatus('ok'); setMsg('Message sent. Thanks for reaching out — I’ll reply soon.'); form.reset()
    } catch {
      setStatus('err'); setMsg(`Message couldn’t be sent. Try again or email ${P.email}.`)
    }
  }
  const field = (k: string, label: string, type = 'text') => (
    <div><label htmlFor={k} className="mb-1.5 block text-sm">{label}</label>
      <input id={k} name={k} type={type} className="input" aria-invalid={!!errs[k]} aria-describedby={errs[k] ? `${k}-e` : undefined} autoComplete={k === 'name' ? 'name' : k === 'email' ? 'email' : 'off'} />
      {errs[k] && <p id={`${k}-e`} className="mt-1 text-xs text-red-400">{errs[k]}</p>}</div>)
  return (
    <Section id="contact" title="Let’s Build Something Great Together." sub="Have an opportunity, project idea, or collaboration in mind? Feel free to reach out. I’d love to connect!">
      <div className="grid gap-8 lg:grid-cols-[1.3fr_1fr]">
        <Reveal><form onSubmit={onSubmit} noValidate className="glass space-y-4 p-6">
          <div className="grid gap-4 sm:grid-cols-2">{field('name', 'Full Name')}{field('email', 'Email Address', 'email')}</div>
          {field('subject', 'Subject')}
          <div><label htmlFor="message" className="mb-1.5 block text-sm">Message</label>
            <textarea id="message" name="message" rows={5} className="input resize-y" aria-invalid={!!errs.message} />
            {errs.message && <p className="mt-1 text-xs text-red-400">{errs.message}</p>}</div>
          <input name="website" tabIndex={-1} autoComplete="off" aria-hidden className="absolute left-[-9999px] h-0 w-0 opacity-0" />
          <button className="btn-p" disabled={status === 'loading'}>{status === 'loading' ? <><Loader2 size={16} className="animate-spin" />Sending…</> : <><Send size={16} />Send Message</>}</button>
          <div role="status" aria-live="polite">{(status === 'ok' || status === 'err') && <p className={`rounded-xl border p-3 text-sm ${status === 'ok' ? 'border-emerald-500/40 text-emerald-400' : 'border-red-500/40 text-red-400'}`}>{msg}</p>}</div>
        </form></Reveal>
        <Reveal delay={0.1}><div className="glass space-y-5 p-6">
          <a className="flex items-center gap-3 hover:text-cyan-400" href={`mailto:${P.email}`}><Mail size={18} />{P.email}</a>
          <p className="flex items-center gap-3"><MapPin size={18} />{P.location}</p>
          <div className="flex flex-wrap gap-3"><Social kind="github" label /><Social kind="linkedin" label /></div>
        </div></Reveal>
      </div>
    </Section>
  )
}
