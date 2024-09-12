import { z } from "zod";
export interface AdminLoginPostRequestDTO {
	login: string;
	senha: string;
}
export const AdminLoginPostRequestSchema = z.object({
	login: z.string().min(1, "Login é obrigatório"),
	senha: z.string().min(6, "Senha deve ter pelo menos 6 caracteres")
});