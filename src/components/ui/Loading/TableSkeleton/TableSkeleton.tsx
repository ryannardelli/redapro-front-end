import React from "react";

type TableSkeletonProps = {
  columns: number;
  rows?: number;
};

export const TableSkeleton: React.FC<TableSkeletonProps> = ({ columns, rows = 5 }) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-slate-50/50 border-b border-slate-200">
            {Array.from({ length: columns }).map((_, idx) => (
              <th
                key={idx}
                className="p-4 text-xs font-bold uppercase tracking-wider text-slate-500"
              >
                <div className="h-3 bg-slate-200 rounded animate-pulse w-3/4 mx-auto"></div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          {Array.from({ length: rows }).map((_, rowIdx) => (
            <tr key={rowIdx} className="hover:bg-slate-50/80 transition-colors group">
              {Array.from({ length: columns }).map((_, colIdx) => (
                <td key={colIdx} className="p-4">
                  <div className="h-4 bg-slate-200 rounded animate-pulse w-full"></div>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};