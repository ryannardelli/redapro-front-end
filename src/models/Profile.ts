export interface Profile {
    id: number;
    name: string;
    description: string;
};

export type ProfileState = {
    profiles: Profile[];
    loading: boolean;
    error: string | null;
};

export type ProfileAction =
    | { type: "ADD_PROFILE"; payload: Profile}
    | { type: "SET_PROFILE"; payload: Profile[]}
    | { type: "SET_LOADING"; payload: boolean }
    | { type: "DELETE_PROFILE"; payload: number}
    | { type: "UPDATE_PROFILE"; payload: Profile }
    | { type: "SET_ERROR"; payload: string | null };

export type CreateProfilePayload = {
    name: string;
    description: string;
};

export type UpdateProfilePayload = {
    name: string;
    description: string;
};