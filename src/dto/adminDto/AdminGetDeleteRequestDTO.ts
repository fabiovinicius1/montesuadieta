import { z } from "zod";

export interface AdminGetDeleteRequestDTO {
	id: number;
}

export const AdminGetDeleteRequestSchema = z.object({
	id: z.number().positive("Id deve ser um número positivo")
});