import type { CategoryAction, CategoryState } from "../models/Category";

export const initialStateCategory: CategoryState = {
    categories: [],
    loading: false,
    error: null
}

export function categoryReducer(state: CategoryState, action: CategoryAction) {
     switch(action.type) {
        case "SET_CATEGORIES":
            return {...state, categories: action.payload, error: null }
        case "ADD_CATEGORY":
            return {
                ...state,
                categories: [...state.categories, action.payload]
            }
        case "DELETE_CATEGORY":
            return {
                ...state,
                loading: false,
                categories: state.categories.filter(category => category.id !== action.payload)
            }
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