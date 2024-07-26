import { Request, Response, Router } from 'express';

const router = Router();
const alimentos = [
	{ id: 1, nome: "Maçã", kcal: 52, carboidrato: 14, gordura: 0.2, proteina: 0.3 },
	{ id: 2, nome: "Banana", kcal: 96, carboidrato: 27, gordura: 0.3, proteina: 1.3 },
	{ id: 3, nome: "Arroz Integral", kcal: 123, carboidrato: 25.6, gordura: 0.9, proteina: 2.7 },
	{ id: 4, nome: "Peito de Frango", kcal: 165, carboidrato: 0, gordura: 3.6, proteina: 31 },
	{ id: 5, nome: "Brócolis", kcal: 55, carboidrato: 11.2, gordura: 0.6, proteina: 3.7 }
];
router.get('/alimentos/pesquisar_alimento', (req: Request, res: Response) => {
	const nomeAlimento = decodeURIComponent(req.query.nome as string);
	const alimento = alimentos.find(a => a.nome === nomeAlimento);
	if (alimento) {
		return res.json(alimento);
	} else {
		return res.status(404).json({ message: "Alimento não encontrado" });
	}
	});

router.post('/alimentos/adicionar_alimento', (req: Request, res: Response) => {
	const alimento = req.body;
	alimentos.push(alimento);
	return res.json(alimento);
	});

export default router;