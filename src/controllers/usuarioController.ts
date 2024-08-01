import { Request, Response, Router } from 'express';
import { pesquisarUsuarioService } from '../services/usuario/usuarioPesquisarService';
import { atualizarPesoUsuarioService } from '../services/usuario/usuarioAtualizarPesoService';
import {adicionarUsuarioService  } from '../services/usuario/usuarioAdicionarService';
import { UsuarioGetDto } from '../dto/usuarioDto/usuarioGetDto';
import { UsuarioPatchPesoDto } from '../dto/usuarioDto/usuarioPatchPesoDto';
import { UsuarioPostPutDto } from '../dto/usuarioDto/usuarioPostPutDto';

const router = Router();

router.get('/pesquisar_usuario', async (req: Request, res: Response) => {
  const usuario:UsuarioGetDto = req.body;
  const result = await pesquisarUsuarioService(usuario.login);
  if (result) {
    return res.status(200).json(result);
  } else {
    return res.status(404).json({ message: "Usuario não encontrado" });
  }
});

router.post('/adicionar_usuario', async (req: Request, res: Response) => {
  const usuario:UsuarioPostPutDto = req.body;
  const result = await adicionarUsuarioService(usuario);	
  if (result) {
    return res.status(201).json(result);
  } else {
    return res.status(404).json({ message: "Login já existente" });
  }
});

router.patch('/atualizar_peso_usuario', async (req: Request, res: Response) => {
const usuario:UsuarioPatchPesoDto = req.body;
  const result = await atualizarPesoUsuarioService(usuario.login,usuario.peso);
  if (result) {
    return res.json(result);
  } else {
    return res.status(404).json({ message: 'Usuário não encontrado' });
  }
});

export default router;
