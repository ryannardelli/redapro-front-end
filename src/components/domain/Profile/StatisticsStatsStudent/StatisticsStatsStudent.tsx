// import { CheckCircle2, FileText, Target } from "lucide-react";

// export function StatisticsStatsStudent() {
    
//   const stats = [
//     { label: "Redações Enviadas", value: "20", icon: <FileText className="text-purple-600" />, bg: "bg-purple-50" },
//     { label: "Corrigidas", value: "18", icon: <CheckCircle2 className="text-emerald-600" />, bg: "bg-emerald-50" },
//     { label: "Média Geral", value: "720", icon: <Target className="text-blue-600" />, bg: "bg-blue-50" },
//   ];
//     return(
//          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
//         {stats.map((item, i) => (
//           <div key={i} className="bg-white p-6 rounded-3xl border border-slate-200 flex items-center gap-4 hover:shadow-xl hover:shadow-slate-100 transition-all group">
//             <div className={`p-4 rounded-[1.5rem] transition-transform group-hover:scale-110 ${item.bg}`}>
//               {item.icon}
//             </div>
//             <div>
//               <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{item.label}</p>
//               <p className="text-3xl font-black text-slate-900 tracking-tight">{item.value}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     );
// }

import { CheckCircle2, FileText, Target } from "lucide-react";
import { StatCardSkeleton } from "@components/ui/Loading/StatCardSkeleton";
import { useDashboard } from "@hooks/useDashboard";

export function StatisticsStatsStudent() {
  const { stateDashboard } = useDashboard();
  const { studentStats, loading } = stateDashboard;

  if (loading) {
    return (
      <section className="px-4 py-12 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <StatCardSkeleton />
          <StatCardSkeleton />
          <StatCardSkeleton />
        </div>
      </section>
    );
  }

  return (
    <section className="px-4 py-12 mx-auto max-w-7xl">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div className="bg-white p-6 rounded-3xl border border-slate-200 flex items-center gap-4 hover:shadow-xl hover:shadow-slate-100 transition-all group">
          <div className="p-4 rounded-[1.5rem] bg-purple-50 transition-transform group-hover:scale-110">
            <FileText className="text-purple-600" />
          </div>
          <div>
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
              Redações Enviadas
            </p>
            <p className="text-3xl font-black text-slate-900 tracking-tight">
              {studentStats?.totalEssays ?? 0}
            </p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-3xl border border-slate-200 flex items-center gap-4 hover:shadow-xl hover:shadow-slate-100 transition-all group">
          <div className="p-4 rounded-[1.5rem] bg-emerald-50 transition-transform group-hover:scale-110">
            <CheckCircle2 className="text-emerald-600" />
          </div>
          <div>
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
              Redações Enviadas
            </p>
            <p className="text-3xl font-black text-slate-900 tracking-tight">
              {studentStats?.totalEssays ?? 0}
            </p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-3xl border border-slate-200 flex items-center gap-4 hover:shadow-xl hover:shadow-slate-100 transition-all group">
          <div className="p-4 rounded-[1.5rem] bg-blue-50 transition-transform group-hover:scale-110">
            <Target className="text-blue-600" />
          </div>
          <div>
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
              Média Geral
            </p>
            <p className="text-3xl font-black text-slate-900 tracking-tight">
              {studentStats?.averageScore ?? 0}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}