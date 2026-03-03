import { useCategory } from "@hooks/useCategory";
import { Search, RotateCcw, Tag, Award, Activity } from "lucide-react";
import type { EssayFilters } from "types/EssayFilters";

interface FilterHeaderEssayProps {
  filters: EssayFilters;
  onChange: (filters: EssayFilters) => void;
}

export function FilterHeaderEssay({
  filters,
  onChange
}: FilterHeaderEssayProps) {
  const { stateCategory } = useCategory();
  const categories = stateCategory.categories;

  function update<K extends keyof EssayFilters>(
    key: K,
    value: EssayFilters[K]
  ) {
    onChange({ ...filters, [key]: value });
  }

  return (
    <div className="w-full bg-white p-2 md:p-3 rounded-2xl border border-slate-200 shadow-sm mb-6 flex flex-col lg:flex-row gap-3 items-stretch lg:items-center">
      
      <div className="relative flex-1 group">
        <Search 
          size={18} 
          className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-purple-500 transition-colors" 
        />
        <input
          type="text"
          placeholder="Buscar redação pelo título..."
          value={filters.search}
          onChange={(e) => update("search", e.target.value)}
          className="w-full bg-slate-50 border-none rounded-xl pl-10 pr-4 py-2.5 text-sm font-medium placeholder:text-slate-400 focus:ring-2 focus:ring-purple-500/20 focus:bg-white transition-all outline-none"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
        
        <div className="relative flex items-center">
          <Tag size={14} className="absolute left-3 text-slate-400 pointer-events-none" />
          
          <select
            value={filters.categoryId}
            onChange={(e) => update("categoryId", e.target.value)}
            className="w-full appearance-none bg-slate-50 border-none rounded-xl pl-9 pr-8 py-2.5 text-xs font-bold text-slate-600 focus:ring-2 focus:ring-purple-500/20 outline-none cursor-pointer hover:bg-slate-100 transition-colors"
          >
            <option value="">
              Selecione uma categoria
            </option>

            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>

        <div className="relative flex items-center">
          <Award size={14} className="absolute left-3 text-slate-400 pointer-events-none" />
          <select
            value={filters.scoreRange}
            onChange={(e) => update("scoreRange", e.target.value)}
            className="w-full appearance-none bg-slate-50 border-none rounded-xl pl-9 pr-8 py-2.5 text-xs font-bold text-slate-600 focus:ring-2 focus:ring-purple-500/20 outline-none cursor-pointer hover:bg-slate-100 transition-colors"
          >
            <option value="">Pontuação</option>
            <option value="0-400">0 - 400</option>
            <option value="801-1000">801 - 1000</option>
          </select>
        </div>

        <div className="relative flex items-center">
          <Activity size={14} className="absolute left-3 text-slate-400 pointer-events-none" />
          <select
            value={filters.status}
            onChange={(e) =>
              update("status", e.target.value as EssayFilters["status"])
            }
            className="w-full appearance-none bg-slate-50 border-none rounded-xl pl-9 pr-8 py-2.5 text-xs font-bold text-slate-600 focus:ring-2 focus:ring-purple-500/20 outline-none cursor-pointer hover:bg-slate-100 transition-colors"
          >
            <option value="">Status</option>
            <option value="pendente">Pendente</option>
            <option value="corrigida">Corrigida</option>
          </select>
        </div>

      </div>

      <button
        onClick={() =>
          onChange({
            search: "",
            categoryId: "",
            scoreRange: "",
            status: ""
          })
        }
        className="flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-bold text-rose-500 hover:bg-rose-50 rounded-xl transition-all active:scale-95 border border-transparent hover:border-rose-100"
      >
        <RotateCcw size={14} />
        <span className="lg:hidden">Limpar filtros</span>
      </button>
    </div>
  );
}