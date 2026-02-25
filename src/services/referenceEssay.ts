import { userAuthentication } from "./auth";
import type { ReferenceEssay } from "../models/ReferenceEssay";

const API_URL = "/api/reference-essay";

export async function getReferenceEssays(params?: {
  year?: number;
  categoryId?: number;
  search?: string;
}): Promise<ReferenceEssay[]> {
  const token = userAuthentication.getTokenFromStorage();

  const query = new URLSearchParams();

  if (params?.year) query.append("year", String(params.year));
  if (params?.categoryId)
    query.append("categoryId", String(params.categoryId));
  if (params?.search) query.append("search", params.search);

  const res = await fetch(`${API_URL}/findAll?${query.toString()}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) {
    const errorData = await res.json().catch(() => null);
    throw new Error(
      errorData?.message ?? "Erro ao buscar redações de referência"
    );
  }

  return res.json();
}

export async function create_reference_essay(
  payload: any
): Promise<ReferenceEssay> {
  const token = userAuthentication.getTokenFromStorage();

  const res = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    const errorData = await res.json().catch(() => null);
    throw new Error(
      errorData?.message ?? "Erro ao criar redação de referência"
    );
  }

  return res.json();
}

export async function update_reference_essay(
  id: number,
  payload: any
): Promise<ReferenceEssay> {
  const token = userAuthentication.getTokenFromStorage();

  const res = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    const errorData = await res.json().catch(() => null);
    throw new Error(
      errorData?.message ?? "Erro ao atualizar redação de referência"
    );
  }

  return res.json();
}

export async function delete_reference_essay(id: number): Promise<void> {
  const token = userAuthentication.getTokenFromStorage();

  const res = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) {
    const errorData = await res.json().catch(() => null);
    throw new Error(
      errorData?.message ?? "Erro ao excluir redação de referência"
    );
  }
}