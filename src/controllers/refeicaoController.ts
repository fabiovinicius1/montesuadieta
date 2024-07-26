import { Request, Response, Router } from 'express';

const router = Router();
const refeicoes = [
	{ id: 1, nome_usuario: "joao", nome_refeicao: "refeicao1", lista_alimentos: [{ id: 3, nome: "Arroz Integral", kcal: 123, carboidrato: 25.6, gordura: 0.9, proteina: 2.7 },{ id: 4, nome: "Peito de Frango", kcal: 165, carboidrato: 0, gordura: 3.6, proteina: 31 }]},
	{ id: 2, nome_usuario: "joao", nome_refeicao: "refeicao2", lista_alimentos: [{ id: 3, nome: "Arroz Integral", kcal: 123, carboidrato: 25.6, gordura: 0.9, proteina: 2.7 },{ id: 4, nome: "Peito de Frango", kcal: 165, carboidrato: 0, gordura: 3.6, proteina: 31 }]},
	{ id: 3, nome_usuario: "joao", nome_refeicao: "refeicao3", lista_alimentos: [{ id: 3, nome: "Arroz Integral", kcal: 123, carboidrato: 25.6, gordura: 0.9, proteina: 2.7 },{ id: 4, nome: "Peito de Frango", kcal: 165, carboidrato: 0, gordura: 3.6, proteina: 31 }]}
]

router.get('/refeicoes/pesquisar_refeicao_usuario', (req: Request, res: Response) => {
	const nomeUsuario = decodeURIComponent(req.query.nome as string);
	const refeicao = refeicoes.filter(a => a.nome_usuario === nomeUsuario);
	if (refeicao.length > 0) {
		const resultado = refeicao.map(refeicao => ({
			nome_refeicao: refeicao.nome_refeicao,
			lista_alimentos: refeicao.lista_alimentos
		}));
		return res.json(resultado);
	} else {
		return res.status(404).json({ message: "Usuario não possui refeição cadastrada" });
	}
	});

router.post('/refeicoes/adicionar_refeicao_usuario', (req: Request, res: Response) => {
	const refeicao = req.body;
	refeicoes.push(refeicao);
	return res.json(refeicao);
	});
	
router.post('/refeicoes/adicionar_alimento_refeicao_usuario', (req: Request, res: Response) => {
	const nomeUsuario = decodeURIComponent(req.query.nome as string);
	const nomeRefeicao = decodeURIComponent(req.query.nome_refeicao as string);
	const refeicao = refeicoes.find(a => a.nome_usuario === nomeUsuario && a.nome_refeicao === nomeRefeicao);
	if (refeicao !== undefined) {
		const alimentos = req.body;
		refeicao.lista_alimentos.push(alimentos);
		return res.json(refeicoes);
	}else{
		return res.status(404).json({ message: "Usuario não possui refeição cadastrada" });
	}
	});

router.delete('/refeicoes/remover_alimento_refeicao_usuario', (req: Request, res: Response) => {
	const nomeUsuario = decodeURIComponent(req.query.nome as string);
	const nomeRefeicao = decodeURIComponent(req.query.nome_refeicao as string);
	const nomeAlimento = decodeURIComponent(req.query.nome_alimento as string);
	const refeicao = refeicoes.find(a => a.nome_usuario === nomeUsuario && a.nome_refeicao === nomeRefeicao);
	if (refeicao !== undefined) {
		const iRemove = refeicao.lista_alimentos.findIndex(a => a.nome === nomeAlimento);
		refeicao.lista_alimentos.splice(iRemove,1);
	}else{
		return res.status(404).json({ message: "Usuario não possui refeição cadastrada" });
	}
	});
export default router;