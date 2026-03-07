import { ActivitiesStudentTable } from "@components/domain/Dashboard/ActivityStudentTable";

export function ActivityTable() {
  return (
    <div className="w-full bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
      <ActivitiesStudentTable />
    </div>
  );
}