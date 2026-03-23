export interface EssayCategory {
  id: number;
  name: string;
  description?: string | null;
}

export interface EssayFeedback {
  c1?: string | null;
  c2?: string | null;
  c3?: string | null;
  c4?: string | null;
  c5?: string | null;
  general?: string | null;
}

export interface Essay {
  id: number;
  title: string;
  content: string;
  note?: number | null;
  status?: "PENDENTE" | "CORRIGIDA" | "EM_CORRECAO" | "ERRO" | null;
  createdAt?: string | null;
  updatedAt?: string | null;
  category?: EssayCategory | null;
  c1: number;
  c2: number;
  c3: number;
  c4: number;
  c5: number;
  feedback?: EssayFeedback | null;
  user?: {
    id: number;
    name: string;
    email?: string;
  };
  reviewerId?: number | null;
}

export type EssayState = {
    essays: Essay[];
    loading: boolean;
    error: string | null;
}

export type EssayAction =
  | { type: "ADD_ESSAY"; payload: Essay }
  | { type: "SET_ESSAY"; payload: Essay[] }
  | { type: "SET_LOADING"; payload: boolean }
  | { type: "DELETE_ESSAY"; payload: number }
  | { type: "UPDATE_ESSAY"; payload: Essay }
  | { type: "UPDATE_ESSAY_REALTIME"; payload: UpdateEssayRealtimePayload }
  | { type: "UPDATE_ESSAY_CORRECTED"; payload: { id: number; correctedContent: string } }
  | { type: "SET_ERROR"; payload: string | null };

export type CreateEssayPayload = {
    title: string;
    content: string;
    category_id: number;
}

export type FinishReviewPayload = {
  c1: string;
  c2: string;
  c3: string;
  c4: string;
  c5: string;
  generalFeedback: string;
};

export type UpdateEssayRealtimePayload = {
  id: number;
  status?: Essay["status"];
  note?: Essay["note"];
  feedback?: EssayFeedback;
};

export type Feedback = {
  c1: number
  c2: number
  c3: number
  c4: number
  c5: number
  general: string
}