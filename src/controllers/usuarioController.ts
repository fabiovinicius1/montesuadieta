import { Request, Response, Router } from 'express';
import { pesquisarUsuarioService } from '../services/usuario/usuarioPesquisarService';
import { atualizarPesoUsuarioService } from '../services/usuario/usuarioAtualizarPesoService';
import { adicionarUsuarioService } from '../services/usuario/usuarioAdicionarService';
import { UsuarioGetDeleteRequestDTO, UsuarioGetDeleteRequestSchema } from '../dto/usuarioDto/usuarioGetDeleteRequestDTO';
import { UsuarioPesoPatchRequestDTO, UsuarioPesoPatchRequestSchema } from '../dto/usuarioDto/usuarioPesoPatchRequestDTO';
import { UsuarioPostPutRequestDTO, UsuarioPostPutRequestSchema } from '../dto/usuarioDto/usuarioPostPutRequestDTO';
import { usuarioRemoverService } from '../services/usuario/usuarioRemoverService';
import { autenticarToken } from '../middleware/autenticarToken';
import { validarDados } from '../middleware/validacao';

const router = Router();

router.get('/pesquisar', validarDados(UsuarioGetDeleteRequestSchema), autenticarToken, async (req: Request, res: Response) => {
	const usuarioGetDeleteRequestDTO: UsuarioGetDeleteRequestDTO = { id: Number(req.query.id) };
	const result = await pesquisarUsuarioService(usuarioGetDeleteRequestDTO);
	return res.status(200).json(result);
});

router.post('/adicionar', validarDados(UsuarioPostPutRequestSchema), async (req: Request, res: Response) => {
	const usuarioPostPutRequestDTO: UsuarioPostPutRequestDTO = req.body;
	const result = await adicionarUsuarioService(usuarioPostPutRequestDTO);
	return res.status(201).json(result);
});

router.patch('/atualizar/peso', validarDados(UsuarioPesoPatchRequestSchema), autenticarToken, async (req: Request, res: Response) => {
	const usuarioPesoPatchDTO: UsuarioPesoPatchRequestDTO = req.body;
	const result = await atualizarPesoUsuarioService(usuarioPesoPatchDTO);
	return res.status(200).json(result);
});

router.delete('/remover', validarDados(UsuarioGetDeleteRequestSchema), autenticarToken, async (req: Request, res: Response) => {
	const usuarioGetDeleteRequestDTO: UsuarioGetDeleteRequestDTO = req.body;
	await usuarioRemoverService(usuarioGetDeleteRequestDTO);
	return res.status(204).json();
});

export default router;
