import { z } from "zod";

export interface RefeicaoAlimentoPostDto {
	idAlimento: number;
	idRefeicao: number;
}

export const RefeicaoAlimentoPostSchema = z.object({
	idAlimento: z.number().positive("Id deve ser um número positivo"),
	idRefeicao: z.number().positive("Id deve ser um número positivo")
});