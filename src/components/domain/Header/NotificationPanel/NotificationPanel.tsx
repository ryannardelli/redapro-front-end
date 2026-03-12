interface NotificationPanelProps {
  notifications: {
    id: string;
    message: string;
    read: boolean;
    createdAt: string;
  }[];
  onClear: () => void;
}

export function NotificationPanel({
  notifications,
  onClear,
}: NotificationPanelProps) {
  return (
    <div className="fixed top-16 right-4 w-96 bg-white border border-gray-200 rounded-2xl shadow-xl z-50 overflow-hidden animate-in fade-in zoom-in duration-200">
      <header className="flex items-center justify-between px-5 py-4 bg-gray-50/50 border-b border-gray-100">
        <div>
          <h3 className="text-sm font-semibold text-gray-900">Notificações</h3>
          <p className="text-[11px] text-gray-500 font-medium uppercase tracking-wider">
            {notifications.filter(n => !n.read).length} não lidas
          </p>
        </div>

        {notifications.length > 0 && (
          <div className="flex gap-4">
            <button
              onClick={onClear}
              className="text-xs font-medium text-gray-400 hover:text-red-500 transition-colors"
            >
              Limpar
            </button>
          </div>
        )}
      </header>

      <ul className="max-h-[400px] overflow-y-auto divide-y divide-gray-50">
        {notifications.length === 0 ? (
          <li className="flex flex-col items-center justify-center py-12 px-4 text-center">
            <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-3">
               <span className="text-gray-400 text-xl">🔔</span>
            </div>
            <p className="text-sm font-medium text-gray-900">Tudo limpo por aqui!</p>
            <p className="text-xs text-gray-500">Você não tem novas mensagens no momento.</p>
          </li>
        ) : (
          notifications.map((n) => (
            <li
              key={n.id}
              className={`
                group relative flex gap-3 p-5 transition-all hover:bg-gray-50
                ${!n.read ? "bg-indigo-50/30" : "bg-white"}
              `}
            >
              {!n.read && (
                <span className="absolute left-2 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-indigo-600 rounded-full shadow-[0_0_8px_rgba(79,70,229,0.6)]" />
              )}
              
              <div className="flex-1">
                <p className={`text-sm leading-relaxed ${!n.read ? "text-gray-900 font-medium" : "text-gray-600"}`}>
                  {n.message}
                </p>
                <time className="text-[11px] text-gray-400 mt-2 block font-medium">
                  {n.createdAt}
                </time>
              </div>

              {!n.read && (
                <button className="opacity-0 group-hover:opacity-100 transition-opacity text-[10px] bg-white border border-gray-200 px-2 py-1 rounded shadow-sm self-start text-gray-500 hover:text-indigo-600">
                  Marcar lida
                </button>
              )}
            </li>
          ))
        )}
      </ul>
    </div>
  );
}