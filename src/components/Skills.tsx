import { skills } from '../data/site'
import { Reveal, Section } from './ui'
export default function Skills() {
  return (
    <Section id="skills" title="Technical Skills" sub="Technologies I work with across languages, web, data and AI.">
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {skills.map(({ title, icon: Icon, items }, i) => (
          <Reveal key={title} delay={(i % 3) * 0.08}>
            <div className="glass h-full p-6">
              <div className="flex items-center gap-3"><span className="rounded-xl bg-gradient-to-br from-violet-600/30 to-cyan-400/30 p-2.5"><Icon size={20} className="text-cyan-400" /></span><h3 className="font-display font-semibold">{title}</h3></div>
              <ul className="mt-4 flex flex-wrap gap-2">{items.map((s) => <li key={s} className="chip">{s}</li>)}</ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
