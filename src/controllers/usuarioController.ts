import { Request, Response, Router } from 'express';
import { pesquisarUsuarioService } from '../services/usuario/usuarioPesquisarService';
import { atualizarPesoUsuarioService } from '../services/usuario/usuarioAtualizarPesoService';
import { adicionarUsuarioService } from '../services/usuario/usuarioAdicionarService';
import { UsuarioGetDeleteRequestDTO } from '../dto/usuarioDto/usuarioGetDeleteRequestDTO';
import { UsuarioPesoPatchRequestDTO } from '../dto/usuarioDto/usuarioPesoPatchRequestDTO';
import { UsuarioPostPutRequestDTO } from '../dto/usuarioDto/usuarioPostPutRequestDTO';
import { usuarioRemoverService } from '../services/usuario/usuarioRemoverService';

const router = Router();

router.get('/pesquisar', async (req: Request, res: Response) => {
	try {
		const usuarioGetDeleteRequestDTO: UsuarioGetDeleteRequestDTO = req.body;
		const result = await pesquisarUsuarioService(usuarioGetDeleteRequestDTO);
		return res.status(200).json(result);
	} catch (error: any) {
		return res.status(error.statusCode).json({ message: error.message });
	}
});

router.post('/adicionar', async (req: Request, res: Response) => {
	try {
		const usuarioPostPutRequestDTO: UsuarioPostPutRequestDTO = req.body;
		const result = await adicionarUsuarioService(usuarioPostPutRequestDTO);
		return res.status(201).json(result);
	} catch (error: any) {
		return res.status(error.statusCode).json({ message: error.message });
	}
});

router.patch('/atualizar/peso', async (req: Request, res: Response) => {
	try {
		const usuarioPesoPatchDTO: UsuarioPesoPatchRequestDTO = req.body;
		const result = await atualizarPesoUsuarioService(usuarioPesoPatchDTO);
		return res.json(result);
	} catch (error: any) {
		return res.status(error.statusCode).json({ message: error.message });
	}
});

router.delete('/remover', async (req: Request, res: Response) => {
	try {
		const usuarioGetDeleteRequestDTO: UsuarioGetDeleteRequestDTO = req.body;
		const result = await usuarioRemoverService(usuarioGetDeleteRequestDTO);
		return res.status(204).json(result);
	} catch (error: any) {
		return res.status(error.statusCode).json({ message: error.message });
	}
});

export default router;
