import { createContext } from "react";
import type { CategoryAction, CategoryState, CreateCategoryPayload } from "../../models/Category"
import { initialStateCategory } from "../../reducer/categoryReducer";

type CategoryContextType = {
    stateCategory: CategoryState;
    dispatchCategory: (action: CategoryAction) => void;
    create_category: (data: CreateCategoryPayload) => Promise<{ message: string }>;
    delete_category: (id: number) => Promise<{ message: string }>;
    update_category: (id: number, data: CreateCategoryPayload) => Promise<{ message: string }>;
}

export const CategoryContext = createContext<CategoryContextType>({
    stateCategory: initialStateCategory,
    dispatchCategory: () => undefined,
    create_category: async () => {
        throw new Error("categoryCreate not implemented");
    },
    delete_category: async () => {
        throw new Error("deleteCategory not implemented");
    },

    update_category: async () => {
        throw new Error("updateCategory not implemented");
    }
})