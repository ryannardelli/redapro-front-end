import { ReferenceEssayContext } from "provider/ReferenceEssayProvider/ReferenceEssayContext";
import { useContext } from "react";

export function useReferenceEssay() {
    return useContext(ReferenceEssayContext)
} 