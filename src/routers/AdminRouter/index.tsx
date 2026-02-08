import { Navigate, Outlet } from "react-router";

type PropsAdminRouter = {
    isAdmin: boolean;
}

export function AdminRoute({ isAdmin }: PropsAdminRouter) {
  if (!isAdmin) {
    return <Navigate to="/" />;
  }

  return <Outlet />;
}