import { z } from "zod";

export const EssaysReferenceSchema = z.object({
  title: z
    .string()
    .min(1, "O título é obrigatório")
    .transform((val) => val.trim()),
  content: z
    .string()
    .min(1, "O conteúdo é obrigatório")
    .transform((val) => val.trim()),
  year: z
    .number({ invalid_type_error: "O ano deve ser um número" })
    .int("O ano deve ser um número inteiro")
    .min(1900, "O ano deve ser maior ou igual a 1900")
    .max(new Date().getFullYear(), "O ano não pode ser maior que o atual"),
  pdf_url: z
    .string()
    .url("O PDF deve ser uma URL válida")
    .optional()
    .or(z.literal("").transform(() => null)), // permite vazio como null
  categoryId: z
  .number({
    required_error: "Selecione uma categoria.",
    invalid_type_error: "Categoria inválida.",
  })
  .int()
  .gt(0, "A categoria é obrigatória."),
});

export type EssaysReferenceData = z.infer<typeof EssaysReferenceSchema>;