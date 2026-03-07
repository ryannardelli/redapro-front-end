import { ActivitiesStudentTable } from "@components/domain/Dashboard/ActivityStudentTable";
import { FileText, CheckCircle2, Clock, XCircle } from "lucide-react";

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
      
      <ActivitiesStudentTable />

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
    </div>
  );
}