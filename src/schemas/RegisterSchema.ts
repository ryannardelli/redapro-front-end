import { z } from 'zod';

export const RegisterSchema = z.object({
    name: z.string().min(3, "Nome obrigatório"),
    email: z.string().email("Email inválido"),
    password: z.string().min(6, "Mínimo 6 caracteres"),
});

export type RegisterFormData = z.infer<typeof RegisterSchema>;