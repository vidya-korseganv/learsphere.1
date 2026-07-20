function NotificationItem({ item, onMarkRead }) {
  return (
    <div className={`flex items-start gap-3 px-4 py-3 ${item.unread ? 'bg-slate-50' : ''}`}>
      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-50 text-blue-600">🔔</div>
      <div className="flex-1">
        <p className="text-sm font-medium text-slate-900">{item.title}</p>
        <p className="mt-1 text-xs text-slate-500">{item.time}</p>
      </div>
      {item.unread && (
        <button
          onClick={() => onMarkRead(item.id)}
          className="ml-2 rounded px-2 py-1 text-xs text-blue-600"
          aria-label={`Mark notification ${item.id} as read`}
        >
          Mark
        </button>
      )}
    </div>
  )
}

export default NotificationItem
