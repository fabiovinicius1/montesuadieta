import { NextFunction, Request, Response } from 'express'

export const errorMiddleware = (error: Error & any, req: Request, res: Response, next: NextFunction) => {
	if (error.statusCode === 500) {
		return res.status(error.statusCode).json({ message: error.message, info: error.info, descricao: error.descricao });
	}
	return res.status(error.statusCode).json({ message: error.message });
}