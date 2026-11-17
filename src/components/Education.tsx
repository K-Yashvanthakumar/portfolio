import { GraduationCap } from 'lucide-react'
import { Reveal, Section } from './ui'
export default function Education() {
  return (
    <Section id="education" title="Education">
      <ol className="relative ml-4 border-l" style={{ borderColor: 'rgb(var(--card)/.2)' }}>
        <li className="ml-8">
          <span className="absolute -left-[18px] grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-violet-600 to-cyan-500 text-white"><GraduationCap size={18} /></span>
          <Reveal><div className="glass p-6">
            <h3 className="font-display text-xl font-semibold">B.E. – Information Science &amp; Engineering</h3>
            <p className="mt-1">BMS Institute of Technology and Management, Bengaluru</p>
            <p className="text-muted">Visvesvaraya Technological University (VTU), Belagavi</p>
          </div></Reveal>
        </li>
      </ol>
    </Section>
  )
}
