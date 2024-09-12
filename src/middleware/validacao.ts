import { z } from 'zod';
import { Request, Response, NextFunction } from 'express';
import { validacaoError } from '../error/validacaoError';

export const validarDados = (schema: z.ZodSchema<any>) => (req: Request, res: Response, next: NextFunction) => {
	const parseResult = schema.safeParse(req.body);

	if (!parseResult.success) {
		throw validacaoError(parseResult.error.errors[0].message);
	}
	req.body = parseResult.data;
	next();
};
