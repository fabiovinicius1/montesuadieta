import { Request, Response, Router } from 'express';

const router = Router();

const usuarios = [
  { id: 1, nome: "joao", senha: "123", peso: 72 },
  { id: 2, nome: "maria", senha: "3321", peso: 52 },
];

router.get('/pesquisar_usuario', (req: Request, res: Response) => {
  const nomeUsuario = decodeURIComponent(req.query.nome as string);
  const usuario = usuarios.find(a => a.nome === nomeUsuario);
  if (usuario) {
    return res.json(usuario);
  } else {
    return res.status(404).json({ message: "Usuario não encontrado" });
  }
});

router.post('/adicionar_usuario', (req: Request, res: Response) => {
  const usuario = req.body;
  usuarios.push(usuario);
  return res.json(usuario);
});

router.patch('/atualizar_peso_usuario', (req: Request, res: Response) => {
  const nome = req.query.nome as string;
  const peso = req.body.peso;

  const usuario = usuarios.find(a => a.nome === nome);

  if (usuario !== undefined) {
    usuario.peso = peso;
    return res.json(usuario);
  } else {
    return res.status(404).json({ message: 'Usuário não encontrado' });
  }
});

export default router;
