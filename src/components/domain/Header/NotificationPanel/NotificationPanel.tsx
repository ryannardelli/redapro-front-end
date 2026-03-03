interface NotificationPanelProps {
  notifications: {
    id: string;
    message: string;
    read: boolean;
    createdAt: string;
  }[];
  onReadAll: () => void;
  onClear: () => void;
}

export function NotificationPanel({
  notifications,
  onReadAll,
  onClear
}: NotificationPanelProps) {
  return (
    <div
      className="
        absolute right-0 mt-3 w-80
        bg-white border border-gray-100
        rounded-2xl shadow-2xl z-20
      "
    >
      <header className="flex items-center justify-between p-4 border-b">
        <span className="font-medium text-gray-800">
          Notificações
        </span>

        {notifications.length > 0 && (
          <div className="flex gap-3">
            <button
              onClick={onReadAll}
              className="text-sm text-indigo-600 hover:underline"
            >
              Marcar todas
            </button>

            <button
              onClick={onClear}
              className="text-sm text-red-500 hover:underline"
            >
              Limpar
            </button>
          </div>
        )}
      </header>

      <ul className="max-h-80 overflow-y-auto">
        {notifications.length === 0 && (
          <li className="p-4 text-sm text-gray-500 text-center">
            Nenhuma notificação
          </li>
        )}

        {notifications.map(n => (
          <li
            key={n.id}
            className={`
              p-4 text-sm border-b last:border-0
              ${!n.read ? "bg-indigo-50" : ""}
            `}
          >
            <p className="text-gray-700">{n.message}</p>
            <span className="text-xs text-gray-400 block mt-1">
              agora mesmo
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}