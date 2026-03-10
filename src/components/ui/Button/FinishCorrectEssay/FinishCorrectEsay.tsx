import { Send, Loader2 } from "lucide-react";

type FinishCorrectEssayProps = {
  onClick: () => void;
  loading: boolean;
};

export function FinishCorrectEssay({ onClick, loading }: FinishCorrectEssayProps) {
  return (
    <button
      onClick={onClick}
      disabled={loading}
      className={`
        relative flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm
        transition-all duration-200 active:scale-95 cursor-pointer
        ${loading 
          ? "bg-slate-100 text-slate-400 cursor-not-allowed" 
          : "bg-indigo-600 text-white hover:bg-indigo-700 hover:shadow-lg hover:shadow-indigo-200"
        }
      `}
    >
      {loading ? (
        <>
          <Loader2 size={18} className="animate-spin" />
          <span className="hidden sm:inline">Enviando...</span>
        </>
      ) : (
        <>
          <Send size={18} />
          <span>Finalizar</span>
        </>
      )}
    </button>
  );
}