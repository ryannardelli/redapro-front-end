import { Navigate, Outlet } from "react-router";

type PrivateRouteProps = {
    isAuth: boolean;
}

export function PrivateRoute({ isAuth }: PrivateRouteProps) {
  return isAuth ? <Outlet /> : <Navigate to="/login" />;
}