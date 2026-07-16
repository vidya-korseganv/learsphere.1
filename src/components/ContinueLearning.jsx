import CourseCard from './CourseCard'

function ContinueLearning({ courses }) {
  const inProgressCourses = courses.filter((course) => course.status === 'In Progress')

  return (
    <section id="continue" className="rounded-[2rem] border border-slate-200/70 bg-slate-50 p-6 sm:p-8">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-600">Continue learning</p>
          <h2 className="mt-2 text-2xl font-semibold text-slate-900">Pick up where you left off</h2>
        </div>
        <a href="#courses" className="text-sm font-semibold text-blue-600 transition hover:text-blue-700">
          View all
        </a>
      </div>

      <div className="mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {inProgressCourses.slice(0, 3).map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </section>
  )
}

export default ContinueLearning
