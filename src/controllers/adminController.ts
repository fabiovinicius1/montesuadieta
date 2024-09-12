import { Request, Response, Router } from 'express';
import { autenticarToken } from '../middleware/autenticarToken';
import { AdminGetDeleteRequestDTO } from '../dto/adminDto/AdminGetDeleteRequestDTO';
import { AdminPostPutRequestDTO } from '../dto/adminDto/AdminPostPutRequestDTO';
import { pesquisarAdminService } from '../services/admin/pesquisarAdminService';
import { adicionarAdminService } from '../services/admin/adicionarAdminService';
import { adminRemoverService } from '../services/admin/adminRemoverService';

const router = Router();

router.get('/pesquisar', autenticarToken, async (req: Request, res: Response) => {
	const adminGetDeleteRequestDTO: AdminGetDeleteRequestDTO = req.body;
	const result = await pesquisarAdminService(adminGetDeleteRequestDTO);
	return res.status(200).json(result);
});

router.post('/adicionar', async (req: Request, res: Response) => {
	const adminPostPutRequestDTO: AdminPostPutRequestDTO = req.body;
	const result = await adicionarAdminService(adminPostPutRequestDTO);
	return res.status(201).json(result);
});

router.delete('/remover', autenticarToken, async (req: Request, res: Response) => {
	const adminGetDeleteRequestDTO: AdminGetDeleteRequestDTO = req.body;
	await adminRemoverService(adminGetDeleteRequestDTO);
	return res.status(204).json();
});

export default router;
