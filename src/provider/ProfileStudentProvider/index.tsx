import { useReducer, useCallback, useEffect, type ReactNode } from "react";
import { essayReducer, initialStateEssay } from "../../reducer/essayReducer";
import { getUserEssays, create_essay, update_essay, delete_essay, correctEssayWithAI } from "../../services/essay";
import { useAuth } from "../../hooks/useAuth";
import type { CreateEssayPayload, UpdateEssayRealtimePayload } from "../../models/Essay";
import { ProfileStudentContext } from "./ProfileStudentContext";
import { useDashboard } from "@hooks/useDashboard";

type ProfileStudentProviderProps = { children: ReactNode };

export const ProfileStudentProvider = ({ children }: ProfileStudentProviderProps) => {
  const [stateEssay, dispatchEssay] = useReducer(essayReducer, initialStateEssay);
  const { state } = useAuth();
  const { loadRecentEssays, loadStudentStats } = useDashboard()

  const loadUserEssays = useCallback(async () => {
    if (!state.user) return;

    try {
      dispatchEssay({ type: "SET_LOADING", payload: true });
      const essays = await getUserEssays(state.user.id);
      dispatchEssay({ type: "SET_ESSAY", payload: essays });
    } catch (error) {
      console.error(error);
      dispatchEssay({ type: "SET_ERROR", payload: "Erro ao carregar redações" });
    } finally {
      dispatchEssay({ type: "SET_LOADING", payload: false });
    }
  }, [state.user]);

  useEffect(() => { loadUserEssays(); }, [loadUserEssays]);

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

    const createEssay = async (data: CreateEssayPayload) => {
    if (!state.user) return;

    try {
      dispatchEssay({ type: "SET_LOADING", payload: true });

      const response = await create_essay(state.user.id, data);

      loadStudentStats();
      loadRecentEssays(); 

      await loadUserEssays();

      return response;
    } catch (error) {
      console.error(error);

      const message =
      error instanceof Error
        ? error.message
        : "Erro ao criar redação.";

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

      loadRecentEssays();
      loadStudentStats();

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

    const updateEssayRealtime = (essayUpdate: UpdateEssayRealtimePayload) => {
        dispatchEssay({
          type: "UPDATE_ESSAY_REALTIME",
          payload: essayUpdate
        });
      };

  return (
    <ProfileStudentContext.Provider value={{ stateEssay, dispatchEssay, createEssay, updateEssay, deleteEssay, correctEssayAI, updateEssayRealtime }}>
      {children}
    </ProfileStudentContext.Provider>
  );
};