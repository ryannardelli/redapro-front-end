import type { ElementType } from "react";

type ColorVariant = 'blue' | 'purple' | 'amber' | 'emerald';

const colorVariants: Record<ColorVariant, string> = {
  blue: "bg-blue-50 text-blue-600 group-hover:bg-blue-600",
  purple: "bg-purple-50 text-purple-600 group-hover:bg-purple-600",
  amber: "bg-amber-50 text-amber-600 group-hover:bg-amber-600",
  emerald: "bg-emerald-50 text-emerald-600 group-hover:bg-emerald-600",
};

interface SetupCardProps {
  title: string;
  description: string;
  icon: ElementType; 
  color?: ColorVariant;
  onClick?: () => void;
}

export function SetupCard({ 
  title, 
  description, 
  icon: Icon, 
  color = "blue", 
  onClick 
}: SetupCardProps) {
  return (
    <div 
      onClick={onClick}
      className="group p-6 bg-white border border-slate-200 rounded-xl shadow-sm hover:shadow-md hover:border-blue-500 transition-all cursor-pointer"
    >
        
      <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-colors group-hover:text-white ${colorVariants[color]}`}>
        <Icon size={24} />
      </div>
      
      <h2 className="text-xl font-bold text-slate-800 mb-2">{title}</h2>
      <p className="text-slate-500 leading-relaxed text-sm">
        {description}
      </p>
      
      <div className="mt-4 flex items-center text-sm font-medium text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity">
        Acessar configuração →
      </div>
    </div>
  );
}