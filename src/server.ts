import "express-async-errors"
import express from 'express';
import cors from 'cors';
import usuarioController from './controllers/usuarioController';
import alimentoAppController from './controllers/alimentoAppController'
import refeicaoController from './controllers/refeicaoController'
import authController from './controllers/authController'
import adminController from './controllers/adminController';
import { errorMiddleware } from "./middleware/errorHttp";
import { verificarConexaoDb } from "./middleware/verificaConexaoDb";

const app = express();
app.use(express.json());
const corsOptions = {
    origin: 'http://127.0.0.1:3030'
};
app.use(cors(corsOptions));
app.use(verificarConexaoDb);
app.use('/usuarios', usuarioController);
app.use('/alimentosApp', alimentoAppController);
app.use('/refeicoes', refeicaoController);
app.use('/auth', authController);
app.use('/admin', adminController);
app.use(errorMiddleware);

const server = app.listen(process.env.PORT, () => {
	console.log(`Servidor rodando em http://localhost:${process.env.PORT}`);
	console.log(`url = env(${process.env.DATABASE_URL})`)
});

export { app, server };