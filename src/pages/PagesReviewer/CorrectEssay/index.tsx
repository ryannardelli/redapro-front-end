import { useState } from "react";
import { CorrectEssayPage } from "./CorrectEssayPage";
import { useEssay } from "@hooks/useEssay";
import { ListLoading } from "@components/ui/Loading/ListLoading";
import { Calendar, FileText, Play, Loader2 } from "lucide-react";

export function CorrectEssay() {
  const [selectedEssay, setSelectedEssay] = useState(null);
  const { stateEssay, startReview } = useEssay();
  const { essays, loading } = stateEssay;
  const [starting, setStarting] = useState<number | null>(null);

  const [activeTab, setActiveTab] = useState<"PENDENTE" | "EM_CORRECAO">("PENDENTE");

  if (selectedEssay) {
    return (
      <CorrectEssayPage
        essay={selectedEssay}
        goBack={() => setSelectedEssay(null)}
      />
    );
  }

  const handleStartCorrection = async (essayId: number) => {
    try {
      setStarting(essayId);
      const updatedEssay = await startReview(essayId);
      setSelectedEssay(updatedEssay);
    } catch (error) {
      console.error(error);
      alert(error.message || "Erro ao iniciar correção.");
    } finally {
      setStarting(null);
    }
  };

  const filteredEssays = essays.filter(e => e.status === activeTab);

  return (
    <div className="min-h-screen bg-[#F8FAFC] p-4 md:p-10 font-sans text-slate-900">
      <header className="max-w-6xl mx-auto mb-8">
        <h1 className="text-2xl md:text-4xl font-black tracking-tight text-slate-900">
          Painel do Corretor
        </h1>
        <p className="text-slate-500 mt-2 font-medium">
          {essays?.length || 0} redações aguardando sua avaliação profissional.
        </p>
      </header>

      <main className="max-w-6xl mx-auto">
        <div className="flex gap-4 mb-6">
          {["PENDENTE", "EM_CORRECAO"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab as "PENDENTE" | "EM_CORRECAO")}
              className={`px-5 py-2 cursor-pointer rounded-xl font-semibold transition-all ${
                activeTab === tab
                  ? "bg-indigo-600 text-white shadow-md"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              {tab === "PENDENTE" ? "Pendente" : "Em Correção"}
            </button>
          ))}
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
          {loading ? (
            <div className="py-20">
              <ListLoading text="Organizando mesa de correção..." />
            </div>
          ) : filteredEssays.length === 0 ? (
            <div className="py-20 text-center">
              <div className="bg-slate-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="text-slate-300" size={32} />
              </div>
              <p className="text-slate-500 font-medium">
                Nenhuma redação {activeTab === "PENDENTE" ? "pendente" : "em correção"} no momento.
              </p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-slate-50/50 border-b border-slate-100">
                    <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-slate-400">Estudante</th>
                    <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-slate-400">Tema da Redação</th>
                    <th className="px-6 py-4 text-center text-xs font-bold uppercase tracking-wider text-slate-400">Data de Envio</th>
                    <th className="px-6 py-4 text-right text-xs font-bold uppercase tracking-wider text-slate-400">Ação</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  {filteredEssays.map((essay) => (
                    <tr key={essay.id} className="group hover:bg-indigo-50/40 transition-all duration-200">
                      <td className="px-6 py-5">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center font-bold text-sm border border-indigo-200">
                            {essay.user?.name?.charAt(0) || "U"}
                          </div>
                          <div>
                            <p className="font-semibold text-slate-800 leading-none">{essay.user?.name}</p>
                            <p className="text-xs text-slate-400 mt-1">ID: #{essay.id}</p>
                          </div>
                        </div>
                      </td>

                      <td className="px-6 py-5">
                        <div className="max-w-[300px]">
                          <p className="text-slate-700 font-medium truncate group-hover:text-indigo-900 transition-colors">
                            {essay.title}
                          </p>
                        </div>
                      </td>

                      <td className="px-6 py-5">
                        <div className="flex flex-col items-center">
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-100 text-slate-600 text-xs font-semibold">
                            <Calendar size={12} />
                            {new Date(essay.createdAt).toLocaleDateString("pt-BR")}
                          </span>
                        </div>
                      </td>

                      <td className="px-6 py-5 text-right">
                        {activeTab === "PENDENTE" ? (
                          <button
                            onClick={() => handleStartCorrection(essay.id)}
                            disabled={starting === essay.id}
                            className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-900 text-white text-sm font-bold rounded-xl hover:bg-indigo-600 active:scale-95 transition-all shadow-sm hover:shadow-indigo-200 cursor-pointer disabled:opacity-50"
                          >
                            {starting === essay.id ? (
                              <Loader2 className="animate-spin" size={14} />
                            ) : (
                              <Play size={14} fill="currentColor" />
                            )}
                            {starting === essay.id ? "Iniciando..." : "Iniciar Correção"}
                          </button>
                        ) : (
                          <button
                            onClick={() => setSelectedEssay(essay)}
                            className="inline-flex items-center gap-2 px-5 py-2.5 bg-indigo-600 text-white text-sm font-bold rounded-xl hover:bg-indigo-700 active:scale-95 transition-all shadow-sm hover:shadow-indigo-200 cursor-pointer"
                          >
                            Continuar Correção
                          </button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}