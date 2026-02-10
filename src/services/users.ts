const API_URL = "/api/users";

interface CatchInformationsUser {
    getUserById: (id: number) => Promise<User>;
    findAll: () => Promise<User[]>;
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

        return res.json() as Promise<User[]>;
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