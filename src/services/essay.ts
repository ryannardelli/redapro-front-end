import type { Essay } from "../models/Essay";
import { userAuthentication } from "./auth";

const API_URL = "/api/essay";

export async function getUserEssays(userId: number): Promise<Essay[]> {
  const token = userAuthentication.getTokenFromStorage();

  try {
    const res = await fetch(`${API_URL}/essay/users/${userId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      },
    });

    if (!res.ok) {
      const errorData = await res.json().catch(() => null);
      throw new Error(errorData?.message);
    }

    const essays: Essay[] = await res.json();
    return essays;
  } catch (error) {
    console.error(error);
    throw error;
  }
}