function ResumeModal({ onClose }) {
  const handlePrint = () => window.print()

  const handleCopy = () => {
    const text = document.getElementById('resume-content').innerText
    navigator.clipboard.writeText(text)
  }

  return (
    <div className="fixed inset-0 bg-black/70 z-[100] flex items-start justify-center overflow-y-auto py-10 px-4 print:bg-white print:p-0">
      <div className="bg-white dark:bg-[#0a0a0f] text-black dark:text-white rounded-xl max-w-3xl w-full shadow-2xl print:shadow-none print:rounded-none">
        {/* Toolbar - hidden when printing */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 dark:border-gray-800 print:hidden">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500" />
            <span className="text-sm font-mono">SYED_MUHAMMAD_UMAIR_CV</span>
            <span className="text-[10px] px-2 py-0.5 bg-green-500/10 text-green-500 rounded-full ml-2">
              ATS-COMPLIANT
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-green-500 text-black rounded-md text-sm font-medium hover:scale-105 transition-transform"
            >
              ⬇ Download PDF
            </button>
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 border border-gray-300 dark:border-gray-700 rounded-md text-sm"
            >
              🖨 Print
            </button>
            <button
              onClick={handleCopy}
              className="flex items-center gap-1.5 px-3 py-1.5 border border-gray-300 dark:border-gray-700 rounded-md text-sm"
            >
              ⧉ Copy
            </button>
            <button
              onClick={onClose}
              className="px-2 py-1.5 border border-gray-300 dark:border-gray-700 rounded-md text-sm"
            >
              ✕
            </button>
          </div>
        </div>

        {/* Resume content */}
        <div id="resume-content" className="px-8 py-8 text-sm leading-relaxed">
          <div className="text-center mb-6">
            <h1 className="text-2xl font-extrabold mb-1">SYED MUHAMMAD UMAIR</h1>
            <p className="text-green-500 text-xs font-medium mb-2">
              SQA Engineer | DevOps & CI/CD Automation | Game Development | Software Engineering Graduate (BSSE)
            </p>
            <p className="text-xs text-gray-500">
              📍 Faisalabad, Punjab, Pakistan &nbsp;|&nbsp; ✉ your-email@example.com
            </p>
            <p className="text-xs text-gray-500 mt-1">
              🔗 github.com/syed-m-umair &nbsp;|&nbsp; 🔗 linkedin.com/in/your-profile
            </p>
          </div>

          <hr className="border-gray-200 dark:border-gray-800 mb-5" />

          <h2 className="text-green-500 text-xs font-bold uppercase mb-2">Professional Summary</h2>
          <p className="text-xs text-gray-700 dark:text-gray-400 mb-5">
            Software Engineering graduate (BSSE, NUML, Class of 2026) with hands-on experience in
            SQA, DevOps automation, and CI/CD pipeline design using GitHub Actions, Jenkins, and
            Docker. Skilled in build/test/deploy automation, manual and regression testing, and
            game development with Godot Engine. Holds certifications in software testing, critical
            infrastructure security, and agile project management. Seeking an SQA, DevOps, or
            Game QA role to apply automation-first, quality-conscious engineering practices.
          </p>

          <h2 className="text-green-500 text-xs font-bold uppercase mb-2">Core Skills</h2>
          <p className="text-xs text-gray-700 dark:text-gray-400 mb-5">
            <span className="font-semibold text-black dark:text-white">SQA & Testing:</span> Manual Testing,
            Regression Testing, Test Case Design, Bug Tracking &nbsp;|&nbsp;
            <span className="font-semibold text-black dark:text-white"> DevOps & CI/CD:</span> GitHub Actions,
            Jenkins, Docker, YAML, Bash Scripting, Linux CLI &nbsp;|&nbsp;
            <span className="font-semibold text-black dark:text-white"> Backend:</span> Node.js, Express, MySQL,
            REST APIs &nbsp;|&nbsp;
            <span className="font-semibold text-black dark:text-white"> Game Dev:</span> Godot Engine, GDScript,
            Unity (testing)
          </p>

          <h2 className="text-green-500 text-xs font-bold uppercase mb-2">Professional Experience</h2>
          <div className="mb-4">
            <div className="flex justify-between items-baseline">
              <span className="font-semibold text-sm">DevOps Engineer Intern</span>
              <span className="text-xs text-gray-500">July 2026</span>
            </div>
            <div className="text-xs text-gray-500 mb-1">CodeAlpha | Remote</div>
            <ul className="text-xs text-gray-700 dark:text-gray-400 list-disc pl-4 space-y-0.5">
              <li>Created and configured Jenkins remoting agents for distributed build execution</li>
              <li>Dockerized a static web application for portable deployment</li>
              <li>Built a fully automated CI/CD workflow using YAML, achieving 70% reduction in manual release effort</li>
              <li>Used and mastered GitHub Actions and Jenkins for pipeline automation</li>
            </ul>
          </div>
          <div className="mb-5">
            <div className="flex justify-between items-baseline">
              <span className="font-semibold text-sm">QA Intern</span>
              <span className="text-xs text-gray-500">Gaming Doctrine</span>
            </div>
            <div className="text-xs text-gray-500 mb-1">Karachi | Remote</div>
            <ul className="text-xs text-gray-700 dark:text-gray-400 list-disc pl-4 space-y-0.5">
              <li>Performed game build testing and regression testing in Unity</li>
              <li>Logged and tracked defects through the QA reporting pipeline</li>
            </ul>
          </div>

          <h2 className="text-green-500 text-xs font-bold uppercase mb-2">Education</h2>
          <div className="mb-5">
            <div className="flex justify-between items-baseline">
              <span className="font-semibold text-sm">B.S. Software Engineering (BSSE)</span>
              <span className="text-xs text-gray-500">Graduated 2026</span>
            </div>
            <div className="text-xs text-gray-500">National University of Modern Languages (NUML), Faisalabad</div>
            <div className="text-xs text-green-500">CGPA: 3.03 / 4.0</div>
          </div>

          <h2 className="text-green-500 text-xs font-bold uppercase mb-2">Certifications</h2>
          <ul className="text-xs text-gray-700 dark:text-gray-400 list-disc pl-4 space-y-0.5 mb-5">
            <li>Intro to Critical Infrastructure Security — OPSWAT</li>
            <li>Intro to Software Testing — Simplilearn</li>
            <li>Agile Project Management — HP LIFE</li>
          </ul>

          <h2 className="text-green-500 text-xs font-bold uppercase mb-2">Projects</h2>
          <ul className="text-xs text-gray-700 dark:text-gray-400 list-disc pl-4 space-y-0.5">
            <li>Ranikot Chronicles — 3D action-adventure game in Godot Engine, final year project</li>
            <li>Dockerized Task API — Node.js/Express/MySQL with Docker Compose and GitHub Actions CI/CD</li>
            <li>DevOps Learning Hub — static site covering Linux and Docker fundamentals</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default ResumeModal