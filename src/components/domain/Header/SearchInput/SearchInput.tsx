import { Search } from "lucide-react";
import type { SearchInputProps } from "types/SearchInputProps";

export function SearchInput({
  value,
  onChange,
  placeholder = "Buscar...",
  results = [],
  minLength = 2,
  icon,
  className = "",
  hiddenOnMobile = false
}: SearchInputProps) {
  const showResults = value.length >= minLength && results.length > 0;

  return (
    <div
      className={`relative w-full max-w-md ${
        hiddenOnMobile ? "hidden md:block" : ""
      } ${className}`}
    >
      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
        {icon ?? <Search size={18} />}
      </div>

      <input
        type="text"
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full pl-11 pr-4 py-2 bg-gray-50 border border-transparent rounded-xl
          focus:bg-white focus:ring-2 focus:ring-indigo-100 focus:border-indigo-400
          transition-all text-sm outline-none"
      />

      {showResults && (
        <div className="absolute top-full left-0 w-full mt-2 bg-white border border-gray-100 rounded-xl shadow-xl p-2 animate-in fade-in slide-in-from-top-1 z-50">
          <p className="text-[10px] font-bold text-gray-400 px-3 py-1 uppercase tracking-wider">
            Resultados rápidos
          </p>

          {results.map(result => (
            <button
              key={result.id}
              onClick={result.onSelect}
              className="w-full text-left px-3 py-2 text-sm hover:bg-indigo-50 rounded-lg transition-colors"
            >
              {result.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
