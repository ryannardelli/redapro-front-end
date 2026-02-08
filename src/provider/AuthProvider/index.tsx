import { useEffect, useReducer } from "react";
import { authReducer, initialState } from "../../reducer/authReducer";
import { AuthContext } from "./AuthContext";
// import { jwtDecode } from "jwt-decode";
// import { catchInformationsUserById } from "../../services/user";
// import { useUsers } from "../../hook/useUsers";
import { userAuthentication } from "../../services/auth";

type AuthProviderProps = {
  children: React.ReactNode;
};

interface JwtPayload {
  sub: number;
  name?: string;
  email?: string;
  exp: number;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [state, dispatch] = useReducer(authReducer, initialState);
  // const userContext = useUsers();

  const login = async (email: string, password: string) => {
    const token = await userAuthentication.login({ email, password });

    if (!token) throw new Error("Token inválido.");

    const decoded = jwtDecode<JwtPayload>(token);

    const userData = await catchInformationsUserById.getUserById(decoded.sub);

    dispatch({ type: "LOGIN", payload: { token, user: userData } });

    // userContext.dispatch({ type: "SET_USER", payload: userData });

    localStorage.setItem("user", JSON.stringify(userData.accounts));

    return userData;
  };

  const registerUser = async (name: string, email: string, password: string) => {
  dispatch({ type: "SET_LOADING", payload: true });

  try {
    await userAuthentication.register({ name, email, password });

    const userData = await login(email, password);

    dispatch({
      type: "REGISTER",
      payload: {
        token: userAuthentication.getTokenFromStorage() || "",
        user: userData,
      },
    });
  } catch (err: unknown) {
    let message = "";

    if (err instanceof Error) {
      message = err.message;
    }

    dispatch({ type: "SET_ERROR", payload: message });

    throw err;
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