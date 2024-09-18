import { z } from "zod";

export interface RefeicaoAlimentoPostDto {
	idAlimento: number;
	idRefeicao: number;
	quantidade: number;
}

export const RefeicaoAlimentoPostSchema = z.object({
	idAlimento: z.number().positive("Id deve ser um número positivo"),
	quantidade: z.number().positive("Quantidade deve ser um número positivo"),
	idRefeicao: z.number().positive("Id deve ser um número positivo")
});