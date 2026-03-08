import { useContext } from "react";
import { ProfileStudentContext } from "provider/ProfileStudentProvider/ProfileStudentContext";

export function useProfileStudentEssay() {
    return useContext(ProfileStudentContext)
} 