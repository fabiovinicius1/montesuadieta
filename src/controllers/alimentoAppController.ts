import { Request, Response, Router } from 'express';
import { AlimentoAppGetDeleteDto } from '../dto/alimentoAppDto/alimentoAppGetDeleteDto';
import { alimentoAppPesquisarService } from '../services/alimentoApp/alimentoAppPesquisarService';
import { AlimentoAppPostPutDto } from '../dto/alimentoAppDto/alimentoAppPostPutDto';
import { alimentoAppAdicionarService } from '../services/alimentoApp/alimentoAppAdicionarService';
import { alimentoAppRemoverService } from '../services/alimentoApp/alimentoAppRemoverService';
import { autenticarToken } from '../middleware/autenticarToken';

const router = Router();

router.get('/pesquisar', async (req: Request, res: Response) => {
	try {
		const alimentoAppGetDeleteDto: AlimentoAppGetDeleteDto = req.body;
		const result = await alimentoAppPesquisarService(alimentoAppGetDeleteDto);
		return res.status(200).json(result);
	} catch (error: any) {
		return res.status(error.statusCode).json({ message: error.message });
	}
});

router.post('/adicionar', autenticarToken,   async (req: Request, res: Response) => {
	try {
		const alimentoAppPostPutDto: AlimentoAppPostPutDto = req.body;
		const result = await alimentoAppAdicionarService(alimentoAppPostPutDto)
		return res.status(201).json(result)
	} catch (error: any) {
		return res.status(error.statusCode).json({ message: error.message });
	}
});

router.delete('/remover', autenticarToken,   async (req: Request, res: Response) => {
	try {
		const alimentoAppGetDeleteDto: AlimentoAppGetDeleteDto = req.body;
		await alimentoAppRemoverService(alimentoAppGetDeleteDto);
		return res.status(204).json();
	} catch (error: any) {
		return res.status(error.statusCode).json({ message: error.message });
	}
});

export default router;