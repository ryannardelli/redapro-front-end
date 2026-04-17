import type { DashboardState, DashboardAction } from "../models/Dashboard";

export const initialStateDashboard: DashboardState = {
  studentStats: null,
  reviewerStats: null,
  recentEssays: [],
  recentReviewedEssays: [],
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
      
       case "SET_REVIEWER_STATS":
      return {
        ...state,
        reviewerStats: action.payload,
        error: null
      };

    case "SET_RECENT_REVIEWED_ESSAYS":
      return {
        ...state,
        recentReviewedEssays: action.payload,
        error: null
    };

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