import { useEffect, useState } from 'react'
import { P } from '../data/site'
import { ResumeButtons, Section } from './ui'

export default function Resume() {
  const [found, setFound] = useState<boolean | null>(null)
  useEffect(() => { // dev servers return index.html for missing files, so check content-type too
    fetch(P.resume, { method: 'HEAD' }).then((r) => setFound(r.ok && (r.headers.get('content-type') || '').includes('pdf'))).catch(() => setFound(false))
  }, [])
  return (
    <Section id="resume" title="Resume" sub="Publicly available — read it here or download a copy.">
      <div className="flex flex-wrap gap-3"><ResumeButtons /></div>
      <div className="glass mt-8 overflow-hidden p-2">
        {found === false
          ? <div className="grid h-72 place-items-center p-6 text-center text-sm text-muted"><div><p className="font-medium text-fg">Resume not uploaded yet</p>
            <p className="mt-2">Add your PDF to <code>public/{P.resumeName}</code> and redeploy.</p></div></div>
          : <iframe title="Resume preview" src={`${P.resume}#view=FitH`} loading="lazy" className="h-[70vh] min-h-[420px] w-full rounded-xl bg-white" />}
      </div>
      <p className="mt-3 text-xs text-muted">If the preview is blank on your device, use “View Resume” to open the PDF in a new tab.</p>
    </Section>
  )
}
