import { useState } from 'react'
import CourseCard from './CourseCard'
import CourseDetailsModal from './CourseDetailsModal'

function CourseGrid({ courses }) {
  const [selected, setSelected] = useState(null)

  if (!courses.length) {
    return (
      <div className="rounded-[1.5rem] border border-dashed border-slate-300 bg-slate-50/80 p-10 text-center text-slate-600">
        No courses found. Try another search term.
      </div>
    )
  }

  return (
    <>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} onViewDetails={(c) => setSelected(c)} />
        ))}
      </div>

      <CourseDetailsModal
        course={selected}
        open={!!selected}
        onClose={() => setSelected(null)}
        onContinue={() => setSelected(null)}
      />
    </>
  )
}

export default CourseGrid
