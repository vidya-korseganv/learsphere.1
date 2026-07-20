import { useState, useRef, useEffect } from 'react'
import { FiBell } from 'react-icons/fi'
import NotificationPanel from './NotificationPanel'

function NotificationButton({ items, unreadCount, onMarkRead }) {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    function onDoc(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener('click', onDoc)
    return () => document.removeEventListener('click', onDoc)
  }, [])

  return (
    <div className="relative" ref={ref}>
      <button
        aria-label="Open notifications"
        onClick={() => setOpen((s) => !s)}
        className="relative inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-600 hover:border-blue-400 hover:text-blue-600"
      >
        <FiBell className="h-5 w-5" />
        {unreadCount > 0 && (
          <span className="absolute -top-1 -right-1 inline-flex items-center justify-center rounded-full bg-red-500 px-1.5 py-0.5 text-xs font-semibold text-white">
            {unreadCount}
          </span>
        )}
      </button>

      {open && (
        <div className="absolute right-0 mt-2 z-50">
          <NotificationPanel items={items} onMarkRead={onMarkRead} />
        </div>
      )}
    </div>
  )
}

export default NotificationButton
