import { FiArrowRight } from 'react-icons/fi'

function HeroSection() {
  return (
    <section className="rounded-[2rem] border border-slate-200/70 bg-gradient-to-br from-slate-900 via-blue-950 to-violet-900 p-6 shadow-[0_30px_80px_-30px_rgba(15,23,42,0.75)] sm:p-8 lg:p-10">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl">
          <p className="inline-flex rounded-full border border-white/15 bg-white/10 px-3 py-1 text-sm font-medium text-slate-100 backdrop-blur">
            Welcome back, Student!
          </p>
          <h1 className="mt-5 text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Continue learning and achieve your goals.
          </h1>
          <p className="mt-4 max-w-xl text-base leading-7 text-slate-300 sm:text-lg">
            Build momentum with curated courses, measurable progress, and a learning experience designed for modern teams.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#courses"
              className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:scale-[1.02]"
            >
              Explore Courses
              <FiArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#continue"
              className="rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Continue Learning
            </a>
          </div>
        </div>

        <div className="w-full max-w-md rounded-[1.75rem] border border-white/10 bg-white/10 p-5 shadow-2xl backdrop-blur-xl">
          <div className="rounded-[1.5rem] bg-gradient-to-br from-white/90 via-blue-50/90 to-violet-100/90 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-slate-500">Weekly momentum</p>
                <p className="mt-1 text-3xl font-semibold text-slate-900">82%</p>
              </div>
              <div className="rounded-2xl bg-blue-600 px-3 py-2 text-sm font-semibold text-white">
                +12% this week
              </div>
            </div>
            <div className="mt-6 h-2 rounded-full bg-slate-200">
              <div className="h-2 w-[82%] rounded-full bg-gradient-to-r from-blue-600 to-violet-500" />
            </div>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl bg-white p-4 shadow-sm">
                <p className="text-sm text-slate-500">Focus time</p>
                <p className="mt-1 text-xl font-semibold text-slate-900">6.2h</p>
              </div>
              <div className="rounded-2xl bg-white p-4 shadow-sm">
                <p className="text-sm text-slate-500">Streak</p>
                <p className="mt-1 text-xl font-semibold text-slate-900">14 days</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
