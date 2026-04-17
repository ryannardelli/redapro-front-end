import React from "react";
import { FileText } from "lucide-react";

interface EmptyActivitiesReviewerProps {
  message: string;
}

export const EmptyActivitiesReviewer: React.FC<EmptyActivitiesReviewerProps> = ({
  message
}) => {
  return (
    <div className="flex flex-col items-center justify-center p-8 gap-4 text-center text-slate-600">
      <div className="p-4 bg-purple-50 rounded-full text-purple-600">
        <FileText size={36} />
      </div>

      <p className="text-lg font-semibold">{message}</p>

      <p className="text-sm text-slate-400">
        Ainda não há redações corrigidas. Quando você iniciar correções,
        elas aparecerão aqui.
      </p>
    </div>
  );
};