import { useState } from 'react'
import ResumeModal from './components/ResumeModal'
import Projects from './components/Projects'
import Skills from './components/Skills'
import CiCdSimulator from './components/CiCdSimulator'
import About from './components/About'
import Experience from './components/Experience'
import LetsBuild from './components/LetsBuild'
import profilePic from './assets/Profile.png'

function App() {
  const [dark, setDark] = useState(true)
  const [showResume, setShowResume] = useState(false)

  return (
    <div className={dark ? 'dark' : ''}>
      <div className="min-h-screen bg-white dark:bg-gradient-to-b dark:from-black dark:via-[#0f2418] dark:to-black text-black dark:text-white transition-colors">
        <nav className="flex items-center justify-between px-6 py-4 border-b border-gray-200 dark:border-gray-800 sticky top-0 bg-white/90 dark:bg-[#0a0a0f]/90 backdrop-blur z-50">
          <div className="flex items-center gap-3">
            <span className="text-green-500 font-mono">{'>_'}</span>
            <span className="font-semibold">Syed Muhammad Umair</span>
            <span className="text-xs text-gray-500 uppercase border border-gray-300 dark:border-gray-700 rounded px-2 py-0.5 ml-1">
              SQA · DevOps
            </span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm text-gray-500">
          <a href="#projects" className="hover:text-green-500 transition-colors">Projects</a>
          <a href="#stack" className="hover:text-green-500 transition-colors">Stack</a>
          <a href="#cicd" className="hover:text-green-500 transition-colors">CI/CD Pipeline</a>
          <a href="#about" className="hover:text-green-500 transition-colors">About</a>
          <a href="#experience" className="hover:text-green-500 transition-colors">Experience</a>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setDark(!dark)}
              className="w-8 h-8 flex items-center justify-center border border-gray-300 dark:border-gray-700 rounded-md transition-transform hover:rotate-12 hover:border-green-500">
              {dark ? '☀️' : '🌙'}
            </button>
            <button
            onClick={() => setShowResume(true)}
            className="px-3 py-1.5 text-sm border border-gray-300 dark:border-gray-700 rounded-md">
            Resume
            </button>

            <a href="#contact" className="px-4 py-1.5 text-sm bg-green-500 text-black rounded-md font-medium transition-transform hover:scale-105">
              Hire me →
            </a>
          </div>
        </nav>

        <section className="px-6 py-16 grid md:grid-cols-2 gap-10 items-center max-w-6xl mx-auto">
          <div>
            <div className="inline-flex items-center gap-2 text-xs text-green-500 border border-green-500/40 rounded-full px-3 py-1 mb-4">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full" />
              AVAILABLE FOR HIRE · 2026 · BSSE Graduate
            </div>
            <h1 className="text-3xl md:text-6xl font-extrabold mb-4 leading-[1.05] tracking-tight">
              Automating the path to production<span className="text-green-500">.</span>
            </h1>
            <p className="text-gray-500 mb-6">
              <span className="text-black dark:text-white font-medium">DevOps & SQA Engineer</span> specializing in
              test automation, GitHub Actions CI/CD, Docker containerization, and game development with Godot.
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              <a href="#projects" className="px-5 py-2.5 bg-green-500 text-black rounded-md font-medium text-sm transition-transform hover:scale-105 inline-block text-center">
                Explore Work →
              </a>
              <button onClick={() => setShowResume(true)}className="px-5 py-2.5 bg-green-500 text-black rounded-md font-medium text-sm transition-transform hover:scale-105">
                📄 Download CV
              </button>
              <a href="#cicd" className="px-5 py-2.5 bg-green-500 text-black rounded-md font-medium text-sm transition-transform hover:scale-105">
                {'>_'} CLI Simulator
              </a>
            </div>
            <div className="text-xs text-gray-500 uppercase mb-2">Core Tooling & Runtime</div>
            <div className="flex flex-wrap gap-2">
              {['GitHub Actions', 'Docker', 'Godot / GDScript', 'Node.js', 'SQA Tools', 'Bash'].map((tool) => (
                <span key={tool} className="text-xs px-2.5 py-1 border border-gray-300 dark:border-gray-700 rounded-md">
                  {tool}
                </span>
              ))}
            </div>
          </div>

          <div className="relative">
          <div className="overflow-hidden rounded-xl shadow-xl">
            <img
              src={profilePic}
              alt="Syed Muhammad Umair"
              className="w-full h-150 object-cover object-top transition-transform duration-500 hover:scale-110"
            />
          </div>
            <div className="absolute top-4 right-4 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg px-3 py-2 text-xs shadow-lg">
              <div className="text-green-500 font-medium">✓ CI/CD: PASSING</div>
              <div className="text-gray-500">Zero manual effort</div>
            </div>

            <div className="absolute bottom-4 left-4 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg px-3 py-2 text-xs shadow-lg">
              <div className="text-green-500 font-medium">📦 DOCKER: MULTI-STAGE</div>
              <div className="text-gray-500">65% image reduction</div>
            </div>
          </div>
        </section>

        <div id="projects"><Projects /></div>
        <div id="stack"><Skills /></div>
        <div id="cicd"><CiCdSimulator /></div>
        <div id="about"><About /></div>
        <div id="experience"><Experience /></div>
        <div id="contact"><LetsBuild /></div>
        {showResume && <ResumeModal onClose={() => setShowResume(false)} />}
      </div>
    </div>
  )
}

export default App