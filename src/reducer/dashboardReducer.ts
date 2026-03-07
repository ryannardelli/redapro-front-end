import type { DashboardState, DashboardAction } from "../models/Dashboard";

export const initialStateDashboard: DashboardState = {
  studentStats: null,
  correctorStats: null,
  recentEssays: [],
  loading: false,
  error: null
};

export function dashboardReducer(
  state: DashboardState,
  action: DashboardAction
) {
  switch (action.type) {
    case "SET_STUDENT_STATS":
      return { ...state, studentStats: action.payload, error: null };

    case "SET_CORRECTOR_STATS":
      return { ...state, correctorStats: action.payload, error: null };

    case "SET_RECENT_ESSAYS":
      return { ...state, recentEssays: action.payload, error: null };

    case "SET_LOADING":
      return { ...state, loading: action.payload };

    case "SET_ERROR":
      return { ...state, error: action.payload, loading: false };

    default:
      return state;
  }
}