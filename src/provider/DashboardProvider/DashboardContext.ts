import { createContext } from "react";
import type { DashboardState, DashboardAction } from "../../models/Dashboard";
import { initialStateDashboard } from "../../reducer/dashboardReducer";

type DashboardContextType = {
  stateDashboard: DashboardState;
  dispatchDashboard: (action: DashboardAction) => void;
  loadStudentStats: () => Promise<void>;
  loadRecentEssays: () => Promise<void>;
  loadReviewerStats: () => Promise<void>;
  loadRecentReviewedEssays: () => Promise<void>;
};

export const DashboardContext = createContext<DashboardContextType>({
  stateDashboard: initialStateDashboard,
  dispatchDashboard: () => undefined,
  loadStudentStats: async () => {
    throw new Error("loadStudentStats not implemented");
  },

  loadRecentEssays: async () => {
    throw new Error("loadRecentEssays not implemented");
  },

  loadReviewerStats: async () => {
    throw new Error("loadReviewerStats not implemented");
  },

  loadRecentReviewedEssays: async () => {
    throw new Error("loadRecentReviewedEssays not implemented");
  }
});