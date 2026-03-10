import { ChevronLeft, Send, Loader2 } from "lucide-react";
import type { Essay } from "models/Essay";
import { useNavigate } from "react-router";

type CorrectionHeaderProps = {
  essay: Essay;
  onFinish: () => void;
  loading: boolean;
};

export function CorrectionHeader({ essay, onFinish, loading }: CorrectionHeaderProps) {
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-50 w-full min-h-[72px] bg-white/80 backdrop-blur-md border-b border-slate-200 px-4 md:px-6 py-3 flex items-center justify-between gap-4">
      
      <div className="flex items-center gap-3 min-w-0">
        <button
          onClick={() => navigate(-1)}
          className="group p-2 hover:bg-slate-100 active:bg-slate-200 rounded-full transition-colors duration-200 flex-shrink-0"
          aria-label="Voltar"
        >
          <ChevronLeft size={22} className="text-slate-600 group-hover:text-slate-900" />
        </button>

        <div className="min-w-0">
          <span className="block text-[10px] font-bold text-indigo-600 uppercase tracking-wider leading-none mb-1">
            Modo de Correção
          </span>
          <h1 className="text-base md:text-lg font-bold text-slate-900 truncate leading-tight">
            {essay.title}
          </h1>
          <div className="flex items-center gap-2 text-xs text-slate-500 truncate">
            <span className="truncate">{essay.user?.name}</span>
            <span className="text-slate-300">•</span>
            <span className="truncate font-medium text-slate-600">{essay.category?.name}</span>
          </div>
        </div>
      </div>

      <div className="flex-shrink-0">
        <button
          onClick={onFinish}
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
              <Send size={18} className={loading ? "opacity-0" : "opacity-100"} />
              <span>Finalizar</span>
            </>
          )}
        </button>
      </div>

    </header>
  );
}