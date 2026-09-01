import { useState } from 'react'

const quickRoles = [
  "SQA Engineer",
  "DevOps Engineer",
  "Junior QA",
  "Game QA Engineer",
  "Automation Engineer",
  "CI/CD Pipeline Project",
]

function LetsBuild() {
  const [form, setForm] = useState({ name: '', email: '', role: '', message: '' })

  const handleChange = (field) => (e) => setForm({ ...form, [field]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio inquiry: ${form.role || 'General'}`)
    const body = encodeURIComponent(
      `Name/Organization: ${form.name}\nEmail: ${form.email}\nRole/Topic: ${form.role}\n\n${form.message}`
    )
    window.location.href = `mailto:umair786346@gmail.com?subject=${subject}&body=${body}`
  }

  return (
    <section className="px-6 py-20 border-t border-gray-200 dark:border-gray-800 max-w-6xl mx-auto">
      <div className="text-xs text-green-500 uppercase mb-2">● Initiate Engagement</div>
      <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
        Let's build something<span className="text-green-500">.</span>
      </h2>
      <p className="text-gray-500 max-w-xl mb-12">
        Whether you have an SQA/QA opening, a DevOps pipeline to automate, or a game development
        project — I'd like to hear about it.
      </p>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Left: direct channels */}
        <div>
          <div className="text-xs text-gray-500 uppercase mb-1">Direct Channels</div>
          <h3 className="text-2xl font-bold mb-5">Reach Out Directly</h3>

          <div className="space-y-3 mb-6">
            
            <a href="mailto:umair786346@gmail.com" className="flex items-center justify-between border border-gray-200 dark:border-gray-800 rounded-xl p-4 hover:border-green-500 transition-colors">
            <div className="flex items-center gap-3">
                <span className="text-green-500">✉️</span>
                <div>
                <div className="text-[10px] text-gray-500 uppercase">Primary Inbox</div>
                <div className="text-sm font-medium">umair786346@gmail.com</div>
                </div>
            </div>
            </a>

            
            <a href="tel:+923176214646" className="flex items-center justify-between border border-gray-200 dark:border-gray-800 rounded-xl p-4 hover:border-green-500 transition-colors">
            <div className="flex items-center gap-3">
                <span className="text-green-500">📞</span>
                <div>
                <div className="text-[10px] text-gray-500 uppercase">Direct Phone</div>
                <div className="text-sm font-medium">+92 317-6214646</div>
                </div>
            </div>
            </a>
            
            <div className="flex items-center justify-between border border-gray-200 dark:border-gray-800 rounded-xl p-4">
              <div className="flex items-center gap-3">
                <span className="text-green-500">📍</span>
                <div>
                  <div className="text-[10px] text-gray-500 uppercase">Location</div>
                  <div className="text-sm font-medium">Faisalabad, Punjab, Pakistan · Remote Ready</div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            
              <a href="https://github.com/syed-m-umair"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 border border-gray-200 dark:border-gray-800 rounded-lg py-3 text-sm hover:border-green-500 transition-colors">
              GitHub
            </a>
            
              <a href="https://linkedin.com/in/syed-muhammad-umair-1559a3318"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 border border-gray-200 dark:border-gray-800 rounded-lg py-3 text-sm hover:border-green-500 transition-colors">
              LinkedIn
            </a>
          </div>
        </div>

        {/* Right: contact form */}
        <form onSubmit={handleSubmit} className="border border-gray-200 dark:border-gray-800 rounded-xl p-6">
          <div className="flex items-center justify-between mb-5">
            <span className="text-xs text-green-500 uppercase">Direct Dispatch Console</span>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="text-[10px] text-gray-500 uppercase block mb-1">Your Name / Organization *</label>
              <input
                required
                value={form.name}
                onChange={handleChange('name')}
                placeholder="e.g. Sarah Jenkins (Tech Recruiter)"
                className="w-full bg-transparent border border-gray-300 dark:border-gray-700 rounded-md px-3 py-2 text-sm outline-none focus:border-green-500"
              />
            </div>
            <div>
              <label className="text-[10px] text-gray-500 uppercase block mb-1">Email Address *</label>
              <input
                required
                type="email"
                value={form.email}
                onChange={handleChange('email')}
                placeholder="sarah@company.com"
                className="w-full bg-transparent border border-gray-300 dark:border-gray-700 rounded-md px-3 py-2 text-sm outline-none focus:border-green-500"
              />
            </div>
          </div>

          <div className="mb-3">
            <label className="text-[10px] text-gray-500 uppercase block mb-1">Role / Inquiry Topic *</label>
            <input
              required
              value={form.role}
              onChange={handleChange('role')}
              placeholder="e.g. SQA Engineer, DevOps Engineer, or Custom Project..."
              className="w-full bg-transparent border border-gray-300 dark:border-gray-700 rounded-md px-3 py-2 text-sm outline-none focus:border-green-500"
            />
          </div>

          <div className="flex flex-wrap gap-2 mb-5">
            {quickRoles.map((role) => (
              <button
                type="button"
                key={role}
                onClick={() => setForm({ ...form, role })}
                className="text-xs px-2.5 py-1 border border-gray-300 dark:border-gray-700 rounded-md text-gray-500 hover:border-green-500 hover:text-green-500 transition-colors"
              >
                {role}
              </button>
            ))}
          </div>

          <div className="mb-5">
            <label className="text-[10px] text-gray-500 uppercase block mb-1">Project Scope or Role Overview *</label>
            <textarea
              required
              rows={4}
              value={form.message}
              onChange={handleChange('message')}
              placeholder="Tell me about the role, tech stack, timeline, or problems you are solving..."
              className="w-full bg-transparent border border-gray-300 dark:border-gray-700 rounded-md px-3 py-2 text-sm outline-none focus:border-green-500 resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-green-500 text-black rounded-md font-medium text-sm transition-transform hover:scale-[1.02]"
          >
            ➤ Transmit Message → Syed Muhammad Umair
          </button>

          <p className="text-center text-xs text-gray-500 mt-3">
            Delivers directly to your-email@example.com
          </p>
        </form>
      </div>
    </section>
  )
}

export default LetsBuild