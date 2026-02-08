import { useReducer } from "react";
import { authReducer, initialState } from "../../reducer/authReducer";
import { AuthContext } from "./AuthContext";
import { userAuthentication } from "../../services/auth";
import { jwtDecode } from "jwt-decode";
import { catchInformationsUser } from "../../services/users";

type AuthProviderProps = {
  children: React.ReactNode;
};

interface JwtPayload {
  id: number;
  name?: string;
  email?: string;
  exp: number;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [state, dispatch] = useReducer(authReducer, initialState);
  // const userContext = useUsers();

  const login = async (email: string, password: string) => {
    const token = await userAuthentication.login({ email, password });

    const decoded = jwtDecode<JwtPayload>(token);

    const userData = await catchInformationsUser.getUserById(decoded.id);

    dispatch({ type: "LOGIN", payload: { token, user: userData } });

    // userContext.dispatch({ type: "SET_USER", payload: userData });

    return userData;
  };

  const registerUser = async (name: string, email: string, password: string) => {
  dispatch({ type: "SET_LOADING", payload: true });

  try {
    const response = await userAuthentication.register({ name, email, password });

    const userData = await login(email, password);

    dispatch({
      type: "REGISTER",
      payload: {
        token: userAuthentication.getTokenFromStorage() || "",
        user: userData,
      },
    });

    return response.message;

  } catch (err: unknown) {
     const message =
    err instanceof Error ? err.message : "Erro inesperado";
    
    dispatch({ type: "SET_ERROR", payload: message });

    throw new Error(message);
  }
};

  const logout = () => {
    userAuthentication.logout();
    dispatch({ type: "LOGOUT" });
    window.location.href = "/login";
  };

  return (
    <AuthContext.Provider value={{ state, dispatch, login, registerUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
};