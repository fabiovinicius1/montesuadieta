import { z } from "zod";

export interface RefeicaoPostPutDto {
	nomeRefeicao: string;
	usuarioId: number;
}

export const RefeicaoPostPutSchema = z.object({
	usuarioId: z.number().positive("Id deve ser um número positivo"),
	nomeRefeicao: z.string().min(1, "Nome da refeição é obrigatório")
});