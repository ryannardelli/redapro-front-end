import { FileText, ChevronLeft, ChevronRight, Eye } from "lucide-react";

export function HistoryEssays() {
  const data = [
    { id: 1, tema: "Impactos do Meio Ambiente", aluno: "Ryan Nardelli", corretor: "Prof. Ana Souza", data: "05/10/2025", hora: "12:30", nota: 960, status: "excellent" },
    { id: 2, tema: "Avanços da Tecnologia", aluno: "Maria Clara", corretor: "Prof. João Lima", data: "04/10/2025", hora: "09:15", nota: 750, status: "average" },
    { id: 3, tema: "Mobilidade e Transporte", aluno: "João Lima", corretor: "Prof. Ana Souza", data: "03/10/2025", hora: "16:45", nota: 400, status: "low" },
  ];

  const getScoreStyle = (score) => {
    if (score >= 900) return "bg-emerald-50 text-emerald-700 border-emerald-100";
    if (score >= 600) return "bg-amber-50 text-amber-700 border-amber-100";
    return "bg-rose-50 text-rose-700 border-rose-100";
  };

  return (
    <div className="w-full bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
      {/* Título da Seção (Opcional, mas ajuda no contexto) */}
      <div className="p-6 border-b border-slate-100">
        <h2 className="text-lg font-bold text-slate-800">Histórico de Produção</h2>
        <p className="text-sm text-slate-500">Acompanhe seu desempenho em cada tema praticado.</p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50/50">
              <th className="p-4 text-xs font-bold uppercase tracking-wider text-slate-500">Tema da Redação</th>
              <th className="p-4 text-xs font-bold uppercase tracking-wider text-slate-500 hidden md:table-cell">Corretor</th>
              <th className="p-4 text-xs font-bold uppercase tracking-wider text-slate-500 hidden sm:table-cell">Data</th>
              <th className="p-4 text-xs font-bold uppercase tracking-wider text-slate-500 text-center">Nota Final</th>
              <th className="p-4 text-xs font-bold uppercase tracking-wider text-slate-500 text-right">Ação</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-100">
            {data.map((item) => (
              <tr key={item.id} className="hover:bg-slate-50 transition-all group">
                {/* Tema */}
                <td className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 bg-purple-50 text-purple-600 rounded-xl group-hover:scale-110 transition-transform">
                      <FileText size={20} />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-900 leading-none mb-1">{item.tema}</p>
                      <p className="text-xs text-slate-500 md:hidden">Corretor: {item.corretor}</p>
                    </div>
                  </div>
                </td>

                {/* Corretor */}
                <td className="p-4 hidden md:table-cell">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-[10px] font-bold text-slate-600 border border-slate-200">
                      {item.corretor.split(' ').pop().charAt(0)}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-700">{item.corretor}</p>
                      <span className="text-[10px] text-purple-600 font-bold uppercase tracking-tighter">Especialista</span>
                    </div>
                  </div>
                </td>

                {/* Data */}
                <td className="p-4 hidden sm:table-cell">
                  <p className="text-sm font-medium text-slate-700">{item.data}</p>
                  <p className="text-[10px] text-slate-400 font-bold">{item.hora}</p>
                </td>

                {/* Nota */}
                <td className="p-4 text-center">
                  <div className={`inline-flex items-center justify-center min-w-[60px] px-3 py-1.5 rounded-lg border font-black text-sm shadow-sm ${getScoreStyle(item.nota)}`}>
                    {item.nota}
                  </div>
                </td>

                {/* Ação */}
                <td className="p-4 text-right">
                  <button className="inline-flex items-center gap-2 px-3 py-2 bg-white border border-slate-200 rounded-lg text-slate-600 hover:text-purple-600 hover:border-purple-200 hover:shadow-sm transition-all text-xs font-bold">
                    <Eye size={14} />
                    <span className="hidden lg:inline">Ver Detalhes</span>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Paginação Estilizada */}
      <div className="p-4 bg-slate-50/50 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="text-xs font-medium text-slate-500">Página</span>
          <div className="flex gap-1">
            <button className="w-8 h-8 rounded-md bg-purple-600 text-white text-xs font-bold">1</button>
            <button className="w-8 h-8 rounded-md bg-white border border-slate-200 text-slate-600 text-xs font-bold hover:bg-slate-50 transition-colors">2</button>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button className="flex items-center gap-1 px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-xs font-bold text-slate-600 hover:bg-slate-50 transition-all disabled:opacity-50">
            <ChevronLeft size={16} /> Anterior
          </button>
          <button className="flex items-center gap-1 px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-xs font-bold text-slate-600 hover:bg-slate-50 transition-all">
            Próximo <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}