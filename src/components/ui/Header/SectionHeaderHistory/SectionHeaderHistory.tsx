import React, { type ReactNode } from "react";

interface SectionHeaderHistoryProps {
  icon: ReactNode;
  title: string;
  description?: string;
  className?: string;
}

export const SectionHeaderHistory: React.FC<SectionHeaderHistoryProps> = ({
  icon,
  title,
  description,
  className = "",
}) => {
  return (
    <div className={`px-6 py-5 border-b border-slate-100 bg-slate-50/50 ${className}`}>
      <div className="flex items-center gap-3">
        <div className="p-2 bg-blue-50 rounded-lg">{icon}</div>
        <div>
          <h2 className="text-lg font-semibold text-slate-800">{title}</h2>
          {description && <p className="text-sm text-slate-500">{description}</p>}
        </div>
      </div>
    </div>
  );
};