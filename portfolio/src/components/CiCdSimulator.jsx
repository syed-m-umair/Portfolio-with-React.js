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

const STATUS = { IDLE: 'idle', RUNNING: 'running', DONE: 'done' }

function CiCdSimulator() {
  const [stepStatus, setStepStatus] = useState(Array(steps.length).fill(STATUS.IDLE))
  const [log, setLog] = useState([])
  const [running, setRunning] = useState(false)
  const timeoutRefs = useRef([])

  const clearTimers = () => {
    timeoutRefs.current.forEach(clearTimeout)
    timeoutRefs.current = []
  }

  const appendLog = (line) => setLog((prev) => [...prev, line])

  const runWorkflow = () => {
    clearTimers()
    setStepStatus(Array(steps.length).fill(STATUS.IDLE))
    setLog([`$ github-actions / workflow-dispatch`, ``])
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
        }
      }, startDelay + 700)

      timeoutRefs.current.push(t1, t2)
    })
  }

  const resetWorkflow = () => {
    clearTimers()
    setStepStatus(Array(steps.length).fill(STATUS.IDLE))
    setLog([])
    setRunning(false)
  }

  const statusIcon = (status) => {
    if (status === STATUS.DONE) return '✓'
    if (status === STATUS.RUNNING) return '⟳'
    return '○'
  }

  const statusColor = (status) => {
    if (status === STATUS.DONE) return 'text-green-500 border-green-500'
    if (status === STATUS.RUNNING) return 'text-yellow-500 border-yellow-500 animate-pulse'
    return 'text-gray-400 border-gray-300 dark:border-gray-700'
  }

  return (
    <section className="px-6 py-16 border-t border-gray-200 dark:border-gray-800">
      <div className="flex flex-wrap items-center justify-between gap-4 mb-10">
        <div>
          <h2 className="text-3xl font-bold mb-2">CI/CD Pipeline Simulator.</h2>
          <p className="text-gray-500">
            Interactive demonstration of an automated build → test → lint → deploy workflow.
          </p>
        </div>
        <div className="flex gap-3">
          <button
            onClick={resetWorkflow}
            className="px-4 py-2 text-sm border border-gray-300 dark:border-gray-700 rounded-md"
          >
            ↺ Reset
          </button>
          <button
            onClick={runWorkflow}
            disabled={running}
            className="px-4 py-2 text-sm bg-green-500 text-black rounded-md font-medium disabled:opacity-50"
          >
            {running ? 'Running…' : '↻ Re-run Workflow'}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
        {steps.map((step, i) => (
          <div
            key={i}
            className={`border rounded-lg p-3 ${statusColor(stepStatus[i])}`}
          >
            <div className="flex items-center justify-between text-xs mb-1">
              <span className="font-mono">STEP {String(i + 1).padStart(2, '0')}</span>
              <span>{statusIcon(stepStatus[i])}</span>
            </div>
            <div className="text-sm font-semibold">{step.title}</div>
            <div className="text-xs text-gray-500 truncate mt-1">{step.cmd}</div>
          </div>
        ))}
      </div>

      <div className="bg-black text-green-400 font-mono text-sm rounded-lg p-4 h-64 overflow-y-auto">
        {log.length === 0 ? (
          <div className="text-gray-500">Click "Re-run Workflow" to start the pipeline…</div>
        ) : (
          log.map((line, i) => <div key={i}>{line}</div>)
        )}
      </div>
    </section>
  )
}

export default CiCdSimulator