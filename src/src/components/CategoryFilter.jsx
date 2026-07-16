const categories = ['All', 'Development', 'Cloud', 'Design', 'DevOps']

function CategoryFilter({ activeCategory, onChange }) {
  return (
    <div className="flex flex-wrap gap-3" role="tablist" aria-label="Course categories">
      {categories.map((category) => {
        const isActive = activeCategory === category

        return (
          <button
            key={category}
            type="button"
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange(category)}
            className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
              isActive
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-200'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            {category}
          </button>
        )
      })}
    </div>
  )
}

export default CategoryFilter
