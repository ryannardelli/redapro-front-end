import { Calendar, FileText, Target } from "lucide-react";
import { StatCardSkeleton } from "@components/ui/Loading/StatCardSkeleton";
import { useDashboard } from "@hooks/useDashboard";
import { formatDate } from "utils/formatDate";

export function StatisticsStatsReviewer() {
  const { stateDashboard } = useDashboard();
  const { reviewerStats, loading } = stateDashboard;

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
              Redações Corrigidas
            </p>
            <p className="text-3xl font-black text-slate-900 tracking-tight">
              {reviewerStats?.totalReviewed ?? 0}
            </p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-3xl border border-slate-200 flex items-center gap-4 hover:shadow-xl hover:shadow-slate-100 transition-all group">
          <div className="p-4 rounded-[1.5rem] bg-blue-50 transition-transform group-hover:scale-110">
            <Target className="text-blue-600" />
          </div>
          <div>
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
              Média de Notas
            </p>
            <p className="text-3xl font-black text-slate-900 tracking-tight">
              {reviewerStats?.averageScore ?? 0}
            </p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-3xl border border-slate-200 flex items-center gap-4 hover:shadow-xl hover:shadow-slate-100 transition-all group">
          <div className="p-4 rounded-[1.5rem] bg-emerald-50 transition-transform group-hover:scale-110">
            <Calendar className="text-emerald-600" />
          </div>
          <div>
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
              Última Correção
            </p>
            <p className="text-xl font-black text-slate-900 tracking-tight">
              {reviewerStats?.lastReviewed
                ? formatDate(reviewerStats.lastReviewed)
                : "-"}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}