import type { Essay } from "./Essay";

export type StudentDashboardStats = {
  totalEssays: number;
  lastEssay: string;
  averageScore: number;
};

export type ReviewerDashboardStats = {
  totalReviewed: number;
  pending: number;
  corrected: number;
  averageScore: number;
  lastReviewed: string | null;
};

export type CorrectorDashboardStats = {
  essaysCorrected: number;
  essaysInReview: number;
  averageScoreGiven: number;
};

export type DashboardState = {
  studentStats: StudentDashboardStats | null;
  reviewerStats: ReviewerDashboardStats | null;
  recentEssays: Essay[];
  recentReviewedEssays: Essay[];
  loading: boolean;
  error: string | null;
};

export type DashboardAction =
  | { type: "SET_STUDENT_STATS"; payload: StudentDashboardStats }
  | { type: "SET_RECENT_ESSAYS"; payload: Essay[] }

  | { type: "SET_REVIEWER_STATS"; payload: ReviewerDashboardStats }
  | { type: "SET_RECENT_REVIEWED_ESSAYS"; payload: Essay[] }
  
  | { type: "SET_LOADING"; payload: boolean }
  | { type: "SET_ERROR"; payload: string | null };