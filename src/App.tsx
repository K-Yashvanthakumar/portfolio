import { Routes, Route, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Education from './components/Education'
import Certifications from './components/Certifications'
import Achievements from './components/Achievements'
import CodingProfiles from './components/CodingProfiles'
import Resume from './components/Resume'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { CursorGlow } from './components/ui'

function Home() {
  return (<>
    <Navbar /><main id="home">
      <Hero /><About /><Skills /><Projects /><Education /><Certifications /><Achievements /><CodingProfiles /><Resume /><Contact />
    </main><Footer />
  </>)
}
function NotFound() {
  return (<main className="grid min-h-screen place-items-center px-6 text-center">
    <div><p className="font-display text-8xl font-bold grad">404</p>
      <h1 className="mt-4 text-2xl font-semibold">This page doesn’t exist</h1>
      <p className="mt-2 text-muted">The link may be broken or the page may have moved.</p>
      <Link to="/" className="btn-p mt-8">Back to home</Link></div></main>)
}
export default function App() {
  const [ok, setOk] = useState(false)
  useEffect(() => setOk(true), [])
  return (<>{ok && <CursorGlow />}<Routes><Route path="/" element={<Home />} /><Route path="*" element={<NotFound />} /></Routes></>)
}
