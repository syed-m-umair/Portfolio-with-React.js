function About() {
  return (
    <section className="px-6 py-16 border-t border-gray-200 dark:border-gray-800 max-w-6xl mx-auto">
      <div className="text-xs text-green-500 uppercase mb-2">● Background & Philosophy</div>
      <h2 className="text-3xl font-bold mb-8">About me.</h2>

      <div className="grid md:grid-cols-3 gap-10">
        <div className="md:col-span-2 space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed">
          <p>
            I'm <span className="text-black dark:text-white font-medium">Syed Muhammad Umair</span>, a Software
            Engineering graduate from the National University of Modern Languages (NUML), Faisalabad, working
            across <span className="text-black dark:text-white font-medium">SQA, DevOps, and Full Stack development</span>.
          </p>
          <p>
            My focus is on building reliable, automation-first systems — from designing test strategies and
            catching bugs before they reach production, to setting up CI/CD pipelines with GitHub Actions and
            containerizing applications with Docker.
          </p>
          <p>
            Outside of DevOps and QA work, I have a long-standing interest in{' '}
            <span className="text-black dark:text-white font-medium">game development</span>, having built{' '}
            <span className="text-black dark:text-white font-medium">Ranikot Chronicles</span> in Godot Engine as
            my final year project — a 3D action-adventure game exploring cultural heritage themes.
          </p>
          <p>
            Whether it's writing test cases, automating a deployment pipeline, or scripting game mechanics in
            GDScript, I care about building things that work reliably and hold up under real use.
          </p>
        </div>

        <div className="space-y-4">
          <div className="border border-gray-200 dark:border-gray-800 rounded-xl p-5">
            <div className="text-xs text-gray-500 uppercase mb-1">Degree</div>
            <div className="font-semibold">BSSE, NUML Faisalabad</div>
            <div className="text-xs text-gray-500 mt-1">Graduated 2026</div>
          </div>
          <div className="border border-gray-200 dark:border-gray-800 rounded-xl p-5">
            <div className="text-xs text-gray-500 uppercase mb-1">CGPA</div>
            <div className="font-semibold">3.03 / 4.0</div>
          </div>
          <div className="border border-gray-200 dark:border-gray-800 rounded-xl p-5">
            <div className="text-xs text-gray-500 uppercase mb-1">Based in</div>
            <div className="font-semibold">Faisalabad, Pakistan</div>
          </div>
          <div className="border border-gray-200 dark:border-gray-800 rounded-xl p-5">
            <div className="text-xs text-gray-500 uppercase mb-1">Focus Areas</div>
            <div className="font-semibold">SQA · DevOps · Game Dev</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About