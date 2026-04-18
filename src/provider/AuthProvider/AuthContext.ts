import { createContext } from "react";
import type { Dispatch } from "react";
import { initialState } from "../../reducer/authReducer";
import type { AuthAction, AuthUser, RegisterResponse, State } from "../../models/Auth";

type ContextType = {
  state: State;
  dispatch: Dispatch<AuthAction>;
  logout: () => void;
  registerUser: (name: string, email: string, password: string) => Promise<RegisterResponse>;
  login: (email: string, password: string) => Promise<AuthUser>;
  forgotPassword: (email: string) => Promise<{ message: string }>;
};

export const AuthContext = createContext<ContextType>({
  state: initialState,
  dispatch: () => undefined,
  logout: () => undefined,
  registerUser: async () => {
    throw new Error("registerUser não implementado");
  },
   login: async () => {
    throw new Error("login não implementado");
  },
   forgotPassword: async () => {
    throw new Error("forgotPassword não implementado");
  },
});