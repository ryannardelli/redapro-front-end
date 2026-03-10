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

export function CorrectEssayPage() {

  const { id } = useParams<{ id: string }>();
  const essayId = id ? Number(id) : null;

  const navigate = useNavigate();

  const {
    stateEssay,
    loadEssays,
    startReview,
    finishReview
  } = useProfileCorrectorEssay();

  const [essay, setEssay] = useState<any>(null);
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

    const fetchEssay = async () => {

      if (!essayId) return;

      try {

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

        setScores({
          c1: found.c1 ?? 0,
          c2: found.c2 ?? 0,
          c3: found.c3 ?? 0,
          c4: found.c4 ?? 0,
          c5: found.c5 ?? 0
        });

        setGeneralFeedback(found.feedback?.general ?? "");

        if (found.status === "PENDENTE") {
          await startReview(essayId);
        }

      } catch (error) {

        console.error(error);
        navigate("/");

      }

    };

    fetchEssay();

  }, [essayId]);

  const handleFinishReview = async () => {

    if (!essayId) return;

    try {

      const response = await finishReview(essayId, {
        ...scores,
        generalFeedback
      });

      showMessage.success(response.message);
      navigate("/");

    } catch (error) {
      console.error(error);
      showMessage.error(error.message);

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