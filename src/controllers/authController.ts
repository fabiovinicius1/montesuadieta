import { Request, Response, Router } from 'express';
import { UsuarioLoginPostRequestDTO, UsuarioLoginPostRequestSchema } from '../dto/usuarioDto/usuarioLoginPostRequestDTO';
import { usuarioLoginService } from '../services/auth/usuarioLoginService';
import { AdminPostPutRequestDTO } from '../dto/adminDto/AdminPostPutRequestDTO';
import { adminLoginService } from '../services/auth/adminLoginService';
import { validarDados } from '../middleware/validacao';
import { AdminLoginPostRequestSchema } from '../dto/adminDto/AdminLoginPosRequestDTO';

const router = Router();

router.post('/login/usuario', validarDados(UsuarioLoginPostRequestSchema), async (req: Request, res: Response) => {
	const usuarioLoginPostRequestDTO: UsuarioLoginPostRequestDTO = req.body;
	const result = await usuarioLoginService(usuarioLoginPostRequestDTO);
	return res.status(201).json(result);
});

router.post('/login/admin', validarDados(AdminLoginPostRequestSchema), async (req: Request, res: Response) => {
	const adminPostPutRequestDTO: AdminPostPutRequestDTO = req.body;
	const result = await adminLoginService(adminPostPutRequestDTO);
	return res.status(201).json(result);

});

export default router;