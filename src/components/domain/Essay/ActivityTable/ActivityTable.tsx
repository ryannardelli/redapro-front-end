import { ActivitiesStudentTable } from "@components/domain/Dashboard/ActivityStudentTable";
import { SectionHeaderHistory } from "@components/ui/Header/SectionHeaderHistory";
import { Clock } from "lucide-react";

export function ActivityTable() {
  return (
    <div className="w-full bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden transition-all hover:shadow-md">
     <SectionHeaderHistory
      icon={<Clock className="w-5 h-5 text-blue-600" />}
      title="Histórico de Atividades"
      description="Visualize suas últimas atividades"
    />

      <div className="p-0 sm:p-4">
        <ActivitiesStudentTable />
      </div>
    </div>
  );
}