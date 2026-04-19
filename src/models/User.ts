import type { Profile } from "./Profile";

export type User = {
    id: number,
    name: string;
    email: string;
    role: "admin" | "student" | "corrector";
    profile: Profile;
    pictureUrl: string;
    createdAt: string;
}

export type UserState = {
  users: User[];
  currentUser?: User | null;
  
  loadingUsers: boolean;
  errorUsers: string | null;
};

export type UserAction =
  | { type: "SET_USERS"; payload: User[] }
  | { type: "SET_LOADING_USERS"; payload: boolean }
  | { type: "SET_ERROR_USERS"; payload: string | null }
  | { type: "DELETE_USER"; payload: number }
  | { type: "UPDATE_USER"; payload: User }
  | { type: "UPDATE_USER_PICTURE"; payload: {userId: number, pictureUrl: string};
};

export type UpdateUserPayload = {
  name: string;
  pictureUrl?: string;
  email?: string;
};

export interface UpdateUserResponse {
  message: string;
  user: User;
}

export type UploadProfilePictureResponse = {
  message: string;
  url: string;
};