import { createContext } from "react";
import type { EssayState, EssayAction, CreateEssayPayload, Essay } from "../../models/Essay";
import { initialStateEssay } from "../../reducer/essayReducer";

export type ProfileStudentContextType = {
  stateEssay: EssayState;
  dispatchEssay: (action: EssayAction) => void;
  createEssay: (data: CreateEssayPayload) => Promise<Essay>;
  updateEssay: (id: number, data: CreateEssayPayload) => Promise<{ message: string }>;
  deleteEssay: (id: number) => Promise<{ message: string }>;
  correctEssayAI: (essayId: number) => Promise<{ message: string; essay: string }>;
};

export const ProfileStudentContext = createContext<ProfileStudentContextType>({
  stateEssay: initialStateEssay,
  dispatchEssay: () => undefined,
  createEssay: async () => { throw new Error("createEssay not implemented"); },
  updateEssay: async () => { throw new Error("updateEssay not implemented"); },
  deleteEssay: async () => { throw new Error("deleteEssay not implemented"); },
  correctEssayAI: async () => { throw new Error("correctEssayAI not implemented"); },
});