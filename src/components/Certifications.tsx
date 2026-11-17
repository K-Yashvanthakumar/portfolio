import { Award, ExternalLink } from 'lucide-react'
import { certs } from '../data/site'
import { Reveal, Section } from './ui'
export default function Certifications() {
  return (
    <Section id="certifications" title="Certifications" sub="Continuous learning across cloud, AI, data and programming.">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {certs.map((c, i) => (
          <Reveal key={c.name + c.org} delay={(i % 3) * 0.06}>
            <article className="glass flex h-full flex-col gap-3 p-5 hover:-translate-y-1">
              {c.image ? <img src={c.image} alt={`${c.name} certificate`} loading="lazy" className="h-28 w-full rounded-lg object-cover" />
                : <div role="img" aria-label="Certificate image placeholder" className="grid h-28 place-items-center rounded-lg bg-gradient-to-br from-violet-600/25 to-cyan-400/25"><Award className="text-cyan-300" size={32} /></div>}
              <h3 className="font-medium leading-snug">{c.name}</h3>
              <p className="text-sm text-muted">{c.org}{c.year ? ` • ${c.year}` : ''}</p>
              {c.url && <a className="btn-g mt-auto self-start" href={c.url} target="_blank" rel="noopener noreferrer"><ExternalLink size={14} />View Certificate</a>}
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
