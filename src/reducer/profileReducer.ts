import type { ProfileAction, ProfileState } from "../models/Profile";

export const initialStateProfile: ProfileState = {
  profiles: [],

  menusByLoggedUser: [],
  loadingMenusByLoggedUser: false,
  errorMenusByLoggedUser: null,

  menusByEditingProfile: [],
  loadingMenusByEditingProfile: false,
  errorMenusByEditingProfile: null,

  loadingProfiles: false,
  errorProfiles: null,
};

export function profileReducer(state: ProfileState, action: ProfileAction) {
  switch (action.type) {
    
    case "SET_PROFILE":
      return { ...state, profiles: action.payload };

    case "SET_LOADING_PROFILES":
      return { ...state, loadingProfiles: action.payload };

    case "SET_ERROR_PROFILES":
      return { ...state, errorProfiles: action.payload };

    case "SET_MENUS_LOGGED_USER":
      return { ...state, menusByLoggedUser: action.payload };

    case "SET_LOADING_MENUS_LOGGED_USER":
      return { ...state, loadingMenusByLoggedUser: action.payload };

    case "SET_ERROR_MENUS_LOGGED_USER":
      return {
        ...state,
        errorMenusByLoggedUser: action.payload,
        loadingMenusByLoggedUser: false
      };

    case "SET_MENUS_EDITING_PROFILE":
      return { ...state, menusByEditingProfile: action.payload };

    case "SET_LOADING_MENUS_EDITING_PROFILE":
      return { ...state, loadingMenusByEditingProfile: action.payload };

    case "SET_ERROR_MENUS_EDITING_PROFILE":
      return {
        ...state,
        errorMenusByEditingProfile: action.payload,
        loadingMenusByEditingProfile: false
      };

    default:
      return state;
  }
}