import { useContext } from "react";
import { EssayContext } from "../provider/EssayProvider/EssayContext";

export function useEssay() {
    return useContext(EssayContext)
} 