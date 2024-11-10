import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import About from './components/About'
import SkillsSection from './components/Skills'
import Education from './components/Education'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Loader from './components/Loader'
import SpaceBackground from './components/SpaceBackground'
import Footer from './components/Footer'

export default function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 to-blue-900 text-white font-new-machina">
      <style jsx global>{`
        @font-face {
          font-family: 'New Machina';
          src: url('/fonts/NewMachina-Regular.woff2') format('woff2');
          font-weight: normal;
          font-style: normal;
        }

        @font-face {
          font-family: 'New Machina';
          src: url('/fonts/NewMachina-Bold.woff2') format('woff2');
          font-weight: bold;
          font-style: normal;
        }

        body {
          font-family: 'New Machina', sans-serif;
        }
      `}</style>
      <SpaceBackground />
      {loading ? (
        <Loader />
      ) : (
        <>
          <Navbar />
          <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <section id="about" className="py-16">
              <About />
            </section>
            <section id="skills" className="py-16">
              <SkillsSection />
            </section>
            <section id="education" className="py-10">
              <Education />
            </section>
            <section id="projects" className="py-16">
              <Projects />
            </section>
            <section id="contact" className="py-16">
              <Contact />
            </section>
          </main>
          <Footer/>
        </>
      )}
    </div>
  )
}