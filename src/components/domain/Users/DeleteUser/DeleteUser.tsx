import { Trash2 } from "lucide-react";

interface DeleteUserProps {
  onDelete: () => void;
  loading?: boolean;
  title?: string;
  className?: string;
}

export function DeleteUser({
  onDelete,
  loading = false,
  title = "Excluir usuário",
  className = ""
}: DeleteUserProps) {
  return (
    <button
      onClick={onDelete}
      disabled={loading}
      title={title}
      className={`
        p-2 rounded-lg transition-all
        ${loading
          ? "bg-gray-200 text-gray-400 cursor-not-allowed"
          : "text-slate-400 hover:text-red-600 hover:bg-red-50 cursor-pointer"}
        ${className}
      `}
    >
      <Trash2 size={18} />
    </button>
  );
}