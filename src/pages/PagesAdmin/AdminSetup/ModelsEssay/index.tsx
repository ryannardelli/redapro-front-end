import { useMemo, useState } from "react";

import { EssaysReferenceCard } from "@components/domain/EssaysReference/EssaysReferenceCard";
import { NewEssaysReference } from "@components/domain/EssaysReference/NewEssaysReference";
import { EmptyState } from "@components/feedback/EmptyState";
import { ModelsEssayFilter } from "@components/ui/Filters/ModelsEssayFilter";
import { EssaysReferenceSkeleton } from "@components/ui/Loading/EssaysReferenceSkeleton";

import { useReferenceEssay } from "@hooks/useReferenceEssay";
import { FileText } from "lucide-react";

export default function AdminModelsEssay() {
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
      if (!essay.year) return false;

      if (essay.year.toString() !== filters.year) return false;
    }

      return true;
    });
  }, [essays, filters]);

  return (
    <section className="px-6 py-10 max-w-7xl mx-auto bg-[#FAFAFA] min-h-screen">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <h1 className="text-4xl font-black text-slate-900 tracking-tight">
            Modelos <span className="text-indigo-600">Nota 1000</span>
          </h1>
          <p className="text-slate-500 mt-2 text-lg">
            Gerenciamento de referências e produções acadêmicas.
          </p>
        </div>
        <NewEssaysReference />
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
          {Array.from({ length: 6 }).map((_, i) => (
            <EssaysReferenceSkeleton key={i} />
          ))}
        </div>
      ) : filteredEssays.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEssays.map((essay) => (
            <EssaysReferenceCard
              key={essay.id}
              essay={essay}
              onEdit={(id) => console.log("Editando...", id)}
              onDelete={(id) => confirm("Deseja realmente excluir?")}
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
    </section>
  );
}