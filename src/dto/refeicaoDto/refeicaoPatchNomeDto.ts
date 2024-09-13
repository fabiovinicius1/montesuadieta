import { z } from "zod";

export interface RefeicaoPatchNomeDto {
	id: number;
	nomeRefeicao: string;
}

export const RefeicaoPatchNomeSchema = z.object({
	id: z.number().positive("Id deve ser um número positivo"),
	nomeRefeicao: z.string().min(1, "Nome da refeição é obrigatório")
});