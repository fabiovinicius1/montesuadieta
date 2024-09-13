import { z } from "zod";

export interface AlimentoAppPostPutDto {
	nomeAlimentoApp: string
	porcao: number;
	caloria: number
	proteina: number
	carboidrato: number
	saturados: number
	monoinsaturados: number
	poliinsaturados: number
	gordutaTotal: number
}

export const AlimentoAppPostPutSchema = z.object({
	nomeAlimentoApp: z.string().min(1, "Nome do alimento é obrigatório"),
	porcao: z.number().positive("Porção deve ser um número positivo"),
	caloria: z.number().positive("Caloria deve ser um número positivo"),
	proteina: z.number().positive("Proteína deve ser um número positivo"),
	carboidrato: z.number().positive("Carboidrato deve ser um número positivo"),
	saturados: z.number().positive("Saturados deve ser um número positivo"),
	monoinsaturados: z.number().positive("Monoinsaturados deve ser um número positivo"),
	poliinsaturados: z.number().positive("Poliinsaturados deve ser um número positivo"),
	gordutaTotal: z.number().positive("Gordura total deve ser um número positivo")
});
