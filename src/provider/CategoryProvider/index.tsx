import { useEffect, useReducer, type ReactNode } from "react";
import { categoryReducer, initialStateCategory } from "../../reducer/categoryReducer";
import { getAllCategories } from "../../services/category";
import { CategoryContext } from "./CategoryContext";
import { userAuthentication } from "../../services/auth";


type CategoryProviderProps = {
  children: ReactNode;
};

export const CategoryProvider = ({ children }: CategoryProviderProps) => {
  const [stateCategory, dispatchCategory] = useReducer(
    categoryReducer,
    initialStateCategory
  );

  useEffect(() => {
  const loadCategories = async () => {
    try {
      const token = userAuthentication.getTokenFromStorage();

      if(!token) return;
      
      dispatchCategory({ type: "SET_LOADING", payload: true });

      const categories = await getAllCategories();

      dispatchCategory({
        type: "SET_CATEGORIES",
        payload: categories,
      });
    } catch (error) {
      console.error(error);
      dispatchCategory({ type: "SET_ERROR", payload: error.message });
    } finally {
      dispatchCategory({ type: "SET_LOADING", payload: false });
    }
  };

  loadCategories();
}, []);

  return (
    <CategoryContext.Provider value={{stateCategory, dispatchCategory}}>
        {children}
    </CategoryContext.Provider>
  );
};
