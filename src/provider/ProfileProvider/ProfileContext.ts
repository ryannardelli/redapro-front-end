import type { CreateProfilePayload, Profile, ProfileAction, ProfileState, UpdateProfilePayload } from "models/Profile";
import { createContext } from "react";
import { initialStateProfile } from "reducer/profileReducer";

type ProfileContextType = {
    stateProfile: ProfileState;
    dispatchProfile: (action: ProfileAction) => void;

    createProfile: (data: CreateProfilePayload) => Promise<Profile>;
    updateProfile: (data: UpdateProfilePayload) => Promise<Profile>;
    deleteProfile: (id: number) => Promise<void>;
};

export const ProfileContext = createContext<ProfileContextType>({
  stateProfile: initialStateProfile,
  dispatchProfile: () => undefined,

  createProfile: async () => {
    throw new Error("createProfile not implemented");
  },

  updateProfile: async () => {
    throw new Error("updateProfile not implemented");
  },

  deleteProfile: async () => {
    throw new Error("deleteProfile not implemented");
  },
});