import { Request, Response, Router } from 'express';
import { RefeicaoPostPutDto } from '../dto/refeicaoDto/refeicaoPostPutDto';
import { RefeicaoGetDeleteDto } from '../dto/refeicaoDto/refeicaoGetDeleteDto';
import { refeicaoUsuarioAdicionarService } from '../services/refeicao/refeicaoUsuarioAdicionarService';
import { refeicaoUsuarioRemoverService } from '../services/refeicao/refeicaoUsuarioRemoverService';
import { refeicaoUsuarioPesquisarService } from '../services/refeicao/refeicaoUsuarioPesquisarService';
import { RefeicaoPatchNomeDto } from '../dto/refeicaoDto/refeicaoPatchNomeDto';
import { atualizarNomeRefeicaoUsuarioService } from '../services/refeicao/refeicaoUsuarioAtualizarNome';
import { RefeicaoAlimentoPostDto } from '../dto/refeicaoDto/refeicaoAlimentoPostDto';
import { refeicaoUsuarioAdicionarAlimentoService } from '../services/refeicao/refeicaoUsuarioAdicionarAlimentoService';
import { refeicaoUsuarioRemoverAlimentoService } from '../services/refeicao/refeicaoUsuarioRemoverAlimentoService';
import { RefeicaoAlimentoDeleteDto } from '../dto/refeicaoDto/RefeicaoAlimentoDeleteDto';

const router = Router();

router.get('/pesquisar', async (req: Request, res: Response) => {
	const refeicaoGetDeleteDto: RefeicaoGetDeleteDto = req.body;
	const result = await refeicaoUsuarioPesquisarService(refeicaoGetDeleteDto);
	if (result) {
		return res.status(200).json(result);
	} else {
		return res.status(404).json({ message: "refeicao não encontrado" });
	}
});

router.post('/adicionar', async (req: Request, res: Response) => {
	const refeicaoPostPutDto: RefeicaoPostPutDto = req.body;
	const result = await refeicaoUsuarioAdicionarService(refeicaoPostPutDto);
	return res.status(201).json(result);
});

router.patch('/atualizar/nome', async (req: Request, res: Response) => {
	const refeicaoPatchNomeDto: RefeicaoPatchNomeDto = req.body;
	const result = await atualizarNomeRefeicaoUsuarioService(refeicaoPatchNomeDto);
	if (result) {
		return res.json(result);
	} else {
		return res.status(404).json({ message: 'refeicao não encontrado' });
	}
});

router.delete('/remover', async (req: Request, res: Response) => {
	const refeicaoGetDeleteDto: RefeicaoGetDeleteDto = req.body
	const result = await refeicaoUsuarioRemoverService(refeicaoGetDeleteDto);
	if (result) {
		return res.status(204).json(result);
	} else {
		return res.status(404).json({ message: 'refeicao não encontrado' });
	}
});

router.post('/adicionar/alimento', async (req: Request, res: Response) => {
	const refeicaoAlimentoPostDeleteDto: RefeicaoAlimentoPostDto = req.body;
	const result = await refeicaoUsuarioAdicionarAlimentoService(refeicaoAlimentoPostDeleteDto);
	if (result) {
		return res.status(201).json(result);
	} else {
		return res.status(404).json({ message: "erro" });
	}
});

router.delete('/remover/alimento', async (req: Request, res: Response) => {
	const refeicaoAlimentoDeleteDto: RefeicaoAlimentoDeleteDto = req.body
	const result = await refeicaoUsuarioRemoverAlimentoService(refeicaoAlimentoDeleteDto);
	if (result) {
		return res.status(204).json(result);
	} else {
		return res.status(404).json({ message: 'erro' });
	}
});
export default router;