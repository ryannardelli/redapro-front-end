import { Trash2 } from "lucide-react";

interface DeleteReferenceEssayProps {
  onDelete: () => void;
  loading?: boolean;
  title?: string;
  className?: string;
}

export function DeleteReferenceEssay({
  onDelete,
  loading = false,
  title = "Excluir",
  className = "",
}: DeleteReferenceEssayProps) {
  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        onDelete();
      }}
      disabled={loading}
      title={title}
      className={`
        p-2.5 rounded-xl transition-all cursor-pointer flex items-center justify-center
        ${loading
          ? "bg-gray-100 text-gray-400 cursor-not-allowed opacity-50"
          : "text-slate-400 hover:text-red-500 hover:bg-white hover:shadow-sm"}
        ${className}
      `}
    >
      {loading ? (
        <div className="size-[18px] border-2 border-gray-300 border-t-red-500 rounded-full animate-spin" />
      ) : (
        <Trash2 size={18} />
      )}
    </button>
  );
}