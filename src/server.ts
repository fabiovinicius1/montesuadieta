import express from 'express';
import usuarioController from './controllers/usuarioController';
import alimentoAppController from './controllers/alimentoAppController'
import refeicaoController from './controllers/refeicaoController'
import authController from './controllers/authController'

const app = express();
app.use(express.json());
app.use('/usuarios', usuarioController);
app.use('/alimentosApp', alimentoAppController);
app.use('/refeicoes', refeicaoController);
app.use('/auth', authController);
const server = app.listen(process.env.PORT, () => {
	console.log(`Servidor rodando em http://localhost:${process.env.PORT}`);
	console.log(`url = env(${process.env.DATABASE_URL})`)
});

export { app, server };