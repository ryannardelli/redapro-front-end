import React from "react";
import { FileText } from "lucide-react";
import { RouterLinks } from "@components/ui/Links/RouterLinks";

export const EmptyActivitiesStudent: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center p-8 gap-4 text-center text-slate-600">
      <div className="p-4 bg-purple-50 rounded-full text-purple-600">
        <FileText size={36} />
      </div>
      <p className="text-lg font-semibold">Você ainda não possui nenhuma redação.</p>
      <p className="text-sm text-slate-400">
        Comece criando sua primeira redação para acompanhar seu progresso!
      </p>
      
      <RouterLinks href="/essay-upload" className="mt-2 px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition cursor-pointer">
          Criar Redação
      </RouterLinks>
    </div>
  );
};