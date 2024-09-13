import { z } from "zod";

export interface RefeicaoAlimentoDeleteDto {
	id: number;
}

export const RefeicaoAlimentoDeleteSchema = z.object({
	id: z.number().positive("Id deve ser um número positivo")
});