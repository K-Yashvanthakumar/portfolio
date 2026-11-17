import { useState } from 'react'
import { Atom, Braces, Coffee, Cpu, Database } from 'lucide-react'
import { P } from '../data/site'
import { useTyping } from '../hooks/useTyping'
import { ResumeButtons, Social } from './ui'

const roles = ['Software Developer', 'Java Developer', 'Full Stack Developer', 'AI/ML Enthusiast']
const floats = [[Coffee, 'left-0 top-8', '0s'], [Atom, 'right-0 top-16', '1s'], [Braces, 'left-2 bottom-10', '2s'], [Database, 'right-2 bottom-6', '3s'], [Cpu, 'left-1/2 -top-4', '1.5s']] as const

export default function Hero() {
  const text = useTyping(roles)
  const [imgOk, setImgOk] = useState(true)
  return (
    <section className="mx-auto grid max-w-6xl items-center gap-12 px-5 pb-16 pt-14 md:grid-cols-[1.2fr_1fr] md:pt-24">
      <div>
        <h1 className="font-display text-4xl font-bold leading-tight sm:text-6xl">Hi, I’m <span className="grad">Yashvanthakumar</span> 👋</h1>
        <p className="mt-4 font-display text-xl text-muted sm:text-2xl">Building Intelligent Solutions Through Code.</p>
        <p className="mt-5 h-7 font-mono text-lg text-cyan-400" aria-label={roles.join(', ')}>{text}<span className="animate-blink">|</span></p>
        <p className="mt-5 max-w-xl text-muted">I’m an Information Science Engineering student passionate about software development, Java, full-stack technologies, and Artificial Intelligence. I enjoy solving challenging problems and building innovative applications that solve real-world problems.</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#projects" className="btn-p">Explore My Projects</a><ResumeButtons compact /><a href="#contact" className="btn-g">Contact Me</a>
        </div>
        <div className="mt-6 flex gap-3"><Social kind="github" /><Social kind="linkedin" /></div>
      </div>
      <div className="relative mx-auto h-80 w-72 sm:h-96 sm:w-80">
        {floats.map(([Icon, pos, d], i) => (
          <span key={i} aria-hidden style={{ animationDelay: d }} className={`glass absolute ${pos} z-10 animate-float p-3 text-cyan-400`}><Icon size={20} /></span>
        ))}
        <div className="absolute inset-6 overflow-hidden rounded-3xl border bg-gradient-to-br from-violet-600/40 via-blue-600/20 to-cyan-400/30 p-1" style={{ borderColor: 'rgb(var(--card)/.2)' }}>
          {imgOk
            ? <img src={P.photo} alt="Portrait of K. Yashvanthakumar" className="h-full w-full rounded-[1.25rem] object-cover" onError={() => setImgOk(false)} loading="eager" />
            : <div className="grid h-full w-full place-items-center rounded-[1.25rem] text-center" role="img" aria-label="Profile photo placeholder"><div><p className="font-display text-6xl font-bold grad">KY</p><p className="mt-2 text-xs text-muted">Add public/profile.jpg</p></div></div>}
        </div>
      </div>
    </section>
  )
}
