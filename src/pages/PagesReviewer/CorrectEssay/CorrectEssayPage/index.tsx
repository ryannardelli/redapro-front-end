import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import { useProfileCorrectorEssay } from "@hooks/useProfileCorrectorEssay";
import { ListLoading } from "@components/ui/Loading/ListLoading";
import { EssayToolbar } from "@components/domain/EssayReviewer/EssayToolbar/EssayToolbar";
import { EssayViewer } from "@components/domain/EssayReviewer/EssayViewer";
import { EvaluationPanel } from "@components/domain/EssayReviewer/EvaluationPanel";
import { CorrectionHeader } from "@components/domain/EssayReviewer/CorrectionHeader";

export function CorrectEssayPage() {
  const { id } = useParams<{ id: string }>();
  const essayId = id ? Number(id) : null;

  const navigate = useNavigate();
  const { stateEssay, loadEssays, startReview } = useProfileCorrectorEssay();

  const [essay, setEssay] = useState<any>(null);
  const [editor, setEditor] = useState<any>(null);

  useEffect(() => {
    const fetchEssay = async () => {
      if (!essayId) return;

      let found = stateEssay.essays.find(e => e.id === essayId);

      if (!found) {
        await loadEssays();
        found = stateEssay.essays.find(e => e.id === essayId);
      }

      if (!found) {
        navigate("/");
        return;
      }

      setEssay(found);

      if (found.status === "PENDENTE") {
        await startReview(essayId);
      }
    };

    fetchEssay();
  }, [essayId]);

  if (stateEssay.loading || !essay) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <ListLoading text="Preparando sua mesa de correção..." />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      
      <CorrectionHeader essay={essay} />

      <main className="flex-1 flex flex-col lg:flex-row overflow-hidden">

        <EssayToolbar editor={editor} />

        <EssayViewer essay={essay} setEditor={setEditor} />

        <EvaluationPanel essay={essay} />

      </main>

    </div>
  );
}