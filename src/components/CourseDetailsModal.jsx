import { useEffect, useRef } from 'react'
import { FiX } from 'react-icons/fi'

function CourseDetailsModal({ course, open, onClose, onContinue }) {
  const dialogRef = useRef(null)

  useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape' && open) onClose()
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open, onClose])

  useEffect(() => {
    if (open) {
      const prev = document.activeElement
      dialogRef.current?.focus()
      return () => prev?.focus()
    }
  }, [open])

  if (!open || !course) return null

  return (
    <div
      className="fixed inset-0 z-[1000] flex items-center justify-center"
      aria-hidden={!open}
    >
      <div
        className="absolute inset-0 bg-black/50 transition-opacity duration-200"
        onClick={onClose}
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="course-title"
        className="relative z-10 mx-4 w-full max-w-3xl rounded-2xl bg-white shadow-2xl max-h-screen overflow-hidden"
        ref={dialogRef}
        tabIndex={-1}
      >
        <div className="flex items-start justify-between gap-4 border-b px-6 py-4">
          <div>
            <h2 id="course-title" className="text-lg font-semibold text-slate-900">
              {course.title}
            </h2>
            <p className="mt-1 text-sm text-slate-500">{course.category} • {course.status}</p>
          </div>

          <button
            aria-label="Close course details"
            className="rounded-full p-2 text-slate-600 hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            onClick={onClose}
          >
            <span className="sr-only">Close</span>
            <FiX className="h-5 w-5" />
          </button>
        </div>

        <div className="max-h-[70vh] overflow-y-auto p-6">
          <img src={course.image} alt={course.title} className="mx-auto mb-6 w-full max-w-2xl rounded-md object-cover" />

          <p className="text-sm leading-7 text-slate-700">{course.description}</p>

          <div className="mt-6">
            <div className="flex items-center justify-between text-sm font-medium text-slate-600">
              <span>Progress</span>
              <span>{course.progress}%</span>
            </div>
            <div className="mt-2 h-3 w-full rounded-full bg-slate-200">
              <div
                className="h-3 rounded-full bg-gradient-to-r from-blue-600 to-violet-500 transition-all duration-300"
                style={{ width: `${course.progress}%` }}
              />
            </div>
          </div>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
            <button
              onClick={() => onContinue(course)}
              className="inline-flex items-center justify-center rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
            >
              Continue Learning
            </button>

            <button
              onClick={onClose}
              className="inline-flex items-center justify-center rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CourseDetailsModal
