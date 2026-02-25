import type {
  ReferenceEssayAction,
  ReferenceEssayState,
} from "../models/ReferenceEssay.ts";

export const initialStateReferenceEssay: ReferenceEssayState = {
  essays: [],
  loading: false,
  error: null,
};

export function referenceEssayReducer(
  state: ReferenceEssayState,
  action: ReferenceEssayAction
) {
  switch (action.type) {
    case "SET_REFERENCE_ESSAY":
      return { ...state, essays: action.payload };

    case "ADD_REFERENCE_ESSAY":
      return { ...state, essays: [...state.essays, action.payload] };

    case "DELETE_REFERENCE_ESSAY":
      return {
        ...state,
        essays: state.essays.filter(
          (essay) => essay.id !== action.payload
        ),
      };

    case "UPDATE_REFERENCE_ESSAY":
      return {
        ...state,
        essays: state.essays.map((essay) =>
          essay.id === action.payload.id ? action.payload : essay
        ),
      };

    case "SET_LOADING":
      return { ...state, loading: action.payload };

    case "SET_ERROR":
      return { ...state, error: action.payload, loading: false };

    default:
      return state;
  }
}