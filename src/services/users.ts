const API_URL = "/api/users";

import type { UpdateUserPayload, UploadProfilePictureResponse, User } from "../models/User";
import { userAuthentication } from "./auth";

interface CatchInformationsUser {
    getUserById: (id: number) => Promise<User>;
    findAll: () => Promise<User[]>;
    deleteUser: (id: number) => Promise<{ message: string }>;
    updateUser: (id: number, data: UpdateUserPayload) => Promise<UpdateUserPayload & { message: string }>;
    associateProfile: (userId: number, profileId: number) => Promise<User>;
    uploadProfilePicture: (file: File) => Promise<UploadProfilePictureResponse>;
}

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
},

    updateUser: async (id: number, data: { name: string }) => {
        const token = userAuthentication.getTokenFromStorage();

        const res = await fetch(`${API_URL}/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`,
            },
            body: JSON.stringify(data),
        });

        if (!res.ok) {
            const errorData: ApiError = await res.json().catch(() => ({}));
            throw new Error(errorData.message);
        }

        return await res.json();
    },

    associateProfile: async (userId: number, profileId: number) => {
        const token = userAuthentication.getTokenFromStorage();

        const res = await fetch(`${API_URL}/associateProfile/${userId}`, {
            method: "PATCH",
            headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
            },
            body: JSON.stringify({ profileId }),
        });

        if (!res.ok) {
            const errorData: ApiError = await res.json().catch(() => ({}));
            throw new Error(errorData.message || "Erro ao associar perfil");
        }

  return res.json() as Promise<User>;
},

uploadProfilePicture: async (file: File) => {
  const token = userAuthentication.getTokenFromStorage();

  const formData = new FormData();
  formData.append("file", file);

  const res = await fetch(`${API_URL}/me/picture`, {
    method: "PATCH",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: formData,
  });

  if (!res.ok) {
    const errorData: ApiError = await res.json().catch(() => ({}));
    throw new Error(errorData.message || "Erro ao atualizar imagem");
  }

  return res.json();
},
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