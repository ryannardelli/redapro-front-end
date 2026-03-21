import { Eye } from "lucide-react";
import { useState } from "react";
import { ModalShowBase } from "@components/ui/Modal/ModalShowBase";
import type { Essay } from "models/Essay";
import { ExibitionMoreEssay } from "@components/domain/Essay/ExibitionMoreEssay";

interface ViewEssayNotaMilProps {
  essay: Essay;
  loading?: boolean;
  title?: string;
  className?: string;
}

export function ViewMoreEssayTopScore({
  essay,
  loading = false,
  title = "Ver Redação Nota 1000",
  className = "",
}: ViewEssayNotaMilProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        disabled={loading}
        title={title}
        className={`p-2.5 text-slate-400 hover:text-indigo-600 hover:bg-white hover:shadow-sm rounded-xl transition-all cursor-pointer ${
          loading
            ? "text-slate-400 hover:text-indigo-600 hover:bg-white cursor-not-allowed"
            : "text-slate-400 hover:text-indigo-600 hover:bg-white cursor-pointer"
        } ${className}`}
      >
        <Eye size={18} />
      </button>

      <ModalShowBase
        title="Redação Nota 1000"
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <div className="space-y-6">
          <div className="flex justify-center">
            <span className="px-4 py-2 bg-yellow-100 text-yellow-700 font-bold text-sm rounded-full uppercase tracking-widest">
              Redação Nota 1000
            </span>
          </div>

          <ExibitionMoreEssay
            title={essay.title}
            category={essay.category?.name ?? "Sem categoria"}
            content={essay.content}
          />

          <div className="mt-8 text-center">
            <p className="text-sm text-gray-500 italic">
              Exemplo de redação de alto desempenho com estrutura exemplar,
              argumentação consistente e repertório sociocultural.
            </p>
          </div>
        </div>
      </ModalShowBase>
    </>
  );
}