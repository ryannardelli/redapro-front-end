import { z } from "zod";

export const EditCategorySchema = z.object({
  name: z
    .string()
    .trim()
    .min(3, "O nome da categoria deve ter no mínimo 3 caracteres")
    .max(100, "O nome da categoria deve ter no máximo 100 caracteres"),

  description: z
    .string()
    .trim()
    .min(10, "A descrição deve ter no mínimo 10 caracteres")
    .max(255, "A descrição deve ter no máximo 255 caracteres"),
});

export type EditCategoryData = z.infer<typeof EditCategorySchema>;