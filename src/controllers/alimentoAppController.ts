import { Request, Response, Router } from 'express';
import { AlimentoAppGetDeleteDto } from '../dto/alimentoAppDto/alimentoAppGetDeleteDto';
import { alimentoAppPesquisarService } from '../services/alimentoApp/alimentoAppPesquisarService';
import { AlimentoAppPostPutDto } from '../dto/alimentoAppDto/alimentoAppPostPutDto';
import { alimentoAppAdicionarService } from '../services/alimentoApp/alimentoAppAdicionarService';
import { alimentoAppRemoverService } from '../services/alimentoApp/alimentoAppRemoverService';

const router = Router();

router.get('/pesquisar', async (req: Request, res: Response) => {
	const alimentoAppGetDeleteDto: AlimentoAppGetDeleteDto = req.body;
	const result = await alimentoAppPesquisarService(alimentoAppGetDeleteDto);
	if (result) {
		return res.status(200).json(alimentoAppGetDeleteDto);
	} else {
		return res.status(404).json({ message: "Alimento não encontrado" });
	}
});

router.post('/adicionar', async (req: Request, res: Response) => {
	const alimentoAppPostPutDto: AlimentoAppPostPutDto = req.body;
	const result = await alimentoAppAdicionarService(alimentoAppPostPutDto)
	return res.status(201).json(result)
});

router.delete('/remover', async (req: Request, res: Response) => {
	const alimentoAppGetDeleteDto: AlimentoAppGetDeleteDto = req.body;
	const result = await alimentoAppRemoverService(alimentoAppGetDeleteDto);
	if (result) {
		return res.status(204).json(alimentoAppGetDeleteDto);
	} else {
		return res.status(404).json({ message: "Alimento não encontrado" });
	}
});

export default router;