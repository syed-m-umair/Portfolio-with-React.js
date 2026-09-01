import { useState } from 'react'

const skills = [
  { name: 'GitHub Actions', tag: 'Production & CI/CD', desc: 'Multi-stage workflows, secrets, lint/test/build/deploy automation', level: 80, category: 'DevOps & CI/CD', icon: '⚙️' },
  { name: 'CI/CD Pipelines', tag: 'Continuous Delivery', desc: 'Zero-downtime releases, branch protection, deployment gates', level: 78, category: 'DevOps & CI/CD', icon: '🔀' },
  { name: 'Bash Scripting', tag: 'System Automation', desc: 'Automated provisioning, healthchecks, post-deployment hooks', level: 70, category: 'DevOps & CI/CD', icon: '📜' },
  { name: 'Docker', tag: 'Containerization', desc: 'Multi-stage Dockerfile builds, layer caching, minimal base images', level: 78, category: 'Containers & Infra', icon: '📦' },
  { name: 'Linux CLI & Admin', tag: 'Server Administration', desc: 'Bash automation, cron jobs, daemon supervision, system logs', level: 75, category: 'Containers & Infra', icon: '🖥️' },
  { name: 'Node.js / Express', tag: 'Backend', desc: 'REST APIs, middleware, async route handling', level: 75, category: 'Backend & Python', icon: '🌐' },
  { name: 'MySQL', tag: 'Database', desc: 'Schema design, queries, ORM integration', level: 72, category: 'Backend & Python', icon: '🗄️' },
  { name: 'Manual & Functional Testing', tag: 'SQA', desc: 'Test case design, bug tracking, regression testing', level: 85, category: 'Security & SQA', icon: '🧪' },
  { name: 'Godot Engine', tag: '3D Simulation', desc: '3D physics, game loops, GDScript, AI pathfinding', level: 82, category: 'Tools & Platforms', icon: '🎮' },
  { name: 'GDScript', tag: 'Programming Language', desc: 'Game logic, scripting, level design', level: 80, category: 'Tools & Platforms', icon: '📝' },
  { name: 'C# (Learning)', tag: 'Programming Language', desc: 'Currently building fundamentals alongside GDScript', level: 45, category: 'Tools & Platforms', icon: '📘' },
]

const filters = ['All Technologies', 'DevOps & CI/CD', 'Containers & Infra', 'Backend & Python', 'Security & SQA', 'Tools & Platforms']

function Skills() {
  const [active, setActive] = useState('All Technologies')

  const filtered = active === 'All Technologies'
    ? skills
    : skills.filter((s) => s.category === active)

  return (
    <section className="px-6 py-16 border-t border-gray-200 dark:border-gray-800 max-w-6xl mx-auto">
      <div className="flex flex-wrap items-start justify-between gap-6 mb-10">
        <div>
          <h2 className="text-3xl font-bold mb-2">The stack.</h2>
          <p className="text-gray-500 max-w-md">
            Battle-tested tools and languages for building automated pipelines, resilient backends,
            and responsive user interfaces.
          </p>
        </div>
        <div className="flex flex-wrap gap-2 max-w-lg">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`px-3 py-1.5 text-xs rounded-md border whitespace-nowrap ${
                active === f
                  ? 'bg-green-500 text-black border-green-500'
                  : 'border-gray-300 dark:border-gray-700 text-gray-500'
              }`}
            >
              {f.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {filtered.map((s, i) => (
          <div
            key={i}
            className="border border-gray-200 dark:border-gray-800 rounded-xl p-5 flex flex-col transition-all duration-300 hover:-translate-y-1 hover:border-green-500/50 hover:shadow-lg cursor-pointer"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-xl">{s.icon}</span>
              <span className="text-[10px] px-2 py-0.5 bg-green-500/10 text-green-500 rounded-full">
                {s.tag}
              </span>
            </div>
            <h3 className="font-semibold mb-1">{s.name}</h3>
            <p className="text-xs text-gray-500 mb-4 flex-1">{s.desc}</p>
            <div>
              <div className="flex justify-between text-xs mb-1">
                <span className="text-gray-500">Proficiency</span>
                <span className="text-gray-500">{s.level}%</span>
              </div>
              <div className="w-full bg-gray-100 dark:bg-gray-800 rounded-full h-1.5">
                <div
                  className="bg-green-500 h-1.5 rounded-full transition-all duration-700"
                  style={{ width: `${s.level}%` }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills