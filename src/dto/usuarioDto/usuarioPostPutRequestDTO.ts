import { z } from 'zod';
export interface UsuarioPostPutRequestDTO {
	login: string;
	senha: string;
	peso: number;
}

export const UsuarioPostPutRequestSchema = z.object({
  login: z.string().min(1, "Login é obrigatório"),
  senha: z.string().min(6, "Senha deve ter pelo menos 6 caracteres"),
  peso: z.number().positive("Peso deve ser um número positivo"),
});