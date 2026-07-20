import NotificationItem from './NotificationItem'

function NotificationPanel({ items, onMarkRead }) {
  return (
    <div className="w-80 rounded-lg border border-slate-200 bg-white shadow-lg">
      <div className="flex items-center justify-between border-b px-4 py-3">
        <h4 className="text-sm font-semibold">Notifications</h4>
        <button className="text-xs text-slate-500">Clear</button>
      </div>

      <div className="max-h-64 overflow-y-auto">
        {items.map((it) => (
          <NotificationItem key={it.id} item={it} onMarkRead={onMarkRead} />
        ))}
      </div>
    </div>
  )
}

export default NotificationPanel
