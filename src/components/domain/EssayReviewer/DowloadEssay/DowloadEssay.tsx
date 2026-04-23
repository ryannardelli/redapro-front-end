import { useState } from "react";
import { Download, Loader2, CheckCircle2 } from "lucide-react";
import { useProfileCorrectorEssay } from "@hooks/useProfileCorrectorEssay";

type Props = {
  essayId: number;
};

export function DownloadEssay({ essayId }: Props) {
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const { downloadEssayPdf } = useProfileCorrectorEssay();

  const handleDownload = async () => {
    try {
      setStatus("loading");

      await downloadEssayPdf(essayId);

      setStatus("success");

      setTimeout(() => setStatus("idle"), 3000);

    } catch (error) {
      console.error(error);
      setStatus("idle");
    }
  };

  return (
    <button
      onClick={handleDownload}
      disabled={status === "loading"}
      className={`
        relative flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm
        transition-all duration-200 active:scale-95
        ${status === "loading" 
          ? "bg-slate-100 text-slate-400 cursor-not-allowed" 
          : status === "success"
          ? "bg-emerald-600 text-white hover:bg-emerald-700 hover:shadow-lg hover:shadow-emerald-200"
          : "bg-slate-800 text-white hover:bg-slate-900 hover:shadow-lg hover:shadow-slate-200 cursor-pointer"
        }
      `}
    >
      {status === "idle" && (
        <>
          <Download size={20} />
          <span>Baixar PDF</span>
        </>
      )}

      {status === "loading" && (
        <>
          <Loader2 size={20} className="animate-spin" />
          <span>Gerando PDF...</span>
        </>
      )}

      {status === "success" && (
        <>
          <CheckCircle2 size={20} />
          <span>Concluído!</span>
        </>
      )}
    </button>
  );
}