import { Navigate, Outlet } from "react-router";

type PrivateRouteProps = {
  isAuth: boolean;
  loading: boolean;
};

export function PrivateRoute({ isAuth, loading }: PrivateRouteProps) {
  if (loading) {
    return null;
  }

  return isAuth ? <Outlet /> : <Navigate to="/login" replace />;
}
