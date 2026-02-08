const API_URL = "/api/auth";

type CredentialsUser = {
  email: string;
  password: string;
};

type AuthResponse = {
  token: string;
};

type ApiError = {
  message?: string;
};

export const userAuthentication = {
  login: async ({ email, password }: CredentialsUser): Promise<string> => {
    const res = await fetch(`${API_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (!res.ok) {
      const errorData: ApiError = await res.json().catch(() => ({}));
      throw new Error(errorData.message);
    }

    const data: AuthResponse = await res.json();

    localStorage.setItem("token", data.token);
    return data.token;
  },

  register: async ({
    name,
    email,
    password,
  }: {
    name: string;
    email: string;
    password: string;
  }): Promise<void> => {
    const res = await fetch(`${API_URL}/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password }),
    });

    const data = await res.json().catch(() => ({}));

    if (!res.ok) {
      throw new Error(data.message);
    }

    return data;
  },

  logout: () => {
    localStorage.removeItem("token");
  },

  getTokenFromStorage: () => {
    return localStorage.getItem("token");
  },
};
