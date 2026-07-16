import { FiBookOpen, FiCheckCircle, FiClock, FiAward } from 'react-icons/fi'

const stats = [
  {
    label: 'Total Courses',
    value: '24',
    icon: FiBookOpen,
    accent: 'from-blue-500 to-cyan-400',
  },
  {
    label: 'Completed Courses',
    value: '8',
    icon: FiCheckCircle,
    accent: 'from-emerald-500 to-green-400',
  },
  {
    label: 'Courses In Progress',
    value: '11',
    icon: FiClock,
    accent: 'from-amber-500 to-yellow-400',
  },
  {
    label: 'Certificates Earned',
    value: '4',
    icon: FiAward,
    accent: 'from-violet-500 to-fuchsia-400',
  },
]

function StatsCard() {
  return (
    <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4" aria-label="Learning statistics">
      {stats.map((stat) => {
        const Icon = stat.icon

        return (
          <article
            key={stat.label}
            className="group rounded-3xl border border-slate-200/70 bg-white p-5 shadow-[0_20px_60px_-30px_rgba(15,23,42,0.35)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_25px_70px_-25px_rgba(59,130,246,0.35)]"
          >
            <div className={`inline-flex rounded-2xl bg-gradient-to-br ${stat.accent} p-3 text-white`}>
              <Icon className="h-5 w-5" aria-hidden="true" />
            </div>
            <div className="mt-4">
              <p className="text-3xl font-semibold text-slate-900">{stat.value}</p>
              <p className="mt-1 text-sm font-medium text-slate-600">{stat.label}</p>
            </div>
          </article>
        )
      })}
    </section>
  )
}

export default StatsCard
