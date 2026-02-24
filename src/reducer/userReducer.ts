import type { UserAction, UserState } from "../models/User";

export const initialStateUser: UserState = {
  users: [],

  loadingUsers: false,
  errorUsers: null,
};

export function userReducer(
  state: UserState,
  action: UserAction
): UserState {
  switch (action.type) {
    case "SET_USERS":
      return {
        ...state,
        users: action.payload,
      };

    case "SET_LOADING_USERS":
      return {
        ...state,
        loadingUsers: action.payload,
      };

    case "SET_ERROR_USERS":
      return {
        ...state,
        errorUsers: action.payload,
        loadingUsers: false,
      };

    default:
      return state;
  }
}