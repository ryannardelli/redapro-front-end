import { useMemo, useState } from "react";
import { FileText } from "lucide-react";

import { EssaysReferenceCard } from "../EssaysReferenceCard";
import { EssaysReferenceSkeleton } from "@components/ui/Loading/EssaysReferenceSkeleton";
import { ModelsEssayFilter } from "@components/ui/Filters/ModelsEssayFilter";
import { EmptyState } from "@components/feedback/EmptyState";
import { useReferenceEssay } from "@hooks/useReferenceEssay";
import { Pagination } from "../Pagination/Pagination";

export function ModelsEssays() {
  const { stateReferenceEssay } = useReferenceEssay();
  const loading = stateReferenceEssay.loading;
  const essays = stateReferenceEssay.essays ?? [];
  const [page, setPage] = useState(1);

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
      if (!essay.year) return false;

      if (essay.year.toString() !== filters.year) return false;
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
        years={["2024", "2023", "2022", "2021", "2020"]}
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
          description="Não encontramos resultados para sua busca ou ainda não há cadastros."
        />
      )}

      <Pagination
        currentPage={page}
        totalPages={3}
        onPageChange={setPage}
      />
    </section>
  );
}