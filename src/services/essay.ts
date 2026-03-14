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

export async function delete_essay(essayId: number): Promise<{ message: string }> {
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

export async function correctEssayWithAI(essayId: number): Promise<{ message: string; essay: string }> {
  const token = userAuthentication.getTokenFromStorage();

  try {
    const res = await fetch(`${API_URL}/${essayId}/correct-ai`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
    });

    if (!res.ok) {
      const errorData = await res.json().catch(() => null);
      throw new Error(errorData?.message ?? "Erro ao corrigir redação com IA.");
    }

    return await res.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function getEssaysByStatus(status: string): Promise<Essay[]> {
  const token = userAuthentication.getTokenFromStorage();

  try {
    const res = await fetch(`${API_URL}/findAll?status=${status}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (!res.ok) {
      const errorData = await res.json().catch(() => null);
      throw new Error(errorData?.message ?? "Erro ao buscar redações.");
    }

    const essays: Essay[] = await res.json();
    return essays;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function startReviewEssay(essayId: number): Promise<Essay> {
  const token = userAuthentication.getTokenFromStorage();

  try {
    const res = await fetch(`${API_URL}/${essayId}/start-review`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
    });

    if (!res.ok) {
      const errorData = await res.json().catch(() => null);
      throw new Error(errorData?.message ?? "Erro ao iniciar correção da redação.");
    }

    const essay: Essay = await res.json();
    return essay;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function finishReviewEssay(
  essayId: number,
  payload: {
    c1: number;
    c2: number;
    c3: number;
    c4: number;
    c5: number;
    generalFeedback: string;
  }
): Promise<Essay> {

  const token = userAuthentication.getTokenFromStorage();

  try {
    const res = await fetch(`${API_URL}/${essayId}/finish-review`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      const errorData = await res.json().catch(() => null);
      throw new Error(errorData?.message ?? "Erro ao finalizar correção da redação.");
    }

    const essay: Essay = await res.json();
    return essay;

  } catch (error) {
    console.error(error);
    throw error;
  }
}

