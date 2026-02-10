import type { CategoryAction, CategoryState } from "../models/Category";

export const initialStateCategory: CategoryState = {
    categories: [],
    loading: false,
    error: null
}

export function categoryReducer(state: CategoryState, action: CategoryAction) {
     switch(action.type) {
        case "SET_CATEGORIES":
            return {...state, categories: action.payload }
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
        case "DELETE_CATEGORY_REQUEST":
            return {
                ...state,
                loading: true,
                error: null
            }
        case "DELETE_CATEGORY_FAILURE":
            return {
                ...state,
                loading: false,
                error: null
            }
        default:
            return state
    }
}