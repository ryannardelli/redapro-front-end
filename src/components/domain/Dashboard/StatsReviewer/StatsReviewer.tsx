import { StatCardSkeleton } from "@components/ui/Loading/StatCardSkeleton";
import { useDashboard } from "@hooks/useDashboard";
import { FileText, BarChart3, Calendar } from "lucide-react";
import { formatDate } from "utils/formatDate";

export function StatsReviewer() {
  const { stateDashboard } = useDashboard();

  const { reviewerStats, loading } = stateDashboard;

  if (loading) {
    return (
      <section className="px-4 py-12 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          <StatCardSkeleton />
          <StatCardSkeleton />
          <StatCardSkeleton />
        </div>
      </section>
    );
  }

  return (
    <section className="px-4 py-12 mx-auto max-w-7xl">
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">

        <div className="flex flex-row items-center p-5 bg-white rounded-xl shadow">
          <div className="flex items-center justify-center w-10 h-10 text-blue-700 bg-blue-100 rounded">
            <FileText className="w-5 h-5" />
          </div>

          <div className="ml-3">
            <h2 className="mb-1 text-lg font-bold text-gray-900">
              {reviewerStats?.totalReviewed ?? 0}
            </h2>

            <p className="text-sm text-gray-600">
              Total corrigidas
            </p>
          </div>
        </div>

        <div className="flex flex-row items-center p-5 bg-white rounded-xl shadow">
          <div className="flex items-center justify-center w-10 h-10 text-purple-700 bg-purple-100 rounded">
            <BarChart3 className="w-5 h-5" />
          </div>

          <div className="ml-3">
            <h2 className="mb-1 text-lg font-bold text-gray-900">
              {reviewerStats?.averageScore ?? 0}
            </h2>

            <p className="text-sm text-gray-600">
              Média de notas
            </p>
          </div>
        </div>

        <div>
          <div className="flex flex-row items-center p-5 bg-white rounded-xl shadow">
            <div className="flex items-center justify-center w-10 h-10 text-red-700 bg-red-100 rounded">
              <Calendar className="w-5 h-5" />
            </div>

            <div className="ml-3">
              <h2 className="mb-1 text-lg font-bold text-gray-900">
                {reviewerStats?.lastReviewed
                  ? formatDate(reviewerStats.lastReviewed)
                  : "-"}
              </h2>

              <p className="text-sm text-gray-600">
                Última correção
              </p>
            </div>
          </div>
      </div>

      </div>
    </section>
  );
}