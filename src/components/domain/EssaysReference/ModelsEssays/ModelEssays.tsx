import { Search, ChevronLeft, ChevronRight, FileText } from "lucide-react";
import { EssaysReferenceCard } from "../EssaysReferenceCard";
import { EssaysReferenceSkeleton } from "@components/ui/Loading/EssaysReferenceSkeleton";
import { useReferenceEssay } from "@hooks/useReferenceEssay";
import { EmptyState } from "@components/feedback/EmptyState";

export function ModelsEssays() {
 const { stateReferenceEssay } = useReferenceEssay();
 const loading = stateReferenceEssay.loading;
 const essays = stateReferenceEssay.essays ?? [];

  return (
    <section className="px-6 py-16 max-w-7xl mx-auto bg-slate-50 min-h-screen">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-black text-slate-900 tracking-tight">
          Modelos <span className="text-purple-600">Nota 1000</span>
        </h1>
        <p className="text-slate-600 mt-3 text-lg max-w-2xl mx-auto">
          Explore nossa biblioteca curada de redações nota máxima e domine as técnicas de escrita.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-4 mb-12 bg-white p-4 rounded-2xl shadow-sm border border-slate-200">
        <div className="relative flex-[2]">
          <Search size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="Qual tema você quer estudar hoje?"
            className="w-full pl-12 pr-4 py-3 bg-slate-50 border-none rounded-xl focus:ring-2 focus:ring-purple-500 transition-all outline-none"
          />
        </div>
        <div className="flex flex-1 gap-2">
          <select className="flex-1 bg-slate-50 border-none rounded-xl px-4 py-3 text-slate-600 focus:ring-2 focus:ring-purple-500 outline-none">
            <option>Todos os tipos</option>
            <option>Dissertativa</option>
            <option>Argumentativa</option>
          </select>
          <select className="flex-1 bg-slate-50 border-none rounded-xl px-4 py-3 text-slate-600 focus:ring-2 focus:ring-purple-500 outline-none">
            <option>Recentes</option>
            <option>Populares</option>
          </select>
        </div>
      </div>

       {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Array.from({ length: essays.length }).map((_, i) => (
            <EssaysReferenceSkeleton key={i} />
          ))}
        </div>
      ) : essays.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {essays.map((essay) => (
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

      <div className="flex justify-center items-center mt-16 gap-6">
        <button className="group flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-purple-600 transition-all cursor-pointer">
          <ChevronLeft size={20} className="group-hover:-translate-x-1 transition-transform" /> Anterior
        </button>
        <div className="flex gap-2">
          {[1, 2, 3].map(n => (
            <button key={n} className={`w-10 h-10 rounded-full font-bold text-sm transition-all ${n === 1 ? 'bg-purple-600 text-white cursor-pointer' : 'text-slate-400 hover:bg-slate-200'}`}>
              {n}
            </button>
          ))}
        </div>
        <button className="group flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-purple-600 transition-all cursor-pointer">
          Próximo <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </section>
  );
}