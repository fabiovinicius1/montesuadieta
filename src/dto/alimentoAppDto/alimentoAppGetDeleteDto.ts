import { z } from "zod";

export interface AlimentoAppGetDeleteDto {
	id: number
}

export const AlimentoAppGetDeleteSchema = z.object({
	id: z.number().positive("Id deve ser um número positivo")
});