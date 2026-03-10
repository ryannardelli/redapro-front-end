import { ChevronLeft, Send } from "lucide-react";
import type { Essay } from "models/Essay";
import { useNavigate } from "react-router";

type CorrectionHeaderProps = {
  essay: Essay;
  onFinish: () => void;
  loading: boolean;
}

export function CorrectionHeader({ essay, onFinish, loading }: CorrectionHeaderProps) {

  const navigate = useNavigate();

  return (

    <header className="min-h-[64px] py-3 bg-white border-b flex justify-between px-6">

      <div className="flex items-center gap-3">

        <button
          onClick={() => navigate(-1)}
          className="p-2 hover:bg-slate-100 rounded-full"
        >
          <ChevronLeft size={20} />
        </button>

        <div>

          <h1 className="text-xs text-slate-500 uppercase">
            Corrigindo Redação
          </h1>

          <p className="text-lg font-bold">
            {essay.title}
          </p>

          <p className="text-xs text-slate-500">
            {essay.user?.name} • {essay.category?.name}
          </p>

        </div>

      </div>

      <button
        onClick={onFinish}
        disabled={loading}
        className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg"
      >
        <Send size={16} />
        Finalizar
      </button>

    </header>

  );
}