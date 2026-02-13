import { Plus, GraduationCap, History, LineChart } from "lucide-react";

export function Shortcuts() {
  return (
    <div className="fixed bottom-4 left-0 right-0 px-4 z-50 md:relative md:bottom-0 md:flex md:justify-end md:p-6">
      <div className="flex items-center justify-around md:justify-end gap-1 md:gap-3 p-2 bg-white/90 backdrop-blur-md border border-slate-200 shadow-2xl md:shadow-xl rounded-2xl md:rounded-2xl max-w-fit mx-auto md:mx-0">
        
        <button
          type="button"
          className="flex items-center gap-2 px-4 md:px-5 py-2.5 bg-purple-600 hover:bg-purple-700 text-white rounded-xl shadow-lg shadow-purple-200 transition-all active:scale-95 group order-2 md:order-1 cursor-pointer"
        >
          <Plus className="w-5 h-5 md:w-4 md:h-4 group-hover:rotate-90 transition-transform duration-300" />
          <span className="hidden sm:inline text-sm font-bold tracking-tight">Nova Redação</span>
        </button>

        <div className="hidden md:block w-px h-8 bg-slate-200 mx-1 order-2" />

        <div className="flex items-center gap-1 order-1 md:order-3">
          <button
            type="button"
            title="Meu Histórico"
            className="flex flex-col md:flex-row items-center gap-1 md:gap-2 px-3 md:px-4 py-2 text-slate-600 hover:text-purple-600 hover:bg-purple-50 rounded-xl transition-all cursor-pointer"
          >
            <History className="w-5 h-5" />
            <span className="text-[10px] md:text-sm font-semibold md:inline">Histórico</span>
          </button>

          <button
            type="button"
            title="Feedbacks"
            className="flex flex-col md:flex-row items-center gap-1 md:gap-2 px-3 md:px-4 py-2 text-slate-600 hover:text-purple-600 hover:bg-purple-50 rounded-xl transition-all cursor-pointer"
          >
            <GraduationCap className="w-5 h-5" />
            <span className="text-[10px] md:text-sm font-semibold md:inline">Feedbacks</span>
          </button>

          <button
            type="button"
            title="Meu Desempenho"
            className="flex flex-col md:flex-row items-center gap-1 md:gap-2 px-3 md:px-4 py-2 text-slate-600 hover:text-purple-600 hover:bg-purple-50 rounded-xl transition-all cursor-pointer"
          >
            <LineChart className="w-5 h-5" />
            <span className="text-[10px] md:text-sm font-semibold md:inline">Desempenho</span>
          </button>
        </div>
      </div>
    </div>
  );
}
