export type StudentDashboardStats = {
  totalEssays: number;
  lastEssay: string;
  averageScore: number;
};

export type CorrectorDashboardStats = {
  essaysCorrected: number;
  essaysInReview: number;
  averageScoreGiven: number;
};

export type DashboardState = {
  studentStats: StudentDashboardStats | null;
  correctorStats: CorrectorDashboardStats | null;
  loading: boolean;
  error: string | null;
};

export type DashboardAction =
  | { type: "SET_STUDENT_STATS"; payload: StudentDashboardStats }
  | { type: "SET_CORRECTOR_STATS"; payload: CorrectorDashboardStats }
  | { type: "SET_LOADING"; payload: boolean }
  | { type: "SET_ERROR"; payload: string | null };