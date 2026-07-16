import { useMemo, useState } from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import StatsCard from './components/StatsCard'
import SearchBar from './components/SearchBar'
import CategoryFilter from './components/CategoryFilter'
import CourseGrid from './components/CourseGrid'
import ContinueLearning from './components/ContinueLearning'
import Footer from './components/Footer'
import courses from './data/courses'

function App() {
  const [searchTerm, setSearchTerm] = useState('')
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredCourses = useMemo(() => {
    const normalizedSearch = searchTerm.trim().toLowerCase()

    return courses.filter((course) => {
      const matchesCategory = activeCategory === 'All' || course.category === activeCategory
      const matchesSearch =
        normalizedSearch.length === 0 ||
        course.title.toLowerCase().includes(normalizedSearch) ||
        course.description.toLowerCase().includes(normalizedSearch)

      return matchesCategory && matchesSearch
    })
  }, [activeCategory, searchTerm])

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.14),_transparent_35%),linear-gradient(135deg,_#f8fbff_0%,_#f5f7ff_45%,_#fbfafe_100%)] text-slate-900">
      <Navbar />

      <main className="mx-auto flex max-w-7xl flex-col gap-8 px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
        <HeroSection />
        <StatsCard />

        <section id="courses" className="rounded-[2rem] border border-slate-200/80 bg-white p-6 shadow-[0_30px_90px_-40px_rgba(15,23,42,0.35)] sm:p-8">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-600">Explore courses</p>
              <h2 className="mt-2 text-2xl font-semibold text-slate-900">Find the next skill worth mastering</h2>
            </div>
            <div className="w-full max-w-xl">
              <SearchBar value={searchTerm} onChange={setSearchTerm} />
            </div>
          </div>

          <div className="mt-6">
            <CategoryFilter activeCategory={activeCategory} onChange={setActiveCategory} />
          </div>

          <div className="mt-8">
            <CourseGrid courses={filteredCourses} />
          </div>
        </section>

        <ContinueLearning courses={courses} />
      </main>

      <Footer />
    </div>
  )
}

export default App
