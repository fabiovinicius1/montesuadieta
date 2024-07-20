import express, { Request, Response } from 'express';


const app = express();
const port = 3000;


app.use(express.json());


app.get('/', (req: Request, res: Response) => {
  res.send('Hello, world!');
});

const alimentos = [
	{ id: 1, nome: "Maçã", kcal: 52, carboidrato: 14, gordura: 0.2, proteina: 0.3 },
	{ id: 2, nome: "Banana", kcal: 96, carboidrato: 27, gordura: 0.3, proteina: 1.3 },
	{ id: 3, nome: "Arroz Integral", kcal: 123, carboidrato: 25.6, gordura: 0.9, proteina: 2.7 },
	{ id: 4, nome: "Peito de Frango", kcal: 165, carboidrato: 0, gordura: 3.6, proteina: 31 },
	{ id: 5, nome: "Brócolis", kcal: 55, carboidrato: 11.2, gordura: 0.6, proteina: 3.7 }
];
app.get('/alimentos/pesquisar_alimento', (req: Request, res: Response) => {
	const nomeAlimento = decodeURIComponent(req.query.nome as string);
	const alimento = alimentos.find(a => a.nome === nomeAlimento);
	if (alimento) {
		return res.json(alimento);
	} else {
		return res.status(404).json({ message: "Alimento não encontrado" });
	}
	});

app.post('/alimentos/adicionar_alimento', (req: Request, res: Response) => {
	const alimento = req.body;
	alimentos.push(alimento);
	return res.json(alimento);
	});

const usuarios = [
	{ id: 1, nome: "joao", senha: "123" , peso: 72},
	{ id: 2, nome: "maria", senha: "3321" , peso: 52},
];
app.get('/usuarios/pesquisar_usuario', (req: Request, res: Response) => {
	const nomeUsuario = decodeURIComponent(req.query.nome as string);
	const usuario = usuarios.find(a => a.nome === nomeUsuario);
	if (usuario) {
		return res.json(usuario);
	} else {
		return res.status(404).json({ message: "Usuario não encontrado" });
	}
	});

app.post('/usuarios/adicionar_usuario', (req: Request, res: Response) => {
	const usuario = req.body;
	usuarios.push(usuario);
	return res.json(usuario);
	});

const refeicoes = [
	{ id: 1, nome_usuario: "joao", nome_refeicao: "refeicao1", lista_alimentos: ["Arroz Integral","Peito de Frango","Brócolis"]},
	{ id: 2, nome_usuario: "joao", nome_refeicao: "refeicao2", lista_alimentos: ["Arroz Integral","Peito de Frango","Banana"]},
	{ id: 3, nome_usuario: "joao", nome_refeicao: "refeicao3", lista_alimentos: ["Arroz Integral","Peito de Frango","Maçã"]}
]

app.get('/refeicoes/pesquisar_refeicao_usuario', (req: Request, res: Response) => {
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

app.post('/refeicoes/adicionar_refeicao_usuario', (req: Request, res: Response) => {
	const refeicao = req.body;
	refeicoes.push(refeicao);
	return res.json(refeicao);
	});
	
// app.post('/refeicoes/adicionar_alimento_refeicao_usuario', (req: Request, res: Response) => {
// 	const nomeUsuario = decodeURIComponent(req.query.nome as string);
// 	const refeicao = refeicoes.filter(a => a.nome_usuario === nomeUsuario);
// 	if (refeicao.length > 0) {
// 		const alimentos = req.body;
// 		refeicoes.push(alimentos);
// 		return res.json(alimentos);
// 	}else{
// 		return res.status(404).json({ message: "Usuario não possui refeição cadastrada" });
// 	}
// 	});


app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});