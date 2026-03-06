import { useContext } from "react";
import { DashboardContext } from "../provider/DashboardProvider/DashboardContext";

export function useDashboard() {
    return useContext(DashboardContext);
} 