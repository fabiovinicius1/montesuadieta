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
	try {
		const refeicaoGetDeleteDto: RefeicaoGetDeleteDto = req.body;
		const result = await refeicaoUsuarioPesquisarService(refeicaoGetDeleteDto);
		return res.status(200).json(result);
	} catch (error: any) {
		return res.status(error.statusCode).json({ message: error.message });
	}
});

router.post('/adicionar', async (req: Request, res: Response) => {
	try {
		const refeicaoPostPutDto: RefeicaoPostPutDto = req.body;
		const result = await refeicaoUsuarioAdicionarService(refeicaoPostPutDto);
		return res.status(201).json(result);
	} catch (error: any) {
		return res.status(error.statusCode).json({ message: error.message });
	}
});

router.patch('/atualizar/nome', async (req: Request, res: Response) => {
	try {
		const refeicaoPatchNomeDto: RefeicaoPatchNomeDto = req.body;
		const result = await atualizarNomeRefeicaoUsuarioService(refeicaoPatchNomeDto);
		return res.status(200).json(result);
	} catch (error: any) {
		return res.status(error.statusCode).json({ message: error.message });
	}
});

router.delete('/remover', async (req: Request, res: Response) => {
	try {
		const refeicaoGetDeleteDto: RefeicaoGetDeleteDto = req.body
		await refeicaoUsuarioRemoverService(refeicaoGetDeleteDto);
		return res.status(204).json();
	} catch (error: any) {
		return res.status(error.statusCode).json({ message: error.message });
	}
});

router.post('/adicionar/alimento', async (req: Request, res: Response) => {
	try {
		const refeicaoAlimentoPostDeleteDto: RefeicaoAlimentoPostDto = req.body;
		const result = await refeicaoUsuarioAdicionarAlimentoService(refeicaoAlimentoPostDeleteDto);
		return res.status(201).json(result);
	} catch (error: any) {
		return res.status(error.statusCode).json({ message: error.message });
	}
});

router.delete('/remover/alimento', async (req: Request, res: Response) => {
	try {
		const refeicaoAlimentoDeleteDto: RefeicaoAlimentoDeleteDto = req.body
		await refeicaoUsuarioRemoverAlimentoService(refeicaoAlimentoDeleteDto);
		return res.status(204).json();
	} catch (error: any) {
		return res.status(error.statusCode).json({ message: error.message });
	}
});
export default router;