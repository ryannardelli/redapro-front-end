import type { Essay } from "../models/Essay";
import { userAuthentication } from "./auth";

const API_URL = "/api/essay";

export async function getUserEssays(userId: number): Promise<Essay[]> {
  const token = userAuthentication.getTokenFromStorage();

  try {
    const res = await fetch(`${API_URL}/users/${userId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      },
    });

    if (!res.ok) {
      const errorData = await res.json().catch(() => null);
      throw new Error(errorData?.message ?? "Erro ao buscar redação.");
    }

    const essays: Essay[] = await res.json();
    return essays;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function create_essay(
  userId: number,
  payload: {
    title: string;
    content: string;
    category_id: number;
  }
): Promise<Essay> {
  const token = userAuthentication.getTokenFromStorage();

  try {
    const res = await fetch(`${API_URL}/${userId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      const errorData = await res.json().catch(() => null);
      throw new Error(errorData?.message ?? "Erro ao criar redação.");
    }

    const essay: Essay = await res.json();
    return essay;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function delete_essay(essayId: number): Promise<void> {
  const token = userAuthentication.getTokenFromStorage();

  try {
    const res = await fetch(`${API_URL}/${essayId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
    });

    if (!res.ok) {
      const errorData = await res.json().catch(() => null);
      throw new Error(errorData?.message ?? "Erro ao excluir redação.");
    }

    return await res.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function update_essay(
  essayId: number,
  payload: {
    title: string;
    content: string;
    category_id: number;
  }
): Promise<Essay> {
  const token = userAuthentication.getTokenFromStorage();

  try {
    const res = await fetch(`${API_URL}/${essayId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      const errorData = await res.json().catch(() => null);
      throw new Error(errorData?.message ?? "Erro ao atualizar redação.");
    }

    const updatedEssay: Essay = await res.json();
    return updatedEssay;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

