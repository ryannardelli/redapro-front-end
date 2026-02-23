import type { Menu } from "./Menu";

export interface Profile {
    id: number;
    name: string;
    description: string;
};

export type ProfileState = {
    profiles: Profile[];
    menus: Menu[];

    loadingProfiles: boolean;
    errorProfiles: string | null;

    loadingMenus: boolean;
    errorMenus: string | null;
};

export type ProfileAction =
    | { type: "ADD_PROFILE"; payload: Profile}
    | { type: "SET_PROFILE"; payload: Profile[]}

    | { type: "SET_LOADING_PROFILES"; payload: boolean }
    | { type: "SET_ERROR_PROFILES"; payload: string }

    | { type: "DELETE_PROFILE"; payload: number}
    | { type: "UPDATE_PROFILE"; payload: Profile }

    | { type: "SET_MENU"; payload: Menu[]}
    | { type: "SET_LOADING_MENU"; payload: boolean }
    | { type: "SET_ERROR_MENU"; payload: string };

export type CreateProfilePayload = {
    name: string;
    description: string;
};

export type UpdateProfilePayload = {
    name: string;
    description: string;
};