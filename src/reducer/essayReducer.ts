import type { EssayAction, EssayState } from "../models/Essay";

export const initialStateEssay: EssayState = {
    essays: [],
    loading: false,
    error: null
}

export function essayReducer(state: EssayState, action: EssayAction) {
     switch(action.type) {
        case "SET_ESSAY":
            return {...state, essay: action.payload }
        case "ADD_ESSAY":
            return {
                ...state,
                budgets: [...state.essays, action.payload]
            }
        case "DELETE_ESSAY":
            return {
                ...state,
                loading: false,
                budgets: state.essays.filter(essay => essay.id !== action.payload)
            }
        case "DELETE_ESSAY_REQUEST":
            return {
                ...state,
                loading: true,
                error: null
            }
        case "DELETE_ESSAY_FAILURE":
            return {
                ...state,
                loading: false,
                error: null
            }
        default:
            return state
    }
}