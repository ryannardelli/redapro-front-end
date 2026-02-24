import { z } from 'zod';

export const RegisterSchema = z.object({
    name: z.string().min(3, "O nome não pode ficar vazio."),
    email: z.string().email("Digite um email válido."),
    password: z.string().min(8, "A senha deve ter no mínimo 8 caracteres."),
});

export type RegisterFormData = z.infer<typeof RegisterSchema>;