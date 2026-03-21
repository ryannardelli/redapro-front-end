import { z } from "zod";

export const EssaySchema = z.object({
  title: z
    .string()
    .nonempty("O título não pode ficar vazio.")
    .max(100, "O título pode ter no máximo 100 caracteres."),

     category_id: z
    .number({
      error: (issue) =>
        issue.input === undefined
          ? "Selecione uma categoria."
          : "Categoria inválida.",
    })
    .int()
    .gt(0, "A categoria é obrigatória."),
    
  content: z
    .string()
    .nonempty("A redação não pode ficar vazia.")
    .min(1000, "A redação deve ter no mínimo 1000 caracteres.")
    .max(5001, "A redação ultrapassou o limite de caracteres."),
});

export type EssayFormData = z.infer<typeof EssaySchema>;