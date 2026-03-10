import { ChevronLeft, Send } from "lucide-react";
import type { Essay } from "models/Essay";
import { useNavigate } from "react-router";

type CorrectionHeaderProps = {
  essay: Essay;
  onFinish?: () => void;
};

export function CorrectionHeader({ essay, onFinish }: CorrectionHeaderProps) {
  const navigate = useNavigate();

  return (
    <header className="min-h-[64px] py-3 bg-white border-b border-slate-200 flex flex-col md:flex-row items-start md:items-center justify-between px-4 md:px-6 sticky top-0 z-20 gap-4">
      
      <div className="flex items-center gap-3">
        <button
          onClick={() => navigate(-1)}
          className="p-2 hover:bg-slate-100 rounded-full transition-colors cursor-pointer"
        >
          <ChevronLeft size={20} />
        </button>

        <div>
          <h1 className="text-[10px] md:text-xs font-semibold text-slate-500 uppercase tracking-wider">
            Corrigindo Redação
          </h1>

          <p className="text-sm md:text-lg font-bold leading-tight line-clamp-1">
            {essay.title}
          </p>

          <p className="text-xs text-slate-500">
            {essay.user?.name} • {essay.category?.name}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-2 w-full md:w-auto justify-end">
        <button
          onClick={onFinish}
          className="flex-1 md:flex-none flex items-center justify-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-sm font-semibold shadow-sm transition-all"
        >
          <Send size={16} />
          <span className="hidden sm:inline">Finalizar</span>
        </button>
      </div>

    </header>
  );
}