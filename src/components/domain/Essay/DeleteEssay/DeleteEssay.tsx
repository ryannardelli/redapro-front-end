import { Trash2 } from "lucide-react";

interface DeleteEssayProps {
  onDelete: () => void;
  loading?: boolean;
  title?: string;
  className?: string;
}

export function DeleteEssay({
  onDelete,
  loading = false,
  title = "Excluir",
  className = "",
}: DeleteEssayProps) {
  return (
    <button
      onClick={onDelete}
      disabled={loading}
      title={title}
      className={`
        p-2 rounded-lg shadow-md transition
        ${loading
          ? "bg-gray-200 text-gray-400 cursor-not-allowed"
          : "bg-white/90 hover:bg-red-50 text-gray-400 hover:text-red-600 cursor-pointer"}
        ${className}
      `}
    >
      <Trash2 size={18} />
    </button>
  );
}