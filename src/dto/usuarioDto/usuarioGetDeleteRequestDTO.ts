import { z } from "zod";

export interface UsuarioGetDeleteRequestDTO {
	id: number;
}

export const UsuarioGetDeleteRequestSchema = z.object({
	id: z.number().positive("Id deve ser um número positivo")
});