import { UserContext } from "provider/UserProvider/UserContext";
import { useContext } from "react";

export function useUsers() {
    return useContext(UserContext);
}