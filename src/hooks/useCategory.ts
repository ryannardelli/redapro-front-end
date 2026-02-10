import { useContext } from "react";
import { CategoryContext } from "../provider/CategoryProvider/CategoryContext";

export function useCategory() {
    return useContext(CategoryContext)
} 