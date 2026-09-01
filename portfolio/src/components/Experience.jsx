const experience = [
  {
    role: "DevOps Engineer Intern",
    company: "CodeAlpha",
    period: "June 2026 - August 2026 · Remote",
    points: [
        "Created and configured Jenkins remoting agents to support distributed build execution",
        "Dockerized a static web application for consistent, portable deployment",
        "Built a fully automated CI/CD workflow using YAML, covering build, test, and deploy stages",
        "Used and mastered GitHub Actions and Jenkins for pipeline automation",
        "Gained exposure to cloud-native tools and practices",
        "Achieved 70% reduction in manual release effort through automation",
    ],
    tags: ["Jenkins", "GitHub Actions", "Docker", "YAML", "CI/CD", "Cloud-Native"],
  },
  {
    role: "QA Intern",
    company: "Gaming Doctrine",
    period: "January 2026 - April 2026 · Remote",
    points: [
      "Performed game build testing and regression testing in Unity",
      "Logged and tracked defects through the QA reporting pipeline",
      "Collaborated with development team to verify bug fixes across builds",
    ],
    tags: ["Unity", "Manual Testing", "Regression Testing", "Defect Tracking"],
  },
]

const education = [
  {
    degree: "B.S. Software Engineering (BSSE)",
    school: "National University of Modern Languages (NUML), Faisalabad, Pakistan",
    period: "Graduated 2026",
    detail: "Academic Standing: CGPA 3.03 / 4.0",
  },
]

const certifications = [
  {
    name: "Intro to Critical Infrastructure Security",
    issuer: "OPSWAT",
    credentialId: "—",
    issueDate: "—",
  },
  {
    name: "Intro to Software Testing",
    issuer: "Simplilearn",
    credentialId: "—",
    issueDate: "—",
  },
  {
    name: "Agile Project Management",
    issuer: "HP LIFE",
    credentialId: "—",
    issueDate: "—",
  },
]

function Experience() {
  return (
    <section className="px-6 py-16 border-t border-gray-200 dark:border-gray-800 max-w-6xl mx-auto">
      <div className="text-xs text-green-500 uppercase mb-2">● Career & Credentials</div>
      <h2 className="text-3xl font-bold mb-10">Experience & Education.</h2>

      <div className="grid lg:grid-cols-2 gap-6 items-start">
        {/* Left column: experience + education */}
        <div className="space-y-6">
          <div>
            <h3 className="text-xs text-gray-500 uppercase mb-3">💼 Professional Experience</h3>
            {experience.map((exp, i) => (
              <div key={i} className="border border-gray-200 dark:border-gray-800 rounded-xl p-6 mb-4 transition-all duration-300 hover:-translate-y-1 hover:border-green-500/50 hover:shadow-lg cursor-default">
                <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                  <h4 className="font-semibold text-lg">{exp.role}</h4>
                  <span className="text-xs text-gray-500 border border-gray-300 dark:border-gray-700 rounded-full px-2 py-0.5">
                    {exp.period}
                  </span>
                </div>
                <div className="text-green-500 text-sm mb-3">{exp.company}</div>
                <ul className="space-y-1.5 mb-4">
                  {exp.points.map((pt, j) => (
                    <li key={j} className="text-sm text-gray-600 dark:text-gray-400 flex gap-2">
                      <span className="text-green-500">›</span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((t, k) => (
                    <span key={k} className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-md">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div>
            <h3 className="text-xs text-gray-500 uppercase mb-3">🎓 Academic Background</h3>
            {education.map((ed, i) => (
              <div key={i} className="border border-gray-200 dark:border-gray-800 rounded-xl p-6">
                <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                  <h4 className="font-semibold text-lg">{ed.degree}</h4>
                  <span className="text-xs px-2 py-1 bg-green-500/10 text-green-500 rounded-full whitespace-nowrap">
                    {ed.period}
                  </span>
                </div>
                <div className="text-sm text-gray-500 mb-2">{ed.school}</div>
                <div className="text-sm text-green-500">{ed.detail}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right column: certifications */}
        <div>
          <h3 className="text-xs text-gray-500 uppercase mb-3">Verified Industry Certifications</h3>
          <div className="space-y-4">
            {certifications.map((cert, i) => (
              <div key={i} className="border border-gray-200 dark:border-gray-800 rounded-xl p-6">
                <div className="flex items-start gap-3 mb-3">
                  <span className="text-green-500 border border-green-500/40 rounded-full w-6 h-6 flex items-center justify-center text-xs">✓</span>
                  <div>
                    <h4 className="font-semibold">{cert.name}</h4>
                    <div className="text-green-500 text-sm">{cert.issuer}</div>
                  </div>
                </div>
                <div className="flex justify-between text-xs text-gray-500 mb-3">
                  <span>Credential ID: <span className="text-gray-400">{cert.credentialId}</span></span>
                  <span>{cert.issueDate}</span>
                </div>
              </div>
            ))}

            <div className="border border-green-500/30 bg-green-500/5 rounded-xl p-5">
              <div className="text-green-500 text-sm font-medium mb-1">✓ Credentials Verified & Active</div>
              <p className="text-xs text-gray-500">
                Certified across software testing fundamentals, critical infrastructure security, and
                agile project management practices.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience