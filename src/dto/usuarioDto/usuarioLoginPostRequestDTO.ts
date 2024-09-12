import { z } from "zod";

export interface UsuarioLoginPostRequestDTO {
	login: string;
	senha: string;
}

export const UsuarioLoginPostRequestSchema = z.object({
	login: z.string().min(1, "Login é obrigatório"),
	senha: z.string().min(6, "Senha deve ter pelo menos 6 caracteres")
});