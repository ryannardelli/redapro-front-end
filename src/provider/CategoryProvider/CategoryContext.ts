import { createContext } from "react";
import type { Category, CategoryAction, CategoryState, CreateCategoryPayload } from "../../models/Category"
import { initialStateCategory } from "../../reducer/categoryReducer";

type CategoryContextType = {
    stateCategory: CategoryState;
    dispatchCategory: (action: CategoryAction) => void;
    createCategory: (data: CreateCategoryPayload) => Promise<Category>;
    deleteCategory: (id: number) => Promise<void>;
}

export const CategoryContext = createContext<CategoryContextType>({
    stateCategory: initialStateCategory,
    dispatchCategory: () => undefined,
    createCategory: async () => {
        throw new Error("categoryCreate not implemented");
    },
    deleteCategory: async () => {
        throw new Error("deleteCategory not implemented");
    }
})