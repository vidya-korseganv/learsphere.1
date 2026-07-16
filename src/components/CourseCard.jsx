import { FiArrowRight } from 'react-icons/fi'

const statusStyles = {
  Completed: 'bg-green-100 text-green-700',
  'In Progress': 'bg-yellow-100 text-yellow-700',
  'Not Started': 'bg-gray-100 text-gray-700',
}

function CourseCard({ course }) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white shadow-[0_20px_60px_-30px_rgba(15,23,42,0.3)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_25px_70px_-25px_rgba(59,130,246,0.3)]">
      <img src={course.image} alt={course.title} className="h-40 w-full object-cover" />
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center justify-between gap-3">
          <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">
            {course.category}
          </span>
          <span className={`rounded-full px-3 py-1 text-xs font-semibold ${statusStyles[course.status]}`}>
            {course.status}
          </span>
        </div>

        <h3 className="mt-4 text-lg font-semibold text-slate-900">{course.title}</h3>
        <p className="mt-2 flex-1 text-sm leading-6 text-slate-600">{course.description}</p>

        <div className="mt-5">
          <div className="flex items-center justify-between text-sm font-medium text-slate-500">
            <span>Progress</span>
            <span>{course.progress}%</span>
          </div>
          <div className="mt-2 h-2 rounded-full bg-slate-200">
            <div
              className="h-2 rounded-full bg-gradient-to-r from-blue-600 to-violet-500"
              style={{ width: `${course.progress}%` }}
            />
          </div>
        </div>

        <button className="mt-5 inline-flex items-center gap-2 self-start rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-blue-500 hover:text-blue-600">
          Continue
          <FiArrowRight className="h-4 w-4" />
        </button>
      </div>
    </article>
  )
}

export default CourseCard
