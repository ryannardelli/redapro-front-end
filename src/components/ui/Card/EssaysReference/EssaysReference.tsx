// import { 
//   Star, 
//   Edit3, 
//   Trash2, 
//   Download, 
//   ExternalLink,
//   Calendar,
//   Bookmark
// } from "lucide-react";

// interface Essay {
//   id: number;
//   title: string;
//   content: string;
//   year: number;
//   categoryId: number; 
//   categoryName?: string;
// }

// interface EssaysReferenceProps {
//   essay: Essay;
//   onEdit?: (id: number) => void;
//   onDelete?: (id: number) => void;
//   onView?: (id: number) => void;
//   onDownload?: (id: number) => void;
// }

// export function EssaysReference({ essay, onEdit, onDelete, onView, onDownload }: EssaysReferenceProps) {
//   return (
//     <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col group hover:shadow-md hover:border-indigo-200 transition-all duration-300">
      
//       <div className="px-5 pt-5 flex justify-between items-start">
//         <span className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-indigo-50 text-indigo-600 text-[10px] font-bold uppercase tracking-wider">
//           <Bookmark size={12} />
//           {essay.categoryName || "Geral"}
//         </span>
        
//         <div className="flex items-center gap-1 bg-amber-50 px-2 py-1 rounded-lg text-amber-600 font-bold text-sm">
//           <Star size={14} className="fill-amber-500 stroke-amber-500" />
//           <span>1000</span>
//         </div>
//       </div>

//       <div className="px-5 py-4 flex-1">
//         <h2 className="text-base font-bold text-gray-800 mb-2 leading-snug group-hover:text-indigo-600 transition-colors line-clamp-2">
//           {essay.title}
//         </h2>
//         <p className="text-gray-500 text-xs leading-relaxed line-clamp-3 mb-4">
//           {essay.content}
//         </p>
        
//         <div className="flex items-center gap-2 pt-4 border-t border-gray-50">
//           <div className="flex items-center gap-1 text-gray-400 font-medium text-[11px]">
//             <Calendar size={13} />
//             <span>Edição {essay.year}</span>
//           </div>
//         </div>
//       </div>

//       <div className="bg-gray-50/50 px-5 py-3 flex items-center justify-end border-t border-gray-100">
//         <div className="flex items-center gap-1">
//           <button 
//             onClick={() => onDownload?.(essay.id)}
//             title="Baixar PDF"
//             className="p-2 text-gray-500 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-all"
//           >
//             <Download size={18} />
//           </button>
          
//           <div className="w-[1px] h-4 bg-gray-200 mx-1" />

//           <button 
//             onClick={() => onEdit?.(essay.id)}
//             title="Editar Redação"
//             className="p-2 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all"
//           >
//             <Edit3 size={18} />
//           </button>

//           <button 
//             onClick={() => onView?.(essay.id)}
//             title="Visualizar"
//             className="p-2 text-gray-500 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-all"
//           >
//             <ExternalLink size={18} />
//           </button>

//           <button 
//             onClick={() => onDelete?.(essay.id)}
//             title="Excluir"
//             className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all"
//           >
//             <Trash2 size={18} />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

import { 
  Star, Edit3, Trash2, Download, Calendar, Bookmark, FileText 
} from "lucide-react";

interface Essay {
  id: number;
  title: string;
  content: string;
  year: number;
  pdf_url?: string | null; // Conforme seu log do back-end
  categoryId?: number; 
  categoryName?: string;
}

interface EssaysReferenceProps {
  essay: Essay;
  onEdit?: (id: number) => void;
  onDelete?: (id: number) => void;
}

export function EssaysReference({ essay, onEdit, onDelete }: EssaysReferenceProps) {
  return (
    <div className="bg-white rounded-[24px] border border-slate-100 overflow-hidden flex flex-col group hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)] hover:-translate-y-1 transition-all duration-500">
      
      {/* Header do Card */}
      <div className="p-6 pb-0 flex justify-between items-start">
        <div className="flex items-center gap-2">
           <div className="w-8 h-8 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600">
             <FileText size={16} />
           </div>
           <span className="text-[11px] font-bold text-slate-400 uppercase tracking-[0.1em]">
             Ref. #{essay.id}
           </span>
        </div>
        
        <div className="flex items-center gap-1.5 bg-amber-50 px-3 py-1.5 rounded-full text-amber-600 font-bold text-xs">
          <Star size={12} className="fill-amber-500 stroke-amber-500" />
          <span>NOTA 1000</span>
        </div>
      </div>

      {/* Conteúdo Principal */}
      <div className="p-6 flex-1">
        <h2 className="text-lg font-bold text-slate-800 mb-3 leading-tight group-hover:text-indigo-600 transition-colors line-clamp-2">
          {essay.title}
        </h2>
        <p className="text-slate-500 text-sm leading-relaxed line-clamp-4 mb-6 italic">
          "{essay.content}"
        </p>
        
        <div className="flex items-center gap-4 text-slate-400">
          <div className="flex items-center gap-1.5 text-xs font-semibold">
            <Calendar size={14} className="text-indigo-400" />
            <span>ENEM {essay.year}</span>
          </div>
          <div className="flex items-center gap-1.5 text-xs font-semibold">
            <Bookmark size={14} className="text-indigo-400" />
            <span>{essay.categoryName || "Argumentativo"}</span>
          </div>
        </div>
      </div>

      {/* Ações Minimalistas */}
      <div className="px-6 py-4 bg-slate-50/50 flex items-center justify-between border-t border-slate-50">
        <div className="flex items-center gap-1">
          <button 
            onClick={() => onEdit?.(essay.id)}
            className="p-2.5 text-slate-400 hover:text-indigo-600 hover:bg-white hover:shadow-sm rounded-xl transition-all"
            title="Editar"
          >
            <Edit3 size={18} />
          </button>
          <button 
            onClick={() => onDelete?.(essay.id)}
            className="p-2.5 text-slate-400 hover:text-red-500 hover:bg-white hover:shadow-sm rounded-xl transition-all"
            title="Excluir"
          >
            <Trash2 size={18} />
          </button>
        </div>

        {/* Botão de Download Condicional (conforme pdf_url do back) */}
        <button 
          disabled={!essay.pdf_url}
          onClick={() => essay.pdf_url && window.open(essay.pdf_url, '_blank')}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
            essay.pdf_url 
            ? "bg-indigo-600 text-white hover:bg-indigo-700 shadow-md shadow-indigo-200" 
            : "bg-slate-200 text-slate-400 cursor-not-allowed"
          }`}
        >
          <Download size={14} />
          {essay.pdf_url ? "BAIXAR PDF" : "SEM PDF"}
        </button>
      </div>
    </div>
  );
}