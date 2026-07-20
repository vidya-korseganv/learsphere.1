import { useCallback, useMemo, useState } from 'react'
import notificationsData from '../data/notifications'

export default function useNotifications() {
  const [items, setItems] = useState(notificationsData)

  const unreadCount = useMemo(() => items.filter((n) => n.unread).length, [items])

  const markRead = useCallback((id) => {
    setItems((prev) => prev.map((i) => (i.id === id ? { ...i, unread: false } : i)))
  }, [])

  const markAllRead = useCallback(() => setItems((prev) => prev.map((i) => ({ ...i, unread: false }))), [])

  return { items, unreadCount, markRead, markAllRead }
}
