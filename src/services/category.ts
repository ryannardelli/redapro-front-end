import type { Category } from "../models/Category";
import { userAuthentication } from "./auth";

const API_URL = "/api/category";

export async function getAllCategories(): Promise<Category[]> {
  const token = userAuthentication.getTokenFromStorage();

  try {
    const res = await fetch(`${API_URL}/findAll`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
    });

    if (!res.ok) {
      const errorData = await res.json().catch(() => null);
      throw new Error(errorData?.message);
    }

    const categories: Category[] = await res.json();
    return categories;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
