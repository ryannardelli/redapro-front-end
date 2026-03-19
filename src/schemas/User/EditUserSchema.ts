import { z } from "zod";

export const EditUserSchema = z.object({
  name: z
    .string()
    .min(2, "O nome precisa ter pelo menos 2 letras.")
    .max(100, "O nome pode ter no máximo 100 caracteres."),
    
  pictureUrl: z.string().optional(),
});

export type UserEditFormData = z.infer<typeof EditUserSchema>;