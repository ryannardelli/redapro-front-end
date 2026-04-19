import { createContext } from "react";
import type { UpdateUserPayload, UploadProfilePictureResponse, User, UserAction, UserState } from "models/User";
import { initialStateUser } from "reducer/userReducer";

type UserContextType = {
  stateUser: UserState;
  dispatchUser: (action: UserAction) => void;

  loadUsers: () => Promise<void>;
  deleteUser: (id: number) => Promise<{ message: string }>;
  updateUser: (id: number, data: UpdateUserPayload) => Promise<UpdateUserPayload & { message: string }>;
  associateProfile: (userId: number, profileId: number) => Promise<User & { message: string }>;
  uploadProfilePicture: (file: File) => Promise<UploadProfilePictureResponse>;
};

export const UserContext = createContext<UserContextType>({
  stateUser: initialStateUser,
  dispatchUser: () => undefined,

  loadUsers: async () => {
    throw new Error("loadUsers not implemented");
  },

  deleteUser: async () => {
    throw new Error("deleteUser not implemented");
  },

   updateUser: async () => {
    throw new Error("updateUser not implemented");
  },

  associateProfile: async () => {
    throw new Error("associateProfile not implemented");
  },

  uploadProfilePicture: async () => {
    throw new Error("uploadProfilePicture not implemented");
  },
});