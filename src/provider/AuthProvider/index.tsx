import { useEffect, useReducer } from "react";
import { authReducer, initialState } from "../../reducer/authReducer";
import { AuthContext } from "./AuthContext";
import { userAuthentication } from "../../services/auth";
import type { LoginResponse } from "../../models/Auth";
import { getMe } from "../../services/users";

type AuthProviderProps = {
  children: React.ReactNode;
};

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  useEffect(() => {
    async function restoreSession() {
      const token = localStorage.getItem("token");

      if (!token) {
        dispatch({ type: "SET_LOADING", payload: false });
        return;
      }

      try {
        dispatch({ type: "SET_LOADING", payload: true });

        const user = await getMe();

        dispatch({
          type: "LOGIN",
          payload: { token, user },
        });
      } catch {
        localStorage.removeItem("token");
        dispatch({ type: "LOGOUT" });
      } finally {
        dispatch({ type: "SET_LOADING", payload: false });
      }
    }

    restoreSession();
  }, []);

  const login = async (email: string, password: string) => {
  try {
    dispatch({ type: "SET_LOADING", payload: true });

    const response = await userAuthentication.login({ email, password });
    const { token, user: initialUser } = response;
    
    localStorage.setItem("token", token);

    let finalUser = initialUser;
    try {
      const fullUser = await getMe();
      if (fullUser) finalUser = fullUser;
    } catch (e) {
      console.warn(e);
    }

    dispatch({ type: "LOGIN", payload: { token, user: finalUser } });

    return finalUser;
  } catch (err: any) {
    const message = err.response?.data?.message || err.message || "Erro ao fazer login";
    dispatch({ type: "SET_ERROR", payload: message });
    throw err;
  } finally {
    dispatch({ type: "SET_LOADING", payload: false });
  }
};

//   const login = async (email: string, password: string) => {
//   try {
//     dispatch({ type: "SET_LOADING", payload: true });

//     const { token }: LoginResponse = await userAuthentication.login({ email, password });
//     localStorage.setItem("token", token);

//     const user = await getMe(); 

//     dispatch({ type: "LOGIN", payload: { token, user } });

//     return user;
//   } catch (err: any) {
//     dispatch({ type: "SET_ERROR", payload: err.message});
//   } finally {
//     dispatch({ type: "SET_LOADING", payload: false });
//   }
// };

  // const login = async (email: string, password: string) => {
  //   try {
  //     dispatch({ type: "SET_LOADING", payload: true });

  //     const { token, user }: LoginResponse = await userAuthentication.login({ email, password });

  //     localStorage.setItem("token", token);

  //     dispatch({ type: "LOGIN", payload: { token, user } });

  //     return user;
  //   } catch (err: any) {
  //     dispatch({ type: "SET_ERROR", payload: err.message});
  //     throw err;
  //   } finally {
  //     dispatch({ type: "SET_LOADING", payload: false });
  //   }
  // };

  const registerUser = async (name: string, email: string, password: string) => {
  dispatch({ type: "SET_LOADING", payload: true });

  try {
    const response = await userAuthentication.register({ name, email, password });

    const { message, token, user } = response;

    dispatch({
      type: "REGISTER",
      payload: {
        token,
        user,
      },
    });

    localStorage.setItem("token", token);

    return { message, token, user };

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