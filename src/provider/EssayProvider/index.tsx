import { useEffect, useReducer, type ReactNode } from "react";
import { EssayContext } from "./EssayContext";
import { essayReducer, initialStateEssay } from "../../reducer/essayReducer";
import { getUserEssays } from "../../services/essay";
import { useAuth } from "../../hooks/useAuth";

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

    const createEssay = async () => {
        throw new Error("createEssay not implemented yet");
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
