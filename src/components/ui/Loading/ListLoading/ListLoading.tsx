import { Loader2 } from "lucide-react";

type ListLoadingProps = {
  text?: string;
  size?: number;
  className?: string;
};

export function ListLoading({
  text = "Carregando...",
  size = 32,
  className = "",
}: ListLoadingProps) {
  return (
    <div
      className={`flex flex-col items-center justify-center py-20 text-slate-400 gap-3 ${className}`}
    >
      <Loader2 className="animate-spin" size={size} />
      <p className="font-medium">{text}</p>
    </div>
  );
}