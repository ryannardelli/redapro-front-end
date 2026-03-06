import { useReducer, useEffect, type ReactNode } from "react";
import { dashboardReducer, initialStateDashboard } from "../../reducer/dashboardReducer";
import { DashboardContext } from "./DashboardContext";
import { getStudentStats } from "../../services/dashboard";
import { useAuth } from "../../hooks/useAuth";

type Props = {
  children: ReactNode;
};

export const DashboardProvider = ({ children }: Props) => {
  const [stateDashboard, dispatchDashboard] = useReducer(
    dashboardReducer,
    initialStateDashboard
  );

  const { state } = useAuth();
  const isAuthenticated = state.isAuthenticated;
  const profile = state.user?.profile.name;

  const loadStudentStats = async () => {
    try {
      dispatchDashboard({ type: "SET_LOADING", payload: true });

      const stats = await getStudentStats();

      dispatchDashboard({
        type: "SET_STUDENT_STATS",
        payload: stats
      });

    } catch (error) {
      dispatchDashboard({
        type: "SET_ERROR",
        payload:
          error instanceof Error
            ? error.message
            : "Erro ao carregar estatísticas"
      });
    } finally {
      dispatchDashboard({ type: "SET_LOADING", payload: false });
    }
  };

  const loadCorrectorStats = async () => {
    try {
      dispatchDashboard({ type: "SET_LOADING", payload: true });

      const stats = await getCorrectorStats();

      dispatchDashboard({
        type: "SET_CORRECTOR_STATS",
        payload: stats
      });

    } catch (error) {
      dispatchDashboard({
        type: "SET_ERROR",
        payload:
          error instanceof Error
            ? error.message
            : "Erro ao carregar estatísticas"
      });
    } finally {
      dispatchDashboard({ type: "SET_LOADING", payload: false });
    }
  };

  useEffect(() => {
    if (!isAuthenticated) return;

    if (profile === "Estudante") {
      loadStudentStats();
    }

    if (profile === "Corretor") {
      loadCorrectorStats();
    }
  }, [isAuthenticated, profile]);

  return (
    <DashboardContext.Provider
      value={{
        stateDashboard,
        dispatchDashboard,
        loadStudentStats,
        loadCorrectorStats
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
};