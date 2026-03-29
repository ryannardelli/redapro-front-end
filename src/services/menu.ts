import type { Menu } from "models/Menu";
import { userAuthentication } from "./auth";

const API_URL = "/api/menu";

export async function update_menu(
  menuId: number,
  payload: {
    name: string;
    icon: string;
  }
): Promise<Menu & { message?: string }> {
  const token = userAuthentication.getTokenFromStorage();

  try {
    const res = await fetch(`${API_URL}/${menuId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      const errorData = await res.json().catch(() => null);
      throw new Error(errorData?.message ?? "Erro ao atualizar menu.");
    }

    const updatedMenu = await res.json();
    return updatedMenu;
  } catch (error) {
    console.error(error);
    throw error;
  }
}