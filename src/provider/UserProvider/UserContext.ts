import { createContext } from "react";
import type { UserAction, UserState } from "models/User";
import { initialStateUser } from "reducer/userReducer";

type UserContextType = {
  stateUser: UserState;
  dispatchUser: (action: UserAction) => void;

  loadUsers: () => Promise<void>;
};

export const UserContext = createContext<UserContextType>({
  stateUser: initialStateUser,
  dispatchUser: () => undefined,

  loadUsers: async () => {
    throw new Error("loadUsers not implemented");
  },
});