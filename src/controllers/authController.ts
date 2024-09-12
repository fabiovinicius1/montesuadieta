import { Request, Response, Router } from 'express';
import { UsuarioLoginPostRequestDTO } from '../dto/usuarioDto/usuarioLoginPostRequestDTO';
import { usuarioLoginService } from '../services/auth/usuarioLoginService';
import { AdminPostPutRequestDTO } from '../dto/adminDto/AdminPostPutRequestDTO';
import { adminLoginService } from '../services/auth/adminLoginService';

const router = Router();

router.post('/login/usuario', async (req: Request, res: Response) => {
	try {
		const usuarioLoginPostRequestDTO: UsuarioLoginPostRequestDTO = req.body;
		const result = await usuarioLoginService(usuarioLoginPostRequestDTO);
		return res.status(201).json(result);
	} catch (error: any) {
		return res.status(error.statusCode).json({ message: error.message });
	}
});

router.post('/login/admin', async (req: Request, res: Response) => {
	try {
		const adminPostPutRequestDTO: AdminPostPutRequestDTO = req.body;
		const result = await adminLoginService(adminPostPutRequestDTO);
		return res.status(201).json(result);
	} catch (error: any) {
		return res.status(error.statusCode).json({ message: error.message });
	}
});

export default router;