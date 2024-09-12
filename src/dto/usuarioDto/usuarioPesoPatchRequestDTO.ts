import { z } from "zod";

export interface UsuarioPesoPatchRequestDTO {
	id: number;
	peso: number;
}

export const UsuarioPesoPatchRequestSchema = z.object({
	id: z.number().positive("Id deve ser um número positivo"),
	peso: z.number().positive("Peso deve ser um número positivo")
  });