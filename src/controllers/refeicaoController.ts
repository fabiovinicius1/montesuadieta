import { Request, Response, Router } from 'express';
import { RefeicaoPostPutDto } from '../dto/refeicaoDto/refeicaoPostPutDto';
import { RefeicaoGetDeleteDto } from '../dto/refeicaoDto/refeicaoGetDeleteDto';
import { refeicaoUsuarioAdicionarService } from '../services/refeicao/refeicaoUsuarioAdicionarService';
import { refeicaoUsuarioRemoverService } from '../services/refeicao/refeicaoUsuarioRemoverService';
import { refeicaoUsuarioPesquisarService } from '../services/refeicao/refeicaoUsuarioPesquisarService';
import { RefeicaoPatchNomeDto } from '../dto/refeicaoDto/refeicaoPatchNomeDto';
import { atualizarNomeRefeicaoUsuarioService } from '../services/refeicao/refeicaoUsuarioAtualizarNome';

const router = Router();

router.get('/pesquisar', async (req: Request, res: Response) => {
	const refeicaoGetDeleteDto: RefeicaoGetDeleteDto = req.body;
	const result = await refeicaoUsuarioPesquisarService(refeicaoGetDeleteDto);
	if (result) {
		return res.status(200).json(result);
	} else {
		return res.status(404).json({ message: "Usuario não possui refeição cadastrada" });
	}
});

router.post('/adicionar', async (req: Request, res: Response) => {
	const refeicaoPostPutDto: RefeicaoPostPutDto = req.body;
	const result = await refeicaoUsuarioAdicionarService(refeicaoPostPutDto);
	if (result) {
		return res.status(200).json(result);
	} else {
		return res.status(404).json({ message: "Usuario não encontrado" });
	}
});

router.patch('/atualizar/nome', async (req: Request, res: Response) => {
	const refeicaoPatchNomeDto: RefeicaoPatchNomeDto = req.body;
	const result = await atualizarNomeRefeicaoUsuarioService(refeicaoPatchNomeDto);
	if (result) {
		return res.json(result);
	} else {
		return res.status(404).json({ message: 'Usuário não encontrado' });
	}
});

router.delete('/remover', async (req: Request, res: Response) => {
	const refeicaoGetDeleteDto: RefeicaoGetDeleteDto = req.body
	const result = await refeicaoUsuarioRemoverService(refeicaoGetDeleteDto);
	if (result) {
		return res.status(204).json(result);
	} else {
		return res.status(404).json({ message: 'Usuário não encontrado' });
	}
});
export default router;