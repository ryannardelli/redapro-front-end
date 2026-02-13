import { Sidebar } from "@components/layout/Sidebar";
import { Outlet } from "react-router";

export default function MainTemplate() {
    return(
        <>
            <Sidebar />

            <div className="ml-0 md:ml-60 transition-all bg-gray-50">
                <Outlet />
            </div>
        </>
    );
}