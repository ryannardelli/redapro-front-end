import { Search, RotateCcw, Tag, Award, Activity } from "lucide-react";

export function FilterHeaderEssay() {
  return (
    <div className="w-full bg-white p-2 md:p-3 rounded-2xl border border-slate-200 shadow-sm mb-6 flex flex-col lg:flex-row gap-3 items-stretch lg:items-center">
      
      {/* Container do Campo de Pesquisa */}
      <div className="relative flex-1 group">
        <Search 
          size={18} 
          className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-purple-500 transition-colors" 
        />
        <input
          type="text"
          placeholder="Buscar redação pelo título..."
          className="w-full bg-slate-50 border-none rounded-xl pl-10 pr-4 py-2.5 text-sm font-medium placeholder:text-slate-400 focus:ring-2 focus:ring-purple-500/20 focus:bg-white transition-all outline-none"
        />
      </div>

      {/* Grid de Filtros - No mobile fica 2x2 ou 1x1, no desktop fica em linha */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
        
        {/* Filtro de Tema */}
        <div className="relative flex items-center">
          <Tag size={14} className="absolute left-3 text-slate-400 pointer-events-none" />
          <select className="w-full appearance-none bg-slate-50 border-none rounded-xl pl-9 pr-8 py-2.5 text-xs font-bold text-slate-600 focus:ring-2 focus:ring-purple-500/20 outline-none cursor-pointer hover:bg-slate-100 transition-colors">
            <option value="">Temas</option>
            <option value="meio-ambiente">Meio Ambiente</option>
            <option value="tecnologia">Tecnologia</option>
            <option value="educacao">Educação</option>
          </select>
        </div>

        {/* Filtro de Nota */}
        <div className="relative flex items-center">
          <Award size={14} className="absolute left-3 text-slate-400 pointer-events-none" />
          <select className="w-full appearance-none bg-slate-50 border-none rounded-xl pl-9 pr-8 py-2.5 text-xs font-bold text-slate-600 focus:ring-2 focus:ring-purple-500/20 outline-none cursor-pointer hover:bg-slate-100 transition-colors">
            <option value="">Pontuação</option>
            <option value="0-400">0 - 400</option>
            <option value="801-1000">801 - 1000</option>
          </select>
        </div>

        {/* Filtro de Status */}
        <div className="relative flex items-center">
          <Activity size={14} className="absolute left-3 text-slate-400 pointer-events-none" />
          <select className="w-full appearance-none bg-slate-50 border-none rounded-xl pl-9 pr-8 py-2.5 text-xs font-bold text-slate-600 focus:ring-2 focus:ring-purple-500/20 outline-none cursor-pointer hover:bg-slate-100 transition-colors">
            <option value="">Status</option>
            <option value="pendente">Pendente</option>
            <option value="corrigida">Corrigida</option>
          </select>
        </div>

      </div>

      {/* Botão Limpar */}
      <button className="flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-bold text-rose-500 hover:bg-rose-50 rounded-xl transition-all active:scale-95 border border-transparent hover:border-rose-100">
        <RotateCcw size={14} />
        <span className="lg:hidden">Limpar filtros</span>
      </button>
    </div>
  );
}