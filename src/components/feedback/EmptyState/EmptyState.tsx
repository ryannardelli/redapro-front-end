import type { LucideIcon } from "lucide-react";

interface EmptyStateProps {
  icon: LucideIcon;
  title: string;
  description?: string;
}

export function EmptyState({ 
  icon: Icon,
  title, 
  description 
}: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-20 bg-white rounded-3xl border-2 border-dashed border-slate-200 w-full">
      
      {Icon && (
        <div className="bg-slate-50 p-6 rounded-full mb-4">
          <Icon size={48} className="text-slate-300" />
        </div>
      )}

      <h3 className="text-xl font-bold text-slate-800 tracking-tight">
        {title}
      </h3>
      
      {description && (
        <p className="text-slate-500 mt-2 text-center max-w-xs leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}