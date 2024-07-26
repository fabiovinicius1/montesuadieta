import express, { Request, Response } from 'express';
import usuarioController from './controllers/usuarioController';
import alimentoController from './controllers/alimentoController'
import refeicaoController from './controllers/refeicaoController'

const app = express();
const port = 3000;


app.use(express.json());
app.use('/usuarios', usuarioController);
app.use('/alimentos', alimentoController);
app.use('/refeicoes', refeicaoController);


app.get('/', (req: Request, res: Response) => {
  res.send('Hello, world!');
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});