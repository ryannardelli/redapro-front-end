import { useReducer, type ReactNode, useCallback, useEffect } from "react";
import { UserContext } from "./UserContext";
import { userReducer, initialStateUser } from "../../reducer/userReducer";
import { catchInformationsUser } from "@services/users";
import { useAuth } from "@hooks/useAuth";
import type { UpdateUserPayload, User } from "models/User";

type UserProviderProps = {
  children: ReactNode;
};

export type AssociateProfileResponse = User & { message: string };

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

  const deleteUser = useCallback(async (id: number) => {
  try {
    dispatchUser({ type: "SET_LOADING_USERS", payload: true });

    const response = await catchInformationsUser.deleteUser(id);

    dispatchUser({
      type: "DELETE_USER",
      payload: id,
    });

    return response;

  } catch (error) {
    console.error(error);

    if(error instanceof Error) {
      dispatchUser({
        type: "SET_ERROR_USERS",
        payload: error.message,
      });
    }

    throw error;
  } finally {
    dispatchUser({ type: "SET_LOADING_USERS", payload: false });
  }
}, []);

const updateUser = useCallback(async (id: number, data: UpdateUserPayload) => {
  try {
    dispatchUser({ type: "SET_LOADING_USERS", payload: true });

    const updatedUser = await catchInformationsUser.updateUser(id, data);

    dispatchUser({
      type: "UPDATE_USER",
      payload: updatedUser as unknown as User,
    });
    
    return updatedUser;

  } catch (error) {
    console.error(error);

    const message =
      error instanceof Error
        ? error.message
        : "Erro ao atualizar usuário";

    dispatchUser({
      type: "SET_ERROR_USERS",
      payload: message,
    });

    throw error;

  } finally {
    dispatchUser({ type: "SET_LOADING_USERS", payload: false });
  }
}, []);

const associateProfile = useCallback(
  async (userId: number, profileId: number): Promise<AssociateProfileResponse> => {
    try {
      dispatchUser({ type: "SET_LOADING_USERS", payload: true });

      const response = await catchInformationsUser.associateProfile(
        userId,
        profileId
      ) as AssociateProfileResponse;

      dispatchUser({
        type: "UPDATE_USER",
        payload: response,
      });

      return response;

    } catch (error) {
      console.error(error);
      const message = error instanceof Error ? error.message : "Erro ao associar perfil";

      dispatchUser({
        type: "SET_ERROR_USERS",
        payload: message,
      });

      throw error;
    } finally {
      dispatchUser({ type: "SET_LOADING_USERS", payload: false });
    }
  },
  []
);

const uploadProfilePicture = useCallback(async (file: File) => {
  try {
    dispatchUser({ type: "SET_LOADING_USERS", payload: true });

    const response = await catchInformationsUser.uploadProfilePicture(file);

    dispatchUser({
      type: "UPDATE_USER_PICTURE",
      payload: {
        userId: stateUser.currentUser?.id ?? 0,
        pictureUrl: response.url,
      },
    });

    return response;

  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Erro ao atualizar imagem";

    dispatchUser({
      type: "SET_ERROR_USERS",
      payload: message,
    });

    throw error;
  } finally {
    dispatchUser({ type: "SET_LOADING_USERS", payload: false });
  }
}, []);

  return (
    <UserContext.Provider
      value={{
        stateUser,
        dispatchUser,
        updateUser,
        loadUsers,
        deleteUser,
        associateProfile,
        uploadProfilePicture
      }}
    >
      {children}
    </UserContext.Provider>
  );
};