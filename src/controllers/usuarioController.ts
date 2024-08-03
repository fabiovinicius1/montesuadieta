import { Request, Response, Router } from 'express';
import { pesquisarUsuarioService } from '../services/usuario/usuarioPesquisarService';
import { atualizarPesoUsuarioService } from '../services/usuario/usuarioAtualizarPesoService';
import { adicionarUsuarioService } from '../services/usuario/usuarioAdicionarService';
import { UsuarioGetDeleteDto } from '../dto/usuarioDto/usuarioGetDeleteDto';
import { UsuarioPatchPesoDto } from '../dto/usuarioDto/usuarioPatchPesoDto';
import { UsuarioPostPutDto } from '../dto/usuarioDto/usuarioPostPutDto';
import { removerUsuarioService } from '../services/usuario/removerUsuarioService';

const router = Router();

router.get('/pesquisar', async (req: Request, res: Response) => {
	const usuarioGetDeleteDto: UsuarioGetDeleteDto = req.body;
	const result = await pesquisarUsuarioService(usuarioGetDeleteDto);
	if (result) {
		return res.status(200).json(result);
	} else {
		return res.status(404).json({ message: "Usuario não encontrado" });
	}
});

router.post('/adicionar', async (req: Request, res: Response) => {
	const usuarioPostPutDto: UsuarioPostPutDto = req.body;
	const result = await adicionarUsuarioService(usuarioPostPutDto);
	if (result) {
		return res.status(201).json(result);
	} else {
		return res.status(404).json({ message: "Login já existente" });
	}
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
	const result = await removerUsuarioService(usuarioGetDeleteDto);
	if (result) {
		return res.status(204).json(result);
	} else {
		return res.status(404).json({ message: 'Usuário não encontrado' });
	}
});

export default router;
