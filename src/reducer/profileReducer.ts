import type { ProfileAction, ProfileState } from "../models/Profile";

export const initialStateProfile: ProfileState = {
  profiles: [],
  loading: false,
  error: null,
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
        loading: false,
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

    case "SET_LOADING":
      return {
        ...state,
        loading: action.payload,
      };

    case "SET_ERROR":
      return {
        ...state,
        error: action.payload,
        loading: false,
      };

    default:
      return state;
  }
}