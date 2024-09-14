import { Request, Response, NextFunction } from 'express';

export const autorizarAcesso = (req: Request, res: Response, next: NextFunction) => {
	const tokenPayload = req.body.tokenPayload;
	if (req.baseUrl === '/alimentosApp') {
		if (tokenPayload.cargo == 'admin') {
			next();
		}
		else {
			res.status(403).json({ message: 'Acesso negado. Apenas administradores podem acessar esta rota.' });
		}
	}
	else {
		if (tokenPayload.cargo == 'admin') {
			res.status(403).json({ message: 'Acesso negado. Recurso pertence a um usuário.' });
		}
	}
};