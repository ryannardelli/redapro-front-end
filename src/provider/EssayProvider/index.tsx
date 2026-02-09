import { useEffect, useReducer, type ReactNode } from "react";
import { EssayContext } from "./EssayContext";
import { essayReducer, initialStateEssay } from "../../reducer/essayReducer";
import { getUserEssays, create_essay } from "../../services/essay";
import { useAuth } from "../../hooks/useAuth";
import type { CreateEssayPayload } from "../../models/Essay";

type EssayProviderProps = {
    children: ReactNode;
}

export const EssayProvider = ({ children }: EssayProviderProps) => {
    const [stateEssay, dispatchEssay] = useReducer(essayReducer, initialStateEssay);
    const { state } = useAuth();

    useEffect(() => {
        if (state.loading) return;
        if (!state.user) return;

        const loadUserEssays = async () => {
            try {
                const essays = await getUserEssays(state.user?.id);
                dispatchEssay({
                    type: "SET_ESSAY",
                    payload: essays
                });
            } catch (error) {
                console.error(error);
            }
        };

        loadUserEssays();
    }, [state.loading, state.user]);

    const createEssay = async (data: CreateEssayPayload) => {
    if (!state.user) return;

    try {
      const newEssay = await create_essay(state.user.id, data);

      dispatchEssay({
        type: "ADD_ESSAY",
        payload: newEssay,
      });

      return newEssay;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

    const deleteEssay = async () => {
        throw new Error("deleteEssay not implemented yet");
    };

    return (
        <EssayContext.Provider value={{ stateEssay, dispatchEssay, createEssay, deleteEssay }}>
            {children}
        </EssayContext.Provider>
    );
};
