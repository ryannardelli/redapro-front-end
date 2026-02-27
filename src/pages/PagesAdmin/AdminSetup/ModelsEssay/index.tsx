// import { EssaysReferenceCard } from "@components/domain/EssaysReference/EssaysReferenceCard";
// import { NewEssaysReference } from "@components/domain/EssaysReference/NewEssaysReference";
// import { EssaysReferenceSkeleton } from "@components/ui/Loading/EssaysReferenceSkeleton";
// import { useReferenceEssay } from "@hooks/useReferenceEssay";
// import { Search, Filter } from "lucide-react";

// export default function AdminModelsEssay() {
//   const { stateReferenceEssay } = useReferenceEssay();
//   const loading = stateReferenceEssay.loading;;
  
//   const essays = stateReferenceEssay.essays ?? [];

//   return (
//     <section className="px-6 py-10 max-w-7xl mx-auto bg-[#FAFAFA] min-h-screen">
//       <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
//         <div>
//           <h1 className="text-4xl font-black text-slate-900 tracking-tight">
//             Modelos <span className="text-indigo-600">Nota 1000</span>
//           </h1>
//           <p className="text-slate-500 mt-2 text-lg">
//             Gerenciamento de referências e produções acadêmicas.
//           </p>
//         </div>
//         <NewEssaysReference />
//       </div>

//       <div className="flex flex-col md:flex-row items-center gap-4 mb-10">
//         <div className="relative flex-1 w-full">
//           <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
//           <input
//             type="text"
//             placeholder="Pesquisar por título ou conteúdo..."
//             className="w-full pl-11 pr-4 py-3 bg-white border border-slate-200 rounded-2xl focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 outline-none transition-all shadow-sm"
//           />
//         </div>
        
//         <div className="flex items-center gap-3 w-full md:w-auto">
//           <div className="relative flex-1 md:flex-none">
//             <Filter size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
//             <select className="pl-9 pr-8 py-3 bg-white border border-slate-200 rounded-2xl outline-none focus:ring-4 focus:ring-indigo-500/10 text-slate-600 appearance-none font-medium cursor-pointer shadow-sm">
//               <option value="">Todos os anos</option>
//               <option value="2023">2023</option>
//               <option value="2022">2022</option>
//             </select>
//           </div>
          
//           <div className="bg-white border border-slate-200 px-4 py-3 rounded-2xl text-sm font-semibold text-slate-600 shadow-sm">
//             {essays.length} <span className="text-slate-400 font-normal ml-1 text-xs uppercase tracking-wider">itens</span>
//           </div>
//         </div>
//       </div>

//       {loading ? (
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {Array.from({ length: stateReferenceEssay.essays.length }).map((_, i) => (
//             <EssaysReferenceSkeleton key={i} />
//           ))}
//         </div>
//       ) : (
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {essays.map((essay) => (
//             <EssaysReferenceCard 
//               key={essay.id} 
//               essay={essay} 
//               onEdit={(id) => console.log("Editando...", id)}
//               onDelete={(id) => confirm("Deseja realmente excluir?")}
//             />
//           ))}
//         </div>
//       )}
//     </section>
//   );
// }

import { EssaysReferenceCard } from "@components/domain/EssaysReference/EssaysReferenceCard";
import { NewEssaysReference } from "@components/domain/EssaysReference/NewEssaysReference";
import { EmptyState } from "@components/feedback/EmptyState";
import { EssaysReferenceSkeleton } from "@components/ui/Loading/EssaysReferenceSkeleton";
import { useReferenceEssay } from "@hooks/useReferenceEssay";
import { Search, Filter, FileX, FileText } from "lucide-react"; // Importação do ícone de vazio

export default function AdminModelsEssay() {
  const { stateReferenceEssay } = useReferenceEssay();
  const loading = stateReferenceEssay.loading;
  const essays = stateReferenceEssay.essays ?? [];

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

      <div className="flex flex-col md:flex-row items-center gap-4 mb-10">
        <div className="relative flex-1 w-full">
          <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="Pesquisar por título ou conteúdo..."
            className="w-full pl-11 pr-4 py-3 bg-white border border-slate-200 rounded-2xl focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 outline-none transition-all shadow-sm"
          />
        </div>
        
        <div className="flex items-center gap-3 w-full md:w-auto">
          <div className="relative flex-1 md:flex-none">
            <Filter size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <select className="pl-9 pr-8 py-3 bg-white border border-slate-200 rounded-2xl outline-none focus:ring-4 focus:ring-indigo-500/10 text-slate-600 appearance-none font-medium cursor-pointer shadow-sm">
              <option value="">Todos os anos</option>
              <option value="2023">2023</option>
              <option value="2022">2022</option>
            </select>
          </div>
          
          <div className="bg-white border border-slate-200 px-4 py-3 rounded-2xl text-sm font-semibold text-slate-600 shadow-sm">
            {essays.length} <span className="text-slate-400 font-normal ml-1 text-xs uppercase tracking-wider">itens</span>
          </div>
        </div>
      </div>

      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Array.from({ length: 6 }).map((_, i) => (
            <EssaysReferenceSkeleton key={i} />
          ))}
        </div>
      ) : essays.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {essays.map((essay) => (
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
            description="Não existem modelos cadastrados para os filtros selecionados ou não há nenhuma redação cadastrada."
          />
      )}
    </section>
  );
}