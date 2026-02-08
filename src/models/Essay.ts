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
  note?: string | null;
  status?: "PENDENTE" | "APROVADA" | "EM_CORRECAO" | "ERRO" | null;
  createdAt?: string | null;
  updatedAt?: string | null;
  category?: EssayCategory | null;
  feedback?: EssayFeedback | null;
  userId?: number | null;
  reviewerId?: number | null;
}

export type EssayState = {
    essay: Essay[];
    loading: boolean;
    error: string | null;
}

export type EssayAction =
    | {type: "ADD_ESSAY"; payload: Essay}
    | {type: "SET_ESSAY"; payload: Essay[]}
    | {type: "DELETE_ESSAY"; payload: number}
    | {type: "DELETE_ESSAY_FAILURE"; payload: string}
    | {type: "DELETE_ESSAY_REQUEST";}

export type CreateEssayPayload = {
    title: string;
    content: string;
    categoryId: number;
}