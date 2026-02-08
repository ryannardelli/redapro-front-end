import { createContext } from "react";
import type { CreateEssayPayload, Essay, EssayAction, EssayState } from "../../models/Essay"
import { initialStateEssay } from "../../reducer/essayReducer";

type EssayContextType = {
    stateEssay: EssayState;
    dispatchEssay: (action: EssayAction) => void;
    createEssay: (data: CreateEssayPayload) => Promise<Essay>;
    deleteEssay: (id: number) => Promise<void>;
};

export const EssayContext = createContext<EssayContextType>({
    stateEssay: initialStateEssay,
    dispatchEssay: () => undefined,
    createEssay: async () => {
        throw new Error("essayCreate not implemented");
    },
    deleteEssay: async () => {
        throw new Error("deleteEssay not implemented");
    }
})