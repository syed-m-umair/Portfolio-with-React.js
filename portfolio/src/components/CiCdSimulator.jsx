import { useState, useRef } from 'react'

const steps = [
  { title: 'Actions Checkout', cmd: 'actions/checkout@v4' },
  { title: 'Dependency Setup', cmd: 'npm ci && pip install -r requirements.txt' },
  { title: 'Automated Test Suite', cmd: 'pytest -v && npm test' },
  { title: 'Lint & Code Quality', cmd: 'npm run lint && flake8' },
  { title: 'Docker Multi-Stage Build', cmd: 'docker build --target production .' },
  { title: 'DevSecOps Security Gate', cmd: 'trivy image --severity HIGH,CRITICAL' },
  { title: 'Zero-Touch Deployment', cmd: 'bash scripts/deploy.sh --env production' },
  { title: 'Post-Deploy Healthcheck', cmd: 'curl -fsS https://app/health/status' },
]

const shellCommands = {
  help: 'Available commands: help, whoami, skills, projects, certs, contact, deploy',
  whoami: 'Syed Muhammad Umair — SQA & DevOps Engineer, Faisalabad, PK',
  skills: 'GitHub Actions, Docker, Linux CLI, Bash, Node.js, Godot/GDScript, SQA Testing',
  projects: 'Ranikot Chronicles, Dockerized Task API, DevOps Learning Hub, Personal Portfolio',
  certs: 'Introduction to DevOps and DevSecOps, Kali Linux Fundamentals, Git & GitHub Essentials',
  contact: 'Reach out via the "Hire me" button above or the contact section below.',
  deploy: 'Triggering deployment simulation — see pipeline panel on the left.',
}

const STATUS = { IDLE: 'idle', RUNNING: 'running', DONE: 'done' }

