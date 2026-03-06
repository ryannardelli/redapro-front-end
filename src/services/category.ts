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

export async function createCategory(data: {
  name: string;
  description?: string;
}): Promise<{ message: string; }> {
  const token = userAuthentication.getTokenFromStorage();

  console.log("Payload enviado para API:", data);
  
  try {
    const res = await fetch(`${API_URL}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      const errorData = await res.json().catch(() => null);
      throw new Error(errorData?.message);
    }

    const response = await res.json();
    return response;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function deleteCategory(id: number): Promise<{ message: string }> {
  const token = userAuthentication.getTokenFromStorage();

  try {
    const res = await fetch(`${API_URL}/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (!res.ok) {
      const errorData = await res.json().catch(() => null);
      throw new Error(errorData?.message);
    }

    const response = await res.json();
    return response;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
