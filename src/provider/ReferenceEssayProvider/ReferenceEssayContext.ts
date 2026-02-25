import { createContext } from "react";
import type {
  ReferenceEssay,
  ReferenceEssayAction,
  ReferenceEssayState,
  CreateReferenceEssayPayload,
} from "../../models/ReferenceEssay.ts";
import { initialStateReferenceEssay } from "../../reducer/referenceEssayReducer";

type ReferenceEssayContextType = {
  stateReferenceEssay: ReferenceEssayState;
  dispatchReferenceEssay: (action: ReferenceEssayAction) => void;

  loadReferenceEssays: (params?: {
    year?: number;
    categoryId?: number;
    search?: string;
  }) => Promise<void>;

  createReferenceEssay: (
    data: CreateReferenceEssayPayload
  ) => Promise<ReferenceEssay>;

  updateReferenceEssay: (
    id: number,
    data: CreateReferenceEssayPayload
  ) => Promise<ReferenceEssay>;

  deleteReferenceEssay: (id: number) => Promise<void>;
};

export const ReferenceEssayContext =
  createContext<ReferenceEssayContextType>({
    stateReferenceEssay: initialStateReferenceEssay,
    dispatchReferenceEssay: () => undefined,

    loadReferenceEssays: async () => {
      throw new Error("loadReferenceEssays not implemented");
    },

    createReferenceEssay: async () => {
      throw new Error("createReferenceEssay not implemented");
    },

    updateReferenceEssay: async () => {
      throw new Error("updateReferenceEssay not implemented");
    },

    deleteReferenceEssay: async () => {
      throw new Error("deleteReferenceEssay not implemented");
    },
  });