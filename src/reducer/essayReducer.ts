import type { EssayAction, EssayState } from "../models/Essay";

export const initialStateEssay: EssayState = {
    essays: [],
    loading: false,
    error: null
}

export function essayReducer(state: EssayState, action: EssayAction) {
     switch(action.type) {
        case "SET_ESSAY":
            return {...state, essays: action.payload }
        case "ADD_ESSAY":
            return {
                ...state,
                essays: [...state.essays, action.payload]
            }
        case "DELETE_ESSAY":
            return {
                ...state,
                loading: false,
                essays: state.essays.filter(essay => essay.id !== action.payload)
            }
        case "UPDATE_ESSAY":
            return {
                ...state,
                essays: state.essays.map((essay) =>
                essay.id === action.payload.id ? action.payload : essay
                ),
        };

        case "SET_LOADING":
            return {
                ...state,
            loading: action.payload,
        };

         case "SET_ERROR":
            return {
                ...state,
                error: action.payload,
                loading: false,
        };
        default:
            return state
    }
}