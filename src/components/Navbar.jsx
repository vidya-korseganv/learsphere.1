import { useState } from 'react'
import { FiMenu, FiSearch, FiX } from 'react-icons/fi'

const navItems = ['Home', 'Explore Courses', 'My Learning', 'Profile']

function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="#" className="flex items-center gap-3" aria-label="LearnSphere home">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 via-indigo-500 to-violet-500 text-lg font-semibold text-white shadow-lg">
            L
          </div>
          <div>
            <p className="text-lg font-semibold text-slate-900">LearnSphere</p>
            <p className="text-xs text-slate-500">Learning platform</p>
          </div>
        </a>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Primary navigation">
          {navItems.map((item) => (
            <a key={item} href="#" className="text-sm font-medium text-slate-600 transition hover:text-blue-600">
              {item}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <button className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition hover:border-blue-400 hover:text-blue-600" aria-label="Search courses">
            <FiSearch className="h-4 w-4" />
          </button>
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-sm font-semibold text-white">
            JS
          </div>
        </div>

        <button
          className="inline-flex items-center justify-center rounded-full border border-slate-200 p-2 text-slate-700 md:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-expanded={open}
          aria-label="Toggle menu"
        >
          {open ? <FiX className="h-5 w-5" /> : <FiMenu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-slate-200 bg-white px-4 py-4 md:hidden">
          <nav className="flex flex-col gap-3" aria-label="Mobile navigation">
            {navItems.map((item) => (
              <a key={item} href="#" className="rounded-2xl px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100">
                {item}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}

export default Navbar
