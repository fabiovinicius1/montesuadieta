import { Request, Response, Router } from 'express';
import { UsuarioLoginPostRequestDTO } from '../dto/usuarioDto/usuarioLoginPostRequestDTO';
import { usuarioLoginService } from '../services/auth/usuarioLoginService';
import { AdminPostPutRequestDTO } from '../dto/adminDto/AdminPostPutRequestDTO';
import { adminLoginService } from '../services/auth/adminLoginService';

const router = Router();

router.post('/login/usuario', async (req: Request, res: Response) => {
	const usuarioLoginPostRequestDTO: UsuarioLoginPostRequestDTO = req.body;
	const result = await usuarioLoginService(usuarioLoginPostRequestDTO);
	return res.status(201).json(result);
});

router.post('/login/admin', async (req: Request, res: Response) => {
	const adminPostPutRequestDTO: AdminPostPutRequestDTO = req.body;
	const result = await adminLoginService(adminPostPutRequestDTO);
	return res.status(201).json(result);

});

export default router;