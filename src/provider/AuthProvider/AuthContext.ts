import { createContext } from "react";
import type { Dispatch } from "react";
import { initialState } from "../../reducer/authReducer";
import type { AuthAction, State } from "../../models/Auth";
import type { User } from "../../models/User";

type ContextType = {
  state: State;
  dispatch: Dispatch<AuthAction>;
  logout: () => void;
  registerUser: (name: string, email: string, password: string) => Promise<void>;
  login: (name: string, password: string) => Promise<User>;
};

export const AuthContext = createContext<ContextType>({
  state: initialState,
  dispatch: () => undefined,
  logout: () => undefined,
  registerUser: async () => undefined,
   login: async () => {
    throw new Error("login não implementado");
  },
});