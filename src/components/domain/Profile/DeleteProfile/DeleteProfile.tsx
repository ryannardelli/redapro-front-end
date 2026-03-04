import { Trash2 } from "lucide-react";

interface DeleteProfileProps {
  onDelete: () => void;
  loading?: boolean;
  title?: string;
  className?: string;
}

export function DeleteProfile({
    onDelete,
    loading,
    title,
    className
}: DeleteProfileProps) {
    return(
        <button
        onClick={onDelete}
        disabled={loading}
        title={title}
        className={`
            p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors
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