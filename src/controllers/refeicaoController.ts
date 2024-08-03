import { Request, Response, Router } from 'express';
import { RefeicaoPostPutDto } from '../dto/refeicaoDto/refeicaoPostPutDto';
import { RefeicaoGetDto } from '../dto/refeicaoDto/refeicaoGetDto';
import { refeicaoUsuarioAdicionarService } from '../services/refeicao/refeicaoUsuarioAdicionarService';
import { RefeicaoDeleteDto } from '../dto/refeicaoDto/refeicaoDeleteDto';
import { refeicaoUsuarioRemoverService } from '../services/refeicao/refeicaoUsuarioRemoverService';
// import { pesquisarRefeicaoUsuarioService } from '../services/refeicao/pesquisarRefeicaoUsuarioService';
// import { adiciorRefeicaoUsuarioService } from '../services/refeicao/adicionarReceicaoUsuarioService';

const router = Router();

// router.get('/pesquisar', async (req: Request, res: Response) => {
// 	const refeicaoGetDeleteDto: RefeicaoGetDeleteDto = req.body;
// 	const result = await pesquisarRefeicaoUsuarioService(refeicaoGetDeleteDto);
// 	if (result) {
// 		return res.status(200).json(result);
// 	} else {
// 		return res.status(404).json({ message: "Usuario não possui refeição cadastrada" });
// 	}
// });

router.post('/adicionar', async (req: Request, res: Response) => {
	const refeicaoPostPutDto: RefeicaoPostPutDto = req.body;
	const result = await refeicaoUsuarioAdicionarService(refeicaoPostPutDto);
	if (result) {
		return res.status(200).json(result);
	} else {
		return res.status(404).json({ message: "Usuario não encontrado" });
	}
});

// router.patch('/atualizar/nome', (req: Request, res: Response) => {
// 	const nomeUsuario = decodeURIComponent(req.query.nome as string);

// });

router.delete('/remover', async (req: Request, res: Response) => {
	const refeicaoDeleteDto: RefeicaoDeleteDto = req.body
	const result = await refeicaoUsuarioRemoverService(refeicaoDeleteDto);
	if (result) {
		return res.status(204).json(result);
	} else {
		return res.status(404).json({ message: 'Usuário não encontrado' });
	}
});
export default router;