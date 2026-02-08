export type User = {
    id: number,
    name: string;
    email: string;
    role: string;
    pictureUrl: string;
    createdAt: string;
}

export type AuthState = {
    user: User | null;
    token: string | null;
    isAuthenticated: boolean;
    loading: boolean;
    error: string | null;
};

export type AuthAction =
  | { type: "LOGIN"; payload: { user: User; token: string } }
  | { type: "REGISTER"; payload: { user: User; token: string } }
  | { type: "LOGOUT" }
  | { type: "SET_LOADING"; payload: boolean }
  | { type: "SET_ERROR"; payload: string }

export type AuthReducerType = (state: AuthState, action: AuthAction) => AuthState;

export type State = {
  user: User | null;
  isAuthenticated: boolean;
  loading: boolean;
  error: string | null;
};