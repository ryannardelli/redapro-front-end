import { z } from "zod";

export const ReferenceEssayEditSchema = z.object({
  title: z
    .string()
    .nonempty("O título não pode ficar vazio.")
    .max(50, "O título pode ter no máximo 50 caracteres."),

  category_id: z
    .number({
      required_error: "Selecione uma categoria.",
      invalid_type_error: "Categoria inválida.",
    })
    .int()
    .gt(0, "A categoria é obrigatória."),

  content: z
    .string()
    .nonempty("A redação não pode ficar vazia.")
    .min(1000, "A redação deve ter no mínimo 1000 caracteres.")
    .max(10000, "A redação ultrapassou o limite de caracteres."),

  year: z
    .number({
      required_error: "Informe o ano.",
      invalid_type_error: "Ano inválido.",
    })
    .int()
    .min(1990, "Ano inválido.")
    .max(new Date().getFullYear(), "O ano não pode ser no futuro."),

  authorName: z
    .string()
    .nonempty("O nome do autor não pode ficar vazio.")
    .max(100, "O nome do autor pode ter no máximo 100 caracteres."),
});

export type ReferenceEssayFormData = z.infer<typeof ReferenceEssayEditSchema>;