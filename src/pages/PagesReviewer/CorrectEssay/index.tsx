import { useState } from "react";
import { Play } from "lucide-react";
import { CorrectEssayPage } from "./CorrectEssayPage";
import { useEssay } from "@hooks/useEssay";
import { ListLoading } from "@components/ui/Loading/ListLoading";

export function CorrectEssay() {
  const [selectedEssay, setSelectedEssay] = useState(null);

  const { stateEssay } = useEssay();
  const { essays, loading } = stateEssay;

  if (selectedEssay) {
    return (
      <CorrectEssayPage
        essay={selectedEssay}
        goBack={() => setSelectedEssay(null)}
      />
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 p-4 md:p-8 font-sans">
      <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-6">
        Painel do Corretor
      </h1>

      <div className="w-full bg-white rounded-xl shadow-sm overflow-x-auto">
        <table className="w-full min-w-[600px] border-collapse">
          <thead className="bg-slate-50 border-b border-slate-200">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-600">
                Estudante
              </th>

              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-600">
                Tema
              </th>

              <th className="px-6 py-4 text-center text-sm font-semibold text-slate-600">
                Data
              </th>

              <th className="px-6 py-4 text-right text-sm font-semibold text-slate-600">
                Ação
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-100">
            {loading ? (
              <tr>
                <td
                  colSpan={4}
                  className="text-center py-10 text-slate-500"
                >
                  <ListLoading text="Carregando redações..." />
                </td>
              </tr>
            ) : essays?.length === 0 ? (
              <tr>
                <td
                  colSpan={4}
                  className="text-center py-10 text-slate-500"
                >
                  Nenhuma redação encontrada
                </td>
              </tr>
            ) : (
              essays.map((essay) => (
                <tr
                  key={essay.id}
                  className="hover:bg-indigo-50/30 transition-colors"
                >
                  <td className="px-6 py-4 text-slate-700 font-medium">
                    {essay.user?.name}
                  </td>

                  <td className="px-6 py-4 text-slate-600">
                    {essay.title}
                  </td>

                  <td className="px-6 py-4 text-center text-slate-500">
                    {new Date(essay.createdAt).toLocaleDateString("pt-BR")}
                  </td>

                  <td className="px-6 py-4 text-right">
                    <button
                      onClick={() => setSelectedEssay(essay)}
                      className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition-all whitespace-nowrap cursor-pointer"
                    >
                      Corrigir <Play size={14} fill="white" />
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}