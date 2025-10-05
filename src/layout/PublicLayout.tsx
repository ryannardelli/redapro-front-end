import { Outlet } from "react-router";

export default function PublicLayout() {
    return(
        <div className="flex justify-center items-center min-h-screen">
        <Outlet />
        </div>
    );
}