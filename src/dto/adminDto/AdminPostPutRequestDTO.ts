import { z } from "zod";

export interface AdminPostPutRequestDTO {
	login: string;
	senha: string;
}

export const AdminPostPutRequestSchema = z.object({
	login: z.string().min(1, "Login é obrigatório"),
	senha: z.string().min(6, "Senha deve ter pelo menos 6 caracteres")
});