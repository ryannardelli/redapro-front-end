import { createContext } from "react";
import type { CreateEssayPayload, Essay, EssayAction, EssayState } from "../../models/Essay"
import { initialStateEssay } from "../../reducer/essayReducer";

type EssayContextType = {
    state: EssayState;
    dispatch: (action: EssayAction) => void;
    createEssay: (data: CreateEssayPayload) => Promise<Essay>;
    deleteEssay: (id: number) => Promise<void>;
};

export const EssayContext = createContext<EssayContextType>({
    state: initialStateEssay,
    dispatch: () => undefined,
    createEssay: async () => {
        throw new Error("essayCreate not implemented");
    },
    deleteEssay: async () => {
        throw new Error("deleteEssay not implemented");
    }
})