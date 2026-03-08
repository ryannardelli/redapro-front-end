import { Navigate, Outlet } from "react-router";
import { useAuth } from "../../hooks/useAuth";
import { SpinnerLoading } from "@components/ui/Loading/SpinnerLoading";

type MemberRouteProps = {
  allowedProfile: string[];
};

export function MemberRoute({ allowedProfile }: MemberRouteProps) {
  const { state } = useAuth();

  if (state.loading) return <SpinnerLoading />;

  if (!state.isAuthenticated) return <Navigate to="/login" replace />;

  if (!allowedProfile.includes(state.user?.profile.name)) return <Navigate to="/" replace />;

  return <Outlet />;
}