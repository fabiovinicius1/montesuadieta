import { z } from "zod";

export interface RefeicaoGetDeleteDto {
	id: number;
}
export const RefeicaoGetDeleteSchema = z.object({
	id: z.number().positive("Id deve ser um número positivo")
});