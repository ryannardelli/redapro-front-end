export type ProfileName = "Estudante" | "Administrador" | "Corretor";

export type User = {
    id: number,
    name: string;
    email: string;
    role: "admin" | "student" | "corrector";
    profile: {
      id: number;
      name: ProfileName;
      description: string;
    };
    pictureUrl: string;
    createdAt: string;
}

export type UserState = {
  users: User[];
  
  loadingUsers: boolean;
  errorUsers: string | null;
};

export type UserAction =
  | { type: "SET_USERS"; payload: User[] }
  | { type: "SET_LOADING_USERS"; payload: boolean }
  | { type: "SET_ERROR_USERS"; payload: string | null };