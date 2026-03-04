import { z } from "zod";

export const CategoryNewSchema = z.object({
  name: z
    .string()
    .min(3, "O nome da categoria deve ter no mínimo 3 caracteres")
    .max(100, "O nome da categoria deve ter no máximo 100 caracteres"),

  description: z
    .string()
    .max(255, "A descrição deve ter no máximo 255 caracteres")
    .optional()
    .or(z.literal("")),
});

export type CategoryCreateData = z.infer<typeof CategoryNewSchema>;