import { Search, Filter } from "lucide-react";
import type { ModelsEssayFilterProps } from "types/ModelsEssayFilterProps";

export function ModelsEssayFilter({
  search,
  year,
  years,
  total,
  onSearchChange,
  onYearChange,
}: ModelsEssayFilterProps) {
  return (
    <div className="flex flex-col md:flex-row items-center gap-4 mb-10">
      {/* Search */}
      <div className="relative flex-1 w-full">
        <Search
          size={18}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
        />
        <input
          type="text"
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Pesquisar por título ou conteúdo..."
          className="w-full pl-11 pr-4 py-3 bg-white border border-slate-200 rounded-2xl focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 outline-none transition-all shadow-sm"
        />
      </div>

      {/* Filters */}
      <div className="flex items-center gap-3 w-full md:w-auto">
        <div className="relative flex-1 md:flex-none">
          <Filter
            size={16}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
          />
          <select
            value={year}
            onChange={(e) => onYearChange(e.target.value)}
            className="pl-9 pr-8 py-3 bg-white border border-slate-200 rounded-2xl outline-none focus:ring-4 focus:ring-indigo-500/10 text-slate-600 appearance-none font-medium cursor-pointer shadow-sm"
          >
            <option value="">Todos os anos</option>
            {years.map((y) => (
              <option key={y} value={y}>
                {y}
              </option>
            ))}
          </select>
        </div>

        <div className="bg-white border border-slate-200 px-4 py-3 rounded-2xl text-sm font-semibold text-slate-600 shadow-sm">
          {total}
          <span className="text-slate-400 font-normal ml-1 text-xs uppercase tracking-wider">
            itens
          </span>
        </div>
      </div>
    </div>
  );
}