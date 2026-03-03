export interface EssayFilters {
  search: string;
  categoryId: string;
  scoreRange: string;
  status: "PENDENTE" | "CORRIGIDA" | "";
}