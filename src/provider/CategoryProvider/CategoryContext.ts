import { createContext } from "react";
import type { CategoryAction, CategoryState, CreateCategoryPayload } from "../../models/Category"
import { initialStateCategory } from "../../reducer/categoryReducer";

type CategoryContextType = {
    stateCategory: CategoryState;
    dispatchCategory: (action: CategoryAction) => void;
    create_category: (data: CreateCategoryPayload) => Promise<{ message: string }>;
    deleteCategory: (id: number) => Promise<void>;
}

export const CategoryContext = createContext<CategoryContextType>({
    stateCategory: initialStateCategory,
    dispatchCategory: () => undefined,
    create_category: async () => {
        throw new Error("categoryCreate not implemented");
    },
    deleteCategory: async () => {
        throw new Error("deleteCategory not implemented");
    }
})