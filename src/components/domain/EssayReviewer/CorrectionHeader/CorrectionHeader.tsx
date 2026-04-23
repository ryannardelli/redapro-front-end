import { FinishCorrectEssay } from "@components/ui/Button/FinishCorrectEssay";
import { ChevronLeft } from "lucide-react";
import type { Essay } from "models/Essay";
import { useNavigate } from "react-router";
import { DownloadEssay } from "../DowloadEssay";

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

      <div className="flex flex-shrink-0 items-center gap-3">
        <FinishCorrectEssay
          onClick={onFinish}
          loading={loading}
        />
        
        <DownloadEssay />
      </div>

    </header>
  );
}