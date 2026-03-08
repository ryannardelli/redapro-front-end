import { createContext } from "react";
import type {
  Essay,
  EssayAction,
  EssayState,
} from "../../models/Essay";
import { initialStateEssay } from "../../reducer/essayReducer";

type ProfileCorrectorContextType = {
  stateEssay: EssayState;
  dispatchEssay: (action: EssayAction) => void;
  startReview: (essayId: number) => Promise<Essay>;
  loadEssays: () => Promise<void>;
};

export const ProfileCorrectorContext = createContext<ProfileCorrectorContextType>({
  stateEssay: initialStateEssay,
  dispatchEssay: () => undefined,

  startReview: async () => {
    throw new Error("startReview not implemented");
  },

   loadEssays: async () => { throw new Error("loadEssays not implemented"); },
});
