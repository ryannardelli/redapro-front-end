import { useContext } from "react";
import { ProfileContext } from "provider/ProfileProvider/ProfileContext";

export function useProfile() {
    return useContext(ProfileContext)
} 