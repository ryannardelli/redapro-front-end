import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider/AuthContext";

export function useAuth() {
    return useContext(AuthContext);
}