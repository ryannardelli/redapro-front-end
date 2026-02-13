import { type ReactNode } from "react";

interface ActionButtonProps {
  disabled: boolean;
  onClick?: () => void;
  icon?: ReactNode;
  children: ReactNode;
  tooltip?: string;
  className?: string;
}

export function ActionButton({
  disabled,
  onClick,
  icon,
  children,
  tooltip,
  className = "",
}: ActionButtonProps) {
  return (
    <div className="relative flex-1 group/tooltip">
      <button
        disabled={disabled}
        onClick={onClick}
        className={`
          w-full flex items-center justify-center gap-2 px-4 py-2.5 font-semibold rounded-xl transition-all
          ${
            disabled
              ? "bg-gray-100 text-gray-400 cursor-not-allowed"
              : "bg-indigo-600 text-white hover:bg-indigo-700 shadow-md shadow-indigo-100 cursor-pointer"
          }
          ${className}
        `}
      >
        {icon}
        {children}
      </button>

      {disabled && tooltip && (
        <span
          className="
            absolute -top-10 left-1/2 -translate-x-1/2
            w-max px-2 py-1 bg-gray-800 text-white text-[10px]
            rounded opacity-0 group-hover/tooltip:opacity-100
            transition-opacity pointer-events-none
          "
        >
          {tooltip}
        </span>
      )}
    </div>
  );
}
