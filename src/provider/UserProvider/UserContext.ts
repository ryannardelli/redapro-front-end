import { createContext } from "react";
import type { UpdateUserPayload, User, UserAction, UserState } from "models/User";
import { initialStateUser } from "reducer/userReducer";

type UserContextType = {
  stateUser: UserState;
  dispatchUser: (action: UserAction) => void;

  loadUsers: () => Promise<void>;
  deleteUser: (id: number) => Promise<{ message: string }>;
  updateUser: (id: number, data: UpdateUserPayload) => Promise<UpdateUserPayload>;
  associateProfile: (userId: number, profileId: number) => Promise<User>;
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
  }
});