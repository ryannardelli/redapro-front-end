import { useEffect, useReducer, type ReactNode } from "react";
import { categoryReducer, initialStateCategory } from "../../reducer/categoryReducer";
import { getAllCategories } from "../../services/category";
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

   useEffect(() => {
    if (!isAuthenticated) return;

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
            error instanceof Error ? error.message : "Erro ao carregar categorias",
        });
      } finally {
        dispatchCategory({ type: "SET_LOADING", payload: false });
      }
    };

    loadCategories();
  }, [isAuthenticated]);
  
  return (
    <CategoryContext.Provider value={{stateCategory, dispatchCategory}}>
        {children}
    </CategoryContext.Provider>
  );
};
