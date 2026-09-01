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

function Projects() {
  return (
    <section className="px-6 py-16">
      <h2 className="text-3xl font-bold mb-2">Projects.</h2>
      <p className="text-gray-500 mb-10">Real work across DevOps, full-stack, and game development.</p>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <div
            key={i}
            className="border border-gray-200 dark:border-gray-800 rounded-xl p-6 hover:shadow-lg transition-shadow"
          >
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

            <div className="flex flex-wrap gap-2">
              {p.tags.map((t, k) => (
                <span key={k} className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-md">
                  {t}
                </span>
              ))}
            </div>

            <a href="#" className="inline-block mt-4 text-sm text-green-500 font-medium">
              View project →
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects