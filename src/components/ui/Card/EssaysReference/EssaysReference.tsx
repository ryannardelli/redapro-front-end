import { 
  Star, Edit3, Trash2, Download, Calendar, Bookmark, FileText 
} from "lucide-react";

interface Essay {
  id: number;
  title: string;
  content: string;
  year: number;
  pdf_url?: string | null;
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

      <div className="px-6 py-4 bg-slate-50/50 flex items-center justify-between border-t border-slate-50">
        <div className="flex items-center gap-1">
          <button 
            onClick={() => onEdit?.(essay.id)}
            className="p-2.5 text-slate-400 hover:text-indigo-600 hover:bg-white hover:shadow-sm rounded-xl transition-all cursor-pointer"
            title="Editar"
          >
            <Edit3 size={18} />
          </button>
          <button 
            onClick={() => onDelete?.(essay.id)}
            className="p-2.5 text-slate-400 hover:text-red-500 hover:bg-white hover:shadow-sm rounded-xl transition-all cursor-pointer"
            title="Excluir"
          >
            <Trash2 size={18} />
          </button>
        </div>

        <button 
          disabled={!essay.pdf_url}
          onClick={() => essay.pdf_url && window.open(essay.pdf_url, '_blank')}
          className={`flex cursor-pointer items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
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