import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router";

import { useProfileCorrectorEssay } from "@hooks/useProfileCorrectorEssay";

import { ListLoading } from "@components/ui/Loading/ListLoading";
import { EssayToolbar } from "@components/domain/EssayReviewer/EssayToolbar/EssayToolbar";
import { EssayViewer } from "@components/domain/EssayReviewer/EssayViewer";
import { EvaluationPanel } from "@components/domain/EssayReviewer/EvaluationPanel";
import { CorrectionHeader } from "@components/domain/EssayReviewer/CorrectionHeader";
import { SpinnerLoading } from "@components/ui/Loading/SpinnerLoading";
import { showMessage } from "adapters/showMessage";
import type { Essay } from "models/Essay";

export function CorrectEssayPage() {

  const { id } = useParams<{ id: string }>();
  const essayId = id ? Number(id) : null;

  const navigate = useNavigate();

  const {
    stateEssay,
    startReview,
    finishReview
  } = useProfileCorrectorEssay();

  const [essay, setEssay] = useState<Essay | null>(null);
  const [editor, setEditor] = useState<any>(null);

  const [scores, setScores] = useState({
    c1: 0,
    c2: 0,
    c3: 0,
    c4: 0,
    c5: 0
  });

  const [generalFeedback, setGeneralFeedback] = useState("");

  useEffect(() => {

    if (!essayId) return;

    const found = stateEssay.essays.find(e => e.id === essayId);

    if (!found) {
      if (!stateEssay.loading && stateEssay.essays.length > 0) {
        navigate("/");
      }
      return;
    }

    setEssay(found);

    setScores({
      c1: found.c1 ?? 0,
      c2: found.c2 ?? 0,
      c3: found.c3 ?? 0,
      c4: found.c4 ?? 0,
      c5: found.c5 ?? 0
    });

    setGeneralFeedback(found.feedback?.general ?? "");

    const handleStartReview = async () => {
      if (found.status === "PENDENTE") {
        await startReview(essayId);
      }
    };

    handleStartReview();

  }, [essayId, stateEssay.essays]);

  const handleFinishReview = async () => {

    if (!essayId) return;

    try {
      const response = await finishReview(essayId, {
        c1: scores.c1.toString(),
        c2: scores.c2.toString(),
        c3: scores.c3.toString(),
        c4: scores.c4.toString(),
        c5: scores.c5.toString(),
        generalFeedback
      });

      showMessage.success(response.message);
      navigate("/");

    } catch (error) {
      const errorMessage =
      error instanceof Error ? error.message : "Erro ao finalizar correção";

    console.error(error);
    showMessage.error(errorMessage);
    }

  };

  if (stateEssay.loading || !essay) {

    return (
      <div className="min-h-screen flex items-center justify-center">
        <ListLoading text="Preparando sua mesa de correção..." />
      </div>
    );

  }

  return (

    <div className="min-h-screen bg-slate-50 flex flex-col">
      {stateEssay.loading && <SpinnerLoading />}
      <CorrectionHeader
        essay={essay}
        onFinish={handleFinishReview}
        loading={stateEssay.loading}
      />

      <main className="flex-1 flex flex-col lg:flex-row overflow-hidden">

        <EssayToolbar editor={editor} />

        <EssayViewer
          essay={essay}
          setEditor={setEditor}
        />

        <EvaluationPanel
          scores={scores}
          setScores={setScores}
          generalFeedback={generalFeedback}
          setGeneralFeedback={setGeneralFeedback}
        />

      </main>

    </div>

  );
}