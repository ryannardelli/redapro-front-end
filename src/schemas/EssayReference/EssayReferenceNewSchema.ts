import { z } from "zod";

export const EssaysReferenceSchema = z.object({
  title: z
    .string()
    .min(1, "O título é obrigatório")
    .transform((val) => val.trim()),
     author: z
     
    .string()
    .min(1, "O nome do autor é obrigatório")
    .transform((val) => val.trim()),
  content: z
    .string()
    .min(1, "O conteúdo é obrigatório")
    .transform((val) => val.trim()),
  year: z
    .int("O ano deve ser um número inteiro")
    .min(1900, "O ano deve ser maior ou igual a 1900")
    .max(new Date().getFullYear(), "O ano não pode ser maior que o atual"),
    
  categoryId: z
  .number({
    required_error: "Selecione uma categoria.",
    invalid_type_error: "Categoria inválida.",
  })
  .int()
  .gt(0, "A categoria é obrigatória."),
});

export type EssaysReferenceData = z.infer<typeof EssaysReferenceSchema>;