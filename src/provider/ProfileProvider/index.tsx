import { useEffect, useReducer, type ReactNode, useCallback } from "react";
import { ProfileContext } from "./ProfileContext";
import { profileReducer, initialStateProfile } from "../../reducer/profileReducer";
import {
  getUserProfiles,
  create_profile,
  delete_profile,
  update_profile,
  getMenusByProfileId,
} from "../../services/profile";
import { useAuth } from "../../hooks/useAuth";
import type { CreateProfilePayload } from "../../models/Profile";

type ProfileProviderProps = {
  children: ReactNode;
};

export const ProfileProvider = ({ children }: ProfileProviderProps) => {
  const [stateProfile, dispatchProfile] = useReducer(
    profileReducer,
    initialStateProfile
  );

  const { state } = useAuth();

  const loadMenusByLoggedUser = useCallback(async (profileId: number) => {
  try {
    dispatchProfile({ type: "SET_LOADING_MENUS_LOGGED_USER", payload: true });

    const menus = await getMenusByProfileId(profileId);

    dispatchProfile({
      type: "SET_MENUS_LOGGED_USER",
      payload: menus,
    });
  } catch (error) {
    dispatchProfile({
      type: "SET_ERROR_MENUS_LOGGED_USER",
      payload: "Erro ao carregar menus do usuário",
    });
  } finally {
    dispatchProfile({
      type: "SET_LOADING_MENUS_LOGGED_USER",
      payload: false,
    });
  }
}, []);

  const loadUserProfiles = useCallback(async () => {
    if (!state.user) return;

    try {
      dispatchProfile({ type: "SET_LOADING_PROFILES", payload: true });

      const profiles = await getUserProfiles(state.user.id);

      dispatchProfile({
        type: "SET_PROFILE",
        payload: profiles,
      });
    } catch (error) {
      console.error(error);
      dispatchProfile({
        type: "SET_ERROR_PROFILES",
        payload: "Erro ao carregar perfis",
      });
    } finally {
      dispatchProfile({ type: "SET_LOADING_PROFILES", payload: false });
    }
  }, [state.user]);

  useEffect(() => {
    if (state.loading) return;
    if (!state.user) return;

    loadUserProfiles();
  }, [state.loading, state.user, loadUserProfiles]);

  useEffect(() => {
  if (!state.loading && state.user?.profile?.id) {
    loadMenusByLoggedUser(state.user.profile.id);
  }
}, [state.user?.profile?.id, state.loading, loadMenusByLoggedUser]);

  const createProfile = async (data: CreateProfilePayload) => {
    if (!state.user) return;

    try {
      dispatchProfile({ type: "SET_LOADING_PROFILES", payload: true });

      const response = await create_profile(state.user.id, data);

      await loadUserProfiles();

      return response;
    } catch (error: any) {
      console.error(error);

      const message =
        error instanceof Error
          ? error.message
          : error?.message || "Erro ao criar perfil";

      dispatchProfile({ type: "SET_ERROR_PROFILES", payload: message });
      throw error;
    } finally {
      dispatchProfile({ type: "SET_LOADING_PROFILES", payload: false });
    }
  };

  const deleteProfile = async (profileId: number) => {
    try {
      dispatchProfile({ type: "SET_LOADING_PROFILES", payload: true });

      const response = await delete_profile(profileId);

      dispatchProfile({
        type: "DELETE_PROFILE",
        payload: profileId,
      });

      return response;
    } catch (error) {
      console.error(error);

      if (error instanceof Error) {
        dispatchProfile({
          type: "SET_ERROR_PROFILES",
          payload: error.message,
        });
      }

      throw error;
    } finally {
      dispatchProfile({ type: "SET_LOADING_PROFILES", payload: false });
    }
  };

  const updateProfile = async (
    profileId: number,
    data: CreateProfilePayload
  ) => {
    try {
      dispatchProfile({ type: "SET_LOADING_PROFILES", payload: true });

      const updatedProfile = await update_profile(profileId, data);

      dispatchProfile({
        type: "UPDATE_PROFILE",
        payload: updatedProfile,
      });

      await loadUserProfiles();

      return updatedProfile;
    } catch (error) {
      console.error(error);

      const message =
        error instanceof Error
          ? error.message
          : "Erro ao atualizar perfil";

      dispatchProfile({ type: "SET_ERROR_PROFILES", payload: message });
      throw error;
    } finally {
      dispatchProfile({ type: "SET_LOADING_PROFILES", payload: false });
    }
  };

const loadMenusByProfileForEdit = useCallback(async (profileId: number) => {
  try {
    dispatchProfile({
      type: "SET_LOADING_MENUS_EDITING_PROFILE",
      payload: true
    });

    const menus = await getMenusByProfileId(profileId);

    dispatchProfile({
      type: "SET_MENUS_EDITING_PROFILE",
      payload: menus
    });
  } catch (error) {
    dispatchProfile({
      type: "SET_ERROR_MENUS_EDITING_PROFILE",
      payload: "Erro ao carregar menus do perfil"
    });
  } finally {
    dispatchProfile({
      type: "SET_LOADING_MENUS_EDITING_PROFILE",
      payload: false
    });
  }
}, []);

   return (
    <ProfileContext.Provider
      value={{
        stateProfile,
        createProfile,
        updateProfile,
        deleteProfile,
        loadMenusByLoggedUser,
        loadMenusByProfileForEdit
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
};
