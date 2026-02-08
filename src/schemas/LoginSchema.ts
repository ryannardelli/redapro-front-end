import z from "zod";

export const LoginSchema = z.object({
  email: z
    .string()
    .nonempty("O email não pode ficar vazio."),
  password: z
    .string()
    .nonempty("A senha não pode ficar vazia.")
});

export type LoginFormData = z.infer<typeof LoginSchema>;
