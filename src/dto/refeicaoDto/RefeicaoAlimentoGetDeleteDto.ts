import { z } from "zod";

export interface RefeicaoAlimentoGetDeleteDto {
	id: number;
}

export const RefeicaoAlimentoGetDeleteSchema = z.object({
	id: z.number().positive("Id deve ser um número positivo")
});