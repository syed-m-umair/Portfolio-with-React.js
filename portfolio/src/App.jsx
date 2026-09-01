import Projects from './components/Projects'
import Skills from './components/Skills'
import CiCdSimulator from './components/CiCdSimulator'
function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0a0f] text-black dark:text-white transition-colors">
      <nav className="flex items-center justify-between px-6 py-4 border-b border-gray-200 dark:border-gray-800">
        <div className="flex items-center gap-2">
          <span className="text-green-500 font-mono">{'>_'}</span>
          <span className="font-semibold">Syed Muhammad Umair</span>
          <span className="text-xs text-gray-500 uppercase ml-2">SQA · DevOps</span>
        </div>
        <div className="flex items-center gap-3">
          <button className="px-3 py-1.5 text-sm border rounded-md">CLI</button>
          <button className="px-3 py-1.5 text-sm border rounded-md">Resume</button>
          <button className="px-4 py-1.5 text-sm bg-green-500 text-black rounded-md font-medium">Hire me →</button>
        </div>
      </nav>

      <section className="px-6 py-20 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Building apps people use.</h1>
        <p className="text-gray-500 max-w-xl mx-auto">
          SQA / DevOps Engineer specializing in test automation, CI/CD pipelines, and game development.
        </p>
      </section>
      <Projects />
      <Skills />
      <CiCdSimulator />
    </div>
  )
}

export default App