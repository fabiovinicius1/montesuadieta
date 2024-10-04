import { z } from 'zod';
import { Request, Response, NextFunction } from 'express';
import { validacaoError } from '../error/validacaoError';

export const validarDados = (schema: z.ZodSchema<any>) => (req: Request, res: Response, next: NextFunction) => {
	const data = req.method === 'GET' ? { ...req.query, id: Number(req.query.id) } : req.body;
	const parseResult = schema.safeParse(data);

	if (!parseResult.success) {
		throw validacaoError(parseResult.error.errors[0].message);
	}
	next();
};
