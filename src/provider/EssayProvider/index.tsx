import { useEffect, useReducer, type ReactNode, useCallback } from "react";
import { EssayContext } from "./EssayContext";
import { essayReducer, initialStateEssay } from "../../reducer/essayReducer";
import { getUserEssays, create_essay, delete_essay, update_essay, correctEssayWithAI, getEssaysByStatus } from "../../services/essay";
import { useAuth } from "../../hooks/useAuth";
import type { CreateEssayPayload } from "../../models/Essay";

type EssayProviderProps = {
  children: ReactNode;
};

export const EssayProvider = ({ children }: EssayProviderProps) => {
  const [stateEssay, dispatchEssay] = useReducer(essayReducer, initialStateEssay);
  const { state } = useAuth();

  const loadUserEssays = useCallback(async () => {
  if (!state.user) return;

  try {
    dispatchEssay({ type: "SET_LOADING", payload: true });

    const allEssays = await getUserEssays(state.user.id);
    const pendingEssays = await getEssaysByStatus("PENDENTE");

    const combinedEssays = [
      ...allEssays,
      ...pendingEssays.filter(
        (p) => !allEssays.some((a) => a.id === p.id)
      ),
    ];

    dispatchEssay({
      type: "SET_ESSAY",
      payload: combinedEssays,
    });
  } catch (error) {
    console.error(error);
    dispatchEssay({
      type: "SET_ERROR",
      payload: "Erro ao carregar redações",
    });
  } finally {
    dispatchEssay({ type: "SET_LOADING", payload: false });
  }
}, [state.user]);

const loadPendingEssays = async () => {
  try {
    dispatchEssay({ type: "SET_LOADING", payload: true });

    const pendingEssays = await getEssaysByStatus("PENDENTE");

    dispatchEssay({
      type: "SET_ESSAY",
      payload: [...stateEssay.essays, ...pendingEssays],
    });

  } catch (error) {
    console.error(error);

    dispatchEssay({
      type: "SET_ERROR",
      payload: "Erro ao carregar redações pendentes",
    });
  } finally {
    dispatchEssay({ type: "SET_LOADING", payload: false });
  }
};

  useEffect(() => {
    if (state.loading) return;
    if (!state.user) return;

    loadUserEssays();
    loadPendingEssays();
  }, [state.loading, state.user, loadUserEssays]);

  const createEssay = async (data: CreateEssayPayload) => {
    if (!state.user) return;

    try {
      dispatchEssay({ type: "SET_LOADING", payload: true });

      const response = await create_essay(state.user.id, data);

      // Refetch após criar
      await loadUserEssays();

      return response;
    } catch (error) {
      console.error(error);

      const message =
      error instanceof Error
        ? error.message
        : error?.message;

    dispatchEssay?.({ type: "SET_ERROR", payload: message });

    throw error;

    } finally {
      dispatchEssay({ type: "SET_LOADING", payload: false });
    }
  };

  const deleteEssay = async (essayId: number) => {
    try {
      dispatchEssay({ type: "SET_LOADING", payload: true });

      const response = await delete_essay(essayId);

      dispatchEssay({
        type: "DELETE_ESSAY",
        payload: essayId,
      });

      return response;
    } catch (error) {
      console.error(error);

      if (error instanceof Error) {
        dispatchEssay({
          type: "SET_ERROR",
          payload: error.message,
        });
      }

      throw error;
    } finally {
      dispatchEssay({ type: "SET_LOADING", payload: false });
    }
  };

  const updateEssay = async (
  essayId: number,
  data: CreateEssayPayload
) => {
  try {
    dispatchEssay({ type: "SET_LOADING", payload: true });

    const updatedEssay = await update_essay(essayId, data);

    dispatchEssay({
      type: "UPDATE_ESSAY",
      payload: updatedEssay,
    });

    await loadUserEssays();

    return updatedEssay;
  } catch (error) {
    console.error(error);

    const message =
      error instanceof Error
        ? error.message
        : "Erro ao atualizar redação";

    dispatchEssay({ type: "SET_ERROR", payload: message });
    throw error;
  } finally {
    dispatchEssay({ type: "SET_LOADING", payload: false });
  }
};

const correctEssayAI = async (essayId: number) => {
    try {
      dispatchEssay({ type: "SET_LOADING", payload: true });
      const response = await correctEssayWithAI(essayId);

      dispatchEssay({ type: "UPDATE_ESSAY_CORRECTED", payload: { id: essayId, correctedContent: response.essay } });

      await loadUserEssays();

      return response;
    } catch (error) {
      const message = error instanceof Error ? error.message : "Erro ao corrigir redação com IA";
      dispatchEssay({ type: "SET_ERROR", payload: message });
      throw error;
    } finally {
      dispatchEssay({ type: "SET_LOADING", payload: false });
    }
  };
  
  return (
    <EssayContext.Provider
      value={{
        stateEssay,
        createEssay,
        loadPendingEssays,
        correctEssayAI,
        deleteEssay,
        updateEssay,
      }}
    >
      {children}
    </EssayContext.Provider>
  );
};
