import { SpinnerLoading } from "@components/ui/Loading/SpinnerLoading";
import { useAuth } from "@hooks/useAuth";
import { Navigate, Outlet } from "react-router";

export function AdminRoute() {
  const { state } = useAuth();

  if (state.loading) return <SpinnerLoading />;

  if (!state.isAuthenticated || state.user?.role !== "admin") {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
}