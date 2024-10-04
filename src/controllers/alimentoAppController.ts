import { Request, Response, Router } from 'express';
import { AlimentoAppGetDeleteDto, AlimentoAppGetDeleteSchema } from '../dto/alimentoAppDto/alimentoAppGetDeleteDto';
import { alimentoAppPesquisarService } from '../services/alimentoApp/alimentoAppPesquisarService';
import { AlimentoAppPostPutDto, AlimentoAppPostPutSchema } from '../dto/alimentoAppDto/alimentoAppPostPutDto';
import { alimentoAppAdicionarService } from '../services/alimentoApp/alimentoAppAdicionarService';
import { alimentoAppRemoverService } from '../services/alimentoApp/alimentoAppRemoverService';
import { autenticarToken } from '../middleware/autenticarToken';
import { validarDados } from '../middleware/validacao';
import { autorizarAcesso } from '../middleware/autorizarAcesso';
import { AlimentoAppGetDto, AlimentoAppGetDtoSchema } from '../dto/alimentoAppDto/alimentoAppGetDto';
import { alimentoAppPesquisarNomeService } from '../services/alimentoApp/alimentoAppPesquisarNomeService';

const router = Router();

router.get('/pesquisar', validarDados(AlimentoAppGetDeleteSchema), async (req: Request, res: Response) => {
	const alimentoAppGetDeleteDto: AlimentoAppGetDeleteDto = { id: Number(req.query.id) };
	const result = await alimentoAppPesquisarService(alimentoAppGetDeleteDto);
	return res.status(200).json(result);
});
router.get('/pesquisar/nome', validarDados(AlimentoAppGetDtoSchema), async (req: Request, res: Response) => {
	const alimentoAppGetDto: AlimentoAppGetDto = { nomeAlimentoApp: req.query.nomeAlimentoApp as string };
	const result = await alimentoAppPesquisarNomeService(alimentoAppGetDto);
	return res.status(200).json(result);
});
router.post('/adicionar', validarDados(AlimentoAppPostPutSchema), autenticarToken, autorizarAcesso, async (req: Request, res: Response) => {
	const alimentoAppPostPutDto: AlimentoAppPostPutDto = req.body;
	const result = await alimentoAppAdicionarService(alimentoAppPostPutDto)
	return res.status(201).json(result)

});

router.delete('/remover', validarDados(AlimentoAppGetDeleteSchema), autenticarToken, autorizarAcesso, async (req: Request, res: Response) => {
	const alimentoAppGetDeleteDto: AlimentoAppGetDeleteDto = req.body;
	await alimentoAppRemoverService(alimentoAppGetDeleteDto);
	return res.status(204).json();

});

export default router;