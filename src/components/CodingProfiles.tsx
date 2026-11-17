import { useEffect, useState } from 'react'
import { Code2, Github, Linkedin } from 'lucide-react'
import { P } from '../data/site'
import { Reveal, Section } from './ui'

export default function CodingProfiles() {
  const [repos, setRepos] = useState<number | null>(null)
  useEffect(() => { // public GitHub API, one unauthenticated call; fails silently
    fetch(`https://api.github.com/users/${P.github.split('/').pop()}`).then((r) => (r.ok ? r.json() : null))
      .then((d) => d && typeof d.public_repos === 'number' && setRepos(d.public_repos)).catch(() => {})
  }, [])
  const items = [
    { name: 'GitHub', icon: Github, url: P.github, note: repos !== null ? `${repos} public repositories` : 'View repositories and activity' },
    { name: 'LeetCode', icon: Code2, url: P.leetcode, note: 'Profile link coming soon' },
    { name: 'LinkedIn', icon: Linkedin, url: P.linkedin, note: 'Profile link coming soon' },
  ]
  return (
    <Section id="coding" title="Coding Profiles">
      <div className="grid gap-5 md:grid-cols-3">
        {items.map(({ name, icon: Icon, url, note }, i) => {
          const body = <><Icon className="text-cyan-400" /><h3 className="mt-3 font-display text-lg font-semibold">{name}</h3><p className="mt-1 text-sm text-muted">{note}</p></>
          return <Reveal key={name} delay={i * 0.08}>
            {url ? <a href={url} target="_blank" rel="noopener noreferrer" className="glass block p-6 hover:-translate-y-1">{body}</a>
              : <div className="glass p-6 opacity-60" title="Add the URL in src/data/site.ts">{body}</div>}
          </Reveal>
        })}
      </div>
    </Section>
  )
}
