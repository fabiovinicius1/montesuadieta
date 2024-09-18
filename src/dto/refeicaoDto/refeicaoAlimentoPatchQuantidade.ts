import { z } from "zod";

export interface RefeicaoAlimentoPatchQuantidadeDto {
	id: number;
	quantidade: number;
}

export const RefeicaoAlimentoPatchQuantidadeSchema = z.object({
	id: z.number().positive("Id deve ser um número positivo"),
	quantidade: z.number().positive("Quantidade deve ser um número positivo")
});