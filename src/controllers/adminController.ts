import { Request, Response, Router } from 'express';
import { autenticarToken } from '../middleware/autenticarToken';
import { AdminGetDeleteRequestDTO, AdminGetDeleteRequestSchema } from '../dto/adminDto/AdminGetDeleteRequestDTO';
import { AdminPostPutRequestSchema, AdminPostPutRequestDTO } from '../dto/adminDto/AdminPostPutRequestDTO';
import { pesquisarAdminService } from '../services/admin/pesquisarAdminService';
import { adicionarAdminService } from '../services/admin/adicionarAdminService';
import { adminRemoverService } from '../services/admin/adminRemoverService';
import { validarDados } from '../middleware/validacao';

const router = Router();

router.get('/pesquisar', validarDados(AdminGetDeleteRequestSchema), autenticarToken, async (req: Request, res: Response) => {
	const adminGetDeleteRequestDTO: AdminGetDeleteRequestDTO = { id: Number(req.query.id) };
	const result = await pesquisarAdminService(adminGetDeleteRequestDTO);
	return res.status(200).json(result);
});

router.post('/adicionar', validarDados(AdminPostPutRequestSchema), async (req: Request, res: Response) => {
	const adminPostPutRequestDTO: AdminPostPutRequestDTO = req.body;
	const result = await adicionarAdminService(adminPostPutRequestDTO);
	return res.status(201).json(result);
});

router.delete('/remover', validarDados(AdminGetDeleteRequestSchema), autenticarToken, async (req: Request, res: Response) => {
	const adminGetDeleteRequestDTO: AdminGetDeleteRequestDTO = req.body;
	await adminRemoverService(adminGetDeleteRequestDTO);
	return res.status(204).json();
});

export default router;
