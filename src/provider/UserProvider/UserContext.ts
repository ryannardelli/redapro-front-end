import { createContext } from "react";
import type { UpdateUserPayload, UserAction, UserState } from "models/User";
import { initialStateUser } from "reducer/userReducer";

type UserContextType = {
  stateUser: UserState;
  dispatchUser: (action: UserAction) => void;

  loadUsers: () => Promise<void>;
  deleteUser: (id: number) => Promise<void>;
  updateUser: (id: number, data: UpdateUserPayload) => Promise<UpdateUserPayload>;
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
  }
});