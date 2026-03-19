import React from "react";
import { FileText } from "lucide-react";
import type { Essay } from "models/Essay";
import { useDashboard } from "@hooks/useDashboard";
import { formatDate } from "utils/formatDate";
import { TableSkeleton } from "@components/ui/Loading/TableSkeleton";
import { EmptyActivitiesStudent } from "@components/ui/feedback/EmptyActivitiesStudent";
import { getScoreStyle } from "utils/getScoreStyle";

export const ActivitiesStudentTable: React.FC = () => {
  const { stateDashboard } = useDashboard();
  const { recentEssays, loading } = stateDashboard;

  if (loading) {
    return <TableSkeleton columns={recentEssays.length} rows={recentEssays.length} />;
  }

  if (!recentEssays || recentEssays.length === 0) {
    return (
     <EmptyActivitiesStudent message="Você ainda não possui redações." />
    );
  }

  return (
    <div className="hidden md:block overflow-x-auto">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-slate-50/50 border-b border-slate-200">
            <th className="p-4 text-xs font-bold uppercase tracking-wider text-slate-500">
              Atividade e Tema
            </th>
            <th className="p-4 text-xs font-bold uppercase tracking-wider text-slate-500">
              Momento do envio
            </th>
            <th className="p-4 text-xs font-bold uppercase tracking-wider text-slate-500">
              Status
            </th>
            <th className="p-4 text-xs font-bold uppercase tracking-wider text-slate-500">
              Nota
            </th>
          </tr>
        </thead>

        <tbody className="divide-y divide-slate-100">
          {recentEssays.map((essay: Essay) => {
            let statusColor = "";
            switch (essay.status) {
              case "CORRIGIDA":
                statusColor = "bg-green-100 text-green-700 border-green-200";
                break;
              case "PENDENTE":
                statusColor = "bg-yellow-100 text-yellow-700 border-yellow-200";
                break;
              case "ERRO":
                statusColor = "bg-red-100 text-red-700 border-red-200";
                break;
              default:
                statusColor = "bg-slate-100 text-slate-700 border-slate-200";
            }

            return (
              <tr key={essay.id} className="hover:bg-slate-50/80 transition-colors group">
                <td className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-purple-50 rounded-lg text-purple-600">
                      <FileText size={20} />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-900">{essay.title}</p>
                      <p className="text-xs text-slate-500">{essay.content.slice(0, 50)}...</p>
                    </div>
                  </div>
                </td>

                <td className="p-4">
                  <p className="text-sm text-slate-700 font-medium">{formatDate(essay.createdAt ?? "")}</p>
                </td>

                <td className="p-4">
                  <span
                    className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold border ${statusColor}`}
                  >
                    {essay.status}
                  </span>
                </td>
                
                 <td className="p-4">
                  {essay.note ? (
                    <span
                      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold border ${getScoreStyle(essay.note)}`}
                    >
                      {essay.note}
                    </span>
                  ) : (
                    <span className="text-sm font-bold text-slate-500">-</span>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};