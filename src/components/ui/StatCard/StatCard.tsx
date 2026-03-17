import type { ReactNode } from "react";

interface StatCardProps {
  icon: ReactNode;
  label: string;
  value: number;
}

export function StatCard({ icon, label, value }: StatCardProps) {
  return (
    <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4 hover:border-indigo-200 transition-colors">
      <div className="p-3 bg-indigo-50/50 rounded-xl">
        {icon}
      </div>

      <div>
        <p className="text-[11px] uppercase tracking-wider text-slate-400 font-bold">
          {label}
        </p>
        <p className="text-xl font-bold text-slate-800">
          {value}
        </p>
      </div>
    </div>
  );
}