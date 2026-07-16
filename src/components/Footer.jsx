import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi'

function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white/90 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-md">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 via-indigo-500 to-violet-500 text-lg font-semibold text-white shadow-lg">
              L
            </div>
            <div>
              <p className="text-lg font-semibold text-slate-900">LearnSphere</p>
              <p className="text-sm text-slate-500">Modern learning for ambitious teams.</p>
            </div>
          </div>
          <p className="mt-4 text-sm leading-7 text-slate-600">
            Build practical skills with design-driven learning paths and progress-centered dashboards.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-6 text-sm font-medium text-slate-600">
          <a href="#" className="transition hover:text-blue-600">Home</a>
          <a href="#courses" className="transition hover:text-blue-600">Courses</a>
          <a href="#continue" className="transition hover:text-blue-600">Community</a>
          <div className="flex items-center gap-3">
            <a href="#" className="rounded-full border border-slate-200 p-2 transition hover:border-blue-400 hover:text-blue-600" aria-label="GitHub">
              <FiGithub className="h-4 w-4" />
            </a>
            <a href="#" className="rounded-full border border-slate-200 p-2 transition hover:border-blue-400 hover:text-blue-600" aria-label="LinkedIn">
              <FiLinkedin className="h-4 w-4" />
            </a>
            <a href="#" className="rounded-full border border-slate-200 p-2 transition hover:border-blue-400 hover:text-blue-600" aria-label="Twitter">
              <FiTwitter className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-8 max-w-7xl border-t border-slate-200 pt-6 text-center text-sm text-slate-500">
        © 2026 LearnSphere. Crafted for modern learners.
      </div>
    </footer>
  )
}

export default Footer
