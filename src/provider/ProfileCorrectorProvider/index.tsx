import { useReducer, useCallback, useEffect, type ReactNode } from "react";
import { essayReducer, initialStateEssay } from "../../reducer/essayReducer";
import { finishReviewEssay, getEssaysByStatus, startReviewEssay } from "../../services/essay";
import { ProfileCorrectorContext } from "./ProfileCorrectorContext";

type CorretorProviderProps = { children: ReactNode };

export const ProfileCorrectorProvider = ({ children }: CorretorProviderProps) => {
  const [stateEssay, dispatchEssay] = useReducer(essayReducer, initialStateEssay);

  const loadEssays = useCallback(async () => {
    try {
      dispatchEssay({ type: "SET_LOADING", payload: true });
      const pending = await getEssaysByStatus("PENDENTE");
      const inReview = await getEssaysByStatus("EM_CORRECAO");
      dispatchEssay({ type: "SET_ESSAY", payload: [...pending, ...inReview] });
    } catch (error) {
      console.log(error);
      dispatchEssay({ type: "SET_ERROR", payload: "Erro ao carregar redações" });
    } finally {
      dispatchEssay({ type: "SET_LOADING", payload: false });
    }
  }, []);

  useEffect(() => { loadEssays(); }, [loadEssays]);

  const startReview = async (essayId: number) => {
    try {
        dispatchEssay({ type: "SET_LOADING", payload: true });

        const updatedEssay = await startReviewEssay(essayId);

        dispatchEssay({
        type: "UPDATE_ESSAY",
        payload: updatedEssay,
        });

        return updatedEssay;
    } catch (error) {
        const message = error instanceof Error ? error.message : "Erro ao iniciar correção da redação";
        dispatchEssay({ type: "SET_ERROR", payload: message });
        throw error;
    } finally {
        dispatchEssay({ type: "SET_LOADING", payload: false });
    }
  };

  const finishReview = async (
  essayId: number,
  payload: {
    c1: number;
    c2: number;
    c3: number;
    c4: number;
    c5: number;
    generalFeedback: string;
  }
) => {
  try {

    dispatchEssay({ type: "SET_LOADING", payload: true });

    const updatedEssay = await finishReviewEssay(essayId, payload);

    dispatchEssay({
      type: "UPDATE_ESSAY",
      payload: updatedEssay,
    });

    return updatedEssay;

  } catch (error) {

    const message =
      error instanceof Error
        ? error.message
        : "Erro ao finalizar correção da redação";

    dispatchEssay({ type: "SET_ERROR", payload: message });

    throw error;

  } finally {

    dispatchEssay({ type: "SET_LOADING", payload: false });

  }
};

  return (
    <ProfileCorrectorContext.Provider value={{ stateEssay, dispatchEssay, startReview, loadEssays, finishReview }}>
      {children}
    </ProfileCorrectorContext.Provider>
  );
};