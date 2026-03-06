import { createContext } from "react";
import type { DashboardState, DashboardAction } from "../../models/Dashboard";
import { initialStateDashboard } from "../../reducer/dashboardReducer";

type DashboardContextType = {
  stateDashboard: DashboardState;
  dispatchDashboard: (action: DashboardAction) => void;
  loadStudentStats: () => Promise<void>;
  loadCorrectorStats: () => Promise<void>;
};

export const DashboardContext = createContext<DashboardContextType>({
  stateDashboard: initialStateDashboard,
  dispatchDashboard: () => undefined,
  loadStudentStats: async () => {
    throw new Error("loadStudentStats not implemented");
  },
  loadCorrectorStats: async () => {
    throw new Error("loadCorrectorStats not implemented");
  }
});