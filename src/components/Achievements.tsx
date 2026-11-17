import { achievements } from '../data/site'
import { Reveal, Section } from './ui'
export default function Achievements() {
  return (
    <Section id="achievements" title="Achievements">
      <div className="grid gap-5 md:grid-cols-3">
        {achievements.map((a, i) => (
          <Reveal key={a.title} delay={i * 0.08}><div className="glass h-full p-6">
            <span className="text-4xl" aria-hidden>{a.emoji}</span>
            <h3 className="mt-4 font-medium">{a.title}</h3><p className="mt-1 text-sm text-muted">{a.meta}</p>
          </div></Reveal>
        ))}
      </div>
    </Section>
  )
}
