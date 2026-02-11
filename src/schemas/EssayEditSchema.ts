import { z } from "zod";

export const EssayEditSchema = z.object({
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
    .max(5001, "A redação ultrapassou o limite de caracteres."),

  mode: z.enum(["ia", "corretor"], {
    required_error: "Selecione o tipo de correção.",
  }),
});

export type EssayEditFormData = z.infer<typeof EssayEditSchema>;