export interface EssayCategory {
  id: number;
  name: string;
  description?: string | null;
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
  attachmentUrl: string | null;
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
  generalFeedback?: string | null;
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
  | { type: "UPDATE_ESSAY_ATTACHMENT"; payload: { id: number; url: string } }
  | { type: "SET_ERROR"; payload: string | null };

export type CreateEssayPayload = {
    title: string;
    content: string;
    category_id: number;
}

export type FinishReviewPayload = {
  c1: number;
  c2: number;
  c3: number;
  c4: number;
  c5: number;
  generalFeedback: string;
};

export type UpdateEssayRealtimePayload = {
  id: number;
  status?: Essay["status"];
  note?: number;
  feedback?: EssayFeedback;
  generalFeedback?: string;
};

export interface EssayFeedback {
  c1: number;
  c2: number;
  c3: number;
  c4: number;
  c5: number;
  general: string;
}

export type SocketEssayPayload = {
  id: number;
  status: string;
  note?: number;
  feedback?: EssayFeedback;
  generalFeedback?: string;
  message: string;
};