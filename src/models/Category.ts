export type Category = {
    id: number;
    name: string;
    description: string;
};

export type CategoryState = {
    categories: Category[];
    loading: boolean;
    error: string | null;
}

export type CategoryAction =
    | {type: "SET_CATEGORIES"; payload: Category[]}
    | {type: "DELETE_CATEGORY"; payload: number}
    | {type: "DELETE_CATEGORY"; payload: number}
    | { type: "SET_LOADING"; payload: boolean }
    | { type: "SET_ERROR"; payload: string | null };

export type CreateCategoryPayload = {
    name: string;
    description?: string;
}

export type CreateCategoryResponse = {
  message: string;
};