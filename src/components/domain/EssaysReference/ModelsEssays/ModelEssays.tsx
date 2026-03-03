import { useMemo, useState } from "react";
import { ChevronLeft, ChevronRight, FileText } from "lucide-react";

import { EssaysReferenceCard } from "../EssaysReferenceCard";
import { EssaysReferenceSkeleton } from "@components/ui/Loading/EssaysReferenceSkeleton";
import { ModelsEssayFilter } from "@components/ui/Filters/ModelsEssayFilter";
import { EmptyState } from "@components/feedback/EmptyState";
import { useReferenceEssay } from "@hooks/useReferenceEssay";

export function ModelsEssays() {
  const { stateReferenceEssay } = useReferenceEssay();
  const loading = stateReferenceEssay.loading;
  const essays = stateReferenceEssay.essays ?? [];

  const [filters, setFilters] = useState({
    search: "",
    year: "",
  });

  const filteredEssays = useMemo(() => {
    return essays.filter((essay) => {
      if (filters.search) {
        const search = filters.search.toLowerCase();

        const titleMatch =
          essay.title?.toLowerCase().includes(search);

        const contentMatch =
          typeof essay.content === "string" &&
          essay.content.toLowerCase().includes(search);

        if (!titleMatch && !contentMatch) return false;
      }

      if (filters.year) {
        const essayYear = essay.createdAt
          ? new Date(essay.createdAt).getFullYear().toString()
          : "";

        if (essayYear !== filters.year) return false;
      }

      return true;
    });
  }, [essays, filters]);

  return (
    <section className="px-6 py-16 max-w-7xl mx-auto bg-slate-50 min-h-screen">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-black text-slate-900 tracking-tight">
          Modelos <span className="text-purple-600">Nota 1000</span>
        </h1>
        <p className="text-slate-600 mt-3 text-lg max-w-2xl mx-auto">
          Explore nossa biblioteca curada de redações nota máxima e domine as
          técnicas de escrita.
        </p>
      </div>

      <ModelsEssayFilter
        search={filters.search}
        year={filters.year}
        years={["2024", "2023", "2022"]}
        total={filteredEssays.length}
        onSearchChange={(value) =>
          setFilters((prev) => ({ ...prev, search: value }))
        }
        onYearChange={(value) =>
          setFilters((prev) => ({ ...prev, year: value }))
        }
      />

      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Array.from({ length: essays.length }).map((_, i) => (
            <EssaysReferenceSkeleton key={i} />
          ))}
        </div>
      ) : filteredEssays.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEssays.map((essay) => (
            <EssaysReferenceCard
              key={essay.id}
              essay={essay}
            />
          ))}
        </div>
      ) : (
        <EmptyState
          icon={FileText}
          title="Nenhuma redação encontrada"
          description="Não encontramos resultados para sua busca."
        />
      )}

      <div className="flex justify-center items-center mt-16 gap-6">
        <button className="group flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-purple-600 transition-all cursor-pointer">
          <ChevronLeft
            size={20}
            className="group-hover:-translate-x-1 transition-transform"
          />
          Anterior
        </button>

        <div className="flex gap-2">
          {[1, 2, 3].map((n) => (
            <button
              key={n}
              className={`w-10 h-10 rounded-full font-bold text-sm transition-all ${
                n === 1
                  ? "bg-purple-600 text-white"
                  : "text-slate-400 hover:bg-slate-200"
              }`}
            >
              {n}
            </button>
          ))}
        </div>

        <button className="group flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-purple-600 transition-all cursor-pointer">
          Próximo
          <ChevronRight
            size={20}
            className="group-hover:translate-x-1 transition-transform"
          />
        </button>
      </div>
    </section>
  );
}