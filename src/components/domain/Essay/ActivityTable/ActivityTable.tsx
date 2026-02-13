import { FileText, CheckCircle2, Clock, XCircle, ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react";

export function ActivityTable() {
  const activities = [
    {
      id: 1,
      tema: "Impactos da IA na Educação",
      tipo: "Redação Enviada",
      responsavel: "Ryan Nardelli",
      papel: "Aluno",
      data: "05 Out 2025",
      hora: "12:30",
      status: "Pendente",
      statusColor: "text-amber-700 bg-amber-50 border-amber-100",
      icon: <Clock size={16} className="text-amber-500" />,
      progress: 25,
      progressColor: "bg-amber-500"
    },
    {
      id: 2,
      tema: "Crise Hídrica no Brasil",
      tipo: "Correção Concluída",
      responsavel: "Prof. Ana Souza",
      papel: "Corretora",
      data: "05 Out 2025",
      hora: "09:45",
      status: "Concluído",
      statusColor: "text-emerald-700 bg-emerald-50 border-emerald-100",
      icon: <CheckCircle2 size={16} className="text-emerald-500" />,
      progress: 100,
      progressColor: "bg-emerald-500"
    },
    {
      id: 3,
      tema: "Mobilidade Urbana",
      tipo: "Redação Recusada",
      responsavel: "Sistema",
      papel: "Automático",
      data: "04 Out 2025",
      hora: "18:22",
      status: "Rejeitado",
      statusColor: "text-rose-700 bg-rose-50 border-rose-100",
      icon: <XCircle size={16} className="text-rose-500" />,
      progress: 0,
      progressColor: "bg-rose-500"
    }
  ];

  return (
    <div className="w-full bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
      {/* Desktop Table */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50/50 border-b border-slate-200">
              <th className="p-4 text-xs font-bold uppercase tracking-wider text-slate-500">Atividade e Tema</th>
              <th className="p-4 text-xs font-bold uppercase tracking-wider text-slate-500">Responsável</th>
              <th className="p-4 text-xs font-bold uppercase tracking-wider text-slate-500">Data de Envio</th>
              <th className="p-4 text-xs font-bold uppercase tracking-wider text-slate-500">Status</th>
              <th className="p-4 text-xs font-bold uppercase tracking-wider text-slate-500">Progresso</th>
              <th className="p-4 text-xs font-bold uppercase tracking-wider text-slate-500 text-right">Ações</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {activities.map((act) => (
              <tr key={act.id} className="hover:bg-slate-50/80 transition-colors group">
                <td className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-purple-50 rounded-lg text-purple-600">
                      <FileText size={20} />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-900">{act.tipo}</p>
                      <p className="text-xs text-slate-500">{act.tema}</p>
                    </div>
                  </div>
                </td>
                <td className="p-4">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-slate-200 flex items-center justify-center text-[10px] font-bold text-slate-600">
                      {act.responsavel.charAt(0)}
                    </div>
                    <span className="text-sm text-slate-700 font-medium">{act.responsavel}</span>
                  </div>
                </td>
                <td className="p-4">
                  <p className="text-sm text-slate-700 font-medium">{act.data}</p>
                  <p className="text-[10px] text-slate-400 font-bold uppercase">{act.hora}</p>
                </td>
                <td className="p-4">
                  <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold border ${act.statusColor}`}>
                    {act.icon}
                    {act.status}
                  </span>
                </td>
                <td className="p-4 w-40">
                  <div className="flex items-center gap-3">
                    <div className="flex-1 bg-slate-100 rounded-full h-1.5 overflow-hidden">
                      <div className={`h-full rounded-full transition-all duration-500 ${act.progressColor}`} style={{ width: `${act.progress}%` }}></div>
                    </div>
                    <span className="text-xs font-bold text-slate-600">{act.progress}%</span>
                  </div>
                </td>
                <td className="p-4 text-right">
                  <button className="p-2 hover:bg-white hover:shadow-sm rounded-lg text-slate-400 hover:text-purple-600 transition-all">
                    <MoreHorizontal size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile "Cards" View */}
      <div className="md:hidden divide-y divide-slate-100">
        {activities.map((act) => (
          <div key={act.id} className="p-4 flex flex-col gap-3">
            <div className="flex justify-between items-start">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-purple-50 rounded-lg text-purple-600">
                  <FileText size={18} />
                </div>
                <h3 className="font-bold text-slate-900 text-sm">{act.tema}</h3>
              </div>
              <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold border ${act.statusColor}`}>
                {act.status}
              </span>
            </div>
            <div className="flex justify-between text-xs text-slate-500">
              <span>{act.responsavel} • {act.data}</span>
              <span className="font-bold text-slate-900">{act.progress}%</span>
            </div>
            <div className="w-full bg-slate-100 rounded-full h-1.5">
              <div className={`h-full rounded-full ${act.progressColor}`} style={{ width: `${act.progress}%` }}></div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer Pagination */}
      <div className="p-4 bg-slate-50/50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs font-medium text-slate-500">
          Mostrando <span className="text-slate-900 font-bold">1-3</span> de 20 atividades acadêmicas
        </p>
        
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-xs text-slate-500 font-bold">VER</span>
            <select className="bg-white border border-slate-200 rounded-lg text-xs font-bold p-1 outline-none focus:ring-2 focus:ring-purple-500">
              <option>5</option>
              <option>10</option>
            </select>
          </div>

          <div className="flex items-center gap-1">
            <button className="p-2 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 disabled:opacity-50 transition-all">
              <ChevronLeft size={16} className="text-slate-600" />
            </button>
            <button className="p-2 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-all">
              <ChevronRight size={16} className="text-slate-600" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}