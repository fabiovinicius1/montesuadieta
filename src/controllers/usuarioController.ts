import { Request, Response, Router } from 'express';
import { Usuario } from '../model/usuarioModel';
import { pesquisarUsuarioService } from '../services/usuario/usuarioPesquisarService';
import { atualizarPesoUsuarioService } from '../services/usuario/usuarioAtualizarPesoService';
import {adicionarUsuarioService  } from '../services/usuario/usuarioAdicionarService';

const router = Router();

router.get('/pesquisar_usuario', async (req: Request, res: Response) => {
  const loginUsuario = decodeURIComponent(req.query.login as string);
  const result = await pesquisarUsuarioService(loginUsuario);
  if (result) {
    return res.status(200).json(result);
  } else {
    return res.status(404).json({ message: "Usuario não encontrado" });
  }
});

router.post('/adicionar_usuario', async (req: Request, res: Response) => {
  const usuario:Usuario = req.body;
  const result = await adicionarUsuarioService(usuario);	
  if (result) {
    return res.status(201).json(result);
  } else {
    return res.status(404).json({ message: "Login já existente" });
  }
});

router.patch('/atualizar_peso_usuario', async (req: Request, res: Response) => {
  const login = req.query.login as string;
  const peso = req.body.peso;
  const result = await atualizarPesoUsuarioService(login,peso);
  if (result) {
    return res.json(result);
  } else {
    return res.status(404).json({ message: 'Usuário não encontrado' });
  }
});

export default router;
