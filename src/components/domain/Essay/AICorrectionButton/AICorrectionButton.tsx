import { Sparkles, Loader2 } from 'lucide-react';
import type { ReactNode } from 'react';

interface AICorrectionButtonProps {
  onClick: () => void;
  loading?: boolean;
  disabled?: boolean;
  children?: ReactNode;
}

export function AICorrectionButton({
  onClick,
  loading = false,
  disabled = false,
  children,
}: AICorrectionButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={loading || disabled}
      className="
        flex items-center justify-center gap-2 w-full py-3
        bg-gradient-to-r from-indigo-600 to-violet-600
        hover:from-indigo-700 hover:to-violet-700
        text-white rounded-xl font-bold
        shadow-md hover:shadow-indigo-200
        transition-all active:scale-95
        disabled:opacity-50 cursor-pointer
      "
    >
      {loading ? (
        <>
          <Loader2 size={18} className="animate-spin" />
          <span>Corrigindo...</span>
        </>
      ) : (
        children || (
          <>
            <Sparkles size={18} className="animate-pulse" />
            <span>Corrigir com IA</span>
          </>
        )
      )}
    </button>
  );
}