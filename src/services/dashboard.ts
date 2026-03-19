import type { StudentDashboardStats } from "models/Dashboard";
import { userAuthentication } from "./auth";
import type { Essay } from "models/Essay";

const API_URL = "/api/dashboard";

export async function getStudentStats(): Promise<StudentDashboardStats> {
  const token = userAuthentication.getTokenFromStorage();

  try {
    const res = await fetch(`${API_URL}/student/stats`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (!res.ok) {
      const errorData = await res.json().catch(() => null);
      throw new Error(errorData?.message || "Erro ao buscar estatísticas");
    }

    const stats: StudentDashboardStats = await res.json();
    return stats;

  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function getRecentEssays(): Promise<Essay[]> {
  const token = userAuthentication.getTokenFromStorage();

  const res = await fetch(`${API_URL}/recent-essays`, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json"
    }
  });

  if (!res.ok) {
    const errorData = await res.json().catch(() => null);
    throw new Error(errorData?.message);
  }

  return await res.json();
}