function CiCdSimulator() {
  const [stepStatus, setStepStatus] = useState(Array(steps.length).fill(STATUS.IDLE))
  const [log, setLog] = useState([])
  const [running, setRunning] = useState(false)
  const [exitStatus, setExitStatus] = useState('Ready')
  const [shellLog, setShellLog] = useState([])
  const [shellInput, setShellInput] = useState('')
  const timeoutRefs = useRef([])

  const clearTimers = () => {
    timeoutRefs.current.forEach(clearTimeout)
    timeoutRefs.current = []
  }

  const appendLog = (line) => setLog((prev) => [...prev, line])

  const runWorkflow = () => {
    clearTimers()
    setStepStatus(Array(steps.length).fill(STATUS.IDLE))
    setLog([`> github-actions / workflow-dispatch`, ``])
    setExitStatus('Running…')
    setRunning(true)

    steps.forEach((step, i) => {
      const startDelay = i * 900

      const t1 = setTimeout(() => {
        setStepStatus((prev) => {
          const next = [...prev]
          next[i] = STATUS.RUNNING
          return next
        })
        appendLog(`> Running Stage ${i + 1}. ${step.title} ($ ${step.cmd})`)
      }, startDelay)

      const t2 = setTimeout(() => {
        setStepStatus((prev) => {
          const next = [...prev]
          next[i] = STATUS.DONE
          return next
        })
        appendLog(`✓ Stage ${i + 1} complete — ${step.title}`)

        if (i === steps.length - 1) {
          appendLog(``)
          appendLog(`========================================`)
          appendLog(`🚀 RELEASE AUTO-DEPLOYED SUCCESSFULLY`)
          appendLog(`Workflow: build → test → lint → containerize → deploy`)
          appendLog(`========================================`)
          setRunning(false)
          setExitStatus('0 (Success)')
        }
      }, startDelay + 700)

      timeoutRefs.current.push(t1, t2)
    })
  }

  const statusColor = (status) => {
    if (status === STATUS.DONE) return 'border-green-500 text-green-500'
    if (status === STATUS.RUNNING) return 'border-yellow-500 text-yellow-500 animate-pulse'
    return 'border-gray-300 dark:border-gray-700 text-gray-500'
  }

  const runShellCommand = (cmdRaw) => {
    const cmd = cmdRaw.trim().toLowerCase()
    if (!cmd) return
    const response = shellCommands[cmd] || `command not found: ${cmd}`
    setShellLog((prev) => [...prev, `$ ${cmd}`, response])
    setShellInput('')
  }

  return (
    <section className="px-6 py-16 border-t border-gray-200 dark:border-gray-800 max-w-6xl mx-auto">
      <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
        <div>
          <div className="text-xs text-green-500 uppercase mb-2">● Live Workflow Automation</div>
          <h2 className="text-3xl font-bold mb-2">CI/CD Pipeline Simulator.</h2>
          <p className="text-gray-500 max-w-lg">
            Interactive demonstration of an automated GitHub Actions build → test → lint → deploy
            workflow with Docker multi-stage containerization.
          </p>
        </div>
        <button
          onClick={runWorkflow}
          disabled={running}
          className="px-5 py-3 bg-green-500 text-black rounded-md font-medium text-sm disabled:opacity-50 whitespace-nowrap"
        >
          ▷ {running ? 'RUNNING…' : 'RUN PIPELINE WORKFLOW'}
        </button>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2 mb-6">
        {steps.map((step, i) => (
        <div key={i} className={`border rounded-lg p-3 transition-all duration-200 hover:scale-105 hover:shadow-md cursor-default ${statusColor(stepStatus[i])}`}>
        <div className="flex items-center justify-between text-[10px] mb-1">
            <span className="font-mono text-white">STEP {String(i + 1).padStart(2, '0')}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-current" />
        </div>
        <div className="text-xs font-semibold text-white truncate">{step.title}</div>
        <div className="text-[10px] text-gray-500 truncate mt-1">{step.cmd}</div>
        </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-4">
        {/* Left: pipeline log */}
        <div className="bg-black rounded-lg overflow-hidden flex flex-col">
          <div className="flex items-center justify-between px-4 py-2 border-b border-gray-800 text-xs text-gray-400">
            <span>{'>_'} github-actions / workflow-dispatch</span>
            <span className="text-green-500 border border-gray-500/40 rounded px-2 py-0.5">RUNNER: UBUNTU-LATEST</span>
          </div>
          <div className="text-green-400 font-mono text-xs p-4 h-96 overflow-y-auto flex-1">
            {log.length === 0 ? (
              <div className="text-gray-500">
                System ready. Click "RUN PIPELINE WORKFLOW" to simulate the automated GitHub Actions CI/CD deployment.
              </div>
            ) : (
              log.map((line, i) => <div key={i}>{line}</div>)
            )}
          </div>
          <div className="flex items-center justify-between px-4 py-2 border-t border-gray-800 text-xs text-gray-500">
            <span>Exit Status: {exitStatus}</span>
            <span>Branch: refs/heads/main</span>
          </div>
        </div>

        {/* Right: interactive shell */}
        <div className="bg-black rounded-lg overflow-hidden flex flex-col">
          <div className="flex items-center justify-between px-4 py-2 border-b border-gray-800 text-xs text-gray-400">
            <span>interactive-shell</span>
            <span>Try: help · skills · deploy · certs</span>
          </div>
          <div className="p-4 flex flex-wrap gap-2">
            {Object.keys(shellCommands).map((cmd) => (
              <button
                key={cmd}
                onClick={() => runShellCommand(cmd)}
                className="text-xs px-2 py-1 border border-green-500/40 text-green-500 rounded-md"
              >
                ${cmd}
              </button>
            ))}
          </div>
          <div className="text-white font-mono text-xs px-4 h-64 overflow-y-auto flex-1">
            {shellLog.map((line, i) => (
              <div key={i} className={line.startsWith('$') ? 'text-white' : 'text-gray-400 mb-2'}>
                {line}
              </div>
            ))}
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault()
              runShellCommand(shellInput)
            }}
            className="flex items-center gap-2 px-4 py-2 border-t border-gray-800"
          >
            <span className="text-gray-500 text-xs">{'>'}</span>
            <input
              value={shellInput}
              onChange={(e) => setShellInput(e.target.value)}
              placeholder="Type command ('help', 'deploy', 'skills')..."
              className="bg-transparent text-xs text-white flex-1 outline-none"
            />
            <button type="submit" className="text-xs px-2 py-1 border border-gray-700 rounded-md text-gray-400">
              EXEC
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default CiCdSimulator