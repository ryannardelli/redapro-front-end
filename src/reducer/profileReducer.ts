import type { ProfileAction, ProfileState } from "../models/Profile";

export const initialStateProfile: ProfileState = {
  profiles: [],
  menus: [],

  loadingProfiles: false,
  errorProfiles: null,

  loadingMenus: false,
  errorMenus: null,
};

export function profileReducer(
  state: ProfileState,
  action: ProfileAction
) {
  switch (action.type) {
    case "SET_PROFILE":
      return {
        ...state,
        profiles: action.payload,
      };

    case "ADD_PROFILE":
      return {
        ...state,
        profiles: [...state.profiles, action.payload],
      };

    case "DELETE_PROFILE":
      return {
        ...state,
        loadingProfiles: false,
        profiles: state.profiles.filter(
          (profile) => profile.id !== action.payload
        ),
      };

    case "UPDATE_PROFILE":
      return {
        ...state,
        profiles: state.profiles.map((profile) =>
          profile.id === action.payload.id ? action.payload : profile
        ),
      };

    case "SET_LOADING_PROFILES":
      return {
        ...state,
        loadingProfiles: action.payload,
      };

    case "SET_ERROR_PROFILES":
      return {
        ...state,
        errorProfiles: action.payload,
        loadingProfiles: false,
      };

    case "SET_MENU":
      return {
        ...state,
        menus: action.payload,
      };

     case "SET_LOADING_MENU":
      return {
        ...state,
        loadingMenus: action.payload,
      };

    case "SET_ERROR_MENU":
      return {
        ...state,
        errorMenus: action.payload,
        loadingMenus: false,
      };

    default:
      return state;
  }
}