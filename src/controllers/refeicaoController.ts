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
import { RefeicaoAlimentoPatchQuantidadeDto, RefeicaoAlimentoPatchQuantidadeSchema } from '../dto/refeicaoDto/refeicaoAlimentoPatchQuantidade';
import { atualizarQuantidadeAlimentoRefeicaoUsuarioService } from '../services/refeicao/atualizarQuantidadeAlimentoRefeicaoUsuarioService';
import { refeicaoUsuarioPesquisarTodasService } from '../services/refeicao/refeicaoUsuarioPesquisarTodasService';
import { refeicaoAdicionarAlimentoService } from '../services/refeicao/refeicaoAdicionarAlimentoService';

const router = Router();

router.get('/pesquisar', validarDados(RefeicaoGetDeleteSchema), autenticarToken, async (req: Request, res: Response) => {
	const refeicaoGetDeleteDto: RefeicaoGetDeleteDto = { id: Number(req.query.id) };
	const result = await refeicaoUsuarioPesquisarService(refeicaoGetDeleteDto);
	return res.status(200).json(result);

});
router.get('/pesquisar/todas', autenticarToken, async (req: Request, res: Response) => {
	const { id } = req.body.tokenPayload;
	const result = await refeicaoUsuarioPesquisarTodasService(id);
	return res.status(200).json(result);

});

router.post('/adicionar', validarDados(RefeicaoPostPutSchema), autenticarToken, async (req: Request, res: Response) => {
	const { nomeRefeicao } = req.body;
	const { id } = req.body.tokenPayload;
	const refeicaoPostPutDto: RefeicaoPostPutDto = { nomeRefeicao, usuarioId: id };
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
router.post('/adicionar/alimento/refeicao', autenticarToken, async (req: Request, res: Response) => {
	const { nomeRefeicao, nomeAlimento } = req.body;
	const { id } = req.body.tokenPayload;
	const refeicaoAlimento  = {id, nomeAlimento, nomeRefeicao};
	const result = await refeicaoAdicionarAlimentoService(refeicaoAlimento);
	return res.status(201).json(result);

});

router.delete('/remover/alimentoApp', validarDados(RefeicaoAlimentoGetDeleteSchema), autenticarToken, async (req: Request, res: Response) => {
	const refeicaoAlimentoGetDeleteDto: RefeicaoAlimentoGetDeleteDto = req.body
	await refeicaoUsuarioRemoverAlimentoService(refeicaoAlimentoGetDeleteDto);
	return res.status(204).json();
});

router.patch('/atualizar/quantidade/alimentoApp', validarDados(RefeicaoAlimentoPatchQuantidadeSchema), autenticarToken, async (req: Request, res: Response) => {
	const refeicaoAlimentoPatchQuantidadeDto: RefeicaoAlimentoPatchQuantidadeDto = req.body;
	const result = await atualizarQuantidadeAlimentoRefeicaoUsuarioService(refeicaoAlimentoPatchQuantidadeDto);
	return res.status(200).json(result);

});
export default router;