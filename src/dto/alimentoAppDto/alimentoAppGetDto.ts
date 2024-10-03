import { z } from "zod";

export interface AlimentoAppGetDto {
	nomeAlimentoApp: string
}

export const AlimentoAppGetDtoSchema = z.object({
	nomeAlimentoApp: z.string().min(1, "Nome do alimento é obrigatório")
});
