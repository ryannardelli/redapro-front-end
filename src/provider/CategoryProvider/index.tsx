import { useEffect, useReducer, type ReactNode } from "react";
import { categoryReducer, initialStateCategory } from "../../reducer/categoryReducer";
import { getAllCategories, createCategory } from "../../services/category";
import { CategoryContext } from "./CategoryContext";
import { useAuth } from "../../hooks/useAuth";

type CategoryProviderProps = {
  children: ReactNode;
};

export const CategoryProvider = ({ children }: CategoryProviderProps) => {
  const [stateCategory, dispatchCategory] = useReducer(
    categoryReducer,
    initialStateCategory
  );

  const { state } = useAuth();
  const isAuthenticated = state.isAuthenticated;

  const loadCategories = async () => {
    try {
      dispatchCategory({ type: "SET_LOADING", payload: true });

      const categories = await getAllCategories();

      dispatchCategory({
        type: "SET_CATEGORIES",
        payload: categories,
      });
    } catch (error) {
      dispatchCategory({
        type: "SET_ERROR",
        payload:
          error instanceof Error
            ? error.message
            : "Erro ao carregar categorias",
      });
    } finally {
      dispatchCategory({ type: "SET_LOADING", payload: false });
    }
  };

  useEffect(() => {
    if (!isAuthenticated) return;

    loadCategories();
  }, [isAuthenticated]);

  const create_category = async (data: {
    name: string;
    description?: string;
  }): Promise<{ message: string }> => {
    try {
      dispatchCategory({ type: "SET_LOADING", payload: true });

      const response = await createCategory(data);

      await loadCategories();

      return response;
    } catch (error) {
      dispatchCategory({
        type: "SET_ERROR",
        payload:
          error instanceof Error
            ? error.message
            : "Erro ao criar categoria",
      });

      throw error;
    } finally {
      dispatchCategory({ type: "SET_LOADING", payload: false });
    }
  };

  return (
    <CategoryContext.Provider
      value={{ stateCategory, dispatchCategory, create_category }}
    >
      {children}
    </CategoryContext.Provider>
  );
};