import type { Menu, MenuUpdateDto } from "models/Menu";
import type {
  CreateProfilePayload,
  CreateProfileResponse,
  Profile,
  ProfileAction,
  ProfileState,
  UpdateProfilePayload
} from "models/Profile";

import { createContext } from "react";
import { initialStateProfile } from "reducer/profileReducer";

type ProfileContextType = {
  stateProfile: ProfileState;
  dispatchProfile: (action: ProfileAction) => void;

  createProfile: (data: CreateProfilePayload) => Promise<CreateProfileResponse | undefined>;
  updateProfile: (profileId: number, data: UpdateProfilePayload) => Promise<Profile & { message: string }>;
  deleteProfile: (id: number) => Promise<{ message: string }>;

  loadMenusByLoggedUser: (profileId: number) => Promise<void>;
  loadMenusByProfileForEdit: (profileId: number) => Promise<void>;

   updateMenu: (menuId: number, data: MenuUpdateDto) => Promise<Menu>;
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

  loadMenusByLoggedUser: async () => {
    throw new Error("loadMenusByLoggedUser not implemented");
  },

  loadMenusByProfileForEdit: async () => {
    throw new Error("loadMenusByProfileForEdit not implemented");
  },

  updateMenu: async () => {
  throw new Error("updateMenu not implemented");
}
});