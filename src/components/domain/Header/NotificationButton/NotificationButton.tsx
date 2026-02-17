import type { ButtonHTMLAttributes, ReactNode } from "react";

interface NotificationButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: ReactNode;
  hasNotification?: boolean;
  label?: string;
}

export function NotificationButton({
  icon,
  hasNotification = false,
  label = "Notificações",
  className = "",
  ...props
}: NotificationButtonProps) {
  return (
    <button
      aria-label={label}
      className={`
        relative p-2.5 rounded-xl
        text-gray-500 hover:bg-gray-100 hover:text-indigo-600
        transition-all cursor-pointer
        ${className}
      `}
      {...props}
    >
      {icon}

      {hasNotification && (
        <span className="
          absolute top-2 right-2.5
          w-2 h-2 bg-rose-500 rounded-full
          border-2 border-white
        " />
      )}
    </button>
  );
}
