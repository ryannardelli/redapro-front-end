import { createContext } from "react";
import type {
  Essay,
  EssayAction,
  EssayState,
  FinishReviewPayload,
} from "../../models/Essay";
import { initialStateEssay } from "../../reducer/essayReducer";

type ProfileCorrectorContextType = {
  stateEssay: EssayState;
  dispatchEssay: (action: EssayAction) => void;
  startReview: (essayId: number) => Promise<Essay>;
  finishReview: (essayId: number, payload: FinishReviewPayload) => Promise<Essay & { message: string }>;
  loadEssays: () => Promise<void>;
  uploadAttachment: (essayId: number, file: File) => Promise<{ message: string; url: string }>;
  downloadEssayPdf: (essayId: number) => Promise<void>;
};

export const ProfileCorrectorContext = createContext<ProfileCorrectorContextType>({
  stateEssay: initialStateEssay,
  dispatchEssay: () => undefined,

  startReview: async () => {
    throw new Error("startReview not implemented");
  },

   loadEssays: async () => { throw new Error("loadEssays not implemented"); },

   finishReview: async () => { throw new Error("finishReview not implemented"); },
   
   uploadAttachment: async () => {
    throw new Error("uploadAttachment not implemented");
  },

  downloadEssayPdf: async () => {
    throw new Error("downloadEssayPdf not implemented");
  },
});
