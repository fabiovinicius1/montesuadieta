import { Request, Response, Router } from 'express';
import { pesquisarUsuarioService } from '../services/usuario/usuarioPesquisarService';
import { atualizarPesoUsuarioService } from '../services/usuario/usuarioAtualizarPesoService';
import { adicionarUsuarioService } from '../services/usuario/usuarioAdicionarService';
import { UsuarioGetDeleteDto } from '../dto/usuarioDto/usuarioGetDeleteDto';
import { UsuarioPatchPesoDto } from '../dto/usuarioDto/usuarioPatchPesoDto';
import { UsuarioPostPutDto } from '../dto/usuarioDto/usuarioPostPutDto';
import { usuarioRemoverService } from '../services/usuario/usuarioRemoverService';
import { ifError } from 'assert';

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
	const usuarioPostPutDto: UsuarioPostPutDto = req.body;
	const result = await adicionarUsuarioService(usuarioPostPutDto);
	return res.status(201).json(result);
});

router.patch('/atualizar/peso', async (req: Request, res: Response) => {
	const usuarioPatchPesoDto: UsuarioPatchPesoDto = req.body;
	const result = await atualizarPesoUsuarioService(usuarioPatchPesoDto);
	if (result) {
		return res.json(result);
	} else {
		return res.status(404).json({ message: 'Usuário não encontrado' });
	}
});

router.delete('/remover', async (req: Request, res: Response) => {
	const usuarioGetDeleteDto: UsuarioGetDeleteDto = req.body;
	const result = await usuarioRemoverService(usuarioGetDeleteDto);
	if (result) {
		return res.status(204).json(result);
	} else {
		return res.status(404).json({ message: 'Usuário não encontrado' });
	}
});

export default router;
