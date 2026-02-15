import { Eye } from "lucide-react";

interface ViewMoreEssayProps {
  onView: () => void;
  loading?: boolean;
  title?: string;
  className?: string;
}

export function ViewMoreEssay({
  onView,
  loading = false,
  title = "Ver redação completa",
  className = "",
}: ViewMoreEssayProps) {
  return (
    <button
      onClick={onView}
      disabled={loading}
      title={title}
      className={`
        p-2 rounded-lg shadow-md transition
        ${
          loading
            ? "bg-gray-200 text-gray-400 cursor-not-allowed"
            : "bg-white/90 hover:bg-indigo-50 text-gray-400 hover:text-indigo-600 cursor-pointer"
        }
        ${className}
      `}
    >
      <Eye size={18} />
    </button>
  );
}
