import express from 'express';
import usuarioController from './controllers/usuarioController';
import alimentoAppController from './controllers/alimentoAppController'
import refeicaoController from './controllers/refeicaoController'

const app = express();
const port = 3000;

app.use(express.json());
app.use('/usuarios', usuarioController);
app.use('/alimentosApp', alimentoAppController);
app.use('/refeicoes', refeicaoController);

app.listen(port, () => {
	console.log(`Servidor rodando em http://localhost:${port}`);
	console.log(`The connection URL is ${process.env.DATABASE_URL}`)
});
export default app;