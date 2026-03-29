import { useMemo, useState } from "react";

import { EssaysReferenceCard } from "@components/domain/EssaysReference/EssaysReferenceCard";
import { NewEssaysReference } from "@components/domain/EssaysReference/NewEssaysReference";
import { EmptyState } from "@components/feedback/EmptyState";
import { ModelsEssayFilter } from "@components/ui/Filters/ModelsEssayFilter";
import { EssaysReferenceSkeleton } from "@components/ui/Loading/EssaysReferenceSkeleton";

import { useReferenceEssay } from "@hooks/useReferenceEssay";
import { FileText } from "lucide-react";
import { Pagination } from "@components/domain/EssaysReference/Pagination/Pagination";
import { showMessage } from "adapters/showMessage";
import { toast } from "react-toastify";
import { Dialog } from "@components/feedback/DialogConfirm/Dialog";
import type { DialogProps } from "types/DialogProps";

export default function AdminModelsEssay() {
  const { stateReferenceEssay, deleteReferenceEssay } = useReferenceEssay();
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

  const handleDelete = async (id: number) => {
      showMessage.dismiss();
  
      toast(Dialog, {
        data: "Tem certeza que deseja excluir esta redação?",
        autoClose: false,
        closeOnClick: false,
        closeButton: false,
        draggable: false,
        onClose: async (props) => {
          let isConfirmed = false;

          if (typeof props === "object" && props !== null && "data" in props) {
            isConfirmed = (props as DialogProps).data === true;
          } else if (props === true) {
            isConfirmed = true;
          }
  
          if (isConfirmed) {
            try {
              const responseDeleteEssay = await deleteReferenceEssay(id);
              showMessage.success(responseDeleteEssay.message);
            } catch (err) {
              const errorMessage = err instanceof Error ? err.message : "Erro ao excluir redação";
  
              console.error(err);
              showMessage.error(errorMessage);
            }
          }
        }
      });
    };

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
              onDelete={() => handleDelete(essay.id)}
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


      {essays.length > 0 && (
        <Pagination
          currentPage={page}
          totalPages={3}
          onPageChange={setPage}
        />
      )}
    </section>
  );
}