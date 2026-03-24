import { createContext } from "react";
import type {
  ReferenceEssay,
  ReferenceEssayAction,
  ReferenceEssayState,
  CreateReferenceEssayPayload,
} from "../../models/ReferenceEssay.ts";
import { initialStateReferenceEssay } from "../../reducer/referenceEssayReducer.ts";

type ReferenceEssayContextType = {
  stateReferenceEssay: ReferenceEssayState;
  dispatchReferenceEssay: (action: ReferenceEssayAction) => void;

  createReferenceEssay: (
    data: CreateReferenceEssayPayload
  ) => Promise<ReferenceEssay & { message: string }>;

  updateReferenceEssay: (
    id: number,
    data: CreateReferenceEssayPayload
  ) => Promise<ReferenceEssay & { message: string }>;

  deleteReferenceEssay: (id: number) => Promise<{ message: string }>;
  loadReferenceEssays: () => Promise<void>;
};

export const ReferenceEssayContext =
  createContext<ReferenceEssayContextType>({
    stateReferenceEssay: initialStateReferenceEssay,
    dispatchReferenceEssay: () => undefined,

    createReferenceEssay: async () => {
      throw new Error("createReferenceEssay not implemented");
    },

    updateReferenceEssay: async () => {
      throw new Error("updateReferenceEssay not implemented");
    },

    deleteReferenceEssay: async () => {
      throw new Error("deleteReferenceEssay not implemented");
    },

    loadReferenceEssays: async () => {
      throw new Error("loadReferenceEssays not implemented");
    },
  });