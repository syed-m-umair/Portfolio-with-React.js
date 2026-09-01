const projects = [
  {
    title: "Ranikot Chronicles",
    tags: ["Godot Engine", "GDScript", "3D Level Design", "Game Mechanics", "Jolt Physics", "Terrain Generation", "Cultural Heritage", "3D Action-Adventure"],
    desc: "Lead the team in developing, Testing, and deploying a 3D action-adventure game exploring cultural heritage themes, built as final year project. Well received by academic panel.",
    stats: [
      { label: "Godot 4", sub: "Engine" },
      { label: "GDScript", sub: "Programming Language" },
      { label: "Jolt Physics", sub: "Physics Engine" },
      { label: "Terrain Generation", sub: "Level Design" },
      { label: "3 Person Team", sub: "Final Year Project" },
    ],
    category: "GAME",
  },

  {
    title: "DevOps Learning Hub",
    tags: ["HTML", "CSS", "JavaScript"],
    desc: "Static website covering Linux administration and Docker fundamentals as a self-study and reference resource currently under development. MVP is complete.",
    stats: [
      { label: "Linux", sub: "Topics" },
      { label: "Docker", sub: "Topics" },
      { label: "CI/CD", sub: "Pipeline" },
      { label: "Git & GitHub", sub: "Commands" },
      { label: "GitHub Actions", sub: "Automation" },
      { label: "GitHub Pages", sub: "Hosting" },
    ],
    category: "FULL-STACK",
  },

  {
    title: "Dockerized Task API",
    tags: ["Node.js", "Express", "MySQL", "Docker Compose", "GitHub Actions"],
    desc: "REST API for task management, fully containerized with Docker Compose and automated CI/CD via GitHub Actions.",
    stats: [
      { label: "Docker Compose", sub: "Containerized" },
      { label: "GitHub Actions", sub: "CI/CD" },
    ],
    category: "DEVOPS",
  },

  {
    title: "Personal Portfolio Website",
    tags: ["React", "Tailwind", "CI/CD Aesthetic"],
    desc: "Live personal portfolio deployed with a CI/CD pipeline visual theme, showcasing projects and skills.",
    stats: [
      { label: "Deployed", sub: "GitHub Pages" },
      { label: "Responsive", sub: "UI" },
    ],
    category: "FULL-STACK",
  },
]

import { useState } from 'react'

// ...keep the existing `projects` array as-is above this...

const filters = ['All', 'DevOps', 'Full-Stack', 'Game']

function Projects() {
  const [activeFilter, setActiveFilter] = useState('All')

  const filtered = activeFilter === 'All'
    ? projects
    : projects.filter((p) => p.category.toLowerCase() === activeFilter.toLowerCase())

  return (
    <section className="px-6 py-16 max-w-6xl mx-auto">
      <div className="flex flex-wrap items-center justify-between gap-4 mb-10">
        <div>
          <h2 className="text-3xl font-bold mb-2">Projects.</h2>
          <p className="text-gray-500">Real work across DevOps, full-stack, and game development.</p>
        </div>
        <div className="flex gap-2">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-3 py-1.5 text-xs rounded-md border ${
                activeFilter === f
                  ? 'bg-green-500 text-black border-green-500'
                  : 'border-gray-300 dark:border-gray-700 text-gray-500'
              }`}
            >
              {f.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {filtered.map((p, i) => (
          <div
            key={i}
            className="border border-gray-200 dark:border-gray-800 rounded-xl p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-green-500/50 cursor-pointer"          >
            <div className="flex justify-between items-start mb-3">
              <span className="text-xs text-green-500 font-mono uppercase">{p.category}</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
            <p className="text-gray-500 text-sm mb-4">{p.desc}</p>

            <div className="grid grid-cols-2 gap-3 mb-4">
              {p.stats.map((s, j) => (
                <div key={j} className="border border-gray-200 dark:border-gray-800 rounded-lg p-3">
                  <div className="font-semibold text-sm">{s.label}</div>
                  <div className="text-xs text-gray-500">{s.sub}</div>
                </div>
              ))}
            </div>

            <div className="bg-black rounded-lg overflow-hidden mb-4 mt-4">
              <div className="flex items-center gap-1.5 px-3 py-2 border-b border-gray-800">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-500" />
                <span className="text-[10px] text-gray-500 ml-2 font-mono">{p.title.toLowerCase().replace(/\s+/g, '-')}.spec</span>
              </div>
              <div className="px-3 py-2 font-mono text-xs text-green-400 space-y-1">
                <div className="text-gray-500">// Project metadata</div>
                {p.tags.map((t, k) => (
                  <div key={k}>
                    <span className="text-gray-500">$</span> stack.add(<span className="text-blue-400">"{t}"</span>)
                  </div>
                ))}
              </div>
            </div>

            <a href="#" className="inline-block text-sm text-green-500 font-medium transition-transform hover:translate-x-1">
              View project →
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects