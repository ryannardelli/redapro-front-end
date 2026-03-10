import { useState } from "react";
import { Eye, BookOpen, Award, Calendar, CheckCircle2 } from "lucide-react";
import { ModalViewBaseResult } from "@components/ui/Modal/ModalViewResultBase";

interface ShowResultEssayProps {
  essay: {
    id: number;
    title: string;
    content: string;
    note: number;
    category: { name: string; description: string };
    feedback: { [key: string]: number };
    status: string;
    createdAt: string;
  };
}

export function ShowResultEssay({ essay }: ShowResultEssayProps) {
  const [isOpen, setIsOpen] = useState(false);

  const dateFormatted = new Date(essay.createdAt).toLocaleDateString('pt-BR');

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 
        bg-indigo-600 text-white font-bold rounded-xl
        hover:bg-indigo-700 transition shadow-sm cursor-pointer"
      >
        <Eye size={18} /> Ver Resultado Detalhado
      </button>

        <ModalViewBaseResult
          title="Análise da Redação"
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          hideFooter
        >
        <div className="space-y-6 pb-6">
          
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4">
            <div>
              <div className="flex items-center gap-2 text-indigo-600 mb-1">
                <Award size={20} />
                <span className="text-sm font-bold uppercase tracking-wider">Pontuação Total</span>
              </div>
              <h2 className="text-4xl font-black text-slate-800">{essay.note}<span className="text-slate-400 text-lg">/1000</span></h2>
            </div>
            <div className="text-right flex flex-col items-end">
              <span className={`px-3 py-1 rounded-full text-xs font-bold ${essay.status === 'CORRIGIDA' ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'}`}>
                {essay.status}
              </span>
              <p className="text-slate-500 text-sm mt-2 flex items-center gap-1">
                <Calendar size={14} /> {dateFormatted}
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-slate-800 font-bold mb-3 flex items-center gap-2">
              <CheckCircle2 size={18} className="text-green-500" /> 
              Desempenho por Competência
            </h3>
            <div className="flex flex-col gap-3">
              {Object.entries(essay.feedback ?? {}).map(([key, value]) => (
                <div key={key} className="bg-white border border-slate-200 p-3 rounded-xl text-center shadow-sm">
                  <p className="text-slate-400 text-xs font-bold uppercase">{key}</p>
                  <p className="text-lg font-semibold">{value}</p>
                </div>
              ))}
            </div>
          </div>

          <hr className="border-slate-100" />

          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-slate-800 font-bold flex items-center gap-2">
                <BookOpen size={18} className="text-indigo-500" /> 
                Texto Original
              </h3>
              <span className="text-xs text-slate-400 bg-slate-100 px-2 py-1 rounded-md">
                {essay.category.name}
              </span>
            </div>
            
            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100">
              <h4 className="font-bold text-slate-700 mb-4 text-center text-lg italic">
                "{essay.title}"
              </h4>
              <p className="text-slate-600 leading-relaxed text-base whitespace-pre-line first-letter:text-3xl first-letter:font-bold first-letter:mr-1">
                {essay.content}
              </p>
            </div>
          </div>

        </div>
      </ModalViewBaseResult>
    </>
  );
}