import { NextFunction, Request, Response } from 'express'
import { prisma } from '../database/prismaClient';
import { ErrorDb } from '../error/ErrorDb';
export const verificarConexaoDb = async (req: Request, res: Response, next: NextFunction) => {
	try {
		await prisma.$connect();
		next();
	} catch (error: any) {
		throw ErrorDb(error, error.message);
	}
}