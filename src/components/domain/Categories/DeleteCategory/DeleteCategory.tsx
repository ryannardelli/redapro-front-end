import { Trash2 } from "lucide-react";

interface DeleteCategoryProps {
  onDelete?: () => void;
  loading?: boolean;
  title?: string;
  className?: string;
}

export function DeleteCategory({
  onDelete,
  loading = false,
  title = "Excluir",
  className = ""
}: DeleteCategoryProps) {
  return (
    <button
      onClick={onDelete}
      disabled={loading}
      title={title}
      className={`
        p-2 
        text-slate-400 
        hover:text-red-600 
        hover:bg-red-50 
        rounded-lg 
        transition-all 
        border 
        border-transparent 
        hover:border-red-100
        ${loading ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
        ${className}
      `}
    >
      <Trash2 size={18} />
    </button>
  );
}