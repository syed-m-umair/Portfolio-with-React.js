const skillGroups = [
  {
    category: "DevOps & CI/CD",
    skills: [
      { name: "Git & GitHub", level: 85 }, 
      { name: "GitHub Actions YAML", level: 80 },
      { name: "Docker & Docker Compose", level: 80 },
      { name: "Linux CLI & Admin", level: 75 },
      { name: "Bash Scripting", level: 75 },
      { name: "CI/CD Pipeline Design", level: 75 },
      { name: "Jenkins", level: 70 },
    ],
  },
  {
    category: "Backend & Full-Stack",
    skills: [
      { name: "Node.js / Express", level: 75 },
      { name: "Python / Flask", level: 75 },
      { name: "MongoDB", level: 70 },
      { name: "React", level: 70 },
      { name: "MySQL", level: 72 },
      { name: "REST APIs", level: 75 },
    ],
  },
    {
    category: "SQA & Testing",
    skills: [
      { name: "Manual & Functional Testing", level: 85 },
      { name: "Test Case Design", level: 85 },
      { name: "Bug Tracking & Reporting", level: 85 },
      { name: "Jira", level: 80 },
      { name: "Postman", level: 70 },
      { name: "Automated Testing (Pytest)", level: 75 },

    ],
  },
  {
    category: "Game Development",
    skills: [
      { name: "Godot Engine", level: 82 },
      { name: "GDScript", level: 80 },
      { name: "C# (Learning)", level: 75 },
    ],
  },
]

function Skills() {
  return (
    <section className="px-6 py-16 border-t border-gray-200 dark:border-gray-800">
      <h2 className="text-3xl font-bold mb-2">The stack.</h2>
      <p className="text-gray-500 mb-10">Tools and technologies across SQA, DevOps, and game development.</p>

      <div className="grid md:grid-cols-2 gap-8">
        {skillGroups.map((group, i) => (
          <div key={i}>
            <h3 className="text-sm font-mono text-green-500 uppercase mb-4">{group.category}</h3>
            <div className="space-y-4">
              {group.skills.map((skill, j) => (
                <div key={j}>
                  <div className="flex justify-between text-sm mb-1">
                    <span>{skill.name}</span>
                    <span className="text-gray-500">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-100 dark:bg-gray-800 rounded-full h-2">
                    <div
                      className="bg-green-500 h-2 rounded-full transition-all duration-700"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills