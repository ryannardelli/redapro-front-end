import type { Menu } from "./Menu";

export interface Profile {
    id: number;
    name: string;
    description: string;
};

export type ProfileState = {
  profiles: Profile[];

  menusByLoggedUser: Menu[];
  loadingMenusByLoggedUser: boolean;
  errorMenusByLoggedUser: string | null;

  menusByEditingProfile: Menu[];
  loadingMenusByEditingProfile: boolean;
  errorMenusByEditingProfile: string | null;

  loadingProfiles: boolean;
  errorProfiles: string | null;
};

export type ProfileAction =
  | { type: "SET_PROFILE"; payload: Profile[] }
  | { type: "ADD_PROFILE"; payload: Profile }
  | { type: "DELETE_PROFILE"; payload: number }
  | { type: "UPDATE_PROFILE"; payload: Profile }

  | { type: "SET_MENUS_LOGGED_USER"; payload: Menu[] }
  | { type: "SET_LOADING_MENUS_LOGGED_USER"; payload: boolean }
  | { type: "SET_ERROR_MENUS_LOGGED_USER"; payload: string }

  | { type: "SET_MENUS_EDITING_PROFILE"; payload: Menu[] }
  | { type: "SET_LOADING_MENUS_EDITING_PROFILE"; payload: boolean }
  | { type: "SET_ERROR_MENUS_EDITING_PROFILE"; payload: string }

  | { type: "SET_LOADING_PROFILES"; payload: boolean }
  | { type: "SET_ERROR_PROFILES"; payload: string };

export type CreateProfilePayload = {
    name: string;
    description: string;
};

export type UpdateProfilePayload = {
    name: string;
    description: string;
};