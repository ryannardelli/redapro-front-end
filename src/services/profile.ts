import type { Profile } from "../models/Profile";
import { userAuthentication } from "./auth";

const API_URL = "/api/profile";

export async function getUserProfiles(): Promise<Profile[]> {
  const token = userAuthentication.getTokenFromStorage();

  try {
    const res = await fetch(`${API_URL}/findAll`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (!res.ok) {
      const errorData = await res.json().catch(() => null);
      throw new Error(errorData?.message ?? "Erro ao buscar perfis.");
    }

    const profiles: Profile[] = await res.json();
    return profiles;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function getProfileById(profileId: number): Promise<Profile> {
  const token = userAuthentication.getTokenFromStorage();

  try {
    const res = await fetch(`${API_URL}/${profileId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (!res.ok) {
      const errorData = await res.json().catch(() => null);
      throw new Error(errorData?.message ?? "Erro ao buscar perfil.");
    }

    const profile: Profile = await res.json();
    return profile;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function create_profile(
  payload: {
    name: string;
    description: string;
    system?: boolean;
  }
): Promise<Profile> {
  const token = userAuthentication.getTokenFromStorage();

  try {
    const res = await fetch(`${API_URL}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      const errorData = await res.json().catch(() => null);
      throw new Error(errorData?.message ?? "Erro ao criar perfil.");
    }

    const profile: Profile = await res.json();
    return profile;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function update_profile(
  profileId: number,
  payload: {
    name: string;
    description: string;
    system?: boolean;
  }
): Promise<Profile> {
  const token = userAuthentication.getTokenFromStorage();

  try {
    const res = await fetch(`${API_URL}/${profileId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      const errorData = await res.json().catch(() => null);
      throw new Error(errorData?.message ?? "Erro ao atualizar perfil.");
    }

    const updatedProfile: Profile = await res.json();
    return updatedProfile;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function delete_profile(profileId: number): Promise<void> {
  const token = userAuthentication.getTokenFromStorage();

  try {
    const res = await fetch(`${API_URL}/${profileId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (!res.ok) {
      const errorData = await res.json().catch(() => null);
      throw new Error(errorData?.message ?? "Erro ao excluir perfil.");
    }

    return await res.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
}
