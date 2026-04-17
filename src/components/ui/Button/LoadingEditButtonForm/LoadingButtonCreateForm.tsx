import React from "react";

type LoadingButtonFormProps =
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    isLoading?: boolean;
  };

export default function LoadingButtonCreateForm({
  children,
  isLoading = false,
  disabled = false,
  className = "",
  ...props
}: LoadingButtonFormProps) {
  return (
    <button
      disabled={isLoading || disabled}
      className={`px-6 py-2 rounded-lg bg-green-600 hover:bg-green-700 text-white font-medium transition-all disabled:opacity-50 flex items-center gap-2 cursor-pointer ${className}`}
      {...props}
    >
      {isLoading ? (
        <>
          <svg
            className="animate-spin h-5 w-5 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
            />
          </svg>
          Editando...
        </>
      ) : (
        children
      )}
    </button>
  );
}