import { Request, Response, Router } from 'express';
import { RefeicaoPostPutDto, RefeicaoPostPutSchema } from '../dto/refeicaoDto/refeicaoPostPutDto';
import { RefeicaoGetDeleteDto, RefeicaoGetDeleteSchema } from '../dto/refeicaoDto/refeicaoGetDeleteDto';
import { refeicaoUsuarioAdicionarService } from '../services/refeicao/refeicaoUsuarioAdicionarService';
import { refeicaoUsuarioRemoverService } from '../services/refeicao/refeicaoUsuarioRemoverService';
import { refeicaoUsuarioPesquisarService } from '../services/refeicao/refeicaoUsuarioPesquisarService';
import { RefeicaoPatchNomeDto, RefeicaoPatchNomeSchema } from '../dto/refeicaoDto/refeicaoPatchNomeDto';
import { atualizarNomeRefeicaoUsuarioService } from '../services/refeicao/refeicaoUsuarioAtualizarNome';
import { RefeicaoAlimentoPostDto, RefeicaoAlimentoPostSchema } from '../dto/refeicaoDto/refeicaoAlimentoPostDto';
import { refeicaoUsuarioAdicionarAlimentoService } from '../services/refeicao/refeicaoUsuarioAdicionarAlimentoService';
import { refeicaoUsuarioRemoverAlimentoService } from '../services/refeicao/refeicaoUsuarioRemoverAlimentoService';
import { RefeicaoAlimentoGetDeleteDto, RefeicaoAlimentoGetDeleteSchema } from '../dto/refeicaoDto/RefeicaoAlimentoGetDeleteDto';
import { autenticarToken } from '../middleware/autenticarToken';
import { validarDados } from '../middleware/validacao';

const router = Router();

router.get('/pesquisar', validarDados(RefeicaoGetDeleteSchema), autenticarToken, async (req: Request, res: Response) => {
	const refeicaoGetDeleteDto: RefeicaoGetDeleteDto = req.body;
	const result = await refeicaoUsuarioPesquisarService(refeicaoGetDeleteDto);
	return res.status(200).json(result);

});

router.post('/adicionar', validarDados(RefeicaoPostPutSchema), autenticarToken, async (req: Request, res: Response) => {
	const refeicaoPostPutDto: RefeicaoPostPutDto = req.body;
	const result = await refeicaoUsuarioAdicionarService(refeicaoPostPutDto);
	return res.status(201).json(result);

});

router.patch('/atualizar/nome', validarDados(RefeicaoPatchNomeSchema), autenticarToken, async (req: Request, res: Response) => {
	const refeicaoPatchNomeDto: RefeicaoPatchNomeDto = req.body;
	const result = await atualizarNomeRefeicaoUsuarioService(refeicaoPatchNomeDto);
	return res.status(200).json(result);

});

router.delete('/remover', validarDados(RefeicaoGetDeleteSchema), autenticarToken, async (req: Request, res: Response) => {
	const refeicaoGetDeleteDto: RefeicaoGetDeleteDto = req.body
	await refeicaoUsuarioRemoverService(refeicaoGetDeleteDto);
	return res.status(204).json();

});

router.post('/adicionar/alimentoApp', validarDados(RefeicaoAlimentoPostSchema), autenticarToken, async (req: Request, res: Response) => {
	const refeicaoAlimentoPostDeleteDto: RefeicaoAlimentoPostDto = req.body;
	const result = await refeicaoUsuarioAdicionarAlimentoService(refeicaoAlimentoPostDeleteDto);
	return res.status(201).json(result);

});

router.delete('/remover/alimentoApp', validarDados(RefeicaoAlimentoGetDeleteSchema), autenticarToken, async (req: Request, res: Response) => {
	const refeicaoAlimentoGetDeleteDto: RefeicaoAlimentoGetDeleteDto = req.body
	await refeicaoUsuarioRemoverAlimentoService(refeicaoAlimentoGetDeleteDto);
	return res.status(204).json();
});
export default router;