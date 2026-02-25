export interface ReferenceEssay {
  id: number;
  title: string;
  content: string;
  year?: number;
  createdAt?: string;
  updatedAt?: string;
  category?: {
    id: number;
    name: string;
  };
}

export type ReferenceEssayState = {
  essays: ReferenceEssay[];
  loading: boolean;
  error: string | null;
};

export type ReferenceEssayAction =
  | { type: "SET_REFERENCE_ESSAY"; payload: ReferenceEssay[] }
  | { type: "ADD_REFERENCE_ESSAY"; payload: ReferenceEssay }
  | { type: "DELETE_REFERENCE_ESSAY"; payload: number }
  | { type: "UPDATE_REFERENCE_ESSAY"; payload: ReferenceEssay }
  | { type: "SET_LOADING"; payload: boolean }
  | { type: "SET_ERROR"; payload: string | null };

export type CreateReferenceEssayPayload = {
  title: string;
  content: string;
  categoryId: number;
  year: number;
};