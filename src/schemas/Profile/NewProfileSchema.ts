import z from "zod";

export const NewProfileSchema = z.object({
    name: z
    .string()
    .nonempty("O nome não pode ficar vazio.")
    .max(50, "O nome só pode ter no máximo 50 caracteres."),

    description: z
    .string()
    .max(255, "A descrição só pode ter no máximo 250 caracteres."),
});

export type NewProfileData = z.infer<typeof NewProfileSchema>;