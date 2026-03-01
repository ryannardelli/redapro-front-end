import { useReducer, type ReactNode, useCallback, useEffect } from "react";
import { UserContext } from "./UserContext";
import { userReducer, initialStateUser } from "../../reducer/userReducer";
import { catchInformationsUser } from "@services/users";
import { useAuth } from "@hooks/useAuth";

type UserProviderProps = {
  children: ReactNode;
};

export const UserProvider = ({ children }: UserProviderProps) => {
  const [stateUser, dispatchUser] = useReducer(
    userReducer,
    initialStateUser
  );

  const { state } = useAuth();

  const loadUsers = useCallback(async () => {
    try {
      dispatchUser({ type: "SET_LOADING_USERS", payload: true });

      const users = await catchInformationsUser.findAll();

      dispatchUser({
        type: "SET_USERS",
        payload: users,
      });
    } catch (error) {
      console.error(error);

      const message =
        error instanceof Error
          ? error.message
          : "Erro ao carregar usuários";

      dispatchUser({
        type: "SET_ERROR_USERS",
        payload: message,
      });
    } finally {
      dispatchUser({ type: "SET_LOADING_USERS", payload: false });
    }
  }, []);

  useEffect(() => {
    if (state.isAuthenticated && !state.loading) {
      loadUsers();
    }
  }, [loadUsers, state.isAuthenticated, state.loading]);

  return (
    <UserContext.Provider
      value={{
        stateUser,
        dispatchUser,
        loadUsers,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};