import { useReducer, useEffect, type ReactNode } from "react";
import { dashboardReducer, initialStateDashboard } from "../../reducer/dashboardReducer";
import { DashboardContext } from "./DashboardContext";
import { getRecentEssays, getRecentReviewedEssays, getReviewerStats, getStudentStats } from "../../services/dashboard";
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

  const loadRecentEssays = async () => {
  try {
    dispatchDashboard({ type: "SET_LOADING", payload: true });

    const essays = await getRecentEssays();

    dispatchDashboard({ type: "SET_RECENT_ESSAYS", payload: essays });
  } catch (error) {
    dispatchDashboard({
      type: "SET_ERROR",
      payload: error instanceof Error ? error.message : "Erro ao carregar últimas redações",
    });
  } finally {
    dispatchDashboard({ type: "SET_LOADING", payload: false });
  }
};

 const loadReviewerStats = async () => {
    try {
      dispatchDashboard({ type: "SET_LOADING", payload: true });

      const stats = await getReviewerStats();

      dispatchDashboard({
        type: "SET_REVIEWER_STATS",
        payload: stats
      });
    } catch (error) {
      dispatchDashboard({
        type: "SET_ERROR",
        payload:
          error instanceof Error
            ? error.message
            : "Erro ao carregar estatísticas do corretor"
      });
    } finally {
      dispatchDashboard({ type: "SET_LOADING", payload: false });
    }
  };

  const loadRecentReviewedEssays = async () => {
    try {
      dispatchDashboard({ type: "SET_LOADING", payload: true });

      const essays = await getRecentReviewedEssays();

      dispatchDashboard({
        type: "SET_RECENT_REVIEWED_ESSAYS",
        payload: essays
      });
    } catch (error) {
      dispatchDashboard({
        type: "SET_ERROR",
        payload:
          error instanceof Error
            ? error.message
            : "Erro ao carregar redações corrigidas"
      });
    } finally {
      dispatchDashboard({ type: "SET_LOADING", payload: false });
    }
  };

  useEffect(() => {
    if (!isAuthenticated) return;

    if (profile === "Estudante") {
      loadStudentStats();
      loadRecentEssays();
    }
  }, [isAuthenticated, profile]);

  return (
    <DashboardContext.Provider
      value={{
        stateDashboard,
        dispatchDashboard,
        loadStudentStats,
        loadRecentEssays,
        loadReviewerStats,
        loadRecentReviewedEssays,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
};