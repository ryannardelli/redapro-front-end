const API_URL = "/api/users";

interface CatchInformationsUser {
    getUserById: (id: number) => Promise<User>;
    findAll: () => Promise<User[]>;
    deleteUser: (id: number) => Promise<void>;
}

import type { User } from "../models/User";
import { userAuthentication } from "./auth";

type ApiError = {
    message?: string;
};

export const catchInformationsUser: CatchInformationsUser = {
    getUserById: async (id) => {
        const token = userAuthentication.getTokenFromStorage();

        const res = await fetch(`${API_URL}/${id}`, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`,
            },
        });

        if (!res.ok) {
            const errorData: ApiError = await res.json().catch(() => ({}));
            throw new Error(errorData.message);
        }

        return res.json() as Promise<User>;
    },

    findAll: async () => {
        const token = userAuthentication.getTokenFromStorage();

        const res = await fetch(`${API_URL}/findAll`, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`,
            },
        });

        if (!res.ok) {
            const errorData: ApiError = await res.json().catch(() => ({}));
            throw new Error(errorData.message);
        }

        const data =  res.json() as Promise<User[]>;
        return data;
    },

    deleteUser: async (id: number) => {
    const token = userAuthentication.getTokenFromStorage();

    try {
        const res = await fetch(`${API_URL}/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`,
            },
        });

        if (!res.ok) {
            const errorData = await res.json().catch(() => null);
            throw new Error(errorData?.message || "Erro ao excluir usuário");
    }

    return await res.json();
    } catch(error) {
        console.error(error);
        throw error;
    }
}
};

export async function getMe(): Promise<User> {
  const token = userAuthentication.getTokenFromStorage();

  const res = await fetch(`${API_URL}/me`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) {
    throw new Error("Sessão inválida");
  }

  return res.json();
}