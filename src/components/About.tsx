import { Binary, Brain, Layers, Terminal } from 'lucide-react'
import { Reveal, Section } from './ui'
const cards = [[Terminal, 'Software Development'], [Binary, 'Data Structures & Algorithms'], [Layers, 'Full Stack Development'], [Brain, 'Artificial Intelligence & Machine Learning']] as const
export default function About() {
  return (
    <Section id="about" title="About Me">
      <div className="grid gap-10 md:grid-cols-2">
        <Reveal className="space-y-4 text-muted">
          <p>I’m K. Yashvanthakumar, an Information Science and Engineering student at BMS Institute of Technology and Management. I’m passionate about software development, problem-solving, and Artificial Intelligence.</p>
          <p>I have experience working with Java, React, Python, databases, and AI/ML technologies. I enjoy developing practical applications, exploring new technologies, and continuously improving my programming and development skills.</p>
          <p>My goal is to become a skilled software engineer and contribute to building innovative, scalable, and impactful technology solutions.</p>
        </Reveal>
        <div className="grid gap-4 sm:grid-cols-2">
          {cards.map(([Icon, t], i) => <Reveal key={t} delay={i * 0.08}><div className="glass h-full p-5"><Icon className="text-violet-400" /><h3 className="mt-3 font-medium">{t}</h3></div></Reveal>)}
        </div>
      </div>
    </Section>
  )
}
