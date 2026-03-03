import { ChevronLeft, ChevronRight } from "lucide-react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  if (totalPages <= 1) return null;

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex justify-center items-center mt-16 gap-6">
      <button
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
        className="group flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-purple-600 transition-all cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
      >
        <ChevronLeft
          size={20}
          className="group-hover:-translate-x-1 transition-transform"
        />
        Anterior
      </button>

      <div className="flex gap-2">
        {pages.map((page) => (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`w-10 h-10 rounded-full font-bold text-sm transition-all ${
              page === currentPage
                ? "bg-purple-600 text-white"
                : "text-slate-400 hover:bg-slate-200"
            }`}
          >
            {page}
          </button>
        ))}
      </div>

      <button
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
        className="group flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-purple-600 transition-all cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
      >
        Próximo
        <ChevronRight
          size={20}
          className="group-hover:translate-x-1 transition-transform"
        />
      </button>
    </div>
  );
}