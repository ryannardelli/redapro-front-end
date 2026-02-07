import { z } from 'zod';

export const RegisterSchema = z.object({
    name: z.string().min(3, "O nome é obrigatório"),
    email: z.string().email("Digite um email válido"),
    password: z.string().min(6, "A senha deve ter no mínimo 6 caracteres"),
});

export type RegisterFormData = z.infer<typeof RegisterSchema>;