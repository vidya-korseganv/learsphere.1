import CourseCard from './CourseCard'

function CourseGrid({ courses }) {
  if (!courses.length) {
    return (
      <div className="rounded-[1.5rem] border border-dashed border-slate-300 bg-slate-50/80 p-10 text-center text-slate-600">
        No courses found. Try another search term.
      </div>
    )
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {courses.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>
  )
}

export default CourseGrid
