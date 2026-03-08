import { ProfileCorrectorContext } from "provider/ProfileCorrectorProvider/ProfileCorrectorContext";
import { useContext } from "react";

export function useProfileCorrectorEssay() {
    return useContext(ProfileCorrectorContext)
} 