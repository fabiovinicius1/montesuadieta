import { Request, Response, Router } from 'express';
import { pesquisarUsuarioService } from '../services/usuario/usuarioPesquisarService';
import { atualizarPesoUsuarioService } from '../services/usuario/usuarioAtualizarPesoService';
import { adicionarUsuarioService } from '../services/usuario/usuarioAdicionarService';
import { UsuarioGetDeleteDto } from '../dto/usuarioDto/usuarioGetDeleteDto';
import { UsuarioPatchPesoDto } from '../dto/usuarioDto/usuarioPatchPesoDto';
import { UsuarioPostPutDto } from '../dto/usuarioDto/usuarioPostPutDto';
import { usuarioRemoverService } from '../services/usuario/usuarioRemoverService';

const router = Router();

router.get('/pesquisar', async (req: Request, res: Response) => {
	try {
		const usuarioGetDeleteDto: UsuarioGetDeleteDto = req.body;
		const result = await pesquisarUsuarioService(usuarioGetDeleteDto);
		return res.status(200).json(result);
	} catch (error: any) {
		return res.status(error.statusCode).json({ message: error.message });
	}
});

router.post('/adicionar', async (req: Request, res: Response) => {
	try {
		const usuarioPostPutDto: UsuarioPostPutDto = req.body;
		const result = await adicionarUsuarioService(usuarioPostPutDto);
		return res.status(201).json(result);
	} catch (error: any) {
		return res.status(error.statusCode).json({ message: error.message });
	}
});

router.patch('/atualizar/peso', async (req: Request, res: Response) => {
	try {
		const usuarioPatchPesoDto: UsuarioPatchPesoDto = req.body;
		const result = await atualizarPesoUsuarioService(usuarioPatchPesoDto);
		return res.json(result);
	} catch (error: any) {
		return res.status(error.statusCode).json({ message: error.message });
	}
});

router.delete('/remover', async (req: Request, res: Response) => {
	try {
		const usuarioGetDeleteDto: UsuarioGetDeleteDto = req.body;
		const result = await usuarioRemoverService(usuarioGetDeleteDto);
		return res.status(204).json(result);
	} catch (error: any) {
		return res.status(error.statusCode).json({ message: error.message });
	}
});

export default router;
